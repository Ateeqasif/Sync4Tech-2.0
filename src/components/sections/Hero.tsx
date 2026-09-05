'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    badge: 'Business Automation',
    h1Line1: 'Automate Work,',
    h1Line2: 'Scale Business',
    subtitle: 'Stop losing time to manual processes. Sync4Tech automates workflows, connects your systems, and eliminates bottlenecks.',
    cta1: { label: 'Book a Free Consultation', href: '/contact' },
    cta2: { label: 'Explore Our Solutions', href: '/solutions' },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90&auto=format&fit=crop',
  },
  {
    badge: 'Data Intelligence',
    h1Line1: 'One Source,',
    h1Line2: 'Total Clarity',
    subtitle: 'Disconnected data costs real decisions. Unify every source and give leadership one trusted view in real time.',
    cta1: { label: 'Discuss Your Data Challenges', href: '/contact' },
    cta2: { label: 'View Our Capabilities', href: '/solutions' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=90&auto=format&fit=crop',
  },
  {
    badge: 'Consulting & Strategy',
    h1Line1: 'Strategy First,',
    h1Line2: 'Results Always',
    subtitle: 'Strategy before execution, results every time. We define priorities and architecture before a line of code is written.',
    cta1: { label: 'Request an Assessment', href: '/contact' },
    cta2: { label: 'View Our Capabilities', href: '/solutions' },
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=90&auto=format&fit=crop',
  },
]

const INTERVAL = 5500
const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir)
    setCurrent(idx)
  }, [])

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(c => {
        setDirection(1)
        return (c + 1) % slides.length
      })
    }, INTERVAL)
  }, [])

  useEffect(() => {
    startTimer()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startTimer])

  const handleDot = (idx: number) => {
    goTo(idx, idx > current ? 1 : -1)
    startTimer()
  }

  const slide = slides[current]

  const imgVariants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%' }),
    center: { x: '0%' },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%' }),
  }

  const contentVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black"
      id="home"
    >
      {/* Background image — horizontal slide */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Light overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.72)' }} />
        <div className="absolute inset-0 hidden dark:block" style={{ background: 'rgba(0,0,0,0.72)' }} />

        {/* Subtle blue ambient */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,124,244,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full text-center py-40">

        {/* Social proof */}
        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="inline-flex items-center gap-3 apple-glass rounded-full px-5 py-2.5">
            <span className="flex -space-x-2">
              {['https://i.pravatar.cc/40?img=11','https://i.pravatar.cc/40?img=32','https://i.pravatar.cc/40?img=47','https://i.pravatar.cc/40?img=68'].map((src, i) => (
                <span key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-black overflow-hidden block" style={{ zIndex: 4 - i }}>
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </span>
              ))}
            </span>
            <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Trusted by <span className="font-bold" style={{ color: 'var(--accent)' }}>1,500+ businesses</span> worldwide
            </span>
            <span className="text-amber-400 text-xs select-none">★★★★★</span>
          </div>
        </motion.div>

        {/* Slide content — fades in/out */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease }}
          >
            <h1
              className="font-inter-tight mx-auto mb-5"
              style={{
                fontSize: 'clamp(52px, 8vw, 92px)',
                maxWidth: '900px',
                color: 'var(--text-primary)',
                fontWeight: 700,
                letterSpacing: '-0.003em',
                lineHeight: 1.05,
              }}
            >
              {slide.h1Line1}
              <br />
              <span className="gradient-text">{slide.h1Line2}</span>
            </h1>

            <p
              className="mx-auto mb-3"
              style={{
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                maxWidth: '560px',
                color: 'var(--text-primary)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.5,
              }}
            >
              {slide.subtitle}
            </p>

            <p
              className="mx-auto mb-10"
              style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}
            >
              {slide.badge}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={slide.cta1.href} className="btn-primary">{slide.cta1.label}</a>
              <a href={slide.cta2.href} className="btn-secondary">{slide.cta2.label}</a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  background: i === current ? '#007cf4' : 'rgba(0,0,0,0.2)',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce-down">
          <path d="M8 3v8M4 8l4 4 4-4" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
