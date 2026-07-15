import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/pages/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Sync4Tech | Book a Strategy Session',
  description: 'Get in touch with Sync4Tech to discuss your operational challenges. We serve ambitious businesses globally. Response guaranteed within 24 hours. Initial consultation free.',
  keywords: ['contact Sync4Tech', 'book strategy session', 'automation consultation', 'AI consulting enquiry', 'digital transformation contact'],
  openGraph: {
    title: 'Contact Sync4Tech | Book a Strategy Session',
    description: 'Tell us about your biggest operational challenge and we will show you exactly how to solve it.',
    url: 'https://sync4tech.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Start Your"
        highlight="Transformation"
        subtitle="Tell us about your biggest operational challenge and we'll show you exactly how to solve it."
        breadcrumb={[{ label: 'Contact', href: '/contact' }]}
      />
      <ContactForm />
    </main>
  )
}
