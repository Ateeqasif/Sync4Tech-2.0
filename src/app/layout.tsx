import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import SchemaMarkup from '@/components/SchemaMarkup'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

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
  title: 'Sync4Tech | Business Automation, Data & AI Solutions',
  description: 'Transform operations with business automation, workflow automation, data engineering, analytics, and AI enablement solutions designed for growing organizations worldwide.',
  keywords: [
    'business automation',
    'workflow automation',
    'CRM automation',
    'data engineering',
    'data analytics',
    'AI enablement',
    'digital transformation',
    'operational excellence',
    'process automation',
    'enterprise automation',
    'revenue operations',
    'business intelligence',
    'AI integration',
    'intelligent systems',
    'data strategy',
  ],
  authors: [{ name: 'Sync4Tech', url: 'https://sync4tech.com' }],
  creator: 'Sync4Tech',
  publisher: 'Sync4Tech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Sync4Tech | Business Automation, Data & AI Solutions',
    description: 'Transform operations with business automation, data engineering, analytics, and AI solutions designed for growing organizations.',
    url: 'https://sync4tech.com',
    siteName: 'Sync4Tech',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sync4tech.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sync4Tech - Business Automation, Data & AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sync4Tech | Business Automation, Data & AI Solutions',
    description: 'Transform operations with business automation, data engineering, analytics, and AI solutions designed for growing organizations.',
    images: ['https://sync4tech.com/og-image.png'],
    creator: '@sync4tech',
  },
  alternates: {
    canonical: 'https://sync4tech.com',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#007cf4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-inter antialiased">
        <SchemaMarkup />
        <LanguageProvider>
          <ThemeProvider>
            <CustomCursor />
            <Navigation />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
