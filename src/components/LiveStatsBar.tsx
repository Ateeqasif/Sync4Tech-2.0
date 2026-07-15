'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'

function rand(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min)
}

function Pulse({ color = '#22c55e' }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
    </span>
  )
}

function MiniTicker({ value, suffix = '', color }: { value: number; suffix?: string; color: string }) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)
  useEffect(() => {
    const from = prev.current
    const to = value
    const dur = 500
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(from + (to - from) * e))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prev.current = to
  }, [value])
  return <span style={{ color }} className="font-inter-tight font-black tabular-nums">{display.toLocaleString()}{suffix}</span>
}

function SparkTip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#050f2e] border border-[#007cf4]/30 rounded-lg px-2 py-1 text-[10px] text-white shadow-xl">
      {payload[0].value}
    </div>
  )
}

interface StatConfig {
  label: string
  suffix?: string
  min: number
  max: number
  color: string
}

interface Props {
  stats?: StatConfig[]
}

const DEFAULT_STATS: StatConfig[] = [
  { label: 'Tasks Automated', suffix: '', min: 800, max: 1600, color: '#007cf4' },
  { label: 'AI Accuracy', suffix: '%', min: 94, max: 99, color: '#22c55e' },
  { label: 'Hours Saved', suffix: 'h', min: 30, max: 60, color: '#36c5f0' },
  { label: 'Avg. ROI', suffix: '%', min: 260, max: 420, color: '#f59e0b' },
]

const POINTS = 14

export default function LiveStatsBar({ stats = DEFAULT_STATS }: Props) {
  const [values, setValues] = useState(() => stats.map(s => rand(s.min, s.max)))
  const [series, setSeries] = useState(() =>
    stats.map(s => Array.from({ length: POINTS }, () => ({ v: rand(s.min, s.max) })))
  )

  useEffect(() => {
    const id = setInterval(() => {
      setValues(stats.map(s => rand(s.min, s.max)))
      setSeries(prev => prev.map((pts, i) => {
        const next = [...pts.slice(-POINTS + 1), { v: rand(stats[i].min, stats[i].max) }]
        return next
      }))
    }, 1800)
    return () => clearInterval(id)
  }, [stats])

  return (
    <section className="py-10" style={{ background: 'linear-gradient(135deg, #050f2e 0%, #0a1a4a 100%)' }}>
      <div className="section-container">
        <div className="flex items-center gap-2 mb-6">
          <Pulse />
          <span className="text-[#36c5f0] text-xs font-semibold tracking-widest uppercase">Live Performance Metrics</span>
        </div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <Pulse color={stat.color} />
                <span className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="text-2xl mb-2">
                <MiniTicker value={values[i]} suffix={stat.suffix} color={stat.color} />
              </div>
              <ResponsiveContainer width="100%" height={40}>
                <LineChart data={series[i]} margin={{ top: 2, right: 0, left: 0, bottom: 2 }}>
                  <Tooltip content={<SparkTip />} />
                  <Line type="monotone" dataKey="v" stroke={stat.color} strokeWidth={1.5} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
