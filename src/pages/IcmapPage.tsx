import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Polygon, useMap } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faMap, faTowerBroadcast, faChartBar, faGlobe, faLayerGroup, faBullseye } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import 'leaflet/dist/leaflet.css'
import type { LatLngExpression } from 'leaflet'

// -- Coverage zone data --------------------------------------------------------
type CoverageType = '5g-plus' | '5g' | '4g' | '3g' | 'gap'

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
  // 5G+ core � Manchester city centre
  {
    id: 'z1', type: '5g-plus', label: '5G+',
    signal: '-72 dBm', population: '28,400 residents', operator: 'All operators',
    positions: [
      [53.500, -2.265], [53.503, -2.210], [53.495, -2.175],
      [53.472, -2.168], [53.455, -2.200], [53.450, -2.255],
      [53.462, -2.300], [53.488, -2.310],
    ],
  },
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
  '5g-plus': { fill: '#1a6e99', stroke: '#1e3a8a', label: '5G+',         textColor: '#1a6e99' },
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
    if (activeLayer === '5g') return type === '5g' || type === '5g-plus'
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
    { label: '5G+', pct: 22, color: '#1a6e99' },
    { label: '5G',  pct: 18, color: '#3b82f6' },
    { label: '4G',  pct: 28, color: '#7c3aed' },
    { label: '3G',  pct: 16, color: '#f59e0b' },
    { label: 'Gap', pct: 16, color: '#ef4444' },
  ]

  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow-[0_8px_48px_rgba(10,22,40,0.1)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f3f4f6] border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#fc5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 flex justify-center">
          <div className="bg-white border border-gray-200 px-3 py-1 text-[14px] text-gray-400" style={{ minWidth: '260px', textAlign: 'center' }}>
            app.icmap.awtg.co.uk/coverage/uk-north
          </div>
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
                activeLayer === btn.key ? 'bg-[#228DC1] text-white' : 'text-[#0a1628]/60 hover:text-[#228DC1]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-[14px] text-[#0a1628]/65 font-medium">
          <span>Greater Manchester</span>
          <span>Updated: live</span>
        </div>
      </div>

      {/* Map + side panel */}
      <div className="flex divide-x divide-gray-100">
        {/* Leaflet map */}
        <div className="flex-1" style={{ minHeight: '360px' }}>
          <MapContainer
            style={{ height: '360px', width: '100%' }}
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
            <span className="text-[14px] text-[#0a1628]/25 ml-auto">Click a zone for details</span>
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
                  <p className="text-[15px] font-black" style={{ color: zoneStyle[selected.type].textColor }}>{selected.label}</p>
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
                className="mt-6 text-[14px] text-[#0a1628]/65 hover:text-[#0a1628] font-medium transition-colors"
              >
                Clear selection
              </button>
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

// -- Capabilities -------------------------------------------------------------
const capabilities = [
  {
    icon: faMap,
    label: 'Interactive Coverage Mapping',
    desc: 'Visualise mobile, broadband, Wi-Fi, IoT, and private network coverage through intuitive GIS-based maps and dashboards.',
    color: '#228DC1',
  },
  {
    icon: faGlobe,
    label: 'Multi-Network Analytics',
    desc: 'Compare multiple operators, technologies, and frequency bands across different geographic areas.',
    color: '#7c3aed',
  },
  {
    icon: faTowerBroadcast,
    label: 'Signal & Performance Insights',
    desc: 'Analyse signal strength, quality, latency, throughput, and user experience metrics in real time.',
    color: '#059669',
  },
  {
    icon: faBullseye,
    label: 'Coverage Gap Identification',
    desc: 'Identify underserved locations and prioritise infrastructure investment opportunities with AI-powered gap detection.',
    color: '#d97706',
  },
  {
    icon: faLayerGroup,
    label: 'Infrastructure & Asset Visualisation',
    desc: 'Map towers, antennas, fibre assets, small cells, IoT gateways, and connectivity infrastructure on a single platform.',
    color: '#dc2626',
  },
  {
    icon: faChartBar,
    label: 'Geospatial Intelligence & Layers',
    desc: 'Overlay demographic, transport, venue, council boundary, and environmental datasets for deeper connectivity insight.',
    color: '#0891b2',
  },
  {
    icon: faMap,
    label: 'Custom Dashboards & Reporting',
    desc: 'Generate executive dashboards, operational reports, and stakeholder visualisations formatted for any audience.',
    color: '#228DC1',
  },
  {
    icon: faGlobe,
    label: 'API & Data Integration',
    desc: 'Integrate telecom datasets, GIS layers, crowdsourced measurements, and external data sources through secure APIs.',
    color: '#7c3aed',
  },
]

// -- Use cases -----------------------------------------------------------------
const useCases = [
  {
    label: 'Mobile Network Operators',
    headline: 'Optimise coverage. Justify investment.',
    desc: 'CoverageMap gives MNOs a real-time, AI-augmented view of their entire network footprint. Identify where coverage underperforms, model expansion scenarios and build the evidence base for capital investment decisions.',
    points: [
      'Live coverage and quality monitoring across all sites',
      'Gap analysis with population and revenue impact scoring',
      'Scenario modelling for new site placement and technology upgrades',
      'Cross-generation performance comparison on a single map',
    ],
  },
  {
    label: 'Regulators & Government',
    headline: 'Enforce coverage commitments with evidence.',
    desc: 'CoverageMap provides regulators and government agencies with independent, verifiable coverage data to track operator commitments, benchmark against licence obligations and close the digital divide.',
    points: [
      'Independent verification of operator coverage claims',
      'National coverage benchmarking and gap reporting',
      'Subsidy allocation modelling and digital inclusion tracking',
      'Audit-ready data exports for regulatory submissions',
    ],
  },
  {
    label: 'Smart Cities & Infrastructure',
    headline: 'Power next-generation connectivity programmes.',
    desc: 'From smart city initiatives to transport corridors and private 5G deployments, CoverageMap delivers the geospatial intelligence needed to plan, deploy and optimise modern connectivity infrastructure.',
    points: [
      'Transport, venue and campus connectivity analysis',
      'Private 5G and IoT network coverage planning',
      'Urban and rural infrastructure mapping',
      'Digital inclusion programme reporting and evidence base',
    ],
  },
]


// -- How it works -------------------------------------------------------------
const steps = [
  {
    num: '01',
    label: 'Ingest your network data',
    desc: 'iCMAP ingests live and historical data from your network infrastructure, drive test datasets, crowdsourced measurements and third-party sources.',
    detail: 'Supports OSS/BSS feeds, drive test formats, open data and custom API inputs.',
    color: '#228DC1',
  },
  {
    num: '02',
    label: 'AI processes and maps coverage',
    desc: 'Machine learning models normalise, validate and correlate incoming data against geographic and demographic layers. Coverage is rendered as accurate, high-resolution maps updated in real time.',
    detail: 'Shape files, heat maps and bin-level granularity available simultaneously.',
    color: '#7c3aed',
  },
  {
    num: '03',
    label: 'Identify gaps and opportunities',
    desc: 'AI-driven gap detection surfaces underserved areas, calculates affected population, cross-references terrain and infrastructure data, and ranks expansion opportunities.',
    detail: 'Prioritisation engine weights by population density, terrain cost and strategic value.',
    color: '#059669',
  },
  {
    num: '04',
    label: 'Report, plan and act',
    desc: 'Generate reports for internal planning, regulator submission or public accountability. Export to your existing planning tools or use iCMAP\'s built-in investment modelling.',
    detail: 'Outputs compatible with leading network planning and GIS platforms.',
    color: '#d97706',
  },
]

// -- Hero animated demo --------------------------------------------------------
// Scattered, independent coverage patches — not concentric, not overlapping
// Each has a tooltip anchor (tx, ty) for the popup
const HERO_PATCHES = [
  // Very Good — dense urban cores
  { id:'vg1', label:'Very Good', color:'#16a34a', signal:'-68 dBm', pop:'12,400',
    path:'M158,104 L188,96 L202,112 L196,134 L170,140 L148,126 Z', tx:155, ty:88 },
  { id:'vg2', label:'Very Good', color:'#16a34a', signal:'-71 dBm', pop:'9,800',
    path:'M228,136 L254,128 L266,145 L258,165 L234,171 L218,156 Z', tx:226, ty:120 },
  // Good — wider suburban coverage
  { id:'g1', label:'Good', color:'#65a30d', signal:'-82 dBm', pop:'22,100',
    path:'M108,70 L162,60 L182,78 L176,108 L148,116 L108,105 L95,86 Z', tx:106, ty:54 },
  { id:'g2', label:'Good', color:'#65a30d', signal:'-86 dBm', pop:'18,300',
    path:'M278,148 L314,140 L326,160 L318,182 L290,188 L268,172 Z', tx:276, ty:132 },
  { id:'g3', label:'Good', color:'#65a30d', signal:'-88 dBm', pop:'8,600',
    path:'M88,182 L122,174 L136,192 L128,214 L100,220 L78,204 Z', tx:86, ty:166 },
  // Fair — rural areas with partial coverage
  { id:'f1', label:'Fair', color:'#ca8a04', signal:'-96 dBm', pop:'5,400',
    path:'M34,118 L76,108 L88,128 L78,152 L46,158 L26,140 Z', tx:32, ty:102 },
  { id:'f2', label:'Fair', color:'#ca8a04', signal:'-98 dBm', pop:'4,200',
    path:'M316,92 L350,84 L364,104 L354,128 L322,132 L304,114 Z', tx:314, ty:76 },
  { id:'f3', label:'Fair', color:'#ca8a04', signal:'-94 dBm', pop:'6,100',
    path:'M196,220 L228,212 L242,230 L234,254 L206,260 L188,242 Z', tx:194, ty:204 },
  // Fringe — edge of coverage, remote rural
  { id:'fr1', label:'Fringe', color:'#ea580c', signal:'-108 dBm', pop:'1,200',
    path:'M18,56 L48,48 L60,68 L50,90 L22,94 L8,74 Z', tx:16, ty:40 },
  { id:'fr2', label:'Fringe', color:'#ea580c', signal:'-110 dBm', pop:'800',
    path:'M338,228 L364,222 L374,244 L364,264 L338,268 L322,248 Z', tx:336, ty:212 },
  { id:'fr3', label:'Fringe', color:'#ea580c', signal:'-106 dBm', pop:'1,600',
    path:'M128,260 L158,254 L170,272 L160,292 L130,296 L112,278 Z', tx:126, ty:244 },
]

// Unique quality levels for legend
const LEGEND_LEVELS = [
  { label: 'Very Good', color: '#16a34a' },
  { label: 'Good',      color: '#65a30d' },
  { label: 'Fair',      color: '#ca8a04' },
  { label: 'Fringe',    color: '#ea580c' },
]

const HERO_LAYERS = ['All', '5G', '4G', 'Gaps'] as const

function IcmapHeroDemo() {
  const [layerIdx, setLayerIdx] = useState(0)
  const [patchIdx, setPatchIdx] = useState(0)
  const [entered,  setEntered]  = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setLayerIdx(p => (p + 1) % HERO_LAYERS.length), 2600)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setPatchIdx(p => (p + 1) % HERO_PATCHES.length), 1800)
    return () => clearInterval(id)
  }, [])

  const active = HERO_PATCHES[patchIdx]

  // Tooltip position — keep it inside the SVG bounds
  const tx = Math.min(active.tx, 230)
  const ty = Math.max(active.ty, 10)

  return (
    <div style={{
      width: '100%', maxWidth: 500,
      opacity: entered ? 1 : 0,
      transform: entered ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)',
    }}>
      <div style={{
        borderRadius: 12, overflow: 'hidden',
        boxShadow: '0 32px 72px rgba(10,22,40,0.20), 0 6px 24px rgba(10,22,40,0.10)',
        border: '1px solid rgba(0,0,0,0.1)',
        background: '#fff',
      }}>

        {/* Browser chrome */}
        <div style={{ background: '#e4e4e4', padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fc5f57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{
            flex: 1, background: '#fff', borderRadius: 5, padding: '3px 10px',
            fontSize: 10, color: '#555', fontFamily: 'sans-serif',
            border: '1px solid rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#aaa" strokeWidth="1.2"/>
              <path d="M6 3v3l2 1.5" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            app.icmap.awtg.co.uk/coverage
          </div>
        </div>

        {/* App body */}
        <div style={{ display: 'flex', height: 322 }}>

          {/* Sidebar */}
          <div style={{
            width: 118, background: '#fff', borderRight: '1px solid #ebebeb',
            display: 'flex', flexDirection: 'column', padding: '10px 9px', gap: 9, flexShrink: 0,
          }}>

            {/* iCMAP brand */}
            <div style={{ paddingBottom: 8, borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 18, height: 18, borderRadius: 4, background: '#228DC1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="#fff" strokeWidth="1.2"/>
                    <circle cx="6" cy="6" r="2" fill="#fff"/>
                  </svg>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#0a1628', fontFamily: 'sans-serif', letterSpacing: '-0.01em' }}>iCMAP</span>
              </div>
              <div style={{ fontSize: 7, color: '#aaa', marginTop: 3, fontFamily: 'sans-serif' }}>Coverage Intelligence</div>
            </div>

            {/* Layers */}
            <div>
              <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: '#bbb', textTransform: 'uppercase', marginBottom: 5, fontFamily: 'sans-serif' }}>Layers</p>
              {HERO_LAYERS.map((l, i) => (
                <div key={l} style={{
                  display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4,
                  padding: '3px 5px', borderRadius: 4,
                  background: layerIdx === i ? '#f0f7ff' : 'transparent',
                  transition: 'background 0.35s',
                }}>
                  <div style={{
                    width: 11, height: 11, borderRadius: '50%', flexShrink: 0,
                    background: layerIdx === i ? '#228DC1' : '#fff',
                    border: `1.5px solid ${layerIdx === i ? '#228DC1' : '#d0d0d0'}`,
                    transition: 'all 0.3s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {layerIdx === i && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <span style={{ fontSize: 9, fontFamily: 'sans-serif', fontWeight: layerIdx === i ? 600 : 400, color: layerIdx === i ? '#228DC1' : '#666', transition: 'color 0.3s' }}>{l}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: '#bbb', textTransform: 'uppercase', marginBottom: 5, fontFamily: 'sans-serif' }}>Legend</p>
              {LEGEND_LEVELS.map(lv => {
                const isActiveLevel = active.color === lv.color
                return (
                  <div key={lv.label} style={{
                    display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5,
                    opacity: isActiveLevel ? 1 : 0.55,
                    transition: 'opacity 0.4s',
                  }}>
                    <div style={{ width: 14, height: 9, borderRadius: 2, background: lv.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 9, color: '#333', fontFamily: 'sans-serif', fontWeight: isActiveLevel ? 600 : 400 }}>{lv.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Zone card */}
            <div style={{
              background: '#f8fafc', borderRadius: 5, padding: '5px 6px',
              border: `1px solid ${active.color}40`, transition: 'border-color 0.4s',
            }}>
              <div style={{ fontSize: 7, color: '#aaa', fontFamily: 'sans-serif', marginBottom: 2 }}>Active zone</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: active.color, fontFamily: 'sans-serif', transition: 'color 0.4s' }}>{active.label}</div>
              <div style={{ fontSize: 8, color: '#777', fontFamily: 'sans-serif', marginTop: 1 }}>{active.signal}</div>
              <div style={{ fontSize: 8, color: '#777', fontFamily: 'sans-serif' }}>{active.pop} residents</div>
            </div>
          </div>

          {/* Map */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 382 322" style={{ width: '100%', height: '100%', display: 'block' }}>
              {/* CartoDB Light basemap */}
              <rect width="382" height="322" fill="#f5f0e8" />

              {/* Terrain */}
              <ellipse cx="70"  cy="70"  rx="88" ry="52" fill="#ede8de" opacity="0.5" />
              <ellipse cx="310" cy="58"  rx="80" ry="45" fill="#ede8de" opacity="0.45" />
              <ellipse cx="185" cy="258" rx="110" ry="50" fill="#ede8de" opacity="0.45" />
              <ellipse cx="348" cy="248" rx="60"  ry="45" fill="#ede8de" opacity="0.38" />

              {/* River */}
              <path d="M0,144 Q52,134 96,152 Q146,170 196,160 Q256,147 306,165 Q336,175 382,160" fill="none" stroke="#9bc4d8" strokeWidth={3} opacity={0.6} />
              <path d="M146,0 Q151,64 161,124 Q166,154 196,160" fill="none" stroke="#9bc4d8" strokeWidth={1.6} opacity={0.45} />
              <path d="M256,0 Q251,54 244,104 Q239,144 238,160" fill="none" stroke="#9bc4d8" strokeWidth={1.4} opacity={0.42} />

              {/* Roads */}
              <path d="M0,104 Q76,99 156,114 Q236,130 306,120 Q346,114 382,122" fill="none" stroke="#d8ccc0" strokeWidth={2.2} />
              <path d="M0,104 Q76,99 156,114 Q236,130 306,120 Q346,114 382,122" fill="none" stroke="#ebe4d8" strokeWidth={0.9} />
              <path d="M190,0 L186,84 L179,164 L176,224 L174,322" fill="none" stroke="#d8ccc0" strokeWidth={1.8} />
              <path d="M190,0 L186,84 L179,164 L176,224 L174,322" fill="none" stroke="#ebe4d8" strokeWidth={0.7} />
              <path d="M0,224 Q76,219 126,204 Q176,192 236,199 Q296,207 382,197" fill="none" stroke="#d8ccc0" strokeWidth={1.3} />
              <path d="M76,0 Q81,64 91,124 Q96,157 96,152" fill="none" stroke="#e0d8cc" strokeWidth={0.9} opacity={0.6} />
              <path d="M286,44 Q281,94 266,134 Q256,164 245,159" fill="none" stroke="#e0d8cc" strokeWidth={0.9} opacity={0.6} />

              {/* All coverage patches — scattered, non-overlapping */}
              {HERO_PATCHES.map(p => (
                <path key={p.id} d={p.path}
                  fill={p.color}
                  opacity={active.id === p.id ? 0.65 : 0.38}
                  stroke={p.color}
                  strokeWidth={active.id === p.id ? 1.8 : 0.6}
                  strokeOpacity={active.id === p.id ? 0.85 : 0.35}
                  style={{ transition: 'opacity 0.45s ease, stroke-width 0.3s ease' }}
                />
              ))}

              {/* Town dots — on top of coverage patches */}
              {[
                { x: 172, y: 118, name: 'Town A' },
                { x: 243, y: 148, name: 'Town B' },
                { x: 104, y: 196, name: 'Town C' },
                { x: 300, y: 166, name: 'Town D' },
              ].map(t => (
                <g key={t.name}>
                  <circle cx={t.x} cy={t.y} r={3.5} fill="#fff" stroke="#888" strokeWidth={0.8} />
                  <circle cx={t.x} cy={t.y} r={2} fill="#555" />
                </g>
              ))}

              {/* Tooltip anchored near active patch */}
              <g style={{ transition: 'opacity 0.4s ease' }} key={active.id}>
                <line x1={active.tx + 6} y1={active.ty + 4} x2={active.tx + 18} y2={active.ty + 4} stroke={active.color} strokeWidth={1} opacity={0.5} />
                <rect x={tx + 16} y={ty - 6} width={132} height={38} rx={4} fill="rgba(255,255,255,0.97)" stroke={active.color} strokeWidth={1.2} />
                <rect x={tx + 16} y={ty - 6} width={3} height={38} rx={1.5} fill={active.color} />
                <text x={tx + 24} y={ty + 7}  fontSize={7}  fill="#aaa"         fontFamily="sans-serif">COVERAGE ZONE</text>
                <text x={tx + 24} y={ty + 19} fontSize={10} fill="#1a1a2e"      fontFamily="sans-serif" fontWeight="700">{active.label}</text>
                <text x={tx + 24} y={ty + 29} fontSize={7}  fill={active.color} fontFamily="sans-serif">{active.signal} · {active.pop}</text>
              </g>

              {/* Zoom controls */}
              <rect x={350} y={8}  width={24} height={46} rx={4} fill="rgba(255,255,255,0.92)" stroke="#ddd" strokeWidth={0.8} />
              <text x={362} y={27} fontSize={15} fill="#666" fontFamily="sans-serif" textAnchor="middle">+</text>
              <line x1={351} y1={34} x2={373} y2={34} stroke="#ddd" strokeWidth={0.8} />
              <text x={362} y={49} fontSize={15} fill="#666" fontFamily="sans-serif" textAnchor="middle">−</text>
            </svg>

            {/* Map footer */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'rgba(255,255,255,0.88)', padding: '3px 8px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              backdropFilter: 'blur(4px)',
            }}>
              <span style={{ fontSize: 7, color: '#bbb', fontFamily: 'sans-serif' }}>© OpenStreetMap · CartoDB Light</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: 7, color: '#22c55e', fontFamily: 'sans-serif', fontWeight: 600 }}>LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// -- Main page -----------------------------------------------------------------
export default function IcmapPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="relative overflow-hidden pt-32 pb-16" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

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

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 35%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">

            {/* Left: copy */}
            <div>
              <p className="type-label text-[#228DC1] mb-5">Coverage Intelligence</p>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.02] mb-6">
                Coverage intelligence<br />
                that drives decisions.
              </h1>
              <p className="text-[#0a1628]/65 text-[17px] font-normal leading-[1.7] max-w-xl mb-10">
                CoverageMap is a powerful geospatial analytics platform designed to help telecom operators, regulators, local authorities, and enterprises visualise, analyse, and optimise network coverage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold rounded-lg hover:bg-[#1a6e99] transition-colors">
                  Request a Demo
                </Link>
              </div>
            </div>

            {/* Right: animated map demo */}
            <div className="flex items-center justify-center lg:justify-end">
              <IcmapHeroDemo />
            </div>

          </div>
        </div>
      </section>

      {/* -- Key metrics -- */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 border border-white/6">
            {[
              { stat: 'Real-time', label: 'Coverage data updates',    note: 'Continuous ingestion' },
              { stat: '4',        label: 'Network generations mapped', note: '2G through 5G' },
              { stat: 'AI',       label: 'Gap detection and scoring',  note: 'ML-powered prioritisation' },
              { stat: 'Global',   label: 'Geographic deployment',      note: 'Any region or terrain' },
            ].map((item) => (
              <div key={item.label} className="bg-white px-8 py-8">
                <p className="font-black text-[#0a1628] leading-none mb-2" style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', letterSpacing: '-0.02em' }}>{item.stat}</p>
                <p className="text-[#0a1628]/60 text-[14px] font-medium mb-0.5">{item.label}</p>
                <p className="text-[#0a1628]/65 text-[14px] font-normal">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Live Coverage Map -- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="type-label text-[#228DC1] mb-4">Live Coverage Intelligence</p>
            <h2 className="font-heading text-[#0a1628] mb-5">
              Every zone. Every generation. On a real map.
            </h2>
            <p className="text-[#0a1628]/65 text-[16px] font-normal leading-[1.7]">
              iCMAP overlays your network coverage data directly onto live geographic maps. Filter by generation, click any zone for signal strength and population data, and instantly see where the gaps are.
            </p>
          </div>
          <CoverageMap />
          <div className="mt-10 grid sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              { label: 'Real geography',   desc: 'Coverage zones plotted on actual maps with street-level context, not abstract diagrams.' },
              { label: 'Layer filtering',  desc: 'Isolate any generation or show only gap zones to focus planning and regulatory reporting.' },
              { label: 'Zone intelligence', desc: 'Signal strength, population count and operator data on every zone, instantly on click.' },
            ].map((item) => (
              <div key={item.label} className="bg-white px-8 py-6">
                <p className="text-[#0a1628] font-semibold text-[14px] mb-2">{item.label}</p>
                <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- How it works -- */}
      <section className="py-28 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="type-label text-[#228DC1] mb-4">How It Works</p>
            <h2 className="font-heading text-[#0a1628] mb-4">
              From raw network data to actionable coverage intelligence
            </h2>
            <p className="text-[#0a1628]/65 text-[18px] font-normal leading-[1.7] max-w-2xl">
              iCMAP ingests data from multiple sources, maps it in real time and uses AI to identify where action is needed and where investment will have the greatest impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-8 hover:bg-[#f7f9ff] transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-black text-[14px] tabular-nums" style={{ color: step.color, letterSpacing: '0.05em' }}>{step.num}</span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>
                <h3 className="text-[#0a1628] font-semibold text-[16px] leading-[1.3] mb-3">{step.label}</h3>
                <p className="text-[#0a1628]/65 text-[14px] font-normal leading-[1.7] mb-4">{step.desc}</p>
                <p className="text-[#0a1628]/65 text-[14px] font-normal italic">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Capabilities -- */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <p className="type-label text-[#228DC1] mb-4">Capabilities</p>
            <h2 className="font-heading text-[#0a1628] mb-4">
              Built for every layer of network intelligence
            </h2>
            <p className="text-[#0a1628]/65 text-[16px] font-normal leading-[1.7] max-w-2xl">
              From live coverage visualisation to regulatory reporting, iCMAP gives operators, regulators and governments a single platform for the entire coverage intelligence lifecycle.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {capabilities.map((cap) => (
              <div key={cap.label} className="bg-white p-8 hover:bg-[#f7f9ff] transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ backgroundColor: '#228DC112' }}>
                  <FontAwesomeIcon icon={cap.icon} className="w-5 h-5 text-[#228DC1]" />
                </div>
                <h3 className="text-[#0a1628] font-semibold text-[16px] leading-[1.3] mb-3">{cap.label}</h3>
                <p className="text-[#0a1628]/65 text-[14px] font-normal leading-[1.7]">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Who it's for -- */}
      <section className="py-28 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <p className="type-label text-[#228DC1] mb-4">Who It's For</p>
            <h2 className="font-heading text-[#0a1628]">
              Operators, regulators, governments and smart city programmes
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {useCases.map((uc) => (
              <div key={uc.label} className="bg-white p-10">
                <p className="type-label text-[#228DC1] mb-4">{uc.label}</p>
                <h3 className="text-[#0a1628] font-semibold text-[18px] leading-[1.3] mb-4">{uc.headline}</h3>
                <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7] mb-8">{uc.desc}</p>
                <div className="space-y-3">
                  {uc.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-[#228DC1] shrink-0 mt-0.5" />
                      <p className="text-[#0a1628]/75 text-[14px] font-normal">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
