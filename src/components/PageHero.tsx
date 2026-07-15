'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BrandWatermark from '@/components/BrandWatermark'

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

    const count = 60
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
        ctx.fillStyle = 'rgba(0,124,244,0.35)'
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
            ctx.strokeStyle = `rgba(0,124,244,${0.07 * (1 - dist / 120)})`
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

interface PageHeroProps {
  eyebrow: string
  title: string
  highlight: string
  subtitle: string
  breadcrumb?: { label: string; href: string }[]
}

export default function PageHero({ eyebrow, title, highlight, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <BrandWatermark position="bottom-right" size={520} opacity={0.04} rotate={false} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <ParticleCanvas />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, #007cf4 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[350px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(ellipse, #36c5f0 0%, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#007cf4 1px, transparent 1px), linear-gradient(90deg, #007cf4 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 section-container text-center w-full">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="hover:text-[#007cf4] transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-[#007cf4]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#007cf4] transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-6 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-[#007cf4] rounded-full animate-pulse" />
          <span className="text-sm text-[#033a9d] dark:text-[#36c5f0] font-semibold tracking-widest uppercase">{eyebrow}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-inter-tight font-black leading-[1.0] tracking-tight mb-6 mx-auto"
          style={{ fontSize: 'clamp(40px, 6vw, 88px)', maxWidth: '900px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-black dark:text-white">{title} </span>
          <span className="gradient-text-animated">{highlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
