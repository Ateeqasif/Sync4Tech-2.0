'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  { criterion: 'Delivery Speed', us: 'Weeks, not months', them: 'Multi-quarter engagements' },
  { criterion: 'Technology', us: 'Best-of-breed stack, vendor-agnostic', them: 'Tied to proprietary tools' },
  { criterion: 'Team Structure', us: 'Embedded specialists', them: 'Rotating junior consultants' },
  { criterion: 'Outcomes Focus', us: 'ROI-guaranteed milestones', them: 'Effort-based billing' },
  { criterion: 'AI Capability', us: 'Native AI-first delivery', them: 'AI bolted on to old methods' },
  { criterion: 'Transparency', us: 'Weekly demos & live dashboards', them: 'Monthly status reports' },
]

function CheckIcon({ delay }: { delay: number }) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <svg ref={ref} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8l4 4 6-6"
        stroke="#36c5f0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="20"
        strokeDashoffset={inView ? 0 : 20}
        style={{ transition: `stroke-dashoffset 0.5s ease ${delay}s` }}
      />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5 5l6 6M11 5l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function WhySync4Tech() {
  return (
    <section className="py-section bg-white dark:bg-[#050f2e]" id="why">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Why Us</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
            The Sync4Tech
            <br />
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
            Traditional consultancies sell time. We sell outcomes. Every engagement is structured around measurable business impact, with clear milestones and guaranteed results.
          </p>
        </motion.div>

        <div className="flex flex-col divide-y divide-black/8 dark:divide-white/10 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 pb-3">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Criterion</span>
              <span className="text-xs font-semibold text-[#007cf4] uppercase tracking-widest text-center">Sync4Tech</span>
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center">Others</span>
            </div>
            {rows.map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-3 py-4 gap-2 group hover:bg-[#007cf4]/5 -mx-4 px-4 rounded-lg transition-colors duration-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{row.criterion}</span>
                <div className="flex items-center gap-2 justify-center">
                  <CheckIcon delay={0.3 + i * 0.08} />
                  <span className="text-gray-700 dark:text-gray-300 text-xs text-center leading-tight">{row.us}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CrossIcon />
                  <span className="text-gray-400 dark:text-gray-500 text-xs text-center leading-tight">{row.them}</span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
