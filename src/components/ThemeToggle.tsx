'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const SunIcon = ({ color }: { color: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = ({ color }: { color: string }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggle}
      className="relative flex items-center w-14 h-7 rounded-full p-0.5 transition-colors duration-500 focus:outline-none"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #033a9d, #007cf4)'
          : 'linear-gradient(135deg, #bae6fd, #7dd3fc)',
        boxShadow: isDark
          ? '0 0 12px rgba(0,124,244,0.4)'
          : '0 0 8px rgba(0,124,244,0.2)',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      {/* Sun always on left */}
      <span className="absolute left-1.5 flex items-center justify-center">
        <SunIcon color={isDark ? 'rgba(255,255,255,0.4)' : '#007cf4'} />
      </span>

      {/* Moon always on right */}
      <span className="absolute right-1.5 flex items-center justify-center">
        <MoonIcon color={isDark ? '#36c5f0' : 'rgba(0,124,244,0.3)'} />
      </span>

      {/* Thumb slides left (light) or right (dark) */}
      <motion.div
        className="w-6 h-6 rounded-full shadow-md flex items-center justify-center z-10"
        style={{ background: '#ffffff' }}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark
          ? <MoonIcon color="#007cf4" />
          : <SunIcon color="#007cf4" />
        }
      </motion.div>
    </motion.button>
  )
}
