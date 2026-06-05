import { Link, useLocation } from 'react-router-dom'

const LABELS: Record<string, string> = {
  kai:                        'Kai',
  aruva:                      'Aruva',
  icmap:                      'ICMAP',
  products:                   'Products',
  solutions:                  'Solutions',
  'mobile-private-networks':  'Mobile Private Networks',
  'telecoms-ai':              'Telecoms AI',
  'generative-ai':            'Generative AI',
  'smart-cities':             'Smart Cities',
  'industry-4':               'Industry 4.0',
  'smart-health':             'Smart Health',
  services:                   'Services',
  consultancy:                'Consultancy',
  engineering:                'Engineering',
  software:                   'Software',
  'digital-transformation':   'Digital Transformation',
  iot:                        'IoT',
  'ai-ml':                    'AI & ML',
  industries:                 'Industries',
  enterprise:                 'Enterprise',
  telecoms:                   'Telecoms',
  'public-sector':            'Public Sector',
  'health-tech':              'Health Tech',
  education:                  'Education',
  retail:                     'Retail',
  defence:                    'Defence',
  about:                      'About',
  overview:                   'Overview',
  partnerships:               'Partnerships',
  innovation:                 'Innovation',
  leadership:                 'Leadership',
  certifications:             'Certifications',
  sustainability:             'Sustainability',
  insights:                   'Insights',
  blog:                       'Blog',
  'case-studies':             'Case Studies',
  'white-papers':             'White Papers',
  contact:                    'Contact',
  careers:                    'Careers',
  privacy:                    'Privacy Policy',
  terms:                      'Terms of Service',
  cookies:                    'Cookie Policy',
  ibecome:                    'I Become',
  iyouth:                     'I Youth',
}

function label(segment: string) {
  return LABELS[segment] ?? segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export default function Breadcrumb() {
  const { pathname } = useLocation()

  // Don't render on homepage
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((seg, i) => ({
    name: label(seg),
    path: '/' + segments.slice(0, i + 1).join('/'),
    isLast: i === segments.length - 1,
  }))

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-[#f8fafc] border-b border-gray-100"
    >
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: window.location.origin },
          ...crumbs.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: c.name,
            item: window.location.origin + c.path,
          })),
        ],
      })}} />

      <ol className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center gap-1.5 py-2.5 flex-wrap">
        {/* Home */}
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className="text-[11px] font-medium text-[#0a1628]/45 hover:text-[#228DC1] transition-colors duration-150 flex items-center gap-1"
          >
            <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor" className="shrink-0">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.path} className="flex items-center gap-1.5">
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" className="text-[#0a1628]/20 shrink-0">
              <path d="M1 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {crumb.isLast ? (
              <span
                className="text-[11px] font-semibold text-[#0a1628]"
                aria-current="page"
              >
                {crumb.name}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="text-[11px] font-medium text-[#0a1628]/45 hover:text-[#228DC1] transition-colors duration-150"
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
