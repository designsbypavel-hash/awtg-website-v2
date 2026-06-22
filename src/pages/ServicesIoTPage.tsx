import { useState, useRef, useEffect, type CSSProperties, type ReactNode } from 'react'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'
import VisualInsightCard from '@/components/VisualInsightCard'
import idamsHeroScreen1 from '@/assets/IDAMS/hero/screen-1.png'
import idamsHeroScreen2 from '@/assets/IDAMS/hero/screen-2.png'
import idamsCapability1 from '@/assets/IDAMS/capabilities/capability-1.png'
import idamsCapability2 from '@/assets/IDAMS/capabilities/capability-2.png'
import idamsCapability3 from '@/assets/IDAMS/capabilities/capability-3.png'
import idamsCapability4 from '@/assets/IDAMS/capabilities/capability-4.png'
import idamsCapability5 from '@/assets/IDAMS/capabilities/capability-5.png'
import idamsCapability6 from '@/assets/IDAMS/capabilities/capability-6.png'
import idamsUseCase5G from '@/assets/IDAMS/use-cases/5g-small-cell.png'
import idamsUseCaseAcquisition from '@/assets/IDAMS/use-cases/site-acquisition.png'
import idamsUseCaseEvCharging from '@/assets/IDAMS/use-cases/ev-charging.png'
import idamsUseCaseIoT from '@/assets/IDAMS/use-cases/iot-infrastructure.png'
import idamsUseCaseMonetisation from '@/assets/IDAMS/use-cases/public-asset-monetisation.png'
import idamsUseCaseSmartCity from '@/assets/IDAMS/use-cases/smart-city-assets.png'
import idamsUseCaseLand from '@/assets/IDAMS/use-cases/land-property.png'
import idamsUseCaseStreetFurniture from '@/assets/IDAMS/use-cases/street-furniture.png'
import idamsUseCaseApprovals from '@/assets/IDAMS/use-cases/multi-stakeholder-approvals.png'
import idamsAssetOwnersVisual from '@/assets/IDAMS/audiences/asset-owners.png'
import idamsNetworkOperatorsVisual from '@/assets/IDAMS/audiences/network-operators.png'

// ── Scroll utilities ──────────────────────────────────────────────────────────
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

// ── iDAMS Map Visual ──────────────────────────────────────────────────────────
function IdamsMapVisual() {
  const [activeSignal, setActiveSignal] = useState(0)

  const mapSignals = [
    { label: '6,730 assets indexed', detail: 'Owner and asset layers synced', x: 46, y: 49 },
    { label: 'Polygon selection active', detail: 'Ealing boundary highlighted', x: 56, y: 50 },
    { label: 'Acquisition workflow ready', detail: 'Query, shortlist, request', x: 72, y: 58 },
  ]

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSignal(current => (current + 1) % mapSignals.length)
    }, 2800)
    return () => clearInterval(id)
  }, [mapSignals.length])

  return (
    <div style={{ width: '100%', maxWidth: 760 }}>
      <style>{`
        @keyframes idamsScan {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          16% { opacity: 0.52; }
          46% { opacity: 0.18; }
          100% { transform: translateX(150%) skewX(-12deg); opacity: 0; }
        }
        @keyframes idamsPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0.86); opacity: 0.72; }
          50% { transform: translate(-50%, -50%) scale(1.34); opacity: 0.1; }
        }
      `}</style>
      <div style={{
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 34px 90px rgba(10,22,60,0.20)',
        position: 'relative',
        background: 'linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%)',
        aspectRatio: '2549 / 1349',
        border: '1px solid rgba(61,77,158,0.14)',
      }}>
        <img
          src="/idams-map-1.png"
          alt="iDAMS interactive asset map showing selected Ealing assets"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 62%, rgba(10,22,40,0.08) 100%)',
        }} />

        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '36%',
          pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent 0%, rgba(34,141,193,0.18) 48%, transparent 100%)',
          animation: 'idamsScan 4.8s cubic-bezier(0.16,1,0.3,1) infinite',
        }} />

        {mapSignals.map((signal, index) => (
          <button
            key={signal.label}
            type="button"
            aria-label={signal.label}
            onMouseEnter={() => setActiveSignal(index)}
            style={{
              position: 'absolute',
              left: `${signal.x}%`,
              top: `${signal.y}%`,
              width: 16,
              height: 16,
              borderRadius: 999,
              border: '2px solid #fff',
              background: index === activeSignal ? '#228DC1' : '#3d4d9e',
              boxShadow: '0 8px 22px rgba(61,77,158,0.32)',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}
          >
            <span style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 42,
              height: 42,
              borderRadius: 999,
              border: '1px solid rgba(34,141,193,0.55)',
              animation: `idamsPulse 2.4s ease-in-out ${index * 0.35}s infinite`,
            }} />
          </button>
        ))}

      </div>
    </div>
  )
}

void IdamsMapVisual

const IDAMS_HERO_SCREENS = [
  { label: 'iDAMS regional asset discovery map', src: idamsHeroScreen1 },
  { label: 'iDAMS polygon asset selection map', src: idamsHeroScreen2 },
]

function IdamsHeroShowcase() {
  const [active, setActive] = useState(0)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive(current => (current + 1) % IDAMS_HERO_SCREENS.length), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative w-full max-w-[760px]"
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      <div
        className="absolute -inset-8 hidden pointer-events-none lg:block"
        style={{ background: 'radial-gradient(ellipse at 55% 45%, rgba(61,77,158,0.18) 0, rgba(61,77,158,0.08) 34%, transparent 72%)' }}
      />
      <div style={{ display: 'grid', filter: 'drop-shadow(0 30px 60px rgba(10,22,40,0.20)) drop-shadow(0 8px 20px rgba(10,22,40,0.10))' }}>
        {IDAMS_HERO_SCREENS.map((screen, index) => (
          <img
            key={screen.src}
            src={screen.src}
            alt={screen.label}
            style={{
              gridRow: '1 / 2',
              gridColumn: '1 / 2',
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: active === index ? 1 : 0,
              transition: 'opacity 0.75s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ title, desc }: { title: ReactNode; desc: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 className="font-heading mb-5 text-[#0a1628]">{title}</h2>
      <p className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/60">{desc}</p>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const capabilities = [
  { image: idamsCapability1, title: 'Interactive Asset Map', desc: 'View available assets on an intuitive map interface. Assets can be displayed as layers and filtered by location, type, ownership, availability, and other configurable criteria.' },
  { image: idamsCapability2, title: 'Advanced Search & Filtering', desc: 'Find the right assets using geographic search, postcode, asset type, metadata, or selected map areas such as radius or polygon search.' },
  { image: idamsCapability3, title: 'Asset Data Management', desc: 'Import, create, update, and manage asset records in one place. iDAMS supports flexible data mapping and can be configured to fit different asset structures and ownership models.' },
  { image: idamsCapability4, title: 'Acquisition Workflow', desc: 'Manage asset requests through a structured workflow with reviews, approvals, stakeholder input, and notifications - keeping every request visible and accountable.' },
  { image: idamsCapability5, title: 'Reporting & Insights', desc: 'Use dashboards, reports, and exports to understand asset usage, acquisition progress, and operational performance across your estate.' },
  { image: idamsCapability6, title: 'Integration-Ready Platform', desc: 'iDAMS provides APIs for importing and exporting data and can be configured during onboarding to support each customer\'s specific operational requirements.' },
]

const ownerBenefits = [
  'Centralised asset register',
  'Map-based asset visibility',
  'Flexible data import and export',
  'Configurable asset categories and metadata',
  'Approval workflow for acquisition requests',
  'Improved governance and auditability',
]

const operatorBenefits = [
  'Faster site identification',
  'Reduced manual communication',
  'Clearer asset availability and metadata',
  'Streamlined request and approval process',
  'Improved collaboration with asset owners',
  'Support for telecom site deployment and wider infrastructure use cases',
]

const audiences = [
  {
    color: '#228DC1',
    title: 'Asset Owners',
    desc: 'iDAMS helps asset owners make their infrastructure visible and available for commercial or public-service use. Import asset data, manage records, define availability, review requests, and track the full acquisition process from enquiry to approval.',
    benefits: ownerBenefits,
    image: idamsAssetOwnersVisual,
  },
  {
    color: '#3d4d9e',
    title: 'Mobile Network Operators & Neutral Hosts',
    desc: 'iDAMS helps operators identify suitable locations for network deployment more quickly. Search assets geographically, filter by metadata, select individual or multiple assets, and submit requests through a structured process.',
    benefits: operatorBenefits,
    image: idamsNetworkOperatorsVisual,
  },
]

const idamsUseCases = [
  { image: idamsUseCase5G, eyebrow: 'Connectivity', title: '5G & Small Cell', desc: '5G and small cell deployment across urban and rural environments.' },
  { image: idamsUseCaseAcquisition, eyebrow: 'Acquisition', title: 'Site Acquisition', desc: 'Mobile and neutral host site acquisition with structured workflows.' },
  { image: idamsUseCaseEvCharging, eyebrow: 'Energy', title: 'EV Charging', desc: 'EV charging infrastructure siting and asset acquisition.' },
  { image: idamsUseCaseIoT, eyebrow: 'IoT estate', title: 'IoT Infrastructure', desc: 'IoT sensor and device infrastructure discovery and management.' },
  { image: idamsUseCaseMonetisation, eyebrow: 'Public sector', title: 'Public Asset Monetisation', desc: 'Councils monetising public assets for connectivity and services.' },
  { image: idamsUseCaseSmartCity, eyebrow: 'Urban assets', title: 'Smart City Assets', desc: 'Advertising, smart city, and street furniture asset reuse.' },
  { image: idamsUseCaseLand, eyebrow: 'Property', title: 'Land & Property', desc: 'Public and private land or property assets for infrastructure use.' },
  { image: idamsUseCaseStreetFurniture, eyebrow: 'Street estate', title: 'Street Furniture', desc: 'Street furniture reuse and repurposing for network deployment.' },
  { image: idamsUseCaseApprovals, eyebrow: 'Governance', title: 'Multi-stakeholder Approvals', desc: 'Multi-stakeholder asset approval workflows with full audit trail.' },
]

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ServicesIoTPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [capRef,    capInView]    = useInView(0.08)
  const [audRef,    audInView]    = useInView(0.08)
  const [ucRef,     ucInView]     = useInView(0.08)

  return (
    <>
      <ScrollProgress />
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName="iDAMS"
        title="See iDAMS in action"
        description="Request a demo to see how iDAMS helps asset owners, operators and infrastructure providers collaborate through one secure digital platform."
        logoSrc="/logo-icon.svg"
        accentColor="#3d4d9e"
        outcomes={[
          'A walkthrough of asset discovery, search and polygon tools',
          'A demo of acquisition workflows for owners and consumers',
          'Guidance on asset data import, roles and access control',
          'A practical pilot path for your organisation\'s asset types',
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #eceef8 0%, #dde0f4 40%, #cdd2ef 100%)' }}>

        {/* Diagonal dot-grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="idamsGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(61,77,158,0.38)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#idamsGrid)" />
          </svg>
        </div>

        {/* Diagonal connecting lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.10 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="idamsLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(61,77,158,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(61,77,158,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#idamsLines)" />
          </svg>
        </div>

        {/* Decorative + crosses */}
        {[{ top:'16%', left:'5%' }, { top:'54%', left:'3%' }, { top:'74%', left:'9%' }, { top:'30%', left:'43%' }].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none select-none text-[#3d4d9e]"
            style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.30, fontWeight: 300, lineHeight: 1 }}>+</div>
        ))}

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 35%, rgba(61,77,158,0.12) 0, transparent 55%)' }} />

        <div className="relative mx-auto max-w-[1320px] px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="font-serif-display mb-6 leading-[1.02] text-[#0a1628]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              iDAMS
            </h1>
            <h2 className="mb-5 max-w-xl text-[30px] font-semibold leading-[1.15] text-[#0a1628] lg:text-[40px]">
              Digital asset management for smarter infrastructure sharing.
            </h2>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.7] text-[#0a1628]/60">
              iDAMS helps local authorities, operators and infrastructure partners discover, assess and manage telecom and public assets through one secure map-based workspace.
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
            <IdamsHeroShowcase />
          </div>
          </div>
        </div>
      </section>

      {/* ── BUILT FOR TWO AUDIENCES ──────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-24">
        <div ref={audRef} className="mx-auto max-w-7xl px-8 lg:px-12">

          {/* Heading block */}
          <div style={reveal(audInView, 0)} className="mb-12">
            <h2 className="font-heading text-[#0a1628] mb-3">
              Built for <span className="text-[#1a7aab]">asset owners and asset consumers</span>
            </h2>
            <p className="max-w-2xl text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              iDAMS serves both sides of the asset marketplace - those who hold infrastructure and those who need access to it.
            </p>
          </div>

          {/* Audience rows - alternating text / image */}
          <div className="flex flex-col gap-16 lg:gap-20">
            {audiences.map((aud, i) => {
              const imageFirst = i % 2 === 1
              return (
                <div key={aud.title} className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'} style={reveal(audInView, 150 + i * 150)}>
                    <h3 className="font-heading text-[#0a1628] mb-4">{aud.title}</h3>
                    <p className="mb-6 text-[16px] font-normal leading-[1.75] text-[#0a1628]/65">{aud.desc}</p>
                    <div className="grid gap-2.5 border-t border-[#0a1628]/10 pt-6 sm:grid-cols-2">
                      {aud.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2.5">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: aud.color }} />
                          <span className="text-[13.5px] font-normal leading-snug text-[#0a1628]/65">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'} style={reveal(audInView, i * 150)}>
                    <div className="group relative h-[340px] overflow-hidden rounded-2xl bg-[#f6f8fb] shadow-[0_18px_48px_rgba(10,22,40,0.08)] lg:h-[420px]">
                      <img
                        src={aud.image}
                        alt={aud.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/16 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── KEY PLATFORM CAPABILITIES ────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-24">
        <div ref={capRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(capInView, 0)}>
            <SectionHeader
              title={<>Key platform <span className="text-[#1a7aab]">capabilities</span></>}
              desc="iDAMS provides a complete set of tools for asset discovery, management, acquisition, and collaboration."
            />
          </div>
          <div className="space-y-16 lg:space-y-24">
            {capabilities.map((cap, i) => (
              <article
                key={cap.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                style={reveal(capInView, i * 70)}
              >
                <div className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <h3 className="font-heading mb-5 text-[#0a1628]">{cap.title}</h3>
                  <p className="border-t border-[#0a1628]/10 pt-6 text-[16px] font-normal leading-[1.75] text-[#0a1628]/65">{cap.desc}</p>
                </div>

                <div
                  className={`group relative h-[340px] overflow-hidden rounded-2xl bg-[#f6f8fb] shadow-[0_18px_48px_rgba(10,22,40,0.08)] lg:h-[420px] ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <img
                    src={cap.image}
                    alt={`${cap.title} interface`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/16 via-transparent to-transparent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TURNING ASSETS INTO OPPORTUNITIES ────────────────────────────── */}
      <section className="bg-[#0a1628] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading mb-6 text-white">Turning infrastructure assets into <span className="text-[#67c5f3]">usable digital records.</span></h2>
              <p className="text-[16px] font-normal leading-[1.78] text-white/60">
                Many organisations hold valuable telecom and public infrastructure assets, but the information is often spread across spreadsheets, disconnected systems, emails and manual approval processes.
                iDAMS brings asset discovery, ownership details, requests, approvals and reporting into one secure map-based platform, helping teams manage assets more clearly and move from enquiry to action faster.
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

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="bg-[#0a1628] py-24">
        <div ref={ucRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(ucInView, 0)}>
            <div className="mb-14 max-w-3xl">
              <h2 className="font-heading mb-5 text-white">Use <span className="text-[#67c5f3]">cases</span></h2>
              <p className="text-[16px] font-normal leading-[1.75] text-white/60">
                iDAMS is designed for organisations deploying connectivity and infrastructure assets across the public and private sector.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {idamsUseCases.map((uc, i) => (
              <VisualInsightCard
                key={uc.title}
                dark
                accent="#7ac4e0"
                eyebrow={uc.eyebrow}
                title={uc.title}
                description={uc.desc}
                image={uc.image}
                style={reveal(ucInView, i * 50)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to unlock the value of your assets?"
        subtitle="Speak to AWTG to see how iDAMS can support your organisation's asset management, acquisition, and infrastructure deployment needs."
        primaryLabel="Request a Demo"
        primaryOnClick={() => setIsDemoOpen(true)}
      />
    </>
  )
}
