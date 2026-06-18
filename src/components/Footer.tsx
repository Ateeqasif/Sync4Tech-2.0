'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const solutions = ['Business Automation', 'AI Enablement', 'Data Transformation', 'Execution Excellence', 'Process Mining', 'Change Management']
const industries = ['Real Estate', 'Healthcare', 'Financial Services', 'Manufacturing', 'Technology', 'Retail & E-Commerce']
const company = ['About Sync4Tech', 'Case Studies', 'Insights', 'Careers', 'Partners', 'Contact Us']
const resources = ['Transformation Blueprint', 'ROI Calculator', 'Documentation', 'Partner Program', 'API Reference', 'Status']
const legal = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security']

const techStack = [
  'Zapier', 'Make', 'n8n', 'HubSpot', 'Salesforce', 'Snowflake',
  'dbt', 'Power BI', 'Tableau', 'AWS', 'Azure', 'Google Cloud',
  'OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Databricks', 'Fivetran',
]

const certs = [
  { label: 'ISO 27001 Aligned', icon: '🛡️' },
  { label: 'GDPR Compliant', icon: '🇪🇺' },
  { label: 'SOC 2 Practices', icon: '✅' },
  { label: 'Enterprise Grade', icon: '🏢' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <footer>
      {/* ── Top newsletter band: white + continuous grid ── */}
      <div className="relative overflow-hidden bg-white dark:bg-[#050f2e]">
        {/* Continuous grid — same spec as FinalCTA so it flows seamlessly */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,124,244,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="section-container py-16 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs text-[#007cf4] font-semibold tracking-widest uppercase mb-4">Stay Ahead</p>
            <h3 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl leading-tight">
              Insights for the{' '}
              <span className="gradient-text">Modern Enterprise.</span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-relaxed max-w-sm">
              Strategy, AI, and operational intelligence — delivered to your inbox monthly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            {submitted ? (
              <div className="flex-1 flex items-center justify-center gap-2 bg-[#007cf4]/10 border border-[#007cf4]/30 rounded-full px-6 py-3.5 text-[#007cf4] text-sm font-semibold">
                <span>✓</span> You&apos;re on the list!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 bg-white dark:bg-[#0a1a4a] border border-black/15 dark:border-white/20 rounded-full px-5 py-3.5 text-gray-800 dark:text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-[#007cf4]/60 transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  className="text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all whitespace-nowrap hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ── Dark navy body ── */}
      <div style={{ background: 'linear-gradient(180deg, #033a9d 0%, #022d80 100%)' }}>
        {/* Tech partner marquee */}
        <div className="border-b border-white/10 py-6 overflow-hidden">
          <p className="text-center text-[10px] text-white/40 font-semibold uppercase tracking-widest mb-4">Technology Partners</p>
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="inline-flex items-center bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-semibold text-white/60 hover:text-[#36c5f0] hover:border-[#36c5f0]/40 transition-colors cursor-default shrink-0">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Main link grid */}
        <div className="section-container py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Logo variant="full" theme="dark" />
              <p className="text-white/40 text-xs leading-relaxed mt-4 mb-6 max-w-[200px]">
                AI, Automation & Business Transformation for ambitious organizations.
              </p>
              <div className="flex gap-2">
                {['in', 'X', 'yt'].map(s => (
                  <a key={s} href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors text-[10px] font-bold">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {([['Solutions', solutions], ['Industries', industries], ['Company', company], ['Resources', resources], ['Legal', legal]] as [string, string[]][]).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map(l => (
                    <li key={l}><a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10">
          <div className="section-container py-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {certs.map(c => (
                <div key={c.label} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2">
                  <span className="text-sm">{c.icon}</span>
                  <span className="text-xs font-semibold text-white/70">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Sync4Tech Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 text-xs hover:text-white/70 transition-colors">Privacy</a>
              <a href="#" className="text-white/30 text-xs hover:text-white/70 transition-colors">Terms</a>
              <a href="#" className="text-white/30 text-xs hover:text-white/70 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
