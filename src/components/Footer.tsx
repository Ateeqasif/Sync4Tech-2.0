'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from './Logo'
import { useLanguage } from '@/contexts/LanguageContext'
import { TOOL_LINKS } from '@/lib/toolLinks'

const solutions = [
  { label: 'Data Intelligence Suite', href: '/services/data-intelligence' },
  { label: 'Business Process Automation', href: '/services/automation' },
  { label: 'Consulting & Strategy', href: '/services/consulting' },
  { label: 'Workflow Automation', href: '/services/automation/workflow-automation' },
  { label: 'CRM Automation', href: '/services/automation/crm-automation' },
  { label: 'View all Services', href: '/services' },
]
const industries = [
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Financial Services', href: '/industries/financial-services' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Retail & E-Commerce', href: '/industries/retail-ecommerce' },
  { label: 'View all Industries', href: '/industries' },
]
const company = [
  { label: 'About Sync4Tech', href: '/about' },
  { label: 'Our Mission', href: '/about/mission' },
  { label: 'Our Team', href: '/about/team' },
  { label: 'Partners', href: '/about/partners' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
]
const resources = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'AI Articles', href: '/insights/category/ai' },
  { label: 'Automation Guides', href: '/insights/category/automation' },
  { label: 'Data Insights', href: '/insights/category/data' },
]
const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

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
  const { t } = useLanguage()

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch {}
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <footer>
      {/* ── Top newsletter band: white + continuous grid ── */}
      <div className="relative overflow-hidden bg-[#f3f4f6]">
        {/* Continuous grid same spec as FinalCTA so it flows seamlessly */}
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
            <p className="text-xs text-[#007cf4] font-semibold tracking-widest uppercase mb-4">{t.footer.stayAhead}</p>
            <h3 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl leading-tight">
              {t.footer.heading}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-relaxed max-w-sm">
              {t.footer.subtitle}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            {submitted ? (
              <div className="flex-1 flex items-center justify-center gap-2 bg-[#007cf4]/10 border border-[#007cf4]/30 rounded-full px-6 py-3.5 text-[#007cf4] text-sm font-semibold">
                <span>✓</span> {t.footer.successMsg}
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t.footer.subscribePlaceholder}
                  className="flex-1 bg-white border border-black/15 dark:border-white/20 rounded-full px-5 py-3.5 text-gray-800 dark:text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-[#007cf4]/60 transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all whitespace-nowrap hover:opacity-90 disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
                >
                  {submitting ? '…' : t.footer.subscribeBtn}
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
            {[...techStack, ...techStack].map((t, i) => {
              const url = TOOL_LINKS[t]
              const cls = "inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-semibold text-white/60 hover:text-[#36c5f0] hover:border-[#36c5f0]/40 transition-colors shrink-0"
              return url ? (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={`${cls} cursor-pointer group`} onClick={e => e.stopPropagation()}>
                  {t}
                  <svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 8.5l7-7M8.5 8.5V1.5H1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ) : (
                <span key={i} className={`${cls} cursor-default`}>{t}</span>
              )
            })}
          </div>
        </div>

        {/* Main link grid */}
        <div className="section-container py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/"><Logo variant="full" theme="dark" /></Link>
              <p className="text-white/40 text-xs leading-relaxed mt-4 mb-6 max-w-[200px]">
                AI, Automation & Business Transformation for ambitious organizations.
              </p>
              <div className="flex gap-2 flex-wrap">
                {[
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/company/sync4tech',
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/sync4tech.global',
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/sync4tech.global/',
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Upwork',
                    href: 'https://www.upwork.com/agencies/1833810957795667851/',
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                      </svg>
                    ),
                  },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {([['Solutions', solutions], ['Industries', industries], ['Company', company], ['Resources', resources], ['Legal', legal]] as [string, {label: string; href: string}[]][]).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map(l => (
                    <li key={l.href}><Link href={l.href} className="text-white/40 text-sm hover:text-white transition-colors">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-white/30 text-xs hover:text-white/70 transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="text-white/30 text-xs hover:text-white/70 transition-colors">Terms</Link>
              <Link href="/cookie-policy" className="text-white/30 text-xs hover:text-white/70 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
