'use client'

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

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

    const count = 80
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

const metricValues: { value: number; suffix: string; duration?: number }[] = [
  { value: 3, suffix: 'x' },
  { value: 68, suffix: '%' },
  { value: 280, suffix: '+', duration: 2400 },
  { value: 12, suffix: '+' },
]

const slides = [
  {
    badge: 'Business Automation',
    accentColor: '#007cf4',
    h1Line1: 'Automate Work,',
    h1Line2: 'Scale Business',
    h1Line3: '',
    subtitle: 'Stop losing time to manual processes. Sync4Tech automates CRM workflows, connects business systems, and eliminates bottlenecks so your team can focus on growing the business.',
    cta1: { label: 'Book a Strategy Call', href: '/contact' },
    cta2: { label: 'Explore Our Solutions', href: '/solutions' },
  },
  {
    badge: 'Data Intelligence',
    accentColor: '#36c5f0',
    h1Line1: 'One Source,',
    h1Line2: 'Total Clarity',
    h1Line3: '',
    subtitle: 'Disconnected data costs real decisions. Unify every source, build reliable reporting pipelines, and give leadership one trusted view of your business performance in real time.',
    cta1: { label: 'Discuss Your Data Challenges', href: '/contact' },
    cta2: { label: 'View Our Capabilities', href: '/solutions' },
  },
  {
    badge: 'Consulting and Strategy',
    accentColor: '#033a9d',
    h1Line1: 'Strategy First,',
    h1Line2: 'Results Always',
    h1Line3: '',
    subtitle: 'Turn transformation goals into a clear roadmap. We define priorities, architecture, KPIs, and governance before a single line of code is written or budget spent.',
    cta1: { label: 'Request an Assessment', href: '/contact' },
    cta2: { label: 'View Our Capabilities', href: '/solutions' },
  },
]

function useTypewriter(text: string, speed = 38) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    if (!text) return
    let i = 0
    const tick = () => {
      i += 1
      setDisplayed(text.slice(0, i))
      if (i < text.length) {
        timer = setTimeout(tick, speed)
      } else {
        setDone(true)
      }
    }
    let timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [text, speed])

  return { displayed, done }
}

export default function Hero() {
  const { t } = useLanguage()
  const metricLabels = [t.hero.metric1Label, t.hero.metric2Label, t.hero.metric3Label, t.hero.metric4Label]
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length
    setDirection(1)
    setCurrent(idx)
  }, [current])

  // Auto-advance every 5s
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [next])

  const resetTimer = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    goTo(idx)
    intervalRef.current = setInterval(next, 5000)
  }

  const slide = slides[current]

  const line1 = useTypewriter(slide.h1Line1, 42)
  const line2 = useTypewriter(line1.done ? slide.h1Line2 : '', 42)
  const line3 = useTypewriter(line2.done ? (slide.h1Line3 || '') : '', 42)

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-900" id="home">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <ParticleCanvas />
        </div>
        {/* Strong top-center glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full opacity-[0.18]"
          style={{ background: 'radial-gradient(ellipse, #007cf4 0%, transparent 65%)' }} />
        {/* Bottom-right accent */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] rounded-full opacity-[0.10]"
          style={{ background: 'radial-gradient(ellipse, #36c5f0 0%, transparent 65%)' }} />
        {/* Left accent */}
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #033a9d 0%, transparent 70%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(#007cf4 1px, transparent 1px), linear-gradient(90deg, #007cf4 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 section-container text-center pt-36 pb-28">

        {/* Social proof bar */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 bg-[#007cf4]/8 dark:bg-[#007cf4]/15 border border-[#007cf4]/20 rounded-full px-5 py-2">
            <span className="flex -space-x-1.5">
              {['#033a9d','#007cf4','#36c5f0','#0550c8'].map((c,i) => (
                <span key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-[9px] font-bold" style={{ background: c, zIndex: 4-i }}>
                  {['A','B','C','D'][i]}
                </span>
              ))}
            </span>
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Trusted by <span className="text-[#007cf4] font-bold">150+ businesses</span> worldwide</span>
            <span className="flex items-center gap-0.5 text-amber-400 text-xs">
              {'★★★★★'.split('').map((s,i) => <span key={i}>{s}</span>)}
            </span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#007cf4]/25 bg-[#007cf4]/5 dark:bg-[#007cf4]/10">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: slide.accentColor }} />
                <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: slide.accentColor }}>{slide.badge}</span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-inter-tight font-black leading-[0.92] tracking-tight mb-6 mx-auto"
              style={{ fontSize: 'clamp(44px, 7.5vw, 96px)', maxWidth: '900px' }}
            >
              <span className="text-black dark:text-white">
                {line1.displayed}
                {!line1.done && (
                  <motion.span
                    className="inline-block w-[3px] ml-[2px] align-middle rounded-sm"
                    style={{ height: '0.85em', background: '#007cf4', verticalAlign: 'middle' }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </span>
              <br />
              <span className="gradient-text-animated" style={{ paddingLeft: '0.05em', paddingRight: '0.08em' }}>
                {line2.displayed}
                {line1.done && !line2.done && (
                  <motion.span
                    className="inline-block w-[3px] ml-[2px] align-middle rounded-sm"
                    style={{ height: '0.85em', background: '#36c5f0', verticalAlign: 'middle' }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </span>
              {slide.h1Line3 && (
                <>
                  <br />
                  <span className="gradient-text-animated" style={{ paddingLeft: '0.05em', paddingRight: '0.08em' }}>
                    {line3.displayed}
                    {line2.done && !line3.done && (
                      <motion.span
                        className="inline-block w-[3px] ml-[2px] align-middle rounded-sm"
                        style={{ height: '0.85em', background: '#36c5f0', verticalAlign: 'middle' }}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                      />
                    )}
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 dark:text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href={slide.cta1.href}
                className="inline-flex items-center gap-2.5 text-white px-9 py-4 rounded-full font-bold text-base btn-glow transition-all duration-300 group shadow-lg shadow-[#007cf4]/25"
                style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
              >
                {slide.cta1.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={slide.cta2.href}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:text-[#007cf4] dark:hover:text-[#36c5f0] transition-colors duration-200 group"
              >
                {slide.cta2.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots */}
        <div className="flex items-center justify-center gap-3 mb-16 mt-4">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => resetTimer(i)}
              aria-label={`Go to slide ${i + 1}: ${s.badge}`}
              className="group flex items-center gap-2 transition-all duration-300"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '32px' : '8px',
                  height: '8px',
                  background: i === current ? slide.accentColor : 'rgba(0,124,244,0.2)',
                }}
              />
              <span className={`text-xs font-semibold tracking-wide transition-all duration-300 ${i === current ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}
                style={{ color: slide.accentColor }}>
                {s.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-0 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#007cf4]/12 dark:border-[#007cf4]/20 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-xl shadow-[#007cf4]/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {metricValues.map((m, i) => (
            <div
              key={i}
              className={`flex-1 min-w-[140px] text-center px-6 py-5 ${i < metricValues.length - 1 ? 'border-r border-[#007cf4]/10 dark:border-[#007cf4]/15' : ''}`}
            >
              <div className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl mb-1">
                <CountUp end={m.value} suffix={m.suffix} duration={m.duration} />
              </div>
              <div className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider">{metricLabels[i]}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="text-gray-300 dark:text-gray-600 text-[10px] tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce-down">
            <path d="M8 3v8M4 8l4 4 4-4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
