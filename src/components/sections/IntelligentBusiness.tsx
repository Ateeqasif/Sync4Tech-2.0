'use client'

import { motion } from 'framer-motion'

const nodes = [
  { label: 'Sales', angle: 0 },
  { label: 'Finance', angle: 60 },
  { label: 'Operations', angle: 120 },
  { label: 'HR', angle: 180 },
  { label: 'Marketing', angle: 240 },
  { label: 'Customer Success', angle: 300 },
]

function SectionGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,124,244,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: '#36c5f0', left: `${15 + i * 25}%`, top: `${30 + (i % 2) * 40}%` }}
          animate={{ opacity: [0.06, 0.35, 0.06], scale: [1, 1.6, 1] }}
          transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, delay: i * 0.7 }}
        />
      ))}
    </div>
  )
}

export default function IntelligentBusiness() {
  const cx = 200
  const cy = 200
  const r = 140

  return (
    <section className="py-section bg-white dark:bg-gray-900 relative overflow-hidden" id="intelligent">
      <SectionGrid />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* SVG Diagram */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 400 400" width="400" height="400" className="w-full max-w-sm drop-shadow-xl">
              <defs>
                <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#007cf4" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#007cf4" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#007cf4" />
                  <stop offset="100%" stopColor="#033a9d" />
                </radialGradient>
                <clipPath id="radarClip">
                  <circle cx={cx} cy={cy} r={r + 10} />
                </clipPath>
              </defs>

              {/* Background fill */}
              <circle cx={cx} cy={cy} r={r + 20} fill="transparent" />

              {/* Rings */}
              {[0.33, 0.66, 1].map((scale, i) => (
                <circle key={i} cx={cx} cy={cy} r={r * scale} fill="none" stroke="rgba(0,124,244,0.12)" strokeWidth="1" />
              ))}

              {/* Spokes + node dots */}
              {nodes.map((node, i) => {
                const rad = (node.angle - 90) * (Math.PI / 180)
                const x2 = cx + r * Math.cos(rad)
                const y2 = cy + r * Math.sin(rad)
                return (
                  <g key={i}>
                    <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="rgba(0,124,244,0.12)" strokeWidth="1" />
                    <motion.circle
                      cx={x2} cy={y2} r="5" fill="#007cf4"
                      animate={{ r: [4, 6, 4], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <circle cx={x2} cy={y2} r="10" fill="rgba(0,124,244,0.08)" />
                    <text
                      x={cx + (r + 24) * Math.cos(rad)}
                      y={cy + (r + 24) * Math.sin(rad)}
                      textAnchor="middle" dominantBaseline="middle"
                      fill="#033a9d" fontSize="10" fontFamily="system-ui" fontWeight="600"
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}

              {/* Radar sweep */}
              <g clipPath="url(#radarClip)" className="animate-radar" style={{ transformOrigin: `${cx}px ${cy}px` }}>
                <path
                  d={`M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r * Math.sin(Math.PI / 3)} ${cy - r * Math.cos(Math.PI / 3)} Z`}
                  fill="url(#radarGrad)"
                />
              </g>

              {/* Pulse rings */}
              {[1, 2].map((k) => (
                <motion.circle key={k} cx={cx} cy={cy} r={r}
                  fill="none" stroke="#007cf4" strokeWidth="1"
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 3, delay: k * 1.5, repeat: Infinity, ease: 'easeOut' }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              ))}

              {/* Center */}
              <circle cx={cx} cy={cy} r="38" fill="url(#centerGrad)" opacity="0.15" />
              <circle cx={cx} cy={cy} r="28" fill="url(#centerGrad)" />
              <text x={cx} y={cy - 5} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontFamily="system-ui" fontWeight="bold">Sync4Tech</text>
              <text x={cx} y={cy + 6} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="6.5" fontFamily="system-ui" fontWeight="600">Automation</text>
            </svg>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-4 block">Intelligence Layer</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Connect Every
              <br />
              <span className="gradient-text">Business Function.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Our AI layer sits at the center of your business, connecting siloed functions into a unified intelligence network. Every department feeds data in, and receives actionable intelligence out.
            </p>
            <div className="flex flex-col gap-4">
              {['Real-time cross-functional data sync', 'AI agents per business unit', 'Unified decision intelligence'].map((f, i) => (
                <motion.div key={i} className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#007cf4]/10 border border-[#007cf4]/20 flex items-center justify-center shrink-0 group-hover:bg-[#007cf4]/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#007cf4]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
