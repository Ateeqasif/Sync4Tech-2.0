'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

const industries = [
  {
    name: 'Real Estate',
    desc: 'Property intelligence & deal automation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 28V14L16 4l12 10v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="12" y="18" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 4v3M8 11v2M24 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="10" r="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22.5 10h3M24 8.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    desc: 'Clinical workflows & compliance automation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M11 8V6a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 14v8M12 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Financial Services',
    desc: 'Risk, reporting & regulatory automation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 8v2M16 22v2M11 11.27A4 4 0 0116 10a4 4 0 010 8 4 4 0 01-4-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 14h2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Manufacturing',
    desc: 'Supply chain & quality intelligence',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="18" width="26" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 18l6-10h4l3 5 3-5h4l6 10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="9" cy="23" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="23" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="23" cy="23" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Technology',
    desc: 'DevOps, support & growth automation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M10 26h12M16 24v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M9 15l4-4 4 4 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="23" cy="9" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Retail & E-Commerce',
    desc: 'Demand forecasting & CX personalization',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 4h3l3.6 14.4A2 2 0 0012.5 20h13a2 2 0 001.96-1.6L30 10H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="13" cy="26" r="2" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="24" cy="26" r="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M18 10v6M15 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Legal Services',
    desc: 'Contract intelligence & case automation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v4M8 10l-4 8h8l-4-8zM24 10l-4 8h8l-4-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 18c0 2.2 1.8 4 4 4s4-1.8 4-4M20 18c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 8v20M12 28h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Education',
    desc: 'Student journey & admin automation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6L2 13l14 7 14-7-14-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M6 16v8c0 2 4.5 4 10 4s10-2 10-4v-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M28 13v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="28" cy="21" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
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
      className="group relative bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/10 dark:border-white/10 rounded-2xl p-6 overflow-hidden cursor-pointer"
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ boxShadow: '0 8px 32px rgba(0,124,244,0.15)' }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
      />

      {/* Subtle grid on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
          style={{ background: 'rgba(0,124,244,0.08)' }}
        >
          <div className="text-[#007cf4] group-hover:text-white transition-colors duration-300">
            {industry.icon}
          </div>
        </div>

        <h3 className="font-inter-tight font-bold text-black dark:text-white group-hover:text-white text-base mb-1.5 transition-colors duration-300">
          {industry.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 group-hover:text-white/75 text-xs leading-relaxed transition-colors duration-300">
          {industry.desc}
        </p>

        {/* Arrow appears on hover */}
        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#007cf4] group-hover:text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          Learn more
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
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
            <span className="gradient-text">That Drive the World</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => <TiltCard key={i} industry={ind} i={i} />)}
        </div>
      </div>
    </section>
  )
}
