'use client'

import { motion } from 'framer-motion'

interface WaveProps {
  color?: string
  opacity?: number
  className?: string
}

export default function WaveAnimation({ color = '#007cf4', opacity = 0.18, className = '' }: WaveProps) {
  return (
    <div className={`absolute inset-x-0 pointer-events-none overflow-hidden ${className}`} style={{ height: '80px' }}>
      <motion.svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute w-full"
        style={{ opacity }}
        initial={{ y: '-100%' }}
        animate={{ y: '200%' }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
      >
        <path
          d="M0 40 C180 10 360 70 540 40 C720 10 900 70 1080 40 C1260 10 1380 60 1440 40 L1440 80 L0 80 Z"
          fill={color}
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute w-full"
        style={{ opacity: opacity * 0.5 }}
        initial={{ y: '-100%' }}
        animate={{ y: '200%' }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4, delay: 2.5 }}
      >
        <path
          d="M0 50 C200 20 400 70 600 45 C800 20 1000 70 1200 45 C1300 30 1380 55 1440 45 L1440 80 L0 80 Z"
          fill={color}
        />
      </motion.svg>
    </div>
  )
}
