import Logo from './Logo'

const columns = [
  {
    title: 'Solutions',
    links: ['Business Automation', 'AI Enablement', 'Data Transformation', 'Execution Excellence'],
  },
  {
    title: 'Industries',
    links: ['Real Estate', 'Healthcare', 'Financial Services', 'Manufacturing', 'Technology'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Case Studies', 'Insights', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Transformation Blueprint', 'ROI Calculator', 'Documentation', 'Partner Program'],
  },
]

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'YouTube',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#033a9d' }} className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(54,197,240,0.08) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(54,197,240,0.3), transparent)' }} />

      <div className="section-container relative z-10 pt-16 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-14 border-b border-white/10">
          <div className="col-span-2">
            <Logo variant="full" theme="dark" className="mb-5" />
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6 max-w-xs">
              AI, Automation, Data and Business Transformation for the world's most ambitious organizations.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-200/60 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-200/60 text-sm hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-blue-200/50 text-xs">
            &copy; {new Date().getFullYear()} Sync4Tech Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[{ flag: '🇺🇸', city: 'United States' }, { flag: '🇬🇧', city: 'United Kingdom' }, { flag: '🇵🇰', city: 'Pakistan' }].map((loc) => (
              <div key={loc.city} className="flex items-center gap-1.5">
                <span className="text-sm">{loc.flag}</span>
                <span className="text-blue-200/50 text-xs">{loc.city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
