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
const ICMAP_ZONES = [
  { id: 'core',   label: 'City Centre',    quality: 'Very Good', signal: '-72 dBm', pop: '28,400', color: '#0284c7',
    path: 'M210,100 L280,82 L320,118 L308,178 L238,196 L168,174 L158,122 Z' },
  { id: 'inner',  label: 'Inner Suburbs',  quality: 'Good',      signal: '-85 dBm', pop: '15,600', color: '#059669',
    path: 'M128,52 L295,38 L372,88 L382,204 L318,248 L148,252 L82,208 L72,102 Z' },
  { id: 'outer',  label: 'Greater Region', quality: 'Fair',      signal: '-95 dBm', pop: '8,100',  color: '#d97706',
    path: 'M62,16 L355,8 L438,62 L446,272 L366,324 L102,328 L32,268 L24,64 Z' },
  { id: 'fringe', label: 'Fringe Zone',    quality: 'Fringe',    signal: '-105 dBm', pop: '2,400', color: '#dc2626',
    path: 'M18,0 L420,0 L478,44 L484,344 L402,376 L72,376 L8,336 L0,46 Z' },
]
const ICMAP_LAYERS = ['5G', '4G', 'Gaps', 'All'] as const

function IcmapHeroDemo() {
  const [layerIdx, setLayerIdx]   = useState(0)
  const [zoneIdx,  setZoneIdx]    = useState(0)
  const [scanX,    setScanX]      = useState(0)
  const [entered,  setEntered]    = useState(false)
  const scanRef = useRef<number>(0)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setLayerIdx(p => (p + 1) % ICMAP_LAYERS.length), 2400)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setZoneIdx(p => (p + 1) % ICMAP_ZONES.length), 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const tick = () => {
      scanRef.current = (scanRef.current + 1.8) % 102
      setScanX(scanRef.current)
      requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  const zone = ICMAP_ZONES[zoneIdx]
  const qualityColors: Record<string, string> = { 'Very Good': '#0284c7', Good: '#059669', Fair: '#d97706', Fringe: '#dc2626' }

  return (
    <div style={{
      width: '100%', maxWidth: 490,
      opacity: entered ? 1 : 0,
      transform: entered ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)',
    }}>
      <div style={{
        borderRadius: 14, overflow: 'hidden',
        boxShadow: '0 36px 80px rgba(10,22,40,0.22), 0 8px 28px rgba(10,22,40,0.12)',
        background: '#fff',
        border: '1px solid rgba(10,22,40,0.08)',
      }}>

        {/* Window chrome */}
        <div style={{ background: '#0a1628', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fc5f57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <span style={{ marginLeft: 6, color: 'rgba(255,255,255,0.45)', fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.04em' }}>
            iCMAP — Coverage Intelligence
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontFamily: 'sans-serif' }}>LIVE</span>
          </div>
        </div>

        {/* Layer tabs */}
        <div style={{ background: '#0f1f3d', padding: '7px 12px', display: 'flex', gap: 5 }}>
          {ICMAP_LAYERS.map((l, i) => (
            <div key={l} style={{
              padding: '3px 11px', borderRadius: 5, fontSize: 11, fontWeight: 600, cursor: 'pointer',
              background: layerIdx === i ? '#228DC1' : 'rgba(255,255,255,0.07)',
              color: layerIdx === i ? '#fff' : 'rgba(255,255,255,0.38)',
              transition: 'background 0.35s ease, color 0.35s ease',
            }}>{l}</div>
          ))}
          <div style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.3)', alignSelf: 'center', fontFamily: 'sans-serif' }}>
            Manchester, UK
          </div>
        </div>

        {/* Map + sidebar */}
        <div style={{ display: 'flex', background: '#e8eef4' }}>

          {/* SVG map */}
          <div style={{ flex: 1, position: 'relative' }}>
            <svg viewBox="0 0 484 380" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Basemap background */}
              <rect width="484" height="380" fill="#dce4ed" />
              {/* Road grid hint */}
              {[60,120,180,240,300,360,420].map(x => <line key={`v${x}`} x1={x} y1={0} x2={x} y2={380} stroke="rgba(255,255,255,0.35)" strokeWidth={0.6}/>)}
              {[50,100,150,200,250,300,350].map(y => <line key={`h${y}`} x1={0} y1={y} x2={484} y2={y} stroke="rgba(255,255,255,0.35)" strokeWidth={0.6}/>)}

              {/* Coverage zones — outermost first */}
              {[...ICMAP_ZONES].reverse().map((z, ri) => {
                const zi = ICMAP_ZONES.length - 1 - ri
                const isActive = zi === zoneIdx
                return (
                  <path key={z.id} d={z.path}
                    fill={z.color}
                    opacity={isActive ? 0.72 : (0.52 - ri * 0.07)}
                    stroke={isActive ? '#fff' : 'rgba(255,255,255,0.25)'}
                    strokeWidth={isActive ? 2 : 0.8}
                    style={{ transition: 'opacity 0.5s ease, stroke-width 0.3s ease' }}
                  />
                )
              })}

              {/* Scan line */}
              <line x1={scanX * 4.84} y1={0} x2={scanX * 4.84} y2={380}
                stroke="rgba(34,141,193,0.65)" strokeWidth={1.5}
                style={{ filter: 'drop-shadow(0 0 5px rgba(34,141,193,0.9))' }} />

              {/* Zone centre marker */}
              <circle cx={240} cy={140} r={18} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth={1.5}
                style={{ animation: 'icmapPulse 2s ease-in-out infinite' }} />
              <circle cx={240} cy={140} r={8} fill="rgba(255,255,255,0.9)"
                style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8))' }} />
              <circle cx={240} cy={140} r={4} fill={qualityColors[zone.quality] ?? '#228DC1'} />

              {/* Zone tooltip */}
              <g style={{ transition: 'opacity 0.4s ease' }}>
                <rect x={148} y={192} width={188} height={58} rx={6} fill="rgba(10,22,40,0.88)" />
                <rect x={148} y={192} width={4} height={58} rx={2} fill={qualityColors[zone.quality] ?? '#228DC1'} />
                <text x={160} y={210} fontSize={10} fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">ZONE ANALYSIS</text>
                <text x={160} y={225} fontSize={12} fill="#fff" fontFamily="sans-serif" fontWeight="700">{zone.label}</text>
                <text x={160} y={240} fontSize={10} fill={qualityColors[zone.quality] ?? '#228DC1'} fontFamily="sans-serif">
                  {zone.signal} · {zone.quality} · {zone.pop} residents
                </text>
              </g>
            </svg>

            <style>{`
              @keyframes icmapPulse {
                0%, 100% { opacity: 0.4; r: 18px; }
                50% { opacity: 0.9; r: 24px; }
              }
            `}</style>
          </div>

          {/* Sidebar */}
          <div style={{ width: 126, background: '#fff', borderLeft: '1px solid #e2e8f0', padding: '10px 10px', display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* Quality legend */}
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(10,22,40,0.35)', textTransform: 'uppercase', marginBottom: 7 }}>Signal Quality</p>
              {[
                { label: 'Very Good', color: '#0284c7', w: '88%' },
                { label: 'Good',      color: '#059669', w: '68%' },
                { label: 'Fair',      color: '#d97706', w: '44%' },
                { label: 'Fringe',    color: '#dc2626', w: '22%' },
              ].map(q => (
                <div key={q.label} style={{ marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                    <div style={{ width: 7, height: 7, borderRadius: 2, background: q.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 9, color: 'rgba(10,22,40,0.55)', fontFamily: 'sans-serif' }}>{q.label}</span>
                  </div>
                  <div style={{ height: 3, background: '#f0f4f8', borderRadius: 99 }}>
                    <div style={{ height: '100%', width: q.w, background: q.color, borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: '#e2e8f0' }} />

            {/* Live stats */}
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(10,22,40,0.35)', textTransform: 'uppercase', marginBottom: 7 }}>Live Stats</p>
              {[
                { label: 'Population',  value: zone.pop },
                { label: 'Signal',      value: zone.signal },
                { label: 'Quality',     value: zone.quality },
                { label: 'Operators',   value: '3 active' },
              ].map(s => (
                <div key={s.label} style={{ marginBottom: 6 }}>
                  <div style={{ fontSize: 9, color: 'rgba(10,22,40,0.38)', fontFamily: 'sans-serif' }}>{s.label}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#0a1628', fontFamily: 'sans-serif', transition: 'color 0.3s' }}>{s.value}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Status bar */}
        <div style={{ background: '#0a1628', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', fontFamily: 'sans-serif', transition: 'opacity 0.4s' }}>
            Analysing · {zone.label} · {zone.signal} · AI gap detection active
          </span>
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
