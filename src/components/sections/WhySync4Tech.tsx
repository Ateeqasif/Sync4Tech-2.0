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
      <path d="M5 5l6 6M11 5l-6 6" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function WhySync4Tech() {
  return (
    <section className="py-section bg-white relative overflow-hidden" id="why">
      {/* Oversized brand icon centered watermark, slow breathe + rotate */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        animate={{ rotate: [0, 6, 0, -6, 0], scale: [1, 1.04, 1, 0.97, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="117 408 210 184"
          width="680"
          height="600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.055 }}
        >
          <path d="M174.627,418.223 L238.381,417.821 L238.795,483.419 L206.039,483.625 L205.831,450.743 L193.745,450.819 L174.945,483.821 L206.039,483.625 L206.246,516.341 L137.328,516.775 L127.769,500.477 L137.121,484.06 Z" fill="#007cf4" />
          <path d="M270.245,581.776 L206.659,582.179 L206.247,516.341 L238.821,516.133 L239.031,549.058 L251.202,548.981 L270.136,515.746 L238.821,515.943 L238.615,483.623 L307.557,483.189 L317.119,499.493 L307.763,515.916 Z" fill="#36c5f0" />
        </svg>
      </motion.div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Why Us</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
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

        <motion.div
          className="text-center mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm btn-glow hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
          >
            Book a Free Strategy Session
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all duration-200 group">
            Learn more about us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
