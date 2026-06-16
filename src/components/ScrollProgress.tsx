'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9990] pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #033a9d, #007cf4, #36c5f0)',
      }}
    />
  )
}
