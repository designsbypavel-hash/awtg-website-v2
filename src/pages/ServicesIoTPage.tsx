import React, { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuildingColumns, faChartLine, faCity,
  faClipboardCheck, faFilter, faLayerGroup,
  faMapLocationDot, faNetworkWired, faRoute,
  faSearchLocation, faShieldHalved, faSitemap,
  faTowerBroadcast, faWater, faLocationCrosshairs,
  faDatabase, faCog,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'

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

// ── IDAMS Map Visual ──────────────────────────────────────────────────────────
function IdamsMapVisual() {
  const [screen, setScreen] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => { setScreen(s => (s + 1) % 3); setFade(true) }, 280)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const PURPLE = '#3d4d9e'
  const s = {
    wrap:       { width: '100%', maxWidth: 640, fontFamily: 'system-ui,-apple-system,sans-serif' } as React.CSSProperties,
    card:       { borderRadius: 14, border: '1px solid rgba(0,0,0,0.09)', overflow: 'hidden', boxShadow: '0 32px 80px rgba(10,22,60,0.18)', background: '#fff' } as React.CSSProperties,
    topbar:     { background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', padding: '0 12px', height: 40, gap: 6 } as React.CSSProperties,
    body:       { display: 'flex', height: 390 } as React.CSSProperties,
    panel:      { width: 190, borderRight: '1px solid rgba(0,0,0,0.07)', background: '#fff', padding: '12px 14px', flexShrink: 0, overflowY: 'auto' as const, transition: 'opacity 0.28s ease', opacity: fade ? 1 : 0 } as React.CSSProperties,
    mapArea:    { flex: 1, position: 'relative' as const, overflow: 'hidden', transition: 'opacity 0.28s ease', opacity: fade ? 1 : 0 } as React.CSSProperties,
    statusbar:  { background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '0 12px', display: 'flex', alignItems: 'center', gap: 6, height: 28 } as React.CSSProperties,
    btnPrimary: { padding: '5px 0', borderRadius: 6, background: PURPLE, color: '#fff', fontSize: 9.5, fontWeight: 700, border: 'none', flex: 1, cursor: 'pointer' } as React.CSSProperties,
    btnSec:     { padding: '5px 0', borderRadius: 6, background: PURPLE, color: '#fff', fontSize: 9.5, fontWeight: 700, border: 'none', flex: 1, cursor: 'pointer' } as React.CSSProperties,
    assetRow:   { display: 'flex', alignItems: 'center', gap: 6, padding: '2.5px 0' } as React.CSSProperties,
  }

  const pillStyle = (active: boolean): React.CSSProperties => ({
    padding: '3px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700, border: 'none', cursor: 'pointer',
    background: active ? PURPLE : 'transparent', color: active ? '#fff' : '#888',
  })
  const clusterStyle = (color: string, x: string, y: string, size = 32): React.CSSProperties => ({
    position: 'absolute', left: x, top: y, width: size, height: size, borderRadius: '50%',
    background: color, color: '#fff', fontSize: size > 32 ? 10 : 9, fontWeight: 800,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transform: 'translate(-50%,-50%)', boxShadow: `0 2px 8px ${color}55`,
    border: '2px solid rgba(255,255,255,0.5)',
  })
  const markerStyle = (color: string, x: string, y: string, extra: React.CSSProperties = {}): React.CSSProperties => ({
    position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)',
    width: 20, height: 20, borderRadius: '50%', background: color,
    border: '2px solid #fff', boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    ...extra,
  })

  const mapBg: React.CSSProperties = {
    position: 'absolute', inset: 0, background: '#eee9e0',
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
  }

  const statusText = [
    'Zoom level: 11.6 · Greater London',
    'Polygon_002 · 3 assets selected',
    'Bus Stop · bus3 · AWTG AO 2 (DEMO)',
  ]

  return (
    <div style={s.wrap}>
      <div style={s.card}>

        {/* Top bar */}
        <div style={s.topbar}>
          <button style={pillStyle(true)}>Map</button>
          <button style={pillStyle(false)}>Admin</button>
          <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid #e0e0e0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <circle cx="5" cy="5" r="3.5" stroke="#888" strokeWidth="1.3"/>
              <path d="M8 8l2.2 2.2" stroke="#888" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
            {[faFilter, faLayerGroup, faCog].map((icon, i) => (
              <div key={i} style={{ width: 26, height: 26, borderRadius: 5, border: '1px solid #e8e8e8',
                                     display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={icon} style={{ fontSize: 9, color: '#888' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={s.body}>

          {/* Left panel */}
          <div style={s.panel}>

            {/* ── Screen 0: Borough / Ealing ── */}
            {screen === 0 && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Selected</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M2 2l6 6M8 2l-6 6" stroke="#333" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 6 }}>Ealing</p>
                <p style={{ fontSize: 10, color: '#555', marginBottom: 8 }}>Total Assets: <strong>6730</strong></p>
                <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
                  <button style={s.btnPrimary}>Query assets</button>
                  <button style={s.btnSec}>Acquire assets</button>
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Totals by Asset type</span>
                  <span style={{ color: '#aaa' }}>▲</span>
                </div>
                {[
                  { dot: '#e84040', label: 'Bus Stop', val: '1897' },
                  { dot: '#22bba0', label: 'Lamp Column', val: '1998' },
                  { dot: '#22bba0', label: 'Light', val: '1998', indent: true },
                  { dot: '#3d4d9e', label: 'PoPs', val: '6' },
                  { dot: '#f5a623', label: 'Access Points', val: '2775' },
                  { dot: '#3d4d9e', label: 'TfL Stations', val: '24' },
                  { dot: '#f5a623', label: 'CCTV', val: '30' },
                ].map(row => (
                  <div key={row.label + row.val} style={{ ...s.assetRow, paddingLeft: row.indent ? 12 : 0 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: 10, color: '#555', flex: 1 }}>{row.label}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#228DC1' }}>{row.val}</span>
                  </div>
                ))}
                <div style={{ fontSize: 9, fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.09em', marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Total per Owner</span><span style={{ color: '#aaa' }}>▼</span>
                </div>
              </>
            )}

            {/* ── Screen 1: Polygon_002 ── */}
            {screen === 1 && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Selected</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M2 2l6 6M8 2l-6 6" stroke="#333" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 6 }}>Polygon_002</p>
                <p style={{ fontSize: 10, color: '#555', marginBottom: 8 }}>Total Assets: <strong>3</strong></p>
                <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
                  <button style={s.btnPrimary}>Query assets</button>
                  <button style={s.btnSec}>Acquire assets</button>
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Totals by Asset type</span><span style={{ color: '#aaa' }}>▲</span>
                </div>
                {[
                  { dot: '#e84040', label: 'Bus Stop', val: '2' },
                  { dot: '#22bba0', label: 'Lamp Column', val: '1' },
                  { dot: '#22bba0', label: 'Light', val: '1', indent: true },
                ].map(row => (
                  <div key={row.label} style={{ ...s.assetRow, paddingLeft: row.indent ? 12 : 0 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: 10, color: '#555', flex: 1 }}>{row.label}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#228DC1' }}>{row.val}</span>
                  </div>
                ))}
                <div style={{ fontSize: 9, fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.09em', marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Total per Owner</span><span style={{ color: '#aaa' }}>▼</span>
                </div>
              </>
            )}

            {/* ── Screen 2: Bus Stop detail ── */}
            {screen === 2 && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#1a1a2e' }}>Bus Stop</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4 }}>
                    <path d="M2 2l6 6M8 2l-6 6" stroke="#333" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <p style={{ fontSize: 9, color: '#555', marginBottom: 2 }}>Asset Owner: <strong>AWTG AO 2 (DEMO)</strong></p>
                <p style={{ fontSize: 9, color: '#555', marginBottom: 2 }}>Asset ID: <strong>bus3</strong></p>
                <p style={{ fontSize: 9, color: '#555', marginBottom: 2 }}>NGR: N/A</p>
                <p style={{ fontSize: 8, color: '#888', marginBottom: 6 }}>51.5029001… / -0.1076309…</p>
                <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
                  <button style={s.btnPrimary}>Query asset</button>
                  <button style={s.btnSec}>Acquire asset</button>
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Asset Attributes</span><span style={{ color: '#aaa' }}>▲</span>
                </div>
                {[
                  { label: 'Height', val: 'N/A' },
                  { label: 'UPRN', val: 'N/A' },
                  { label: 'Pricing', val: '£100.00/yr' },
                  { label: 'Site Access', val: 'yes' },
                  { label: 'Power Supply', val: '🟢' },
                  { label: 'Backhaul', val: '🟢' },
                  { label: 'Site Availability', val: '🟢' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                    <span style={{ fontSize: 9, color: '#777' }}>{row.label}</span>
                    <span style={{ fontSize: 9, fontWeight: 600, color: '#333' }}>{row.val}</span>
                  </div>
                ))}
              </>
            )}

          </div>

          {/* Map area */}
          <div style={s.mapArea}>
            <div style={mapBg} />

            {/* Road lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 450 390" preserveAspectRatio="xMidYMid slice">
              {screen === 0 ? (
                /* City-level roads */
                <>
                  <path d="M0 195 C80 180 170 210 225 195 C300 175 380 200 450 185" stroke="#fff" strokeWidth="6" fill="none" opacity="0.9"/>
                  <path d="M0 195 C80 180 170 210 225 195 C300 175 380 200 450 185" stroke="#e8c87a" strokeWidth="3" fill="none" opacity="0.6"/>
                  <path d="M225 0 C215 80 230 150 225 195 C220 240 235 320 225 390" stroke="#fff" strokeWidth="6" fill="none" opacity="0.9"/>
                  <path d="M225 0 C215 80 230 150 225 195 C220 240 235 320 225 390" stroke="#e8c87a" strokeWidth="3" fill="none" opacity="0.6"/>
                  <path d="M0 95 L450 95" stroke="#fff" strokeWidth="3" opacity="0.5"/>
                  <path d="M0 295 L450 295" stroke="#fff" strokeWidth="3" opacity="0.5"/>
                  <path d="M112 0 L112 390" stroke="#fff" strokeWidth="3" opacity="0.5"/>
                  <path d="M338 0 L338 390" stroke="#fff" strokeWidth="3" opacity="0.5"/>
                  {/* "Thames" river */}
                  <path d="M0 270 C80 260 160 280 225 270 C310 258 390 272 450 265" stroke="#a8c8e8" strokeWidth="18" fill="none" opacity="0.5"/>
                  {/* Ealing region shading */}
                  <polygon points="80,120 160,100 200,130 190,200 170,240 110,230 70,190" fill={PURPLE} opacity="0.22"/>
                  <polygon points="80,120 160,100 200,130 190,200 170,240 110,230 70,190" stroke={PURPLE} strokeWidth="2" fill="none" opacity="0.5"/>
                </>
              ) : screen === 1 ? (
                /* Street-level roads */
                <>
                  <path d="M0 195 L450 195" stroke="#fff" strokeWidth="12" fill="none" opacity="0.9"/>
                  <path d="M0 195 L450 195" stroke="#e8c87a" strokeWidth="5" fill="none" opacity="0.6"/>
                  <path d="M225 0 L225 390" stroke="#fff" strokeWidth="8" fill="none" opacity="0.9"/>
                  <path d="M225 0 L225 390" stroke="#e8c87a" strokeWidth="3.5" fill="none" opacity="0.6"/>
                  {[50,100,150,250,300,350,400].map(x => <line key={x} x1={x} y1="0" x2={x} y2="390" stroke="#fff" strokeWidth="3" opacity="0.4"/>)}
                  {[50,100,150,250,300,350].map(y => <line key={y} x1="0" y1={y} x2="450" y2={y} stroke="#fff" strokeWidth="3" opacity="0.4"/>)}
                  {/* Polygon */}
                  <polygon points="130,60 320,80 380,200 290,340 120,310 80,170" fill={PURPLE} opacity="0.20" stroke={PURPLE} strokeWidth="2.5"/>
                </>
              ) : (
                /* Asset detail - zoomed street */
                <>
                  {[0,40,80,120,160,200,240,280,320,360,400,440].map(x => <line key={x} x1={x} y1="0" x2={x} y2="390" stroke="#fff" strokeWidth="5" opacity="0.5"/>)}
                  {[0,40,80,120,160,200,240,280,320,360].map(y => <line key={y} x1="0" y1={y} x2="450" y2={y} stroke="#fff" strokeWidth="5" opacity="0.5"/>)}
                  {[0,40,80,120,160,200,240,280,320,360,400,440].map(x => <line key={x} x1={x} y1="0" x2={x} y2="390" stroke="#d4cfc5" strokeWidth="2" opacity="0.5"/>)}
                  {[0,40,80,120,160,200,240,280,320,360].map(y => <line key={y} x1="0" y1={y} x2="450" y2={y} stroke="#d4cfc5" strokeWidth="2" opacity="0.5"/>)}
                  {/* Building blocks */}
                  {[[45,45,70,70],[165,45,70,70],[285,45,70,70],[45,165,70,70],[285,165,70,70],[45,285,70,70],[165,285,70,70],[285,285,70,70]].map(([x,y,w,h],i) => (
                    <rect key={i} x={x} y={y} width={w} height={h} fill="#d9d3c8" opacity="0.6" rx="2"/>
                  ))}
                </>
              )}
            </svg>

            {/* Map elements for screen 0: city clusters */}
            {screen === 0 && (
              <>
                {[
                  [PURPLE,'15%','26%','28','22'],
                  [PURPLE,'35%','17%','28','64'],
                  [PURPLE,'50%','12%','28','243'],
                  [PURPLE,'72%','22%','32','98'],
                  [PURPLE,'85%','12%','28','88'],
                  [PURPLE,'58%','38%','32','222'],
                  [PURPLE,'44%','44%','36','960'],
                  [PURPLE,'36%','55%','40','2.8k'],
                  [PURPLE,'52%','56%','42','4.8k'],
                  [PURPLE,'74%','44%','32','838'],
                  [PURPLE,'68%','28%','28','565'],
                  [PURPLE,'26%','62%','28','283'],
                  [PURPLE,'42%','73%','28','470'],
                  [PURPLE,'56%','72%','28','771'],
                  [PURPLE,'78%','68%','28','971'],
                  [PURPLE,'88%','58%','32','892'],
                ].map(([color, x, y, size, label]) => (
                  <div key={label} style={clusterStyle(color as string, x as string, y as string, parseInt(size as string))}>
                    <span style={{ fontSize: parseInt(size as string) >= 40 ? 9 : 8 }}>{label}</span>
                  </div>
                ))}
              </>
            )}

            {/* Map elements for screen 1: street markers */}
            {screen === 1 && (
              <>
                {/* Clusters outside polygon */}
                {[
                  [PURPLE,'9%','44%','28','3'],
                  [PURPLE,'9%','72%','28','3'],
                  [PURPLE,'18%','84%','28','2'],
                  [PURPLE,'68%','15%','28','4'],
                  [PURPLE,'56%','24%','28','2'],
                  [PURPLE,'72%','38%','28','2'],
                  [PURPLE,'78%','52%','28','2'],
                  [PURPLE,'62%','60%','28','2'],
                  [PURPLE,'50%','76%','28','2'],
                  [PURPLE,'40%','88%','28','2'],
                ].map(([color,x,y,size,label]) => (
                  <div key={`${x}${y}`} style={clusterStyle(color as string, x as string, y as string, parseInt(size as string))}>
                    <span style={{ fontSize: 8 }}>{label}</span>
                  </div>
                ))}
                {/* Asset markers inside polygon */}
                {[
                  ['#e84040','38%','32%'],
                  ['#e84040','46%','52%'],
                  ['#e84040','34%','62%'],
                  ['#22bba0','52%','40%'],
                  ['#f5a623','60%','28%'],
                  ['#e84040','54%','68%'],
                ].map(([color,x,y]) => (
                  <div key={`${x}${y}`} style={markerStyle(color as string, x as string, y as string)} />
                ))}
              </>
            )}

            {/* Map elements for screen 2: asset detail */}
            {screen === 2 && (
              <>
                {/* Bus stop markers */}
                {[['#e84040','50%','50%',true],['#e84040','25%','38%',false],['#e84040','30%','62%',false],['#e84040','42%','78%',false],['#e84040','68%','24%',false],['#e84040','74%','52%',false]].map(([color,x,y,active]) => (
                  <div key={`${x}${y}`} style={{
                    ...markerStyle(color as string, x as string, y as string),
                    width: active ? 26 : 18, height: active ? 26 : 18,
                    boxShadow: active ? `0 0 0 4px ${color}40, 0 2px 8px rgba(0,0,0,0.3)` : '0 2px 6px rgba(0,0,0,0.2)',
                    zIndex: active ? 10 : 1,
                  }} />
                ))}
                {/* Other asset types */}
                {[['#22bba0','62%','70%'],['#f5a623','36%','20%'],['#3d4d9e','78%','72%']].map(([color,x,y]) => (
                  <div key={`${x}${y}`} style={markerStyle(color as string, x as string, y as string)} />
                ))}
                {/* Numbered clusters */}
                {[[PURPLE,'14%','24%','8'],['#3d4d9e','88%','16%','2']].map(([color,x,y,label]) => (
                  <div key={label} style={clusterStyle(color as string, x as string, y as string, 24)}>
                    <span style={{ fontSize: 8 }}>{label}</span>
                  </div>
                ))}
              </>
            )}

            {/* Screen indicator dots */}
            <div style={{ position: 'absolute', bottom: 8, right: 10, display: 'flex', gap: 4 }}>
              {[0,1,2].map(i => (
                <div key={i} onClick={() => setScreen(i)} style={{
                  width: i === screen ? 16 : 6, height: 6, borderRadius: 3,
                  background: i === screen ? PURPLE : 'rgba(0,0,0,0.2)',
                  transition: 'width 0.3s ease', cursor: 'pointer',
                }} />
              ))}
            </div>
          </div>

        </div>

        {/* Status bar */}
        <div style={s.statusbar}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e', flexShrink: 0 }} />
          <span style={{ fontSize: 9, color: '#bbb' }}>{statusText[screen]}</span>
          <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 800, color: PURPLE }}>IDAMS</span>
        </div>

      </div>
    </div>
  )
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 className="font-heading mb-5 text-[#0a1628]">{title}</h2>
      <p className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/60">{desc}</p>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const capabilities = [
  { icon: faMapLocationDot, title: 'Interactive Asset Map',       color: '#228DC1', desc: 'View available assets on an intuitive map interface. Assets can be displayed as layers and filtered by location, type, ownership, availability, and other configurable criteria.' },
  { icon: faSearchLocation,  title: 'Advanced Search & Filtering', color: '#059669', desc: 'Find the right assets using geographic search, postcode, asset type, metadata, or selected map areas such as radius or polygon search.' },
  { icon: faDatabase,        title: 'Asset Data Management',       color: '#7c3aed', desc: 'Import, create, update, and manage asset records in one place. IDAMS supports flexible data mapping and can be configured to fit different asset structures and ownership models.' },
  { icon: faClipboardCheck,  title: 'Acquisition Workflow',        color: '#d97706', desc: 'Manage asset requests through a structured workflow with reviews, approvals, stakeholder input, and notifications — keeping every request visible and accountable.' },
  { icon: faChartLine,       title: 'Reporting & Insights',        color: '#dc2626', desc: 'Use dashboards, reports, and exports to understand asset usage, acquisition progress, and operational performance across your estate.' },
  { icon: faNetworkWired,    title: 'Integration-Ready Platform',  color: '#0891b2', desc: 'IDAMS provides APIs for importing and exporting data and can be configured during onboarding to support each customer\'s specific operational requirements.' },
]

const ownerBenefits = [
  'Centralised asset register',
  'Map-based asset visibility',
  'Flexible data import and export',
  'Configurable asset categories and metadata',
  'Approval workflow for acquisition requests',
  'Improved governance and auditability',
  'Better opportunity to monetise underused assets',
]

const operatorBenefits = [
  'Faster site identification',
  'Reduced manual communication',
  'Clearer asset availability and metadata',
  'Streamlined request and approval process',
  'Improved collaboration with asset owners',
  'Support for telecom site deployment and wider infrastructure use cases',
]


const whyIdams = [
  { icon: faLocationCrosshairs, color: '#228DC1', title: 'Faster Deployment',            desc: 'Reduce the time required to identify, assess, and request suitable assets for infrastructure deployment.' },
  { icon: faSitemap,            color: '#059669', title: 'Better Collaboration',          desc: 'Bring asset owners, operators, local authorities, and commercial partners into one shared digital process.' },
  { icon: faShieldHalved,       color: '#7c3aed', title: 'Stronger Governance',           desc: 'Track requests, approvals, data changes, and asset status in a controlled platform instead of relying on emails and spreadsheets.' },
  { icon: faRoute,              color: '#d97706', title: 'Configurable to Your Organisation', desc: 'IDAMS can be adapted to different asset types, approval processes, user roles, and reporting needs.' },
  { icon: faLayerGroup,         color: '#dc2626', title: 'Secure and Scalable',           desc: 'The platform is designed for secure cloud delivery, role-based access, data protection, and scalable asset management.' },
]

const audiences = [
  {
    icon: faBuildingColumns, color: '#228DC1',
    title: 'Asset Owners',
    who: 'Local authorities, public bodies, landlords, and private organisations',
    desc: 'IDAMS helps asset owners make their infrastructure visible and available for commercial or public-service use. Import asset data, manage records, define availability, review requests, and track the full acquisition process from enquiry to approval.',
    benefits: ownerBenefits,
  },
  {
    icon: faTowerBroadcast, color: '#3d4d9e',
    title: 'Mobile Network Operators & Neutral Hosts',
    who: 'MNOs, neutral hosts, and telecom infrastructure providers',
    desc: 'IDAMS helps operators identify suitable locations for network deployment more quickly. Search assets geographically, filter by metadata, select individual or multiple assets, and submit requests through a structured process.',
    benefits: operatorBenefits,
  },
]

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ServicesIoTPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [capRef,    capInView]    = useInView(0.08)
  const [audRef,    audInView]    = useInView(0.08)
  const [ucRef,     ucInView]     = useInView(0.08)
  const [whyRef,    whyInView]    = useInView(0.08)

  return (
    <>
      <ScrollProgress />
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName="IDAMS"
        title="See IDAMS in action"
        description="Request a demo to see how IDAMS helps asset owners, operators and infrastructure providers collaborate through one secure digital platform."
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
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none opacity-35"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(61,77,158,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 40%, rgba(61,77,158,0.06) 0, transparent 55%)' }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <h1 className="font-serif-display mb-6 leading-[1.02] text-[#0a1628]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              IDAMS
            </h1>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              Intelligent Digital Asset Management System. A secure, map-based marketplace that helps local authorities, operators, and infrastructure partners discover, request, and manage assets — faster.
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
            <IdamsMapVisual />
          </div>
        </div>
      </section>

      {/* ── TURNING ASSETS INTO OPPORTUNITIES ────────────────────────────── */}
      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <h2 className="font-heading mb-6 text-white">Turning assets into opportunities.</h2>
              <p className="text-[16px] font-normal leading-[1.78] text-white/60">
                Many organisations hold valuable infrastructure assets but manage them through spreadsheets, disconnected systems, manual approvals, and slow communication channels. IDAMS replaces fragmented processes with a single digital platform.
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

      {/* ── BUILT FOR TWO AUDIENCES ──────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div ref={audRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(audInView, 0)}>
            <SectionHeader
              title="Built for asset owners and asset consumers"
              desc="IDAMS serves both sides of the asset marketplace — those who hold infrastructure and those who need access to it."
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {audiences.map((aud, i) => (
              <div
                key={aud.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,22,40,0.09)]"
                style={reveal(audInView, i * 100)}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${aud.color}14` }}>
                  <FontAwesomeIcon icon={aud.icon} className="h-5 w-5" style={{ color: aud.color }} />
                </div>
                <p className="mb-1 text-[12px] font-medium text-[#0a1628]/45">{aud.who}</p>
                <h3 className="mb-4 text-[18px] font-semibold leading-[1.3] text-[#0a1628]">{aud.title}</h3>
                <p className="mb-6 text-[14px] font-normal leading-[1.75] text-[#0a1628]/60">{aud.desc}</p>
                <div className="space-y-2.5 border-t border-gray-100 pt-6">
                  {aud.benefits.map(b => (
                    <div key={b} className="flex items-start gap-2.5">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: aud.color }} />
                      <span className="text-[13px] leading-snug text-[#0a1628]/65">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY PLATFORM CAPABILITIES ────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-[#f8fafc] py-24">
        <div ref={capRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(capInView, 0)}>
            <SectionHeader
              title="Key platform capabilities"
              desc="IDAMS provides a complete set of tools for asset discovery, management, acquisition, and collaboration."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(10,22,40,0.10)]"
                style={reveal(capInView, i * 70)}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${cap.color}14` }}>
                  <FontAwesomeIcon icon={cap.icon} className="h-5 w-5" style={{ color: cap.color }} />
                </div>
                <h3 className="mb-3 text-[15px] font-semibold leading-[1.3] text-[#0a1628]">{cap.title}</h3>
                <p className="text-[13px] font-normal leading-[1.75] text-[#0a1628]/60">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="border-t border-[#0d2442] bg-[#0a1628] py-24">
        <div ref={ucRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(ucInView, 0)}>
            <div className="mb-14 max-w-3xl">
              <h2 className="font-heading mb-5 text-white">Use cases</h2>
              <p className="text-[16px] font-normal leading-[1.75] text-white/60">
                IDAMS is designed for organisations deploying connectivity and infrastructure assets across the public and private sector.
              </p>
            </div>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { icon: faTowerBroadcast, title: '5G & Small Cell', desc: '5G and small cell deployment across urban and rural environments.' },
              { icon: faLocationCrosshairs, title: 'Site Acquisition', desc: 'Mobile and neutral host site acquisition with structured workflows.' },
              { icon: faCity, title: 'EV Charging', desc: 'EV charging infrastructure siting and asset acquisition.' },
              { icon: faNetworkWired, title: 'IoT Infrastructure', desc: 'IoT sensor and device infrastructure discovery and management.' },
              { icon: faBuildingColumns, title: 'Public Asset Monetisation', desc: 'Councils monetising public assets for connectivity and services.' },
              { icon: faMapLocationDot, title: 'Smart City Assets', desc: 'Advertising, smart city, and street furniture asset reuse.' },
              { icon: faWater, title: 'Land & Property', desc: 'Public and private land or property assets for infrastructure use.' },
              { icon: faRoute, title: 'Street Furniture', desc: 'Street furniture reuse and repurposing for network deployment.' },
              { icon: faClipboardCheck, title: 'Multi-stakeholder Approvals', desc: 'Multi-stakeholder asset approval workflows with full audit trail.' },
            ].map((uc, i) => (
              <div
                key={uc.title}
                className="min-h-[180px] bg-[#0d1c31] p-7 transition-colors hover:bg-[#10243d]"
                style={reveal(ucInView, i * 50)}
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center bg-[#228DC1]/15">
                  <FontAwesomeIcon icon={uc.icon} className="h-4 w-4 text-[#7ac4e0]" />
                </div>
                <h3 className="mb-2 text-[13px] font-semibold text-white">{uc.title}</h3>
                <p className="text-[12px] font-normal leading-[1.68] text-white/45">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IDAMS ────────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div ref={whyRef} className="mx-auto max-w-7xl px-8 lg:px-12">
          <div style={reveal(whyInView, 0)}>
            <SectionHeader
              title="Why IDAMS?"
              desc="From asset register to digital marketplace — IDAMS creates a practical bridge between organisations that own assets and those that need access to them."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyIdams.map((w, i) => (
              <div
                key={w.title}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_1px_8px_rgba(10,22,40,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(10,22,40,0.09)]"
                style={reveal(whyInView, i * 70)}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `${w.color}12`, border: `1px solid ${w.color}20` }}>
                  <FontAwesomeIcon icon={w.icon} className="h-4 w-4" style={{ color: w.color }} />
                </div>
                <div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-[1.3] text-[#0a1628]">{w.title}</h3>
                  <p className="text-[13px] font-normal leading-[1.72] text-[#0a1628]/60">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to unlock the value of your assets?"
        subtitle="Speak to AWTG to see how IDAMS can support your organisation's asset management, acquisition, and infrastructure deployment needs."
        primaryLabel="Request a Demo"
        primaryOnClick={() => setIsDemoOpen(true)}
      />
    </>
  )
}
