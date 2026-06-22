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
  innovation: 'Innovation',
  engineering: 'Engineering',
  'digital-transformation': 'Digital Transformation',
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
  '/products/icmap': [
    { label: 'Connectivity' },
    { href: '/products/icmap', label: 'iCMAP' },
  ],
  '/connectivity/scap': [
    { label: 'Connectivity' },
    { href: '/connectivity/scap', label: 'SCAP' },
  ],
  '/connectivity/idams': [
    { label: 'Connectivity' },
    { href: '/connectivity/idams', label: 'iDAMS' },
  ],
  '/insights/blog': [
    { href: '/about', label: 'About' },
    { href: '/insights/blog', label: 'Blog' },
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

  const isBlogPost = segments[0] === 'insights' && segments[1] === 'blog' && segments.length > 2
  const customCrumbs = isBlogPost
    ? [
        { href: '/about', label: 'About' },
        { href: '/insights/blog', label: 'Blog' },
        { href: pathname, label: toLabel(segments[2]) },
      ]
    : PATH_CRUMBS[pathname]
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
              className="text-xs font-medium text-[#0a1628]/60 hover:text-[#1a7aab] transition-colors duration-150 whitespace-nowrap"
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
                  className="text-xs font-medium text-[#1a7aab] whitespace-nowrap overflow-hidden text-ellipsis max-w-[360px]"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : crumb.href ? (
                <Link
                  to={crumb.href}
                  className="text-xs font-medium text-[#0a1628]/60 hover:text-[#1a7aab] transition-colors duration-150 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-xs font-medium text-[#0a1628]/60 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
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
