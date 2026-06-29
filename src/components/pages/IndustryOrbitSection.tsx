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

  // Cycle active node
  useEffect(() => {
    const id = setInterval(() => setActive(n => (n + 1) % nodes.length), 2000)
    return () => clearInterval(id)
  }, [nodes.length])

  const R1 = 90, R2 = 140, cx = 200, cy = 200

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="section-container">
        <div className={`flex flex-col ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-20`}>

          {/* ── Orbit animation ── */}
          <motion.div
            className="relative w-full max-w-[420px] mx-auto shrink-0"
            initial={{ opacity: 0, x: flip ? 60 : -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="400" height="400" viewBox="-60 -50 520 500" overflow="visible" className="w-full h-auto">
              {/* Background grid */}
              <defs>
                <radialGradient id={`bg-${eyebrow}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#007cf4" stopOpacity="0.07" />
                  <stop offset="100%" stopColor="#007cf4" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx={cx} cy={cy} r="195" fill={`url(#bg-${eyebrow})`} />

              {/* Grid lines */}
              {[50, 90, 130, 140, 175].map(r => (
                <circle key={r} cx={cx} cy={cy} r={r}
                  fill="none" stroke="#007cf4" strokeWidth="0.5" strokeOpacity="0.15"
                  strokeDasharray={r > 100 ? "none" : "4 4"}
                />
              ))}
              {/* Cross lines */}
              {[0, 45, 90, 135].map(deg => {
                const rad = (deg * Math.PI) / 180
                return (
                  <line key={deg}
                    x1={cx + Math.cos(rad) * 185} y1={cy + Math.sin(rad) * 185}
                    x2={cx - Math.cos(rad) * 185} y2={cy - Math.sin(rad) * 185}
                    stroke="#007cf4" strokeWidth="0.5" strokeOpacity="0.1"
                  />
                )
              })}

              {/* Outer ring orbit (R2) */}
              <motion.circle cx={cx} cy={cy} r={R2}
                fill="none" stroke="#007cf4" strokeWidth="1" strokeOpacity="0.2"
                strokeDasharray="6 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />

              {/* Inner ring orbit (R1) */}
              <motion.circle cx={cx} cy={cy} r={R1}
                fill="none" stroke="#36c5f0" strokeWidth="1" strokeOpacity="0.25"
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />

              {/* Outer nodes */}
              {nodes.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180
                const nx = cx + Math.cos(rad) * R2
                const ny = cy + Math.sin(rad) * R2
                const isActive = i === active
                return (
                  <g key={i}>
                    {/* Connector line */}
                    <motion.line x1={cx} y1={cy} x2={nx} y2={ny}
                      stroke="#007cf4" strokeWidth="1"
                      animate={{ strokeOpacity: isActive ? 0.4 : 0.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Pulse ring */}
                    {isActive && (
                      <motion.circle cx={nx} cy={ny} r="18"
                        fill={node.color} fillOpacity="0.12"
                        initial={{ scale: 0.6, opacity: 0.8 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        style={{ transformOrigin: `${nx}px ${ny}px` }}
                      />
                    )}
                    {/* Node circle */}
                    <motion.circle cx={nx} cy={ny} r="10"
                      fill={isActive ? node.color : 'white'}
                      stroke={node.color} strokeWidth="1.5"
                      animate={{ r: isActive ? 12 : 10, fillOpacity: isActive ? 1 : 0.6 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Label */}
                    {(() => {
                      const lx = nx + (Math.cos(rad) > 0.2 ? 22 : Math.cos(rad) < -0.2 ? -22 : 0)
                      const ly = ny + (Math.sin(rad) > 0.3 ? 24 : Math.sin(rad) < -0.3 ? -14 : 5)
                      const anchor = Math.cos(rad) > 0.2 ? 'start' : Math.cos(rad) < -0.2 ? 'end' : 'middle'
                      return (
                        <text
                          x={lx} y={ly}
                          textAnchor={anchor}
                          fontSize="12" fontWeight="700"
                          fill={isActive ? '#007cf4' : '#374151'}
                          className="dark:fill-white/80"
                        >
                          {node.label}
                        </text>
                      )
                    })()}
                  </g>
                )
              })}

              {/* Center blob */}
              <motion.circle cx={cx} cy={cy} r="52"
                fill="#007cf4" fillOpacity="0.12"
                animate={{ r: [52, 58, 52] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <circle cx={cx} cy={cy} r="44" fill="white" stroke="#007cf4" strokeWidth="1.5" strokeOpacity="0.4"
                className="fill-white"
              />
              {/* Center label */}
              <text x={cx} y={cy - 6} textAnchor="middle" fontSize="9" fontWeight="700"
                fill="#007cf4" letterSpacing="0.05em"
              >
                {centerLabel.split(' ')[0]}
              </text>
              <text x={cx} y={cy + 8} textAnchor="middle" fontSize="9" fontWeight="700"
                fill="#007cf4" letterSpacing="0.05em"
              >
                {centerLabel.split(' ').slice(1).join(' ')}
              </text>

              {/* Center dot */}
              <circle cx={cx} cy={cy} r="5" fill="#007cf4" />

              {/* Rotating satellite dot */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                <circle cx={cx} cy={cy - R1} r="5" fill="#36c5f0" />
              </motion.g>
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                <circle cx={cx} cy={cy - R2} r="4" fill="#007cf4" fillOpacity="0.7" />
              </motion.g>
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
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              {title}{' '}
              <span style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(90deg,#007cf4,#36c5f0)', backgroundClip: 'text' }}>
                {highlight}.
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base mb-8 max-w-md">
              {description}
            </p>
            <ul className="flex flex-col gap-4">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full border border-[#007cf4]/30 bg-[#007cf4]/6 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#007cf4]" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
