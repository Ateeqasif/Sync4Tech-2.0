'use client'

import { motion } from 'framer-motion'

const articles = [
  { tag: 'AI', title: 'Why AI Agents Will Replace 40% of Business Workflows by 2026', excerpt: 'The shift from AI tools to AI agents is the biggest operational inflection point since cloud computing.', readTime: '6 min read', date: 'June 2025' },
  { tag: 'Automation', title: 'The Hidden Cost of Manual Operations Most CFOs Miss', excerpt: 'Beyond payroll, manual processes carry invisible costs in errors, delays and missed opportunities.', readTime: '8 min read', date: 'May 2025' },
  { tag: 'Data', title: 'From Spreadsheets to Strategy: Building a Modern Data Infrastructure', excerpt: 'Mid-market companies often outgrow their data tools before realizing it. Here\'s the path forward.', readTime: '10 min read', date: 'April 2025' },
]

const tags = ['All', 'AI', 'Automation', 'Data', 'Operations', 'Transformation']

export default function Insights() {
  return (
    <section className="py-section bg-white" id="insights">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>Insights</span>
            <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
              Ideas That Shape<br /><span className="gradient-text">Modern Businesses.</span>
            </h2>
          </motion.div>
          <motion.a href="#" className="text-sm font-semibold flex items-center gap-2 whitespace-nowrap group" style={{ color: '#007cf4' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            View All Insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag, i) => (
            <button key={i} className="px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200"
              style={i === 0 ? { background: 'linear-gradient(135deg,#033a9d,#007cf4)', color: '#fff', border: 'none' } : { background: '#fff', color: '#6b7280', borderColor: '#e5e7eb' }}>
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              className="group rounded-2xl border border-gray-100 overflow-hidden bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-400 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-40 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(3,58,157,0.06), rgba(54,197,240,0.06))' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'rgba(0,124,244,0.08)' }}>
                  {article.tag === 'AI' ? '🤖' : article.tag === 'Automation' ? '⚙️' : '📊'}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>{article.tag}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-200" />
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="font-inter-tight font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-brand-blue transition-colors duration-300" style={{ color: undefined }}>
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
