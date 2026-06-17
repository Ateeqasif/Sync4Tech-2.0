'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={on}
      className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${on ? 'bg-[#007cf4]' : 'bg-gray-200 dark:bg-gray-600'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${on ? 'translate-x-5' : ''}`}
      />
    </button>
  )
}

type FontSize = 'sm' | 'md' | 'lg'
type LineHeight = 'normal' | 'relaxed' | 'loose'

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState<FontSize>('md')
  const [lineHeight, setLineHeight] = useState<LineHeight>('normal')
  const [letterSpacing, setLetterSpacing] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [saturation, setSaturation] = useState(false)
  const [pauseAnims, setPauseAnims] = useState(false)
  const [highlightLinks, setHighlightLinks] = useState(false)
  const [hideImages, setHideImages] = useState(false)
  const [dyslexiaFont, setDyslexiaFont] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Keyboard shortcut Ctrl+U
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Apply font size to html element
  useEffect(() => {
    const sizes: Record<FontSize, string> = { sm: '14px', md: '', lg: '19px' }
    document.documentElement.style.fontSize = sizes[fontSize]
  }, [fontSize])

  // Apply line height class
  useEffect(() => {
    document.documentElement.classList.remove('a11y-lh-normal', 'a11y-lh-relaxed', 'a11y-lh-loose')
    if (lineHeight !== 'normal') {
      document.documentElement.classList.add(`a11y-lh-${lineHeight}`)
    }
  }, [lineHeight])

  // Apply toggle classes
  useEffect(() => {
    const root = document.documentElement
    const toggle = (cls: string, on: boolean) => {
      if (on) root.classList.add(cls)
      else root.classList.remove(cls)
    }
    toggle('a11y-ls', letterSpacing)
    toggle('a11y-contrast', highContrast)
    toggle('a11y-sat', saturation)
    toggle('a11y-pause', pauseAnims)
    toggle('a11y-links', highlightLinks)
    toggle('a11y-imgs', hideImages)
    toggle('a11y-dyslexia', dyslexiaFont)
  }, [letterSpacing, highContrast, saturation, pauseAnims, highlightLinks, hideImages, dyslexiaFont])

  // Inject CSS
  useEffect(() => {
    let css = ''

    const lhMap: Record<LineHeight, string> = { normal: '1.4', relaxed: '1.6', loose: '2.0' }
    if (lineHeight !== 'normal') {
      css += `.a11y-lh-${lineHeight} * { line-height: ${lhMap[lineHeight]} !important; }`
    }
    if (letterSpacing) {
      css += `.a11y-ls p, .a11y-ls span, .a11y-ls li { letter-spacing: 0.1em !important; word-spacing: 0.16em !important; }`
    }
    if (highContrast) {
      css += `.a11y-contrast { filter: contrast(160%) !important; }`
    }
    if (saturation) {
      css += `.a11y-sat { filter: saturate(40%) !important; }`
    }
    if (pauseAnims) {
      css += `.a11y-pause *, .a11y-pause *::before, .a11y-pause *::after { animation-play-state: paused !important; transition-duration: 0.01ms !important; }`
    }
    if (highlightLinks) {
      css += `.a11y-links a { outline: 2px solid #007cf4 !important; background: rgba(0,124,244,0.1) !important; border-radius: 3px !important; }`
    }
    if (hideImages) {
      css += `.a11y-imgs img { visibility: hidden !important; }`
    }
    if (dyslexiaFont) {
      css += `@import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');`
      css += `.a11y-dyslexia body, .a11y-dyslexia p, .a11y-dyslexia span, .a11y-dyslexia li, .a11y-dyslexia h1, .a11y-dyslexia h2, .a11y-dyslexia h3, .a11y-dyslexia h4 { font-family: 'Lexend', sans-serif !important; }`
    }

    let styleTag = document.getElementById('a11y-custom') as HTMLStyleElement | null
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'a11y-custom'
      document.head.appendChild(styleTag)
    }
    styleTag.textContent = css
  }, [lineHeight, letterSpacing, highContrast, saturation, pauseAnims, highlightLinks, hideImages, dyslexiaFont])

  function resetAll() {
    setFontSize('md')
    setLineHeight('normal')
    setLetterSpacing(false)
    setHighContrast(false)
    setSaturation(false)
    setPauseAnims(false)
    setHighlightLinks(false)
    setHideImages(false)
    setDyslexiaFont(false)
    document.documentElement.style.fontSize = ''
    const classes = ['a11y-ls', 'a11y-contrast', 'a11y-sat', 'a11y-pause', 'a11y-links', 'a11y-imgs', 'a11y-dyslexia', 'a11y-lh-relaxed', 'a11y-lh-loose']
    classes.forEach((c) => document.documentElement.classList.remove(c))
  }

  const sectionLabel = (text: string) => (
    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 mt-1">{text}</p>
  )

  const controlRow = (label: string, control: React.ReactNode) => (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
      {control}
    </div>
  )

  const fontSizeOptions: { key: FontSize; label: string }[] = [
    { key: 'sm', label: 'A-' },
    { key: 'md', label: 'A' },
    { key: 'lg', label: 'A+' },
  ]

  const lineHeightOptions: { key: LineHeight; label: string }[] = [
    { key: 'normal', label: '1.4' },
    { key: 'relaxed', label: '1.6' },
    { key: 'loose', label: '2.0' },
  ]

  return (
    <>
      {/* Trigger button */}
      <div className="fixed bottom-6 left-6 z-[9975]">
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: '#36c5f0',
            animation: 'a11y-pulse 2s ease-out infinite',
          }}
        />
        <style>{`
          @keyframes a11y-pulse {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.6); opacity: 0; }
          }
        `}</style>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute left-[60px] top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-full pointer-events-none">
            Accessibility
          </div>
        )}

        <button
          onClick={() => setOpen((p) => !p)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Open Accessibility Panel"
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #033a9d, #007cf4)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 4px 14px rgba(0,124,244,0.4)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="2"/>
            <path d="M12 7v6M9 10l-3 3M15 10l3 3M10 22l2-5 2 5"/>
          </svg>
        </button>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[9973] bg-black/20"
            />

            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-72 z-[9974] overflow-y-auto"
              style={{
                background: 'var(--bg-card)',
                boxShadow: '4px 0 24px rgba(0,0,0,0.15)',
              }}
            >
              {/* Header */}
              <div
                className="p-4 flex items-center justify-between"
                style={{ background: 'linear-gradient(135deg, #033a9d, #007cf4)' }}
              >
                <div>
                  <p className="text-white font-bold text-base leading-tight">Accessibility</p>
                  <span className="text-[10px] text-white/60 bg-white/10 px-2 py-0.5 rounded-full mt-0.5 inline-block">
                    CTRL+U
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close panel"
                  className="text-white text-xl leading-none hover:opacity-70 transition-opacity"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3">
                {/* Reset */}
                <button
                  onClick={resetAll}
                  className="w-full border border-[#007cf4] text-[#007cf4] rounded-xl py-2 text-sm hover:bg-[#007cf4]/10 transition-colors"
                >
                  ↺ Reset All Settings
                </button>

                {/* TEXT section */}
                {sectionLabel('Text')}

                {controlRow(
                  'Text Size',
                  <div className="flex gap-1">
                    {fontSizeOptions.map(({ key, label }) => (
                      <button
                        key={key}
                        onClick={() => setFontSize(key)}
                        className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                          fontSize === key
                            ? 'bg-[#007cf4] text-white'
                            : 'border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-[#007cf4]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}

                {controlRow(
                  'Line Height',
                  <div className="flex gap-1">
                    {lineHeightOptions.map(({ key, label }) => (
                      <button
                        key={key}
                        onClick={() => setLineHeight(key)}
                        className={`px-2 h-8 rounded-lg text-xs font-medium transition-colors ${
                          lineHeight === key
                            ? 'bg-[#007cf4] text-white'
                            : 'border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-[#007cf4]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}

                {controlRow('Letter Spacing', <Toggle on={letterSpacing} onToggle={() => setLetterSpacing((p) => !p)} />)}

                {/* VISUAL section */}
                {sectionLabel('Visual')}

                {controlRow('High Contrast', <Toggle on={highContrast} onToggle={() => setHighContrast((p) => !p)} />)}
                {controlRow('Saturation', <Toggle on={saturation} onToggle={() => setSaturation((p) => !p)} />)}
                {controlRow('Pause Animations', <Toggle on={pauseAnims} onToggle={() => setPauseAnims((p) => !p)} />)}

                {/* READING section */}
                {sectionLabel('Reading')}

                {controlRow('Highlight Links', <Toggle on={highlightLinks} onToggle={() => setHighlightLinks((p) => !p)} />)}
                {controlRow('Hide Images', <Toggle on={hideImages} onToggle={() => setHideImages((p) => !p)} />)}
                {controlRow('Dyslexia Font', <Toggle on={dyslexiaFont} onToggle={() => setDyslexiaFont((p) => !p)} />)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
