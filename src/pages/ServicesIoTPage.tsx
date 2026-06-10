import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faBuildingColumns,
  faChartLine,
  faChevronRight,
  faCity,
  faClipboardCheck,
  faFileContract,
  faFilter,
  faLayerGroup,
  faLocationCrosshairs,
  faMap,
  faMapLocationDot,
  faNetworkWired,
  faRoad,
  faRoute,
  faSearchLocation,
  faShieldHalved,
  faSitemap,
  faTowerBroadcast,
  faUsersGear,
  faWater,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'

type Card = {
  icon: IconDefinition
  title: string
  desc: string
  benefit?: string
  color?: string
}

const capabilities: Card[] = [
  {
    icon: faSitemap,
    title: 'Asset Marketplace',
    desc: 'A searchable marketplace for telecom and infrastructure assets across public and private estates.',
    benefit: 'Find viable assets faster.',
    color: '#228DC1',
  },
  {
    icon: faMapLocationDot,
    title: 'Location Intelligence',
    desc: 'Map-based discovery with custom areas, boundaries and local context for infrastructure planning.',
    benefit: 'Shortlist locations with confidence.',
    color: '#059669',
  },
  {
    icon: faClipboardCheck,
    title: 'Site Acquisition',
    desc: 'Support the full acquisition journey from discovery and evaluation to owner engagement and contracting.',
    benefit: 'Reduce acquisition cycle time.',
    color: '#7c3aed',
  },
  {
    icon: faLayerGroup,
    title: 'Asset Inventory',
    desc: 'Manage above-ground and underground assets with structured records, ownership data and spatial context.',
    benefit: 'Keep assets visible and usable.',
    color: '#d97706',
  },
  {
    icon: faRoute,
    title: 'Workflow Automation',
    desc: 'Standardise acquisition steps, reviews, approvals and handoffs across teams and asset owners.',
    benefit: 'Remove manual coordination gaps.',
    color: '#dc2626',
  },
  {
    icon: faShieldHalved,
    title: 'Role-Based Access Control',
    desc: 'Give asset owners, consumers and administrators secure access to the same marketplace environment.',
    benefit: 'Protect data while enabling collaboration.',
    color: '#0891b2',
  },
]

const workflow = [
  {
    icon: faSearchLocation,
    title: 'Discover Assets',
    desc: 'Search available infrastructure assets by area, asset type, owner and network need.',
  },
  {
    icon: faLocationCrosshairs,
    title: 'Evaluate Locations',
    desc: 'Use geospatial filters, boundary tools and map context to compare the best candidate sites.',
  },
  {
    icon: faUsersGear,
    title: 'Engage Owners',
    desc: 'Connect asset consumers with owners through controlled marketplace workflows.',
  },
  {
    icon: faFileContract,
    title: 'Acquire & Contract',
    desc: 'Streamline requests, commercial steps, approvals and contracting in one platform flow.',
  },
  {
    icon: faLayerGroup,
    title: 'Manage Assets',
    desc: 'Maintain acquired assets, records, ownership and operational status over time.',
  },
]

const platformFeatures: Card[] = [
  {
    icon: faChartLine,
    title: '85,000+ Assets Available',
    desc: 'A broad asset base for operators and infrastructure teams to search, evaluate and acquire.',
  },
  {
    icon: faTowerBroadcast,
    title: 'Above-Ground Assets',
    desc: 'Discover rooftops, street furniture, towers and other visible infrastructure assets.',
  },
  {
    icon: faNetworkWired,
    title: 'Underground Assets',
    desc: 'Support ducts, chambers, routes and other underground asset discovery needs.',
  },
  {
    icon: faFilter,
    title: 'Custom Search Areas',
    desc: 'Draw targeted areas and custom polygons to search within precise planning zones.',
  },
  {
    icon: faMap,
    title: 'Boundary-Based Search',
    desc: 'Use local authority, project and operational boundaries to focus acquisition activity.',
  },
  {
    icon: faMapLocationDot,
    title: 'Google Maps Interface',
    desc: 'Work in a familiar map interface that helps teams inspect assets and surrounding context.',
  },
]

const benefits: Card[] = [
  { icon: faChartLine, title: 'Faster Site Acquisition', desc: 'Move from search to shortlist to owner engagement with fewer handoffs.' },
  { icon: faClipboardCheck, title: 'Reduced Manual Effort', desc: 'Replace spreadsheet tracking and disconnected email workflows with a shared platform.' },
  { icon: faLayerGroup, title: 'Improved Asset Visibility', desc: 'Bring asset location, type, ownership and status into one operational view.' },
  { icon: faFileContract, title: 'Simplified Contracting', desc: 'Support acquisition, contracting and payment workflows through structured marketplace steps.' },
  { icon: faSitemap, title: 'Scalable Asset Management', desc: 'Manage asset discovery and acquisition across programmes, teams and regions.' },
  { icon: faRoute, title: 'Operational Efficiency', desc: 'Give operators, councils and utilities a faster path from demand to usable infrastructure.' },
]

const useCases: Card[] = [
  {
    icon: faTowerBroadcast,
    title: 'Telecommunications',
    desc: 'Help operators identify and acquire sites for mobile, small cell, fibre and private network deployments.',
    benefit: 'Accelerate network rollout.',
  },
  {
    icon: faBuildingColumns,
    title: 'Local Government',
    desc: 'Enable councils to publish, manage and monetise public infrastructure assets safely.',
    benefit: 'Turn civic assets into deployable infrastructure.',
  },
  {
    icon: faWater,
    title: 'Utilities',
    desc: 'Support asset discovery and management across power, water, ducts, chambers and operational estates.',
    benefit: 'Coordinate shared infrastructure use.',
  },
  {
    icon: faRoad,
    title: 'Transport Infrastructure',
    desc: 'Map and evaluate roadside, station, corridor and transport estate assets for connected services.',
    benefit: 'Improve corridor connectivity planning.',
  },
  {
    icon: faCity,
    title: 'Smart Cities',
    desc: 'Give smart place programmes a shared marketplace for infrastructure, sensors and connectivity assets.',
    benefit: 'Scale urban services with better asset access.',
  },
]

function IdamsHeroVisual() {
  const assets = [
    { label: 'Roof', x: '22%', y: '24%', color: '#228DC1' },
    { label: 'Pole', x: '62%', y: '18%', color: '#059669' },
    { label: 'Duct', x: '78%', y: '48%', color: '#7c3aed' },
    { label: 'Cab', x: '33%', y: '62%', color: '#d97706' },
    { label: 'Site', x: '58%', y: '76%', color: '#dc2626' },
  ]

  return (
    <div className="w-full max-w-[580px]">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_32px_72px_rgba(10,22,40,0.16)]">
        <div className="grid md:grid-cols-[160px_1fr]">
          <aside className="border-b border-gray-100 bg-[#f8fafc] p-4 md:border-b-0 md:border-r">
            <div className="mb-5">
              <p className="text-base font-black tracking-tight text-[#0a1628]">iDAMS</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#228DC1]">Asset exchange</p>
            </div>
            <div className="space-y-2.5">
              {[
                ['Asset type', 'Rooftop'],
                ['Boundary', 'Council area'],
                ['Owner', 'Available'],
                ['Contract', 'Ready'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-gray-200 bg-white px-3 py-2.5">
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#0a1628]/35">{label}</p>
                  <p className="mt-1 text-[12px] font-semibold text-[#0a1628]/76">{value}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="relative min-h-[378px] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fbfd_45%,#eef8fc_100%)] p-5">
            <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'linear-gradient(rgba(34,141,193,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,141,193,0.08) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 378" preserveAspectRatio="none" aria-hidden="true">
              <path d="M32 74 C120 64 160 126 226 106 C300 84 342 118 390 86" stroke="#228DC1" strokeWidth="8" fill="none" opacity="0.12" />
              <path d="M44 278 C126 238 174 292 240 246 C310 198 342 232 390 196" stroke="#7c3aed" strokeWidth="8" fill="none" opacity="0.10" />
              <path d="M48 146 L358 146 L358 308 L96 308 Z" stroke="#0a1628" strokeWidth="1.2" strokeDasharray="6 6" fill="rgba(34,141,193,0.05)" opacity="0.5" />
            </svg>

            <div className="relative h-[262px]">
              {assets.map((asset) => (
                <div
                  key={asset.label}
                  className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white text-[11px] font-black uppercase tracking-[0.08em] shadow-[0_10px_24px_rgba(10,22,40,0.10)]"
                  style={{ left: asset.x, top: asset.y, borderColor: asset.color, color: asset.color }}
                >
                  <span className="absolute -inset-2 rounded-full opacity-10" style={{ backgroundColor: asset.color }} />
                  {asset.label}
                </div>
              ))}

              <div className="absolute right-3 top-5 w-[190px] rounded-xl border border-gray-200 bg-white/95 p-4 shadow-[0_18px_36px_rgba(10,22,40,0.12)]">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/40">Search result</p>
                  <span className="rounded-full bg-[#059669]/10 px-2 py-1 text-[11px] font-black text-[#059669]">MATCH</span>
                </div>
                <p className="text-sm font-semibold text-[#0a1628]">Rooftop asset</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#0a1628]/55">Available for small cell deployment inside selected boundary.</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-md bg-[#f8fafc] p-2">
                    <p className="text-[11px] text-[#0a1628]/35">Height</p>
                    <p className="text-[11px] font-black text-[#0a1628]">24m</p>
                  </div>
                  <div className="rounded-md bg-[#f8fafc] p-2">
                    <p className="text-[11px] text-[#0a1628]/35">Status</p>
                    <p className="text-[11px] font-black text-[#228DC1]">Open</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-3">
              {[
                ['Assets', '85,000+'],
                ['Boundary', 'Active'],
                ['Workflow', 'Acquire'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-gray-200 bg-white/90 p-3">
                  <p className="text-[11px] font-semibold text-[#0a1628]/42">{label}</p>
                  <p className="mt-1 text-[12px] font-black text-[#228DC1]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionIntro({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 className="font-heading mb-5 text-[#0a1628]">{title}</h2>
      <p className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/62">{desc}</p>
    </div>
  )
}

export default function ServicesIoTPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const openDemo = () => setIsDemoOpen(true)
  const closeDemo = () => setIsDemoOpen(false)

  return (
    <>
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
        productName="iDAMS"
        title="See iDAMS in action"
        description="Share a few details and we will show how iDAMS helps teams discover, evaluate, acquire and manage telecom and infrastructure assets through one geospatial marketplace."
        logoSrc="/logo-icon.svg"
        accentColor="#228DC1"
        outcomes={[
          'A focused walkthrough of asset discovery and search areas',
          'A demo of marketplace workflows for owners and asset consumers',
          'Guidance on acquisition, contracting and access control setup',
          'A practical pilot path for infrastructure and telecom asset management',
        ]}
      />

      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-45">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="idamsHeroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#idamsHeroGrid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 32%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <h1 className="font-serif-display mb-7 leading-[1.02] text-[#0a1628]">iDAMS</h1>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.75] text-[#0a1628]/62">
              A geospatial asset marketplace that simplifies asset discovery, acquisition and management across telecom and infrastructure networks.
            </p>
            <button type="button" onClick={openDemo} className="inline-flex items-center gap-2 rounded-lg bg-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1a6e99]">
              Request a Demo
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <IdamsHeroVisual />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="A marketplace layer for infrastructure assets"
            desc="iDAMS gives operators, councils, utilities and infrastructure providers a shared way to publish, search, evaluate and acquire telecom-ready assets."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.title} className="flex min-h-[270px] flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,22,40,0.10)]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${capability.color}18` }}>
                  <FontAwesomeIcon icon={capability.icon} className="h-5 w-5" style={{ color: capability.color }} />
                </div>
                <h3 className="mb-3 text-base font-semibold leading-[1.3] text-[#0a1628]">{capability.title}</h3>
                <p className="mb-6 text-[14px] font-normal leading-[1.7] text-[#0a1628]/60">{capability.desc}</p>
                <p className="mt-auto border-t border-gray-100 pt-5 text-[13px] font-semibold text-[#0a1628]/72">{capability.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="From asset discovery to managed infrastructure"
            desc="iDAMS turns acquisition into a connected workflow, helping teams move from geospatial search to owner engagement, contracting and asset management."
          />
          <div className="grid gap-5 lg:grid-cols-5">
            {workflow.map((step, index) => (
              <div key={step.title} className="relative">
                {index < workflow.length - 1 && (
                  <div className="absolute -right-4 top-[76px] z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-[#228DC1]/15 bg-white text-[#228DC1] lg:flex">
                    <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
                  </div>
                )}
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_8px_rgba(10,22,40,0.05)]">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#228DC1]/10">
                    <FontAwesomeIcon icon={step.icon} className="h-5 w-5 text-[#228DC1]" />
                  </span>
                  <p className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/25">0{index + 1}</p>
                  <h3 className="mb-3 text-base font-semibold text-[#0a1628]">{step.title}</h3>
                  <p className="text-[13px] font-normal leading-[1.7] text-[#0a1628]/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="Search, map and manage the assets that matter"
            desc="Existing iDAMS capabilities are presented as a modern product layer: searchable inventory, map tools, boundary search and above-ground or underground asset discovery."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_8px_rgba(10,22,40,0.04)]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#228DC1]/10">
                  <FontAwesomeIcon icon={feature.icon} className="h-4 w-4 text-[#228DC1]" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-[#0a1628]">{feature.title}</h3>
                <p className="text-[13px] font-normal leading-[1.7] text-[#0a1628]/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <h2 className="font-heading mb-5 text-white">A faster path from demand to deployable assets</h2>
            <p className="text-[16px] font-normal leading-[1.75] text-white/62">
              iDAMS reduces acquisition friction by giving teams a shared operating model for discovery, evaluation, contracting and ongoing asset management.
            </p>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="min-h-[220px] bg-[#0d1c31] p-7 transition-colors hover:bg-[#10243d]">
                <div className="mb-6 flex h-10 w-10 items-center justify-center bg-[#228DC1]/20">
                  <FontAwesomeIcon icon={benefit.icon} className="h-4 w-4 text-[#7ac4e0]" />
                </div>
                <h3 className="mb-3 text-[16px] font-semibold text-white">{benefit.title}</h3>
                <p className="text-[13px] font-normal leading-[1.75] text-white/56">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="Built for infrastructure teams with real acquisition pressure"
            desc="iDAMS supports the organisations that need faster access to viable sites, cleaner asset records and a scalable marketplace for infrastructure collaboration."
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex min-h-[310px] flex-col bg-white p-7">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#228DC1]/10">
                  <FontAwesomeIcon icon={useCase.icon} className="h-5 w-5 text-[#228DC1]" />
                </div>
                <h3 className="mb-3 text-[16px] font-semibold leading-[1.3] text-[#0a1628]">{useCase.title}</h3>
                <p className="mb-6 text-[13px] font-normal leading-[1.7] text-[#0a1628]/60">{useCase.desc}</p>
                <p className="mt-auto border-t border-gray-100 pt-5 text-[12px] font-semibold leading-[1.6] text-[#0a1628]/70">{useCase.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to see iDAMS in your asset acquisition workflow?"
        subtitle="Talk to AWTG about geospatial asset discovery, marketplace workflows and scalable infrastructure asset management."
        primaryLabel="Request a Demo"
        primaryOnClick={openDemo}
      />
    </>
  )
}
