'use client'

import { useState } from 'react'
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

const locations = [
  { flag: '🇺🇸', city: 'United States', detail: 'North America HQ' },
  { flag: '🇬🇧', city: 'United Kingdom', detail: 'Europe Office' },
  { flag: '🇵🇰', city: 'Pakistan', detail: 'Delivery Centre' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <footer className="bg-[#050a1a] border-t border-white/5">
      {/* Top statement band */}
      <div className="border-b border-white/5">
        <div className="section-container py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs text-[#36c5f0] font-semibold tracking-widest uppercase mb-4">Stay Ahead</p>
            <h3 className="font-inter-tight font-black text-white text-3xl md:text-4xl leading-tight">
              Insights for the <span className="gradient-text">Modern Enterprise.</span>
            </h3>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-sm">
              Strategy, AI, and operational intelligence — delivered to your inbox monthly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            {submitted ? (
              <div className="flex-1 flex items-center justify-center gap-2 bg-[#007cf4]/10 border border-[#007cf4]/30 rounded-full px-6 py-3.5 text-[#36c5f0] text-sm font-semibold">
                <span>✓</span> You&apos;re on the list!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#007cf4]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#007cf4] hover:bg-[#36c5f0] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Tech partner marquee */}
      <div className="border-b border-white/5 py-6 overflow-hidden">
        <p className="text-center text-[10px] text-gray-600 font-semibold uppercase tracking-widest mb-4">Technology Partners</p>
        <div className="relative">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-400 hover:text-[#36c5f0] hover:border-[#36c5f0]/30 transition-colors cursor-default shrink-0">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main link grid */}
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo variant="full" theme="dark" />
            <p className="text-gray-600 text-xs leading-relaxed mt-4 mb-6 max-w-[200px]">
              AI, Automation & Business Transformation for ambitious organizations.
            </p>
            <div className="flex gap-2">
              {['in', 'X', 'yt'].map(s => (
                <a key={s} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-600 hover:text-white hover:border-white/30 transition-colors text-[10px] font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="flex flex-col gap-2.5">
              {solutions.map(l => (
                <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Industries</h4>
            <ul className="flex flex-col gap-2.5">
              {industries.map(l => (
                <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {company.map(l => (
                <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {resources.map(l => (
                <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {legal.map(l => (
                <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications + Locations */}
      <div className="border-t border-white/5">
        <div className="section-container py-10">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {certs.map(c => (
              <div key={c.label} className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-4 py-2">
                <span className="text-sm">{c.icon}</span>
                <span className="text-xs font-semibold text-gray-300">{c.label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {locations.map(loc => (
              <div key={loc.city} className="bg-white/3 border border-white/8 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{loc.flag}</div>
                <div className="text-white font-semibold text-sm">{loc.city}</div>
                <div className="text-gray-600 text-xs mt-0.5">{loc.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Sync4Tech Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 text-xs hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="text-gray-700 text-xs hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="text-gray-700 text-xs hover:text-gray-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
