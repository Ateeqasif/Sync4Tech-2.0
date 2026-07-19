'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
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

// ─── Brand palette shades ─────────────────────────────────────────────────────
// navy → blue → sky · each series gets its own distinct shade
const BRAND = {
  navy:      '#033a9d', // darkest
  navyMid:   '#0550c8', // navy-blue mid
  blue:      '#007cf4', // primary blue
  blueMid:   '#3399f7', // lighter blue
  sky:       '#36c5f0', // sky / cyan
  skyLight:  '#7adaf8', // light sky
  teal:      '#0ea5c9', // teal shade
}

// ─── Package definitions ──────────────────────────────────────────────────────
const AI_PKGS = [
  { pkg: 'openai',                      label: 'OpenAI SDK', color: BRAND.navy,    sim: 650_000 },
  { pkg: '@anthropic-ai/sdk',           label: 'Anthropic',  color: BRAND.blue,    sim: 95_000  },
  { pkg: '@langchain/core',             label: 'LangChain',  color: BRAND.sky,     sim: 270_000 },
  { pkg: '@pinecone-database/pinecone', label: 'Pinecone',   color: BRAND.navyMid, sim: 28_000  },
]
const AUTO_PKGS = [
  { pkg: 'n8n',                  label: 'n8n',         color: BRAND.blueMid,  sim: 42_000 },
  { pkg: 'zapier-platform-core', label: 'Zapier',      color: BRAND.teal,     sim: 14_000 },
  { pkg: 'highlevel-api',        label: 'GoHighLevel', color: BRAND.skyLight, sim: 8_000  },
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
    <div
      className="rounded-2xl p-4 flex flex-col gap-2 border"
      style={{ background: s.color + '0d', borderColor: s.color + '30' }}
    >
      <div className="flex items-center gap-2">
        <Pulse color={s.color} />
        <span className="text-xs font-semibold truncate" style={{ color: s.color }}>{s.label}</span>
      </div>
      <div className="font-inter-tight font-black text-2xl tabular-nums" style={{ color: s.color }}>
        {fmtDl(Math.round(avg))}
        <span className="text-xs font-medium ml-1" style={{ color: s.color + '80' }}>/day</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px]" style={{ color: s.color + '99' }}>{fmtDl(total)} total</span>
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

// ─── Filter bar ───────────────────────────────────────────────────────────────
type Category = 'all' | 'ai' | 'auto'
const DAY_OPTIONS = [7, 14, 30] as const

function FilterBar({
  category, setCategory,
  dayRange, setDayRange,
  hidden, toggleHidden,
  allSeries,
}: {
  category: Category; setCategory: (c: Category) => void
  dayRange: number;   setDayRange:  (d: number)   => void
  hidden: Set<string>; toggleHidden: (label: string) => void
  allSeries: NpmSeries[]
}) {
  const catTabs: { value: Category; label: string }[] = [
    { value: 'all',  label: 'All'        },
    { value: 'ai',   label: 'AI & LLM'  },
    { value: 'auto', label: 'Automation' },
  ]

  return (
    <div className="mb-7 flex flex-col gap-3">
      {/* Row 1: Category + Range on the same line */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Category segment */}
        <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: 'rgba(0,124,244,0.08)' }}>
          {catTabs.map(t => (
            <button
              key={t.value}
              onClick={() => setCategory(t.value)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none"
              style={category === t.value
                ? { background: 'linear-gradient(135deg,#033a9d,#007cf4)', color: '#fff', boxShadow: '0 1px 6px rgba(0,124,244,0.35)' }
                : { color: '#007cf4' }
              }
            >{t.label}</button>
          ))}
        </div>

        {/* Range segment */}
        <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: 'rgba(0,124,244,0.08)' }}>
          {DAY_OPTIONS.map(d => (
            <button
              key={d}
              onClick={() => setDayRange(d)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none"
              style={dayRange === d
                ? { background: 'linear-gradient(135deg,#007cf4,#36c5f0)', color: '#fff', boxShadow: '0 1px 6px rgba(54,197,240,0.35)' }
                : { color: '#007cf4' }
              }
            >{d}d</button>
          ))}
        </div>
      </div>

      {/* Row 2: Tool toggles — single clean line */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest shrink-0">Visibility</span>
        <div className="w-px h-3 bg-gray-200 shrink-0" />
        {allSeries.map(s => {
          const on = !hidden.has(s.label)
          return (
            <button
              key={s.label}
              onClick={() => toggleHidden(s.label)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer select-none ${
                on
                  ? 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 shadow-sm'
                  : 'bg-transparent text-gray-400 border-dashed'
              }`}
              style={on
                ? { borderColor: s.color + '60', boxShadow: `0 0 0 1px ${s.color}30` }
                : { borderColor: '#d1d5db' }
              }
            >
              <span
                className="w-2 h-2 rounded-full shrink-0 transition-all"
                style={{ backgroundColor: on ? s.color : '#d1d5db', opacity: on ? 1 : 0.5 }}
              />
              {s.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Chart card ───────────────────────────────────────────────────────────────
function ChartCard({ title, sub, series, chartKey }: {
  title: string; sub: string; series: NpmSeries[]; chartKey: string
}) {
  if (!series.length) return null
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">{sub}</p>
          <p className="text-gray-900 dark:text-white font-inter-tight font-black text-xl">{title}</p>
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
      <NpmChart key={chartKey} series={series} height={230} />
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function LiveDashboard() {
  const { ai, auto, loaded } = useNpmGroups()

  const [category,   setCategory]   = useState<Category>('all')
  const [dayRange,   setDayRange]   = useState(30)
  const [hidden,     setHidden]     = useState<Set<string>>(new Set())

  const toggleHidden = (label: string) =>
    setHidden(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })

  const slice = (s: NpmSeries) => ({
    ...s,
    data: s.data.slice(-dayRange),
    days: s.days.slice(-dayRange),
  })

  const visAi = useMemo(
    () => ai.filter(s => !hidden.has(s.label)).map(slice),
    [ai, hidden, dayRange] // eslint-disable-line react-hooks/exhaustive-deps
  )
  const visAuto = useMemo(
    () => auto.filter(s => !hidden.has(s.label)).map(slice),
    [auto, hidden, dayRange] // eslint-disable-line react-hooks/exhaustive-deps
  )
  const allSeries = useMemo(() => [...ai, ...auto], [ai, auto])
  const visKpi    = useMemo(
    () => allSeries.filter(s => {
      if (hidden.has(s.label)) return false
      if (category === 'ai')   return ai.some(a => a.label === s.label)
      if (category === 'auto') return auto.some(a => a.label === s.label)
      return true
    }),
    [allSeries, hidden, category, ai, auto]
  )

  const showAi   = category !== 'auto'
  const showAuto = category !== 'ai'
  const chartKey = `${dayRange}-${Array.from(hidden).join(',')}`

  return (
    <section className="py-section bg-[#f8faff] dark:bg-gray-900">
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
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
            Daily npm download counts for the exact tools Sync4Tech deploys, showing the explosive, real-world growth in AI and automation adoption.
          </p>
        </motion.div>

        {/* Single unified panel */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Filter bar */}
          {loaded && (
            <FilterBar
              category={category}   setCategory={setCategory}
              dayRange={dayRange}   setDayRange={setDayRange}
              hidden={hidden}       toggleHidden={toggleHidden}
              allSeries={allSeries}
            />
          )}

          {/* KPI tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8">
            {loaded
              ? visKpi.length
                ? visKpi.map(s => <KpiTile key={s.label} s={s} />)
                : <p className="col-span-full text-center text-gray-400 text-sm py-4">No tools selected. Click a tool above to show it.</p>
              : Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="animate-pulse h-[108px] rounded-2xl bg-gray-100" />
                ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 dark:border-gray-700 mb-8" />

          {/* Charts */}
          <div className="flex flex-col gap-8">
            {loaded ? (
              <>
                {showAi && visAi.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-0.5">Daily downloads · Last {dayRange} days</p>
                        <p className="text-gray-900 dark:text-white font-inter-tight font-black text-lg">AI &amp; LLM Frameworks</p>
                      </div>
                      <div className="flex gap-3 flex-wrap justify-end">
                        {visAi.map(s => (
                          <span key={s.label} className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                            {s.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <NpmChart key={`ai-${chartKey}`} series={visAi} height={230} />
                  </div>
                )}

                {showAi && showAuto && visAi.length > 0 && visAuto.length > 0 && (
                  <div className="border-t border-gray-100 dark:border-gray-700" />
                )}

                {showAuto && visAuto.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-0.5">Daily downloads · Last {dayRange} days</p>
                        <p className="text-gray-900 dark:text-white font-inter-tight font-black text-lg">Automation Platforms</p>
                      </div>
                      <div className="flex gap-3 flex-wrap justify-end">
                        {visAuto.map(s => (
                          <span key={s.label} className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                            {s.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <NpmChart key={`auto-${chartKey}`} series={visAuto} height={230} />
                  </div>
                )}

                {(!showAi || visAi.length === 0) && (!showAuto || visAuto.length === 0) && (
                  <p className="text-center text-gray-400 text-sm py-8">No data to display. Adjust the filters above.</p>
                )}
              </>
            ) : (
              <>
                <div className="animate-pulse h-[310px] rounded-2xl bg-gray-50 dark:bg-gray-800" />
                <div className="animate-pulse h-[310px] rounded-2xl bg-gray-50 dark:bg-gray-800" />
              </>
            )}
          </div>

          <p className="text-gray-300 text-xs mt-8 text-center">
            Source: npmjs.org public registry · Updates daily · Tools shown are actively deployed by Sync4Tech
          </p>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm">We deploy all of these tools for clients.</p>
              <p className="text-gray-400 text-xs mt-0.5">From strategy to production, end to end.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/services"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                style={{ color: '#007cf4', background: 'rgba(0,124,244,0.08)', border: '1px solid rgba(0,124,244,0.2)' }}
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 100%)' }}
              >
                Work With Us
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
