import { en } from './en'
import { ar } from './ar'
import { fr } from './fr'
import { ko } from './ko'

export type Locale = 'en' | 'ar' | 'fr' | 'ko'
export type Translations = typeof en

export const translations: Record<Locale, Translations> = { en, ar, fr, ko }

export const localeConfig: Record<Locale, { label: string; flag: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'English', flag: '🌐', dir: 'ltr' },
  ar: { label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  fr: { label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  ko: { label: '한국어',   flag: '🇰🇷', dir: 'ltr' },
}

export { en }
