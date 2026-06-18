'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { Locale, Translations, translations, localeConfig } from '@/i18n'

interface LanguageContextType {
  locale: Locale
  t: Translations
  setLocale: (l: Locale) => void
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en', t: translations.en, setLocale: () => {}, dir: 'ltr'
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale
    if (saved && translations[saved]) setLocaleState(saved)
  }, [])

  useEffect(() => {
    const dir = localeConfig[locale].dir
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', locale)
    localStorage.setItem('locale', locale)
  }, [locale])

  const setLocale = (l: Locale) => setLocaleState(l)

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale, dir: localeConfig[locale].dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
