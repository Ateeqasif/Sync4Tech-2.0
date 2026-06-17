'use client'

import { useEffect, useRef, useCallback } from 'react'

type Ripple = {
  id: number
  x: number
  y: number
  startTime: number
}

type Particle = {
  id: number
  x: number
  y: number
  angle: number
  startTime: number
}

const RIPPLE_DURATION = 900   // ms per ring
const PARTICLE_DURATION = 600 // ms per dot
const RING_COUNT = 3
const PARTICLE_COUNT = 8
const PARTICLE_DISTANCE = 60

export default function ClickEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripplesRef = useRef<Ripple[]>([])
  const particlesRef = useRef<Particle[]>([])
  const counterRef = useRef(0)
  const rafRef = useRef<number>(0)
  const lastFrameRef = useRef(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const now = performance.now()
    // Throttle to ~60fps
    if (now - lastFrameRef.current < 14) {
      rafRef.current = requestAnimationFrame(draw)
      return
    }
    lastFrameRef.current = now

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw ripple rings
    ripplesRef.current = ripplesRef.current.filter(r => {
      const elapsed = now - r.startTime
      if (elapsed > RIPPLE_DURATION * RING_COUNT) return false

      for (let ring = 0; ring < RING_COUNT; ring++) {
        const ringDelay = ring * 200
        const ringElapsed = elapsed - ringDelay
        if (ringElapsed < 0) continue
        const t = Math.min(ringElapsed / RIPPLE_DURATION, 1)
        const eased = 1 - Math.pow(1 - t, 2)
        const radius = eased * 80
        const opacity = (1 - t) * (ring === 0 ? 0.7 : ring === 1 ? 0.45 : 0.25)

        ctx.beginPath()
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = ring % 2 === 0
          ? `rgba(0,124,244,${opacity})`
          : `rgba(54,197,240,${opacity})`
        ctx.lineWidth = ring === 0 ? 2 : 1.2
        ctx.stroke()
      }
      return true
    })

    // Draw scatter particles (grid dots)
    particlesRef.current = particlesRef.current.filter(p => {
      const elapsed = now - p.startTime
      if (elapsed > PARTICLE_DURATION) return false
      const t = elapsed / PARTICLE_DURATION
      const easeOut = 1 - Math.pow(t, 2)
      const dist = t * PARTICLE_DISTANCE
      const px = p.x + Math.cos(p.angle) * dist
      const py = p.y + Math.sin(p.angle) * dist
      const opacity = easeOut * 0.8
      const r = (1 - t) * 3 + 1

      ctx.beginPath()
      ctx.arc(px, py, r, 0, Math.PI * 2)
      // Alternate between brand blues
      ctx.fillStyle = p.id % 2 === 0
        ? `rgba(0,124,244,${opacity})`
        : `rgba(54,197,240,${opacity})`
      ctx.fill()
      return true
    })

    // Draw a small crosshair flash at click origin for the most recent ripple
    ripplesRef.current.slice(-1).forEach(r => {
      const elapsed = now - r.startTime
      const t = Math.min(elapsed / 200, 1)
      const opacity = (1 - t) * 0.5
      if (opacity <= 0) return
      const size = 6
      ctx.strokeStyle = `rgba(54,197,240,${opacity})`
      ctx.lineWidth = 1
      // Horizontal
      ctx.beginPath()
      ctx.moveTo(r.x - size, r.y)
      ctx.lineTo(r.x + size, r.y)
      ctx.stroke()
      // Vertical
      ctx.beginPath()
      ctx.moveTo(r.x, r.y - size)
      ctx.lineTo(r.x, r.y + size)
      ctx.stroke()
    })

    rafRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onClick = (e: MouseEvent) => {
      // Skip clicks on interactive elements
      const target = e.target as HTMLElement
      if (
        target.closest('a, button, input, textarea, select, [role="button"], label')
      ) return

      const id = counterRef.current++
      const x = e.clientX
      const y = e.clientY
      const now = performance.now()

      ripplesRef.current.push({ id, x, y, startTime: now })

      // Scatter 8 dots in equally spaced angles with slight jitter
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const baseAngle = (i / PARTICLE_COUNT) * Math.PI * 2
        const jitter = (Math.random() - 0.5) * 0.4
        particlesRef.current.push({
          id: counterRef.current++,
          x,
          y,
          angle: baseAngle + jitter,
          startTime: now,
        })
      }
    }

    window.addEventListener('click', onClick)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', onClick)
      cancelAnimationFrame(rafRef.current)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9995]"
      aria-hidden="true"
    />
  )
}
