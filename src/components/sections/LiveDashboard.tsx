'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const EASE        = [0.22, 1, 0.36, 1] as const
const TICK_MS     = 1000      // smooth OU tick every second
const PX_PER_SEC  = 55        // canvas scroll speed (px / data-point)
const BUFFER      = 80        // keep 80 history points
const REFRESH_MS  = 60_000    // re-fetch real prices every 60 s
const Y_LABEL_W   = 68        // left margin for price labels
const X_LABEL_H   = 24        // bottom margin for time labels

// ─── Ornstein-Uhlenbeck micro-noise ──────────────────────────────────────────
function ou(prev: number, mean: number, theta: number, sigma: number) {
  return prev + theta * (mean - prev) + sigma * (Math.random() * 2 - 1)
}
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)) }

// ─── Y-axis formatters (module-level = stable references in useEffect deps) ──
const fmtBtc = (v: number) => `$${(v / 1000).toFixed(1)}k`
const fmtEth = (v: number) => v >= 1000 ? `$${(v / 1000).toFixed(2)}k` : `$${v.toFixed(0)}`
const fmtPct = (v: number) => (v >= 0 ? '+' : '') + v.toFixed(3) + '%'

// ─── Market data fetching (multi-source with simulation fallback) ─────────────
const CB = 'https://api.exchange.coinbase.com'

type MarketData = {
  btc: number[]; eth: number[]
  live: { btc: number; eth: number; btcChange: number; ethChange: number }
  simulated?: boolean
}

const _cache: { data: MarketData | null; ts: number } = { data: null, ts: 0 }

// Realistic simulation seeded at approximate current price levels
function simulateHistory(mean: number, sigma: number): number[] {
  const buf: number[] = [mean]
  for (let i = 1; i < 80; i++) {
    buf.push(clamp(ou(buf[i - 1], mean, 0.12, sigma), mean * 0.96, mean * 1.04))
  }
  return buf
}

async function fetchCoinbase(product: 'BTC-USD' | 'ETH-USD') {
  const end   = new Date()
  const start = new Date(end.getTime() - 82 * 60 * 1000)
  const url   = `${CB}/products/${product}/candles?granularity=60&start=${start.toISOString()}&end=${end.toISOString()}`
  const raw   = await fetch(url, { signal: AbortSignal.timeout(7000) }).then(r => r.json())
  // [timestamp, low, high, open, close, volume] — newest first
  const prices = (raw as number[][]).reverse().map(c => c[4]).filter(Boolean)
  if (prices.length < 10) throw new Error('insufficient')

  const statsUrl = `${CB}/products/${product}/stats`
  const stats    = await fetch(statsUrl, { signal: AbortSignal.timeout(5000) }).then(r => r.json())
  const last     = parseFloat(stats.last)
  const open24   = parseFloat(stats.open)
  const change24 = open24 ? ((last - open24) / open24) * 100 : 0
  return { prices: prices.slice(-80), last, change24 }
}

async function fetchMarket(): Promise<MarketData> {
  if (_cache.data && Date.now() - _cache.ts < 58_000) return _cache.data

  try {
    const [btcRes, ethRes] = await Promise.all([
      fetchCoinbase('BTC-USD'),
      fetchCoinbase('ETH-USD'),
    ])
    const data: MarketData = {
      btc: btcRes.prices,
      eth: ethRes.prices,
      live: { btc: btcRes.last, eth: ethRes.last, btcChange: btcRes.change24, ethChange: ethRes.change24 },
    }
    _cache.data = data; _cache.ts = Date.now()
    return data
  } catch {
    // Try CoinGecko as second source
    try {
      const CG = 'https://api.coingecko.com/api/v3'
      const [btcChart, ethChart, prices] = await Promise.all([
        fetch(`${CG}/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=minutely`, { signal: AbortSignal.timeout(7000) }).then(r => r.json()),
        fetch(`${CG}/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=minutely`, { signal: AbortSignal.timeout(7000) }).then(r => r.json()),
        fetch(`${CG}/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true`, { signal: AbortSignal.timeout(5000) }).then(r => r.json()),
      ])
      const btc = (btcChart.prices as [number, number][]).slice(-80).map(p => p[1])
      const eth = (ethChart.prices as [number, number][]).slice(-80).map(p => p[1])
      const data: MarketData = {
        btc, eth,
        live: { btc: prices.bitcoin?.usd ?? btc.at(-1) ?? 0, eth: prices.ethereum?.usd ?? eth.at(-1) ?? 0, btcChange: prices.bitcoin?.usd_24h_change ?? 0, ethChange: prices.ethereum?.usd_24h_change ?? 0 },
      }
      _cache.data = data; _cache.ts = Date.now()
      return data
    } catch {
      // Simulation fallback — realistic BTC/ETH price ranges
      const data: MarketData = {
        btc:  simulateHistory(67500, 120),
        eth:  simulateHistory(3250,  18),
        live: { btc: 67500, eth: 3250, btcChange: 0, ethChange: 0 },
        simulated: true,
      }
      // Only cache simulation for 10s so real data is retried soon
      _cache.data = data; _cache.ts = Date.now() - 50_000
      return data
    }
  }
}

// ─── Real-data stream hook ────────────────────────────────────────────────────
function useMarketStream(key: 'btc' | 'eth') {
  const bufRef    = useRef<number[]>([])
  const meanRef   = useRef(0)
  const curRef    = useRef(0)
  const loadedRef = useRef(false)

  const [display,   setDisplay]   = useState(0)
  const [change24,  setChange24]  = useState(0)
  const [loaded,    setLoaded]    = useState(false)
  const [simulated, setSimulated] = useState(false)

  const refresh = useCallback(async () => {
    try {
      const d = await fetchMarket()
      const prices = d[key]
      if (!prices?.length) throw new Error('empty')

      const last = prices.at(-1)!
      meanRef.current = last
      setChange24(key === 'btc' ? d.live.btcChange : d.live.ethChange)
      setDisplay(key === 'btc' ? d.live.btc : d.live.eth)
      setSimulated(!!d.simulated)

      if (!loadedRef.current) {
        bufRef.current    = [...prices]
        curRef.current    = last
        loadedRef.current = true
        setLoaded(true)
      } else {
        curRef.current = last
        bufRef.current = [...bufRef.current.slice(-(BUFFER - 1)), last]
      }
    } catch { /* fetchMarket never throws — always returns data */ }
  }, [key])

  // Initial fetch + periodic refresh
  useEffect(() => {
    refresh()
    const id = setInterval(refresh, REFRESH_MS)
    return () => clearInterval(id)
  }, [refresh])

  // Smooth OU animation between real updates (σ ≈ 0.04 % → realistic micro-movement)
  useEffect(() => {
    if (!loaded) return
    const id = setInterval(() => {
      const m    = meanRef.current
      if (!m) return
      const next = ou(curRef.current, m, 0.12, m * 0.0004)
      curRef.current = next
      bufRef.current = [...bufRef.current.slice(-(BUFFER - 1)), next]
    }, TICK_MS)
    return () => clearInterval(id)
  }, [loaded])

  return { bufRef, display, change24, loaded, simulated }
}

// ─── Animated price ticker ────────────────────────────────────────────────────
function PriceTicker({ value, color = '#007cf4' }: { value: number; color?: string }) {
  const [d, setD] = useState(value)
  const prev = useRef(value)
  useEffect(() => {
    if (!value) return
    const from = prev.current || value, to = value, t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 600, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setD(from + (to - from) * e)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prev.current = to
  }, [value])
  return (
    <span style={{ color }} className="font-inter-tight font-black tabular-nums">
      ${d >= 1000 ? d.toLocaleString('en-US', { maximumFractionDigits: 0 }) : d.toFixed(2)}
    </span>
  )
}

// ─── 24 h change badge ────────────────────────────────────────────────────────
function ChangeBadge({ pct }: { pct: number }) {
  const up = pct >= 0
  return (
    <span className={`text-[11px] font-bold flex items-center gap-0.5 ${up ? 'text-emerald-500' : 'text-red-400'}`}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"
        style={{ transform: up ? 'none' : 'rotate(180deg)' }}>
        <path d="M4 1l3.5 6H.5z"/>
      </svg>
      {Math.abs(pct).toFixed(2)}%
    </span>
  )
}

// ─── Pulse dot ────────────────────────────────────────────────────────────────
function Pulse({ color = '#22c55e' }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2 w-2"
        style={{ backgroundColor: color }} />
    </span>
  )
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────
function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-gray-100 ${className}`} />
}

// ─── Streaming price line chart ───────────────────────────────────────────────
function StreamLine({
  bufRef, color, height = 200, formatY,
}: {
  bufRef: React.MutableRefObject<number[]>
  color: string; height?: number
  formatY?: (v: number) => string
}) {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current, canvas = canvasRef.current
    if (!wrap || !canvas) return

    const dpr = window.devicePixelRatio || 1
    let animId: number
    const t0 = performance.now()

    const resize = () => {
      canvas.width        = wrap.clientWidth * dpr
      canvas.height       = height * dpr
      canvas.style.width  = wrap.clientWidth + 'px'
      canvas.style.height = height + 'px'
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const draw = (now: number) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) { animId = requestAnimationFrame(draw); return }

      const elapsed = (now - t0) / 1000
      const W = canvas.width / dpr, H = canvas.height / dpr
      const cL = Y_LABEL_W, cT = 8, cW = W - cL, cH = H - X_LABEL_H - cT
      const buf = bufRef.current
      if (buf.length < 2) { animId = requestAnimationFrame(draw); return }

      const scrollOffset = (elapsed % 1) * PX_PER_SEC

      // Visible window: auto-scale Y to what's actually on screen
      const visible = buf.slice(-Math.ceil(cW / PX_PER_SEC) - 4)
      const minV  = Math.min(...visible) * 0.9997
      const maxV  = Math.max(...visible) * 1.0003
      const range = maxV - minV || 1

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, W, H)

      const norm = (v: number) => 1 - clamp((v - minV) / range, 0, 1)
      const yPx  = (v: number) => cT + norm(v) * cH

      // ── Y axis labels + horizontal grid ──────────────────────
      ctx.font = '10px system-ui, sans-serif'
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
      for (let i = 0; i <= 4; i++) {
        const f = i / 4
        const v = minV + (1 - f) * range
        const y = cT + f * cH
        ctx.strokeStyle = 'rgba(0,0,0,0.055)'; ctx.lineWidth = 1; ctx.setLineDash([])
        ctx.beginPath(); ctx.moveTo(cL, y); ctx.lineTo(W, y); ctx.stroke()
        ctx.fillStyle = '#9ca3af'
        ctx.fillText(formatY ? formatY(v) : v.toLocaleString(), cL - 6, y)
      }

      // ── X axis time labels + vertical grid ───────────────────
      ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = '#9ca3af'
      const vGap = PX_PER_SEC * 5, vOff = scrollOffset % vGap
      const totalSecs = Math.ceil(elapsed)
      for (let x = W - vOff; x > cL - vGap; x -= vGap) {
        if (x < cL) continue
        ctx.strokeStyle = 'rgba(0,0,0,0.04)'; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(x, cT); ctx.lineTo(x, cT + cH); ctx.stroke()
        const secsAgo = Math.round((W - x + vOff) / PX_PER_SEC)
        const t = totalSecs - secsAgo
        if (t >= 0) ctx.fillText(`${t}s`, x, cT + cH + 5)
      }

      // ── Build point list ──────────────────────────────────────
      const pts: { x: number; y: number }[] = []
      for (let i = 0; i < buf.length; i++) {
        const fromEnd = buf.length - 1 - i
        const x = W - fromEnd * PX_PER_SEC + scrollOffset
        if (x < cL - PX_PER_SEC * 2 || x > W + PX_PER_SEC) continue
        pts.push({ x, y: yPx(buf[i]) })
      }
      if (pts.length < 2) { ctx.restore(); animId = requestAnimationFrame(draw); return }

      // Clip to chart area
      ctx.save()
      ctx.beginPath(); ctx.rect(cL, cT, cW, cH); ctx.clip()

      // Gradient fill
      const grad = ctx.createLinearGradient(0, cT, 0, cT + cH)
      grad.addColorStop(0,   color + '28')
      grad.addColorStop(0.7, color + '08')
      grad.addColorStop(1,   color + '00')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.moveTo(pts[0].x, cT + cH)
      pts.forEach(p => ctx.lineTo(p.x, p.y))
      ctx.lineTo(pts.at(-1)!.x, cT + cH)
      ctx.closePath(); ctx.fill()

      // Glow
      ctx.strokeStyle = color + '30'; ctx.lineWidth = 7
      ctx.lineJoin = 'round'; ctx.lineCap = 'round'
      ctx.beginPath()
      pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y))
      ctx.stroke()

      // Line
      ctx.strokeStyle = color; ctx.lineWidth = 2.5
      ctx.beginPath()
      pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y))
      ctx.stroke()

      // Live head dot + pulse ring
      if (buf.length >= 2) {
        const frac  = clamp(scrollOffset / PX_PER_SEC, 0, 1)
        const headV = buf[buf.length - 2] + frac * (buf[buf.length - 1] - buf[buf.length - 2])
        const hx    = W - PX_PER_SEC + scrollOffset
        const hy    = yPx(headV)
        const pulse = (elapsed * 2.5) % 1
        const alpha = Math.round((1 - pulse) * 200).toString(16).padStart(2, '0')
        ctx.strokeStyle = color + alpha; ctx.lineWidth = 1.5
        ctx.beginPath(); ctx.arc(hx, hy, 4 + pulse * 10, 0, Math.PI * 2); ctx.stroke()
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(hx, hy, 4, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = color;  ctx.beginPath(); ctx.arc(hx, hy, 3, 0, Math.PI * 2); ctx.fill()
      }

      ctx.restore() // unclip
      ctx.restore()
      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [bufRef, color, height, formatY])

  return (
    <div ref={wrapRef} className="w-full">
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}

// ─── BTC minute-return bar chart (green/red) ──────────────────────────────────
function StreamDeltaBar({
  bufRef, height = 200,
}: {
  bufRef: React.MutableRefObject<number[]>
  height?: number
}) {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current, canvas = canvasRef.current
    if (!wrap || !canvas) return

    const dpr = window.devicePixelRatio || 1
    let animId: number
    const t0 = performance.now()

    const resize = () => {
      canvas.width        = wrap.clientWidth * dpr
      canvas.height       = height * dpr
      canvas.style.width  = wrap.clientWidth + 'px'
      canvas.style.height = height + 'px'
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const draw = (now: number) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) { animId = requestAnimationFrame(draw); return }

      const elapsed = (now - t0) / 1000
      const W = canvas.width / dpr, H = canvas.height / dpr
      const cL = Y_LABEL_W, cT = 8, cW = W - cL, cH = H - X_LABEL_H - cT
      const buf = bufRef.current
      if (buf.length < 2) { animId = requestAnimationFrame(draw); return }

      const scrollOffset = (elapsed % 1) * PX_PER_SEC
      const barW = PX_PER_SEC * 0.6

      // Compute % deltas
      const deltas = buf.map((v, i) =>
        i === 0 ? 0 : (v - buf[i - 1]) / buf[i - 1] * 100
      )
      const absMax = Math.max(0.005, ...deltas.map(d => Math.abs(d))) * 1.25

      ctx.save(); ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, W, H)

      // Y axis labels + grid
      ctx.font = '10px system-ui, sans-serif'
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
      for (let i = 0; i <= 4; i++) {
        const f = i / 4
        const v = absMax - f * 2 * absMax   // +absMax → 0 → −absMax
        const y = cT + f * cH
        const isZero = Math.abs(v) < absMax * 0.01
        ctx.strokeStyle = isZero ? 'rgba(0,0,0,0.14)' : 'rgba(0,0,0,0.05)'
        ctx.lineWidth   = isZero ? 1.5 : 1
        ctx.beginPath(); ctx.moveTo(cL, y); ctx.lineTo(W, y); ctx.stroke()
        ctx.fillStyle = '#9ca3af'
        ctx.fillText(fmtPct(v), cL - 6, y)
      }

      // X axis time labels
      ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = '#9ca3af'
      const vGap = PX_PER_SEC * 5, vOff = scrollOffset % vGap
      const totalSecs = Math.ceil(elapsed)
      for (let x = W - vOff; x > cL - vGap; x -= vGap) {
        if (x < cL) continue
        ctx.strokeStyle = 'rgba(0,0,0,0.04)'; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(x, cT); ctx.lineTo(x, cT + cH); ctx.stroke()
        const secsAgo = Math.round((W - x + vOff) / PX_PER_SEC)
        const t = totalSecs - secsAgo
        if (t >= 0) ctx.fillText(`${t}s`, x, cT + cH + 5)
      }

      // Bars (clipped)
      ctx.save()
      ctx.beginPath(); ctx.rect(cL, cT, cW, cH); ctx.clip()

      const zeroY = cT + cH / 2

      for (let i = 1; i < deltas.length; i++) {
        const fromEnd = deltas.length - 1 - i
        const cx = W - fromEnd * PX_PER_SEC + scrollOffset - barW / 2
        if (cx + barW < cL || cx > W) continue

        const d    = deltas[i]
        const barH = Math.abs(d) / absMax * (cH / 2)
        const pos  = d >= 0
        const col  = pos ? '#22c55e' : '#f87171'
        const by   = pos ? zeroY - barH : zeroY
        const r    = Math.min(3, barH * 0.5)

        if (barH < 0.5) {
          ctx.fillStyle = col + 'aa'
          ctx.fillRect(cx, zeroY - 1, barW, 2)
          continue
        }

        const grad = ctx.createLinearGradient(0, by, 0, by + barH)
        grad.addColorStop(0, col + 'ee'); grad.addColorStop(1, col + '66')
        ctx.fillStyle = grad

        ctx.beginPath()
        if (pos) {
          ctx.moveTo(cx + r, by)
          ctx.lineTo(cx + barW - r, by)
          ctx.quadraticCurveTo(cx + barW, by, cx + barW, by + r)
          ctx.lineTo(cx + barW, by + barH); ctx.lineTo(cx, by + barH)
          ctx.lineTo(cx, by + r)
          ctx.quadraticCurveTo(cx, by, cx + r, by)
        } else {
          ctx.moveTo(cx, by); ctx.lineTo(cx + barW, by)
          ctx.lineTo(cx + barW, by + barH - r)
          ctx.quadraticCurveTo(cx + barW, by + barH, cx + barW - r, by + barH)
          ctx.lineTo(cx + r, by + barH)
          ctx.quadraticCurveTo(cx, by + barH, cx, by + barH - r)
          ctx.lineTo(cx, by)
        }
        ctx.closePath(); ctx.fill()
      }

      ctx.restore(); ctx.restore()
      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [bufRef, height])

  return (
    <div ref={wrapRef} className="w-full">
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────
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

// ─── Main dashboard ───────────────────────────────────────────────────────────
export default function LiveDashboard() {
  const btc = useMarketStream('btc')
  const eth = useMarketStream('eth')
  const isLoading  = !btc.loaded || !eth.loaded
  const isSimulated = btc.simulated
  const ratio = btc.display && eth.display ? btc.display / eth.display : 0

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
              {isLoading ? 'Loading Market Data…' : isSimulated ? 'Market Intelligence · Simulated' : 'Live Market Data · Coinbase'}
            </span>
          </div>
          <h2
            className="font-inter-tight font-black text-[#050f2e] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Real-Time Market
            <br />
            <span className="gradient-text">Intelligence Feed</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Live Bitcoin &amp; Ethereum prices streamed from CoinGecko — the kind of real-time data pipeline Sync4Tech builds for financial services clients.
          </p>
        </motion.div>

        {/* KPI tiles */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {([
            { label: 'Bitcoin (BTC)',    color: '#f59e0b', stream: btc },
            { label: 'Ethereum (ETH)',   color: '#6366f1', stream: eth },
          ] as const).map((k, i) => (
            <div key={i} className="rounded-2xl p-5 bg-[#f8faff] border border-[#007cf4]/10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Pulse color={k.color} />
                  <span className="text-gray-400 text-xs font-medium">{k.label}</span>
                </div>
                {!isLoading && <ChangeBadge pct={k.stream.change24} />}
              </div>
              <div className="text-3xl">
                {isLoading
                  ? <div className="animate-pulse h-8 w-32 bg-gray-100 rounded-lg" />
                  : <PriceTicker value={k.stream.display} color={k.color} />}
              </div>
              {!isLoading && (
                <p className="text-[10px] text-gray-300 mt-1.5">24h change</p>
              )}
            </div>
          ))}

          {/* BTC / ETH ratio */}
          <div className="rounded-2xl p-5 bg-[#f8faff] border border-[#007cf4]/10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Pulse color="#007cf4" />
                <span className="text-gray-400 text-xs font-medium">BTC / ETH Ratio</span>
              </div>
            </div>
            <div className="text-3xl">
              {isLoading
                ? <div className="animate-pulse h-8 w-24 bg-gray-100 rounded-lg" />
                : <span className="font-inter-tight font-black tabular-nums text-[#007cf4]">
                    {ratio.toFixed(1)}x
                  </span>}
            </div>
            {!isLoading && <p className="text-[10px] text-gray-300 mt-1.5">live ratio</p>}
          </div>
        </motion.div>

        {/* Charts */}
        {isLoading ? (
          <div className="flex flex-col gap-5">
            <div className="animate-pulse h-[278px] w-full rounded-2xl bg-gray-100" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="animate-pulse h-[268px] rounded-2xl bg-gray-100" />
              <div className="animate-pulse h-[268px] rounded-2xl bg-gray-100" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* BTC — full width */}
            <div className="md:col-span-2">
              <Card delay={0}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">USD / BTC</p>
                    <p className="text-gray-900 font-inter-tight font-black text-xl">Bitcoin Price</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Pulse color="#f59e0b" />
                    <span className="text-[11px] text-gray-300">Live · CoinGecko</span>
                  </div>
                </div>
                <StreamLine bufRef={btc.bufRef} color="#f59e0b" height={210} formatY={fmtBtc} />
              </Card>
            </div>

            {/* ETH — 50 % */}
            <Card delay={0.1}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">USD / ETH</p>
                  <p className="text-gray-900 font-inter-tight font-black text-xl">Ethereum Price</p>
                </div>
                <Pulse color="#6366f1" />
              </div>
              <StreamLine bufRef={eth.bufRef} color="#6366f1" height={200} formatY={fmtEth} />
            </Card>

            {/* BTC returns bar — 50 % */}
            <Card delay={0.2}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">% change per update</p>
                  <p className="text-gray-900 font-inter-tight font-black text-xl">BTC Price Returns</p>
                </div>
                <Pulse color="#22c55e" />
              </div>
              <StreamDeltaBar bufRef={btc.bufRef} height={200} />
            </Card>

          </div>
        )}

        <p className="text-center text-gray-300 text-xs mt-8">
          {isSimulated
            ? 'Simulated BTC & ETH price data · Live feed unavailable in this environment · Representative of real-time pipelines Sync4Tech builds'
            : 'Real BTC & ETH prices via Coinbase Exchange · Smoothed with micro-noise for fluid 60fps animation · Refreshes every 60 s'}
        </p>
      </div>
    </section>
  )
}
