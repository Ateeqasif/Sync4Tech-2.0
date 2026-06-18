import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Pricing | Sync4Tech — Transparent AI Automation Pricing',
  description:
    'Sync4Tech offers flexible engagement models for AI and business automation. Project-based, retainer, and enterprise pricing available. No hidden fees — pricing structured around results.',
  keywords: [
    'automation pricing',
    'AI consulting cost',
    'digital transformation pricing',
    'business automation cost UK',
    'fixed-price automation project',
  ],
  openGraph: {
    title: 'Pricing | Sync4Tech — Transparent AI Automation Pricing',
    description: 'No hidden fees. No bloated retainers. Pricing structured around the results we deliver.',
    url: 'https://sync4tech.com/pricing',
  },
}

const tiers = [
  {
    name: 'Starter',
    tagline: 'Quick Win Automation',
    price: 'From £5,000',
    unit: '/ project',
    delivery: '2–4 week delivery',
    highlight: false,
    features: [
      'Up to 3 automated workflows',
      '1 system integration',
      'Basic reporting dashboard',
      'Dedicated project manager',
      'Post-launch documentation',
      '2 weeks post-launch support',
    ],
    bestFor: 'Small teams testing automation for the first time.',
    cta: 'Start with a Quick Win',
  },
  {
    name: 'Growth',
    tagline: 'Full Automation Programme',
    price: 'From £15,000',
    unit: '/ project',
    delivery: '6–12 week delivery',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'End-to-end automation design',
      'Unlimited workflows',
      'Full system integrations',
      'ROI tracking dashboard',
      '3 months post-launch support',
      'Weekly progress demos',
      'Dedicated project manager',
      'Documentation & handover',
    ],
    bestFor: 'Scaling mid-market businesses ready to transform core operations.',
    cta: 'Start Your Programme',
  },
  {
    name: 'Enterprise',
    tagline: 'Transformation Partnership',
    price: 'Custom',
    unit: 'pricing',
    delivery: 'Ongoing engagement',
    highlight: false,
    features: [
      'Dedicated specialist team',
      'Custom AI development',
      'Data infrastructure design',
      'Change management support',
      'Quarterly business reviews',
      'Priority support SLA',
      'NDA included',
      'Multi-geography delivery',
    ],
    bestFor: 'Large organisations requiring a long-term transformation partner.',
    cta: 'Talk to Us',
  },
]

const included = [
  'Weekly progress demos',
  'Dedicated project manager',
  'Full documentation & handover',
  'Post-launch support period',
  'NDA available on request',
  'UK / US / Pakistan delivery',
]

const pricingFAQ = [
  {
    q: 'Do you offer fixed-price projects?',
    a: 'Yes. Most engagements are fixed-price with clearly defined deliverables, so you always know exactly what you are getting and what it costs before we start.',
  },
  {
    q: 'Are there ongoing costs after delivery?',
    a: 'Only if you choose to add an ongoing support retainer, which is completely optional. We hand over full ownership of everything we build — you are never locked in.',
  },
  {
    q: 'Can we start small and scale up?',
    a: 'Absolutely. Many clients begin with a Starter engagement to prove the concept, then expand once they see the results. We make it easy to grow the engagement.',
  },
  {
    q: 'What is included in the free strategy session?',
    a: 'A 45-minute call with a senior specialist who will map your biggest operational challenge, identify the highest-impact automation opportunities, and outline a realistic roadmap — no commitment required.',
  },
]

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Transparent,"
        highlight="Outcome-Based Pricing"
        subtitle="No hidden fees. No bloated retainers. Pricing structured around the results we deliver."
        breadcrumb={[{ label: 'Pricing', href: '/pricing' }]}
      />

      {/* Pricing tiers */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Engagement Models</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">
              Choose Your Starting Point
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm">
              Every engagement is scoped to your specific needs. These tiers give you a clear starting framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl flex flex-col ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-[#007cf4]/10 to-[#36c5f0]/5 border-2 border-[#007cf4]/40 shadow-lg shadow-[#007cf4]/10'
                    : 'bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#033a9d] to-[#007cf4] text-white text-xs font-semibold px-4 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="font-inter-tight font-black text-black dark:text-white text-xl mb-1">{tier.name}</h3>
                    <p className="text-[#007cf4] text-sm font-semibold mb-4">{tier.tagline}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-inter-tight font-black text-black dark:text-white text-4xl">{tier.price}</span>
                      <span className="text-gray-400 text-sm">{tier.unit}</span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">{tier.delivery}</div>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-[#007cf4] mt-0.5 shrink-0" fill="none" viewBox="0 0 16 16">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#007cf4]/5 border border-[#007cf4]/10 rounded-xl p-4 mb-6">
                    <span className="text-[#007cf4] text-xs font-semibold uppercase tracking-wide">Best for: </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{tier.bestFor}</span>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-[#033a9d] to-[#007cf4] text-white btn-glow hover:opacity-90'
                        : 'border border-[#007cf4]/40 text-[#007cf4] hover:bg-[#007cf4] hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All plans include */}
      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Every Engagement</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl md:text-4xl">All Plans Include</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {included.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#007cf4]/5 to-[#36c5f0]/5 border border-[#007cf4]/15 rounded-2xl p-5 text-center"
              >
                <div className="w-8 h-8 bg-[#007cf4]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-xs font-semibold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-section bg-[#f8faff] dark:bg-[#060d24]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#007cf4] text-sm font-semibold tracking-widest uppercase mb-3 block">Common Questions</span>
            <h2 className="font-inter-tight font-black text-black dark:text-white text-3xl">Pricing FAQ</h2>
          </div>
          <div className="space-y-4">
            {pricingFAQ.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#0a1a4a] border border-[#007cf4]/15 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-black dark:text-white text-base mb-2">{faq.q}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-white dark:bg-[#050f2e] border-t border-[#007cf4]/10">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              'Free strategy session — no commitment',
              'Fixed-price projects available',
              'NDA on request',
              'Delivery across UK, US & Pakistan',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="#007cf4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
