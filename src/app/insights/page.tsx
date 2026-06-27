import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'
import InsightsFilter from '@/components/pages/InsightsFilter'

export const metadata: Metadata = {
  title: 'AI & Automation Insights | Sync4Tech Blog',
  description: 'Practical guides, expert perspectives, and deep dives on AI, automation, data intelligence, and digital transformation for businesses in UK, US, and Pakistan.',
  keywords: ['AI insights', 'automation blog', 'business transformation', 'digital transformation articles', 'process automation guides', 'AI strategy', 'data intelligence'],
  openGraph: {
    title: 'AI & Automation Insights | Sync4Tech Blog',
    description: 'Ideas that drive business forward practical guides on AI, automation, and digital transformation.',
    url: 'https://sync4tech.com/insights',
  },
}

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Ideas That Drive"
        highlight="Business Forward"
        subtitle="Practical guides, deep dives and expert perspectives on AI, automation and digital transformation."
        breadcrumb={[{ label: 'Insights', href: '/insights' }]}
      />
      <InsightsFilter />
      <FinalCTA />
    </main>
  )
}
