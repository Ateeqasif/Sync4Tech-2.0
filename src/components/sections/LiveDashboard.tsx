'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts'

const EASE = [0.22, 1, 0.36, 1] as const
const MAX_POINTS = 30
const TICK_MS = 1000

// ─── Ornstein-Uhlenbeck random walk ──────────────────────────────────────────
// Realistic: drifts gradually, reverts toward mean, never jumps wildly
function ou(prev: number, mean: number, theta = 0.18, sigma = 6): number {
  const drift = theta * (mean - prev)
  const noise = sigma * (Math.random() * 2 - 1)
  return Math.round((prev + drift + noise) * 10) / 10
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}

function nowLabel(): string {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`
}

function buildSeries(n: number, mean: number, sigma: number, lo: number, hi: number) {
  const pts: { ts: string; v: number }[] = []
  let v = mean
  for (let i = 0; i < n; i++) {
    v = clamp(ou(v, mean, 0.18, sigma), lo, hi)
    pts.push({ ts: '', v })
  }
  return pts
}

// ─── Ticker (smooth animated number) ─────────────────────────────────────────

interface TickerProps { value: number; suffix?: string; color?: string; decimals?: number }

function Ticker({ value, suffix = '', color = '#007cf4', decimals = 0 }: TickerProps) {
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
      const cur = from + (to - from) * e
      setDisplay(decimals ? Math.round(cur * 10) / 10 : Math.round(cur))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prev.current = to
  }, [value, decimals])

  return (
    <span style={{ color }} className="font-inter-tight font-black tabular-nums">
      {decimals ? display.toFixed(1) : display.toLocaleString()}{suffix}
    </span>
  )
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────

function ChartTip({ active, payload, unit = '' }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#050f2e] border border-[#007cf4]/30 rounded-xl px-3 py-2 text-xs text-white shadow-xl">
      <p className="text-white/50 mb-0.5">{payload[0]?.payload?.ts}</p>
      <p className="font-bold text-white">{typeof payload[0].value === 'number' ? payload[0].value.toLocaleString() : payload[0].value}{unit}</p>
    </div>
  )
}

// ─── Live pulse ───────────────────────────────────────────────────────────────

function Pulse({ color = '#22c55e' }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
    </span>
  )
}

// ─── Delta badge ──────────────────────────────────────────────────────────────

function Delta({ value, prev }: { value: number; prev: number }) {
  const delta = value - prev
  const up = delta >= 0
  return (
    <span className={`text-xs font-semibold flex items-center gap-0.5 ${up ? 'text-emerald-500' : 'text-red-400'}`}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: up ? 'none' : 'rotate(180deg)' }}>
        <path d="M5 2l4 6H1z" fill="currentColor"/>
      </svg>
      {Math.abs(Math.round(delta * 10) / 10)}
    </span>
  )
}

// ─── Chart card ───────────────────────────────────────────────────────────────

function Card({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function LiveDashboard() {
  // Each series: random-walk from a realistic mean
  const [tasks,    setTasks]    = useState(() => buildSeries(MAX_POINTS, 460, 14, 380, 560))
  const [accuracy, setAccuracy] = useState(() => buildSeries(MAX_POINTS, 97.2, 0.35, 93.5, 99.5))
  const [queue,    setQueue]    = useState(() => buildSeries(MAX_POINTS, 18, 3, 4, 40))

  const prevKpi = useRef({ tasks: 460, accuracy: 97.2, queue: 18 })
  const [kpi, setKpi] = useState({ tasks: 460, accuracy: 97.2, queue: 18 })

  useEffect(() => {
    const id = setInterval(() => {
      const ts = nowLabel()

      setTasks(d => {
        const v = clamp(ou(d[d.length - 1].v, 460, 0.15, 14), 380, 560)
        return [...d.slice(-MAX_POINTS + 1), { ts, v }]
      })
      setAccuracy(d => {
        const v = clamp(ou(d[d.length - 1].v, 97.2, 0.22, 0.35), 93.5, 99.5)
        return [...d.slice(-MAX_POINTS + 1), { ts, v: Math.round(v * 10) / 10 }]
      })
      setQueue(d => {
        const v = clamp(ou(d[d.length - 1].v, 18, 0.14, 3), 4, 40)
        return [...d.slice(-MAX_POINTS + 1), { ts, v: Math.round(v) }]
      })

      setKpi(prev => {
        prevKpi.current = { ...prev }
        return {
          tasks:    clamp(Math.round(ou(prev.tasks,    460,  0.15, 14)),   380, 560),
          accuracy: clamp(Math.round(ou(prev.accuracy, 97.2, 0.22, 0.35) * 10) / 10, 93.5, 99.5),
          queue:    clamp(Math.round(ou(prev.queue,    18,   0.14, 3)),     4,   40),
        }
      })
    }, TICK_MS)

    return () => clearInterval(id)
  }, [])

  const gridStroke = 'rgba(0,0,0,0.05)'
  const axisStyle  = { fill: '#94a3b8', fontSize: 10 }

  return (
    <section className="py-section bg-white">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border border-[#007cf4]/20 bg-[#007cf4]/6">
            <Pulse color="#007cf4" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#007cf4]">Live Performance Dashboard</span>
          </div>
          <h2
            className="font-inter-tight font-black text-[#050f2e] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Automation Running
            <br />
            <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Live metrics from Sync4Tech-powered client environments — streaming every second.
          </p>
        </motion.div>

        {/* KPI row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {([
            { label: 'Tasks / min', value: kpi.tasks,    prev: prevKpi.current.tasks,    suffix: '',      color: '#007cf4', decimals: 0, inv: false },
            { label: 'AI Accuracy', value: kpi.accuracy, prev: prevKpi.current.accuracy, suffix: '%',     color: '#22c55e', decimals: 1, inv: false },
            { label: 'Queue Depth', value: kpi.queue,    prev: prevKpi.current.queue,    suffix: ' jobs', color: '#f59e0b', decimals: 0, inv: true  },
          ]).map((k, i) => (
            <div key={i} className="rounded-2xl p-5 bg-[#f8faff] border border-[#007cf4]/10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Pulse color={k.color} />
                  <span className="text-gray-400 text-xs font-medium">{k.label}</span>
                </div>
                <Delta value={k.inv ? -k.value : k.value} prev={k.inv ? -k.prev : k.prev} />
              </div>
              <div className="text-3xl">
                <Ticker value={k.value} suffix={k.suffix} color={k.color} decimals={k.decimals} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Charts — full-width line, then 50/50 line + bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Workflow throughput — full width line */}
          <div className="md:col-span-2">
            <Card delay={0}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Tasks per minute</p>
                  <p className="text-gray-900 font-inter-tight font-black text-xl">Workflow Throughput</p>
                </div>
                <Pulse color="#007cf4" />
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={tasks} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 4" stroke={gridStroke} />
                  <XAxis dataKey="ts" tick={axisStyle} interval={Math.floor(MAX_POINTS / 6)} tickLine={false} axisLine={false} />
                  <YAxis tick={axisStyle} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                  <Tooltip content={<ChartTip unit=" tasks" />} />
                  <Line type="monotoneX" dataKey="v" stroke="#007cf4" strokeWidth={2.5} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* AI Accuracy — 50% line */}
          <Card delay={0.1}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Accuracy %</p>
                <p className="text-gray-900 font-inter-tight font-black text-xl">AI Accuracy</p>
              </div>
              <Pulse color="#22c55e" />
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={accuracy} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 4" stroke={gridStroke} />
                <XAxis dataKey="ts" tick={axisStyle} interval={Math.floor(MAX_POINTS / 4)} tickLine={false} axisLine={false} />
                <YAxis tick={axisStyle} tickLine={false} axisLine={false} domain={[92, 100]} />
                <Tooltip content={<ChartTip unit="%" />} />
                <Line type="monotoneX" dataKey="v" stroke="#22c55e" strokeWidth={2.5} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Queue depth — 50% bar */}
          <Card delay={0.2}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Jobs pending</p>
                <p className="text-gray-900 font-inter-tight font-black text-xl">Queue Depth</p>
              </div>
              <Pulse color="#f59e0b" />
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={queue.slice(-18)} margin={{ top: 4, right: 8, left: -16, bottom: 0 }} barSize={11}>
                <defs>
                  <linearGradient id="gQueue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#f59e0b" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 4" stroke={gridStroke} />
                <XAxis dataKey="ts" tick={axisStyle} interval={4} tickLine={false} axisLine={false} />
                <YAxis tick={axisStyle} tickLine={false} axisLine={false} domain={[0, 'auto']} />
                <Tooltip content={<ChartTip unit=" jobs" />} />
                <Bar dataKey="v" fill="url(#gQueue)" radius={[3, 3, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

        </div>

        <p className="text-center text-gray-300 text-xs mt-8">
          Simulated streaming data · updates every second · representative of real client environments
        </p>
      </div>
    </section>
  )
}
