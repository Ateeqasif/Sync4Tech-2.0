'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function CountUp({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = performance.now()
        const duration = 1800
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          el.textContent = prefix + Math.round(ease * end) + suffix
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix, prefix])
  return <span ref={ref}>{prefix}0{suffix}</span>
}

const outcomes = [
  { metric: '3', suffix: 'x', label: 'Faster Execution', description: 'Average speed improvement across automated workflows' },
  { metric: '68', suffix: '%', label: 'Cost Reduction', description: 'Operational cost savings within the first 12 months' },
  { metric: '98', suffix: '%', label: 'Accuracy Rate', description: 'Data processing accuracy with AI-powered validation' },
  { metric: '40', suffix: 'h', label: 'Saved Weekly', description: 'Hours saved per team member through automation' },
  { metric: '12', suffix: '+', label: 'Industries', description: 'Sectors transformed with our platform' },
  { metric: '5', suffix: 'x', label: 'ROI Average', description: 'Return on investment achieved within 18 months' },
]

export default function BusinessOutcomes() {
  return (
    <section className="py-section bg-white dark:bg-black" id="outcomes">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Proven Results</span>
          <h2
            className="font-inter-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.003em', lineHeight: 1.05, color: 'var(--text-primary)' }}
          >
            Outcomes That
            <br />
            <span className="gradient-text">Speak Louder.</span>
          </h2>
        </motion.div>

        {/* Apple-style stat grid — clean cards with separator lines */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 rounded-3xl overflow-hidden"
          style={{ border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}
        >
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              className="group relative p-10 cursor-default transition-all duration-300"
              style={{
                background: 'var(--bg-card-solid)',
                borderRight: (i % 3 !== 2) ? '1px solid var(--border-color)' : 'none',
                borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ background: 'linear-gradient(145deg, #007cf4 0%, #0055c4 100%)' }}
            >
              <div
                className="font-inter-tight font-black mb-2 transition-colors duration-300 group-hover:text-white"
                style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}
              >
                <CountUp end={parseInt(o.metric)} suffix={o.suffix} />
              </div>
              <div
                className="font-semibold mb-1.5 text-sm transition-colors duration-300 group-hover:text-white"
                style={{ color: 'var(--text-primary)' }}
              >
                {o.label}
              </div>
              <div
                className="text-xs leading-relaxed transition-colors duration-300 group-hover:text-white/70"
                style={{ color: 'var(--text-secondary)' }}
              >
                {o.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
