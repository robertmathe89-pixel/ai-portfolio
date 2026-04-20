// Groq API utilities for free AI calls

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || 'gsk_XXXX'
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

export async function generateContent(prompt: string, systemPrompt: string = 'You are a helpful AI assistant.') {
  try {
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
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Groq API error:', error)
      return { error: 'API error occurred' }
    }

    const data = await response.json()
    return { content: data.choices[0]?.message?.content || '' }
  } catch (error) {
    console.error('Groq API error:', error)
    return { error: 'Failed to connect to AI service' }
  }
}

export async function generateBlogPost(topic: string, tone: string = 'Professional') {
  const prompt = `Write a compelling blog post about "${topic}". 
Tone: ${tone}.
Include:
- A catchy headline
- An introduction (2-3 sentences)
- 3-4 main sections with subheadings
- A conclusion

Make it engaging and around 500-700 words.`
  
  return generateContent(prompt, `You are an expert content writer known for engaging ${tone.toLowerCase()} blog posts.`)
}

export async function generateSocialMedia(topic: string, platform: string = 'LinkedIn') {
  const prompt = `Create a compelling ${platform} post about "${topic}".
- Keep it brief and engaging
- Include a call to action if appropriate
- Add relevant hashtags (3-5)
- Make it professional yet personable`
  
  return generateContent(prompt, `You are a social media expert who creates viral ${platform} content.`)
}

export async function qualifyLead(answers: { question: string; answer: string }[]) {
  const context = answers.map(a => `${a.question}: ${a.answer}`).join('\n')
  
  const prompt = `Analyze these lead qualification responses and determine:
1. Budget range (Low <$1k, Medium $1k-$10k, High $10k+)
2. Timeline (Immediate, 1-3 months, 3+ months)
3. Decision authority (Yes, No, Partial)
4. Fit score (1-10)
5. Brief summary and recommendation

Lead responses:
${context}

Respond in this format:
BUDGET: [Low/Medium/High]
TIMELINE: [Immediate/1-3 months/3+ months]
DECISION: [Yes/No/Partial]
FIT: [1-10]
SUMMARY: [2-3 sentence summary]
RECOMMENDATION: [Hot/Warm/Cold]`

  return generateContent(prompt, 'You are an expert sales qualification assistant.')
}

export async function analyzeAutomation(opportunity: string) {
  const prompt = `Analyze this business process for automation opportunities:

Process: ${opportunity}

For each potential automation:
1. Identify the repetitive tasks
2. Estimate time saved per week
3. Suggest tools or approach
4. Mention complexity (Easy/Medium/Hard)

Respond in a structured format with clear sections.`

  return generateContent(prompt, 'You are a business automation expert.')
}