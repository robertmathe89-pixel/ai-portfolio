'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiCheck, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiCode, FiCpu, FiZap, FiSun, FiMoon, FiStar, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { supabase } from '@/lib/supabase'

// Theme toggle component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
      if (saved === 'light') {
        document.documentElement.classList.add('light')
      }
    }
  }, [])
  
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    if (!newTheme) {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }
  
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full glass"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiSun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiMoon className="w-5 h-5 text-gray-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

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

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Working with this team transformed our business. The AI solutions delivered increased our productivity by 40% within just 3 months. Exceptional results!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'The custom AI chatbot they built for us revolutionized our customer support. Our response times dropped from hours to seconds.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, InnovateCo',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Outstanding AI automation expertise. They understood our needs perfectly and delivered a solution that exceeded our expectations.',
    rating: 5,
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Consult',
    description: 'We discuss your business goals, pain points, and explore how AI can solve your specific challenges.',
    icon: FiCode,
  },
  {
    step: '02',
    title: 'Build',
    description: 'We develop custom AI solutions tailored to your needs, with regular updates andIterative improvements.',
    icon: FiCpu,
  },
  {
    step: '03',
    title: 'Deploy',
    description: 'We launch your AI solution, provide training, and offer ongoing support to ensure optimal performance.',
    icon: FiZap,
  },
]

const pricingPackages = [
  {
    name: 'Basic',
    price: '$500',
    description: 'Perfect for small projects and getting started with AI',
    features: [
      'AI Consultation (1 hour)',
      'Basic Automation Script',
      'Email Support',
      'Documentation',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: '$1,500',
    description: 'Ideal for businesses ready to scale with AI',
    features: [
      'AI Consultation (3 hours)',
      'Custom AI Model',
      'Process Automation',
      'Priority Support',
      'Training Session',
      '30-Day Follow-up',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$5,000',
    description: 'Comprehensive AI solution for enterprise needs',
    features: [
      'Unlimited Consultation',
      'Full AI System',
      'Advanced Automation',
      '24/7 Dedicated Support',
      'Custom Training',
      '6-Month Support',
      'API Integration',
      'Performance Reports',
    ],
    featured: false,
  },
]

const faqs = [
  {
    question: 'How long does it take to implement an AI solution?',
    answer: 'Timeline varies based on complexity. Simple automation can be ready in 1-2 weeks, while comprehensive AI systems typically take 4-8 weeks.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across various industries including e-commerce, healthcare, finance, manufacturing, and SaaS. Our AI solutions are adaptable to any sector.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! All our packages include follow-up support. We offer ongoing maintenance and optimization plans to ensure your AI continues performing at its best.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We leverage cutting-edge technologies including OpenAI, LangChain, TensorFlow, PyTorch, and custom ML solutions tailored to your needs.',
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We implement industry-standard security practices, including encryption, access controls, and comply with GDPR and other data protection regulations.',
  },
  {
    question: 'Can AI integrate with our existing systems?',
    answer: 'Absolutely. We specialize in seamless integrations with CRMs, ERPs, databases, and custom APIs to enhance your existing infrastructure.',
  },
]

const caseStudies = [
  {
    title: 'AI Content Generator',
    description: 'Generate blog posts and social media content from any topic using AI. Try the live demo!',
    metric: '10x',
    metricLabel: 'Faster Creation',
    tags: ['Content', 'AI', 'Blog'],
    link: '/demo/content-generator',
    demo: true,
  },
  {
    title: 'Lead Qualifier Chatbot',
    description: 'AI-powered chatbot that qualifies leads through natural conversation. Try it live!',
    metric: '3x',
    metricLabel: 'More Leads',
    tags: ['Chatbot', 'Qualification', 'Sales'],
    link: '/demo/lead-qualifier',
    demo: true,
  },
  {
    title: 'Business Process Automation',
    description: 'Discover automation opportunities and calculate time savings. Try the demo!',
    metric: '9.5hrs',
    metricLabel: 'Saved Daily',
    tags: ['Automation', 'Workflow', 'Efficiency'],
    link: '/demo/automation',
    demo: true,
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
            {['About', 'Services', 'Process', 'Pricing', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                className="text-gray-300 hover:text-white transition-colors light-mode-text"
              >
                {item}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
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
            <p className="text-xl text-gray-400 mb-8 max-w-lg light-mode-text">
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
                      <span className="text-gray-400 light-mode-text">{item.label}</span>
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
              <p className="text-lg text-gray-300 leading-relaxed mb-6 light-mode-text">
                I'm a passionate AI automation specialist with expertise in building intelligent 
                systems that transform how businesses operate. From custom ML models to workflow 
                automation, I help companies leverage the full power of artificial intelligence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed light-mode-text">
                My approach combines cutting-edge technology with practical business solutions, 
                ensuring that every AI implementation delivers measurable ROI.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {['Python', 'TypeScript', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'].map((skill) => (
                  <div key={skill} className="p-3 rounded-xl glass text-center text-gray-300 light-mode-text">
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
                  className="glass-card p-6 text-center card-lift"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 light-mode-text">{stat.label}</div>
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
                className="glass-card p-8 group card-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 light-mode-text">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full glass text-sm text-gray-300 light-mode-text">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Process Section */}
      <section id="process" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">The Process</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto light-mode-text">
              Simple, streamlined, and focused on delivering results
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass-card p-8 text-center card-lift">
                  <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-400 light-mode-text">{step.description}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FiArrowRight className="w-8 h-8 text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 card-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FiStar key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed light-mode-text">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 light-mode-text">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Choose Your Package</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto light-mode-text">
              Flexible pricing options to match your needs and budget
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass-card p-8 relative card-lift ${pkg.featured ? 'ring-2 ring-primary' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm light-mode-text">{pkg.description}</p>
                </div>
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold gradient-text">{pkg.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <FiCheck className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 light-mode-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full py-4 text-center rounded-xl font-semibold transition-all ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-primary to-secondary glow-button'
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-dark/50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <AnimatePresence mode="wait">
                    {openFaq === i ? (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        exit={{ rotate: 0 }}
                      >
                        <FiChevronUp className="w-5 h-5 flex-shrink-0" />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 0 }}
                        exit={{ rotate: 180 }}
                      >
                        <FiChevronDown className="w-5 h-5 flex-shrink-0" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-400 light-mode-text">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                className="glass-card p-8 group card-lift"
              >
                <div className="text-5xl font-bold gradient-text mb-2">{study.metric}</div>
                <div className="text-sm text-gray-500 mb-6">{study.metricLabel}</div>
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-gray-400 mb-6 light-mode-text">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full glass text-sm text-gray-300 light-mode-text">
                      {tag}
                    </span>
                  ))}
                </div>
                {study.link && (
                  <a
                    href={study.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    {study.demo ? 'Try Demo' : 'View Project'}
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                )}
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
                  <label className="block text-gray-400 mb-2 light-mode-text">Name</label>
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
                  <label className="block text-gray-400 mb-2 light-mode-text">Email</label>
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
                  <label className="block text-gray-400 mb-2 light-mode-text">Message</label>
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
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiArrowRight />
                    </>
                  )}
                </motion.button>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/20 border border-green-500 text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/20 border border-red-500 text-red-400 text-center"
                  >
                    ✗ Failed to send message. Please try again.
                  </motion.div>
                )}
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
                        <div className="text-gray-400 text-sm light-mode-text">{item.label}</div>
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
            <div className="flex items-center gap-4">
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
            <div className="text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}