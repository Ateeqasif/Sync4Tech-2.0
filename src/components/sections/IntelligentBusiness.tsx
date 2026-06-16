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

export default function IntelligentBusiness() {
  const cx = 200
  const cy = 200
  const r = 140

  return (
    <section className="py-section bg-black" id="intelligent">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 400 400" width="400" height="400" className="w-full max-w-sm">
              <defs>
                <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#007cf4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#007cf4" stopOpacity="0" />
                </radialGradient>
                <clipPath id="radarClip">
                  <circle cx={cx} cy={cy} r={r + 10} />
                </clipPath>
              </defs>

              {[0.33, 0.66, 1].map((scale, i) => (
                <circle key={i} cx={cx} cy={cy} r={r * scale} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              ))}

              {nodes.map((node, i) => {
                const rad = (node.angle - 90) * (Math.PI / 180)
                const x2 = cx + r * Math.cos(rad)
                const y2 = cy + r * Math.sin(rad)
                return (
                  <g key={i}>
                    <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <motion.circle
                      cx={x2}
                      cy={y2}
                      r="4"
                      fill="#007cf4"
                      initial={{ r: 3 }}
                      animate={{ r: [3, 5, 3] }}
                      transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <text
                      x={cx + (r + 22) * Math.cos(rad)}
                      y={cy + (r + 22) * Math.sin(rad)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="rgba(255,255,255,0.6)"
                      fontSize="10"
                      fontFamily="system-ui"
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}

              <g clipPath="url(#radarClip)" className="animate-radar" style={{ transformOrigin: `${cx}px ${cy}px` }}>
                <path
                  d={`M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r * Math.sin(Math.PI / 3)} ${cy - r * Math.cos(Math.PI / 3)} Z`}
                  fill="url(#radarGrad)"
                />
              </g>

              {[1, 2].map((k) => (
                <motion.circle
                  key={k}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke="#007cf4"
                  strokeWidth="1"
                  initial={{ scale: 0.8, opacity: 0.4 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 3, delay: k * 1.5, repeat: Infinity, ease: 'easeOut' }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              ))}

              <circle cx={cx} cy={cy} r="24" fill="#007cf4" opacity="0.15" />
              <circle cx={cx} cy={cy} r="14" fill="#007cf4" />
              <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontFamily="system-ui" fontWeight="bold">AI</text>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#36c5f0] text-sm font-semibold tracking-widest uppercase mb-4 block">Intelligence Layer</span>
            <h2 className="font-inter-tight font-black text-white leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              Connect Every
              <br />
              <span className="gradient-text">Business Function.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our AI layer sits at the center of your business, connecting siloed functions into a unified intelligence network. Every department feeds data in, and receives actionable intelligence out.
            </p>
            <div className="flex flex-col gap-3">
              {['Real-time cross-functional data sync', 'AI agents per business unit', 'Unified decision intelligence'].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#007cf4]/20 border border-[#007cf4]/40 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#007cf4]" />
                  </div>
                  <span className="text-gray-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
