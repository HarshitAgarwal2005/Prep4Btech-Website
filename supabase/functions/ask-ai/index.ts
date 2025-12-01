import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Standard CORS headers
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { question, subject } = await req.json();

    // 1. Construct the Prompt
    // You can inject data from your contentData.ts here if you pass it in, 
    // or just use the subject as context.
    const systemPrompt = `You are an expert engineering tutor for RTU B.Tech students. 
    The student is asking a doubt related to the subject: "${subject}".
    Answer clearly and concisely. If the question is too complex or requires specific 
    diagrams you cannot generate, advise them to "Ask a Mentor".`;

    // 2. Call AI Provider (Example: Gemini API or OpenAI)
    // You will need to add your API Key to Supabase secrets
    const apiKey = Deno.env.get('GEMINI_API_KEY'); 
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemPrompt}\n\nQuestion: ${question}` }]
        }]
      })
    });

    const data = await response.json();
    const aiAnswer = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ answer: aiAnswer }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});