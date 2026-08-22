import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { news, getNewsBySlug } from '@/lib/briefingNews'
import FinalCTA from '@/components/sections/FinalCTA'
import BriefingDetail from './BriefingDetail'

export function generateStaticParams() {
  return news.map(n => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = getNewsBySlug(params.slug)
  if (!item) return {}
  return {
    title: `${item.headline} | Sync4Tech Briefing`,
    description: item.summary,
  }
}

export default function BriefingPage({ params }: { params: { slug: string } }) {
  const item = getNewsBySlug(params.slug)
  if (!item) notFound()

  return (
    <main>
      <BriefingDetail item={item} />
      <FinalCTA />
    </main>
  )
}
