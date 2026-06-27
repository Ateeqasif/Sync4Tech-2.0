import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Sync4Tech | Join Our Team',
  description: 'Join the Sync4Tech team and help build the future of business automation. Remote-first roles across AI/ML engineering, consulting, data engineering, business development, and design. Offices in London, New York, and Lahore.',
  keywords: ['Sync4Tech careers', 'AI engineer jobs', 'automation consultant jobs', 'remote data engineer', 'tech jobs UK Pakistan', 'business development manager'],
  openGraph: {
    title: 'Careers at Sync4Tech | Join Our Team',
    description: 'Build the future of business automation with a global team of AI and automation specialists.',
    url: 'https://sync4tech.com/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
