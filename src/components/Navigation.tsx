'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px]">
            <a href="#" aria-label="Sync4Tech Home">
              <Logo theme={scrolled ? 'light' : 'light'} />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-navy rounded-lg hover:bg-brand-blue/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-brand-navy transition-colors">
                Contact
              </a>
              <a
                href="#contact"
                className="btn-glow inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)' }}
              >
                Book Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-black/5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-container pt-24 pb-10 flex flex-col h-full">
              <div className="flex flex-col gap-2 flex-1">
                {[...navLinks, { label: 'Contact', href: '#contact' }].map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-4xl font-inter-tight font-black text-gray-900 hover:text-brand-blue transition-colors py-3 border-b border-gray-100"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#contact"
                className="mt-8 flex items-center justify-center text-white font-bold text-lg py-4 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMenuOpen(false)}
              >
                Book Strategy Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
