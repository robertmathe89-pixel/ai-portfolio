import { NextResponse } from 'next/server'

const GROQ_API_KEY = process.env.GROQ_API_KEY || ''
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

// Demo responses when no API key
const demoResponses: Record<string, string> = {
  blog: `#The Future of AI in Business

##Introduction

Artificial Intelligence is no longer just a buzzword—it's a transformative force reshaping how businesses operate. From automated customer service to predictive analytics, AI is making businesses more efficient and competitive.

##Key Benefits

1. **Increased Efficiency**: AI automates repetitive tasks, freeing employees to focus on higher-value work.
2. **Better Decision Making**: Machine learning provides insights from data that humans might miss.
3. **Enhanced Customer Experience**: AI-powered chatbots provide 24/7 support.

##Implementation Strategies

Start small with pilot projects. Identify specific pain points where AI can deliver quick wins. Then scale based on results.

##Conclusion

The businesses that embrace AI today will lead tomorrow. Don't get left behind.`,
  social: `🚀 The future of AI in business is here—are you ready?

AI isn't just for tech companies anymore. Every business can benefit from intelligent automation.

What I've learned:
→ Start small, think big
→ Focus on real problems
→ Measure everything

What's your biggest business challenge? 👇

#AI #Business #Innovation #Tech #Future`,
}

export async function POST(request: Request) {
  try {
    const { type, topic, tone, platform } = await request.json()

    // If no API key, use demo responses
    if (!GROQ_API_KEY || GROQ_API_KEY === '') {
      const demoContent = demoResponses[type] || demoResponses.blog
      return NextResponse.json({ 
        content: demoContent,
        demo: true,
        note: 'Demo mode - Add your Groq API key for live AI generation'
      })
    }

    let systemPrompt = ''
    let userPrompt = ''

    if (type === 'blog') {
      systemPrompt = 'You are an expert content writer known for engaging blog posts.'
      userPrompt = `Write a compelling blog post about "${topic}". 
Tone: ${tone || 'Professional'}.
Include:
- A catchy headline
- An introduction (2-3 sentences)
- 3-4 main sections with subheadings
- A conclusion

Make it engaging and around 500-700 words.`
    } else if (type === 'social') {
      systemPrompt = `You are a social media expert who creates viral ${platform || 'LinkedIn'} content.`
      userPrompt = `Create a compelling ${platform || 'LinkedIn'} post about "${topic}".
- Keep it brief and engaging
- Include a call to action if appropriate
- Add relevant hashtags (3-5)
- Make it professional yet personable`
    }

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
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    })

    if (!response.ok) {
      // Fall back to demo response on API error
      return NextResponse.json({ 
        content: demoResponses[type] || demoResponses.blog,
        demo: true,
        note: 'Using demo response - API unavailable'
      })
    }

    const data = await response.json()
    return NextResponse.json({ content: data.choices[0]?.message?.content || '' })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ 
      content: demoResponses.blog,
      demo: true,
      note: 'Using demo response - connection failed'
    }, { status: 500 })
  }
}