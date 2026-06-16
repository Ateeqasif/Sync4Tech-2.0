'use client'

import { motion } from 'framer-motion'

const articles = [
  {
    tag: 'AI',
    title: 'Why AI Agents Will Replace 40% of Business Workflows by 2026',
    excerpt: 'The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing. Here\'s what it means for your business.',
    readTime: '6 min read',
    date: 'June 2025',
  },
  {
    tag: 'Automation',
    title: 'The Hidden Cost of Manual Operations Most CFOs Miss',
    excerpt: 'Beyond payroll, manual processes carry invisible costs in errors, delays and missed opportunities. We break down the true price of not automating.',
    readTime: '8 min read',
    date: 'May 2025',
  },
  {
    tag: 'Data',
    title: 'From Spreadsheets to Strategy: Building a Modern Data Infrastructure',
    excerpt: 'Mid-market companies often outgrow their data tools before realizing it. This guide shows the path from reactive reporting to predictive intelligence.',
    readTime: '10 min read',
    date: 'April 2025',
  },
]

const tags = ['All', 'AI', 'Automation', 'Data', 'Operations', 'Transformation']

export default function Insights() {
  return (
    <section className="py-section bg-white" id="insights">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Insights</span>
            <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Ideas That Shape<br /><span className="gradient-text">Modern Businesses.</span>
            </h2>
          </motion.div>
          <motion.a href="#" className="text-sm font-semibold text-black hover:text-accent transition-colors duration-300 group flex items-center gap-2 whitespace-nowrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            View All Insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </div>
        <motion.div className="flex flex-wrap gap-2 mb-12" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {tags.map((tag, i) => (
            <button key={i} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors duration-200 ${ i === 0 ? 'bg-black text-white border-black' : 'border-black/20 text-gray-600 hover:border-black hover:text-black' }`}>{tag}</button>
          ))}
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article key={i} className="group cursor-pointer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="bg-gray-50 rounded-2xl h-44 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                    <span className="text-3xl">{article.tag === 'AI' ? '🤖' : article.tag === 'Automation' ? '⚙' : '📊'}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">{article.tag}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-400">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-xs text-gray-400">{article.readTime}</span>
              </div>
              <h3 className="font-inter-tight font-bold text-black text-lg leading-snug mb-2 group-hover:text-accent transition-colors duration-300">{article.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{article.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
