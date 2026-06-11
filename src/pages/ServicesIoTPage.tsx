import React, { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuildingColumns, faChartLine, faCity,
  faClipboardCheck, faLayerGroup,
  faMapLocationDot, faNetworkWired, faRoute,
  faSearchLocation, faShieldHalved, faSitemap,
  faTowerBroadcast, faWater, faLocationCrosshairs,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'

// â”€â”€ Scroll utilities â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return [ref, inView] as const
}

const reveal = (inView: boolean, delay = 0): CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
})

function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => { const d = document.documentElement; setPct(d.scrollTop / (d.scrollHeight - d.clientHeight)) }
    window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div style={{ width: `${pct * 100}%`, background: 'linear-gradient(90deg,#3d4d9e,#228DC1)', transition: 'width 80ms linear' }} className="h-full" />
    </div>
  )
}

// â”€â”€ IDAMS Map Visual â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const IDAMS_SLIDES = [
  '/idams-map-1.png',
  '/idams-map-2.png',
  '/idams-map-3.png',
]

function IdamsMapVisual() {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      const n = (current + 1) % 3
      setNext(n)
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(n)
        setNext(null)
        setTransitioning(false)
      }, 500)
    }, 4000)
    return () => clearInterval(id)
  }, [current])

  const goTo = (i: number) => {
    if (i === current || transitioning) return
    setNext(i)
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(i)
      setNext(null)
      setTransitioning(false)
    }, 500)
  }

  return (
    <div style={{ width: '100%', maxWidth: 640 }}>
      <div style={{
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(10,22,60,0.22)',
        position: 'relative',
        background: '#0a1628',
        aspectRatio: '16/10',
      }}>
        {/* Current image */}
        <img
          src={IDAMS_SLIDES[current]}
          alt={`IDAMS platform screen ${current + 1}`}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: transitioning ? 0 : 1,
            transition: 'opacity 0.5s ease',
          }}
        />
        {/* Next image fading in */}
        {next !== null && (
          <img
            src={IDAMS_SLIDES[next]}
            alt={`IDAMS platform screen ${next + 1}`}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              opacity: transitioning ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        )}
        {/* Dot indicators */}
        <div style={{
          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 6, zIndex: 10,
        }}>
          {[0, 1, 2].map(i => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 20 : 7, height: 7, borderRadius: 4,
                background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 0.35s ease, background 0.35s ease',
              }}
            />
          ))}
        </div>
        {/* IDAMS badge */}
        <div style={{
          position: 'absolute', top: 12, right: 12, zIndex: 10,
          background: 'rgba(10,22,40,0.72)', backdropFilter: 'blur(6px)',
          borderRadius: 8, padding: '4px 10px',
          fontSize: 10, fontWeight: 800, color: '#fff', letterSpacing: '0.08em',
        }}>
          IDAMS
        </div>
      </div>
    </div>
  )
}
// â”€â”€ Section header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 className="font-heading mb-5 text-[#0a1628]">{title}</h2>
      <p className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/60">{desc}</p>
    </div>
  )
}

// â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const capabilities = [
  { icon: faMapLocationDot, title: 'Interactive Asset Map',       color: '#228DC1', desc: 'View available assets on an intuitive map interface. Assets can be displayed as layers and filtered by location, type, ownership, availability, and other configurable criteria.' },
  { icon: faSearchLocation,  title: 'Advanced Search & Filtering', color: '#059669', desc: 'Find the right assets using geographic search, postcode, asset type, metadata, or selected map areas such as radius or polygon search.' },
  { icon: faDatabase,        title: 'Asset Data Management',       color: '#7c3aed', desc: 'Import, create, update, and manage asset records in one place. IDAMS supports flexible data mapping and can be configured to fit different asset structures and ownership models.' },
  { icon: faClipboardCheck,  title: 'Acquisition Workflow',        color: '#d97706', desc: 'Manage asset requests through a structured workflow with reviews, approvals, stakeholder input, and notifications â€” keeping every request visible and accountable.' },
  { icon: faChartLine,       title: 'Reporting & Insights',        color: '#dc2626', desc: 'Use dashboards, reports, and exports to understand asset usage, acquisition progress, and operational performance across your estate.' },
  { icon: faNetworkWired,    title: 'Integration-Ready Platform',  color: '#0891b2', desc: 'IDAMS provides APIs for importing and exporting data and can be configured during onboarding to support each customer\'s specific operational requirements.' },
]

const ownerBenefits = [
  'Centralised asset register',
  'Map-based asset visibility',
  'Flexible data import and export',
  'Configurable asset categories and metadata',
  'Approval workflow for acquisition requests',
  'Improved governance and auditability',
  'Better opportunity to monetise underused assets',
]

const operatorBenefits = [
  'Faster site identification',
  'Reduced manual communication',
  'Clearer asset availability and metadata',
  'Streamlined request and approval process',
  'Improved collaboration with asset owners',
  'Support for telecom site deployment and wider infrastructure use cases',
]


const whyIdams = [
  { icon: faLocationCrosshairs, color: '#228DC1', title: 'Faster Deployment',            desc: 'Reduce the time required to identify, assess, and request suitable assets for infrastructure deployment.' },
  { icon: faSitemap,            color: '#059669', title: 'Better Collaboration',          desc: 'Bring asset owners, operators, local authorities, and commercial partners into one shared digital process.' },
  { icon: faShieldHalved,       color: '#7c3aed', title: 'Stronger Governance',           desc: 'Track requests, approvals, data changes, and asset status in a controlled platform instead of relying on emails and spreadsheets.' },
  { icon: faRoute,              color: '#d97706', title: 'Configurable to Your Organisation', desc: 'IDAMS can be adapted to different asset types, approval processes, user roles, and reporting needs.' },
  { icon: faLayerGroup,         color: '#dc2626', title: 'Secure and Scalable',           desc: 'The platform is designed for secure cloud delivery, role-based access, data protection, and scalable asset management.' },
]

const audiences = [
  {
    icon: faBuildingColumns, color: '#228DC1',
    title: 'Asset Owners',
    who: 'Local authorities, public bodies, landlords, and private organisations',
    desc: 'IDAMS helps asset owners make their infrastructure visible and available for commercial or public-service use. Import asset data, manage records, define availability, review requests, and track the full acquisition process from enquiry to approval.',
    benefits: ownerBenefits,
  },
  {
    icon: faTowerBroadcast, color: '#3d4d9e',
    title: 'Mobile Network Operators & Neutral Hosts',
    who: 'MNOs, neutral hosts, and telecom infrastructure providers',
    desc: 'IDAMS helps operators identify suitable locations for network deployment more quickly. Search assets geographically, filter by metadata, select individual or multiple assets, and submit requests through a structured process.',
    benefits: operatorBenefits,
  },
]

// â”€â”€ Main page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function ServicesIoTPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [capRef,    capInView]    = useInView(0.08)
  const [audRef,    audInView]    = useInView(0.08)
  const [ucRef,     ucInView]     = useInView(0.08)
  const [whyRef,    whyInView]    = useInView(0.08)

  return (
    <>
      <ScrollProgress />
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName="IDAMS"
        title="See IDAMS in action"
        description="Request a demo to see how IDAMS helps asset owners, operators and infrastructure providers collaborate through one secure digital platform."
        logoSrc="/logo-icon.svg"
        accentColor="#3d4d9e"
        outcomes={[
          'A walkthrough of asset discovery, search and polygon tools',
          'A demo of acquisition workflows for owners and consumers',
          'Guidance on asset data import, roles and access control',
          'A practical pilot path for your organisation\'s asset types',
        ]}
      />

      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none opacity-35"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(61,77,158,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 40%, rgba(61,77,158,0.06) 0, transparent 55%)' }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <h1 className="font-serif-display mb-6 leading-[1.02] text-[#0a1628]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              IDAMS
            </h1>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              Intelligent Digital Asset Management System. A secure, map-based marketplace that helps local authorities, operators, and infrastructure partners discover, request, and manage assets â€” faster.
            </p>
            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: '#3d4d9e', boxShadow: '0 6px 24px rgba(61,77,158,0.30)' }}
            >
              Request a Demo
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <IdamsMapVisual />
          </div>
        </div>
      </section>

      {/* â”€â”€ TURNING ASSETS INTO OPPORTUNITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <h2 className="font-heading mb-6 text-white">Turning assets into opportunities.</h2>
              <p className="text-[16px] font-normal leading-[1.78] text-white/60">
                Many organisations hold valuable infrastructure assets but manage them through spreadsheets, disconnected systems, manual approvals, and slow communication channels. IDAMS replaces fragmented processes with a single digital platform.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Publishing available assets',
                'Managing asset data and ownership details',
                'Displaying assets on an interactive map',
                'Supporting asset search, filtering, and selection',
                'Managing requests, approvals, and acquisition workflows',
                'Improving visibility, governance, and reporting',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/5 p-4">
                  <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#228DC1]" />
                  <span className="text-[13px] font-normal leading-snug text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ BUILT FOR TWO AUDIENCES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div ref={audRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(audInView, 0)}>
            <SectionHeader
              title="Built for asset owners and asset consumers"
              desc="IDAMS serves both sides of the asset marketplace â€” those who hold infrastructure and those who need access to it."
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {audiences.map((aud, i) => (
              <div
                key={aud.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,22,40,0.09)]"
                style={reveal(audInView, i * 100)}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${aud.color}14` }}>
                  <FontAwesomeIcon icon={aud.icon} className="h-5 w-5" style={{ color: aud.color }} />
                </div>
                <p className="mb-1 text-[12px] font-medium text-[#0a1628]/45">{aud.who}</p>
                <h3 className="mb-4 text-[18px] font-semibold leading-[1.3] text-[#0a1628]">{aud.title}</h3>
                <p className="mb-6 text-[14px] font-normal leading-[1.75] text-[#0a1628]/60">{aud.desc}</p>
                <div className="space-y-2.5 border-t border-gray-100 pt-6">
                  {aud.benefits.map(b => (
                    <div key={b} className="flex items-start gap-2.5">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: aud.color }} />
                      <span className="text-[13px] leading-snug text-[#0a1628]/65">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ KEY PLATFORM CAPABILITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-gray-100 bg-[#f8fafc] py-24">
        <div ref={capRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(capInView, 0)}>
            <SectionHeader
              title="Key platform capabilities"
              desc="IDAMS provides a complete set of tools for asset discovery, management, acquisition, and collaboration."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(10,22,40,0.10)]"
                style={reveal(capInView, i * 70)}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${cap.color}14` }}>
                  <FontAwesomeIcon icon={cap.icon} className="h-5 w-5" style={{ color: cap.color }} />
                </div>
                <h3 className="mb-3 text-[15px] font-semibold leading-[1.3] text-[#0a1628]">{cap.title}</h3>
                <p className="text-[13px] font-normal leading-[1.75] text-[#0a1628]/60">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ USE CASES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div ref={ucRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(ucInView, 0)}>
            <div className="mb-14 max-w-3xl">
              <h2 className="font-heading mb-5 text-white">Use cases</h2>
              <p className="text-[16px] font-normal leading-[1.75] text-white/60">
                IDAMS is designed for organisations deploying connectivity and infrastructure assets across the public and private sector.
              </p>
            </div>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { icon: faTowerBroadcast, title: '5G & Small Cell', desc: '5G and small cell deployment across urban and rural environments.' },
              { icon: faLocationCrosshairs, title: 'Site Acquisition', desc: 'Mobile and neutral host site acquisition with structured workflows.' },
              { icon: faCity, title: 'EV Charging', desc: 'EV charging infrastructure siting and asset acquisition.' },
              { icon: faNetworkWired, title: 'IoT Infrastructure', desc: 'IoT sensor and device infrastructure discovery and management.' },
              { icon: faBuildingColumns, title: 'Public Asset Monetisation', desc: 'Councils monetising public assets for connectivity and services.' },
              { icon: faMapLocationDot, title: 'Smart City Assets', desc: 'Advertising, smart city, and street furniture asset reuse.' },
              { icon: faWater, title: 'Land & Property', desc: 'Public and private land or property assets for infrastructure use.' },
              { icon: faRoute, title: 'Street Furniture', desc: 'Street furniture reuse and repurposing for network deployment.' },
              { icon: faClipboardCheck, title: 'Multi-stakeholder Approvals', desc: 'Multi-stakeholder asset approval workflows with full audit trail.' },
            ].map((uc, i) => (
              <div
                key={uc.title}
                className="min-h-[180px] bg-[#0d1c31] p-7 transition-colors hover:bg-[#10243d]"
                style={reveal(ucInView, i * 50)}
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center bg-[#228DC1]/15">
                  <FontAwesomeIcon icon={uc.icon} className="h-4 w-4 text-[#7ac4e0]" />
                </div>
                <h3 className="mb-2 text-[13px] font-semibold text-white">{uc.title}</h3>
                <p className="text-[12px] font-normal leading-[1.68] text-white/45">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ WHY IDAMS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div ref={whyRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(whyInView, 0)}>
            <SectionHeader
              title="Why IDAMS?"
              desc="From asset register to digital marketplace â€” IDAMS creates a practical bridge between organisations that own assets and those that need access to them."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyIdams.map((w, i) => (
              <div
                key={w.title}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(10,22,40,0.09)]"
                style={reveal(whyInView, i * 70)}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `${w.color}12`, border: `1px solid ${w.color}20` }}>
                  <FontAwesomeIcon icon={w.icon} className="h-4 w-4" style={{ color: w.color }} />
                </div>
                <div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-[1.3] text-[#0a1628]">{w.title}</h3>
                  <p className="text-[13px] font-normal leading-[1.72] text-[#0a1628]/60">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to unlock the value of your assets?"
        subtitle="Speak to AWTG to see how IDAMS can support your organisation's asset management, acquisition, and infrastructure deployment needs."
        primaryLabel="Request a Demo"
        primaryOnClick={() => setIsDemoOpen(true)}
      />
    </>
  )
}
