'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const metrics = [
  { value: '60%', label: 'Cost Reduction', sub: 'average across clients' },
  { value: '3×', label: 'Faster Operations', sub: 'post-transformation' },
  { value: '100+', label: 'Projects Delivered', sub: 'globally' },
  { value: '24h', label: 'Response Time', sub: 'strategy consultation' },
]

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)
    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight
    const pts: { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }[] = []
    const colors = ['54,197,240', '0,124,244', '3,58,157']
    for (let i = 0; i < 40; i++) {
      pts.push({ x: Math.random() * W(), y: Math.random() * H(), vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 2.5 + 1, alpha: Math.random() * 0.4 + 0.15, color: colors[Math.floor(Math.random() * colors.length)] })
    }
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, W(), H())
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W()) p.vx *= -1
        if (p.y < 0 || p.y > H()) p.vy *= -1
        pts.forEach(q => {
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 160) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0,124,244,${(1 - d / 160) * 0.07})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Gradient mesh background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% -5%, rgba(54,197,240,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 40%, rgba(0,124,244,0.08) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(3,58,157,0.05) 0%, transparent 50%)' }} />
      <ParticleCanvas />

      {/* Subtle grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,124,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,124,244,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 section-container flex-1 flex flex-col justify-center pt-32 pb-12">
        <motion.div
          className="max-w-[900px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-sm font-semibold border"
            style={{ background: 'rgba(0,124,244,0.06)', borderColor: 'rgba(0,124,244,0.15)', color: '#007cf4' }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" style={{ background: '#36c5f0' }} />
            Trusted by Enterprise Leaders Across 3 Continents
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-inter-tight font-black text-gray-900 tracking-tight leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(52px, 8.5vw, 116px)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Transform Your
            <br />
            Business Into an
            <br />
            <span className="gradient-text">Intelligent</span>
            <br />
            <span className="gradient-text">System.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-gray-500 max-w-xl mb-12 leading-relaxed"
            style={{ fontSize: 'clamp(17px, 1.4vw, 20px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We combine AI, Automation, Data and Operational Excellence to help organizations reduce costs, accelerate growth and unlock scalable execution.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="btn-glow group inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 60%, #36c5f0 100%)' }}
            >
              Book Strategy Call
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3.75 9h10.5M10 5.25L13.75 9 10 12.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2.5 font-semibold text-gray-700 hover:text-brand-blue transition-colors text-base"
            >
              <span className="w-10 h-10 rounded-xl border border-gray-200 group-hover:border-brand-blue/30 flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <polygon points="5,3 13,8 5,13" fill="currentColor" className="text-gray-500 group-hover:text-brand-blue transition-colors"/>
                </svg>
              </span>
              See Transformation Stories
            </a>
          </motion.div>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-5 border"
              style={{ background: 'rgba(255,255,255,0.8)', borderColor: 'rgba(0,124,244,0.1)', backdropFilter: 'blur(12px)' }}
              whileHover={{ y: -3, borderColor: 'rgba(0,124,244,0.25)', transition: { duration: 0.2 } }}
            >
              <div className="font-inter-tight font-black text-3xl mb-0.5" style={{ background: 'linear-gradient(135deg,#033a9d,#007cf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.value}</div>
              <div className="font-semibold text-gray-800 text-sm">{m.label}</div>
              <div className="text-gray-400 text-xs mt-0.5">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.8))' }} />
    </section>
  )
}
