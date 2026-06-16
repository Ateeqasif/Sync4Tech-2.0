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
    <section className="py-section bg-white" id="outcomes">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Proven Results</span>
          <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Outcomes That
            <br />
            <span className="gradient-text">Speak Louder.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/10">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              className="group bg-white p-10 hover:bg-black transition-colors duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Top border grow */}
              <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #007cf4, #36c5f0)' }}
              />
              <div className="font-inter-tight font-black text-black group-hover:text-white transition-colors duration-500 mb-2"
                style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1 }}
              >
                <CountUp end={parseInt(o.metric)} suffix={o.suffix} />
              </div>
              <div className="font-semibold text-black group-hover:text-white transition-colors duration-500 mb-2 text-sm">{o.label}</div>
              <div className="text-gray-500 group-hover:text-gray-400 transition-colors duration-500 text-xs leading-relaxed">{o.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
