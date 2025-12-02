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
    const { question, subject, branch, semester } = await req.json();

    // 1. Construct the Prompt
    // You can inject data from your contentData.ts here if you pass it in, 
    // or just use the subject as context.
    const systemPrompt = `You are an expert engineering tutor for RTU B.Tech students.
      
      Context:
      - Branch: ${branch || 'General Engineering'}
      - Semester: ${semester || 'General'}
      - Subject: ${subject}

      Task:
      Answer the student's doubt: "${question}"
      
      Guidelines:
      - Be concise and clear.
      - Use markdown for formatting (bold key terms, lists for steps).
      - If the question is about code, provide a short snippet.
      - If the question is unrelated to studies, politely refuse.`;

    // 2. Call AI Provider (Example: Gemini API or OpenAI)
    // You will need to add your API Key to Supabase secrets
    const apiKey = Deno.env.get('GEMINI_API_KEY'); 
    if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }]
      })
    });

    const data = await response.json();
    
    // Check for API errors
    if (!data.candidates || data.candidates.length === 0) {
      console.error("Gemini Error:", data);
      throw new Error("AI could not generate a response.");
    }

    const aiAnswer = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ answer: aiAnswer }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});