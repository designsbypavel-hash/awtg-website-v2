import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Polygon, useMap } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faChartBar, faLayerGroup, faBullseye } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import VisualInsightCard from '@/components/VisualInsightCard'
import ProductDemoModal from '@/components/ProductDemoModal'
import icmapFeatureImage from '@/assets/iCMAP/1.png'
import networkOperatorsImage from '@/assets/iCMAP/use-cases/network-operators.png'
import regulatorsImage from '@/assets/iCMAP/use-cases/regulators-local-authorities.png'
import smartInfrastructureImage from '@/assets/iCMAP/use-cases/smart-infrastructure.png'
import enterpriseEstatesImage from '@/assets/iCMAP/use-cases/enterprise-estates.png'
import idamsIotInfrastructureImage from '@/assets/IDAMS/use-cases/iot-infrastructure.png'
import idamsSmallCellImage from '@/assets/IDAMS/use-cases/5g-small-cell.png'
import idamsLandPropertyImage from '@/assets/IDAMS/use-cases/land-property.png'
import idamsApprovalsImage from '@/assets/IDAMS/use-cases/multi-stakeholder-approvals.png'
import 'leaflet/dist/leaflet.css'
import type { LatLngExpression } from 'leaflet'

// -- Coverage zone data --------------------------------------------------------
type CoverageType = '5g' | '4g' | '3g' | 'gap'

interface CoverageZone {
  id: string
  type: CoverageType
  label: string
  positions: LatLngExpression[]
  signal: string
  population: string
  operator: string
}

const coverageZones: CoverageZone[] = [
  // 5G inner ring � inner Manchester suburbs
  {
    id: 'z2', type: '5g', label: '5G',
    signal: '-85 dBm', population: '15,600 residents', operator: 'EE / Vodafone / O2',
    positions: [
      [53.540, -2.350], [53.548, -2.200], [53.542, -2.110],
      [53.510, -2.065], [53.465, -2.058], [53.428, -2.095],
      [53.405, -2.200], [53.412, -2.345], [53.448, -2.405],
      [53.498, -2.408],
    ],
  },
  // 4G Greater Manchester ring
  {
    id: 'z3', type: '4g', label: '4G',
    signal: '-95 dBm', population: '8,100 residents', operator: 'EE / Three / O2',
    positions: [
      [53.610, -2.470], [53.625, -2.090], [53.580, -1.930],
      [53.495, -1.880], [53.395, -1.950], [53.340, -2.110],
      [53.358, -2.440], [53.432, -2.580], [53.540, -2.580],
    ],
  },
  // 3G � Wigan area
  {
    id: 'z4', type: '3g', label: '3G',
    signal: '-105 dBm', population: '2,400 residents', operator: 'Three only',
    positions: [
      [53.578, -2.660], [53.560, -2.560], [53.520, -2.555],
      [53.505, -2.640], [53.530, -2.710],
    ],
  },
  // 3G � Oldham / east side
  {
    id: 'z5', type: '3g', label: '3G',
    signal: '-108 dBm', population: '3,100 residents', operator: 'O2 only',
    positions: [
      [53.558, -2.060], [53.575, -1.990], [53.558, -1.930],
      [53.530, -1.920], [53.520, -1.990], [53.535, -2.060],
    ],
  },
  // Gap � Pennines east
  {
    id: 'z6', type: 'gap', label: 'No Coverage',
    signal: 'No signal', population: 'Underserved area', operator: 'None',
    positions: [
      [53.520, -1.840], [53.545, -1.760], [53.510, -1.720],
      [53.475, -1.750], [53.470, -1.840], [53.495, -1.880],
    ],
  },
  // Gap � rural north Lancashire
  {
    id: 'z7', type: 'gap', label: 'No Coverage',
    signal: 'No signal', population: 'Underserved area', operator: 'None',
    positions: [
      [53.648, -2.500], [53.670, -2.380], [53.648, -2.310],
      [53.620, -2.320], [53.612, -2.450],
    ],
  },
]

const zoneStyle: Record<CoverageType, { fill: string; stroke: string; label: string; textColor: string }> = {
  'gap':     { fill: '#ef4444', stroke: '#dc2626', label: 'No Coverage', textColor: '#ef4444' },
  '3g':      { fill: '#f59e0b', stroke: '#d97706', label: '3G',          textColor: '#d97706' },
  '4g':      { fill: '#7c3aed', stroke: '#6d28d9', label: '4G',          textColor: '#7c3aed' },
  '5g':      { fill: '#3b82f6', stroke: '#228DC1', label: '5G',          textColor: '#228DC1' },
}

// Fit map to UK North bounds
function MapFit() {
  const map = useMap()
  map.fitBounds([[53.300, -2.700], [53.700, -1.700]], { padding: [20, 20] })
  return null
}

// -- Coverage map component ----------------------------------------------------
function CoverageMap() {
  const [activeLayer, setActiveLayer] = useState<string>('all')
  const [selected, setSelected] = useState<CoverageZone | null>(null)

  const isVisible = (type: CoverageType) => {
    if (activeLayer === 'all') return true
    if (activeLayer === '5g') return type === '5g'
    if (activeLayer === '4g') return type === '4g'
    if (activeLayer === '3g') return type === '3g'
    if (activeLayer === 'gaps') return type === 'gap'
    return true
  }

  const layerButtons = [
    { key: 'all',  label: 'All Layers' },
    { key: '5g',   label: '5G' },
    { key: '4g',   label: '4G' },
    { key: '3g',   label: '3G' },
    { key: 'gaps', label: 'Gaps' },
  ]

  const summaryBars = [
    { label: '5G',  pct: 22, color: '#3b82f6' },
    { label: '4G',  pct: 34, color: '#7c3aed' },
    { label: '3G',  pct: 22, color: '#f59e0b' },
    { label: 'Gap', pct: 22, color: '#ef4444' },
  ]

  return (
    <div className="overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-[0_8px_48px_rgba(10,22,40,0.1)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f3f4f6] border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#fc5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 flex justify-center">
          <div className="bg-white border border-gray-200 px-3 py-1 text-[14px] text-gray-400" style={{ minWidth: '260px', textAlign: 'center' }}>
            app.icmap.awtg.co.uk/coverage/uk north </div>
        </div>
        <span className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#059669]/70">Live</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-[#f8fafc]">
        <div className="flex items-center gap-0.5">
          {layerButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveLayer(btn.key)}
              className={`px-3 py-1.5 text-[14px] font-bold uppercase tracking-[0.12em] transition-colors ${
                activeLayer === btn.key ? 'bg-[#228DC1] text-white' : 'text-[#0a1628]/60 hover:text-[#1a7aab]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-[14px] text-[#0a1628]/60 font-medium">
          <span>Greater Manchester</span>
          <span>Updated: live</span>
        </div>
      </div>

      {/* Map + side panel */}
      <div className="flex divide-x divide-gray-100">
        {/* Leaflet map */}
        <div className="flex-1 relative z-0" style={{ minHeight: '360px' }}>
          <MapContainer
            style={{ height: '360px', width: '100%', zIndex: 0 }}
            center={[53.480, -2.240]}
            zoom={11}
            scrollWheelZoom={false}
            zoomControl={true}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <MapFit />
            {coverageZones.map((zone) => {
              const style = zoneStyle[zone.type]
              const visible = isVisible(zone.type)
              const isSelected = selected?.id === zone.id
              return (
                <Polygon
                  key={zone.id}
                  positions={zone.positions}
                  pathOptions={{
                    fillColor: style.fill,
                    fillOpacity: visible ? (isSelected ? 0.65 : 0.40) : 0.05,
                    color: style.stroke,
                    weight: isSelected ? 2.5 : 1.5,
                    opacity: visible ? 1 : 0.15,
                  }}
                  eventHandlers={{
                    click: () => setSelected(selected?.id === zone.id ? null : zone),
                  }}
                />
              )
            })}
          </MapContainer>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 px-4 py-3 border-t border-gray-100 bg-[#f8fafc]">
            {Object.entries(zoneStyle).map(([k, v]) => (
              <div key={k} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm border" style={{ backgroundColor: v.fill + '66', borderColor: v.stroke }} />
                <span className="text-[14px] font-medium text-[#0a1628]/60">{v.label}</span>
              </div>
            ))}
            <span className="text-[14px] text-[#0a1628]/60 ml-auto">Click a zone for details</span>
          </div>
        </div>

        {/* Side panel */}
        <div className="w-48 shrink-0 bg-[#f8fafc] p-4">
          {selected ? (
            <div key={selected.id} style={{ animation: 'fadeIn 150ms ease-out' }}>
              <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-4">Zone Detail</p>
              <div className="space-y-4">
                <div>
                  <p className="text-[14px] text-gray-400 font-medium mb-0.5">Coverage</p>
                  <p className="text-sm font-black" style={{ color: zoneStyle[selected.type].textColor }}>{selected.label}</p>
                </div>
                <div>
                  <p className="text-[14px] text-gray-400 font-medium mb-0.5">Signal strength</p>
                  <p className="text-[14px] font-semibold text-[#0a1628]">{selected.signal}</p>
                </div>
                <div>
                  <p className="text-[14px] text-gray-400 font-medium mb-0.5">Population</p>
                  <p className="text-[14px] font-semibold text-[#0a1628]">{selected.population}</p>
                </div>
                <div>
                  <p className="text-[14px] text-gray-400 font-medium mb-0.5">Operators</p>
                  <p className="text-[14px] font-medium text-[#0a1628]/70">{selected.operator}</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-6 text-[14px] text-[#0a1628]/60 hover:text-[#0a1628] font-medium transition-colors"
              >
                Clear selection </button>
            </div>
          ) : (
            <>
              <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-4">Coverage Breakdown</p>
              <div className="space-y-3">
                {summaryBars.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[14px] text-gray-500 font-medium">{item.label}</span>
                      <span className="text-[14px] font-bold" style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <div className="h-1 bg-gray-200 overflow-hidden">
                      <div className="h-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-gray-300 mt-5 italic">Click a zone for details</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

void CoverageMap

// -- Use cases -----------------------------------------------------------------
const useCases = [
  {
    label: 'Network operators',
    image: networkOperatorsImage,
    headline: 'Plan, benchmark and optimise live networks.',
    desc: 'Give engineering and planning teams a single map for coverage quality, weak zones and investment priorities.',
    points: [
      'Compare 2G, 3G, 4G and 5G performance',
      'Score gaps by severity, population and terrain',
      'Support upgrade and deployment planning',
    ],
  },
  {
    label: 'Regulators and local authorities',
    image: regulatorsImage,
    headline: 'Turn coverage evidence into public action.',
    desc: 'Track commitments, understand digital exclusion and build a defensible view of where connectivity fails.',
    points: [
      'Visualise underserved communities',
      'Prioritise public investment programmes',
      'Create audit-ready reporting views',
    ],
  },
  {
    label: 'Smart infrastructure teams',
    image: smartInfrastructureImage,
    headline: 'Accelerate connected place programmes.',
    desc: 'Plan connectivity across transport corridors, towns, campuses and infrastructure programmes with geospatial context.',
    points: [
      'Overlay terrain, transport and asset layers',
      'Support smart city and IoT rollout',
      'Model urban, rural and remote coverage',
    ],
  },
  {
    label: 'Enterprise estates',
    image: enterpriseEstatesImage,
    headline: 'Manage private and operational networks.',
    desc: 'Help organisations understand site-level performance across offices, venues, campuses and operational environments.',
    points: [
      'Monitor private wireless and Wi-Fi coverage',
      'Identify local performance issues faster',
      'Inform resilience and capacity decisions',
    ],
  },
]


// -- How it works -------------------------------------------------------------
const steps = [
  {
    num: '01',
    image: idamsIotInfrastructureImage,
    imageAlt: 'Field engineer working beside connected infrastructure equipment',
    imageClassName: 'object-cover object-center',
    color: '#228DC1',
    label: 'Connect network data',
    desc: 'Bring live, historical and field data into one coverage workspace.',
    detailLabel: 'Data sources',
    detail: 'Shape files, bins, heat maps, drive tests, crowdsourced data and open datasets.',
  },
  {
    num: '02',
    image: idamsSmallCellImage,
    imageAlt: '5G small cell installed on urban street infrastructure',
    imageClassName: 'object-cover object-center',
    color: '#3d4d9e',
    label: 'Map coverage in context',
    desc: 'Layer signal, geography, population and infrastructure data together.',
    detailLabel: 'Mapping tools',
    detail: 'Heat maps, shape files and granular local views stay aligned.',
  },
  {
    num: '03',
    image: idamsLandPropertyImage,
    imageAlt: 'Land and property context used for local coverage assessment',
    imageClassName: 'object-cover object-center',
    color: '#059669',
    label: 'Assess weak zones',
    desc: 'Identify underserved areas and rank them by coverage quality, severity and impact.',
    detailLabel: 'Scoring',
    detail: 'Scoring combines coverage quality, terrain and population need.',
  },
  {
    num: '04',
    image: idamsApprovalsImage,
    imageAlt: 'Stakeholders planning infrastructure delivery priorities',
    imageClassName: 'object-cover object-center',
    color: '#d97706',
    label: 'Plan the next action',
    desc: 'Turn coverage intelligence into reports, investment plans and delivery decisions.',
    detailLabel: 'Outputs',
    detail: 'Export-ready formats for planning, regulation and GIS workflows.',
  },
]

// Tablet mockup carousel, cycles through real iCMAP coverage screens (2G/3G/4G/5G)
const ICMAP_HERO_SCREENS = [
  { label: '2G coverage', src: '/images/icmap-screens/2g.png' },
  { label: '3G coverage', src: '/images/icmap-screens/3g.png' },
  { label: '4G coverage', src: '/images/icmap-screens/4g.png' },
  { label: '5G coverage', src: '/images/icmap-screens/5g.png' },
]

function IcmapHeroDemo() {
  const [active, setActive] = useState(0)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % ICMAP_HERO_SCREENS.length), 2800)
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
      <div className="absolute -inset-8 hidden lg:block pointer-events-none" style={{ background: 'radial-gradient(ellipse at 55% 45%, rgba(34,141,193,0.18) 0, rgba(34,141,193,0.08) 34%, transparent 72%)' }} />

      {/* All screens stacked in the same grid cell, preloaded at mount, crossfade with no gap */}
      <div style={{ display: 'grid', filter: 'drop-shadow(0 30px 60px rgba(10,22,40,0.20)) drop-shadow(0 8px 20px rgba(10,22,40,0.10))' }}>
        {ICMAP_HERO_SCREENS.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.label}
            style={{
              gridRow: '1 / 2',
              gridColumn: '1 / 2',
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: active === i ? 1 : 0,
              transition: 'opacity 0.75s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// -- Main page -----------------------------------------------------------------
export default function IcmapPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  return (
    <>
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName="iCMAP"
        title="See iCMAP in action"
        description="Request a demo to see how iCMAP helps you visualise, analyse and act on mobile coverage data across any geographic area."
        logoSrc="/icmap-logo.svg"
        accentColor="#228DC1"
        outcomes={[
          'A walkthrough of coverage mapping and filtering tools',
          'Live demonstration of weak-zone scoring and analysis',
          'Guidance on importing your own network and field data',
          'A practical pilot path for your coverage programme',
        ]}
      />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

        {/* Dot-grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="icmapGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#icmapGrid)" />
          </svg>
        </div>

        {/* Diagonal connecting lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="icmapHeroLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#icmapHeroLines)" />
          </svg>
        </div>

        {/* Decorative + crosses */}
        {[
          { top: '18%', left: '6%' }, { top: '52%', left: '3%' },
          { top: '72%', left: '9%' }, { top: '30%', left: '42%' },
          { top: '62%', left: '38%' },
        ].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none select-none text-[#228DC1]"
            style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.35, fontWeight: 300, lineHeight: 1 }}>+</div>
        ))}

        {/* Decorative diamond */}
        <div className="absolute pointer-events-none" style={{ top: '42%', left: '4.5%', opacity: 0.25 }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="2" width="10" height="10" transform="rotate(45 7 7)" fill="none" stroke="#228DC1" strokeWidth="1.5"/></svg>
        </div>

        {/* Decorative dots */}
        <div className="absolute rounded-full pointer-events-none" style={{ top: '12%', left: '7%', width: 5, height: 5, background: 'rgba(34,141,193,0.3)' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ top: '68%', left: '5%', width: 6, height: 6, background: 'rgba(34,141,193,0.35)' }} />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 35%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative max-w-[1320px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">

            {/* Left: copy */}
            <div>
              <div className="mb-8">
                <img
                  src="/icmap-logo.svg"
                  alt="iCMAP"
                  style={{
                    width: 'clamp(240px, 20vw, 330px)',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.05] mb-6" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
                Coverage intelligence for<br />
                smarter network decisions. </h1>
              <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] max-w-xl mb-10">
                iCMAP helps organisations visualise, analyse and report on mobile network coverage across geographic areas. It brings coverage data, signal information and contextual layers into one map, so teams can identify weak zones, compare technologies and plan where to act next. </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setIsDemoOpen(true)} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold rounded-lg hover:bg-[#1a6e99] transition-colors">
                  Request a Demo </button>
              </div>
            </div>

            {/* Right: animated map demo */}
            <div className="flex items-center justify-center lg:justify-end">
              <IcmapHeroDemo />
            </div>

          </div>
        </div>
      </section>

      {/* -- Feature summary -- */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-stretch">

            {/* Left: product image */}
            <div className="min-h-[320px] lg:min-h-0" style={{ position: 'relative', borderRadius: 20, overflow: 'hidden' }}>
              <img
                src={icmapFeatureImage}
                alt="iCMAP network coverage analysis"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ display: 'none' }}>
              <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                <div style={{ borderRadius: 14, border: '1px solid rgba(255,255,255,0.50)', background: 'rgba(255,255,255,0.95)', padding: '18px 22px', boxShadow: '0 16px 48px rgba(10,22,40,0.18)', backdropFilter: 'blur(12px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ flexShrink: 0 }}>
                      <p style={{ fontSize: 28, fontWeight: 900, lineHeight: 1, color: '#228DC1', margin: 0 }}>3G → 5G</p>
                      <p style={{ marginTop: 4, fontSize: 12, fontWeight: 700, color: '#0a1628', margin: '4px 0 0' }}>Multi generation coverage</p>
                    </div>
                    <div style={{ width: 1, height: 40, flexShrink: 0, background: '#e5e7eb' }} />
                    <p style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.55, color: 'rgba(10,22,40,0.60)', margin: 0 }}>
                      Map, filter and compare network coverage across all technologies in one view </p>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Right: stacked feature cards */}
            <div className="flex h-full flex-col gap-3">
              {[
                { icon: faLayerGroup, stat: 'Filter',     label: 'by 2G, 3G, and 5G',                  note: 'View coverage by technology in one place',     color: '#228DC1' },
                { icon: faMap,        stat: 'Overlay',    label: 'population and terrain data',         note: 'Add real world context to each coverage area', color: '#059669' },
                { icon: faChartBar,   stat: 'Assess',     label: 'weak zones by severity and impact',   note: 'Understand which gaps matter most',             color: '#7c3aed' },
                { icon: faBullseye,   stat: 'Prioritise', label: 'investment and deployment decisions', note: 'Move from insight to action',                  color: '#d97706' },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="group flex flex-1 gap-5 p-6"
                >
                  <div style={{ display: 'flex', height: 44, width: 44, flexShrink: 0, alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesomeIcon icon={item.icon} style={{ color: item.color, fontSize: 15 }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 21, fontWeight: 800, color: '#0a1628', lineHeight: 1, margin: '0 0 4px' }}>{item.stat}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#0a1628', margin: '0 0 3px' }}>{item.label}</p>
                    <p style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: 'rgba(10,22,40,0.60)', margin: 0 }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* -- How it works -- */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="font-heading text-[#0a1628] mb-4">
              From raw network data to <span className="text-[#1a7aab]">coverage decisions</span>
            </h2>
            <p className="text-[#0a1628]/60 text-[18px] font-normal leading-[1.7] max-w-2xl">
              iCMAP brings coverage, mapping and contextual data into one workspace, helping teams identify weak areas, understand local impact and plan improvements with clearer evidence. </p>
          </div>
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <article
                key={step.num}
                className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={`relative aspect-[16/10] overflow-hidden rounded-[20px] bg-white shadow-[0_16px_40px_rgba(10,22,40,0.10)] ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className={`absolute inset-0 block h-full w-full ${'imageClassName' in step ? step.imageClassName : 'object-cover object-center'}`}
                  />
                </div>

                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="mb-5 flex items-center gap-4">
                    <span
                      className="text-[14px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: step.color }}
                    >
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="font-heading text-[#0a1628] mb-5">
                    {step.label}
                  </h3>
                  <p className="text-[#0a1628]/65 text-[17px] font-normal leading-[1.75] mb-7">
                    {step.desc}
                  </p>
                  <div className="border-t border-[#0a1628]/10 pt-6">
                    <p
                      className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: step.color }}
                    >
                      {step.detailLabel}
                    </p>
                    <p className="text-[#0a1628]/60 text-[15px] font-normal leading-[1.75]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -- Who it's for -- */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-[#0a1628] mb-5">
              Designed for modern <span className="text-[#1a7aab]">connectivity programmes</span>
            </h2>
            <p className="text-[#0a1628]/62 text-[16px] font-normal leading-[1.75] max-w-2xl">
              From national coverage obligations to private network estates, iCMAP helps teams see the same evidence and decide where to act next. </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((uc) => (
              <VisualInsightCard
                key={uc.label}
                title={uc.headline}
                description={uc.desc}
                image={uc.image}
                points={uc.points}
                accent="#228DC1"
                flushContent
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
