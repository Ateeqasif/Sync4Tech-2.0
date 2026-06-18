import { en } from './en'
import { ar } from './ar'
import { fr } from './fr'
import { ur } from './ur'

export type Locale = 'en' | 'ar' | 'fr' | 'ur'
export type Translations = typeof en

export const translations: Record<Locale, Translations> = { en, ar, fr, ur }

export const localeConfig: Record<Locale, { label: string; flag: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'English', flag: '🇬🇧', dir: 'ltr' },
  ar: { label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  fr: { label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  ur: { label: 'اردو',    flag: '🇵🇰', dir: 'rtl' },
}

export { en }
