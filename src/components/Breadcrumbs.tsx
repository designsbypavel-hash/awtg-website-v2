import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const LABELS: Record<string, string> = {
  about: 'About',
  leadership: 'Leadership',
  certifications: 'Certifications',
  sustainability: 'Sustainability',
  overview: 'Overview',
  partnerships: 'Partnerships',
  innovation: 'Innovation',
  solutions: 'Solutions',
  'mobile-private-networks': 'Mobile Private Networks',
  'telecoms-ai': 'Telecoms AI',
  'generative-ai': 'Generative AI',
  'smart-cities': 'Smart Cities',
  'industry-4': 'Industry 4.0',
  'smart-health': 'Smart Health',
  services: 'Services',
  consultancy: 'Consultancy',
  engineering: 'Engineering',
  software: 'Software Development',
  'digital-transformation': 'Digital Transformation',
  iot: 'IoT Platforms',
  'ai-ml': 'AI/ML',
  industries: 'Industries',
  enterprise: 'Enterprise',
  telecoms: 'Telecoms',
  'public-sector': 'Public Sector',
  'health-tech': 'Health Tech',
  education: 'Education',
  retail: 'Commerce',
  defence: 'Space & Defence',
  products: 'Products',
  kai: 'Kai',
  aruva: 'Aruva',
  icmap: 'iCMAP',
  insights: 'News',
  news: 'News',
  blog: 'Blog',
  'case-studies': 'Case Studies',
  'white-papers': 'White Papers',
  careers: 'Careers',
  apply: 'Apply',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  cookies: 'Cookie Policy',
  ibecome: 'iBecome',
  iyouth: 'iYouth',
  'design-rationale': 'Design Rationale',
  'carbon-reduction-plan': 'Carbon Reduction Plan',
  'social-value-statement': 'Social Value Statement',
}

function toLabel(segment: string): string {
  return (
    LABELS[segment] ??
    segment
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  )
}

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = segments.map((seg, i) => ({
    href: '/' + segments.slice(0, i + 1).join('/'),
    label: toLabel(seg),
    isLast: i === segments.length - 1,
  }))

  return (
    <nav
      aria-label="Breadcrumb"
      className="fixed left-0 right-0 z-[1500] bg-white border-b border-gray-100"
      style={{ top: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <ol className="flex items-center flex-wrap gap-1 py-2.5">
          <li>
            <Link
              to="/"
              className="text-[12px] font-medium text-[#0a1628]/50 hover:text-[#228DC1] transition-colors duration-150"
            >
              Home
            </Link>
          </li>
          {crumbs.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-2 h-2 text-[#0a1628]/25 shrink-0"
                aria-hidden="true"
              />
              {crumb.isLast ? (
                <span
                  className="text-[12px] font-medium text-[#228DC1] max-w-[220px] truncate"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.href}
                  className="text-[12px] font-medium text-[#0a1628]/50 hover:text-[#228DC1] transition-colors duration-150 max-w-[180px] truncate"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
