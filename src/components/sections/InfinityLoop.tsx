'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// The two loops as separate paths for the over/under crossing effect
const LEFT_LOOP  = "M 500 230 C 500 110 370 55 240 55 C 110 55 10 140 10 230 C 10 320 110 405 240 405 C 370 405 500 350 500 230"
const RIGHT_LOOP = "M 500 230 C 500 110 630 55 760 55 C 890 55 990 140 990 230 C 990 320 890 405 760 405 C 630 405 500 350 500 230"
const FULL_PATH  = LEFT_LOOP + " " + RIGHT_LOOP.replace('M 500 230 ', 'L 500 230 ')

const nodes = [
  { x: 68,  y: 62,  label: 'Automation',    align: 'right' },
  { x: 68,  y: 398, label: 'Data Pipelines', align: 'right' },
  { x: 932, y: 62,  label: 'AI Enablement',  align: 'left'  },
  { x: 932, y: 398, label: 'CRM & Analytics', align: 'left' },
]

const sparkles = [
  { x: 170, y: 100 }, { x: 310, y: 50  }, { x: 420, y: 140 },
  { x: 580, y: 50  }, { x: 700, y: 90  }, { x: 830, y: 110 },
  { x: 150, y: 360 }, { x: 340, y: 400 }, { x: 660, y: 400 },
  { x: 840, y: 355 }, { x: 500, y: 175 }, { x: 500, y: 285 },
]

function Sparkle({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.g
      animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
      transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeInOut' }}
      style={{ originX: `${x}px`, originY: `${y}px` }}
    >
      <path
        d={`M${x} ${y-7} L${x+1.5} ${y-1.5} L${x+7} ${y} L${x+1.5} ${y+1.5} L${x} ${y+7} L${x-1.5} ${y+1.5} L${x-7} ${y} L${x-1.5} ${y-1.5} Z`}
        fill="white" opacity={0.7}
      />
    </motion.g>
  )
}

export default function InfinityLoop() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-section relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #050f2e 0%, #033a9d 50%, #071a4a 100%)' }}>
      {/* Radial glow behind infinity */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(ellipse, #36c5f0 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#36c5f0] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">How It All Connects</span>
          <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}>
            One Unified Operating System
            <br />
            <span style={{ color: '#36c5f0' }}>For Your Entire Business</span>
          </h2>
        </motion.div>

        {/* SVG Canvas */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 1000 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              {/* Main gradient */}
              <linearGradient id="infGrad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#033a9d" />
                <stop offset="30%"  stopColor="#007cf4" />
                <stop offset="55%"  stopColor="#36c5f0" />
                <stop offset="75%"  stopColor="#007cf4" />
                <stop offset="100%" stopColor="#033a9d" />
              </linearGradient>
              {/* Glow filter */}
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="softglow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="22" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              {/* Clip for crossing over/under effect */}
              <clipPath id="leftHalf">
                <rect x="0" y="0" width="490" height="460" />
              </clipPath>
              <clipPath id="rightHalf">
                <rect x="485" y="0" width="515" height="460" />
              </clipPath>
              <clipPath id="centerCross">
                <rect x="430" y="120" width="140" height="220" />
              </clipPath>
              {/* Node dot gradient */}
              <radialGradient id="nodeDot" cx="50%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#36c5f0" />
              </radialGradient>
            </defs>

            {/* ── Outer ambient glow ── */}
            <path d={FULL_PATH} stroke="#36c5f0" strokeWidth="70" strokeLinecap="round" opacity="0.06" />
            <path d={FULL_PATH} stroke="#007cf4" strokeWidth="44" strokeLinecap="round" opacity="0.12" />

            {/* ── Left loop (behind) ── */}
            <path d={LEFT_LOOP} stroke="url(#infGrad)" strokeWidth="18" strokeLinecap="round" filter="url(#glow)" />
            <path d={LEFT_LOOP} stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.18" />

            {/* ── Cover at crossing — background color to create depth ── */}
            <rect x="455" y="148" width="88" height="164" rx="4"
              fill="#030f2a" opacity="1" />

            {/* ── Right loop (in front) ── */}
            <path d={RIGHT_LOOP} stroke="url(#infGrad)" strokeWidth="18" strokeLinecap="round" filter="url(#glow)" />
            <path d={RIGHT_LOOP} stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.18" />

            {/* ── Sparkles ── */}
            {sparkles.map((s, i) => (
              <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.22} />
            ))}

            {/* ── Four corner nodes ── */}
            {nodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="20" fill="#0d1f54" stroke="#007cf4" strokeWidth="2" opacity="0.9" />
                <circle cx={n.x} cy={n.y} r="10" fill="url(#nodeDot)" />
                <motion.circle
                  cx={n.x} cy={n.y} r="22"
                  stroke="#36c5f0" strokeWidth="1.5" fill="none"
                  animate={{ opacity: [0.3, 0.8, 0.3], r: [22, 28, 22] } as never}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                />
              </g>
            ))}

            {/* ── Corner node labels ── */}
            {nodes.map((n, i) => (
              <text
                key={i}
                x={n.align === 'right' ? n.x + 32 : n.x - 32}
                y={n.y + 5}
                textAnchor={n.align === 'right' ? 'start' : 'end'}
                fill="white" fontSize="15" fontWeight="500" opacity="0.85"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {n.label}
              </text>
            ))}

            {/* ── Left loop label: Internal Ops ── */}
            <g>
              <rect x="157" y="199" width="166" height="62" rx="31" fill="#007cf4" opacity="0.92" />
              <text x="240" y="226" textAnchor="middle" fill="white" fontSize="13" fontWeight="700"
                style={{ fontFamily: 'system-ui, sans-serif' }}>Internal</text>
              <text x="240" y="244" textAnchor="middle" fill="white" fontSize="13" fontWeight="700"
                style={{ fontFamily: 'system-ui, sans-serif' }}>Operations</text>
            </g>

            {/* ── Right loop label: Customer Experience ── */}
            <g>
              <rect x="596" y="199" width="208" height="62" rx="31" fill="#007cf4" opacity="0.92" />
              <text x="700" y="226" textAnchor="middle" fill="white" fontSize="13" fontWeight="700"
                style={{ fontFamily: 'system-ui, sans-serif' }}>Customer</text>
              <text x="700" y="244" textAnchor="middle" fill="white" fontSize="13" fontWeight="700"
                style={{ fontFamily: 'system-ui, sans-serif' }}>Experience</text>
            </g>

            {/* ── Center pill: services ── */}
            <g filter="url(#glow)">
              <rect x="268" y="205" width="464" height="50" rx="25" fill="#0a1535" stroke="#36c5f0" strokeWidth="1.5" opacity="0.97" />
              <text x="500" y="235" textAnchor="middle" fill="white" fontSize="14" fontWeight="700"
                style={{ fontFamily: 'system-ui, sans-serif' }}>
                Automation · AI · Data · Workflows
              </text>
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
              className="px-4 py-1.5 rounded-full text-xs font-semibold border"
              style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(0,124,244,0.35)', background: 'rgba(0,124,244,0.08)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.65 + i * 0.05 }}
              whileHover={{ borderColor: '#36c5f0', color: '#36c5f0', background: 'rgba(54,197,240,0.1)' }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
