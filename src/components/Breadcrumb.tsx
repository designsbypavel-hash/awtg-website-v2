import { Link, useLocation } from 'react-router-dom'

// Labels keyed by full path (takes priority) or by single segment.
// Full-path keys let us use exact nav labels even when the same segment
// appears under different sections with different names.
const PATH_LABELS: Record<string, string> = {
  // ── Products (AI section) ──────────────────────────────────────────
  '/products/kai':                       'AI for Sales and Customer Services',
  '/products/aruva':                     'AI for Education',
  // ── Products (Connectivity section) ───────────────────────────────
  '/products/icmap':                     'iCMAP',
  // ── Services ──────────────────────────────────────────────────────
  '/services/consultancy':               'Digital Transformation',
  '/services/engineering':               'Engineering',
  '/services/software':                  'Software Development',
  '/services/digital-transformation':    'Digital Transformation',
  '/services/iot':                       'iDAMS',
  '/services/ai-ml':                     'AI & ML',
  // ── Solutions ─────────────────────────────────────────────────────
  '/solutions/mobile-private-networks':  'Mobile Private Networks',
  '/solutions/telecoms-ai':             'Telecoms AI',
  '/solutions/generative-ai':           'Generative AI',
  '/solutions/smart-cities':            'Smart Cities',
  '/solutions/industry-4':             'Manufacturing',
  '/solutions/smart-health':           'Smart Health',
  // ── Industries ────────────────────────────────────────────────────
  '/industries/enterprise':             'Enterprise',
  '/industries/telecoms':              'Telecoms',
  '/industries/public-sector':         'Public Sector',
  '/industries/health-tech':           'Health Tech',
  '/industries/education':             'Education',
  '/industries/retail':                'Commerce',
  '/industries/defence':               'Space & Defence',
  // ── About ─────────────────────────────────────────────────────────
  '/about':                            'Overview',
  '/about/overview':                   'Overview',
  '/about/leadership':                 'Leadership',
  '/about/certifications':             'Certifications',
  '/about/sustainability':             'Sustainability',
  '/about/partnerships':               'Partnerships',
  '/about/innovation':                 'Innovation',
  // ── Insights ──────────────────────────────────────────────────────
  '/insights':                         'News',
  '/insights/blog':                    'Blog',
  '/insights/case-studies':            'Case Studies',
  '/insights/white-papers':            'White Papers',
}

// Segment-level fallbacks for parent crumbs (e.g. "products", "services")
const SEGMENT_LABELS: Record<string, string> = {
  products:   'Products',
  solutions:  'Solutions',
  services:   'Services',
  industries: 'Industries',
  about:      'About',
  insights:   'News',
  contact:    'Contact',
  careers:    'Careers',
  privacy:    'Privacy Policy',
  terms:      'Terms of Service',
  cookies:    'Cookie Policy',
  ibecome:    'I Become',
  iyouth:     'I Youth',
}

export default function Breadcrumb() {
  const { pathname } = useLocation()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  // Build crumbs — prefer full-path label, then segment label, then auto-capitalise
  const crumbs = segments.map((seg, i) => {
    const fullPath = '/' + segments.slice(0, i + 1).join('/')
    const name =
      PATH_LABELS[fullPath] ??
      SEGMENT_LABELS[seg] ??
      seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    return { name, path: fullPath, isLast: i === segments.length - 1 }
  })

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* Fixed bar — sits flush under the navigation */}
      <nav
        aria-label="Breadcrumb"
        className="fixed top-16 left-0 right-0 z-40"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(10,22,40,0.06)',
        }}
      >
        <ol className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center gap-0 h-9">

          {/* Home */}
          <li className="flex items-center">
            <Link
              to="/"
              aria-label="Home"
              className="flex items-center gap-1.5 text-[11px] font-medium text-[#0a1628]/40 hover:text-[#228DC1] transition-colors duration-150"
            >
              <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor" className="shrink-0 -mt-px">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
          </li>

          {crumbs.map((crumb) => (
            <li key={crumb.path} className="flex items-center">
              {/* Separator */}
              <svg
                width="14" height="14" viewBox="0 0 20 20" fill="none"
                className="shrink-0 text-[#0a1628]/15 mx-1"
              >
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                  className="text-[11px] font-medium text-[#0a1628]/40 hover:text-[#228DC1] transition-colors duration-150"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Spacer so page content isn't hidden under the fixed breadcrumb (height: 36px = h-9) */}
      <div className="h-9 shrink-0" aria-hidden="true" />
    </>
  )
}
