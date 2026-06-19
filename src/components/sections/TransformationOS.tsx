'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const pillars = [
  {
    title: 'AI Enablement',
    subtitle: 'Intelligence Layer',
    description: 'Deploy purpose-built AI agents, copilots, and decision engines trained on your business context.',
    features: ['Custom LLM fine-tuning', 'AI workflow orchestration', 'Predictive analytics'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="12" fill="url(#aiGrad)" />
        <defs>
          <linearGradient id="aiGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#007cf4" />
            <stop offset="1" stopColor="#36c5f0" />
          </linearGradient>
        </defs>
        {/* Brain / neural circles */}
        <circle cx="20" cy="16" r="5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="26" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="28" cy="26" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="16" y1="20" x2="13.5" y2="22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="20" x2="26.5" y2="22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="22.5" x2="28" y2="22.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
        <circle cx="20" cy="16" r="2" fill="white" />
      </svg>
    ),
  },
  {
    title: 'Business Automation',
    subtitle: 'Execution Layer',
    description: 'End-to-end process automation that eliminates manual work across every business function.',
    features: ['RPA + intelligent automation', 'Cross-system orchestration', 'Human-in-the-loop design'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="12" fill="url(#autoGrad)" />
        <defs>
          <linearGradient id="autoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#033a9d" />
            <stop offset="1" stopColor="#007cf4" />
          </linearGradient>
        </defs>
        {/* Gear/cog */}
        <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="2" fill="white" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const x1 = 20 + 7 * Math.cos(rad)
          const y1 = 20 + 7 * Math.sin(rad)
          const x2 = 20 + 9.5 * Math.cos(rad)
          const y2 = 20 + 9.5 * Math.sin(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="2" strokeLinecap="round" />
        })}
        {/* Arrow suggesting flow */}
        <path d="M27 13l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Data Transformation',
    subtitle: 'Intelligence Layer',
    description: 'Modern data infrastructure that turns fragmented data into real-time strategic intelligence.',
    features: ['Data lakehouse architecture', 'Real-time pipelines', 'Self-serve analytics'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="12" fill="url(#dataGrad)" />
        <defs>
          <linearGradient id="dataGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#007cf4" />
            <stop offset="1" stopColor="#033a9d" />
          </linearGradient>
        </defs>
        {/* Bar chart rising */}
        <rect x="10" y="26" width="4" height="6" rx="1" fill="white" opacity="0.5" />
        <rect x="16" y="21" width="4" height="11" rx="1" fill="white" opacity="0.7" />
        <rect x="22" y="16" width="4" height="16" rx="1" fill="white" opacity="0.9" />
        <rect x="28" y="11" width="4" height="21" rx="1" fill="white" />
        {/* Trend line */}
        <path d="M12 25 L18 20 L24 15 L30 10" stroke="#36c5f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="10" r="2" fill="#36c5f0" />
      </svg>
    ),
  },
  {
    title: 'Execution Excellence',
    subtitle: 'Change Layer',
    description: 'Change management and adoption programs that ensure transformation sticks.',
    features: ['Digital adoption programs', 'KPI frameworks', 'Continuous improvement'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="12" fill="url(#execGrad)" />
        <defs>
          <linearGradient id="execGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#36c5f0" />
            <stop offset="1" stopColor="#007cf4" />
          </linearGradient>
        </defs>
        {/* Target / bullseye */}
        <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="20" cy="20" r="6.5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.65" />
        <circle cx="20" cy="20" r="3" fill="white" />
        {/* Arrow pointing to center */}
        <line x1="30" y1="10" x2="22" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M27 10h3v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
]

/* Animated tech-grid background */
function TechGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#007cf4 1px, transparent 1px), linear-gradient(90deg, #007cf4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#007cf4]"
          style={{
            left: `${(i % 3) * 33 + 8}%`,
            top: `${Math.floor(i / 3) * 50 + 15}%`,
          }}
          animate={{ opacity: [0.05, 0.4, 0.05], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  )
}

export default function TransformationOS() {
  return (
    <section className="py-section bg-white dark:bg-[#050f2e] relative" id="solutions">
      <TechGrid />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Build
          </span>
          <h2
            className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            The Transformation
            <br />
            <span className="gradient-text">Operating System.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => {
            const isDark = i === 0 || i === 2
            const cardBgs = [
              'linear-gradient(135deg, #020c1e, #033a9d)',
              undefined,
              'linear-gradient(135deg, #050f2e, #033a9d)',
              undefined,
            ]
            const nums = ['01', '02', '03', '04']
            const accentColors = ['#36c5f0', '#007cf4', '#36c5f0', '#007cf4']
            return (
              <motion.div
                key={i}
                className={`group relative rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:scale-[1.015]${isDark ? '' : ' bg-[#e8f4ff] dark:bg-[#0a1628]'}`}
                style={{
                  background: isDark ? cardBgs[i] : undefined,
                  borderLeft: `4px solid ${accentColors[i]}`,
                  boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ boxShadow: `0 8px 48px rgba(0,124,244,0.18)` }}
              >
                {/* Watermark number */}
                <span
                  className="absolute right-5 bottom-4 font-inter-tight font-black select-none pointer-events-none"
                  style={{ fontSize: '6rem', lineHeight: 1, opacity: 0.07, color: isDark ? '#fff' : '#007cf4' }}
                >
                  {nums[i]}
                </span>

                <div className="relative z-10">
                  {/* Subtitle */}
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: accentColors[i] }}
                  >
                    {p.subtitle}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-inter-tight font-black text-xl mb-3"
                    style={{ color: isDark ? '#fff' : '#050f2e' }}
                  >
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: isDark ? 'rgba(255,255,255,0.65)' : '#374151' }}
                  >
                    {p.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,124,244,0.10)',
                          color: isDark ? 'rgba(255,255,255,0.75)' : '#007cf4',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-[#007cf4] hover:gap-3 transition-all duration-200 group">
            View all solutions
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
