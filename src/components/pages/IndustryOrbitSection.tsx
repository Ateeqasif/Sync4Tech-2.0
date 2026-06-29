'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface OrbitNode {
  label: string
  angle: number
  color: string
}

interface Props {
  eyebrow: string
  title: string
  highlight: string
  description: string
  bullets: string[]
  nodes: OrbitNode[]
  centerLabel: string
  flip?: boolean
}

export default function IndustryOrbitSection({
  eyebrow, title, highlight, description, bullets, nodes, centerLabel, flip = false,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(n => (n + 1) % nodes.length), 2000)
    return () => clearInterval(id)
  }, [nodes.length])

  const R1 = 80, R2 = 140, cx = 200, cy = 200
  const gradId = `centerGrad-${eyebrow.replace(/\s/g, '')}`
  const radarId = `radarGrad-${eyebrow.replace(/\s/g, '')}`
  const clipId = `radarClip-${eyebrow.replace(/\s/g, '')}`

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden relative">
      {/* Subtle grid background matching landing page */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,124,244,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10">
        <div className={`flex flex-col ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-20`}>

          {/* ── Orbit animation ── */}
          <motion.div
            className="relative w-full max-w-[420px] mx-auto shrink-0 drop-shadow-xl"
            initial={{ opacity: 0, x: flip ? 60 : -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="400" height="400" viewBox="-60 -50 520 500" overflow="visible" className="w-full h-auto">
              <defs>
                {/* Blue gradient for center circle — same as landing page */}
                <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#007cf4" />
                  <stop offset="100%" stopColor="#033a9d" />
                </radialGradient>
                {/* Radar sweep gradient */}
                <radialGradient id={radarId} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#007cf4" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#007cf4" stopOpacity="0" />
                </radialGradient>
                <clipPath id={clipId}>
                  <circle cx={cx} cy={cy} r={R2 + 10} />
                </clipPath>
              </defs>

              {/* Concentric rings matching landing page style */}
              {[R2 * 0.33, R2 * 0.66, R1, R2].map((r, i) => (
                <circle key={i} cx={cx} cy={cy} r={r}
                  fill="none" stroke="rgba(0,124,244,0.12)" strokeWidth="1"
                />
              ))}

              {/* Radar sweep */}
              <g clipPath={`url(#${clipId})`} style={{ transformOrigin: `${cx}px ${cy}px`, animation: 'spin 6s linear infinite' }}>
                <motion.path
                  d={`M ${cx} ${cy} L ${cx} ${cy - R2} A ${R2} ${R2} 0 0 1 ${cx + R2 * Math.sin(Math.PI / 3)} ${cy - R2 * Math.cos(Math.PI / 3)} Z`}
                  fill={`url(#${radarId})`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              </g>

              {/* Pulse rings */}
              {[1, 2].map((k) => (
                <motion.circle key={k} cx={cx} cy={cy} r={R2}
                  fill="none" stroke="#007cf4" strokeWidth="1"
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 3, delay: k * 1.5, repeat: Infinity, ease: 'easeOut' }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              ))}

              {/* Spokes + nodes */}
              {nodes.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180
                const nx = cx + Math.cos(rad) * R2
                const ny = cy + Math.sin(rad) * R2
                const isActive = i === active

                const lx = nx + (Math.cos(rad) > 0.2 ? 22 : Math.cos(rad) < -0.2 ? -22 : 0)
                const ly = ny + (Math.sin(rad) > 0.3 ? 24 : Math.sin(rad) < -0.3 ? -14 : 5)
                const anchor = Math.cos(rad) > 0.2 ? 'start' : Math.cos(rad) < -0.2 ? 'end' : 'middle'

                return (
                  <g key={i}>
                    {/* Spoke */}
                    <motion.line x1={cx} y1={cy} x2={nx} y2={ny}
                      stroke="rgba(0,124,244,0.12)" strokeWidth="1"
                      animate={{ strokeOpacity: isActive ? 0.5 : 0.12 }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Pulse ring on active */}
                    {isActive && (
                      <motion.circle cx={nx} cy={ny} r="16"
                        fill="#007cf4" fillOpacity="0.1"
                        initial={{ scale: 0.6, opacity: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        style={{ transformOrigin: `${nx}px ${ny}px` }}
                      />
                    )}
                    {/* Halo */}
                    <circle cx={nx} cy={ny} r="12" fill="rgba(0,124,244,0.08)" />
                    {/* Node dot */}
                    <motion.circle cx={nx} cy={ny} r="5"
                      fill="#007cf4"
                      animate={{ r: isActive ? [4, 7, 4] : 5, opacity: isActive ? 1 : 0.8 }}
                      transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {/* Label */}
                    <text
                      x={lx} y={ly}
                      textAnchor={anchor}
                      fontSize="12" fontWeight="700"
                      fill={isActive ? '#007cf4' : '#033a9d'}
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}

              {/* Center glow */}
              <circle cx={cx} cy={cy} r="44" fill={`url(#${gradId})`} opacity="0.12" />
              {/* Center circle with blue gradient — matching landing page */}
              <circle cx={cx} cy={cy} r="34" fill={`url(#${gradId})`} />
              {/* Center label */}
              <text x={cx} y={cy - 5} textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="8" fontWeight="700" letterSpacing="0.04em"
              >
                {centerLabel.split(' ')[0]}
              </text>
              <text x={cx} y={cy + 7} textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="7.5" fontWeight="600" letterSpacing="0.03em"
              >
                {centerLabel.split(' ').slice(1).join(' ')}
              </text>
            </svg>
          </motion.div>

          {/* ── Text side ── */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: flip ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#007cf4] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              {eyebrow}
            </span>
            <h2 className="font-inter-tight font-black text-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              {title}{' '}
              <span style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(90deg,#007cf4,#36c5f0)', backgroundClip: 'text' }}>
                {highlight}.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-base mb-8 max-w-md">
              {description}
            </p>
            <ul className="flex flex-col gap-4">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#007cf4]/10 border border-[#007cf4]/20 flex items-center justify-center shrink-0 group-hover:bg-[#007cf4]/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#007cf4]" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
