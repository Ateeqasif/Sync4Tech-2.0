'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Discover',
    tag: '3 Days',
    desc: 'We audit your current processes, identify automation opportunities, and map your data landscape to build a clear picture of the ROI available.',
    accent: '#007cf4',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="22" cy="22" r="12" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" />
        <path d="M31 31l8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 22h8M22 18v8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Design',
    tag: '2 Days',
    desc: 'Our architects design a bespoke automation and AI strategy tailored to your exact workflows, tools, and business objectives.',
    accent: '#36c5f0',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="24" rx="4" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" />
        <path d="M16 20h16M16 28h10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <circle cx="36" cy="28" r="4" fill="white" opacity="0.5" />
        <path d="M34.5 28l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Deploy',
    tag: '4–5 Weeks',
    desc: 'We build, test, and deploy your solution in as little as 4–5 weeks — with live prototypes in the first week and measurable results within 30 days of go-live.',
    accent: '#007cf4',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 8l4 8h8l-6.5 5.5 2.5 8.5L24 25l-8 5 2.5-8.5L12 16h8z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none" strokeOpacity="0.9" />
        <path d="M24 32v8M18 38l6 2 6-2" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
]

function FlowLine({ flipped }: { flipped?: boolean }) {
  return (
    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-24 z-10 ${flipped ? 'right-0 translate-x-12' : 'left-0 -translate-x-12'}`}>
      <svg width="96" height="40" viewBox="0 0 96 40" fill="none">
        <path
          d={flipped ? 'M0 20 Q30 4 60 20 Q80 32 96 20' : 'M0 20 Q16 8 36 20 Q66 36 96 20'}
          stroke="url(#flowGrad)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#007cf4" />
            <stop offset="100%" stopColor="#36c5f0" />
          </linearGradient>
        </defs>
        {/* Arrow head */}
        <path d={flipped ? 'M88 14l8 6-8 6' : 'M88 14l8 6-8 6'} stroke="#36c5f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
      </svg>
    </div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32" style={{ background: 'linear-gradient(135deg, #020c1e 0%, #050f2e 50%, #030a1a 100%)' }}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,124,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[120px]" style={{ background: '#007cf4' }} />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-8 blur-[100px]" style={{ background: '#36c5f0' }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Process</span>
          <h2 className="font-inter-tight font-black text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
            How It <span style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(90deg,#007cf4,#36c5f0)', backgroundClip: 'text' }}>Works</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex-1"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Flow connector between cards */}
              {i < steps.length - 1 && <FlowLine flipped={i % 2 === 1} />}

              {/* Card */}
              <div
                className="group relative overflow-hidden rounded-3xl h-full flex flex-col border border-white/8 hover:border-white/20 transition-all duration-500"
                style={{
                  background: i === 1
                    ? 'linear-gradient(145deg, #0a1f4e 0%, #0d2560 100%)'
                    : 'linear-gradient(145deg, #071328 0%, #0a1a3a 100%)',
                  transform: i === 1 ? 'translateY(-12px)' : 'none',
                  boxShadow: i === 1 ? '0 40px 80px rgba(0,124,244,0.2)' : '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, #033a9d, ${step.accent})` }} />

                {/* Big number watermark */}
                <div
                  className="absolute -right-4 -top-6 font-inter-tight font-black select-none pointer-events-none"
                  style={{ fontSize: 'clamp(100px, 14vw, 160px)', lineHeight: 1, color: 'rgba(0,124,244,0.06)', letterSpacing: '-0.05em' }}
                >
                  {step.n}
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
                  {/* Icon circle */}
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shrink-0"
                    style={{ background: `linear-gradient(135deg, #033a9d, ${step.accent})`, boxShadow: `0 12px 40px ${step.accent}40` }}
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-black tracking-widest" style={{ color: step.accent }}>STEP {step.n}</span>
                    <span className="h-px flex-1 opacity-20" style={{ background: step.accent }} />
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{ color: step.accent, borderColor: `${step.accent}40`, background: `${step.accent}10` }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-inter-tight font-black text-white text-3xl md:text-4xl mb-4 leading-tight group-hover:text-[#36c5f0] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-white/55 leading-relaxed text-base flex-1">{step.desc}</p>

                  {/* Bottom CTA line */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: step.accent }}>
                    <span>Learn more</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>

                {/* Diagonal shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom connector bar */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {steps.map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ background: i === 1 ? '#36c5f0' : '#007cf4' }} />
              {i < steps.length - 1 && (
                <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg,#007cf4,#36c5f0)', opacity: 0.4 }} />
              )}
            </div>
          ))}
          <span className="ml-4 text-white/30 text-xs font-semibold tracking-widest uppercase">From audit to live in weeks</span>
        </motion.div>
      </div>
    </section>
  )
}
