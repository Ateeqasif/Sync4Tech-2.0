'use client'

import { useEffect } from 'react'

// Site is light-mode only — strip any stored/inherited dark preference
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  }, [])

  return <>{children}</>
}
