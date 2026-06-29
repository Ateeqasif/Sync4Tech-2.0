'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Locale, localeConfig } from '@/i18n'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = localeConfig[locale]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 h-7 rounded-full border border-[#007cf4]/25 bg-white/80 dark:bg-white/5 dark:border-white/15 text-xs font-normal text-[#033a9d] dark:text-white/80 hover:border-[#007cf4]/50 transition-all"
      >
        <span>{current.flag}</span>
        <span>{locale.toUpperCase()}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 bg-white border border-black/8 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden z-50 min-w-[150px]"
          >
            {(Object.entries(localeConfig) as [Locale, typeof localeConfig[Locale]][]).map(([key, cfg]) => (
              <button
                key={key}
                onClick={() => { setLocale(key); setOpen(false) }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left ${
                  locale === key
                    ? 'bg-[#007cf4]/8 text-[#007cf4] font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <span className="text-base">{cfg.flag}</span>
                <span>{cfg.label}</span>
                {locale === key && (
                  <svg className="ml-auto" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#007cf4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
