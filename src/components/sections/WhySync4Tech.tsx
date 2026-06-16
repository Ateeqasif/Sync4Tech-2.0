'use client'

import { motion } from 'framer-motion'

const rows = [
  { traditional: 'Builds Tools', sync4tech: 'Transforms Operations', desc: 'We don\'t just deliver software — we redesign how your business works.' },
  { traditional: 'Project Based', sync4tech: 'Business Outcomes', desc: 'We measure success by your results, not by project completion dates.' },
  { traditional: 'Feature Focused', sync4tech: 'Continuous Improvement', desc: 'Transformation compounds — we stay engaged as your business evolves.' },
  { traditional: 'Leaves After Delivery', sync4tech: 'Strategic Partnership', desc: 'We are invested in your long-term growth and operational performance.' },
  { traditional: 'No Long Term Value', sync4tech: 'Long Term Value', desc: 'Every engagement builds on the last, creating compounding returns.' },
]

export default function WhySync4Tech() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            className="lg:sticky top-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>Why Sync4Tech</span>
            <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Not Another
              <br /><span className="gradient-text">Technology</span>
              <br />Vendor.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Most agencies build and leave. We design, build, operate and continuously improve — because real transformation is ongoing, not a one-time delivery.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-bold text-sm text-white px-6 py-3 rounded-xl transition-all duration-300 btn-glow"
              style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}
            >
              Talk to Our Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>

          <div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl px-4 py-3 text-center" style={{ background: '#f8f9fc', border: '1px solid #eaecf0' }}>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Traditional Agency</span>
              </div>
              <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Sync4Tech</span>
              </div>
            </div>
            {rows.map((row, i) => (
              <motion.div
                key={i}
                className="border-b border-gray-100 py-5 last:border-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="grid grid-cols-2 gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fee2e2' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M6 2L2 6M2 2l4 4" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </span>
                    <span className="text-gray-400 text-sm">{row.traditional}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,124,244,0.12)' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#007cf4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="font-semibold text-gray-800 text-sm">{row.sync4tech}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed pl-6">{row.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
