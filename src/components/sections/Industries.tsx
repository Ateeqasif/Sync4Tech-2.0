'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const industries = [
  { name: 'Real Estate', icon: '🏢', example: 'Automated lead qualification & property management workflows saving 40+ hours/week.', stat: '40h/wk saved' },
  { name: 'Healthcare', icon: '⚕️', example: 'Patient intake automation and compliance workflows reducing admin burden by 55%.', stat: '55% less admin' },
  { name: 'Financial Services', icon: '📈', example: 'Real-time reporting dashboards and risk monitoring reducing decision lag by 70%.', stat: '70% faster decisions' },
  { name: 'Professional Services', icon: '⚖️', example: 'Client onboarding, billing and delivery workflows running end-to-end automatically.', stat: '3× throughput' },
  { name: 'Manufacturing', icon: '🏭', example: 'Supply chain visibility and quality control automation at scale.', stat: '45% efficiency gain' },
  { name: 'Education', icon: '🎓', example: 'Student lifecycle automation and learning analytics that improve outcomes.', stat: '60% less admin' },
  { name: 'Energy', icon: '⚡', example: 'Operational data integration and predictive maintenance intelligence.', stat: '30% cost reduction' },
  { name: 'Technology', icon: '💻', example: 'Hyper-automation of DevOps, customer success and revenue operations.', stat: '2× team output' },
]

export default function Industries() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-section bg-white" id="industries">
      <div className="section-container">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>
            Industries
          </span>
          <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
            Built For{' '}
            <span className="gradient-text">Complex Businesses.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl p-6 border cursor-pointer overflow-hidden group"
              style={{ background: '#fff', borderColor: active === i ? 'rgba(0,124,244,0.3)' : '#eaecf0' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl mb-3">{ind.icon}</div>
              <div className="font-inter-tight font-bold text-gray-800 text-base mb-1">{ind.name}</div>
              <div className="text-xs font-semibold" style={{ color: '#007cf4' }}>{ind.stat}</div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className="absolute inset-0 p-5 flex flex-col justify-center"
                    style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-xs font-bold mb-2 tracking-wider" style={{ color: '#36c5f0' }}>{ind.name}</div>
                    <p className="text-white/85 text-xs leading-relaxed">{ind.example}</p>
                    <div className="mt-3 text-sm font-bold" style={{ color: '#36c5f0' }}>{ind.stat}</div>
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
