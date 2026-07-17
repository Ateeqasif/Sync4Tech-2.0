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
  title: 'Sync4Tech | Business Transformation Consultancy | Automation, Data & AI',
  description: 'Sync4Tech is a business transformation consultancy specialising in data engineering, business process automation, practical AI implementation, and PMO-led execution. Serving UK, US, and Pakistan.',
  keywords: [
    'business process automation',
    'workflow automation services',
    'data engineering consulting',
    'business intelligence consulting',
    'AI implementation services',
    'digital transformation consulting',
    'PMO consulting',
    'automation consulting UK',
    'data strategy consulting',
    'operational efficiency consulting',
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
    title: 'Sync4Tech | Business Transformation Consultancy',
    description: 'Sync4Tech is a business transformation consultancy specialising in data engineering, business process automation, practical AI implementation, and PMO-led execution. Serving UK, US, and Pakistan.',
    url: 'https://sync4tech.com',
    siteName: 'Sync4Tech',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sync4tech.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sync4Tech Business Transformation Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sync4Tech | Business Transformation Consultancy',
    description: 'Sync4Tech is a business transformation consultancy specialising in data engineering, business process automation, practical AI implementation, and PMO-led execution. Serving UK, US, and Pakistan.',
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
