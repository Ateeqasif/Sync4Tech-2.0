'use client'

import { motion } from 'framer-motion'

const departments = [
  { label: 'Sales', angle: 0 },
  { label: 'Marketing', angle: 60 },
  { label: 'Operations', angle: 120 },
  { label: 'Finance', angle: 180 },
  { label: 'Support', angle: 240 },
  { label: 'Leadership', angle: 300 },
]

const r = 155
const CX = 270
const CY = 270

function toXY(deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

export default function IntelligentBusiness() {
  return (
    <section className="py-section relative overflow-hidden" style={{ background: '#f7f9ff' }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)' }}>Intelligence Layer</span>
            <h2 className="font-inter-tight font-black text-gray-900 leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Every Department.
              <br />
              One{' '}<span className="gradient-text">Intelligence</span>
              <br />Layer.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Sync4Tech connects every business function through a single intelligence layer — enabling real-time coordination, unified data, and autonomous decision-making across your entire organization.
            </p>
            <ul className="flex flex-col gap-3">
              {['Real-time data synchronization across all departments', 'AI-driven decisions at every touchpoint', 'Single source of truth for every business unit'].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,124,244,0.1)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: '#007cf4' }} />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <svg width="540" height="540" viewBox="0 0 540 540" className="w-full max-w-[520px]">
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(0,124,244,0.06)"/>
                  <stop offset="100%" stopColor="rgba(0,124,244,0)"/>
                </radialGradient>
                <linearGradient id="centerGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#033a9d"/>
                  <stop offset="100%" stopColor="#007cf4"/>
                </linearGradient>
                <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#007cf4"/>
                  <stop offset="100%" stopColor="#36c5f0"/>
                </linearGradient>
              </defs>

              <circle cx={CX} cy={CY} r="240" fill="url(#bgGrad)"/>
              <circle cx={CX} cy={CY} r={r + 28} stroke="rgba(0,124,244,0.08)" strokeWidth="1" fill="none" strokeDasharray="6 10"/>
              <circle cx={CX} cy={CY} r={r + 56} stroke="rgba(54,197,240,0.05)" strokeWidth="1" fill="none" strokeDasharray="3 14"/>

              {departments.map((dept, i) => {
                const pos = toXY(dept.angle)
                return (
                  <motion.line key={`l${i}`} x1={CX} y1={CY} x2={pos.x} y2={pos.y}
                    stroke="url(#nodeGrad)" strokeWidth="1" strokeOpacity="0.25"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }} />
                )
              })}

              {departments.map((dept, i) => {
                const pos = toXY(dept.angle)
                return (
                  <motion.circle key={`dot${i}`} r="3" fill="#36c5f0"
                    animate={{ cx: [CX, pos.x, CX], cy: [CY, pos.y, CY], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 2.5, delay: i * 0.45, repeat: Infinity, ease: 'easeInOut' }} />
                )
              })}

              <motion.circle cx={CX} cy={CY} r="62" fill="url(#centerGrad)"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }} />
              <motion.circle cx={CX} cy={CY} r="75" fill="none" stroke="#007cf4" strokeWidth="1" strokeOpacity="0.2"
                animate={{ r: [62, 82, 62] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />

              <text x={CX} y={CY - 7} textAnchor="middle" fill="white" fontSize="9" fontFamily="Inter Tight, sans-serif" fontWeight="800" letterSpacing="2">SYNC4TECH</text>
              <text x={CX} y={CY + 9} textAnchor="middle" fill="rgba(54,197,240,0.7)" fontSize="7.5" fontFamily="Inter, sans-serif">Intelligence Layer</text>

              {departments.map((dept, i) => {
                const pos = toXY(dept.angle)
                return (
                  <motion.g key={`n${i}`} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}>
                    <circle cx={pos.x} cy={pos.y} r="34" fill="white" stroke="url(#nodeGrad)" strokeWidth="1.5" opacity="0.9"
                      style={{ filter: 'drop-shadow(0 4px 12px rgba(0,124,244,0.15))' }}/>
                    <text x={pos.x} y={pos.y + 4} textAnchor="middle" fill="#033a9d" fontSize="9.5" fontFamily="Inter Tight, sans-serif" fontWeight="700">{dept.label}</text>
                  </motion.g>
                )
              })}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
