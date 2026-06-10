import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type Crumb = {
  href?: string
  label: string
  isLast: boolean
}

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
  iot: 'iDAMS',
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
  kai: 'AI for Sales and Customer Services',
  aruva: 'AI for Education',
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

const PATH_CRUMBS: Record<string, Omit<Crumb, 'isLast'>[]> = {
  '/services/engineering': [
    { label: 'Connectivity' },
    { href: '/services/engineering', label: 'SCAP' },
  ],
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

  const customCrumbs = PATH_CRUMBS[pathname]
  const crumbs: Crumb[] = customCrumbs
    ? customCrumbs.map((crumb, i) => ({
        ...crumb,
        isLast: i === customCrumbs.length - 1,
      }))
    : segments.map((seg, i) => ({
        href: '/' + segments.slice(0, i + 1).join('/'),
        label: toLabel(seg),
        isLast: i === segments.length - 1,
      }))

  return (
    <nav
      aria-label="Breadcrumb"
      className="fixed left-0 right-0 z-[1500] bg-white/95 backdrop-blur-sm border-b border-gray-100/80"
      style={{ top: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ol className="flex items-center gap-0 h-9 overflow-hidden">
          <li className="flex items-center shrink-0">
            <Link
              to="/"
              className="text-xs font-medium text-[#0a1628]/45 hover:text-[#228DC1] transition-colors duration-150 whitespace-nowrap"
            >
              Home
            </Link>
          </li>
          {crumbs.map((crumb) => (
            <li key={crumb.href ?? crumb.label} className="flex items-center shrink-0 min-w-0">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-[7px] h-[7px] text-[#0a1628]/20 mx-2 shrink-0"
                aria-hidden="true"
              />
              {crumb.isLast ? (
                <span
                  className="text-xs font-medium text-[#228DC1] whitespace-nowrap overflow-hidden text-ellipsis max-w-[360px]"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : crumb.href ? (
                <Link
                  to={crumb.href}
                  className="text-xs font-medium text-[#0a1628]/45 hover:text-[#228DC1] transition-colors duration-150 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-xs font-medium text-[#0a1628]/40 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
