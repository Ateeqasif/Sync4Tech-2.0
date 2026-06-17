'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const count = 50
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,124,244,0.4)'
        ctx.fill()
      })

      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,124,244,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          el.textContent = Math.round(ease * end) + suffix
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix, duration])

  return <span ref={ref}>0{suffix}</span>
}

const metrics: { value: number; suffix: string; label: string; duration?: number }[] = [
  { value: 3, suffix: 'x', label: 'Faster Execution' },
  { value: 68, suffix: '%', label: 'Cost Reduction' },
  { value: 280, suffix: '+', label: 'Clients Served', duration: 2400 },
  { value: 12, suffix: '+', label: 'Industries Served' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#050f2e]" id="home">
      {/* Particle bg */}
      <div className="absolute inset-0 opacity-70">
        <ParticleCanvas />
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #007cf4 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(ellipse, #36c5f0 0%, transparent 70%)' }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#007cf4 1px, transparent 1px), linear-gradient(90deg, #007cf4 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 section-container text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-4 bg-[#007cf4]/8 border border-[#007cf4]/20 rounded-full px-8 py-2.5 mb-10"
        >
          <span className="w-2.5 h-2.5 bg-[#007cf4] rounded-full animate-pulse shrink-0" />
          <span className="text-sm text-[#033a9d] dark:text-[#36c5f0] font-medium tracking-widest uppercase">AI &nbsp;·&nbsp; Automation &nbsp;·&nbsp; Data &nbsp;·&nbsp; Transformation</span>
          <span className="w-2.5 h-2.5 bg-[#36c5f0] rounded-full animate-pulse shrink-0" style={{ animationDelay: '0.5s' }} />
        </motion.div>

        <motion.h1
          className="font-inter-tight font-black leading-[0.95] tracking-tight mb-8 mx-auto"
          style={{ fontSize: 'clamp(48px, 8vw, 120px)', maxWidth: '1000px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-black dark:text-white">Transform How</span>
          <br />
          <span className="gradient-text-animated">Your Business</span>
          <br />
          <span className="text-black dark:text-white">Operates</span>
        </motion.h1>

        <motion.p
          className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          We engineer the operating systems of tomorrow's enterprises — through AI, automation, and data intelligence that deliver measurable results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#007cf4] text-white px-8 py-4 rounded-full font-semibold text-base btn-glow hover:bg-[#36c5f0] transition-all duration-300 group"
          >
            Book Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2.5 bg-black/5 dark:bg-white/10 text-black dark:text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-black/10 dark:hover:bg-white/15 transition-all duration-300 border border-black/10 dark:border-white/20 group"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center px-4 py-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-[#007cf4]/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
            >
              <div className="font-inter-tight font-black text-black dark:text-white text-4xl mb-1">
                <CountUp end={m.value} suffix={m.suffix} duration={m.duration} />
              </div>
              <div className="text-gray-400 dark:text-gray-500 text-xs font-medium">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-gray-400 text-[10px] tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce-down">
            <path d="M8 3v8M4 8l4 4 4-4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
