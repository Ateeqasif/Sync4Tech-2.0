'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// ─── Searchable site index ────────────────────────────────────────────────────
const INDEX = [
  // Services – Data Intelligence
  { title: 'Data Engineering',          href: '/services/data-intelligence/data-engineering',        category: 'Data Intelligence' },
  { title: 'Data Management',           href: '/services/data-intelligence/data-management',         category: 'Data Intelligence' },
  { title: 'Business Intelligence',     href: '/services/data-intelligence/business-intelligence',   category: 'Data Intelligence' },
  { title: 'Analytics & Reporting',     href: '/services/data-intelligence/analytics-reporting',     category: 'Data Intelligence' },
  { title: 'Data Science & AI',         href: '/services/data-intelligence/data-science-ai',         category: 'Data Intelligence' },
  { title: 'ETL Pipelines',             href: '/services/data-intelligence/etl-pipelines',           category: 'Data Intelligence' },
  { title: 'Data Warehousing',          href: '/services/data-intelligence/data-warehousing',        category: 'Data Intelligence' },
  { title: 'Predictive Analytics',      href: '/services/data-intelligence/predictive-analytics',    category: 'Data Intelligence' },
  // Services – Automation
  { title: 'Workflow Automation',       href: '/services/automation/workflow-automation',             category: 'Automation' },
  { title: 'CRM Automation',            href: '/services/automation/crm-automation',                 category: 'Automation' },
  { title: 'Sales Automation',          href: '/services/automation/sales-automation',               category: 'Automation' },
  { title: 'Marketing Automation',      href: '/services/automation/marketing-automation',           category: 'Automation' },
  { title: 'AI Automation',             href: '/services/automation/ai-automation',                  category: 'Automation' },
  { title: 'ERP & Business Systems',    href: '/services/automation/erp-business-systems',           category: 'Automation' },
  { title: 'Internal Operations',       href: '/services/automation/internal-operations',            category: 'Automation' },
  { title: 'Document Automation',       href: '/services/automation/document-automation',            category: 'Automation' },
  // Services – Consulting
  { title: 'Business Analysis',         href: '/services/consulting/business-analysis',              category: 'Consulting' },
  { title: 'Digital Transformation',    href: '/services/consulting/digital-transformation',         category: 'Consulting' },
  { title: 'Solution Architecture',     href: '/services/consulting/solution-architecture',          category: 'Consulting' },
  { title: 'Project & Delivery Management', href: '/services/consulting/project-delivery',           category: 'Consulting' },
  { title: 'Governance & Compliance',   href: '/services/consulting/governance-compliance',          category: 'Consulting' },
  { title: 'AI Readiness Assessment',   href: '/services/consulting/ai-readiness',                   category: 'Consulting' },
  { title: 'Automation Audit',          href: '/services/consulting/automation-audit',               category: 'Consulting' },
  { title: 'Fractional CDO / CAO',      href: '/services/consulting/fractional-cdo-cao',             category: 'Consulting' },
  // Industries
  { title: 'Real Estate',               href: '/industries/real-estate',         category: 'Industries' },
  { title: 'Healthcare',                href: '/industries/healthcare',           category: 'Industries' },
  { title: 'Manufacturing',             href: '/industries/manufacturing',        category: 'Industries' },
  { title: 'Retail & E-Commerce',       href: '/industries/retail-ecommerce',    category: 'Industries' },
  { title: 'Logistics',                 href: '/industries/logistics',            category: 'Industries' },
  { title: 'Education',                 href: '/industries/education',            category: 'Industries' },
  { title: 'Financial Services',        href: '/industries/financial-services',  category: 'Industries' },
  { title: 'Legal',                     href: '/industries/legal',               category: 'Industries' },
  { title: 'Technology & SaaS',         href: '/industries/technology-saas',     category: 'Industries' },
  { title: 'Professional Services',     href: '/industries/professional-services', category: 'Industries' },
  { title: 'Hospitality & Travel',      href: '/industries/hospitality-travel',  category: 'Industries' },
  { title: 'Non-Profit & Public Sector', href: '/industries/nonprofit-public-sector', category: 'Industries' },
  // Pages
  { title: 'Home',           href: '/',                   category: 'Page' },
  { title: 'Services',       href: '/services',           category: 'Page' },
  { title: 'Industries',     href: '/industries',         category: 'Page' },
  { title: 'Case Studies',   href: '/case-studies',       category: 'Page' },
  { title: 'Insights',       href: '/insights',           category: 'Page' },
  { title: 'Pricing',        href: '/pricing',            category: 'Page' },
  { title: 'Careers',        href: '/careers',            category: 'Page' },
  { title: 'Contact',        href: '/contact',            category: 'Page' },
  { title: 'About Sync4Tech', href: '/about',             category: 'About' },
  { title: 'Our Mission',    href: '/about/mission',      category: 'About' },
  { title: 'Our Team',       href: '/about/team',         category: 'About' },
  { title: 'Partners',       href: '/about/partners',     category: 'About' },
]

const QUICK_LINKS = [
  { label: 'Services',     href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Industries',   href: '/industries' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'About',        href: '/about' },
  { label: 'Contact',      href: '/contact' },
]

const PLACEHOLDERS = [
  'Search services, industries, insights...',
  'Try "CRM automation"',
  'Try "healthcare automation"',
  'Try "data engineering"',
  'Try "digital transformation"',
]

function search(query: string) {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return INDEX.filter(
    item =>
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  ).slice(0, 8)
}

// ─── Category badge colour map ────────────────────────────────────────────────
const CAT_COLOR: Record<string, string> = {
  'Data Intelligence': '#007cf4',
  'Automation':        '#36c5f0',
  'Consulting':        '#033a9d',
  'Industries':        '#007cf4',
  'Page':              '#6b7280',
  'About':             '#6b7280',
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const results = search(query)

  // Cycle placeholder text
  useEffect(() => {
    if (!open) return
    const id = setInterval(() => setPlaceholderIdx(i => (i + 1) % PLACEHOLDERS.length), 3000)
    return () => clearInterval(id)
  }, [open])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 120)
    }
  }, [open])

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') { onClose(); return }
      const list = results.length ? results : []
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, list.length - 1)) }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)) }
      if (e.key === 'Enter' && list[active]) {
        router.push(list[active].href)
        onClose()
      }
    },
    [open, results, active, onClose, router]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Reset active when results change
  useEffect(() => setActive(0), [query])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col"
          style={{ background: 'rgba(5,10,25,0.97)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          onClick={onClose}
        >
          {/* Close button */}
          <div className="flex justify-end px-6 pt-5" onClick={e => e.stopPropagation()}>
            <motion.button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all duration-200"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              aria-label="Close search"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.button>
          </div>

          {/* Search area */}
          <div
            className="flex-1 flex flex-col items-center justify-start pt-[12vh] px-6"
            onClick={e => e.stopPropagation()}
          >
            {/* Label */}
            <motion.p
              className="text-white/30 text-xs font-bold tracking-[0.25em] uppercase mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
            >
              Search Sync4Tech
            </motion.p>

            {/* Input row */}
            <motion.div
              className="w-full max-w-3xl flex items-center gap-4 border-b border-white/15 pb-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-white/30">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={PLACEHOLDERS[placeholderIdx]}
                className="flex-1 bg-transparent text-white text-2xl md:text-3xl font-light outline-none placeholder:text-white/20 caret-[#007cf4]"
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="shrink-0 text-white/30 hover:text-white/70 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
            </motion.div>

            {/* Results */}
            <motion.div
              className="w-full max-w-3xl mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              {query && results.length === 0 && (
                <p className="text-white/25 text-sm text-center mt-10">No results for &ldquo;{query}&rdquo;</p>
              )}

              {results.length > 0 && (
                <ul className="flex flex-col divide-y divide-white/[0.06]">
                  {results.map((item, i) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center justify-between gap-6 py-3.5 px-3 rounded-xl transition-all duration-150 group ${
                          active === i ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'
                        }`}
                        onMouseEnter={() => setActive(i)}
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div
                            className="shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: CAT_COLOR[item.category] ?? '#007cf4' }}
                          />
                          <span className="text-white/85 text-base font-medium truncate group-hover:text-white transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span
                            className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                            style={{
                              color: CAT_COLOR[item.category] ?? '#007cf4',
                              background: `${CAT_COLOR[item.category] ?? '#007cf4'}18`,
                            }}
                          >
                            {item.category}
                          </span>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/20 group-hover:text-white/50 transition-colors">
                            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Quick links shown when no query */}
              {!query && (
                <div>
                  <p className="text-white/25 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Quick links</p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_LINKS.map(l => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={onClose}
                        className="px-4 py-2 rounded-full border border-white/10 text-white/50 hover:border-[#007cf4]/50 hover:text-white hover:bg-[#007cf4]/10 text-sm font-medium transition-all duration-200"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  <p className="text-white/15 text-xs mt-10 text-center">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-white/8 font-mono text-white/25">↑</kbd>{' '}
                    <kbd className="px-1.5 py-0.5 rounded bg-white/8 font-mono text-white/25">↓</kbd> to navigate,{' '}
                    <kbd className="px-1.5 py-0.5 rounded bg-white/8 font-mono text-white/25">Enter</kbd> to open,{' '}
                    <kbd className="px-1.5 py-0.5 rounded bg-white/8 font-mono text-white/25">Esc</kbd> to close
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
