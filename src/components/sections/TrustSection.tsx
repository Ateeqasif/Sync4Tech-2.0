'use client'

import { motion } from 'framer-motion'

const techPartners = ['Zapier', 'Make', 'n8n', 'HubSpot', 'Salesforce', 'Snowflake', 'dbt', 'Power BI', 'Tableau', 'AWS', 'Azure', 'Google Cloud']
const certBadges = ['ISO 27001 Aligned', 'GDPR Compliant', 'SOC 2 Practices', 'Enterprise Grade']
const locations = [
  { city: 'United States', flag: '🇺🇸', detail: 'North America HQ' },
  { city: 'United Kingdom', flag: '🇬🇧', detail: 'Europe Office' },
  { city: 'Pakistan', flag: '🇵🇰', detail: 'Delivery Centre' },
]

export default function TrustSection() {
  return (
    <section className="py-section" style={{ background: '#f7f9ff' }}>
      <div className="section-container">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>Trust & Credibility</span>
          <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Built On <span className="gradient-text">Enterprise</span><br />Standards.
          </h2>
        </motion.div>

        {/* Tech stack */}
        <motion.div className="mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-[0.2em] mb-6">Technology Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techPartners.map((partner, i) => (
              <motion.span
                key={i}
                className="bg-white rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-600 cursor-default transition-all duration-200"
                style={{ border: '1px solid #e5e7eb' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ borderColor: 'rgba(0,124,244,0.3)', color: '#007cf4', y: -2 }}
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Cert badges */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {certBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-full" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Locations */}
        <motion.div className="border-t pt-14" style={{ borderColor: 'rgba(0,124,244,0.1)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-[0.2em] mb-8">Global Delivery Capability</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center" style={{ border: '1px solid rgba(0,124,244,0.1)', boxShadow: '0 2px 12px rgba(0,124,244,0.06)' }}>
                <div className="text-4xl mb-3">{loc.flag}</div>
                <div className="font-inter-tight font-bold text-gray-800 text-sm">{loc.city}</div>
                <div className="text-gray-400 text-xs mt-1">{loc.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
