'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const
const TICK_MS   = 1000   // new data point every second
const PX_PER_SEC = 55    // how fast the chart scrolls (px per second)
const BUFFER    = 80     // keep 80s of history

// ─── Ornstein-Uhlenbeck random walk ──────────────────────────────────────────
function ou(prev: number, mean: number, theta = 0.18, sigma = 6): number {
  return (prev + theta * (mean - prev) + sigma * (Math.random() * 2 - 1))
}
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)) }

// ─── Shared live value streams ────────────────────────────────────────────────
function useStream(mean: number, theta: number, sigma: number, lo: number, hi: number) {
  const bufRef  = useRef<number[]>(Array.from({ length: 20 }, () => mean))
  const cur     = useRef(mean)
  const [display, setDisplay] = useState(mean)

  useEffect(() => {
    const id = setInterval(() => {
      const next = clamp(ou(cur.current, mean, theta, sigma), lo, hi)
      cur.current = next
      bufRef.current = [...bufRef.current.slice(-(BUFFER - 1)), next]
      setDisplay(Math.round(next * 10) / 10)
    }, TICK_MS)
    return () => clearInterval(id)
  }, [mean, theta, sigma, lo, hi])

  return { bufRef, display }
}

// ─── Animated ticker ──────────────────────────────────────────────────────────
function Ticker({ value, suffix = '', color = '#007cf4', dec = 0 }:
  { value: number; suffix?: string; color?: string; dec?: number }) {
  const [d, setD] = useState(value)
  const prev = useRef(value)
  useEffect(() => {
    const from = prev.current, to = value, t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 450, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setD(from + (to - from) * e)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prev.current = to
  }, [value])
  return (
    <span style={{ color }} className="font-inter-tight font-black tabular-nums">
      {dec ? d.toFixed(1) : Math.round(d).toLocaleString()}{suffix}
    </span>
  )
}

// ─── Delta badge ──────────────────────────────────────────────────────────────
function Delta({ cur, prev }: { cur: number; prev: number }) {
  const d = cur - prev
  const up = d >= 0
  return (
    <span className={`text-[11px] font-bold flex items-center gap-0.5 ${up ? 'text-emerald-500' : 'text-red-400'}`}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"
        style={{ transform: up ? 'none' : 'rotate(180deg)' }}>
        <path d="M4 1l3.5 6H.5z"/>
      </svg>
      {Math.abs(Math.round(d * 10) / 10)}
    </span>
  )
}

// ─── Live pulse dot ───────────────────────────────────────────────────────────
function Pulse({ color = '#22c55e' }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2 w-2"
        style={{ backgroundColor: color }} />
    </span>
  )
}

// ─── Canvas streaming line chart ──────────────────────────────────────────────
function StreamLine({
  bufRef, color, min, max, height = 200, unit = '',
}: {
  bufRef: React.MutableRefObject<number[]>
  color: string; min: number; max: number; height?: number; unit?: string
}) {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap   = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const dpr = window.devicePixelRatio || 1
    let animId: number
    const t0 = performance.now()

    const resize = () => {
      const w = wrap.clientWidth
      canvas.width  = w * dpr
      canvas.height = height * dpr
      canvas.style.width  = w + 'px'
      canvas.style.height = height + 'px'
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const draw = (now: number) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) { animId = requestAnimationFrame(draw); return }

      const elapsed  = (now - t0) / 1000           // total seconds elapsed
      const w = canvas.width  / dpr
      const h = canvas.height / dpr
      const buf = bufRef.current
      const scrollOffset = (elapsed % 1) * PX_PER_SEC // sub-second scroll (0 → PX_PER_SEC)

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)

      const norm = (v: number) => 1 - clamp((v - min) / (max - min), 0, 1)

      // ── Scrolling grid ────────────────────────────────────────
      ctx.strokeStyle = 'rgba(0,0,0,0.055)'
      ctx.lineWidth = 1
      ;[0.25, 0.5, 0.75, 1].forEach(f => {
        ctx.beginPath(); ctx.moveTo(0, f * h); ctx.lineTo(w, f * h); ctx.stroke()
      })
      const vGap = PX_PER_SEC * 5
      const vOff = scrollOffset % vGap
      for (let x = w - vOff; x > -vGap; x -= vGap) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
      }

      // ── Build point list ──────────────────────────────────────
      const pts: { x: number; y: number }[] = []
      for (let i = 0; i < buf.length; i++) {
        const fromEnd = buf.length - 1 - i
        const x = w - fromEnd * PX_PER_SEC + scrollOffset
        if (x < -PX_PER_SEC * 2 || x > w + PX_PER_SEC) continue
        pts.push({ x, y: norm(buf[i]) * h })
      }

      if (pts.length < 2) { ctx.restore(); animId = requestAnimationFrame(draw); return }

      // ── Gradient fill ─────────────────────────────────────────
      const grad = ctx.createLinearGradient(0, 0, 0, h)
      grad.addColorStop(0,   color + '28')
      grad.addColorStop(0.7, color + '08')
      grad.addColorStop(1,   color + '00')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.moveTo(pts[0].x, h)
      pts.forEach(p => ctx.lineTo(p.x, p.y))
      ctx.lineTo(pts[pts.length - 1].x, h)
      ctx.closePath()
      ctx.fill()

      // ── Glow ─────────────────────────────────────────────────
      ctx.strokeStyle = color + '35'
      ctx.lineWidth = 7
      ctx.lineJoin = 'round'
      ctx.lineCap  = 'round'
      ctx.beginPath()
      pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y))
      ctx.stroke()

      // ── Line ─────────────────────────────────────────────────
      ctx.strokeStyle = color
      ctx.lineWidth = 2.5
      ctx.beginPath()
      pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y))
      ctx.stroke()

      // ── Live head dot + pulse ring ────────────────────────────
      // Interpolate the head position: between last two buffer values
      if (buf.length >= 2) {
        const frac = clamp(scrollOffset / PX_PER_SEC, 0, 1)
        const headV = buf[buf.length - 2] + frac * (buf[buf.length - 1] - buf[buf.length - 2])
        const hx = w - PX_PER_SEC + scrollOffset
        const hy = norm(headV) * h

        // Pulse ring
        const pulse = (elapsed * 2.5) % 1
        const alpha = Math.round((1 - pulse) * 200).toString(16).padStart(2, '0')
        ctx.strokeStyle = color + alpha
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(hx, hy, 4 + pulse * 10, 0, Math.PI * 2)
        ctx.stroke()

        // Solid dot
        ctx.fillStyle = '#ffffff'
        ctx.beginPath(); ctx.arc(hx, hy, 4, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = color
        ctx.beginPath(); ctx.arc(hx, hy, 3, 0, Math.PI * 2); ctx.fill()
      }

      ctx.restore()
      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [bufRef, color, min, max, height])

  return (
    <div ref={wrapRef} className="w-full">
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}

// ─── Canvas streaming bar chart ───────────────────────────────────────────────
function StreamBar({
  bufRef, color, min, max, height = 200, unit = '',
}: {
  bufRef: React.MutableRefObject<number[]>
  color: string; min: number; max: number; height?: number; unit?: string
}) {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap   = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const dpr = window.devicePixelRatio || 1
    let animId: number
    const t0 = performance.now()

    const resize = () => {
      const w = wrap.clientWidth
      canvas.width  = w * dpr
      canvas.height = height * dpr
      canvas.style.width  = w + 'px'
      canvas.style.height = height + 'px'
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const draw = (now: number) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) { animId = requestAnimationFrame(draw); return }

      const elapsed = (now - t0) / 1000
      const w = canvas.width  / dpr
      const h = canvas.height / dpr
      const buf = bufRef.current
      const scrollOffset = (elapsed % 1) * PX_PER_SEC
      const barW = PX_PER_SEC * 0.55
      const gap  = PX_PER_SEC - barW

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)

      const norm = (v: number) => clamp((v - min) / (max - min), 0, 1)

      // Grid
      ctx.strokeStyle = 'rgba(0,0,0,0.055)'
      ctx.lineWidth = 1
      ;[0.25, 0.5, 0.75, 1].forEach(f => {
        ctx.beginPath(); ctx.moveTo(0, f * h); ctx.lineTo(w, f * h); ctx.stroke()
      })

      // Bars
      for (let i = 0; i < buf.length; i++) {
        const fromEnd = buf.length - 1 - i
        const cx = w - fromEnd * PX_PER_SEC + scrollOffset - barW / 2
        if (cx + barW < 0 || cx > w) continue

        const barH = norm(buf[i]) * h
        const bx   = cx
        const by   = h - barH
        const radius = 3

        // Gradient
        const grad = ctx.createLinearGradient(0, by, 0, h)
        grad.addColorStop(0,   color + 'ee')
        grad.addColorStop(1,   color + '55')
        ctx.fillStyle = grad

        // Rounded top
        ctx.beginPath()
        ctx.moveTo(bx + radius, by)
        ctx.lineTo(bx + barW - radius, by)
        ctx.quadraticCurveTo(bx + barW, by, bx + barW, by + radius)
        ctx.lineTo(bx + barW, h)
        ctx.lineTo(bx, h)
        ctx.lineTo(bx, by + radius)
        ctx.quadraticCurveTo(bx, by, bx + radius, by)
        ctx.closePath()
        ctx.fill()
      }

      ctx.restore()
      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [bufRef, color, min, max, height])

  return (
    <div ref={wrapRef} className="w-full">
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}

// ─── Chart card wrapper ───────────────────────────────────────────────────────
function Card({ children, delay = 0, className = '' }:
  { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm ${className}`}
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
  const tasks    = useStream(460,  0.15, 14,   380, 560)
  const accuracy = useStream(97.2, 0.22, 0.35, 93.5, 99.5)
  const queue    = useStream(18,   0.14, 3,    4,   42)

  const prevTasks    = useRef(460)
  const prevAccuracy = useRef(97.2)
  const prevQueue    = useRef(18)

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
            <span className="text-xs font-semibold tracking-widest uppercase text-[#007cf4]">
              Live Performance Dashboard
            </span>
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
            Live metrics streaming from Sync4Tech-powered client environments — 60fps canvas, updated every second.
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
          {[
            { label: 'Tasks / min', stream: tasks,    color: '#007cf4', suffix: '',      dec: 0, prev: prevTasks    },
            { label: 'AI Accuracy', stream: accuracy, color: '#22c55e', suffix: '%',     dec: 1, prev: prevAccuracy },
            { label: 'Queue Depth', stream: queue,    color: '#f59e0b', suffix: ' jobs', dec: 0, prev: prevQueue    },
          ].map((k, i) => {
            const p = k.prev.current
            k.prev.current = k.stream.display
            return (
              <div key={i} className="rounded-2xl p-5 bg-[#f8faff] border border-[#007cf4]/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Pulse color={k.color} />
                    <span className="text-gray-400 text-xs font-medium">{k.label}</span>
                  </div>
                  <Delta cur={k.stream.display} prev={p} />
                </div>
                <div className="text-3xl">
                  <Ticker value={k.stream.display} suffix={k.suffix} color={k.color} dec={k.dec} />
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Throughput — full width line */}
          <div className="md:col-span-2">
            <Card delay={0}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Tasks per minute</p>
                  <p className="text-gray-900 font-inter-tight font-black text-xl">Workflow Throughput</p>
                </div>
                <Pulse color="#007cf4" />
              </div>
              <StreamLine bufRef={tasks.bufRef} color="#007cf4" min={340} max={600} height={210} unit=" tasks" />
            </Card>
          </div>

          {/* AI Accuracy — 50% line */}
          <Card delay={0.1}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Accuracy %</p>
                <p className="text-gray-900 font-inter-tight font-black text-xl">AI Accuracy</p>
              </div>
              <Pulse color="#22c55e" />
            </div>
            <StreamLine bufRef={accuracy.bufRef} color="#22c55e" min={91} max={100} height={200} unit="%" />
          </Card>

          {/* Queue Depth — 50% bar */}
          <Card delay={0.2}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Jobs pending</p>
                <p className="text-gray-900 font-inter-tight font-black text-xl">Queue Depth</p>
              </div>
              <Pulse color="#f59e0b" />
            </div>
            <StreamBar bufRef={queue.bufRef} color="#f59e0b" min={0} max={50} height={200} unit=" jobs" />
          </Card>

        </div>

        <p className="text-center text-gray-300 text-xs mt-8">
          Simulated streaming data · 60fps canvas rendering · representative of real client environments
        </p>
      </div>
    </section>
  )
}
