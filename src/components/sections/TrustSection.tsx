'use client'

import { motion } from 'framer-motion'

const techPartners = ['Zapier', 'Make', 'n8n', 'HubSpot', 'Salesforce', 'Snowflake', 'dbt', 'Power BI', 'Tableau', 'AWS', 'Azure', 'Google Cloud']

const locations = [
  { city: 'United States', flag: '🇺🇸', detail: 'North America HQ' },
  { city: 'United Kingdom', flag: '🇬🇧', detail: 'Europe Office' },
  { city: 'Pakistan', flag: '🇵🇰', detail: 'Delivery Centre' },
]

const certBadges = ['ISO 27001 Aligned', 'GDPR Compliant', 'SOC 2 Practices', 'Enterprise Grade']

export default function TrustSection() {
  return (
    <section className="py-section bg-gray-50">
      <div className="section-container">
        <motion.div className="text-center max-w-2xl mx-auto mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Trust & Credibility</span>
          <h2 className="font-inter-tight font-black text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Built On <span className="gradient-text">Enterprise</span><br />Standards.
          </h2>
        </motion.div>
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Technology Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techPartners.map((partner, i) => (
              <motion.span key={i} className="bg-white border border-black/10 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-accent hover:text-accent transition-colors duration-300 cursor-default" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}>
                {partner}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div className="flex flex-wrap justify-center gap-3 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {certBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-black text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold">{badge}</span>
            </div>
          ))}
        </motion.div>
        <motion.div className="border-t border-black/10 pt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Global Delivery Capability</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white border border-black/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{loc.flag}</div>
                <div className="font-inter-tight font-bold text-black">{loc.city}</div>
                <div className="text-gray-500 text-xs mt-1">{loc.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
