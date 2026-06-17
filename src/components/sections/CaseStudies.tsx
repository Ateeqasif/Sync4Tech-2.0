'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
    company: 'PropTech Scale-up',
    challenge: 'Manual deal tracking across 14 systems causing 3-day delays in decision-making.',
    solution: 'Built unified data platform + AI-powered deal scoring + automated investor reporting.',
    metrics: [{ value: 85, suffix: '%', label: 'Faster Reporting' }, { value: 3, suffix: 'x', label: 'Deal Velocity' }, { value: 2, suffix: 'M+', label: 'Annual Savings' }],
  },
  {
    industry: 'Financial Services',
    company: 'Wealth Management Firm',
    challenge: 'Compliance reporting took 40+ hours per week with high error rates and regulatory risk.',
    solution: 'Automated compliance workflows with AI validation, real-time regulatory monitoring.',
    metrics: [{ value: 96, suffix: '%', label: 'Error Reduction' }, { value: 40, suffix: 'h', label: 'Weekly Saved' }, { value: 100, suffix: '%', label: 'Audit Ready' }],
  },
  {
    industry: 'Manufacturing',
    company: 'Global Manufacturer',
    challenge: 'Supply chain visibility gaps causing production delays and excess inventory costs.',
    solution: 'End-to-end supply chain intelligence with predictive demand forecasting.',
    metrics: [{ value: 31, suffix: '%', label: 'Cost Reduction' }, { value: 4, suffix: 'x', label: 'Forecast Accuracy' }, { value: 99, suffix: '%', label: 'Uptime Achieved' }],
  },
]

export default function CaseStudies() {
  return (
    <section className="py-section bg-gray-50 dark:bg-[#071540]" id="case-studies">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Case Studies</span>
          <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Real Results,
            <br />
            <span className="gradient-text">Real Impact.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 grid md:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-8 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold text-[#007cf4] bg-[#007cf4]/10 px-3 py-1 rounded-full">{c.industry}</span>
                  <span className="text-xs text-gray-400">{c.company}</span>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Challenge</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Solution</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center gap-6" style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}>
                {c.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="font-inter-tight font-black text-white text-3xl">
                      <CountUp end={m.value} suffix={m.suffix} />
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
