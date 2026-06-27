import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Cookie Policy | Sync4Tech',
  description: 'Sync4Tech Cookie Policy how we use cookies and similar technologies on our website, and how you can manage your preferences.',
  openGraph: {
    title: 'Cookie Policy | Sync4Tech',
    url: 'https://sync4tech.com/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Cookie"
        highlight="Policy"
        subtitle="How we use cookies and similar technologies, and how to manage your preferences."
        breadcrumb={[{ label: 'Cookie Policy', href: '/cookie-policy' }]}
      />

      <section className="py-section bg-white dark:bg-[#050f2e]">
        <div className="section-container">
          <article className="max-w-3xl mx-auto prose prose-gray dark:prose-invert prose-sm md:prose-base">
            <p className="text-gray-400 text-sm mb-8">Last updated: June 2025</p>

            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They allow the website to recognise your device on subsequent visits and remember your preferences. Similar technologies include web beacons, pixel tags, and local storage.</p>
            <p>Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (stored on your device for a set period or until you delete them). They can also be "first-party" (set by us) or "third-party" (set by other organisations whose services we use).</p>

            <h2>2. Types of Cookies We Use</h2>

            <h3>Strictly Necessary Cookies</h3>
            <p>These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences or filling in forms. Without these, the website cannot work properly.</p>

            <h3>Performance & Analytics Cookies</h3>
            <p>These cookies allow us to count visits and measure how visitors find and use our website. All information is aggregated and anonymous they do not identify individual visitors. We use these to understand which pages are most popular and how visitors navigate the site, helping us improve the experience. Currently we use Google Analytics (with IP anonymisation) for this purpose.</p>

            <h3>Functional Cookies</h3>
            <p>These cookies enable the website to provide enhanced functionality and personalisation, such as remembering your dark/light mode preference, language selection, and accessibility settings. They may be set by us or by third-party providers whose services we have added to our pages.</p>

            <h3>Marketing & Targeting Cookies</h3>
            <p>These cookies may be set through our website by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They work by uniquely identifying your browser and device. We use LinkedIn Insight Tag and Google Ads conversion tracking. These are only activated with your consent.</p>

            <h2>3. Managing Cookies</h2>
            <p>You can control and manage cookies in several ways:</p>
            <ul>
              <li><strong>Cookie consent banner</strong> when you first visit our site, you can accept or decline non-essential cookies via our consent banner. You can change your preferences at any time by clicking "Cookie Settings" in the footer.</li>
              <li><strong>Browser settings</strong> most browsers allow you to refuse cookies or delete cookies that have already been set. Visit your browser's help section for instructions. Note that disabling cookies may affect website functionality.</li>
              <li><strong>Opt-out tools</strong> for Google Analytics, use the <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#007cf4]">Google Analytics Opt-out Browser Add-on</a>.</li>
            </ul>

            <h2>4. Third-Party Cookies</h2>
            <p>Where we embed content or functionality from third parties (such as YouTube videos, LinkedIn widgets, or social sharing buttons), those third parties may set their own cookies. We have no control over these cookies. Please refer to the relevant third party's privacy/cookie policy for details.</p>
            <p>Key third parties whose cookies may be present on our website:</p>
            <ul>
              <li><strong>Google</strong> (Analytics, Ads) <a href="https://policies.google.com/privacy" className="text-[#007cf4]">Google Privacy Policy</a></li>
              <li><strong>LinkedIn</strong> (Insight Tag) <a href="https://www.linkedin.com/legal/privacy-policy" className="text-[#007cf4]">LinkedIn Privacy Policy</a></li>
              <li><strong>HubSpot</strong> (CRM & chat) <a href="https://legal.hubspot.com/privacy-policy" className="text-[#007cf4]">HubSpot Privacy Policy</a></li>
            </ul>

            <h2>5. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We recommend reviewing this page periodically to stay informed about our use of cookies.</p>

            <h2>6. Contact Us</h2>
            <p>If you have questions about our use of cookies, contact us at <a href="mailto:privacy@sync4tech.com" className="text-[#007cf4]">privacy@sync4tech.com</a>.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
