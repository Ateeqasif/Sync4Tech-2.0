'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Single continuous infinity path
const FULL = "M 500 230 C 500 110 370 55 240 55 C 110 55 10 140 10 230 C 10 320 110 405 240 405 C 370 405 500 350 500 230 C 500 110 630 55 760 55 C 890 55 990 140 990 230 C 990 320 890 405 760 405 C 630 405 500 350 500 230"
// Right loop only — redrawn on top at the crossing to create over/under depth
const RIGHT = "M 500 230 C 500 110 630 55 760 55 C 890 55 990 140 990 230 C 990 320 890 405 760 405 C 630 405 500 350 500 230"

const nodes = [
  { cx: 68,  cy: 62,  label: 'Automation',     labelX: 100, labelY: 45,  anchor: 'start' },
  { cx: 68,  cy: 398, label: 'Data Pipelines',  labelX: 100, labelY: 420, anchor: 'start' },
  { cx: 932, cy: 62,  label: 'AI Enablement',   labelX: 900, labelY: 45,  anchor: 'end'   },
  { cx: 932, cy: 398, label: 'CRM & Analytics', labelX: 900, labelY: 420, anchor: 'end'   },
]

const sparkles = [
  { x: 175, y: 95,  d: 0    },
  { x: 320, y: 48,  d: 0.4  },
  { x: 680, y: 48,  d: 0.8  },
  { x: 825, y: 95,  d: 1.2  },
  { x: 155, y: 365, d: 0.6  },
  { x: 845, y: 365, d: 1.0  },
  { x: 415, y: 130, d: 1.4  },
  { x: 585, y: 130, d: 0.2  },
  { x: 415, y: 330, d: 1.6  },
  { x: 585, y: 330, d: 0.9  },
]

function StarShape({ x, y, delay }: { x: number; y: number; delay: number }) {
  const s = 6
  return (
    <motion.path
      d={`M${x} ${y-s} L${x+1.4} ${y-1.4} L${x+s} ${y} L${x+1.4} ${y+1.4} L${x} ${y+s} L${x-1.4} ${y+1.4} L${x-s} ${y} L${x-1.4} ${y-1.4}Z`}
      fill="#007cf4"
      animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.3, 0.5] }}
      transition={{ duration: 2.8, repeat: Infinity, delay, ease: 'easeInOut' }}
      style={{ originX: `${x}px`, originY: `${y}px` }}
    />
  )
}

export default function InfinityLoop() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-section bg-white dark:bg-[#050f2e]" id="infinity">
      <div className="section-container" ref={ref}>

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">How It All Connects</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}>
            One Unified Operating System
            <br />
            <span className="gradient-text">For Your Entire Business</span>
          </h2>
        </motion.div>

        {/* SVG infinity */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 1000 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <linearGradient id="ig" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#033a9d" />
                <stop offset="30%"  stopColor="#007cf4" />
                <stop offset="55%"  stopColor="#36c5f0" />
                <stop offset="75%"  stopColor="#007cf4" />
                <stop offset="100%" stopColor="#033a9d" />
              </linearGradient>
              <linearGradient id="igLight" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#033a9d" stopOpacity="0.15" />
                <stop offset="50%"  stopColor="#36c5f0" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#033a9d" stopOpacity="0.15" />
              </linearGradient>
              {/* Clip for the crossing area — only shows what passes through the center */}
              <clipPath id="crossClip">
                <rect x="448" y="130" width="104" height="200" />
              </clipPath>
              <radialGradient id="nodeDot" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#36c5f0" />
              </radialGradient>
            </defs>

            {/* Soft ambient shadow */}
            <path d={FULL} stroke="url(#igLight)" strokeWidth="52" strokeLinecap="round" />

            {/* ── Step 1: Full loop — creates the "back" of the crossing ── */}
            <path d={FULL} stroke="url(#ig)" strokeWidth="16" strokeLinecap="round" />
            {/* Inner highlight */}
            <path d={FULL} stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.35" className="dark:opacity-20" />

            {/* ── Step 2: White cover at crossing = depth illusion ── */}
            <rect x="450" y="132" width="100" height="196" fill="white" className="dark:fill-[#050f2e]" />

            {/* ── Step 3: Right loop redrawn on top at crossing ── */}
            <path d={RIGHT} stroke="url(#ig)" strokeWidth="16" strokeLinecap="round" clipPath="url(#crossClip)" />
            <path d={RIGHT} stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.35" className="dark:opacity-20" clipPath="url(#crossClip)" />

            {/* ── Sparkle stars ── */}
            {sparkles.map((s, i) => <StarShape key={i} x={s.x} y={s.y} delay={s.d} />)}

            {/* ── Four corner nodes ── */}
            {nodes.map((n, i) => (
              <g key={i}>
                {/* Outer pulse ring */}
                <motion.circle
                  cx={n.cx} cy={n.cy} r={22}
                  stroke="#007cf4" strokeWidth="1.5" fill="none"
                  animate={{ opacity: [0.2, 0.6, 0.2], r: [22, 29, 22] } as never}
                  transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.55 }}
                />
                {/* Node bg */}
                <circle cx={n.cx} cy={n.cy} r={18} fill="white" stroke="#007cf4" strokeWidth="2" className="dark:fill-[#0a1a4a]" />
                {/* Inner dot */}
                <circle cx={n.cx} cy={n.cy} r={8} fill="url(#nodeDot)" />
                {/* Label */}
                <text
                  x={n.labelX} y={n.labelY}
                  textAnchor={n.anchor as 'start' | 'end'}
                  fill="#033a9d" fontSize="14" fontWeight="600"
                  className="dark:fill-white"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {n.label}
                </text>
              </g>
            ))}

            {/* ── Loop labels ── */}
            {/* Internal Ops — inside left loop */}
            <g>
              <rect x="150" y="202" width="180" height="56" rx="28"
                fill="#007cf4" />
              <text x="240" y="234" textAnchor="middle" fill="white" fontSize="14" fontWeight="700"
                style={{ fontFamily: 'system-ui, sans-serif' }}>Internal Ops</text>
            </g>
            {/* Customer Experience — inside right loop */}
            <g>
              <rect x="590" y="202" width="220" height="56" rx="28"
                fill="#033a9d" />
              <text x="700" y="234" textAnchor="middle" fill="white" fontSize="14" fontWeight="700"
                style={{ fontFamily: 'system-ui, sans-serif' }}>Customer Experience</text>
            </g>

          </svg>
        </motion.div>

        {/* Bottom capability chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {['Process Automation', 'AI Enablement', 'Data Engineering', 'CRM Automation', 'Workflow Orchestration', 'Real-Time Analytics', 'Systems Integration'].map((chip, i) => (
            <motion.span
              key={chip}
              className="px-4 py-1.5 rounded-full text-xs font-semibold border border-[#007cf4]/25 text-[#007cf4] bg-[#007cf4]/5 dark:text-[#36c5f0] dark:border-[#36c5f0]/25 dark:bg-[#36c5f0]/5 cursor-default"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.65 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
