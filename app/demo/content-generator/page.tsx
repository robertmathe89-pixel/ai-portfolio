'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCopy, FiCheck, FiEdit3, FiHash, FiTarget } from 'react-icons/fi'

const contentTypes = [
  { id: 'blog', label: 'Blog Post', icon: FiEdit3 },
  { id: 'social', label: 'Social Media', icon: FiHash },
]

const tones = ['Professional', 'Casual', 'Technical', 'Friendly', 'Inspiring']
const platforms = ['LinkedIn', 'Twitter', 'Instagram', 'Facebook']

export default function ContentGenerator() {
  const [topic, setTopic] = useState('')
  const [contentType, setContentType] = useState('blog')
  const [tone, setTone] = useState('Professional')
  const [platform, setPlatform] = useState('LinkedIn')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    if (!topic.trim()) return
    
    setIsGenerating(true)
    setGeneratedContent('')

    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: contentType, topic, tone, platform }),
      })

      const data = await res.json()
      if (data.content) {
        setGeneratedContent(data.content)
      } else {
        setGeneratedContent('Unable to generate content. Please try again.')
      }
    } catch (error) {
      setGeneratedContent('Error connecting to AI service.')
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="py-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <a href="/" className="text-2xl font-bold gradient-text">AI.Portfolio</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            ✨ Interactive Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI Content Generator</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Generate engaging blog posts and social media content from any topic using AI.
            Try it below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">
                What do you want to write about?
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., The future of AI in business"
                className="w-full px-4 py-3 rounded-xl glass focus:border-primary focus:outline-none text-lg"
              />
            </div>

            <div className="glass-card p-6">
              <label className="block text-gray-400 mb-4 text-sm uppercase tracking-wider">
                Content Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setContentType(type.id)}
                    className={`p-4 rounded-xl flex items-center gap-3 transition-all ${
                      contentType === type.id
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'glass hover:bg-white/10'
                    }`}
                  >
                    <type.icon className="w-5 h-5" />
                    <span className="font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {contentType === 'blog' ? (
              <div className="glass-card p-6">
                <label className="block text-gray-400 mb-4 text-sm uppercase tracking-wider">
                  Tone
                </label>
                <div className="flex flex-wrap gap-2">
                  {tones.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        tone === t
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'glass hover:bg-white/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="glass-card p-6">
                <label className="block text-gray-400 mb-4 text-sm uppercase tracking-wider">
                  Platform
                </label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        platform === p
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'glass hover:bg-white/10'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <motion.button
              onClick={handleGenerate}
              disabled={isGenerating || !topic.trim()}
              whileHover={{ scale: isGenerating ? 1 : 1.02 }}
              whileTap={{ scale: isGenerating ? 1 : 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <FiTarget className="w-5 h-5" />
                  Generate Content
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Output Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card p-6 min-h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Generated Content</h3>
                {generatedContent && (
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    {copied ? <FiCheck className="w-5 h-5 text-green-400" /> : <FiCopy className="w-5 h-5" />}
                  </button>
                )}
              </div>
              
              {generatedContent ? (
                <div className="prose prose-invert max-w-none">
                  {generatedContent.split('\n').map((line, i) => {
                    const trimmed = line.trim()
                    if (!trimmed) return null
                    if (trimmed.startsWith('#') || trimmed.match(/^[A-Z][^.!?]*:$/)) {
                      return (
                        <h4 key={i} className="text-lg font-semibold text-primary mt-6 mb-2">
                          {trimmed.replace(/^#\s*/, '')}
                        </h4>
                      )
                    }
                    return (
                      <p key={i} className="text-gray-300 mb-3 leading-relaxed">
                        {trimmed}
                      </p>
                    )
                  })}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <FiEdit3 className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>Your generated content will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <a href="/" className="text-primary hover:underline">
            ← Back to Portfolio
          </a>
        </div>
      </footer>
    </div>
  )
}