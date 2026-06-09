import { Link } from 'react-router-dom'


function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  )
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#0a1628"/>
    </svg>
  )
}

const footerCols = [
  {
    title: 'AI',
    links: [
      { label: 'Kai — Sales & Customer Services', href: '/products/kai' },
      { label: 'Aruva — AI for Education', href: '/products/aruva' },
      { label: 'Generative AI', href: '/solutions/generative-ai' },
      { label: 'Digital Transformation', href: '/services/consultancy' },
    ],
  },
  {
    title: 'Connectivity',
    links: [
      { label: 'iCMAP', href: '/products/icmap' },
      { label: 'SCAP', href: '/services/engineering' },
      { label: 'iDAMS', href: '/services/iot' },
      { label: 'Telecoms AI', href: '/solutions/telecoms-ai' },
      { label: 'Private Networks', href: '/solutions/mobile-private-networks' },
      { label: 'Space & Defence', href: '/industries/defence' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Overview', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Certifications', href: '/about/certifications' },
      { label: 'Sustainability', href: '/about/sustainability' },
      { label: 'Blog', href: '/insights/blog' },
      { label: 'Case Studies', href: '/insights/case-studies' },
      { label: 'White Papers', href: '/insights/white-papers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'News', href: '/insights' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Public Sector', href: '/industries/public-sector' },
      { label: 'Health Tech', href: '/industries/health-tech' },
      { label: 'Education', href: '/industries/education' },
    ],
  },
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#050d1a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src="/awtg-logo.png"
                alt="AWTG"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              An end-to-end engineering services and technology solutions provider. Creating innovations that improve communities and deliver real ROI since 2006.
            </p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/awtg" target="_blank" rel="noopener noreferrer"
                aria-label="AWTG on LinkedIn (opens in new tab)"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <LinkedInIcon aria-hidden="true" />
              </a>
              <a href="https://twitter.com/awtg_ltd" target="_blank" rel="noopener noreferrer"
                aria-label="AWTG on X / Twitter (opens in new tab)"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <TwitterIcon aria-hidden="true" />
              </a>
              <a href="https://youtube.com/@awtg" target="_blank" rel="noopener noreferrer"
                aria-label="AWTG on YouTube (opens in new tab)"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <YouTubeIcon aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              {/* text-white/60 gives ~6.9:1 on #050d1a – passes AA */}
              <h4 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {/* text-white/70 gives ~9:1 – passes AA */}
                    <Link to={link.href} className="text-[14px] font-normal text-white/65 hover:text-white transition-colors leading-snug py-0.5 inline-block min-h-[24px]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          {/* text-white/55 gives ~6.8:1 on #050d1a – passes AA */}
          <p className="text-white/55 text-xs">
            © {new Date().getFullYear()} AWTG Ltd. Advanced Wireless Technology Group. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="text-xs text-white/55 hover:text-white transition-colors py-1 min-h-[24px] inline-flex items-center">Privacy Policy</Link>
            <Link to="/cookies" className="text-xs text-white/55 hover:text-white transition-colors py-1 min-h-[24px] inline-flex items-center">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
