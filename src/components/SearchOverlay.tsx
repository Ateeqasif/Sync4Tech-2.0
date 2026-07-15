'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import INDEX from '@/lib/searchIndex'
import type { SearchEntry } from '@/lib/searchIndex'

// ─── Fuse.js elastic search config ───────────────────────────────────────────
const fuse = new Fuse(INDEX, {
  keys: [
    { name: 'title',      weight: 0.4 },
    { name: 'content',    weight: 0.35 },
    { name: 'section',    weight: 0.15 },
    { name: 'breadcrumb', weight: 0.1 },
  ],
  threshold: 0.35,       // 0 = exact, 1 = anything — 0.35 is comfortably elastic
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  ignoreLocation: true,  // search entire string, not just start
  findAllMatches: true,
})

// ─── Helpers ──────────────────────────────────────────────────────────────────

const CAT_COLOR: Record<string, string> = {
  'Data Intelligence': '#36c5f0',
  'Automation':        '#007cf4',
  'Consulting':        '#a5c8ff',
  'Industries':        '#7eb8f7',
  'Page':              'rgba(255,255,255,0.45)',
  'About':             'rgba(255,255,255,0.45)',
  'Case Studies':      '#36c5f0',
  'Insights':          '#7eb8f7',
  'FAQ':               '#a5c8ff',
  'Pricing':           '#36c5f0',
  'Platform':          '#007cf4',
}

function highlight(text: string, query: string): string {
  if (!query.trim()) return text
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>')
}

/** Grab a ~120-char snippet centred around the first match */
function snippet(content: string, query: string): string {
  const lower = content.toLowerCase()
  const idx = lower.indexOf(query.toLowerCase())
  const start = Math.max(0, idx - 40)
  const raw = content.slice(start, start + 130).trim()
  return (start > 0 ? '…' : '') + raw + (raw.length === 130 ? '…' : '')
}

const QUICK_LINKS = [
  { label: 'Services',          href: '/services' },
  { label: 'Case Studies',      href: '/case-studies' },
  { label: 'Industries',        href: '/industries' },
  { label: 'Pricing',           href: '/pricing' },
  { label: 'About',             href: '/about' },
  { label: 'Contact',           href: '/contact' },
  { label: 'AI Automation',     href: '/services/automation/ai-automation' },
  { label: 'Data Engineering',  href: '/services/data-intelligence/data-engineering' },
]

const PLACEHOLDERS = [
  'Search pages, services, industries…',
  'Try "CRM automation"',
  'Try "data engineering"',
  'Try "healthcare"',
  'Try "pricing"',
  'Try "AI readiness"',
  'Try "compliance reporting"',
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery]               = useState('')
  const [active, setActive]             = useState(0)
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef  = useRef<HTMLUListElement>(null)
  const router   = useRouter()

  // Elastic search — recalculate on every keystroke
  const results: SearchEntry[] = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query).slice(0, 10).map(r => r.item)
  }, [query])

  // Cycle placeholder
  useEffect(() => {
    if (!open) return
    const id = setInterval(() => setPlaceholderIdx(i => (i + 1) % PLACEHOLDERS.length), 3200)
    return () => clearInterval(id)
  }, [open])

  // Focus on open
  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // Reset active when results change
  useEffect(() => setActive(0), [query])

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActive(a => Math.min(a + 1, results.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActive(a => Math.max(a - 1, 0))
      }
      if (e.key === 'Enter' && results[active]) {
        router.push(results[active].href)
        onClose()
      }
    },
    [open, results, active, onClose, router]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Scroll active result into view
  useEffect(() => {
    const el = listRef.current?.children[active] as HTMLElement | undefined
    el?.scrollIntoView({ block: 'nearest' })
  }, [active])

  // Portal ensures fixed positioning is relative to the viewport,
  // not the transformed motion.header ancestor
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-y-auto"
          style={{
            background: 'linear-gradient(135deg, #033a9d 0%, #007cf4 55%, #36c5f0 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          onClick={onClose}
        >
          {/* Depth overlay */}
          <div
            className="pointer-events-none fixed inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 100%, rgba(3,58,157,0.30) 0%, transparent 60%)',
            }}
          />

          {/* Top bar: sticky so close button is always reachable */}
          <div
            className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-10 pt-5 pb-4"
            style={{ background: 'linear-gradient(to bottom, rgba(3,58,157,0.6) 0%, transparent 100%)', backdropFilter: 'blur(2px)' }}
            onClick={e => e.stopPropagation()}
          >
            <span className="text-white/50 text-xs font-bold tracking-[0.25em] uppercase">Search Sync4Tech</span>
            <motion.button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              aria-label="Close search"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.button>
          </div>

          {/* Main search area */}
          <div
            className="relative z-10 flex flex-col items-center px-4 pt-10 pb-16 min-h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Input */}
            <motion.div
              className="w-full max-w-3xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            >
              <div className="flex items-center gap-4 border-b-2 border-white/25 pb-4 focus-within:border-white/70 transition-colors duration-200">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0 text-white/50">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={PLACEHOLDERS[placeholderIdx]}
                  className="flex-1 bg-transparent text-white text-2xl md:text-3xl font-light outline-none placeholder:text-white/30 caret-white"
                  autoComplete="off"
                  spellCheck={false}
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="shrink-0 text-white/40 hover:text-white/80 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>

              {/* Result count */}
              {query && (
                <motion.p
                  className="text-white/35 text-xs mt-3 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {results.length === 0
                    ? `No results for "${query}"`
                    : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
                </motion.p>
              )}
            </motion.div>

            {/* Results list */}
            <motion.div
              className="w-full max-w-3xl mt-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
            >
              {results.length > 0 && (
                <ul ref={listRef} className="flex flex-col gap-1">
                  {results.map((item, i) => {
                    const snip = query ? snippet(item.content, query) : ''
                    const isActive = active === i
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActive(i)}
                          className={`block rounded-2xl px-5 py-4 transition-all duration-150 group ${
                            isActive
                              ? 'bg-white/15 backdrop-blur-sm'
                              : 'hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0 flex-1">
                              {/* Breadcrumb */}
                              <p className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">
                                {item.breadcrumb}
                              </p>
                              {/* Title */}
                              <p
                                className="text-white font-semibold text-base leading-snug mb-1"
                                dangerouslySetInnerHTML={{
                                  __html: highlight(item.title, query),
                                }}
                              />
                              {/* Snippet */}
                              {snip && (
                                <p
                                  className="text-white/50 text-sm leading-relaxed line-clamp-2"
                                  dangerouslySetInnerHTML={{
                                    __html: highlight(snip, query),
                                  }}
                                />
                              )}
                            </div>
                            <div className="flex items-center gap-2 shrink-0 mt-1">
                              <span
                                className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full whitespace-nowrap"
                                style={{
                                  backgroundColor: `${CAT_COLOR[item.category] ?? '#fff'}22`,
                                  color: CAT_COLOR[item.category] ?? 'rgba(255,255,255,0.6)',
                                  border: `1px solid ${CAT_COLOR[item.category] ?? '#fff'}40`,
                                }}
                              >
                                {item.category}
                              </span>
                              <svg
                                width="14" height="14" viewBox="0 0 14 14" fill="none"
                                className="text-white/25 group-hover:text-white/70 transition-colors"
                              >
                                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}

              {/* Quick links — shown when no query */}
              {!query && (
                <motion.div
                  className="w-full max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <p className="text-white/35 text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
                    Quick links
                  </p>
                  <div className="flex flex-wrap gap-2 mb-12">
                    {QUICK_LINKS.map(l => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={onClose}
                        className="px-4 py-2 rounded-full border border-white/20 text-white/60 hover:border-white/60 hover:text-white hover:bg-white/10 text-sm font-medium transition-all duration-200"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  <p className="text-white/20 text-xs text-center">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white/30 text-[11px]">↑</kbd>{' '}
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white/30 text-[11px]">↓</kbd>{' '}
                    navigate &nbsp;·&nbsp;
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white/30 text-[11px]">Enter</kbd>{' '}
                    open &nbsp;·&nbsp;
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white/30 text-[11px]">Esc</kbd>{' '}
                    close &nbsp;·&nbsp;
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white/30 text-[11px]">⌘K</kbd>{' '}
                    open
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// Inject highlight styles once
if (typeof document !== 'undefined') {
  const id = 's4t-search-highlight'
  if (!document.getElementById(id)) {
    const style = document.createElement('style')
    style.id = id
    style.textContent = 'mark { background: rgba(255,255,255,0.3); color: #fff; border-radius: 2px; padding: 0 2px; font-weight: 700; }'
    document.head.appendChild(style)
  }
}
