'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CX = 460, CY = 285

const tools = [
  { id: 'hubspot',    label: 'HubSpot',    cat: 'CRM',           x: 100,  y: 90,  color: '#FF7A59', dur: 2.8, d2: 0.9, d3: 1.8, floatY:  6 },
  { id: 'snowflake',  label: 'Snowflake',  cat: 'Data Warehouse', x: 460,  y: 28,  color: '#29B5E8', dur: 2.3, d2: 0.7, d3: 1.5, floatY: -5 },
  { id: 'salesforce', label: 'Salesforce', cat: 'Sales Cloud',    x: 820,  y: 90,  color: '#00A1E0', dur: 3.1, d2: 1.0, d3: 2.1, floatY:  7 },
  { id: 'zapier',     label: 'Zapier',     cat: 'Automation',     x: 80,   y: 285, color: '#FF4A00', dur: 2.6, d2: 0.8, d3: 1.7, floatY: -6 },
  { id: 'powerbi',    label: 'Power BI',   cat: 'Analytics',      x: 840,  y: 285, color: '#F2C811', dur: 2.6, d2: 0.9, d3: 1.8, floatY:  5 },
  { id: 'aws',        label: 'AWS',        cat: 'Cloud Infra',    x: 100,  y: 480, color: '#FF9900', dur: 2.9, d2: 1.0, d3: 2.0, floatY: -7 },
  { id: 'n8n',        label: 'n8n',        cat: 'Workflows',      x: 460,  y: 542, color: '#EA4B71', dur: 2.4, d2: 0.8, d3: 1.6, floatY:  6 },
  { id: 'openai',     label: 'OpenAI',     cat: 'AI Layer',       x: 820,  y: 480, color: '#00A67E', dur: 3.0, d2: 0.7, d3: 1.5, floatY: -5 },
]

export default function InfinityLoop() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-section bg-[#f8faff] dark:bg-[#060d24]" id="ecosystem">
      <div className="section-container" ref={ref}>

        {/* Header */}
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#007cf4] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Connected Ecosystem</span>
          <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            Your Entire Tech Stack,
            <br />
            <span className="gradient-text">Unified by Sync4Tech</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm leading-relaxed">
            We connect every tool in your stack into one intelligent, automated system — no silos, no manual handoffs.
          </p>
        </motion.div>

        {/* Ecosystem SVG */}
        <motion.div
          className="w-full max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 920 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <radialGradient id="hubGrad" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#007cf4" />
                <stop offset="100%" stopColor="#033a9d" />
              </radialGradient>
              <filter id="nodeGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="8" result="b" />
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="cardShadow" x="-10%" y="-15%" width="120%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#007cf4" floodOpacity="0.08"/>
              </filter>
              {/* path refs for animateMotion */}
              {tools.map(t => (
                <path key={`def-${t.id}`} id={`p-${t.id}`} d={`M ${t.x} ${t.y} L ${CX} ${CY}`} />
              ))}
            </defs>

            {/* ── Connection lines ── */}
            {tools.map(t => (
              <line
                key={`line-${t.id}`}
                x1={t.x} y1={t.y} x2={CX} y2={CY}
                stroke="#007cf4" strokeWidth="1" opacity="0.12"
                strokeDasharray="5 6"
              />
            ))}

            {/* ── Flowing particles (3 per line) ── */}
            {tools.map(t => (
              [0, t.d2, t.d3].map((delay, pi) => (
                <circle key={`dot-${t.id}-${pi}`} r="3.5" fill={t.color} opacity="0.85">
                  <animateMotion dur={`${t.dur}s`} repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href={`#p-${t.id}`} />
                  </animateMotion>
                </circle>
              ))
            ))}

            {/* ── Center hub pulse rings ── */}
            {[100, 80, 60].map((r, i) => (
              <motion.circle
                key={`ring-${i}`}
                cx={CX} cy={CY} r={r}
                stroke="#007cf4" strokeWidth="1" fill="none"
                animate={{ opacity: [0.06, 0.18, 0.06], scale: [1, 1.06, 1] } as never}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 }}
              />
            ))}

            {/* ── Center hub main circle ── */}
            <circle cx={CX} cy={CY} r={52} fill="url(#hubGrad)" filter="url(#nodeGlow)" />
            <circle cx={CX} cy={CY} r={52} stroke="white" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <text x={CX} y={CY - 7} textAnchor="middle" fill="white" fontSize="11" fontWeight="800"
              style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em' }}>SYNC4TECH</text>
            <text x={CX} y={CY + 9} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="500"
              style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em' }}>HUB</text>

            {/* ── Tool node cards ── */}
            {tools.map((t, i) => (
              <motion.g
                key={t.id}
                animate={{ y: [0, t.floatY, 0] }}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                filter="url(#cardShadow)"
              >
                {/* Card background */}
                <rect
                  x={t.x - 58} y={t.y - 22}
                  width="116" height="44" rx="22"
                  fill="white" stroke="#007cf4" strokeOpacity="0.18" strokeWidth="1.2"
                />
                {/* Color dot */}
                <circle cx={t.x - 36} cy={t.y} r="6" fill={t.color} opacity="0.9" />
                {/* Label */}
                <text x={t.x - 24} y={t.y - 3} fill="#0f172a" fontSize="12" fontWeight="700"
                  style={{ fontFamily: 'system-ui, sans-serif' }}>{t.label}</text>
                <text x={t.x - 24} y={t.y + 11} fill="#94a3b8" fontSize="9" fontWeight="500"
                  style={{ fontFamily: 'system-ui, sans-serif' }}>{t.cat}</text>
              </motion.g>
            ))}

          </svg>
        </motion.div>

      </div>
    </section>
  )
}
