import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import heroImage from '@/assets/hero.png'


type NavItem = { label: string; desc: string; href: string }
type NavGroup = { heading: string; items: NavItem[] }
type FeaturedItem = { label: string; desc: string; href: string; badge?: string; image: string; imageFit?: 'cover' | 'contain' }
type FeaturedPanel = {
  eyebrow: string
  title: string
  desc: string
  items: FeaturedItem[]
  href: string
  cta: string
}
type NavEntry =
  | { label: string; key: string; cols: number; items: NavItem[]; groups?: never }
  | { label: string; key: string; cols?: never; items?: never; groups: NavGroup[] }

const navItems: NavEntry[] = [
  {
    label: 'AI',
    key: 'innovation',
    groups: [
      {
        heading: 'Products',
        items: [
          { label: 'AI for Sales and Customer Services', desc: 'Enterprise AI platform for customer service and operations', href: '/products/kai' },
          { label: 'AI for Education', desc: 'AI-powered teaching and formative assessment for higher education', href: '/products/aruva' },
        ],
      },
      {
        heading: 'Industries',
        items: [
          { label: 'Education', desc: 'AI for student support, admissions and multilingual engagement', href: '/ai/education' },
          { label: 'Health Tech', desc: 'NHS and healthcare digital infrastructure', href: '/industries/health-tech' },
          { label: 'Commerce', desc: 'AI for customer service, product guidance and retail operations', href: '/ai/commerce' },
          { label: 'Digital Transformation', desc: 'Process automation, knowledge management and organisational AI', href: '/ai/digital-transformation' },
          { label: 'Public Sector', desc: 'AI for citizen services, case management and policy delivery', href: '/ai/public-sector' },
        ],
      },
    ],
  },
  {
    label: 'Connectivity',
    key: 'connectivity',
    groups: [
      {
        heading: 'Products',
        items: [
          { label: 'iCMAP', desc: 'Intelligent 5G coverage mapping and network gap analysis', href: '/products/icmap' },
          { label: 'SCAP', desc: 'Spectrum and capacity analysis platform for network planning', href: '/services/engineering' },
          { label: 'iDAMS', desc: 'Intelligent data and asset management system', href: '/services/iot' },
        ],
      },
      {
        heading: 'Industries',
        items: [
          { label: 'Health', desc: 'DSPT-compliant networks and clinical wireless', href: '/connectivity/health' },
          { label: 'Public Sector', desc: 'PSN-aligned networks and managed connectivity', href: '/connectivity/public-sector' },
          { label: 'Space & Defence', desc: 'Mission-critical and SATCOM connectivity', href: '/connectivity/space-defence' },
          { label: 'Education', desc: 'Campus wireless and safeguarding-compliant networks', href: '/connectivity/education' },
          { label: 'Government', desc: 'PSN, GovWifi and secure government networking', href: '/connectivity/government' },
          { label: 'Commerce', desc: 'SD-WAN, PCI DSS and customer Wi-Fi', href: '/connectivity/commerce' },
          { label: 'Manufacturing', desc: 'Private wireless, IoT and industrial connectivity', href: '/connectivity/manufacturing' },
          { label: 'Engineering', desc: 'Site connectivity, assets and innovation programmes', href: '/connectivity/engineering' },
        ],
      },
    ],
  },
  {
    label: 'About',
    key: 'about',
    groups: [
      {
        heading: 'Company',
        items: [
          { label: 'Overview', desc: 'Who we are and what drives us', href: '/about' },
          { label: 'Leadership', desc: 'The team behind AWTG', href: '/about/leadership' },
          { label: 'Certifications', desc: 'ISO, Cyber Essentials, Crown Commercial', href: '/about/certifications' },
          { label: 'Sustainability', desc: 'Our commitment to responsible technology', href: '/about/sustainability' },
        ],
      },
      {
        heading: 'Insights',
        items: [
          { label: 'Blog', desc: 'Expert perspectives on telecoms and AI', href: '/insights/blog' },
          { label: 'Case Studies', desc: 'Real outcomes from real deployments', href: '/insights/case-studies' },
          { label: 'White Papers', desc: 'In-depth research and technical briefs', href: '/insights/white-papers' },
        ],
      },
    ],
  },
]

const featuredPanels: Record<string, FeaturedPanel> = {
  innovation: {
    eyebrow: 'Featured',
    title: 'AI built around real work',
    desc: 'Explore the two fastest routes into production AI: guided education experiences and customer-facing service intelligence.',
    href: '/solutions/generative-ai',
    cta: 'Explore innovation',
    items: [
      {
        label: 'AI for Education',
        desc: 'Aruva maps learning signals and guides every student through governed course intelligence.',
        href: '/products/aruva',
        badge: 'Aruva',
        image: '/education-featured.png',
        imageFit: 'cover',
      },
      {
        label: 'AI for Sales and Customer Services',
        desc: 'Kai helps teams respond faster, govern handoffs and improve customer operations.',
        href: '/products/kai',
        badge: 'Kai',
        image: '/kai-featured.jpg',
        imageFit: 'cover',
      },
    ],
  },
  connectivity: {
    eyebrow: 'Featured',
    title: 'Network intelligence in motion',
    desc: 'Plan, analyse and optimise connectivity with products built for real infrastructure decisions.',
    href: '/products/icmap',
    cta: 'View connectivity',
    items: [
      {
        label: 'iCMAP',
        desc: 'Intelligent 5G coverage mapping and network gap analysis.',
        href: '/products/icmap',
        badge: '5G',
        image: heroImage,
        imageFit: 'contain',
      },
      {
        label: 'SCAP',
        desc: 'Spectrum and capacity analysis for network planning teams.',
        href: '/services/engineering',
        badge: 'RF',
        image: heroImage,
        imageFit: 'contain',
      },
    ],
  },
  about: {
    eyebrow: 'Featured',
    title: 'Meet AWTG',
    desc: 'See how our teams combine telecoms engineering, software and AI delivery across public and private sector programmes.',
    href: '/about',
    cta: 'About AWTG',
    items: [
      {
        label: 'Leadership',
        desc: 'Meet Abbey Alidoosti and the leadership team behind AWTG.',
        href: '/about/leadership',
        badge: 'Leadership',
        image: '/team/person-0.png',
        imageFit: 'cover',
      },
      {
        label: 'Leadership',
        desc: 'Meet Ian Vernon and the leadership team behind AWTG.',
        href: '/about/leadership',
        badge: 'Leadership',
        image: '/team/person-2.png',
        imageFit: 'cover',
      },
    ],
  },
}

type DropdownKey = string | null

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null)
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const closeTimer = useRef<number | null>(null)
  const lastFeaturedByKey = useRef<Record<string, number>>({})
  const location = useLocation()

  const openDropdown = (key: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setActiveDropdown((current) => {
      if (current !== key) {
        const panel = featuredPanels[key]
        if (panel?.items.length) {
          const next = ((lastFeaturedByKey.current[key] ?? -1) + 1) % panel.items.length
          lastFeaturedByKey.current[key] = next
          setFeaturedIndex(next)
        }
      }
      return key
    })
  }

  const closeDropdownSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      setActiveDropdown(null)
      closeTimer.current = null
    }, 120)
  }

  const closeDropdownNow = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setActiveDropdown(null)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    closeDropdownNow()
    setMobileExpanded(null)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => closeDropdownNow()
    if (activeDropdown) document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [activeDropdown])

  // Only use white/transparent nav on the home page (which has a dark video hero)
  const isHome = location.pathname === '/'

  const navBg = scrolled || activeDropdown || !isHome
    ? 'bg-white border-b border-gray-100'
    : 'bg-transparent'

  const linkCls = scrolled || activeDropdown || !isHome
    ? 'text-[#0a1628]/60 hover:text-[#0a1628]'
    : 'text-white/80 hover:text-white'

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDropdownNow()
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[2000] transition-colors duration-200 ${navBg}`}
        onMouseLeave={closeDropdownSoon}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 z-10" aria-label="AWTG — Home">
              <img
                src="/logo-icon.svg"
                alt="AWTG"
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center" aria-label="Main navigation">
              {navItems.map(({ label, key }) => (
                <button
                  key={key}
                  aria-expanded={activeDropdown === key}
                  aria-haspopup="true"
                  aria-controls={`dropdown-${key}`}
                  onMouseEnter={() => openDropdown(key)}
                  onFocus={() => openDropdown(key)}
                  onClick={(e) => { e.stopPropagation(); activeDropdown === key ? closeDropdownNow() : openDropdown(key) }}
                  className={`relative flex items-center gap-1 px-4 py-5 text-[14px] font-medium transition-colors duration-200 ${linkCls} ${activeDropdown === key ? (scrolled || !isHome ? 'text-[#0a1628]' : 'text-white') : ''}`}
                >
                  {label}
                  <FontAwesomeIcon icon={faChevronDown} className={`w-3 h-3 opacity-50 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                  {/* Harvey-style active underline */}
                  {activeDropdown === key && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-current opacity-30" aria-hidden="true" />
                  )}
                </button>
              ))}
              <Link
                to="/insights"
                className={`px-4 py-5 text-[14px] font-medium transition-colors duration-200 ${linkCls}`}
              >
                News
              </Link>
              <Link
                to="/careers"
                className={`px-4 py-5 text-[14px] font-medium transition-colors duration-200 ${linkCls}`}
              >
                Careers
              </Link>
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/contact"
                className={`px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${linkCls}`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className={`px-5 py-2 text-[14px] font-medium border rounded-lg transition-all duration-200 ${
                  scrolled || activeDropdown || !isHome
                    ? 'border-[#228DC1] text-[#228DC1] hover:bg-[#228DC1] hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-[#0a1628]'
                }`}
              >
                Request a Demo
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={`lg:hidden p-2 transition-colors ${linkCls}`}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FontAwesomeIcon icon={faXmark} className="w-5 h-5" aria-hidden="true" /> : <FontAwesomeIcon icon={faBars} className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* ── Mega dropdown panel ── */}
        {navItems.map((nav) => (
          activeDropdown === nav.key && (
            <div
              key={nav.key}
              id={`dropdown-${nav.key}`}
              role="region"
              aria-label={`${nav.key} submenu`}
              className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-[0_24px_70px_rgba(10,22,40,0.10)] animate-[navDrop_180ms_ease-out]"
              onMouseEnter={() => openDropdown(nav.key)}
              onMouseLeave={closeDropdownSoon}
              style={{ top: '64px' }}
            >
              <div className="absolute -top-3 left-0 right-0 h-3" aria-hidden="true" />
              <div className="px-10 py-8 lg:py-10">

                {/* Flat grid (Solutions / Services / Industries) */}
                {nav.items && (
                  <div className={`grid gap-x-3 gap-y-1 ${nav.cols === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {nav.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="group flex items-start gap-3 px-4 py-3.5 rounded-md border-l-2 border-transparent hover:border-[#228DC1] hover:bg-[#f0f5ff] hover:translate-x-0.5 transition-all duration-200"
                        onClick={closeDropdownNow}
                      >
                        <div>
                          <p className="text-[#0a1628] text-[14px] font-semibold group-hover:text-[#228DC1] transition-colors duration-150 mb-0.5 tracking-[-0.01em]">
                            {item.label}
                          </p>
                          <p className="text-[#0a1628]/60 text-xs font-normal leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Grouped mega menu */}
                {nav.groups && (
                  <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-14 items-start">
                    <div className={`grid ${nav.groups.length === 3 ? 'grid-cols-3 gap-8' : 'grid-cols-2 gap-8 xl:gap-10'}`}>
                      {nav.groups.map((group) => (
                        <div key={group.heading}>
                          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0a1628]/45 mb-5 px-1">
                            {group.heading}
                          </p>
                          <div className="space-y-4">
                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="group block px-1 py-0 transition-transform duration-200 hover:translate-x-1"
                                onMouseEnter={() => {
                                  const panel = featuredPanels[nav.key]
                                  const match = panel?.items.findIndex((featured) => featured.href === item.href || featured.label === item.label) ?? -1
                                  if (match >= 0) setFeaturedIndex(match)
                                }}
                                onClick={closeDropdownNow}
                              >
                                <div>
                                  <p className="text-[#0a1628] text-[13.5px] font-semibold group-hover:text-[#228DC1] transition-colors duration-150 mb-0.5 tracking-[-0.01em]">
                                    {item.label}
                                  </p>
                                  <p className="text-[#0a1628]/55 text-[11.5px] font-normal leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {featuredPanels[nav.key] && (() => {
                      const panel = featuredPanels[nav.key]
                      const item = panel.items[featuredIndex % panel.items.length]
                      return (
                        <div className="pt-1">
                          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#228DC1] mb-4">
                            {panel.eyebrow}
                          </p>
                          <Link
                            key={`${nav.key}-${item.href}`}
                            to={item.href}
                            onClick={closeDropdownNow}
                            className="group block"
                          >
                            <div className="relative h-[170px] overflow-hidden rounded-[8px] bg-[#f5f8fb] border border-gray-200 shadow-[0_8px_32px_rgba(10,22,40,0.10)]">
                              <img
                                src={item.image}
                                alt=""
                                className={`h-full w-full ${item.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}`}
                              />
                              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(10,22,40,0.08)_100%)]" />
                              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#0a1628]">
                                {item.badge}
                              </div>
                              <span className="absolute bottom-4 right-4 text-[#0a1628] transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </div>
                            <h3 className="mt-4 text-[#0a1628] text-[14px] font-semibold tracking-[-0.01em]">
                              {item.label}
                            </h3>
                            <p className="mt-1.5 text-[#0a1628]/60 text-[12px] leading-relaxed">
                              {item.desc}
                            </p>
                          </Link>
                          <Link
                            to={panel.href}
                            onClick={closeDropdownNow}
                            className="mt-4 inline-flex items-center text-[12px] font-semibold text-[#228DC1] hover:text-[#0a1628] transition-colors"
                          >
                            {panel.cta} <span className="ml-1.5">→</span>
                          </Link>
                        </div>
                      )
                    })()}
                  </div>
                )}

              </div>
            </div>
          )
        ))}

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100 px-6 py-4" role="navigation" aria-label="Mobile navigation">
            {navItems.map((nav) => (
              <div key={nav.key} className="border-b border-gray-50 last:border-0">
                <button
                  aria-expanded={mobileExpanded === nav.key}
                  aria-controls={`mobile-submenu-${nav.key}`}
                  onClick={() => setMobileExpanded(mobileExpanded === nav.key ? null : nav.key)}
                  className="flex items-center justify-between w-full py-3.5 text-[#0a1628] text-sm font-medium"
                >
                  {nav.label}
                  <FontAwesomeIcon icon={faChevronDown} className={`w-4 h-4 opacity-40 transition-transform ${mobileExpanded === nav.key ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileExpanded === nav.key && (
                  <div id={`mobile-submenu-${nav.key}`} className="pb-4 space-y-4 pl-2">
                    {nav.items && nav.items.map((item) => (
                      <Link key={item.href} to={item.href} className="block py-1">
                        <p className="text-sm text-[#0a1628] font-normal">{item.label}</p>
                        <p className="text-xs text-[#0a1628]/75 font-normal mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                    {nav.groups && nav.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]/60 mb-2 mt-3">{group.heading}</p>
                        {group.items.map((item) => (
                          <Link key={item.href} to={item.href} className="block py-1">
                            <p className="text-sm text-[#0a1628] font-normal">{item.label}</p>
                            <p className="text-xs text-[#0a1628]/75 font-normal mt-0.5">{item.desc}</p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/insights" className="block py-3.5 text-[#0a1628] text-sm border-b border-gray-50">News</Link>
            <Link to="/careers" className="block py-3.5 text-[#0a1628] text-sm border-b border-gray-50">Careers</Link>
            <div className="pt-4 flex flex-col gap-2">
              <Link to="/contact" className="w-full py-2.5 text-center text-sm border border-[#228DC1] text-[#228DC1] hover:bg-[#228DC1] hover:text-white transition-colors rounded-lg">
                Request a Demo
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay when dropdown is open */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-[1900] bg-black/5 transition-opacity duration-200"
          style={{ top: '64px' }}
          onMouseEnter={closeDropdownSoon}
        />
      )}
    </>
  )
}
