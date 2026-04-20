'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiActivity, FiArrowRight, FiClock, FiZap, FiCheckCircle, FiGrid, FiRepeat } from 'react-icons/fi'

type Automation = {
  id: string
  name: string
  description: string
  timeSaved: string
  complexity: 'Easy' | 'Medium' | 'Hard'
  tasks: string[]
}

export default function AutomationDemo() {
  const [process, setProcess] = useState('')
  const [analysis, setAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const [demoOutput, setDemoOutput] = useState<string[]>([])

  const runDemo = async () => {
    setShowDemo(true)
    setDemoOutput([])
    
    const steps = [
      '🔍 Analyzing your workflow...',
      '⚡ Identifying repetitive tasks...',
      '📊 Calculating time savings...',
      '✨ Automation ready!',
    ]

    for (const step of steps) {
      await new Promise(r => setTimeout(r, 800))
      setDemoOutput(prev => [...prev, step])
    }
  }

  const handleAnalyze = async () => {
    if (!process.trim()) return
    
    setIsAnalyzing(true)
    setAnalysis(null)

    await new Promise(r => setTimeout(r, 1500))

    setAnalysis({
      opportunities: [
        {
          task: 'Data Entry',
          frequency: '50x/day',
          timePerTask: '5 min',
          totalTime: '~4 hrs/day',
          suggestion: 'Use OCR + AI to extract and auto-fill data',
        },
        {
          task: 'Report Generation',
          frequency: '10x/day', 
          timePerTask: '15 min',
          totalTime: '~2.5 hrs/day',
          suggestion: 'Automate with scheduled report templates',
        },
        {
          task: 'Email Notifications',
          frequency: '100x/day',
          timePerTask: '2 min',
          totalTime: '~3 hrs/day',
          suggestion: 'Set up automated triggers and templates',
        },
      ],
      totalSavings: '9.5 hrs/day',
     roi: '190%',
    })

    setIsAnalyzing(false)
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
            <span className="gradient-text">Business Process Automation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how much time and money your business can save with automation.
            Try the demo below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">
                Describe your business process
              </label>
              <textarea
                value={process}
                onChange={(e) => setProcess(e.target.value)}
                placeholder="e.g., Every morning I review customer emails, categorize them by type, respond to urgent ones, update the spreadsheet, and send a summary report to the team..."
                className="w-full px-4 py-3 rounded-xl glass focus:border-primary focus:outline-none h-48 resize-none"
              />
            </div>

            <motion.button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !process.trim()}
              whileHover={{ scale: isAnalyzing ? 1 : 1.02 }}
              whileTap={{ scale: isAnalyzing ? 1 : 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  <FiActivity className="w-5 h-5" />
                  Analyze Process
                </>
              )}
            </motion.button>

            {/* Demo Mode */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Demo</h3>
              <p className="text-gray-400 mb-4">See automation in action without entering data.</p>
              
              {!showDemo ? (
                <motion.button
                  onClick={runDemo}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 glass rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  <FiZap className="w-5 h-5" />
                  Run Sample Automation
                </motion.button>
              ) : (
                <div className="space-y-2">
                  {demoOutput.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 rounded-xl glass flex items-center gap-3"
                    >
                      <CheckCircleAnimated />
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {analysis ? (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-6 text-center">
                    <FiClock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl font-bold gradient-text">{analysis.totalSavings}</div>
                    <div className="text-gray-400 text-sm">Time Saved Daily</div>
                  </div>
                  <div className="glass-card p-6 text-center">
                    <FiZap className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <div className="text-3xl font-bold gradient-text">{analysis.roi}</div>
                    <div className="text-gray-400 text-sm">ROI Increase</div>
                  </div>
                </div>

                {/* Opportunities */}
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Automation Opportunities</h3>
                  <div className="space-y-4">
                    {analysis.opportunities.map((opp: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 rounded-xl glass"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{opp.task}</span>
                          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                            Save {opp.totalTime}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400 mb-2">
                          {opp.frequency} × {opp.timePerTask} each
                        </div>
                        <div className="p-3 rounded-lg bg-primary/10 text-sm">
                          💡 {opp.suggestion}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-card p-12 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FiGrid className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-lg mb-2">Analysis Results</p>
                  <p className="text-sm">Enter a process to see automation opportunities</p>
                </div>
              </div>
            )}
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

function CheckCircleAnimated() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
    >
      <FiCheckCircle className="w-3 h-3 text-white" />
    </motion.div>
  )
}