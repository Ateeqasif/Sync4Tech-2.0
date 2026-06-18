'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

const navLinks = [
  { key: 'solutions' as const, href: '/solutions' },
  { key: 'industries' as const, href: '/industries' },
  { key: 'caseStudies' as const, href: '/case-studies' },
  { key: 'insights' as const, href: '/insights' },
  { key: 'about' as const, href: '/about' },
  { key: 'careers' as const, href: '/careers' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { t } = useLanguage()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600
    setScrolled(y > threshold)
  })

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        background: scrolled ? 'rgba(224, 242, 254, 0.72)' : 'rgba(255,255,255,0)',
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

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.key}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-[#007cf4] dark:text-[#36c5f0]'
                      : 'text-[#033a9d]/80 hover:text-[#007cf4] dark:text-white/80 dark:hover:text-[#36c5f0]'
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle + Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* CTA */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #007cf4 0%, #36c5f0 100%)' }}
            >
              {t.nav.cta}
            </Link>
          </motion.div>

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
            className="md:hidden overflow-hidden border-t border-[#007cf4]/15 dark:border-white/10"
            style={{ background: 'rgba(224,242,254,0.95)', backdropFilter: 'blur(20px)' }}
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`text-base font-medium transition-colors py-1 ${
                    isActive(link.href)
                      ? 'text-[#007cf4]'
                      : 'text-[#033a9d]/80 hover:text-[#007cf4] dark:text-white/80 dark:hover:text-[#36c5f0]'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
              <div className="mt-2">
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
