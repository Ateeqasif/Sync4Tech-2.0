import Image from 'next/image'

interface LogoProps {
  variant?: 'full' | 'icon'
  theme?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'full', theme = 'light', className = '' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <div className={className}>
        <Image src="/logo-icon.png" alt="Sync4Tech" width={36} height={36} className="object-contain" />
      </div>
    )
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo-full.png"
        alt="Sync4Tech Limited"
        width={180}
        height={60}
        className={`object-contain h-10 w-auto ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
        priority
      />
    </div>
  )
}
