import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { question, subject, branch, semester } = await req.json();

    const apiKey = Deno.env.get('GEMINI_API_KEY');
    if (!apiKey) {
      throw new Error("Missing GEMINI_API_KEY in Supabase secrets");
    }

    const systemPrompt = `
      You are an expert engineering tutor for B.Tech students.
      Context: Branch: ${branch || 'General'}, Semester: ${semester || 'General'}, Subject: ${subject}.
      Task: Answer the student's doubt: "${question}".
      Keep it clear, concise, and academic.
    `;

    // Call Google Gemini API with Safety Settings
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }],
        // Add safety settings to prevent random blocks
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ]
      })
    });

    const data = await response.json();

    // 1. Handle Google API specific errors (e.g., Invalid Key, Quota)
    if (data.error) {
      console.error("Gemini API Error:", data.error);
      throw new Error(`Gemini API Error: ${data.error.message}`);
    }

    // 2. Handle empty candidates (Safety blocks)
    if (!data.candidates || data.candidates.length === 0) {
      console.error("No candidates returned. Full response:", JSON.stringify(data));
      
      if (data.promptFeedback && data.promptFeedback.blockReason) {
        throw new Error(`AI blocked content: ${data.promptFeedback.blockReason}`);
      }
      throw new Error("AI returned no response. Try rephrasing.");
    }

    const aiAnswer = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ answer: aiAnswer }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Edge Function Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});