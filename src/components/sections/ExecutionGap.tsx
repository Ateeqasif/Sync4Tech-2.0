'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import BrandWatermark from '@/components/BrandWatermark'

export default function ExecutionGap() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const before = t.executionGap.beforeItems
  const after = t.executionGap.afterItems

  return (
    <section className="py-section bg-[#f0f7ff] dark:bg-gray-900 relative overflow-hidden" id="execution-gap">
      {/* Background orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007cf4, transparent 70%)' }} />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full opacity-8 dark:opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #36c5f0, transparent 70%)' }} />

      <BrandWatermark position="left" size={560} opacity={0.05} />

      <div className="section-container relative z-10" ref={ref}>

        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">{t.executionGap.eyebrow}</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-[1.0] tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            {t.executionGap.h2Line1}<br />
            <span style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(90deg,#007cf4,#36c5f0)', backgroundClip: 'text' }}>
              {t.executionGap.h2Line2}
            </span>
          </h2>
        </motion.div>

        {/* VS comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* BEFORE */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-white dark:bg-[#1a0a0a]" />
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #007cf4, #36c5f0)' }} />
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-black text-gray-800 dark:text-white/70 uppercase tracking-[0.2em]">{t.executionGap.beforeLabel}</span>
              </div>

              <div className="flex flex-col gap-4">
                {before.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  >
                    <span className="text-gray-300 dark:text-white/20 font-mono text-xs font-bold w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 bg-gray-50 border border-gray-200 dark:bg-white/5 dark:border-white/10 rounded-xl px-4 py-3">
                      <p className="text-gray-700 dark:text-white/60 text-sm leading-relaxed">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#007cf4]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs text-gray-400 dark:text-white/40 font-medium">Costing you growth every quarter</span>
              </motion.div>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }} />
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-black text-white/80 uppercase tracking-[0.2em]">{t.executionGap.afterLabel}</span>
              </div>

              <div className="flex flex-col gap-4">
                {after.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                  >
                    <span className="text-white/30 font-mono text-xs font-bold w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 bg-white/15 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                      <p className="text-white font-semibold text-sm leading-relaxed">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 group"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                whileHover={{ x: 4 }}
              >
                <span className="text-sm font-bold text-white">Start your transformation</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/35 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: '12 wks', label: 'Average time to measurable ROI' },
            { value: '80%+', label: 'Routine tasks eliminated on day one' },
            { value: '3x', label: 'Faster team output post-implementation' },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl px-8 py-6 text-center border border-[#007cf4]/15 dark:border-white/8 bg-white dark:bg-transparent"
              style={{ boxShadow: '0 2px 12px rgba(0,124,244,0.06)' }}
            >
              <div
                className="font-inter-tight font-black text-3xl md:text-4xl mb-1"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg,#007cf4,#36c5f0)', backgroundClip: 'text' }}
              >
                {stat.value}
              </div>
              <p className="text-gray-400 dark:text-white/45 text-xs leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm btn-glow hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
          >
            Close Your Execution Gap
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <p className="text-gray-400 text-xs mt-3">Free strategy session · No commitment required</p>
        </motion.div>

      </div>
    </section>
  )
}
