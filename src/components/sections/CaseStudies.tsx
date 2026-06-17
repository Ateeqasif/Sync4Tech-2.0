'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = performance.now()
        const duration = 1600
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          el.textContent = Math.round(ease * end) + suffix
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix])
  return <span ref={ref}>0{suffix}</span>
}

const cases = [
  {
    industry: 'Real Estate',
    tag: 'PropTech',
    company: 'PropTech Scale-up',
    headline: 'From 3-day delays to real-time deal intelligence',
    challenge: 'Manual deal tracking across 14 systems causing critical decision-making delays.',
    solution: 'Unified data platform + AI deal scoring + automated investor reporting pipeline.',
    metrics: [
      { value: 85, suffix: '%', label: 'Faster Reporting' },
      { value: 3, suffix: 'x', label: 'Deal Velocity' },
      { value: 2, suffix: 'M+', label: 'Annual Savings' },
    ],
    color: '#007cf4',
  },
  {
    industry: 'Financial Services',
    tag: 'FinTech',
    company: 'Wealth Management Firm',
    headline: 'Eliminating 40 hours of weekly compliance work',
    challenge: 'Compliance reporting consumed 40+ hours weekly with high error rates and regulatory exposure.',
    solution: 'Automated compliance workflows with AI validation and real-time regulatory monitoring.',
    metrics: [
      { value: 96, suffix: '%', label: 'Error Reduction' },
      { value: 40, suffix: 'h', label: 'Weekly Saved' },
      { value: 100, suffix: '%', label: 'Audit Ready' },
    ],
    color: '#033a9d',
  },
  {
    industry: 'Manufacturing',
    tag: 'Industry 4.0',
    company: 'Global Manufacturer',
    headline: 'Supply chain intelligence at enterprise scale',
    challenge: 'Visibility gaps causing production delays and ballooning excess inventory costs.',
    solution: 'End-to-end supply chain intelligence with predictive demand forecasting and auto-alerts.',
    metrics: [
      { value: 31, suffix: '%', label: 'Cost Reduction' },
      { value: 4, suffix: 'x', label: 'Forecast Accuracy' },
      { value: 99, suffix: '%', label: 'Uptime Achieved' },
    ],
    color: '#36c5f0',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section className="py-section bg-gray-50 dark:bg-[#071540]" id="case-studies">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Case Studies</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Real Results,
            <br />
            <span className="gradient-text">Real Impact</span>
          </h2>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? 'text-white shadow-lg'
                  : 'bg-white dark:bg-[#0a1a4a] text-gray-500 dark:text-gray-400 border border-black/8 dark:border-white/10 hover:border-[#007cf4]/30 hover:text-[#007cf4]'
              }`}
              style={active === i ? { background: 'linear-gradient(135deg, #033a9d, #007cf4)' } : {}}
            >
              {active === i && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{c.industry}</span>
            </button>
          ))}
        </motion.div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Left content — 3 cols */}
            <div className="lg:col-span-3 bg-white dark:bg-[#0a1a4a] p-10 flex flex-col justify-between">
              {/* Top */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-[#007cf4] bg-[#007cf4]/10 px-3 py-1 rounded-full tracking-wide uppercase">{c.tag}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{c.company}</span>
                </div>

                <h3 className="font-inter-tight font-black text-black dark:text-white text-2xl md:text-3xl leading-tight mb-8">
                  {c.headline}
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0,124,244,0.1)' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM8 5v4M8 10.5v.5" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Challenge</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0,124,244,0.1)' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 4" stroke="#007cf4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Solution</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-500">Delivered in under 12 weeks</span>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all duration-200"
                  whileHover={{ x: 3 }}
                >
                  Get similar results
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Right metrics — 2 cols */}
            <div
              className="lg:col-span-2 p-10 flex flex-col justify-center gap-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}
            >
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              />
              {/* Orb */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-20"
                style={{ background: 'radial-gradient(ellipse, #36c5f0, transparent 70%)' }}
              />

              <div className="relative z-10">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-8">Impact Metrics</p>
                <div className="flex flex-col gap-8">
                  {c.metrics.map((m, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: j * 0.1 }}
                    >
                      <div className="font-inter-tight font-black text-white leading-none mb-1" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
                        <CountUp end={m.value} suffix={m.suffix} />
                      </div>
                      <div className="text-white/60 text-sm font-medium">{m.label}</div>
                      <div className="mt-2 h-0.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-white/40"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(m.value, 100)}%` }}
                          transition={{ duration: 1.2, delay: 0.3 + j * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Case counter dots */}
        <div className="flex justify-center gap-2 mt-8">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${active === i ? 'w-6 h-2 bg-[#007cf4]' : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-[#007cf4]/50'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
