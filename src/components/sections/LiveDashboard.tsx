'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts'

const EASE = [0.22, 1, 0.36, 1] as const

// ─── helpers ─────────────────────────────────────────────────────────────────

function rand(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min)
}

function buildSeed(n: number, base: number, variance: number) {
  return Array.from({ length: n }, (_, i) => ({
    t: i,
    v: Math.max(0, base + Math.sin(i * 0.6) * variance * 0.6 + rand(0, variance)),
  }))
}

// ─── Ticker ──────────────────────────────────────────────────────────────────

interface TickerProps { value: number; prefix?: string; suffix?: string; color?: string }

function Ticker({ value, prefix = '', suffix = '', color = '#007cf4' }: TickerProps) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)

  useEffect(() => {
    const from = prev.current
    const to = value
    const dur = 600
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(from + (to - from) * ease))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prev.current = to
  }, [value])

  return (
    <span style={{ color }} className="font-inter-tight font-black tabular-nums">
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}

// ─── custom tooltip ───────────────────────────────────────────────────────────

function ChartTip({ active, payload, label, unit = '' }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#050f2e] border border-[#007cf4]/30 rounded-xl px-3 py-2 text-xs text-white shadow-xl">
      <p className="text-white/50 mb-1">t+{label}s</p>
      <p className="font-bold">{payload[0].value?.toLocaleString()}{unit}</p>
    </div>
  )
}

// ─── Live pulse dot ───────────────────────────────────────────────────────────

function Pulse({ color = '#22c55e' }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
    </span>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

const MAX_POINTS = 20

export default function LiveDashboard() {
  const [tasksData, setTasksData] = useState(() => buildSeed(MAX_POINTS, 420, 80))
  const [accuracyData, setAccuracyData] = useState(() => buildSeed(MAX_POINTS, 96, 3))
  const [roiData, setRoiData] = useState(() => buildSeed(MAX_POINTS, 320, 60))
  const [hoursData, setHoursData] = useState(() => buildSeed(MAX_POINTS, 38, 12))

  const [kpis, setKpis] = useState({
    tasks: 0,
    accuracy: 97,
    roi: 0,
    hours: 0,
  })

  const tickRef = useRef(MAX_POINTS)

  useEffect(() => {
    // Initial KPI seeded values
    setKpis({ tasks: rand(1200, 1800), accuracy: rand(95, 99), roi: rand(280, 380), hours: rand(35, 55) })

    const id = setInterval(() => {
      const t = tickRef.current++

      const newTask = { t, v: rand(340, 540) }
      const newAcc = { t, v: Math.min(100, 93 + Math.random() * 6) }
      const newRoi = { t, v: rand(260, 400) }
      const newHours = { t, v: rand(26, 60) }

      setTasksData(d => [...d.slice(-MAX_POINTS + 1), newTask])
      setAccuracyData(d => [...d.slice(-MAX_POINTS + 1), { t, v: Math.round(newAcc.v * 10) / 10 }])
      setRoiData(d => [...d.slice(-MAX_POINTS + 1), newRoi])
      setHoursData(d => [...d.slice(-MAX_POINTS + 1), newHours])

      setKpis({
        tasks: rand(1200, 1900),
        accuracy: Math.round((93 + Math.random() * 6) * 10) / 10,
        roi: rand(280, 420),
        hours: rand(35, 58),
      })
    }, 1500)

    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-section" style={{ background: 'linear-gradient(135deg, #050f2e 0%, #0a1a4a 100%)' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border border-[#007cf4]/30 bg-[#007cf4]/10">
            <Pulse />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#36c5f0]">Live Performance Dashboard</span>
          </div>
          <h2
            className="font-inter-tight font-black text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Automation Running
            <br />
            <span style={{ background: 'linear-gradient(135deg, #007cf4, #36c5f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Right Now
            </span>
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-md mx-auto">
            Simulated metrics from Sync4Tech-powered client environments — updated every 1.5 seconds.
          </p>
        </motion.div>

        {/* KPI row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {[
            { label: 'Tasks Automated Today', value: kpis.tasks, suffix: '', prefix: '', color: '#36c5f0' },
            { label: 'AI Accuracy Rate', value: kpis.accuracy, suffix: '%', prefix: '', color: '#22c55e' },
            { label: 'Avg. ROI per Client', value: kpis.roi, suffix: '%', prefix: '', color: '#007cf4' },
            { label: 'Hours Saved per Team', value: kpis.hours, suffix: 'h', prefix: '', color: '#f59e0b' },
          ].map((kpi, i) => (
            <div
              key={i}
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(54,197,240,0.15)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Pulse color={kpi.color} />
                <span className="text-white/40 text-xs font-medium">{kpi.label}</span>
              </div>
              <div className="text-3xl">
                <Ticker value={typeof kpi.value === 'number' ? kpi.value : 0} suffix={kpi.suffix} prefix={kpi.prefix} color={kpi.color} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Tasks Automated */}
          <motion.div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,124,244,0.2)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0, ease: EASE }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Tasks / interval</p>
                <p className="text-white font-inter-tight font-black text-xl">Workflow Throughput</p>
              </div>
              <Pulse />
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={tasksData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradTask" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007cf4" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#007cf4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="t" hide />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} />
                <Tooltip content={<ChartTip unit=" tasks" />} />
                <Area type="monotone" dataKey="v" stroke="#007cf4" strokeWidth={2} fill="url(#gradTask)" dot={false} isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* AI Accuracy */}
          <motion.div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(34,197,94,0.2)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Live accuracy %</p>
                <p className="text-white font-inter-tight font-black text-xl">AI Processing Accuracy</p>
              </div>
              <Pulse color="#22c55e" />
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={accuracyData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="t" hide />
                <YAxis domain={[88, 100]} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} />
                <Tooltip content={<ChartTip unit="%" />} />
                <Line type="monotone" dataKey="v" stroke="#22c55e" strokeWidth={2.5} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* ROI */}
          <motion.div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(54,197,240,0.2)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Client ROI %</p>
                <p className="text-white font-inter-tight font-black text-xl">Return on Investment</p>
              </div>
              <Pulse color="#36c5f0" />
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={roiData.slice(-12)} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} barSize={10}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="t" hide />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} />
                <Tooltip content={<ChartTip unit="%" />} />
                <Bar dataKey="v" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                  {roiData.slice(-12).map((_, i) => (
                    <rect key={i} fill={`url(#gradBar)`} />
                  ))}
                </Bar>
                <defs>
                  <linearGradient id="gradBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#36c5f0" />
                    <stop offset="100%" stopColor="#007cf4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Hours Saved */}
          <motion.div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.2)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Hours / team / week</p>
                <p className="text-white font-inter-tight font-black text-xl">Hours Saved per Team</p>
              </div>
              <Pulse color="#f59e0b" />
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={hoursData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="t" hide />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} />
                <Tooltip content={<ChartTip unit="h" />} />
                <Area type="monotone" dataKey="v" stroke="#f59e0b" strokeWidth={2} fill="url(#gradHours)" dot={false} isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/25 text-xs mt-8">
          Data simulated from anonymised client environments · Updates every 1.5s · Not financial advice
        </p>
      </div>
    </section>
  )
}
