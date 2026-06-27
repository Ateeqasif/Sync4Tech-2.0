'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

const servicesMega = [
  {
    label: 'Data Intelligence Suite',
    href: '/services/data-intelligence',
    color: '#007cf4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13l4-4 3 3 4-5 3 3" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="#007cf4" strokeWidth="1.2" opacity="0.4"/>
      </svg>
    ),
    items: [
      { label: 'Data Engineering', href: '/services/data-intelligence/data-engineering' },
      { label: 'Data Management', href: '/services/data-intelligence/data-management' },
      { label: 'Business Intelligence', href: '/services/data-intelligence/business-intelligence' },
      { label: 'Analytics & Reporting', href: '/services/data-intelligence/analytics-reporting' },
      { label: 'Data Science & AI', href: '/services/data-intelligence/data-science-ai' },
      { label: 'ETL Pipelines', href: '/services/data-intelligence/etl-pipelines' },
      { label: 'Data Warehousing', href: '/services/data-intelligence/data-warehousing' },
      { label: 'Predictive Analytics', href: '/services/data-intelligence/predictive-analytics' },
    ],
  },
  {
    label: 'Business Process Automation',
    href: '/services/automation',
    color: '#36c5f0',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="#36c5f0" strokeWidth="1.5"/>
        <path d="M9 1v3M9 14v3M1 9h3M14 9h3M3.2 3.2l2.1 2.1M12.7 12.7l2.1 2.1M14.8 3.2l-2.1 2.1M5.3 12.7l-2.1 2.1" stroke="#36c5f0" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      { label: 'Workflow Automation', href: '/services/automation/workflow-automation' },
      { label: 'CRM Automation', href: '/services/automation/crm-automation' },
      { label: 'Sales Automation', href: '/services/automation/sales-automation' },
      { label: 'Marketing Automation', href: '/services/automation/marketing-automation' },
      { label: 'AI Automation', href: '/services/automation/ai-automation' },
      { label: 'ERP & Business Systems', href: '/services/automation/erp-business-systems' },
      { label: 'Internal Operations', href: '/services/automation/internal-operations' },
      { label: 'Document Automation', href: '/services/automation/document-automation' },
    ],
  },
  {
    label: 'Consulting & Strategy',
    href: '/services/consulting',
    color: '#007cf4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2l1.5 4.5H15l-3.7 2.7 1.4 4.3L9 11l-3.7 2.5 1.4-4.3L3 6.5h4.5L9 2z" stroke="#007cf4" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      { label: 'Business Analysis', href: '/services/consulting/business-analysis' },
      { label: 'Digital Transformation', href: '/services/consulting/digital-transformation' },
      { label: 'Solution Architecture', href: '/services/consulting/solution-architecture' },
      { label: 'Project & Delivery Mgmt', href: '/services/consulting/project-delivery' },
      { label: 'Governance & Compliance', href: '/services/consulting/governance-compliance' },
      { label: 'AI Readiness Assessment', href: '/services/consulting/ai-readiness' },
      { label: 'Automation Audit', href: '/services/consulting/automation-audit' },
      { label: 'Fractional CDO / CAO', href: '/services/consulting/fractional-cdo-cao' },
    ],
  },
]

const industriesMega = [
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Retail & E-Commerce', href: '/industries/retail-ecommerce' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Financial Services', href: '/industries/financial-services' },
  { label: 'Legal', href: '/industries/legal' },
  { label: 'Technology & SaaS', href: '/industries/technology-saas' },
  { label: 'Professional Services', href: '/industries/professional-services' },
  { label: 'Hospitality & Travel', href: '/industries/hospitality-travel' },
  { label: 'Non-Profit & Public Sector', href: '/industries/nonprofit-public-sector' },
]

const simpleLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState<'services' | 'industries' | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { scrollY } = useScroll()
  const { t } = useLanguage()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 80))

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const openMega = (key: 'services' | 'industries') => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(key)
  }
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(null), 120)
  }
  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        background: scrolled ? 'rgba(224, 242, 254, 0.85)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(0px)',
        borderBottomColor: scrolled ? 'rgba(0,124,244,0.15)' : 'rgba(0,0,0,0)',
        boxShadow: scrolled ? '0 1px 24px rgba(0,124,244,0.07)' : 'none',
      }}
      style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          <Link href="/"><Logo variant="full" theme="light" /></Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">

            {/* Services mega-menu trigger */}
            <li
              className="relative"
              onMouseEnter={() => openMega('services')}
              onMouseLeave={closeMega}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  megaOpen === 'services' || isActive('/services')
                    ? 'text-[#007cf4]'
                    : 'text-[#033a9d]/80 hover:text-[#007cf4]'
                }`}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${megaOpen === 'services' ? 'rotate-180' : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {megaOpen === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] rounded-2xl overflow-hidden shadow-2xl border border-black/8"
                    style={{ background: 'white' }}
                    onMouseEnter={keepOpen}
                    onMouseLeave={closeMega}
                  >
                    {/* Top bar */}
                    <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Services</span>
                      <Link href="/services" className="text-xs text-[#007cf4] font-semibold hover:underline">View all →</Link>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-gray-100">
                      {servicesMega.map((col) => (
                        <div key={col.label} className="p-5">
                          <Link href={col.href} className="block mb-3 group">
                            <span className="text-xs font-black text-gray-800 uppercase tracking-wide group-hover:text-[#007cf4] transition-colors">{col.label}</span>
                          </Link>
                          <ul className="flex flex-col">
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block px-0 py-1.5 text-sm text-gray-500 hover:text-[#007cf4] transition-colors duration-150"
                                  onClick={() => setMegaOpen(null)}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Industries mega-menu trigger */}
            <li
              className="relative"
              onMouseEnter={() => openMega('industries')}
              onMouseLeave={closeMega}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  megaOpen === 'industries' || isActive('/industries')
                    ? 'text-[#007cf4]'
                    : 'text-[#033a9d]/80 hover:text-[#007cf4]'
                }`}
              >
                Industries
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${megaOpen === 'industries' ? 'rotate-180' : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {megaOpen === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] rounded-2xl overflow-hidden shadow-2xl border border-black/8"
                    style={{ background: 'white' }}
                    onMouseEnter={keepOpen}
                    onMouseLeave={closeMega}
                  >
                    <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Industry Solutions</span>
                      <Link href="/industries" className="text-xs text-[#007cf4] font-semibold hover:underline">View all →</Link>
                    </div>
                    <div className="p-5 grid grid-cols-4 gap-x-4">
                      {industriesMega.map((ind) => (
                        <Link
                          key={ind.href}
                          href={ind.href}
                          className="block py-1.5 text-sm text-gray-500 hover:text-[#007cf4] transition-colors duration-150"
                          onClick={() => setMegaOpen(null)}
                        >
                          {ind.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Simple links */}
            {simpleLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-[#007cf4] dark:text-[#36c5f0]'
                      : 'text-[#033a9d]/80 hover:text-[#007cf4] dark:text-white/80 dark:hover:text-[#36c5f0]'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Right side controls */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(o => !o)}
          >
            <span className={`w-5 h-0.5 bg-[#033a9d] dark:bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-[#033a9d] dark:bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-[#033a9d] dark:bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[#007cf4]/15"
            style={{ background: 'rgba(224,242,254,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="section-container py-5 flex flex-col gap-1">

              {/* Services accordion */}
              <button
                className="flex items-center justify-between py-2.5 text-sm font-semibold text-[#033a9d]"
                onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
              >
                Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}>
                  <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {mobileExpanded === 'services' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="pl-4 pb-2 flex flex-col gap-3">
                      {servicesMega.map(col => (
                        <div key={col.label}>
                          <Link href={col.href} className="text-xs font-black text-[#007cf4] uppercase tracking-wider mb-1 block" onClick={() => setMobileOpen(false)}>{col.label}</Link>
                          <div className="flex flex-col gap-0.5">
                            {col.items.map(item => (
                              <Link key={item.href} href={item.href} className="text-sm text-gray-600 py-1 hover:text-[#007cf4]" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Industries accordion */}
              <button
                className="flex items-center justify-between py-2.5 text-sm font-semibold text-[#033a9d]"
                onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
              >
                Industries
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform duration-200 ${mobileExpanded === 'industries' ? 'rotate-180' : ''}`}>
                  <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {mobileExpanded === 'industries' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="pl-4 pb-2 grid grid-cols-2 gap-0.5">
                      {industriesMega.map(ind => (
                        <Link key={ind.href} href={ind.href} className="text-sm text-gray-600 py-1.5 hover:text-[#007cf4]" onClick={() => setMobileOpen(false)}>{ind.label}</Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Simple links */}
              {simpleLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold py-2.5 border-t border-[#007cf4]/10 transition-colors ${isActive(link.href) ? 'text-[#007cf4]' : 'text-[#033a9d]/80 hover:text-[#007cf4]'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 pt-3 border-t border-[#007cf4]/10 flex items-center gap-3">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white mt-2"
                style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
