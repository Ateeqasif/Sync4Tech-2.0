import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service | Sync4Tech',
  description: 'Sync4Tech Terms of Service — the legal agreement governing use of our website and services. Governed by the laws of England & Wales.',
  openGraph: {
    title: 'Terms of Service | Sync4Tech',
    url: 'https://sync4tech.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        highlight="Service"
        subtitle="The agreement governing your use of Sync4Tech's website and services."
        breadcrumb={[{ label: 'Terms of Service', href: '/terms-of-service' }]}
      />

      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <article className="max-w-3xl mx-auto prose prose-gray dark:prose-invert prose-sm md:prose-base">
            <p className="text-gray-400 text-sm mb-8">Last updated: June 2025</p>

            <h2>1. Services</h2>
            <p>These Terms of Service ("Terms") govern access to and use of the Sync4Tech website at sync4tech.com and any professional services provided by Sync4Tech Ltd, a company registered in England and Wales.</p>
            <p>By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the website and do not enter into a services agreement with us.</p>
            <p>Our services include, but are not limited to: business process automation, data engineering, AI strategy and implementation, workflow orchestration, predictive analytics, and change management consultancy. The specific scope of any engagement is defined in a separate Statement of Work or Services Agreement.</p>

            <h2>2. Payment</h2>
            <p>Payment terms for professional services are set out in each Statement of Work. Unless otherwise agreed:</p>
            <ul>
              <li>Invoices are due within 30 days of issue.</li>
              <li>Late payments accrue interest at 8% per annum above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
              <li>We reserve the right to suspend services where invoices remain unpaid beyond 45 days.</li>
              <li>All prices are exclusive of VAT unless stated otherwise.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p><strong>Our IP:</strong> All intellectual property on this website — including text, graphics, code, branding, and methodology frameworks — is owned by or licensed to Sync4Tech Ltd. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            <p><strong>Client deliverables:</strong> Upon full payment of all invoices, Sync4Tech assigns to the client all intellectual property rights in the specific custom deliverables created for that engagement. We retain ownership of our underlying tools, frameworks, and methodologies, and the right to use anonymised learnings for future engagements.</p>

            <h2>4. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law:</p>
            <ul>
              <li>Sync4Tech's aggregate liability for any claim arising out of or related to these Terms or any services engagement shall not exceed the total fees paid by you in the 12 months preceding the claim.</li>
              <li>We exclude liability for indirect, incidental, special, or consequential damages including loss of profit, loss of data, or business interruption.</li>
              <li>Nothing in these Terms limits liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.</li>
            </ul>

            <h2>5. Confidentiality</h2>
            <p>Both parties agree to keep confidential all non-public information received from the other party in connection with the services. This obligation survives termination of any engagement for a period of three years. We are happy to sign a mutual NDA upon request before any discovery conversation.</p>

            <h2>6. Governing Law</h2>
            <p>These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction to settle any disputes.</p>

            <h2>7. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Material changes will be notified via a notice on our website or by email to active clients. Continued use of our services after any update constitutes acceptance of the revised Terms.</p>

            <h2>8. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:legal@sync4tech.com" className="text-[#007cf4]">legal@sync4tech.com</a>.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
