'use client'

import { motion } from 'framer-motion'

const rows = [
  { traditional: 'Builds Tools', sync4tech: 'Transforms Operations', desc: 'We don\'t just deliver software — we redesign how your business works.' },
  { traditional: 'Project Based', sync4tech: 'Business Outcomes', desc: 'We measure success by your results, not by project completion.' },
  { traditional: 'Feature Focused', sync4tech: 'Continuous Improvement', desc: 'Transformation compounds — we stay engaged as your business evolves.' },
  { traditional: 'Leaves After Delivery', sync4tech: 'Strategic Partnership', desc: 'We are invested in your long-term growth and operational performance.' },
  { traditional: 'No Long Term Value', sync4tech: 'Long Term Value', desc: 'Every engagement builds on the last, creating compounding returns.' },
]

export default function WhySync4Tech() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div className="lg:sticky top-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Why Sync4Tech</span>
            <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              Not Another<br /><span className="gradient-text">Technology</span><br />Vendor.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Most agencies build and leave. We design, build, operate and continuously improve — because real transformation is ongoing, not a one-time delivery.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors duration-300 group">
              Talk to Our Team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 rounded-xl px-4 py-3 text-center"><span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Traditional Agency</span></div>
              <div className="bg-black rounded-xl px-4 py-3 text-center"><span className="text-xs font-semibold text-accent uppercase tracking-wider">Sync4Tech</span></div>
            </div>
            {rows.map((row, i) => (
              <motion.div key={i} className="border-b border-black/10 py-5 last:border-0" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"><span className="text-gray-400 text-xs">✕</span></span>
                    <span className="text-gray-500 text-sm">{row.traditional}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><span className="text-accent text-xs">✓</span></span>
                    <span className="font-semibold text-black text-sm">{row.sync4tech}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed pl-6">{row.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
