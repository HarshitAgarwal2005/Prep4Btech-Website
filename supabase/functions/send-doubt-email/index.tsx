import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { decode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

// CORS headers
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface DoubtRequest {
  subject: string;
  doubt: string;
  image?: string;
  userEmail?: string;
  userName?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const requiredEnv = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_USER_ID'];
    for (const key of requiredEnv) {
      if (!Deno.env.get(key)) {
        throw new Error(`Missing required environment variable: ${key}`);
      }
    }

    const { subject, doubt, image, userEmail, userName }: DoubtRequest = await req.json();

    if (!subject || !doubt || !userEmail) {
      return new Response(JSON.stringify({ error: 'Subject, doubt, and email are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    let publicImageUrl: string | undefined = undefined;

    if (image) {
      try {
        const matches = image.match(/^data:(.+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
          throw new Error('Invalid image data format.');
        }

        const contentType = matches[1];
        const base64Data = matches[2];
        const imageBuffer = decode(base64Data);
        const fileExtension = contentType.split('/')[1];
        const fileName = `doubt-${Date.now()}.${fileExtension}`;
        const filePath = `public/${fileName}`;

        const { data: uploadData, error: uploadError } = await supabaseClient.storage
          .from('doubts-images')
          .upload(filePath, imageBuffer, {
            contentType: contentType,
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) {
          throw new Error(`Storage Error: ${uploadError.message}`);
        }

        const { data: urlData } = supabaseClient.storage.from('doubts-images').getPublicUrl(uploadData.path);
        publicImageUrl = urlData.publicUrl;

      } catch (uploadError) {
        console.warn(`Image upload failed: ${uploadError.message}. Proceeding without image.`);
      }
    }

    const { error: dbError } = await supabaseClient
      .from('doubts')
      .insert({
        subject,
        doubt,
        image_url: publicImageUrl,
        user_email: userEmail,
        user_name: userName,
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      throw new Error(`Database Error: ${dbError.message}`);
    }
    
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
              ${publicImageUrl ? `
                <h3 style="color: #1E293B;">Attached Image:</h3>
                 <div style="background: white; padding: 10px; border-radius: 4px;">
                   <a href="${publicImageUrl}" target="_blank">
                     <img src="${publicImageUrl}" alt="Doubt image" style="max-width: 100%; height: auto; border-radius: 4px;">
                   </a>
                 </div>
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

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
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
        },
      }),
    });

    return new Response(JSON.stringify({ success: true, message: 'Doubt submitted successfully!' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('An error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit doubt.', details: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
