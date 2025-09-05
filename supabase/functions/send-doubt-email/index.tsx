import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// supabase/functions/send-doubt-email/index.ts

// These headers are perfect.
export const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://prep4btech.netlify.app', // Use your exact frontend origin, not '*'
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400', // Optional: cache preflight requests
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { status: 200, headers: corsHeaders })
  }
  // ... rest of your code
})
//export PATH="$HOME/.npm-global/bin:$PATH"
interface DoubtRequest {
  subject: string
  doubt: string
  image?: string
  userEmail?: string
  userName?: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { subject, doubt, image, userEmail, userName }: DoubtRequest = await req.json()

    // Validate required fields
    if (!subject || !doubt) {
      return new Response(
        JSON.stringify({ error: 'Subject and doubt are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create email content
    const emailSubject = `New Doubt Submission: ${subject}`
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
              
              ${image ? `
                <h3 style="color: #1E293B;">Attached Image:</h3>
                <p style="background: white; padding: 10px; border-radius: 4px;">
                  <em>Image attachment included in submission</em>
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
    `

    // Send email using a service (you'll need to configure this)
    // For now, we'll use a simple fetch to a service like EmailJS or similar
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_ohe32lp', // You'll need to configure EmailJS
        template_id: 'template_6xvepac',
        user_id: 'V3Z5rp8_sZmh52g1M',
        template_params: {
          to_email: 'prep4btech@gmail.com',
          subject: emailSubject,
          message: emailBody,
          from_name: userName || 'Prep4Btech Student',
          reply_to: userEmail || 'noreply@prep4btech.netlify.app'
        }
      })
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Doubt submitted successfully! You will receive a response soon.' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing doubt submission:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to submit doubt. Please try again later.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})