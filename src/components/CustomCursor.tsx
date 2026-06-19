'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const hovered = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onEnter = () => {
      hovered.current = true
      cursorRef.current?.classList.add('cursor-hovered')
    }
    const onLeave = () => {
      hovered.current = false
      cursorRef.current?.classList.remove('cursor-hovered')
    }

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMove)
    attachListeners()

    // Re-attach on DOM changes (dynamic elements)
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
      style={{ willChange: 'transform' }}
    >
      {/* Arrow cursor SVG — tip at (0,0) */}
      <svg
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
        className="cursor-arrow drop-shadow-md"
        style={{ display: 'block', marginLeft: '-1px', marginTop: '-1px' }}
      >
        <path
          d="M2 2L2 22L7.5 16.5L11.5 25L14.5 23.5L10.5 14.5L18 14.5L2 2Z"
          fill="white"
          stroke="#007cf4"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Hover dot that appears on interactive elements */}
      <div
        className="cursor-hover-dot absolute -top-1 -left-1 w-8 h-8 rounded-full border border-[#007cf4]/60 opacity-0 scale-75 transition-all duration-200"
        style={{ background: 'rgba(0,124,244,0.08)' }}
      />

      <style>{`
        .cursor-hovered .cursor-arrow path {
          fill: #007cf4;
          stroke: white;
        }
        .cursor-hovered .cursor-hover-dot {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  )
}
