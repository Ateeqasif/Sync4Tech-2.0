'use client'

import { TOOL_LINKS } from '@/lib/toolLinks'

interface Props {
  name: string
  className?: string
}

export default function ToolPill({ name, className = '' }: Props) {
  const url = TOOL_LINKS[name]
  const base = `inline-flex items-center gap-1.5 transition-all duration-200 ${className}`

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} cursor-pointer group`}
        title={`Visit ${name}`}
        onClick={e => e.stopPropagation()}
      >
        {name}
        <svg
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path d="M1.5 8.5l7-7M8.5 8.5V1.5H1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    )
  }

  return <span className={base}>{name}</span>
}
