interface LogoProps {
  variant?: 'full' | 'icon'
  theme?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'full', theme = 'light', className = '' }: LogoProps) {
  const textColor = theme === 'dark' ? '#ffffff' : '#0a0a0a'
  const subColor = theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)'

  const icon = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background square with rounded corners */}
      <rect width="36" height="36" rx="8" fill="url(#logoGrad)"/>
      {/* Geometric S4T mark - two angular chevron shapes */}
      <path d="M8 10 L16 10 L24 18 L16 18 L8 10Z" fill="rgba(255,255,255,0.95)"/>
      <path d="M12 18 L20 18 L28 26 L20 26 L12 18Z" fill="rgba(255,255,255,0.6)"/>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#007cf4"/>
          <stop offset="100%" stopColor="#36c5f0"/>
        </linearGradient>
      </defs>
    </svg>
  )

  if (variant === 'icon') return <div className={className}>{icon}</div>

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {icon}
      <div className="flex flex-col leading-none">
        <span
          style={{ color: textColor, fontFamily: 'var(--font-inter-tight)', fontWeight: 800, fontSize: '15px', letterSpacing: '-0.02em' }}
        >
          SYNC4TECH
        </span>
        <span
          style={{ color: subColor, fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '9px', letterSpacing: '0.12em' }}
        >
          LIMITED
        </span>
      </div>
    </div>
  )
}
