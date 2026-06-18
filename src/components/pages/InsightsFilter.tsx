'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tags = ['All', 'AI', 'Automation', 'Data', 'Operations', 'Transformation']

const articles = [
  {
    tag: 'AI',
    readTime: '8 min read',
    title: 'The AI Automation Stack Every Business Needs in 2025',
    description: 'A practical breakdown of the tools, architectures, and integration patterns powering the most effective AI automation deployments this year.',
    date: 'Jun 12, 2025',
    featured: true,
  },
  {
    tag: 'Automation',
    readTime: '6 min read',
    title: 'How to Audit Your Business for Automation Opportunities',
    description: 'A step-by-step framework for identifying which processes will deliver the highest ROI when automated — and which to tackle first.',
    date: 'Jun 5, 2025',
    featured: false,
  },
  {
    tag: 'Data',
    readTime: '10 min read',
    title: 'Building a Data Strategy That Actually Drives Decisions',
    description: 'Why most data strategies fail to influence day-to-day decisions, and the four-step model that fixes it for mid-market organisations.',
    date: 'May 29, 2025',
    featured: false,
  },
  {
    tag: 'Operations',
    readTime: '7 min read',
    title: 'Process Mapping vs Process Mining: What\'s the Difference?',
    description: 'An honest comparison of two popular approaches to understanding business processes — and when to use each.',
    date: 'May 22, 2025',
    featured: false,
  },
  {
    tag: 'Transformation',
    readTime: '9 min read',
    title: 'Why Change Management is the Hidden Variable in AI Projects',
    description: 'Technical implementation gets 80% of the attention, but change management determines 80% of the ROI. Here\'s how to close that gap.',
    date: 'May 15, 2025',
    featured: false,
  },
  {
    tag: 'AI',
    readTime: '5 min read',
    title: 'Predictive Analytics: Moving From Reporting to Forecasting',
    description: 'The practical steps organisations take to shift from backward-looking BI dashboards to forward-looking AI-driven forecasts.',
    date: 'May 8, 2025',
    featured: false,
  },
]

export default function InsightsFilter() {
  const [active, setActive] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = active === 'All' ? articles : articles.filter(a => a.tag === active)
  const featured = articles.find(a => a.featured)
  const rest = filtered.filter(a => !a.featured)

  return (
    <>
      {/* Featured article */}
      {featured && (
        <section className="py-section bg-white dark:bg-[#050f2e]">
          <div className="section-container">
            <motion.article
              className="bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 border border-[#007cf4]/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 hover:border-[#007cf4]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-[#007cf4]/10 text-[#007cf4] px-3 py-1 rounded-full font-semibold">{featured.tag}</span>
                  <span className="text-xs text-gray-400">{featured.readTime}</span>
                  <span className="text-xs text-gray-400">{featured.date}</span>
                </div>
                <h2 className="font-inter-tight font-black text-black dark:text-white text-2xl md:text-3xl mb-4 leading-tight">{featured.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{featured.description}</p>
                <span className="inline-flex items-center gap-2 text-[#007cf4] font-semibold text-sm hover:text-[#36c5f0] transition-colors cursor-pointer">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === tag
                    ? 'bg-[#007cf4] text-white'
                    : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-[#007cf4]/15 hover:border-[#007cf4]/40'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence mode="popLayout">
              {rest.map((a, i) => (
                <motion.article
                  key={a.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-6 hover:border-[#007cf4]/40 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-[#007cf4]/10 text-[#007cf4] px-3 py-1 rounded-full font-semibold">{a.tag}</span>
                    <span className="text-xs text-gray-400">{a.readTime}</span>
                  </div>
                  <h3 className="font-inter-tight font-black text-black dark:text-white text-lg mb-3 leading-snug">{a.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{a.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#007cf4]/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{a.date}</span>
                    <span className="text-[#007cf4] text-sm font-semibold cursor-pointer hover:text-[#36c5f0] transition-colors">Read →</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Newsletter inline */}
          <motion.div
            className="bg-gradient-to-br from-[#007cf4]/8 to-[#36c5f0]/8 border border-[#007cf4]/20 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-inter-tight font-black text-black dark:text-white text-2xl mb-2">Get Insights in Your Inbox</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Join 5,000+ business leaders receiving weekly insights on AI, automation, and operational excellence.</p>
            {subscribed ? (
              <p className="text-[#007cf4] font-semibold">Thank you for subscribing!</p>
            ) : (
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                onSubmit={e => { e.preventDefault(); setSubscribed(true) }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-[#007cf4]/20 bg-white dark:bg-[#050f2e] text-black dark:text-white text-sm outline-none focus:border-[#007cf4]/60 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#007cf4] text-white font-semibold text-sm hover:bg-[#36c5f0] transition-colors btn-glow whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
