import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sync4Tech — Transform Businesses Into Intelligent Systems',
  description:
    'We combine AI, Automation, Data and Operational Excellence to help organizations reduce costs, accelerate growth and unlock scalable execution.',
  keywords: [
    'AI transformation',
    'business automation',
    'data engineering',
    'operational excellence',
    'digital transformation',
    'AI agents',
    'workflow automation',
  ],
  openGraph: {
    title: 'Sync4Tech — Transform Businesses Into Intelligent Systems',
    description:
      'AI, Automation, Data and Business Transformation partner for enterprise organizations.',
    type: 'website',
    siteName: 'Sync4Tech',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-inter antialiased"><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  )
}
