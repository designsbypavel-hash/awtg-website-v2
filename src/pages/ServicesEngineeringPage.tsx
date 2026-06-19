import React, { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine, faLayerGroup, faServer,
  faTriangleExclamation, faNetworkWired,
  faCubes, faGaugeHigh, faCodeBranch,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'
import VisualInsightCard from '@/components/VisualInsightCard'
import scapScreen1 from '@/assets/SCAP/screen-1.png'
import scapScreen2 from '@/assets/SCAP/screen-2.png'
import scapIsometric from '@/assets/SCAP/scap-isometric.png'
import scapModule1 from '@/assets/SCAP/cards/module-1.png'
import scapModule2 from '@/assets/SCAP/cards/module-2.png'
import scapModule3 from '@/assets/SCAP/cards/module-3.png'
import scapModule4 from '@/assets/SCAP/cards/module-4.png'

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
            <span style={{ fontSize:11, color:'#666' }}>Vendor</span>
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
              <span style={{ fontSize:11, fontWeight:800, color:'#666', letterSpacing:'0.13em', textTransform:'uppercase' }}>Admin Panel</span>
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
                    <FontAwesomeIcon icon={icon} style={{ fontSize:11, color:'#666' }} />
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
                  <span key={i} style={{ fontSize:11, color:'#666' }}>{dates[i]}</span>
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
                  <span key={i} style={{ fontSize:11, color:'#666' }}>{dates[i]}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Status bar ── */}
        <div style={s.statusBar}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e',
                        boxShadow:'0 0 5px #22c55e', flexShrink:0 }} />
          <span style={{ fontSize:11, color:'#666' }}>
            Platform operational · 5G O-RAN · AWTG RAN · Data refreshed just now
          </span>
        </div>

      </div>
    </div>
  )
}

void ScapDashboardVisual

// -- SCAP hero screen showcase ------------------------------------------------
const SCAP_HERO_SCREENS = [
  { label: 'SCAP network performance dashboard', src: scapScreen1 },
  { label: 'SCAP network operations dashboard', src: scapScreen2 },
]

function ScapHeroShowcase() {
  const [active, setActive] = useState(0)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive(current => (current + 1) % SCAP_HERO_SCREENS.length), 3200)
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
        style={{ background: 'radial-gradient(ellipse at 55% 45%, rgba(34,141,193,0.18) 0, rgba(34,141,193,0.08) 34%, transparent 72%)' }}
      />
      <div style={{ display: 'grid', filter: 'drop-shadow(0 30px 60px rgba(10,22,40,0.20)) drop-shadow(0 8px 20px rgba(10,22,40,0.10))' }}>
        {SCAP_HERO_SCREENS.map((screen, index) => (
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

// -- Core modules data ---------------------------------------------------------
const coreModules = [
  {
    abbr: 'SMO',
    icon: faLayerGroup,
    image: scapModule1,
    title: 'Service Management & Orchestration',
    color: '#228DC1',
    capabilities: [
      'Coordinate service management and orchestration across multi-vendor network environments.',
    ],
  },
  {
    abbr: 'PM',
    icon: faChartLine,
    image: scapModule2,
    title: 'Performance Management',
    color: '#059669',
    capabilities: [
      'Monitor KPIs, trends and service quality across vendors, technologies and sites.',
    ],
  },
  {
    abbr: 'CM',
    icon: faCodeBranch,
    image: scapModule3,
    title: 'Configuration Management',
    color: '#7c3aed',
    capabilities: [
      'Manage network configuration changes, parameters and operational settings with better control.',
    ],
  },
  {
    abbr: 'FM',
    icon: faTriangleExclamation,
    image: scapModule4,
    title: 'Fault Management',
    color: '#d97706',
    capabilities: [
      'Detect, prioritise and manage alarms before they become wider service issues.',
    ],
  },
]

// -- Differentiators ----------------------------------------------------------
const differentiators = [
  {
    icon: faLayerGroup,
    label: 'More than SMO',
    title: 'Assurance beyond orchestration.',
    desc: 'SCAP combines SMO with performance, fault and configuration management, giving teams a broader view of network health and service impact.',
    color: '#228DC1',
  },
  {
    icon: faArrowsRotate,
    label: 'Built around correlation',
    title: 'Operational correlation',
    desc: 'SCAP helps teams connect configuration changes, KPI degradation and fault events, making it easier to understand what changed, what failed and what needs attention.',
    color: '#059669',
  },
  {
    icon: faGaugeHigh,
    label: 'Operationally focused',
    title: 'Built for network operations teams',
    desc: 'SCAP is designed for engineers, operators, system integrators and service assurance teams who need practical, actionable network insight.',
    color: '#7c3aed',
  },
  {
    icon: faCubes,
    label: 'Multi-vendor ready',
    title: 'Standards-based and vendor-flexible',
    desc: 'SCAP supports standards-based integration while allowing vendor-specific and legacy systems to be connected as requirements evolve.',
    color: '#d97706',
  },
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
  { image: '/images/insights/mobile-networks.jpg', eyebrow: 'Operators', title: 'Mobile Network Operators',   desc: 'Unified assurance and orchestration for O-RAN and multi-vendor RAN environments with full SMO and PM capability.' },
  { image: '/images/insights/private-networks.jpg', eyebrow: 'Private 5G', title: 'Private Network Providers',  desc: 'End-to-end visibility, fault management and configuration governance for private 5G deployments.' },
  { image: '/images/insights/telecom-tower.jpg', eyebrow: 'Neutral host', title: 'Neutral Host Networks',      desc: 'Multi-tenant network management with vendor-agnostic integration and service-level assurance.' },
  { image: '/images/insights/engineering-team.jpg', eyebrow: 'Delivery', title: 'System Integrators',         desc: 'A flexible platform layer that connects equipment, software and operational workflows across complex multi-vendor programmes.' },
  { image: '/images/insights/data-centre.jpg', eyebrow: 'Enterprise', title: 'Enterprise Telecom',         desc: 'Network operations modernisation through automation, assurance and orchestration for enterprise telecom environments.' },
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
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

        {/* Diagonal dot-grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="scapGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#scapGrid)" />
          </svg>
        </div>

        {/* Diagonal connecting lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.10 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="scapLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#scapLines)" />
          </svg>
        </div>

        {/* Decorative + crosses */}
        {[{ top:'18%', left:'5%' }, { top:'55%', left:'3%' }, { top:'75%', left:'8%' }, { top:'32%', left:'44%' }].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none select-none text-[#228DC1]"
            style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.30, fontWeight: 300, lineHeight: 1 }}>+</div>
        ))}

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 35%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative mx-auto max-w-[1320px] px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="font-serif-display mb-3 leading-[1.02] text-[#0a1628]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              SCAP
            </h1>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.7] text-[#0a1628]/60">
              SCAP unifies performance, configuration, fault and service management across multi-vendor 5G, private network, Open RAN and hybrid environments. Teams gain one operational view of network health, changes and service impact.
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
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ScapHeroShowcase />
          </div>
          </div>
        </div>
      </section>

      {/* ── CORE MODULES ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div ref={diffRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(diffInView, 0)} className="mb-14 max-w-3xl">
            <h2 className="font-heading text-[#0a1628] mb-5">Why SCAP is different</h2>
            <p className="text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              SCAP is designed to close the operational gaps left by traditional SMO and element management tools. It brings orchestration, performance monitoring, configuration management and fault management into one multi-vendor platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-stretch">
            <div style={{ ...reveal(diffInView, 80), position: 'relative', borderRadius: 20, overflow: 'hidden', height: 480 }}>
              <img
                src={scapIsometric}
                alt="SCAP integrated network operations platform"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="flex h-full flex-col justify-between gap-8 lg:h-[480px] lg:gap-0">
              {differentiators.map((d, i) => (
                <div
                  key={d.label}
                  className="group flex gap-5"
                  style={reveal(diffInView, 120 + i * 80)}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center"
                  >
                    <FontAwesomeIcon icon={d.icon} className="h-4 w-4" style={{ color: d.color }} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-[15px] font-semibold leading-[1.3] text-[#0a1628]">{d.title}</h3>
                    <p className="text-[13px] font-normal leading-[1.7] text-[#0a1628]/60">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div ref={modulesRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(modulesInView, 0)}>
            <SectionHeader
              title="Manage network operations from one platform"
              desc="SCAP brings together the core operational modules needed to monitor, manage and assure modern telecom networks. From performance dashboards to fault alerts and configuration workflows, teams can work from the same operational view and respond faster to service impacting issues."
            />
          </div>
          <div className="space-y-16 lg:space-y-24">
            {coreModules.map((mod, i) => (
              <article
                key={mod.abbr}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                style={reveal(modulesInView, i * 80)}
              >
                <div className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <img
                    src={mod.image}
                    alt={`${mod.title} interface`}
                    className="block w-full rounded-[20px]"
                  />
                </div>

                <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <p
                    className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: mod.color }}
                  >
                    {mod.abbr}
                  </p>
                  <h3 className="font-heading mb-5 text-[#0a1628]">{mod.title}</h3>
                  <div className="border-t border-[#0a1628]/10 pt-6">
                    {mod.capabilities.map(cap => (
                      <p key={cap} className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/65">
                        {cap}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MULTI-VENDOR NETWORKS ─────────────────────────────────────────── */}
      <section className="bg-[#0a1628] py-24">
        <div ref={mvRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <div style={reveal(mvInView, 0)}>
              <h2 className="font-heading mb-6 text-white">Built for multi-vendor network environments.</h2>
              <p className="mb-8 text-[16px] font-normal leading-[1.78] text-white/60">
                SCAP connects network equipment, systems and functions from different suppliers through standards-based interfaces and adaptable integration layers. It helps operators bring vendor data into one operational view, while allowing new integrations to be added as network requirements evolve.
              </p>
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {protocols.map(p => (
                    <span key={p} className="rounded-full border border-[#1a7aab]/30 bg-[#1a7aab]/10 px-3.5 py-1.5 text-[12px] font-semibold text-[#1a7aab]">
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

      {/* ── DESIGNED FOR ──────────────────────────────────────────────────── */}
      <section className="bg-[#0a1628] py-24">
        <div ref={ucRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(ucInView, 0)}>
            <div className="mb-14 max-w-3xl">
              <h2 className="font-heading mb-5 text-white">Designed for modern telecom use cases</h2>
              <p className="text-[16px] font-normal leading-[1.75] text-white/60">
                SCAP is suitable for organisations seeking to modernise network operations through automation, assurance and orchestration.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((uc, i) => (
              <VisualInsightCard
                key={uc.title}
                dark
                accent="#7ac4e0"
                eyebrow={uc.eyebrow}
                title={uc.title}
                description={uc.desc}
                image={uc.image}
                style={reveal(ucInView, i * 60)}
              />
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
