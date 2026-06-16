'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const metrics = [
  { value: '30–60%', label: 'Process Cost Reduction' },
  { value: '3×', label: 'Faster Operations' },
  { value: 'Millions', label: 'Records Automated' },
  { value: '100+', label: 'Transformation Projects' },
]

function DataFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
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

    const w = () => canvas.offsetWidth
    const h = () => canvas.offsetHeight

    const nodes: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = []
    for (let i = 0; i < 28; i++) {
      nodes.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        r: Math.random() * 3 + 1.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.3,
      })
    }

    const particles: { x: number; y: number; tx: number; ty: number; t: number; speed: number }[] = []
    for (let i = 0; i < 12; i++) {
      const si = Math.floor(Math.random() * nodes.length)
      const ti = Math.floor(Math.random() * nodes.length)
      particles.push({
        x: nodes[si].x,
        y: nodes[si].y,
        tx: nodes[ti].x,
        ty: nodes[ti].y,
        t: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
      })
    }

    let frame: number

    const draw = () => {
      ctx.clearRect(0, 0, w(), h())

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w()) n.vx *= -1
        if (n.y < 0 || n.y > h()) n.vy *= -1

        nodes.forEach((m) => {
          const dx = n.x - m.x
          const dy = n.y - m.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.strokeStyle = `rgba(216, 115, 7, ${(1 - dist / 200) * 0.12})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(216, 115, 7, ${n.alpha})`
        ctx.fill()
      })

      particles.forEach((p) => {
        p.t += p.speed
        if (p.t >= 1) {
          p.t = 0
          const si = Math.floor(Math.random() * nodes.length)
          const ti = Math.floor(Math.random() * nodes.length)
          p.x = nodes[si].x
          p.y = nodes[si].y
          p.tx = nodes[ti].x
          p.ty = nodes[ti].y
        }
        const cx = p.x + (p.tx - p.x) * p.t
        const cy = p.y + (p.ty - p.y) * p.t
        ctx.beginPath()
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(216, 115, 7, ${0.9 - p.t * 0.6})`
        ctx.fill()
      })

      frame = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      <DataFlowCanvas />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 section-container pt-40 pb-32">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">AI · Automation · Data · Transformation</span>
          </motion.div>

          <motion.h1
            className="font-inter-tight font-black text-black leading-[0.95] tracking-[-0.04em] mb-8"
            style={{ fontSize: 'clamp(56px, 8vw, 112px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Transform Businesses
            <br />
            Into{' '}
            <span className="gradient-text">Intelligent</span>
            <br />
            Systems.
          </motion.h1>

          <motion.p
            className="text-gray-600 max-w-2xl mb-12 leading-relaxed"
            style={{ fontSize: 'clamp(18px, 1.5vw, 22px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            We combine AI, Automation, Data and Operational Excellence to help organizations
            reduce costs, accelerate growth and unlock scalable execution.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-black text-white px-7 py-4 rounded-full font-semibold text-base hover:bg-accent transition-all duration-300 group"
            >
              Book Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2.5 text-black font-semibold text-base hover:text-accent transition-colors duration-300 group"
            >
              See Transformation Stories
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 border-t border-black/10 bg-white/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/10">
            {metrics.map((m, i) => (
              <div key={i} className="py-8 px-6 first:pl-0">
                <div className="font-inter-tight font-black text-3xl md:text-4xl text-black mb-1">
                  {m.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
