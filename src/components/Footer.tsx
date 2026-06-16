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
    links: ['About Sync4Tech', 'Case Studies', 'Insights', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Transformation Blueprint', 'ROI Calculator', 'Documentation', 'Partner Program'],
  },
]

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="section-container py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-inter-tight font-bold text-xs">S4</span>
              </div>
              <span className="font-inter-tight font-bold text-white text-lg">Sync4Tech</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              AI, Automation, Data and Business Transformation for the world's most ambitious organizations.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-colors duration-300 text-xs"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Sync4Tech. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <span>🇺🇸</span><span>United States</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <span>🇬🇧</span><span>United Kingdom</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <span>🇵🇰</span><span>Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
