'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { news } from '@/lib/briefingNews'

const ease = [0.22, 1, 0.36, 1] as const

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Data Engineering': { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400' },
  'AI & Machine Learning': { bg: 'bg-violet-50 dark:bg-violet-900/20', text: 'text-violet-600 dark:text-violet-400' },
  'Business Automation': { bg: 'bg-cyan-50 dark:bg-cyan-900/20', text: 'text-cyan-600 dark:text-cyan-400' },
  'Digital Transformation': { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400' },
  'Cloud & Infrastructure': { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400' },
  'CRM & Workflows': { bg: 'bg-pink-50 dark:bg-pink-900/20', text: 'text-pink-600 dark:text-pink-400' },
}

const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

export default function TechBriefing() {
  const [featured, ...rest] = news

  return (
    <section className="py-section bg-white dark:bg-gray-900">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div>
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-2 block">Daily Tech Briefing</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">What's Moving the Industry</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-xl">Curated daily from across the world of data, automation, AI, and business technology.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{today}</span>
          </div>
        </motion.div>

        {/* Featured card */}
        <motion.div
          className="group relative overflow-hidden rounded-3xl mb-5"
          style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          whileHover={{ scale: 1.01 }}
        >
          <Link href={`/insights/briefing/${featured.slug}`} className="block">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 0%, transparent 55%)' }} />
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-full px-3 py-1">{featured.category}</span>
                  <span className="text-white/50 text-xs">Featured Story</span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/50 text-xs">{featured.source}</span>
                </div>
                <h3 className="font-inter-tight font-black text-white text-xl md:text-2xl leading-snug mb-3">{featured.headline}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-2xl">{featured.summary}</p>
                <div className="flex items-center gap-3 mt-5 text-white/50 text-xs">
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 bg-white text-[#007cf4] font-bold text-sm px-5 py-3 rounded-full group-hover:gap-3 transition-all duration-200">
                  Read Story →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((item, i) => {
            const col = categoryColors[item.category] ?? { bg: 'bg-gray-50 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400' }
            return (
              <motion.div
                key={item.slug}
                className="group relative bg-white dark:bg-gray-800 border border-black/8 dark:border-white/8 hover:border-[#007cf4]/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease }}
              >
                <Link href={`/insights/briefing/${item.slug}`} className="flex flex-col h-full p-6">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#007cf4] to-[#36c5f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-4 ${col.bg} ${col.text}`}>{item.category}</span>
                    <h3 className="font-inter-tight font-bold text-black dark:text-white text-base leading-snug mb-2 group-hover:text-[#007cf4] transition-colors duration-200">{item.headline}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.summary}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-black/5 dark:border-white/5">
                    <span className="text-gray-400 text-xs">{item.source}</span>
                    <span className="text-gray-300 dark:text-gray-600 text-xs">·</span>
                    <span className="text-gray-400 text-xs">{item.readTime}</span>
                    <span className="ml-auto text-[#007cf4] text-xs font-semibold group-hover:translate-x-0.5 transition-transform">Read →</span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
