'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <span className="text-white font-inter-tight font-black text-sm tracking-tight">S4</span>
              </div>
              <span className="font-inter-tight font-bold text-xl tracking-tight text-black">
                Sync4Tech
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300"
              >
                Book Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="section-container py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-3xl font-inter-tight font-bold text-black hover:text-accent transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-full text-base font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
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
