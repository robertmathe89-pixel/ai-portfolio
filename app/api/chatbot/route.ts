import { NextResponse } from 'next/server'

const GROQ_API_KEY = process.env.GROQ_API_KEY || ''
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

// Demo chatbot responses for when API is unavailable
const demoResponses = [
  "That's interesting! To help you better, could you tell me more about what specific challenge you're trying to solve?",
  "I see! Having a clear understanding of your goals helps me assist you better. What's your timeline for implementing a solution?",
  "Great! One more question - what's your approximate budget for this project? This helps me tailor my recommendations.",
  "Thank you for that information! Based on what you've shared, I'd say you're a warm lead. Let me connect you with a specialist who can help. 📞",
]

let responseIndex = 0

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // If no API key, use demo responses
    if (!GROQ_API_KEY || GROQ_API_KEY === '') {
      const response = demoResponses[responseIndex % demoResponses.length]
      responseIndex++
      
      return NextResponse.json({ 
        response,
        demo: true,
        note: 'Demo mode - Add Groq API key for live AI chat'
      })
    }

    const systemPrompt = `You are a lead qualification chatbot for an AI automation agency. Your goal is to qualify potential clients by asking relevant questions.
Ask one question at a time. Collect:
1. Company/Name
2. What they need help with
3. Budget
4. Timeline

Be friendly, professional, and conversational. After collecting enough info, summarize and give a recommendation (Hot/Warm/Cold).`

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 512,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ 
        response: demoResponses[responseIndex % demoResponses.length],
        demo: true,
      })
    }

    const data = await response.json()
    return NextResponse.json({ response: data.choices[0]?.message?.content || '' })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ 
      response: demoResponses[responseIndex % demoResponses.length],
      demo: true,
    })
  }
}