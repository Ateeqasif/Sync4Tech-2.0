'use client'

import { motion } from 'framer-motion'

/**
 * Decorative oversized Sync4Tech brand icon used as a subtle section watermark.
 * position: 'center' | 'right' | 'left' | 'top-right' | 'bottom-left'
 * size: width in px (default 680)
 */
export default function BrandWatermark({
  position = 'center',
  size = 680,
  opacity = 0.055,
  rotate = true,
}: {
  position?: 'center' | 'right' | 'left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: number
  opacity?: number
  rotate?: boolean
}) {
  const posClass: Record<string, string> = {
    center:       'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    right:        'absolute -right-16 top-1/2 -translate-y-1/2',
    left:         'absolute -left-16 top-1/2 -translate-y-1/2',
    'top-right':  'absolute -right-24 -top-24',
    'bottom-left':'absolute -left-24 -bottom-24',
    'bottom-right':'absolute -right-24 -bottom-24',
  }

  return (
    <motion.div
      className={`${posClass[position]} pointer-events-none select-none`}
      animate={rotate
        ? { rotate: [0, 5, 0, -5, 0], scale: [1, 1.03, 1, 0.98, 1] }
        : undefined}
      transition={rotate
        ? { duration: 28, repeat: Infinity, ease: 'easeInOut' }
        : undefined}
    >
      <svg
        viewBox="117 408 210 184"
        width={size}
        height={size * (184 / 210)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <path d="M174.627,418.223 L238.381,417.821 L238.795,483.419 L206.039,483.625 L205.831,450.743 L193.745,450.819 L174.945,483.821 L206.039,483.625 L206.246,516.341 L137.328,516.775 L127.769,500.477 L137.121,484.06 Z" fill="#007cf4" />
        <path d="M270.245,581.776 L206.659,582.179 L206.247,516.341 L238.821,516.133 L239.031,549.058 L251.202,548.981 L270.136,515.746 L238.821,515.943 L238.615,483.623 L307.557,483.189 L317.119,499.493 L307.763,515.916 Z" fill="#36c5f0" />
      </svg>
    </motion.div>
  )
}
