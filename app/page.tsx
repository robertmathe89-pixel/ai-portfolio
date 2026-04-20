'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiCode, FiCpu, FiZap } from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    title: 'Custom AI Development',
    description: 'Tailored AI solutions built specifically for your business needs.',
    tags: ['Machine Learning', 'Neural Networks', 'NLP'],
  },
  {
    icon: FiZap,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and streamline workflows with intelligent bots.',
    tags: ['RPA', 'Workflow', 'Integration'],
  },
  {
    icon: FiCpu,
    title: 'AI Consulting',
    description: 'Strategic guidance to identify AI opportunities in your business.',
    tags: ['Strategy', 'Implementation', 'Training'],
  },
]

const caseStudies = [
  {
    title: 'E-Commerce AI Assistant',
    description: 'Reduced customer support response time by 85% with an AI-powered chatbot.',
    metric: '85%',
    metricLabel: 'Faster Response',
    tags: ['Chatbot', 'NLP', 'E-Commerce'],
  },
  {
    title: 'Data Analytics Platform',
    description: 'Automated reporting pipeline saving 20+ hours weekly on manual data processing.',
    metric: '20hrs',
    metricLabel: 'Saved Weekly',
    tags: ['Analytics', 'Automation', 'Dashboard'],
  },
  {
    title: 'Sales Prediction Engine',
    description: 'ML model predicting sales trends with 94% accuracy for better inventory management.',
    metric: '94%',
    metricLabel: 'Accuracy',
    tags: ['ML', 'Forecasting', 'Sales'],
  },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/robertmathe89-pixel', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/robertmathe89', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/robertmathe89', label: 'Twitter' },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen hero-gradient">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            AI.Portfolio
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Case Studies', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full font-medium glow-button"
          >
            Get Started
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-6"
            >
              ✨ AI Automation Expert
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transform Your Business with{' '}
              <span className="gradient-text">Intelligent AI</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              I build cutting-edge AI solutions that automate workflows, boost productivity, 
              and drive measurable business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold flex items-center gap-2 glow-button"
              >
                Start Your Project <FiArrowRight />
              </motion.a>
              <motion.a
                href="#case-studies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-semibold"
              >
                View Work
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-12"
            >
              {['50+ Projects', '98% Satisfaction', '24/7 Support'].map((stat, i) => (
                <div key={stat} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.split(' ')[0]}</div>
                  <div className="text-sm text-gray-500">{stat.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30"
              />
              <div className="relative glass-card p-8 float-animation">
                <div className="space-y-4">
                  {[
                    { label: 'AI Models Deployed', value: '12' },
                    { label: 'Automation Scripts', value: '47' },
                    { label: 'Hours Saved/Month', value: '160+' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl glass"
                    >
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-xl font-bold gradient-text">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Building the Future with AI</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate AI automation specialist with expertise in building intelligent 
                systems that transform how businesses operate. From custom ML models to workflow 
                automation, I help companies leverage the full power of artificial intelligence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines cutting-edge technology with practical business solutions, 
                ensuring that every AI implementation delivers measurable ROI.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {['Python', 'TypeScript', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'].map((skill) => (
                  <div key={skill} className="p-3 rounded-xl glass text-center text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Delivered' },
                { number: '30+', label: 'Happy Clients' },
                { number: '100%', label: 'Success Rate' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What I Can Do For You</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full glass text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Featured Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group"
              >
                <div className="text-5xl font-bold gradient-text mb-2">{study.metric}</div>
                <div className="text-sm text-gray-500 mb-6">{study.metricLabel}</div>
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-gray-400 mb-6">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full glass text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Let's Work Together</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl glass focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl glass focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl glass focus:border-primary focus:outline-none transition-colors h-40 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  Send Message <FiArrowRight />
                </motion.button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-8">Contact Info</h3>
                <div className="space-y-6">
                  {[
                    { icon: FiMail, label: 'Email', value: 'robert@example.com', href: 'mailto:robert@example.com' },
                    { icon: FiMapPin, label: 'Location', value: 'Timisoara, Romania', href: '#' },
                    { icon: FiPhone, label: 'Phone', value: '+40 700 000 000', href: 'tel:+40700000000' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{item.label}</div>
                        <div className="font-semibold">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold gradient-text">AI.Portfolio</div>
            <div className="text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}