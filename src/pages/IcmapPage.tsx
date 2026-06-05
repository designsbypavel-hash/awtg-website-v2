import { useState, useEffect, useRef } from 'react'
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
// Coverage quality labels matching coveragemap.visitborderlands.co.uk
const VB_ZONES = [
  { id: 'vg', label: 'Very Good', color: '#22c55e', signal: '-72 dBm',  pop: '15,600',
    path: 'M180,90 L260,75 L310,105 L295,165 L225,182 L155,162 L145,112 Z' },
  { id: 'g',  label: 'Good',      color: '#84cc16', signal: '-85 dBm',  pop: '28,400',
    path: 'M105,42 L285,30 L365,82 L372,198 L305,242 L138,245 L72,196 L62,92 Z' },
  { id: 'f',  label: 'Fair',      color: '#f59e0b', signal: '-95 dBm',  pop: '8,100',
    path: 'M42,8 L340,2 L430,60 L438,272 L355,320 L88,322 L25,265 L18,58 Z' },
  { id: 'fr', label: 'Fringe',    color: '#f97316', signal: '-108 dBm', pop: '2,400',
    path: 'M8,0 L420,0 L480,48 L485,352 L400,382 L68,382 L4,342 L0,50 Z' },
]
const VB_LAYERS = ['All', '5G', '4G', 'Gaps'] as const

function IcmapHeroDemo() {
  const [layerIdx, setLayerIdx] = useState(0)
  const [zoneIdx,  setZoneIdx]  = useState(0)
  const [scanX,    setScanX]    = useState(0)
  const [entered,  setEntered]  = useState(false)
  const animRef = useRef<number>(0)
  const scanRef = useRef<number>(0)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setLayerIdx(p => (p + 1) % VB_LAYERS.length), 2500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setZoneIdx(p => (p + 1) % VB_ZONES.length), 2200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const tick = () => {
      scanRef.current = (scanRef.current + 1.2) % 102
      setScanX(scanRef.current)
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const zone = VB_ZONES[zoneIdx]

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

        {/* Browser chrome — light gray like a real browser */}
        <div style={{ background: '#e4e4e4', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fc5f57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
          </div>
          {/* URL bar */}
          <div style={{
            flex: 1, background: '#fff', borderRadius: 5, padding: '3px 10px',
            fontSize: 10, color: '#444', fontFamily: 'sans-serif',
            border: '1px solid rgba(0,0,0,0.14)', display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1z" stroke="#999" strokeWidth="1.2" fill="none"/>
              <path d="M8 4.5V8l2.5 2" stroke="#999" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span style={{ color: '#555' }}>coveragemap.visitborderlands.co.uk</span>
          </div>
        </div>

        {/* App: sidebar + map */}
        <div style={{ display: 'flex', height: 320 }}>

          {/* Left sidebar — white panel */}
          <div style={{
            width: 122, background: '#fff', borderRight: '1px solid #e8e8e8',
            display: 'flex', flexDirection: 'column', padding: '10px 8px', gap: 8,
            flexShrink: 0,
          }}>
            {/* Logo */}
            <div style={{ paddingBottom: 8, borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: 7, fontWeight: 800, color: '#1a1a2e', letterSpacing: '0.08em', lineHeight: 1.1, fontFamily: 'sans-serif' }}>
                VISIT
              </div>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#228DC1', letterSpacing: '0.04em', lineHeight: 1.1, fontFamily: 'sans-serif' }}>
                BORDERLANDS
              </div>
              <div style={{ fontSize: 7, color: '#999', marginTop: 2, fontFamily: 'sans-serif' }}>Coverage Map</div>
            </div>

            {/* Layers */}
            <div>
              <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: '#999', textTransform: 'uppercase', marginBottom: 5, fontFamily: 'sans-serif' }}>Layers</p>
              {VB_LAYERS.map((l, i) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4, padding: '2px 4px', borderRadius: 3, background: layerIdx === i ? '#f0f7ff' : 'transparent', transition: 'background 0.3s' }}>
                  <div style={{
                    width: 11, height: 11, borderRadius: '50%', flexShrink: 0,
                    background: layerIdx === i ? '#228DC1' : '#fff',
                    border: `1.5px solid ${layerIdx === i ? '#228DC1' : '#ccc'}`,
                    transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {layerIdx === i && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <span style={{ fontSize: 9, color: layerIdx === i ? '#228DC1' : '#555', fontFamily: 'sans-serif', fontWeight: layerIdx === i ? 600 : 400, transition: 'color 0.3s' }}>{l}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: '#999', textTransform: 'uppercase', marginBottom: 5, fontFamily: 'sans-serif' }}>Legend</p>
              {VB_ZONES.map(z => (
                <div key={z.id} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, opacity: zone.id === z.id ? 1 : 0.5, transition: 'opacity 0.4s' }}>
                  <div style={{ width: 14, height: 9, borderRadius: 2, background: z.color, opacity: 0.75, border: `1px solid ${z.color}`, flexShrink: 0 }} />
                  <span style={{ fontSize: 9, color: '#333', fontFamily: 'sans-serif' }}>{z.label}</span>
                </div>
              ))}
            </div>

            {/* Zone info card */}
            <div style={{ background: '#f8fafc', borderRadius: 5, padding: '5px 6px', border: '1px solid #e8e8e8', transition: 'all 0.4s' }}>
              <div style={{ fontSize: 7, color: '#aaa', fontFamily: 'sans-serif', marginBottom: 2 }}>Selected zone</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: zone.color, fontFamily: 'sans-serif', transition: 'color 0.4s' }}>{zone.label}</div>
              <div style={{ fontSize: 8, color: '#666', fontFamily: 'sans-serif', marginTop: 1 }}>{zone.signal}</div>
              <div style={{ fontSize: 8, color: '#666', fontFamily: 'sans-serif' }}>{zone.pop} residents</div>
            </div>
          </div>

          {/* Map — CartoDB Light style */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 378 320" style={{ width: '100%', height: '100%', display: 'block' }}>
              {/* CartoDB Light cream background */}
              <rect width="378" height="320" fill="#f5f0e8" />

              {/* Terrain hints */}
              <ellipse cx="75"  cy="75"  rx="95" ry="55" fill="#ede8de" opacity="0.55" />
              <ellipse cx="308" cy="60"  rx="85" ry="48" fill="#ede8de" opacity="0.50" />
              <ellipse cx="185" cy="255" rx="115" ry="52" fill="#ede8de" opacity="0.50" />
              <ellipse cx="345" cy="245" rx="65"  ry="48" fill="#ede8de" opacity="0.40" />

              {/* Water — River Tweed */}
              <path d="M0,142 Q55,132 98,150 Q148,168 198,158 Q258,145 308,163 Q338,173 378,158" fill="none" stroke="#9bc4d8" strokeWidth={3.5} opacity={0.65} />
              <path d="M148,0 Q153,62 163,122 Q168,152 198,158" fill="none" stroke="#9bc4d8" strokeWidth={1.8} opacity={0.5} />
              <path d="M258,0 Q253,52 245,102 Q240,142 238,158" fill="none" stroke="#9bc4d8" strokeWidth={1.5} opacity={0.45} />

              {/* Major roads */}
              <path d="M0,102 Q78,97 158,112 Q238,128 308,118 Q348,112 378,120" fill="none" stroke="#d8ccc0" strokeWidth={2.5} />
              <path d="M0,102 Q78,97 158,112 Q238,128 308,118 Q348,112 378,120" fill="none" stroke="#ebe4d8" strokeWidth={1} />
              <path d="M188,0 L184,82 L177,162 L174,222 L172,320" fill="none" stroke="#d8ccc0" strokeWidth={2} />
              <path d="M188,0 L184,82 L177,162 L174,222 L172,320" fill="none" stroke="#ebe4d8" strokeWidth={0.8} />
              <path d="M0,222 Q78,217 128,202 Q178,190 238,197 Q298,205 378,195" fill="none" stroke="#d8ccc0" strokeWidth={1.5} />

              {/* Minor roads */}
              <path d="M78,0 Q83,62 93,122 Q98,155 98,150" fill="none" stroke="#e0d8cc" strokeWidth={1} opacity={0.6} />
              <path d="M288,42 Q283,92 268,132 Q258,162 246,157" fill="none" stroke="#e0d8cc" strokeWidth={1} opacity={0.6} />

              {/* Coverage zones — outermost first */}
              {[...VB_ZONES].reverse().map((z, ri) => {
                const zi = VB_ZONES.length - 1 - ri
                const isActive = zi === zoneIdx
                return (
                  <g key={z.id} transform="scale(0.781, 0.840)">
                    <path d={z.path}
                      fill={z.color}
                      opacity={isActive ? 0.50 : (0.28 - ri * 0.04)}
                      stroke={z.color}
                      strokeWidth={isActive ? 2.5 : 0.8}
                      strokeOpacity={isActive ? 0.7 : 0.25}
                      style={{ transition: 'opacity 0.5s ease' }}
                    />
                  </g>
                )
              })}

              {/* Scan line */}
              <line x1={scanX * 3.78} y1={0} x2={scanX * 3.78} y2={320}
                stroke="rgba(34,141,193,0.45)" strokeWidth={1}
                style={{ filter: 'drop-shadow(0 0 3px rgba(34,141,193,0.6))' }} />

              {/* Town markers */}
              {[
                { x: 183, y: 120, name: 'Peebles' },
                { x: 240, y: 150, name: 'Galashiels' },
                { x: 108, y: 193, name: 'Hawick' },
                { x: 298, y: 168, name: 'Kelso' },
              ].map(t => (
                <g key={t.name}>
                  <circle cx={t.x} cy={t.y} r={3.5} fill="#fff" stroke="#888" strokeWidth={0.8} />
                  <circle cx={t.x} cy={t.y} r={2}   fill="#555" />
                  <rect x={t.x + 5} y={t.y - 7} width={t.name.length * 4.5} height={10} rx={2} fill="rgba(255,255,255,0.88)" />
                  <text x={t.x + 7} y={t.y + 1.5} fontSize={7} fill="#333" fontFamily="sans-serif">{t.name}</text>
                </g>
              ))}

              {/* Active zone popup */}
              <rect x={100} y={60} width={152} height={44} rx={5} fill="rgba(255,255,255,0.95)" stroke={zone.color} strokeWidth={1.5} />
              <rect x={100} y={60} width={3}   height={44} rx={2} fill={zone.color} />
              <text x={110} y={76}  fontSize={7}  fill="#aaa"      fontFamily="sans-serif">COVERAGE</text>
              <text x={110} y={89}  fontSize={10} fill="#1a1a2e"   fontFamily="sans-serif" fontWeight="700">{zone.label}</text>
              <text x={110} y={100} fontSize={7}  fill={zone.color} fontFamily="sans-serif">{zone.signal} · {zone.pop} residents</text>

              {/* Zoom controls */}
              <rect x={346} y={8}  width={24} height={44} rx={4} fill="rgba(255,255,255,0.9)" stroke="#ddd" strokeWidth={0.8} />
              <text x={358} y={26} fontSize={14} fill="#555" fontFamily="sans-serif" textAnchor="middle">+</text>
              <line x1={347} y1={33} x2={369} y2={33} stroke="#ddd" strokeWidth={0.8} />
              <text x={358} y={47} fontSize={14} fill="#555" fontFamily="sans-serif" textAnchor="middle">−</text>
            </svg>

            {/* Attribution bar */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'rgba(255,255,255,0.85)',
              padding: '3px 8px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              backdropFilter: 'blur(4px)',
              borderTop: '1px solid rgba(0,0,0,0.06)',
            }}>
              <span style={{ fontSize: 7, color: '#aaa', fontFamily: 'sans-serif' }}>© OpenStreetMap contributors · CartoDB</span>
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
