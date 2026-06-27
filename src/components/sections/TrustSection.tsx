'use client'

import { motion } from 'framer-motion'

const row1 = ['Zapier', 'Make', 'n8n', 'HubSpot', 'Salesforce', 'Snowflake', 'dbt', 'Power BI', 'Tableau']
const row2 = ['AWS', 'Azure', 'Google Cloud', 'OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Databricks', 'Fivetran']

const certBadges = ['ISO 27001 Aligned', 'GDPR Compliant', 'SOC 2 Practices', 'Enterprise Grade']

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div
      className="flex gap-3 overflow-hidden group"
      style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}
    >
      <div
        className={`flex gap-3 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center bg-white dark:bg-[#0a1a4a] border border-black/10 dark:border-white/10 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-[#007cf4] hover:text-[#007cf4] transition-colors duration-300 cursor-default whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TrustSection() {
  return (
    <section className="py-section bg-gray-50 dark:bg-[#071540]">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Trust & Credibility</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Built On <span className="gradient-text">Enterprise</span>
            <br />Standards
          </h2>
        </motion.div>

        {/* Dual marquee */}
        <motion.div
          className="flex flex-col gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-widest mb-4">Technology Ecosystem</p>
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {certBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-black text-white rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#36c5f0]" />
              <span className="text-xs font-semibold">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
