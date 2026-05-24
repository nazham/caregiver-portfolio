import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { careNeeds } = await request.json();

    if (!careNeeds || typeof careNeeds !== 'string' || !careNeeds.trim()) {
      return NextResponse.json({ error: 'careNeeds query parameter is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Return 500 so clientside knows to fallback to local mock generator
      return NextResponse.json({ error: 'Gemini API key is not configured on the server.' }, { status: 500 });
    }

    const model = "gemini-2.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ 
        parts: [{ text: `Create a sample daily home care schedule for a patient with these details: ${careNeeds}` }] 
      }],
      systemInstruction: {
        parts: [{ text: "You are an expert caregiver assistant. Create a safe, professional, and compassionate sample daily care schedule. Ensure it sounds like a professional caregiver outlining their shift. Do not provide medical diagnoses, just standard caregiving support." }]
      },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            title: { type: "STRING", description: "Title of the care plan" },
            intro: { type: "STRING", description: "A brief, encouraging intro sentence" },
            schedule: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  timeOfDay: { type: "STRING", description: "e.g., Morning, 8:00 AM" },
                  task: { type: "STRING", description: "Main task, e.g., Medication & Breakfast" },
                  description: { type: "STRING", description: "Brief description of how the caregiver helps" }
                },
                required: ["timeOfDay", "task", "description"]
              }
            }
          },
          required: ["title", "intro", "schedule"]
        }
      }
    };

    // Exponential backoff retry helper
    const fetchWithRetry = async (targetUrl: string, options: RequestInit, maxRetries = 3) => {
      for (let i = 0; i < maxRetries; i++) {
        try {
          const response = await fetch(targetUrl, options);
          if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`HTTP ${response.status}: ${errBody}`);
          }
          return await response.json();
        } catch (e) {
          if (i === maxRetries - 1) throw e;
          // Wait 1s, 2s, 4s...
          await new Promise(res => setTimeout(res, Math.pow(2, i) * 1000));
        }
      }
    };

    const data = await fetchWithRetry(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (responseText) {
      const planJson = JSON.parse(responseText);
      return NextResponse.json(planJson);
    } else {
      return NextResponse.json({ error: 'Failed to generate content structure' }, { status: 502 });
    }

  } catch (err) {
    console.error("Gemini Route API Error: ", err);
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
