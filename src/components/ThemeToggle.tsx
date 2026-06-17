'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

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
      {/* Track icons */}
      <span className="absolute left-1.5 text-[10px]">{isDark ? '🌙' : ''}</span>
      <span className="absolute right-1.5 text-[10px]">{!isDark ? '☀️' : ''}</span>

      {/* Thumb */}
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-md"
        style={{ background: '#ffffff' }}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}
