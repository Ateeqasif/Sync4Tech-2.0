'use client'

import { motion } from 'framer-motion'

const departments = [
  { label: 'Sales', angle: 0, color: '#D87307' },
  { label: 'Marketing', angle: 60, color: '#BD7841' },
  { label: 'Operations', angle: 120, color: '#D87307' },
  { label: 'Finance', angle: 180, color: '#BD7841' },
  { label: 'Support', angle: 240, color: '#D87307' },
  { label: 'Leadership', angle: 300, color: '#BD7841' },
]

const r = 160
const CX = 280
const CY = 280

function toXY(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

export default function IntelligentBusiness() {
  return (
    <section className="py-section bg-black overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">The Intelligence Layer</span>
            <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              Every Department.<br />One <span className="gradient-text">Intelligence</span><br />Layer.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Sync4Tech connects every business function through a single intelligence layer — enabling real-time coordination, unified data, and autonomous decision-making across your entire organization.
            </p>
            <ul className="flex flex-col gap-3">
              {['Real-time data synchronization across all departments', 'AI-driven decisions at every touchpoint', 'Single source of truth for every business unit'].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><div className="w-2 h-2 rounded-full bg-accent" /></div>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <svg width="560" height="560" viewBox="0 0 560 560" className="w-full max-w-[560px]">
              <circle cx={CX} cy={CY} r={r + 20} stroke="#ffffff08" strokeWidth="1" fill="none" strokeDasharray="4 8"/>
              {departments.map((dept, i) => {
                const pos = toXY(dept.angle, r, CX, CY)
                return (
                  <motion.line key={`line-${i}`} x1={CX} y1={CY} x2={pos.x} y2={pos.y} stroke={dept.color} strokeWidth="1.5" strokeOpacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }} />
                )
              })}
              {departments.map((dept, i) => {
                const pos = toXY(dept.angle, r, CX, CY)
                return (
                  <motion.circle key={`dot-${i}`} r="3" fill={dept.color}
                    animate={{ cx: [CX, pos.x, CX], cy: [CY, pos.y, CY], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }} />
                )
              })}
              <motion.circle cx={CX} cy={CY} r="60" fill="#111" stroke="#D87307" strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} />
              <motion.circle cx={CX} cy={CY} r="68" fill="none" stroke="#D87307" strokeWidth="1" strokeOpacity="0.2"
                animate={{ r: [60, 80, 60] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
              <text x={CX} y={CY - 8} textAnchor="middle" fill="#D87307" fontSize="10" fontFamily="Inter Tight, sans-serif" fontWeight="700" letterSpacing="2">SYNC4TECH</text>
              <text x={CX} y={CY + 8} textAnchor="middle" fill="#ffffff60" fontSize="8" fontFamily="Inter, sans-serif">Intelligence Layer</text>
              {departments.map((dept, i) => {
                const pos = toXY(dept.angle, r, CX, CY)
                return (
                  <motion.g key={`dept-${i}`} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}>
                    <circle cx={pos.x} cy={pos.y} r="36" fill="#111" stroke={dept.color} strokeWidth="1.5" strokeOpacity="0.6"/>
                    <text x={pos.x} y={pos.y + 4} textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter Tight, sans-serif" fontWeight="700">{dept.label}</text>
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
