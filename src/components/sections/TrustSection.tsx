'use client'

import { motion } from 'framer-motion'
import { TOOL_LINKS } from '@/lib/toolLinks'

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
        {[...items, ...items].map((t, i) => {
          const url = TOOL_LINKS[t]
          const cls = "inline-flex items-center gap-1.5 bg-white border border-black/10 dark:border-white/10 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-[#007cf4] hover:text-[#007cf4] transition-colors duration-300 whitespace-nowrap"
          return url ? (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cls} cursor-pointer group/item`}
              onClick={e => e.stopPropagation()}
            >
              {t}
              <svg className="opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 8.5l7-7M8.5 8.5V1.5H1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ) : (
            <span key={i} className={`${cls} cursor-default`}>{t}</span>
          )
        })}
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

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-gray-700 bg-white border border-black/10 hover:border-[#007cf4]/40 hover:text-[#007cf4] transition-all mr-3"
          >
            Explore Our Stack
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm btn-glow hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
