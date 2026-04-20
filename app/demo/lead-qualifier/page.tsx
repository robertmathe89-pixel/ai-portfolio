'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMessageCircle, FiSend, FiUser, FiTarget, FiArrowLeft } from 'react-icons/fi'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function LeadQualifier() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! 👋 I\'m your AI assistant. I\'d love to learn more about you and how I can help. Let\'s start - what\'s your name and what brings you here today?' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messages.concat({ role: 'user', content: userMessage }) }),
      })

      const data = await res.json()
      if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I\'m having trouble connecting right now. Please try again!' }])
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Oops! Something went wrong. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="py-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold gradient-text">AI.Portfolio</a>
          <a href="/#case-studies" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <FiArrowLeft className="w-4 h-4" />
            Back
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            ✨ Interactive Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Lead Qualifier Chatbot</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI-powered chatbot that qualifies leads through conversation.
            Try chatting below!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card overflow-hidden"
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <FiMessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">AI Qualifier</div>
              <div className="text-sm text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${
                  msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r from-primary to-secondary'
                  }`}>
                    {msg.role === 'user' ? (
                      <FiUser className="w-4 h-4" />
                    ) : (
                      <FiTarget className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-secondary rounded-br-md'
                      : 'glass rounded-bl-md'
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <FiTarget className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass p-4 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl glass focus:border-primary focus:outline-none"
                disabled={isLoading}
              />
              <motion.button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                className="px-5 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center gap-2 disabled:opacity-50"
              >
                <FiSend className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
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