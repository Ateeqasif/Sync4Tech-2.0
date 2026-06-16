'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const industries = [
  { name: 'Real Estate', icon: '🏢', example: 'Automated lead qualification & property management workflows saving 40+ hours/week.' },
  { name: 'Healthcare', icon: '⚕', example: 'Patient intake automation and compliance workflows reducing admin burden by 55%.' },
  { name: 'Financial Services', icon: '📈', example: 'Real-time reporting dashboards and risk monitoring reducing decision lag by 70%.' },
  { name: 'Professional Services', icon: '⚖', example: 'Client onboarding, billing and delivery workflows running end-to-end automatically.' },
  { name: 'Manufacturing', icon: '🏭', example: 'Supply chain visibility and quality control automation at scale.' },
  { name: 'Education', icon: '🎓', example: 'Student lifecycle automation and learning analytics that improve outcomes.' },
  { name: 'Energy', icon: '⚡', example: 'Operational data integration and predictive maintenance intelligence.' },
  { name: 'Technology', icon: '💻', example: 'Hyper-automation of DevOps, customer success and revenue operations.' },
]

export default function Industries() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <section className="py-section bg-gray-50" id="industries">
      <div className="section-container">
        <motion.div className="max-w-2xl mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Industries</span>
          <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Built For <span className="gradient-text">Complex Businesses.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-2xl p-6 border border-black/10 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="text-3xl mb-3">{ind.icon}</div>
              <div className="font-inter-tight font-bold text-black text-lg">{ind.name}</div>
              <AnimatePresence>
                {active === i && (
                  <motion.div className="absolute inset-0 bg-black p-6 flex items-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}>
                    <div>
                      <div className="text-accent text-xs font-semibold mb-2 uppercase tracking-wider">{ind.name}</div>
                      <p className="text-white text-sm leading-relaxed">{ind.example}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
