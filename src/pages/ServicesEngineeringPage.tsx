import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faChartLine,
  faChevronRight,
  faCircleCheck,
  faCubes,
  faDatabase,
  faEye,
  faGaugeHigh,
  faLayerGroup,
  faLock,
  faMoneyBillTrendUp,
  faRoute,
  faServer,
  faShieldHalved,
  faSignal,
  faTowerBroadcast,
  faTriangleExclamation,
  faTruck,
  faVideo,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'

type FeatureCard = {
  icon: IconDefinition
  title: string
  desc: string
  benefits: string[]
  color?: string
}

type SimpleCard = {
  icon: IconDefinition
  title: string
  desc: string
  outcome?: string
}

const coreCapabilities: FeatureCard[] = [
  {
    icon: faShieldHalved,
    title: 'Enterprise Control & Ownership',
    desc: 'SCAP keeps private network analytics, policies and operational intelligence within the enterprise environment.',
    benefits: ['Data sovereignty', 'Policy control', 'Governed operations'],
    color: '#228DC1',
  },
  {
    icon: faServer,
    title: 'Enterprise Infrastructure & Applications',
    desc: 'Correlate users, devices, sites, applications and infrastructure signals across LAN, WAN, Wi-Fi and private 5G environments.',
    benefits: ['Unified stack visibility', 'Application context', 'Reusable modules'],
    color: '#059669',
  },
  {
    icon: faTowerBroadcast,
    title: 'Operator RAN Analytics',
    desc: 'Bring RAN performance and service experience analytics into enterprise decision-making without exposing sensitive enterprise data.',
    benefits: ['RAN performance', 'Service experience', 'Privacy preserving assurance'],
    color: '#7c3aed',
  },
  {
    icon: faChartLine,
    title: 'Private Network Analytics',
    desc: 'Monitor private network health, congestion, mobility and usage trends so operational teams can act before services degrade.',
    benefits: ['5G private network insight', 'Mobility analysis', 'Capacity planning'],
    color: '#d97706',
  },
]

const workflow = [
  {
    icon: faDatabase,
    title: 'Data Sources',
    desc: 'Cameras, tags, IoT sensors, location data, production statistics, enterprise applications and network telemetry.',
  },
  {
    icon: faLayerGroup,
    title: 'Analytics & Correlation',
    desc: 'SCAP links service, network, operational and business signals into a single analytics layer.',
  },
  {
    icon: faEye,
    title: 'Insights & Assurance',
    desc: 'Teams see performance, congestion, service experience and risk indicators in one operational workspace.',
  },
  {
    icon: faMoneyBillTrendUp,
    title: 'Business Outcomes',
    desc: 'Improve quality, reduce failures, optimise logistics and make private network investments measurable.',
  },
]

const useCases: SimpleCard[] = [
  {
    icon: faChartLine,
    title: 'Predictive Analytics',
    desc: 'Use correlated operational and network signals to anticipate demand, quality issues and service degradation.',
    outcome: 'Earlier decisions with less operational guesswork.',
  },
  {
    icon: faVideo,
    title: 'Video Analytics',
    desc: 'Connect video feeds with network and enterprise data to support asset identification and service monitoring.',
    outcome: 'Faster recognition of events that affect operations.',
  },
  {
    icon: faWarehouse,
    title: 'Warehouse Intelligence',
    desc: 'Analyse warehouse movement, packages, sensors and connectivity signals to optimise flow and performance.',
    outcome: 'Higher throughput and fewer bottlenecks.',
  },
  {
    icon: faTriangleExclamation,
    title: 'Failure Prevention',
    desc: 'Detect patterns across production, service and network data before small issues become operational failures.',
    outcome: 'Reduced downtime and better service continuity.',
  },
  {
    icon: faTruck,
    title: 'Logistics Optimisation',
    desc: 'Correlate intralogistics, shop floor and location data to optimise movement across connected environments.',
    outcome: 'Lower operating cost and smoother delivery flows.',
  },
]

const assuranceCards: SimpleCard[] = [
  {
    icon: faGaugeHigh,
    title: 'Network Performance',
    desc: 'Track quality, availability and performance indicators across enterprise and private network domains.',
  },
  {
    icon: faEye,
    title: 'Service Experience',
    desc: 'Understand how network conditions affect observed service experience for users, devices and applications.',
  },
  {
    icon: faSignal,
    title: 'Congestion Analytics',
    desc: 'Identify congestion patterns across user data, radio access and operational demand.',
  },
  {
    icon: faRoute,
    title: 'Mobility Analytics',
    desc: 'Analyse movement and handover behaviour across private network environments and connected operations.',
  },
]

const benefits: SimpleCard[] = [
  { icon: faLock, title: 'Enterprise Data Sovereignty', desc: 'Analytics and operational information remain under enterprise control.' },
  { icon: faShieldHalved, title: 'Private Analytics', desc: 'Secure analysis for enterprise teams without unnecessary data exposure.' },
  { icon: faCubes, title: 'Modular Architecture', desc: 'Flexible modules can be configured around sector, site and operational needs.' },
  { icon: faEye, title: 'Operational Visibility', desc: 'A single workspace for infrastructure, services, users, assets and outcomes.' },
  { icon: faMoneyBillTrendUp, title: 'Cost Efficiency', desc: 'Reusable analytics modules help teams scale insight without duplicating tools.' },
  { icon: faLayerGroup, title: 'Scalable Deployment', desc: 'Designed for private networks, multi-site estates and enterprise environments.' },
]

function ScapHeroVisual() {
  const sourceNodes = [
    { label: 'RAN', x: '13%', y: '24%', color: '#228DC1' },
    { label: 'Apps', x: '16%', y: '68%', color: '#7c3aed' },
    { label: 'IoT', x: '38%', y: '14%', color: '#059669' },
    { label: 'Video', x: '67%', y: '18%', color: '#d97706' },
    { label: 'Ops', x: '82%', y: '63%', color: '#dc2626' },
    { label: 'Users', x: '46%', y: '78%', color: '#0891b2' },
  ]

  return (
    <div className="w-full max-w-[560px]">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_32px_72px_rgba(10,22,40,0.16)]">
        <div className="grid md:grid-cols-[150px_1fr]">
          <aside className="border-b border-gray-100 bg-[#f8fafc] p-4 md:border-b-0 md:border-r">
            <div className="mb-5">
              <p className="text-[17px] font-black tracking-tight text-[#0a1628]">SCAP</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#228DC1]">Assurance layer</p>
            </div>
            <div className="space-y-3">
              {[
                ['Network', '98.7%', '#228DC1'],
                ['Experience', '94.2%', '#059669'],
                ['Congestion', '12 zones', '#d97706'],
                ['Mobility', '4 alerts', '#7c3aed'],
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-lg border border-gray-200 bg-white p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#0a1628]/45">{label}</span>
                    <span className="text-[10px] font-black" style={{ color }}>{value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full" style={{ width: label === 'Congestion' ? '38%' : '78%', backgroundColor: color }} />
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="relative min-h-[370px] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fbfd_48%,#eef8fc_100%)] p-5">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,141,193,0.22) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 370" preserveAspectRatio="none" aria-hidden="true">
              <path d="M60 92 C130 120 150 174 210 184" stroke="#228DC1" strokeWidth="1.4" strokeDasharray="5 6" fill="none" opacity="0.55" />
              <path d="M72 252 C130 230 150 202 210 184" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 6" fill="none" opacity="0.55" />
              <path d="M160 56 C174 110 190 140 210 184" stroke="#059669" strokeWidth="1.4" strokeDasharray="5 6" fill="none" opacity="0.55" />
              <path d="M285 68 C255 112 234 146 210 184" stroke="#d97706" strokeWidth="1.4" strokeDasharray="5 6" fill="none" opacity="0.55" />
              <path d="M350 238 C292 230 250 206 210 184" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 6" fill="none" opacity="0.55" />
              <path d="M198 294 C206 248 209 218 210 184" stroke="#0891b2" strokeWidth="1.4" strokeDasharray="5 6" fill="none" opacity="0.55" />
            </svg>

            <div className="relative h-[322px]">
              {sourceNodes.map((node) => (
                <div
                  key={node.label}
                  className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border bg-white text-[10px] font-black text-[#0a1628] shadow-[0_10px_24px_rgba(10,22,40,0.08)]"
                  style={{ left: node.x, top: node.y, borderColor: `${node.color}55` }}
                >
                  <span className="absolute -inset-1 rounded-[14px] opacity-20" style={{ backgroundColor: node.color }} />
                  {node.label}
                </div>
              ))}

              <div className="absolute left-1/2 top-[52%] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#228DC1]/25 bg-white shadow-[0_20px_44px_rgba(34,141,193,0.18)]">
                <div className="absolute inset-3 rounded-full border border-dashed border-[#228DC1]/30" />
                <FontAwesomeIcon icon={faLayerGroup} className="relative mb-2 h-6 w-6 text-[#228DC1]" />
                <p className="relative text-center text-[12px] font-black uppercase tracking-[0.12em] text-[#0a1628]">Correlation</p>
                <p className="relative mt-1 text-[10px] font-semibold text-[#0a1628]/45">Analytics engine</p>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-3">
              {[
                ['Risk', 'Low', '#059669'],
                ['Capacity', 'Optimised', '#228DC1'],
                ['Assurance', 'Active', '#7c3aed'],
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-lg border border-gray-200 bg-white/90 p-3">
                  <p className="text-[10px] font-semibold text-[#0a1628]/42">{label}</p>
                  <p className="mt-1 text-[12px] font-black" style={{ color }}>{value}</p>
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

export default function ServicesEngineeringPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const openDemo = () => setIsDemoOpen(true)
  const closeDemo = () => setIsDemoOpen(false)

  return (
    <>
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
        productName="SCAP"
        title="See SCAP in action"
        description="Share a few details and we will show how SCAP brings private network analytics, enterprise operations and assurance intelligence into one decision-making workspace."
        logoSrc="/logo-icon.svg"
        accentColor="#228DC1"
        outcomes={[
          'A focused demo around your private network or enterprise operations',
          'A walkthrough of correlation across RAN, applications, assets and service data',
          'Guidance on data ownership, privacy and deployment architecture',
          'A practical pilot path for assurance, congestion and mobility analytics',
        ]}
      />
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-45">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="scapHeroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#scapHeroGrid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 32%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <h1 className="font-serif-display mb-7 leading-[1.02] text-[#0a1628]">SCAP</h1>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.75] text-[#0a1628]/62">
              A unified analytics and assurance platform that combines enterprise network visibility, private network analytics and operational intelligence into a single decision-making workspace.
            </p>
            <button type="button" onClick={openDemo} className="inline-flex items-center gap-2 rounded-lg bg-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1a6e99]">
              Request a Demo
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ScapHeroVisual />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="Enterprise assurance for private network operations"
            desc="SCAP gives enterprise teams ownership of their operational analytics while connecting infrastructure, application, RAN and private network signals into a single platform view."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((capability) => (
              <div key={capability.title} className="flex min-h-[320px] flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,22,40,0.10)]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${capability.color}18` }}>
                  <FontAwesomeIcon icon={capability.icon} className="h-5 w-5" style={{ color: capability.color }} />
                </div>
                <h3 className="mb-3 text-[17px] font-semibold leading-[1.3] text-[#0a1628]">{capability.title}</h3>
                <p className="mb-7 text-[14px] font-normal leading-[1.7] text-[#0a1628]/60">{capability.desc}</p>
                <div className="mt-auto space-y-3 border-t border-gray-100 pt-5">
                  {capability.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCircleCheck} className="mt-0.5 h-4 w-4 shrink-0 text-[#228DC1]" />
                      <span className="text-[13px] font-medium leading-snug text-[#0a1628]/70">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="From raw signals to assured business outcomes"
            desc="SCAP is a platform layer that turns network, operational and enterprise data into correlated insight for assurance, optimisation and decision-making."
          />
          <div className="grid gap-5 lg:grid-cols-4">
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
                  <h3 className="mb-3 text-[18px] font-semibold text-[#0a1628]">{step.title}</h3>
                  <p className="text-[14px] font-normal leading-[1.7] text-[#0a1628]/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="Operational intelligence across connected environments"
            desc="SCAP supports enterprise teams that need to correlate network behaviour with assets, people, logistics, production and service outcomes."
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex min-h-[310px] flex-col bg-white p-7">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#228DC1]/10">
                  <FontAwesomeIcon icon={useCase.icon} className="h-5 w-5 text-[#228DC1]" />
                </div>
                <h3 className="mb-3 text-[16px] font-semibold leading-[1.3] text-[#0a1628]">{useCase.title}</h3>
                <p className="mb-6 text-[13px] font-normal leading-[1.7] text-[#0a1628]/60">{useCase.desc}</p>
                <p className="mt-auto border-t border-gray-100 pt-5 text-[12px] font-semibold leading-[1.6] text-[#0a1628]/70">{useCase.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <h2 className="font-heading mb-5 text-white">Assure the network and the service together</h2>
            <p className="text-[16px] font-normal leading-[1.75] text-white/62">
              SCAP brings assurance data into one workspace so enterprise and network teams can understand performance, experience, congestion and mobility together.
            </p>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {assuranceCards.map((card) => (
              <div key={card.title} className="min-h-[230px] bg-[#0d1c31] p-7 transition-colors hover:bg-[#10243d]">
                <div className="mb-6 flex h-10 w-10 items-center justify-center bg-[#228DC1]/20">
                  <FontAwesomeIcon icon={card.icon} className="h-4 w-4 text-[#7ac4e0]" />
                </div>
                <h3 className="mb-3 text-[16px] font-semibold text-white">{card.title}</h3>
                <p className="text-[13px] font-normal leading-[1.75] text-white/56">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionIntro
            title="Built for private analytics at enterprise scale"
            desc="SCAP is designed for organisations that need visibility, privacy, modular deployment and practical operational value from their private network investments."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_8px_rgba(10,22,40,0.04)]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#228DC1]/10">
                  <FontAwesomeIcon icon={benefit.icon} className="h-4 w-4 text-[#228DC1]" />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-[#0a1628]">{benefit.title}</h3>
                <p className="text-[13px] font-normal leading-[1.7] text-[#0a1628]/60">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to see SCAP in your network environment?"
        subtitle="Talk to AWTG about service correlation, private network analytics and assurance intelligence for your enterprise operations."
        primaryLabel="Request a Demo"
        primaryOnClick={openDemo}
      />
    </>
  )
}
