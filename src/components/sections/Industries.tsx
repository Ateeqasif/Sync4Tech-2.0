'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

const industries = [
  { name: 'Real Estate', icon: '🏢', desc: 'Property intelligence & deal automation' },
  { name: 'Healthcare', icon: '🏥', desc: 'Clinical workflows & compliance automation' },
  { name: 'Financial Services', icon: '🏦', desc: 'Risk, reporting & regulatory automation' },
  { name: 'Manufacturing', icon: '🏭', desc: 'Supply chain & quality intelligence' },
  { name: 'Technology', icon: '💻', desc: 'DevOps, support & growth automation' },
  { name: 'Retail & E-Commerce', icon: '🛒', desc: 'Demand forecasting & CX personalization' },
  { name: 'Legal Services', icon: '⚖️', desc: 'Contract intelligence & case automation' },
  { name: 'Education', icon: '🎓', desc: 'Student journey & admin automation' },
]

function TiltCard({ industry, i }: { industry: typeof industries[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-60, 60], [8, -8])
  const rotateY = useTransform(x, [-60, 60], [-8, 8])

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      className="group relative bg-gray-50 dark:bg-[#0a1a4a] border border-black/8 dark:border-white/10 rounded-2xl p-6 overflow-hidden cursor-pointer"
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
      />
      <div className="relative z-10">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
        <h3 className="font-inter-tight font-bold text-black dark:text-white group-hover:text-white text-base mb-1 transition-colors duration-300">{industry.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 group-hover:text-white/70 text-xs leading-relaxed transition-colors duration-300">{industry.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Industries() {
  return (
    <section className="py-section bg-white dark:bg-[#050f2e]" id="industries">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Industries</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Built for the Sectors
            <br />
            <span className="gradient-text">That Drive the World.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => <TiltCard key={i} industry={ind} i={i} />)}
        </div>
      </div>
    </section>
  )
}
