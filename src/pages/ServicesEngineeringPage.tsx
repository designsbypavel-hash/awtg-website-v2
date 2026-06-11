import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine, faCircleCheck, faLayerGroup, faServer,
  faTriangleExclamation, faShieldHalved, faNetworkWired,
  faBolt, faCubes, faEye, faGaugeHigh, faCodeBranch,
  faArrowsRotate, faFilter,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'

// -- Scroll utilities ----------------------------------------------------------
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
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
    const fn = () => {
      const d = document.documentElement
      setPct(d.scrollTop / (d.scrollHeight - d.clientHeight))
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div style={{ width: `${pct * 100}%`, background: 'linear-gradient(90deg, #228DC1, #0e6a9a)', transition: 'width 80ms linear' }} className="h-full" />
    </div>
  )
}

// -- SCAP Platform Dashboard Visual -------------------------------------------
function ScapDashboardVisual() {
  const [activeModule, setActiveModule] = useState(0)
  const modules = [
    { label: 'SMO', color: '#228DC1', metric: 'O-RAN O1', status: 'Connected' },
    { label: 'PM', color: '#059669', metric: '98.4%', status: 'SLA met' },
    { label: 'CM', color: '#7c3aed', metric: '12 nodes', status: 'Synced' },
    { label: 'FM', color: '#d97706', metric: '3 active', status: 'Alarms' },
  ]

  useEffect(() => {
    const id = setInterval(() => setActiveModule(p => (p + 1) % 4), 2200)
    return () => clearInterval(id)
  }, [])

  const active = modules[activeModule]

  return (
    <div className="w-full max-w-[580px]">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c31] shadow-[0_38px_86px_rgba(10,22,40,0.40)]">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-[#ef4444]/70" />
          <div className="h-3 w-3 rounded-full bg-[#f59e0b]/70" />
          <div className="h-3 w-3 rounded-full bg-[#22c55e]/70" />
          <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">SCAP · Network Management Platform</span>
        </div>

        <div className="grid grid-cols-[140px_1fr]">
          {/* Sidebar */}
          <aside className="border-r border-white/8 p-4">
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">Admin Panel</p>
            <div className="space-y-1">
              {modules.map((mod, i) => (
                <button
                  key={mod.label}
                  onClick={() => setActiveModule(i)}
                  className="w-full rounded-lg px-3 py-2.5 text-left transition-all"
                  style={{
                    background: activeModule === i ? `${mod.color}20` : 'transparent',
                    borderLeft: activeModule === i ? `2px solid ${mod.color}` : '2px solid transparent',
                  }}
                >
                  <p className="text-[11px] font-bold text-white/90">{mod.label}</p>
                  <p className="text-[9.5px] text-white/40">
                    {mod.label === 'SMO' ? 'Orchestration' :
                     mod.label === 'PM' ? 'Performance' :
                     mod.label === 'CM' ? 'Configuration' : 'Fault Mgmt'}
                  </p>
                </button>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {['Alarms', 'KPI Alerts', 'Reports'].map(item => (
                <div key={item} className="flex items-center gap-2 px-3 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="text-[10px] text-white/30">{item}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Main panel */}
          <div className="min-h-[340px] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">{active.label} Dashboard</p>
                <p className="text-[15px] font-semibold text-white">
                  {active.label === 'SMO' ? 'Service Management & Orchestration' :
                   active.label === 'PM' ? 'KPI Performance Dashboard' :
                   active.label === 'CM' ? 'Configuration Management' : 'Fault Management'}
                </p>
              </div>
              <span className="rounded-full px-3 py-1 text-[10px] font-bold" style={{ background: `${active.color}22`, color: active.color }}>
                {active.status}
              </span>
            </div>

            {/* KPI row */}
            <div className="mb-4 grid grid-cols-3 gap-2">
              {active.label === 'SMO' && [
                ['O-RAN O1', 'Active', '#228DC1'],
                ['NETCONF', 'Synced', '#059669'],
                ['NonRT RIC', 'Online', '#7c3aed'],
              ].map(([label, val, color]) => (
                <div key={label} className="rounded-lg border border-white/8 bg-white/5 p-3">
                  <p className="text-[9px] text-white/38">{label}</p>
                  <p className="text-[12px] font-bold" style={{ color }}>{val}</p>
                </div>
              ))}
              {active.label === 'PM' && [
                ['Availability', '99.8%', '#059669'],
                ['BLER', '0.4%', '#228DC1'],
                ['Throughput', '↑12%', '#7c3aed'],
              ].map(([label, val, color]) => (
                <div key={label} className="rounded-lg border border-white/8 bg-white/5 p-3">
                  <p className="text-[9px] text-white/38">{label}</p>
                  <p className="text-[12px] font-bold" style={{ color }}>{val}</p>
                </div>
              ))}
              {active.label === 'CM' && [
                ['Schema', 'YANG', '#7c3aed'],
                ['Changes', '3 pending', '#d97706'],
                ['Baseline', 'Golden', '#059669'],
              ].map(([label, val, color]) => (
                <div key={label} className="rounded-lg border border-white/8 bg-white/5 p-3">
                  <p className="text-[9px] text-white/38">{label}</p>
                  <p className="text-[12px] font-bold" style={{ color }}>{val}</p>
                </div>
              ))}
              {active.label === 'FM' && [
                ['Critical', '1', '#ef4444'],
                ['Major', '2', '#d97706'],
                ['Cleared', '14', '#059669'],
              ].map(([label, val, color]) => (
                <div key={label} className="rounded-lg border border-white/8 bg-white/5 p-3">
                  <p className="text-[9px] text-white/38">{label}</p>
                  <p className="text-[12px] font-bold" style={{ color }}>{val}</p>
                </div>
              ))}
            </div>

            {/* Mini chart bars */}
            <div className="mb-4 rounded-xl border border-white/8 bg-white/4 p-4">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30">
                {active.label === 'PM' ? 'RRC Establishment Attempts' :
                 active.label === 'FM' ? 'Alarm History' :
                 active.label === 'CM' ? 'Config Change Timeline' : 'NE Onboarding Status'}
              </p>
              <div className="flex items-end gap-1.5 h-[52px]">
                {[28, 42, 35, 55, 48, 62, 44, 58, 38, 50, 66, 45].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                    style={{ height: `${h}%`, background: `${active.color}${i === 10 ? 'cc' : '55'}` }} />
                ))}
              </div>
            </div>

            {/* Status row */}
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 6px #22c55e' }} />
              <span className="text-[10px] text-white/40">Platform operational · Vendor: AWTG RAN · O-RAN compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// -- Core modules data ---------------------------------------------------------
const coreModules = [
  {
    abbr: 'SMO',
    icon: faLayerGroup,
    title: 'Service Management & Orchestration',
    color: '#228DC1',
    capabilities: [
      'O-RAN O1 integration',
      'NETCONF/YANG management',
      'Telemetry and event collection',
      'NE onboarding and middleware collection',
      'Northbound APIs and NonRT RIC integration',
    ],
  },
  {
    abbr: 'PM',
    icon: faChartLine,
    title: 'Performance Management',
    color: '#059669',
    capabilities: [
      'KPI monitoring and dashboards',
      'Trend analysis and degradation detection',
      'KPI alerts and threshold management',
      'Reporting and data exports',
      'SLA and service quality visibility',
    ],
  },
  {
    abbr: 'CM',
    icon: faCodeBranch,
    title: 'Configuration Management',
    color: '#7c3aed',
    capabilities: [
      'YANG schema management',
      'Configuration viewing and comparison',
      'Change monitoring and history',
      'Consistency checks and golden templates',
      'Controlled configuration updates',
    ],
  },
  {
    abbr: 'FM',
    icon: faTriangleExclamation,
    title: 'Fault Management',
    color: '#d97706',
    capabilities: [
      'Active alarms and alarm history',
      'Acknowledgement and clearing workflows',
      'Alarm filtering and classification',
      'Custom platform alarms',
      'Fault correlation across modules',
    ],
  },
]

// -- Differentiators ----------------------------------------------------------
const differentiators = [
  {
    icon: faLayerGroup,
    label: 'More than SMO',
    title: 'Assurance beyond orchestration.',
    desc: 'SCAP includes SMO but also provides performance monitoring, fault management and configuration governance in one integrated platform.',
    color: '#228DC1',
  },
  {
    icon: faArrowsRotate,
    label: 'Built around correlation',
    title: 'Relationships, not just data.',
    desc: 'SCAP helps operators understand the relationships between configuration changes, performance degradation and faults — not just surface individual signals.',
    color: '#059669',
  },
  {
    icon: faGaugeHigh,
    label: 'Operationally focused',
    title: 'Designed for the people who run networks.',
    desc: 'SCAP is built for engineers, network operators, system integrators and service assurance teams who need actionable insight every day.',
    color: '#7c3aed',
  },
  {
    icon: faCubes,
    label: 'Multi-vendor ready',
    title: 'Standards-based, vendor-flexible.',
    desc: 'SCAP supports standards-based integration while remaining flexible for vendor-specific and legacy systems as requirements evolve.',
    color: '#d97706',
  },
]

// -- Benefits -----------------------------------------------------------------
const benefits = [
  { icon: faLayerGroup,      title: 'Unified SMO, PM, CM and FM',              desc: 'One platform replaces fragmented point tools with integrated assurance, orchestration and fault management.' },
  { icon: faCubes,           title: 'Flexible multi-vendor integration',         desc: 'Connects equipment and network functions from different suppliers through standards-based and extensible adapters.' },
  { icon: faShieldHalved,    title: 'Reduced operational risk',                  desc: 'Configuration governance, change monitoring and correlation reduce the risk of undetected faults and misconfigurations.' },
  { icon: faChartLine,       title: 'Improved KPI visibility',                   desc: 'Real-time performance dashboards with SLA tracking and degradation detection keep service quality visible.' },
  { icon: faNetworkWired,    title: 'Standards-based interoperability',           desc: 'O-RAN O1, NETCONF/YANG, VES, SNMP, REST APIs, Kafka and file-based PM collection all supported.' },
  { icon: faFilter,          title: 'Fault correlation at scale',                 desc: 'Cross-domain correlation links alarms to configuration changes and performance events to accelerate root-cause analysis.' },
]

// -- Integration protocols ----------------------------------------------------
const protocols = [
  'O-RAN O1', 'NETCONF/YANG', 'VES', 'SNMP', 'REST APIs', 'Kafka', 'File-based PM',
]

const vendors = [
  { name: 'LimeNet',         color: '#228DC1' },
  { name: 'SOLiD DAS',       color: '#059669' },
  { name: 'AWTG O-RAN CU/DU', color: '#7c3aed' },
  { name: 'Benetel RU',      color: '#d97706' },
]

// -- Use cases ----------------------------------------------------------------
const useCases = [
  { icon: faServer,          title: 'Mobile Network Operators',   desc: 'Unified assurance and orchestration for O-RAN and multi-vendor RAN environments with full SMO and PM capability.' },
  { icon: faNetworkWired,    title: 'Private Network Providers',  desc: 'End-to-end visibility, fault management and configuration governance for private 5G deployments.' },
  { icon: faShieldHalved,    title: 'Neutral Host Networks',      desc: 'Multi-tenant network management with vendor-agnostic integration and service-level assurance.' },
  { icon: faCubes,           title: 'System Integrators',         desc: 'A flexible platform layer that connects equipment, software and operational workflows across complex multi-vendor programmes.' },
  { icon: faEye,             title: 'Enterprise Telecom',         desc: 'Network operations modernisation through automation, assurance and orchestration for enterprise telecom environments.' },
]

// -- Section header helper ----------------------------------------------------
function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 className="font-heading mb-5 text-[#0a1628]">{title}</h2>
      <p className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/60">{desc}</p>
    </div>
  )
}

// -- Main page ----------------------------------------------------------------
export default function ServicesEngineeringPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [modulesRef, modulesInView] = useInView(0.08)
  const [diffRef,    diffInView]    = useInView(0.08)
  const [mvRef,      mvInView]      = useInView(0.08)
  const [benefitsRef, benefitsInView] = useInView(0.08)
  const [ucRef,      ucInView]      = useInView(0.08)

  return (
    <>
      <ScrollProgress />
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName="SCAP"
        title="See SCAP in action"
        description="Request a demo to see how SCAP unifies SMO, PM, CM and FM for your multi-vendor network environment."
        logoSrc="/logo-icon.svg"
        accentColor="#228DC1"
        outcomes={[
          'A walkthrough of SMO, PM, CM and FM modules in your context',
          'Live correlation demo across configuration changes and faults',
          'Multi-vendor integration discussion for your specific equipment',
          'A practical pilot path for your network environment',
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #07111f 0%, #0d1c31 55%, #0a1628 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(34,141,193,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 68% 38%, rgba(34,141,193,0.18) 0, transparent 55%)' }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[1fr_1.1fr] lg:px-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#228DC1]/30 bg-[#228DC1]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#228DC1]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#228DC1]">Network Management Platform</span>
            </div>
            <h1 className="font-serif-display mb-3 leading-[1.02] text-white" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              SCAP
            </h1>
            <p className="mb-3 text-[16px] font-medium text-white/55">
              Service Correlation Assurance Platform
            </p>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.78] text-white/65">
              A multi-vendor network management and service assurance platform for telecom, private 5G, Open RAN and hybrid network environments. Combines SMO, PM, CM and FM in one integrated platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#1a6e99] hover:-translate-y-0.5"
                style={{ boxShadow: '0 6px 24px rgba(34,141,193,0.35)' }}
              >
                Request a Demo
              </button>
              <a href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white hover:-translate-y-0.5">
                Talk to an engineer
              </a>
            </div>
            {/* Protocol chips */}
            <div className="mt-10 flex flex-wrap gap-2">
              {protocols.map(p => (
                <span key={p} className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-semibold text-white/50">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ScapDashboardVisual />
          </div>
        </div>
      </section>

      {/* ── CORE MODULES ──────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div ref={modulesRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(modulesInView, 0)}>
            <SectionHeader
              title="Four integrated modules, one platform"
              desc="SCAP combines SMO, PM, CM and FM into one unified platform — helping operators monitor network health, manage configuration, detect service-impacting issues and automate operational workflows."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreModules.map((mod, i) => (
              <div
                key={mod.abbr}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(10,22,40,0.10)]"
                style={reveal(modulesInView, i * 80)}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: `${mod.color}14` }}>
                    <FontAwesomeIcon icon={mod.icon} className="h-5 w-5" style={{ color: mod.color }} />
                  </div>
                  <span className="text-[22px] font-black tracking-tight" style={{ color: mod.color }}>{mod.abbr}</span>
                </div>
                <h3 className="mb-4 text-[15px] font-semibold leading-[1.35] text-[#0a1628]">{mod.title}</h3>
                <div className="mt-auto space-y-2.5 border-t border-gray-100 pt-5">
                  {mod.capabilities.map(cap => (
                    <div key={cap} className="flex items-start gap-2.5">
                      <FontAwesomeIcon icon={faCircleCheck} className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: mod.color }} />
                      <span className="text-[13px] leading-snug text-[#0a1628]/65">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MULTI-VENDOR NETWORKS ─────────────────────────────────────────── */}
      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div ref={mvRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <div style={reveal(mvInView, 0)}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#228DC1]">Integration</p>
              <h2 className="font-heading mb-6 text-white">Built for real-world multi-vendor environments.</h2>
              <p className="mb-8 text-[16px] font-normal leading-[1.78] text-white/60">
                SCAP integrates equipment, systems and network functions from different suppliers through standards-based interfaces and extensible adapters. Support for new vendors can be implemented and added as network requirements evolve.
              </p>
              <div className="mb-8">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">Supported interfaces</p>
                <div className="flex flex-wrap gap-2">
                  {protocols.map(p => (
                    <span key={p} className="rounded-full border border-[#228DC1]/30 bg-[#228DC1]/10 px-3.5 py-1.5 text-[12px] font-semibold text-[#228DC1]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={reveal(mvInView, 160)}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">Example integrated vendors</p>
              <div className="grid grid-cols-2 gap-3">
                {vendors.map((v) => (
                  <div key={v.name}
                    className="rounded-xl border border-white/8 bg-white/5 p-5 transition-all hover:bg-white/8">
                    <div className="mb-3 h-2 w-8 rounded-full" style={{ background: v.color }} />
                    <p className="text-[14px] font-semibold text-white">{v.name}</p>
                    <p className="mt-1 text-[12px] text-white/40">Integrated vendor</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[13px] text-white/35">
                Additional vendor support can be implemented and added as your network requirements evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SCAP IS DIFFERENT ─────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-[#f8fafc] py-24">
        <div ref={diffRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(diffInView, 0)}>
            <SectionHeader
              title="Why SCAP is different"
              desc="SCAP was built to address the gaps that traditional SMO and element management tools leave — correlation, operational focus and genuine multi-vendor flexibility."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <div
                key={d.label}
                className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,22,40,0.09)]"
                style={reveal(diffInView, i * 80)}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: `${d.color}12`, border: `1px solid ${d.color}20` }}>
                  <FontAwesomeIcon icon={d.icon} className="h-5 w-5" style={{ color: d.color }} />
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: d.color }}>{d.label}</p>
                  <h3 className="mb-3 text-[17px] font-semibold leading-[1.3] text-[#0a1628]">{d.title}</h3>
                  <p className="text-[14px] font-normal leading-[1.75] text-[#0a1628]/60">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ──────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div ref={benefitsRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(benefitsInView, 0)}>
            <SectionHeader
              title="Key benefits"
              desc="SCAP delivers measurable operational improvements for network teams managing complex, multi-vendor telecom environments."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(10,22,40,0.08)]"
                style={reveal(benefitsInView, i * 60)}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#228DC1]/10">
                  <FontAwesomeIcon icon={b.icon} className="h-4 w-4 text-[#228DC1]" />
                </div>
                <h3 className="mb-2 text-[14px] font-semibold text-[#0a1628]">{b.title}</h3>
                <p className="text-[13px] font-normal leading-[1.72] text-[#0a1628]/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGNED FOR ──────────────────────────────────────────────────── */}
      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div ref={ucRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(ucInView, 0)}>
            <div className="mb-14 max-w-3xl">
              <h2 className="font-heading mb-5 text-white">Designed for modern telecom use cases</h2>
              <p className="text-[16px] font-normal leading-[1.75] text-white/60">
                SCAP is suitable for organisations seeking to modernise network operations through automation, assurance and orchestration.
              </p>
            </div>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="min-h-[240px] bg-[#0d1c31] p-7 transition-colors hover:bg-[#10243d]"
                style={reveal(ucInView, i * 60)}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#228DC1]/15">
                  <FontAwesomeIcon icon={uc.icon} className="h-4 w-4 text-[#7ac4e0]" />
                </div>
                <h3 className="mb-3 text-[14px] font-semibold leading-[1.3] text-white">{uc.title}</h3>
                <p className="text-[13px] font-normal leading-[1.72] text-white/50">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to simplify network operations?"
        subtitle="Request a demo or contact us to discuss SCAP integration for your telecom or private network environment."
        primaryLabel="Request a Demo"
        primaryOnClick={() => setIsDemoOpen(true)}
      />
    </>
  )
}
