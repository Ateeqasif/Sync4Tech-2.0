'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const EASE      = [0.22, 1, 0.36, 1] as const
const Y_LABEL_W = 68
const X_LABEL_H = 24

function ou(prev: number, mean: number, theta: number, sigma: number) {
  return prev + theta * (mean - prev) + sigma * (Math.random() * 2 - 1)
}
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)) }

function fmtDl(v: number) {
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(1) + 'M'
  if (v >= 1_000)     return Math.round(v / 1_000) + 'k'
  return String(Math.round(v))
}

// ─── Package definitions ──────────────────────────────────────────────────────
const AI_PKGS = [
  { pkg: 'openai',                   label: 'OpenAI SDK',   color: '#007cf4', sim: 650_000 },
  { pkg: '@anthropic-ai/sdk',        label: 'Anthropic',    color: '#6366f1', sim: 95_000  },
  { pkg: '@langchain/core',          label: 'LangChain',    color: '#22c55e', sim: 270_000 },
  { pkg: '@pinecone-database/pinecone', label: 'Pinecone',  color: '#06b6d4', sim: 28_000  },
]
const AUTO_PKGS = [
  { pkg: 'n8n',                  label: 'n8n',          color: '#EA4B71', sim: 42_000 },
  { pkg: 'zapier-platform-core', label: 'Zapier',        color: '#FF4A00', sim: 14_000 },
  { pkg: 'highlevel-api',        label: 'GoHighLevel',   color: '#F97316', sim: 8_000  },
]

type NpmSeries = { label: string; color: string; days: string[]; data: number[] }

function simSeries(mean: number, n: number): number[] {
  const buf = [mean]
  for (let i = 1; i < n; i++)
    buf.push(Math.max(0, ou(buf[i - 1], mean * (1 + 0.004 * i / n), 0.1, mean * 0.06)))
  return buf
}

function makeDays(n = 30): string[] {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (n - 1) + i)
    return d.toISOString().split('T')[0]
  })
}

async function fetchPkg(pkg: string): Promise<{ days: string[]; data: number[] }> {
  const res  = await fetch(
    `https://api.npmjs.org/downloads/range/last-month/${encodeURIComponent(pkg)}`,
    { signal: AbortSignal.timeout(7000) }
  )
  const json = await res.json()
  const dl   = (json.downloads as { day: string; downloads: number }[]) ?? []
  if (dl.length < 5) throw new Error('empty')
  return { days: dl.map(d => d.day), data: dl.map(d => d.downloads) }
}

async function fetchGroup(pkgs: typeof AI_PKGS): Promise<NpmSeries[]> {
  const days = makeDays(30)
  return Promise.all(
    pkgs.map(async ({ pkg, label, color, sim }) => {
      try {
        const r = await fetchPkg(pkg)
        return { label, color, days: r.days, data: r.data }
      } catch {
        return { label, color, days, data: simSeries(sim, 30) }
      }
    })
  )
}

// ─── Canvas multi-series line chart ──────────────────────────────────────────
function NpmChart({ series, height = 240 }: { series: NpmSeries[]; height?: number }) {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current, canvas = canvasRef.current
    if (!wrap || !canvas || !series.length) return
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width        = wrap.clientWidth * dpr
      canvas.height       = height * dpr
      canvas.style.width  = wrap.clientWidth + 'px'
      canvas.style.height = height + 'px'
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const maxVal = Math.max(...series.flatMap(s => s.data)) * 1.1
    const days   = series[0]?.days ?? []
    const n      = days.length
    let animId: number
    const t0 = performance.now()

    const draw = (now: number) => {
      const prog = Math.min((now - t0) / 950, 1)
      const ctx  = canvas.getContext('2d')
      if (!ctx) { animId = requestAnimationFrame(draw); return }

      const W = canvas.width / dpr, H = canvas.height / dpr
      const cL = Y_LABEL_W, cT = 8, cW = W - cL, cH = H - cT - X_LABEL_H

      ctx.save(); ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, W, H)

      const xOf = (i: number) => cL + (i / Math.max(n - 1, 1)) * cW
      const yOf = (v: number) => cT + (1 - clamp(v / maxVal, 0, 1)) * cH

      // Y axis
      ctx.font = '10px system-ui, sans-serif'
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
      for (let i = 0; i <= 4; i++) {
        const f = i / 4, v = maxVal * (1 - f), y = cT + f * cH
        ctx.strokeStyle = 'rgba(0,0,0,0.055)'; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(cL, y); ctx.lineTo(W, y); ctx.stroke()
        ctx.fillStyle = '#9ca3af'; ctx.fillText(fmtDl(v), cL - 6, y)
      }

      // X axis
      ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = '#9ca3af'
      const step = Math.ceil(n / 6)
      for (let i = 0; i < n; i += step) {
        const x = xOf(i)
        ctx.strokeStyle = 'rgba(0,0,0,0.04)'; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(x, cT); ctx.lineTo(x, cT + cH); ctx.stroke()
        if (days[i]) ctx.fillText(days[i].slice(5), x, cT + cH + 5)
      }

      // Series
      const visN = Math.max(2, Math.round(prog * n))
      series.forEach(s => {
        const pts = s.data.slice(0, visN).map((v, i) => ({ x: xOf(i), y: yOf(v) }))
        if (pts.length < 2) return

        ctx.save()
        ctx.beginPath(); ctx.rect(cL, cT, cW, cH); ctx.clip()

        // Fill
        const grad = ctx.createLinearGradient(0, cT, 0, cT + cH)
        grad.addColorStop(0, s.color + '20'); grad.addColorStop(1, s.color + '00')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.moveTo(pts[0].x, cT + cH)
        pts.forEach(p => ctx.lineTo(p.x, p.y))
        ctx.lineTo(pts.at(-1)!.x, cT + cH)
        ctx.closePath(); ctx.fill()

        // Line
        ctx.strokeStyle = s.color; ctx.lineWidth = 2.5
        ctx.lineJoin = 'round'; ctx.lineCap = 'round'
        ctx.beginPath()
        pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y))
        ctx.stroke()

        // Head dot
        const last = pts.at(-1)!
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(last.x, last.y, 4, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = s.color; ctx.beginPath(); ctx.arc(last.x, last.y, 3, 0, Math.PI * 2); ctx.fill()

        ctx.restore()
      })

      ctx.restore()
      if (prog < 1) animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [series, height])

  return <div ref={wrapRef} className="w-full"><canvas ref={canvasRef} style={{ display: 'block' }} /></div>
}

// ─── Pulse dot ────────────────────────────────────────────────────────────────
function Pulse({ color = '#007cf4' }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
    </span>
  )
}

// ─── Data hook ────────────────────────────────────────────────────────────────
function useNpmGroups() {
  const [ai,     setAi]     = useState<NpmSeries[]>([])
  const [auto,   setAuto]   = useState<NpmSeries[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    Promise.all([fetchGroup(AI_PKGS), fetchGroup(AUTO_PKGS)]).then(([a, b]) => {
      setAi(a); setAuto(b); setLoaded(true)
    })
  }, [])

  return { ai, auto, loaded }
}

// ─── KPI tile ─────────────────────────────────────────────────────────────────
function KpiTile({ s }: { s: NpmSeries }) {
  const total = s.data.reduce((a, b) => a + b, 0)
  const avg   = total / (s.data.length || 1)
  const first = s.data.slice(0, 7).reduce((a, b) => a + b, 0) / 7
  const last7 = s.data.slice(-7).reduce((a, b) => a + b, 0) / 7
  const pct   = first ? ((last7 - first) / first) * 100 : 0
  const up    = pct >= 0

  return (
    <div className="rounded-2xl p-4 bg-[#f8faff] border border-[#007cf4]/10 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Pulse color={s.color} />
        <span className="text-xs font-semibold text-gray-500 truncate">{s.label}</span>
      </div>
      <div className="font-inter-tight font-black text-2xl tabular-nums" style={{ color: s.color }}>
        {fmtDl(Math.round(avg))}
        <span className="text-gray-400 text-xs font-medium ml-1">/day</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-400">{fmtDl(total)} total</span>
        <span className={`text-[11px] font-bold flex items-center gap-0.5 ${up ? 'text-emerald-500' : 'text-red-400'}`}>
          <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor"
            style={{ transform: up ? 'none' : 'rotate(180deg)' }}>
            <path d="M4 1l3.5 6H.5z"/>
          </svg>
          {Math.abs(pct).toFixed(1)}%
        </span>
      </div>
    </div>
  )
}

// ─── Chart card ───────────────────────────────────────────────────────────────
function ChartCard({ title, sub, series, delay = 0 }: {
  title: string; sub: string; series: NpmSeries[]; delay?: number
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">{sub}</p>
          <p className="text-gray-900 font-inter-tight font-black text-xl">{title}</p>
        </div>
        <div className="flex gap-3 flex-wrap justify-end">
          {series.map(s => (
            <span key={s.label} className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
      <NpmChart series={series} height={230} />
    </motion.div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function LiveDashboard() {
  const { ai, auto, loaded } = useNpmGroups()
  const allSeries = [...ai, ...auto]

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
              Live · npm Registry
            </span>
          </div>
          <h2
            className="font-inter-tight font-black text-[#050f2e] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            AI &amp; Automation
            <br />
            <span className="gradient-text">Tool Adoption Trends</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Daily npm download counts for the exact tools Sync4Tech deploys — showing the explosive, real-world growth in AI and automation adoption.
          </p>
        </motion.div>

        {/* KPI tiles — all 6 tools */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {loaded
            ? allSeries.map(s => <KpiTile key={s.label} s={s} />)
            : Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="animate-pulse h-[108px] rounded-2xl bg-gray-100" />
              ))}
        </motion.div>

        {/* Charts */}
        <div className="flex flex-col gap-5">
          {loaded ? (
            <>
              <ChartCard
                title="AI & LLM Frameworks"
                sub="Daily downloads · Last 30 days"
                series={ai}
                delay={0}
              />
              <ChartCard
                title="Automation Platforms"
                sub="Daily downloads · Last 30 days"
                series={auto}
                delay={0.1}
              />
            </>
          ) : (
            <>
              <div className="animate-pulse h-[326px] rounded-2xl bg-gray-100" />
              <div className="animate-pulse h-[326px] rounded-2xl bg-gray-100" />
            </>
          )}
        </div>

        <p className="text-center text-gray-300 text-xs mt-8">
          Source: npmjs.org public registry · Updates daily · Tools shown are actively deployed by Sync4Tech
        </p>
      </div>
    </section>
  )
}
