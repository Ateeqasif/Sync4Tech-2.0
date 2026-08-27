'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

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
  { value: 2000, suffix: '+', duration: 2800 },
  { value: 14, suffix: '+' },
]

const slides = [
  {
    badge: 'Business Automation',
    accentColor: '#007cf4',
    h1Line1: 'Automate Work,',
    h1Line2: 'Scale Business',
    subtitle: 'Stop losing time to manual processes. Sync4Tech automates CRM workflows, connects business systems, and eliminates bottlenecks so your team can focus on growing the business.',
    cta1: { label: 'Book a Strategy Call', href: '/contact' },
    cta2: { label: 'Explore Our Solutions', href: '/solutions' },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90&auto=format&fit=crop',
  },
  {
    badge: 'Data Intelligence',
    accentColor: '#007cf4',
    h1Line1: 'One Source,',
    h1Line2: 'Total Clarity',
    subtitle: 'Disconnected data costs real decisions. Unify every source, build reliable reporting pipelines, and give leadership one trusted view of your business performance in real time.',
    cta1: { label: 'Discuss Your Data Challenges', href: '/contact' },
    cta2: { label: 'View Our Capabilities', href: '/solutions' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=90&auto=format&fit=crop',
  },
  {
    badge: 'Consulting and Strategy',
    accentColor: '#007cf4',
    h1Line1: 'Strategy First,',
    h1Line2: 'Results Always',
    subtitle: 'Turn transformation goals into a clear roadmap. We define priorities, architecture, KPIs, and governance before a single line of code is written or budget spent.',
    cta1: { label: 'Request an Assessment', href: '/contact' },
    cta2: { label: 'View Our Capabilities', href: '/solutions' },
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=90&auto=format&fit=crop',
  },
]

function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    if (!text) return
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      i += 1
      setDisplayed(text.slice(0, i))
      if (i < text.length) {
        timer = setTimeout(tick, speed)
      } else {
        setDone(true)
      }
    }
    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [text, speed])

  return { displayed, done }
}

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const { t } = useLanguage()
  const metricLabels = [t.hero.metric1Label, t.hero.metric2Label, t.hero.metric3Label, t.hero.metric4Label]
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent(c => {
      setDirection(1)
      return (c + 1) % slides.length
    })
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(next, 5500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [next])

  const resetTimer = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
    intervalRef.current = setInterval(next, 5500)
  }

  const slide = slides[current]
  const line1 = useTypewriter(slide.h1Line1, 44)
  const line2 = useTypewriter(line1.done ? slide.h1Line2 : '', 44)

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 24 : -24 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -24 : 24 }),
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black"
      id="home"
    >
      {/* Background — crossfades between slide images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          {slides.map((s, i) =>
            i === current ? (
              <motion.div
                key={i}
                custom={direction}
                className="absolute inset-0"
                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0.6 }}
                animate={{ x: '0%', opacity: 1 }}
                exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0.6 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={i === 0}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Overlay — keeps text readable */}
        <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.70)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'rgba(0,0,0,0.70)' }} />

        {/* Blue ambient — top center */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,124,244,0.14) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        {/* Teal ambient — bottom right */}
        <div
          className="absolute bottom-0 right-[-10%] w-[500px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(54,197,240,0.09) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        {/* Very subtle dot grid — Apple product page style */}
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 section-container w-full text-center pt-40 pb-32">

        {/* Social proof pill — Apple vibrancy glass */}
        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-3 apple-glass rounded-full px-5 py-2.5">
            <span className="flex -space-x-2">
              {[
                'https://i.pravatar.cc/40?img=11',
                'https://i.pravatar.cc/40?img=32',
                'https://i.pravatar.cc/40?img=47',
                'https://i.pravatar.cc/40?img=68',
              ].map((src, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-black overflow-hidden block"
                  style={{ zIndex: 4 - i }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </span>
              ))}
            </span>
            <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Trusted by{' '}
              <span className="font-bold" style={{ color: 'var(--accent)' }}>1,500+ businesses</span>
              {' '}worldwide
            </span>
            <span className="text-amber-400 text-xs tracking-tight select-none">★★★★★</span>
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
            transition={{ duration: 0.5, ease }}
          >
            {/* Headline — Apple SF Pro Display style */}
            <h1
              className="font-inter-tight mx-auto mb-5"
              style={{
                fontSize: 'clamp(56px, 9vw, 96px)',
                maxWidth: '900px',
                color: 'var(--text-primary)',
                fontWeight: 700,
                letterSpacing: '-0.003em',
                lineHeight: 1.05,
              }}
            >
              <span>
                {line1.displayed}
                {!line1.done && (
                  <motion.span
                    className="inline-block w-[3px] ml-[3px] rounded-full align-middle"
                    style={{ height: '0.8em', background: '#0071e3', verticalAlign: 'middle' }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </span>
              <br />
              <span className="gradient-text">
                {line2.displayed}
                {line1.done && !line2.done && (
                  <motion.span
                    className="inline-block w-[3px] ml-[3px] rounded-full align-middle"
                    style={{ height: '0.8em', background: '#0071e3', verticalAlign: 'middle' }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </span>
            </h1>

            {/* Subtitle — Apple large body, near-black, regular weight */}
            <p
              className="mx-auto mb-3"
              style={{
                fontSize: 'clamp(21px, 2.8vw, 28px)',
                maxWidth: '600px',
                color: 'var(--text-primary)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.45,
              }}
            >
              {slide.subtitle.split('.')[0]}.
            </p>

            {/* Category caption — small gray, Apple style */}
            <p
              className="mx-auto mb-10"
              style={{
                fontSize: '17px',
                maxWidth: '560px',
                color: 'var(--text-secondary)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.53,
              }}
            >
              {slide.badge}
            </p>

            {/* CTAs — Apple exact pill buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a href={slide.cta1.href} className="btn-primary">
                {slide.cta1.label}
              </a>
              <a href={slide.cta2.href} className="btn-secondary">
                {slide.cta2.label}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicator dots */}
        <div className="flex items-center justify-center gap-2 mb-20 mt-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => resetTimer(i)}
              aria-label={`Slide ${i + 1}: ${s.badge}`}
              className="transition-all duration-300"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '6px',
                  height: '6px',
                  background: i === current ? '#007cf4' : 'var(--border-color)',
                  opacity: i === current ? 1 : 0.5,
                }}
              />
            </button>
          ))}
        </div>

        {/* Metrics bar — Apple frosted glass shelf */}
        <motion.div
          className="apple-glass rounded-2xl overflow-hidden max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/8 dark:divide-white/8">
            {metricValues.map((m, i) => (
              <div
                key={i}
                className="text-center px-6 py-5"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div
                  className="font-inter-tight font-black mb-1"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
                >
                  <CountUp end={m.value} suffix={m.suffix} duration={m.duration} />
                </div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {metricLabels[i]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            Scroll
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce-down">
            <path d="M8 3v8M4 8l4 4 4-4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
