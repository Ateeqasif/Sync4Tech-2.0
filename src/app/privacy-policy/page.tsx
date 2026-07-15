import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sync4Tech',
  description: 'Sync4Tech Privacy Policy — how we collect, use, and protect your personal data. Compliant with GDPR, CCPA, and international data protection standards.',
  openGraph: {
    title: 'Privacy Policy | Sync4Tech',
    url: 'https://sync4tech.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy"
        subtitle="How we collect, use, and protect your personal data."
        breadcrumb={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
      />

      <section className="py-section bg-white dark:bg-[#f8faff]">
        <div className="section-container">
          <article className="max-w-3xl mx-auto prose prose-gray dark:prose-invert prose-sm md:prose-base">
            <p className="text-gray-400 text-sm mb-8">Last updated: June 2025</p>

            <h2>1. Data We Collect</h2>
            <p>Sync4Tech Ltd ("we", "us", "our") collects the following categories of personal data when you interact with our website or services:</p>
            <ul>
              <li><strong>Contact information</strong> name, work email address, company name, phone number (when provided via our contact form or direct communication).</li>
              <li><strong>Professional information</strong> job title, company size, industry, and the nature of your business challenge as described in enquiry forms.</li>
              <li><strong>Usage data</strong> pages visited, time on site, referring URL, browser type, and device type, collected via cookies and analytics tools (see our Cookie Policy).</li>
              <li><strong>Communication data</strong> email correspondence, meeting notes, and any information you share during discovery or delivery engagements.</li>
            </ul>

            <h2>2. How We Use Your Data</h2>
            <p>We use the data we collect to:</p>
            <ul>
              <li>Respond to your enquiries and deliver our services to you.</li>
              <li>Send our Insights newsletter and other marketing communications (only where you have opted in, or where we have a legitimate interest and you have not opted out).</li>
              <li>Improve our website and understand how visitors engage with our content.</li>
              <li>Comply with our legal and regulatory obligations.</li>
              <li>Detect and prevent fraud or other harmful activity.</li>
            </ul>
            <p>Our lawful bases for processing under applicable data protection law (including GDPR) are: contract performance, legitimate interests, consent (for marketing), and legal obligation.</p>

            <h2>3. Third Parties</h2>
            <p>We share data with the following categories of third parties only where necessary:</p>
            <ul>
              <li><strong>Service providers</strong> CRM platforms (e.g. HubSpot), email delivery services, hosting providers, and analytics platforms. All are bound by data processing agreements.</li>
              <li><strong>Professional advisers</strong> lawyers, accountants, and auditors under strict confidentiality obligations.</li>
              <li><strong>Regulators and authorities</strong> where required by law or court order.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal data to third parties for marketing purposes.</p>

            <h2>4. Your Rights</h2>
            <p>Under applicable data protection laws (including GDPR and CCPA for California residents), you have the following rights:</p>
            <ul>
              <li><strong>Access</strong> request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification</strong> request correction of inaccurate or incomplete data.</li>
              <li><strong>Erasure</strong> request deletion of your data where there is no overriding legal basis for retention.</li>
              <li><strong>Restriction</strong> request that we restrict processing in certain circumstances.</li>
              <li><strong>Portability</strong> receive your data in a structured, machine-readable format.</li>
              <li><strong>Objection</strong> object to processing based on legitimate interests or for direct marketing.</li>
              <li><strong>Withdraw consent</strong> where processing is based on consent, withdraw it at any time.</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:privacy@sync4tech.com" className="text-[#007cf4]">privacy@sync4tech.com</a>. We will respond within 30 days.</p>

            <h2>5. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes described above, or as required by law. Contact enquiry data is retained for 24 months after the last interaction. Client engagement data is retained for 7 years for legal and compliance purposes.</p>

            <h2>6. International Transfers</h2>
            <p>As a globally distributed team, some personal data may be transferred across borders. Where data is transferred internationally, we ensure appropriate safeguards are in place (Standard Contractual Clauses or adequacy decisions) in accordance with applicable data protection law.</p>

            <h2>7. Contact Us</h2>
            <p>Sync4Tech Ltd is the data controller for personal data processed through this website. For privacy enquiries, contact us at:</p>
            <p><strong>Email:</strong> <a href="mailto:privacy@sync4tech.com" className="text-[#007cf4]">privacy@sync4tech.com</a><br />
            <strong>Post:</strong> Sync4Tech Ltd, 1 Canada Square, Canary Wharf, London</p>
            <p>You also have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
