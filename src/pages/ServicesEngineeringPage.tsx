import React, { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine, faCircleCheck, faLayerGroup, faServer,
  faTriangleExclamation, faShieldHalved, faNetworkWired,
  faCubes, faEye, faGaugeHigh, faCodeBranch,
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

// -- SCAP KPI Dashboard Visual (mirrors real SCAP UI) -------------------------
function ScapDashboardVisual() {
  const [mounted, setMounted] = useState(false)
  const [scanIdx, setScanIdx] = useState(0)
  const [refreshSeed, setRefreshSeed] = useState(0)
  const linePathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(800)

  // Real data from actual SCAP platform
  const barBase  = [185, 10, 5, 5, 5, 5, 5, 20, 125, 115, 250, 430, 20, 80, 65, 20]
  const lineBase = [81, 76, 63, 64, 78, 77, 65, 65, 65, 65, 90, 38, 72, 72, 82, 50]
  const dates    = ['22/05','23/05','24/05','25/05','26/05','27/05','28/05','29/05',
                    '30/05','31/05','01/06','02/06','03/06','04/06','05/06','06/06']

  // Slight jitter on each refresh to simulate live data
  const jitter = (v: number, pct = 0.06) => Math.round(v * (1 + (Math.random() * 2 - 1) * pct))
  const barValues  = barBase.map(v => (refreshSeed === 0 ? v : jitter(v)))
  const lineValues = lineBase.map(v => (refreshSeed === 0 ? v : Math.min(100, Math.max(5, jitter(v, 0.04)))))

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (linePathRef.current) setPathLength(linePathRef.current.getTotalLength())
  }, [mounted])

  // Scanning highlight across charts
  useEffect(() => {
    const id = setInterval(() => setScanIdx(i => (i + 1) % barValues.length), 380)
    return () => clearInterval(id)
  }, [barValues.length])

  // Periodic data refresh
  useEffect(() => {
    const id = setInterval(() => {
      setMounted(false)
      setTimeout(() => { setRefreshSeed(s => s + 1); setMounted(true) }, 120)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  const CW = 200, CH = 86
  const maxBar = 430
  const bw = CW / barValues.length - 1.2

  const linePath = lineValues.map((v, i) => {
    const x = (i / (lineValues.length - 1)) * CW
    const y = CH - (v / 100) * CH
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')

  const areaPath = `${linePath} L ${CW} ${CH} L 0 ${CH} Z`

  const s: Record<string, React.CSSProperties> = {
    root: { width: '100%', maxWidth: 620, fontFamily: 'system-ui,-apple-system,sans-serif' },
    card: { borderRadius: 14, border: '1px solid rgba(60,60,100,0.10)', background: '#f4f5fb',
            boxShadow: '0 32px 80px rgba(10,22,60,0.18), 0 2px 8px rgba(10,22,60,0.06)', overflow: 'hidden' },
    topbar: { background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex',
              alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', height: 42 },
    body: { display: 'flex' },
    sidebar: { width: 138, background: '#fff', borderRight: '1px solid rgba(0,0,0,0.06)', flexShrink: 0, paddingBottom: 8 },
    charts: { flex: 1, padding: '10px 10px 8px', display: 'flex', gap: 8 },
    chartBox: { flex: 1, background: '#fff', borderRadius: 8, border: '1px solid rgba(60,60,100,0.08)', padding: '9px 9px 7px' },
    statusBar: { background: '#fff', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex',
                 alignItems: 'center', gap: 8, padding: '0 14px', height: 30 },
  }

  return (
    <div style={s.root}>
      <div style={s.card}>

        {/* ── Top bar ── */}
        <div style={s.topbar}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:28, height:28, background:'#3d4d9e', borderRadius:7,
                          display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="0" y="6" width="3" height="7" fill="#fff" opacity="0.65" rx="0.5"/>
                <rect x="4" y="3" width="3" height="10" fill="#fff" rx="0.5"/>
                <rect x="8" y="0" width="3" height="13" fill="#fff" rx="0.5"/>
                <rect x="12" y="4" width="1.5" height="9" fill="#fff" opacity="0.65" rx="0.5"/>
              </svg>
            </div>
            <span style={{ fontSize:13, fontWeight:700, color:'#1a1f3c', letterSpacing:'-0.01em' }}>KPI Dashboard</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:5 }}>
            <span style={{ fontSize:10, color:'#bbb' }}>Vendor</span>
            <span style={{ fontSize:11, fontWeight:700, color:'#3d4d9e', background:'#eef0f8',
                           padding:'2px 9px', borderRadius:5 }}>AWTG RAN</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity:0.45 }}>
              <path d="M2 4l3 3 3-3" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={s.body}>

          {/* Sidebar */}
          <div style={s.sidebar}>
            <div style={{ padding:'9px 12px 5px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <span style={{ fontSize:8, fontWeight:800, color:'#ccc', letterSpacing:'0.13em', textTransform:'uppercase' }}>Admin Panel</span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ opacity:0.35 }}>
                <path d="M1 3h9M1 7h9" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Settings row */}
            <div style={{ padding:'5px 12px', display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer' }}>
              <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                <FontAwesomeIcon icon={faServer} style={{ fontSize:9, color:'#aaa' }} />
                <span style={{ fontSize:10, fontWeight:500, color:'#999' }}>Settings</span>
              </div>
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ opacity:0.4 }}>
                <path d="M2 4l2.5 2.5L7 4" stroke="#666" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Performance Management */}
            <div>
              <div style={{ padding:'6px 12px 4px', display:'flex', alignItems:'center',
                            justifyContent:'space-between', cursor:'pointer' }}>
                <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <FontAwesomeIcon icon={faChartLine} style={{ fontSize:9, color:'#3d4d9e' }} />
                  <span style={{ fontSize:10, fontWeight:700, color:'#1a1f3c' }}>Performance Management</span>
                </div>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M2 3.5l2.5 2.5L7 3.5" stroke="#555" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              {[
                { label:'KPI Dashboard',   active:true  },
                { label:'KPI Thresholds',  active:false },
                { label:'KPI Alerts',      active:false },
              ].map(item => (
                <div key={item.label} style={{
                  padding:'4px 12px 4px 26px',
                  background: item.active ? '#eef0f8' : 'transparent',
                  borderLeft: item.active ? '2px solid #3d4d9e' : '2px solid transparent',
                  cursor:'pointer',
                }}>
                  <span style={{ fontSize:10, color: item.active ? '#3d4d9e' : '#999',
                                 fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Other nav sections */}
            <div style={{ marginTop:4 }}>
              {[
                { icon: faTriangleExclamation, label:'Fault Management' },
                { icon: faCodeBranch,          label:'Configuration Management' },
                { icon: faNetworkWired,        label:'SMO' },
              ].map(({ icon, label }) => (
                <div key={label} style={{ padding:'6px 12px', display:'flex', alignItems:'center',
                                          justifyContent:'space-between', cursor:'pointer' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                    <FontAwesomeIcon icon={icon} style={{ fontSize:9, color:'#bbb' }} />
                    <span style={{ fontSize:10, fontWeight:500, color:'#aaa' }}>{label}</span>
                  </div>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ opacity:0.35 }}>
                    <path d="M2 4l2.5 2.5L7 4" stroke="#666" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Charts */}
          <div style={s.charts}>

            {/* ── Bar chart: DRB Establishment Attempts ── */}
            <div style={s.chartBox}>
              <div style={{ fontSize:10, fontWeight:700, color:'#1a1f3c', marginBottom:7, lineHeight:1.3 }}>
                DRB Establishment Attempts
              </div>
              <svg viewBox={`0 0 ${CW} ${CH}`} style={{ display:'block', width:'100%', height:CH }}>
                {[0,0.25,0.5,0.75,1].map(p => (
                  <line key={p} x1="0" y1={CH - p*CH} x2={CW} y2={CH - p*CH}
                    stroke="rgba(0,0,0,0.05)" strokeWidth="0.7" />
                ))}
                {barValues.map((v, i) => {
                  const h = mounted ? (v / maxBar) * CH : 0
                  const x = i * (CW / barValues.length) + 0.5
                  const active = scanIdx === i
                  return (
                    <rect key={i} x={x} y={CH - h} width={bw} height={Math.max(0, h)}
                      fill={active ? '#5569d4' : '#3d4d9e'} opacity={active ? 1 : 0.72}
                      style={{ transition:'y 0.9s cubic-bezier(0.34,1.56,0.64,1), height 0.9s cubic-bezier(0.34,1.56,0.64,1)' }}
                    />
                  )
                })}
              </svg>
              <div style={{ display:'flex', justifyContent:'space-between', marginTop:4 }}>
                {[0,4,8,11,15].map(i => (
                  <span key={i} style={{ fontSize:7, color:'#ccc' }}>{dates[i]}</span>
                ))}
              </div>
            </div>

            {/* ── Line chart: Total Accessibility Success Rate ── */}
            <div style={s.chartBox}>
              <div style={{ fontSize:10, fontWeight:700, color:'#1a1f3c', marginBottom:7, lineHeight:1.3 }}>
                Total Accessibility Success Rate
              </div>
              <svg viewBox={`0 0 ${CW} ${CH}`} style={{ display:'block', width:'100%', height:CH }}>
                {[0,0.25,0.5,0.75,1].map(p => (
                  <line key={p} x1="0" y1={CH - p*CH} x2={CW} y2={CH - p*CH}
                    stroke="rgba(0,0,0,0.05)" strokeWidth="0.7" />
                ))}
                {/* Area */}
                <path d={areaPath} fill="#3d4d9e" opacity={mounted ? 0.07 : 0}
                  style={{ transition:'opacity 0.6s ease' }} />
                {/* Line with draw animation */}
                <path
                  ref={linePathRef}
                  d={linePath}
                  fill="none" stroke="#3d4d9e" strokeWidth="1.5"
                  strokeLinejoin="round" strokeLinecap="round"
                  strokeDasharray={pathLength}
                  strokeDashoffset={mounted ? 0 : pathLength}
                  style={{ transition:'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }}
                />
                {/* Data points */}
                {lineValues.map((v, i) => {
                  const x = (i / (lineValues.length - 1)) * CW
                  const y = CH - (v / 100) * CH
                  const active = scanIdx % lineValues.length === i
                  return (
                    <circle key={i} cx={x} cy={y}
                      r={active ? 3 : (mounted ? 1.5 : 0)}
                      fill={active ? '#5569d4' : '#3d4d9e'}
                      style={{ transition:'r 0.25s ease' }}
                    />
                  )
                })}
              </svg>
              <div style={{ display:'flex', justifyContent:'space-between', marginTop:4 }}>
                {[0,4,8,11,15].map(i => (
                  <span key={i} style={{ fontSize:7, color:'#ccc' }}>{dates[i]}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Status bar ── */}
        <div style={s.statusBar}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e',
                        boxShadow:'0 0 5px #22c55e', flexShrink:0 }} />
          <span style={{ fontSize:9, color:'#bbb' }}>
            Platform operational · 5G O-RAN · AWTG RAN · Data refreshed just now
          </span>
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
      <section className="relative overflow-hidden pt-32 pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(34,141,193,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 40%, rgba(34,141,193,0.07) 0, transparent 55%)' }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[1fr_1.1fr] lg:px-12">
          <div>
            <h1 className="font-serif-display mb-3 leading-[1.02] text-[#0a1628]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              SCAP
            </h1>
            <p className="mb-3 text-[16px] font-medium text-[#0a1628]/55">
              Service Correlation Assurance Platform
            </p>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              A multi-vendor network management and service assurance platform for telecom, private 5G, Open RAN and hybrid network environments. Combines SMO, PM, CM and FM in one integrated platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#1a6e99] hover:-translate-y-0.5"
                style={{ boxShadow: '0 6px 24px rgba(34,141,193,0.28)' }}
              >
                Request a Demo
              </button>
              <a href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-7 py-3.5 text-[14px] font-semibold text-[#0a1628]/70 transition-all hover:border-gray-300 hover:text-[#0a1628] hover:-translate-y-0.5">
                Talk to an engineer
              </a>
            </div>
            {/* Protocol chips */}
            <div className="mt-10 flex flex-wrap gap-2">
              {protocols.map(p => (
                <span key={p} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold text-[#0a1628]/50">
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
              <h2 className="font-heading mb-6 text-white">Built for real-world multi-vendor environments.</h2>
              <p className="mb-8 text-[16px] font-normal leading-[1.78] text-white/60">
                SCAP integrates equipment, systems and network functions from different suppliers through standards-based interfaces and extensible adapters. Support for new vendors can be implemented and added as network requirements evolve.
              </p>
              <div className="mb-8">
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
