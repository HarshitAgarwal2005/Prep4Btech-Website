import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Define CORS headers for security. This is correct.
export const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://prep4btech.netlify.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Interface for the incoming request data
interface DoubtRequest {
  subject: string;
  doubt: string;
  imageUrl?: string; // It's better to be specific that this is a URL
  userEmail?: string;
  userName?: string;
}

// The main function that handles requests
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Get data from the request body
    const { subject, doubt, imageUrl, userEmail, userName }: DoubtRequest = await req.json();

    // 2. Validate that required fields are present
    if (!subject || !doubt) {
      return new Response(
        JSON.stringify({ error: 'Subject and doubt are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 3. Initialize the Supabase client using secrets
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // 4. Insert the doubt submission into the database FIRST
    const { error: dbError } = await supabaseClient
      .from('doubts')
      .insert({
        subject: subject,
        doubt: doubt,
        image_url: imageUrl,
        user_email: userEmail,
        user_name: userName,
      });

    // If database insertion fails, stop immediately and return an error
    if (dbError) {
      // Log the detailed error for debugging on the server
      console.error('Database Error:', dbError.message);
      // Return a generic error to the client
      throw new Error('Could not save submission to the database.');
    }

    // 5. If database write is successful, proceed to send the email
    // IMPORTANT: Paste your full HTML email body here
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
                   Image URL: <a href="${imageUrl}">${imageUrl}</a>
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

    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: Deno.env.get('EMAILJS_SERVICE_ID'),
        template__id: Deno.env.get('EMAILJS_TEMPLATE_ID'),
        user_id: Deno.env.get('EMAILJS_USER_ID'),
        template_params: {
          to_email: 'prep4btech@gmail.com',
          subject: `New Doubt: ${subject}`,
          message: emailBody,
          from_name: userName || 'Prep4Btech Student',
          reply_to: userEmail || 'noreply@prep4btech.netlify.app'
        }
      })
    });

    if (!emailResponse.ok) {
      // The doubt is saved, but the email failed. Log this for monitoring.
      console.warn(`Database entry was saved, but email sending failed for subject: "${subject}"`);
    }

    // 6. Return a final success response to the client
    return new Response(
      JSON.stringify({ success: true, message: 'Doubt submitted successfully!' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    // Catch any error from the process and return a generic server error
    console.error('Error processing doubt submission:', error.message);
    return new Response(
      JSON.stringify({ error: 'Failed to submit doubt. Please try again later.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});;
