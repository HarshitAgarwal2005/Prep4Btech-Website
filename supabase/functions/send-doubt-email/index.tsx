import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// CORS headers that your browser needs to see in the OPTIONS response
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Changed from specific domain to allow all origins during testing
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface DoubtRequest {
  subject: string;
  doubt: string;
  imageUrl?: string;
  userEmail?: string;
  userName?: string;
}

serve(async (req) => {
  console.log(`Function invoked. Method: ${req.method}, URL: ${req.url}`);

  // Handle CORS preflight request
  if (req.method == 'OPTIONS') {
    // console.log('Handling OPTIONS preflight request.');
    // return new Response('ok', { 
    //   status: 200, // Explicitly set status to 200
    //   headers: corsHeaders 
    // });
    return new Response('ok', { headers: corsHeaders })
  }

  // Only allow POST requests for the main functionality
  if (req.method != 'POST') {
    console.log(`Method ${req.method} not allowed`);
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }

  try {
    console.log('Verifying environment variables...');
    
    // Check for all required secrets at the start
    const requiredEnv = [
      'SUPABASE_URL',
      'SUPABASE_SERVICE_ROLE_KEY',
      'EMAILJS_SERVICE_ID',
      'EMAILJS_TEMPLATE_ID',
      'EMAILJS_USER_ID'
    ];
    
    for (const key of requiredEnv) {
      if (!Deno.env.get(key)) {
        console.error(`Missing required environment variable: ${key}`);
        throw new Error(`Missing required environment variable: ${key}`);
      }
    }
    console.log('All required environment variables are present.');

    console.log('Processing POST request.');
    
    let requestData: DoubtRequest;
    try {
      requestData = await req.json();
    } catch (jsonError) {
      console.error('Failed to parse JSON:', jsonError);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { subject, doubt, imageUrl, userEmail, userName } = requestData;
    console.log(`Received data for subject: "${subject}"`);

    // Validate required fields
    if (!subject || !doubt) {
      console.log('Validation failed: Subject or doubt is missing.');
      return new Response(
        JSON.stringify({ error: 'Subject and doubt are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Initializing Supabase client...');
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );
    console.log('Supabase client initialized.');

    console.log('Attempting to insert into "doubts" table...');
    const { error: dbError } = await supabaseClient
      .from('doubts')
      .insert({
        subject,
        doubt,
        image_url: imageUrl,
        user_email: userEmail,
        user_name: userName,
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error('Database insertion failed:', dbError);
      throw new Error(`Database Error: ${dbError.message}`);
    }
    console.log('Database insert successful.');

    // Email body with proper HTML structure
    const emailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              📚 New Doubt Submission - Prep4Btech
            </h2>
            <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1E293B; margin-top: 0;">Subject:</h3>
              <p style="background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #4F46E5;">
                ${subject}
              </p>
              <h3 style="color: #1E293B;">Question/Doubt:</h3>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10B981;">
                ${doubt.replace(/\n/g, '<br>')}
              </div>
              ${userEmail ? `
                <h3 style="color: #1E293B;">Student Email:</h3>
                <p style="background: white; padding: 10px; border-radius: 4px;">
                  <a href="mailto:${userEmail}" style="color: #4F46E5;">${userEmail}</a>
                </p>
              ` : ''}
              ${userName ? `
                <h3 style="color: #1E293B;">Student Name:</h3>
                <p style="background: white; padding: 10px; border-radius: 4px;">
                  ${userName}
                </p>
              ` : ''}
              ${imageUrl ? `
                <h3 style="color: #1E293B;">Attached Image:</h3>
                 <p style="background: white; padding: 10px; border-radius: 4px;">
                   Image URL: <a href="${imageUrl}" target="_blank">${imageUrl}</a>
                 </p>
              ` : ''}
            </div>
            <div style="background: #EEF2FF; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #4338CA;">
                <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0; text-align: center;">
              <p style="color: #64748B; font-size: 14px;">
                This email was sent from Prep4Btech - Academic Resource Platform<br>
                <a href="https://prep4btech.netlify.app" style="color: #4F46E5;">Visit Prep4Btech</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    console.log('Attempting to send email via EmailJS...');
    try {
      const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: Deno.env.get('EMAILJS_SERVICE_ID'),
          template_id: Deno.env.get('EMAILJS_TEMPLATE_ID'),
          user_id: Deno.env.get('EMAILJS_USER_ID'),
          template_params: {
            to_email: 'prep4btech@gmail.com',
            subject: `New Doubt: ${subject}`,
            message: emailBody,
            from_name: userName || 'Prep4btech Student',
            reply_to: userEmail || 'noreply@prep4btech.netlify.app'
          }
        })
      });
      
      console.log(`EmailJS API response status: ${emailResponse.status}`);
      
      if (!emailResponse.ok) {
        const emailErrorText = await emailResponse.text();
        console.warn(`Email sending failed for subject: "${subject}". Response: ${emailErrorText}`);
      } else {
        console.log('Email sent successfully.');
      }
    } catch (emailError) {
      console.warn(`Database entry was saved, but email sending failed for subject: "${subject}". Error:`, emailError);
    }

    console.log('Function finished successfully. Sending 200 response.');
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Doubt submitted successfully!' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('An error occurred in the main try-catch block:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to submit doubt. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    ); 
  }
};
serve(handler);