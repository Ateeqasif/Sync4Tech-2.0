'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { NewsItem } from '@/lib/briefingNews'

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Data Engineering': { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400' },
  'AI & Machine Learning': { bg: 'bg-violet-50 dark:bg-violet-900/20', text: 'text-violet-600 dark:text-violet-400' },
  'Business Automation': { bg: 'bg-cyan-50 dark:bg-cyan-900/20', text: 'text-cyan-600 dark:text-cyan-400' },
  'Digital Transformation': { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400' },
  'Cloud & Infrastructure': { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400' },
  'CRM & Workflows': { bg: 'bg-pink-50 dark:bg-pink-900/20', text: 'text-pink-600 dark:text-pink-400' },
}

const ease = [0.22, 1, 0.36, 1] as const

export default function BriefingDetail({ item }: { item: NewsItem }) {
  const col = categoryColors[item.category] ?? { bg: 'bg-gray-50 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400' }

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020c1e 0%, #033a9d 60%, #007cf4 100%)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #36c5f0 0%, transparent 50%), radial-gradient(circle at 15% 80%, #007cf4 0%, transparent 50%)' }} />
        <div className="section-container relative z-10 max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-white/50 text-xs mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors">Daily Briefing</span>
            <span>/</span>
            <span className="text-white/30 truncate max-w-[160px]">{item.source}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-block bg-white/15 text-white text-xs font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-5">{item.category}</span>
            <h1 className="font-inter-tight font-black text-white text-2xl md:text-4xl leading-tight mb-5">{item.headline}</h1>
            <p className="text-white/70 text-base leading-relaxed mb-8">{item.summary}</p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                {item.readTime}
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/50 text-sm">Source: {item.source}</span>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Daily Briefing
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-section bg-white dark:bg-gray-900">
        <div className="section-container max-w-3xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main content */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {item.body.map((para, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-5">{para}</p>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 dark:border-gray-800 mt-10 pt-8">
                <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">This briefing is based on reporting from <strong className="text-gray-600 dark:text-gray-300">{item.source}</strong>. Read the full original article below.</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-white text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:gap-3"
                  style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
                >
                  Read Full Article at {item.source}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="lg:w-64 shrink-0 space-y-5"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
            >
              {/* Category */}
              <div className={`rounded-2xl p-5 ${col.bg}`}>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-2">Category</p>
                <span className={`text-sm font-semibold ${col.text}`}>{item.category}</span>
              </div>

              {/* Source */}
              <div className="bg-[#f8faff] dark:bg-gray-800 rounded-2xl p-5 border border-[#007cf4]/10 dark:border-[#007cf4]/20">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-2">Original Source</p>
                <p className="text-sm font-semibold text-black dark:text-white mb-3">{item.source}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#007cf4] text-xs font-bold hover:gap-2.5 transition-all duration-200"
                >
                  Visit source →
                </a>
              </div>

              {/* Back link */}
              <div className="bg-[#f8faff] dark:bg-gray-800 rounded-2xl p-5 border border-[#007cf4]/10 dark:border-[#007cf4]/20">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">More Briefings</p>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 text-[#007cf4] text-xs font-bold hover:gap-2.5 transition-all duration-200"
                >
                  ← Back to Insights
                </Link>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>
    </>
  )
}
