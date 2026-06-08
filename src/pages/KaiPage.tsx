import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faGear, faXmark, faSliders, faBookOpen, faPlug, faChevronDown, faPaperPlane, faMicrophone } from '@fortawesome/free-solid-svg-icons'
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

function useCountUp(end: number, inView: boolean, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t0 = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - t0) / duration, 1)
      setVal((1 - Math.pow(1 - p, 3)) * end)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, end, duration])
  return val
}

const reveal = (inView: boolean, delay = 0): CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
})

const certISO42001 = new URL('../assets/cert-iso42001.svg', import.meta.url).href
const certCREST    = new URL('../assets/cert-crest.svg',    import.meta.url).href

const integrationLogos = {
  appleMail: new URL('../assets/Integration/Apple Mail.svg', import.meta.url).href,
  doc: new URL('../assets/Integration/Doc.svg', import.meta.url).href,
  gmail: new URL('../assets/Integration/Gmail.svg', import.meta.url).href,
  hubspot: new URL('../assets/Integration/Hubspot.svg', import.meta.url).href,
  jira: new URL('../assets/Integration/Jira.svg', import.meta.url).href,
  outlook: new URL('../assets/Integration/Outlook.svg', import.meta.url).href,
  protonMail: new URL('../assets/Integration/Proton Mail.svg', import.meta.url).href,
  salesforce: new URL('../assets/Integration/Salesforce.svg', import.meta.url).href,
  sap: new URL('../assets/Integration/SAP.svg', import.meta.url).href,
  teams: new URL('../assets/Integration/Teams.svg', import.meta.url).href,
  telegram: new URL('../assets/Integration/Telegram.svg', import.meta.url).href,
  whatsapp: new URL('../assets/Integration/Whatsapp.svg', import.meta.url).href,
  yahooMail: new URL('../assets/Integration/Yahoo Mail.svg', import.meta.url).href,
  zoho: new URL('../assets/Integration/Zoho.svg', import.meta.url).href,
  kaiHoriz: new URL('../assets/KAI Page Icons/logo horiz.svg', import.meta.url).href,
}

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

function StatCard({ prefix = '', num, suffix = '', label, note, delay = 0 }: {
  prefix?: string; num: number; suffix?: string; label: string; note: string; delay?: number
}) {
  const [ref, inView] = useInView()
  const val = useCountUp(num, inView)
  const display = Number.isInteger(num) ? Math.round(val).toString() : val.toFixed(1)
  return (
    <div ref={ref} className="relative bg-white border border-gray-200 px-8 py-8 shadow-[0_1px_8px_rgba(10,22,40,0.03)] overflow-hidden" style={reveal(inView, delay)}>
      <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#228DC1] to-[#0e6a9a]" />
      <p className="font-black leading-none mb-2" style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #228DC1 0%, #0e6a9a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {prefix}{display}{suffix}
      </p>
      <p className="text-[#0a1628] text-[13px] font-semibold mb-0.5">{label}</p>
      <p className="text-[#0a1628]/60 text-[10px] font-normal">{note}</p>
    </div>
  )
}

function GlobalReachMap() {
  const nodes = [
    { id: 'nyc', label: 'New York', x: 196, y: 156, delay: '0s' },
    { id: 'lon', label: 'London', x: 354, y: 126, delay: '0.7s' },
    { id: 'dub', label: 'Dubai', x: 438, y: 177, delay: '1.4s' },
    { id: 'sin', label: 'Singapore', x: 529, y: 220, delay: '2.1s' },
    { id: 'syd', label: 'Sydney', x: 594, y: 286, delay: '2.8s' },
  ]

  return (
    <div className="relative -mx-8 lg:-ml-16 lg:-mr-4 overflow-visible bg-transparent">
      <style>{`
        @keyframes kaiMapSignal {
          0% { stroke-dashoffset: 520; opacity: 0; }
          16% { opacity: 0.92; }
          76% { opacity: 0.72; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes kaiMapPulse {
          0%, 100% { transform: scale(0.82); opacity: 0.9; }
          50% { transform: scale(1.8); opacity: 0.1; }
        }
        @keyframes kaiMapFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        .kai-map-shell {
          animation: kaiMapFloat 7s ease-in-out infinite;
        }
        .kai-map-signal {
          stroke-dasharray: 520;
          stroke-dashoffset: 520;
          animation: kaiMapSignal 5.2s ease-in-out infinite;
        }
        .kai-map-signal-2 { animation-delay: 1.25s; }
        .kai-map-signal-3 { animation-delay: 2.5s; }
        .kai-map-node-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: kaiMapPulse 2.7s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 720 380" role="img" aria-label="Kai global network shown on a world map with live connections" className="block min-h-[360px] w-full">
        <defs>
          <linearGradient id="kaiMapLandFill" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#d8f6ea" />
            <stop offset="46%" stopColor="#78c8ad" />
            <stop offset="100%" stopColor="#2f7d6e" />
          </linearGradient>
          <linearGradient id="kaiMapStroke" x1="160" x2="610" y1="120" y2="285" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8ceaff" stopOpacity="0" />
            <stop offset="42%" stopColor="#37c3ef" />
            <stop offset="100%" stopColor="#228DC1" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="kaiMapOceanGlow" cx="48%" cy="48%" r="62%">
            <stop offset="0%" stopColor="#b8efff" stopOpacity="0.44" />
            <stop offset="58%" stopColor="#52bce8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#228DC1" stopOpacity="0" />
          </radialGradient>
          <filter id="kaiMapShadow" x="-18%" y="-28%" width="136%" height="160%">
            <feDropShadow dx="0" dy="24" stdDeviation="26" floodColor="#0a1628" floodOpacity="0.16" />
          </filter>
          <filter id="kaiMapNodeGlow" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="720" height="380" fill="transparent" />
        <ellipse cx="370" cy="324" rx="290" ry="38" fill="#0a1628" opacity="0.055" />
        <ellipse cx="372" cy="184" rx="330" ry="168" fill="url(#kaiMapOceanGlow)" />

        <g className="kai-map-shell" filter="url(#kaiMapShadow)">
          <g fill="none" stroke="#9feaff" strokeWidth="0.7" opacity="0.18">
            <path d="M44 190h650" />
            <path d="M70 116h596" />
            <path d="M86 260h560" />
            <path d="M172 66c-42 90-42 185 0 278" />
            <path d="M360 46c-34 104-34 218 0 316" />
            <path d="M552 66c40 94 40 184 0 278" />
          </g>

          <g fill="url(#kaiMapLandFill)" stroke="#b7f0dc" strokeWidth="1.2" opacity="0.93">
            <path d="M74 115c16-25 49-39 87-36 39 3 68 18 88 43 15 19 34 24 61 26 16 1 29 11 32 25-21 20-52 20-74 6-16-10-32-10-48 1-18 13-39 14-57 3-21-13-41-5-63-10-31-7-43-38-26-58Z" />
            <path d="M204 208c26 7 43 25 45 51 2 31-15 58-38 84-24-12-39-38-42-68-3-28 3-49 35-67Z" />
            <path d="M315 91c28-21 72-25 107-13 26 9 41 27 37 50-24 9-41 1-61-10-17-9-36-8-55-2-21 7-41 5-56-9 3-7 8-12 28-16Z" />
            <path d="M343 142c18-10 46-8 63 4 14 10 19 27 13 44-8 24 10 49 24 71-24 14-55 0-68-25-11-21-29-33-47-44-20-13-14-40 15-50Z" />
            <path d="M437 126c39-24 105-27 148-4 31 16 44 39 36 64-31 10-65 2-93-18-22-16-46-21-75-16-22 4-42 0-53-12 8-7 18-11 37-14Z" />
            <path d="M502 208c35-10 70-2 97 22 21 19 25 45 12 73-34 0-64-15-80-41-12-19-29-29-55-35 5-11 12-18 26-19Z" />
            <path d="M592 270c28-8 61 2 83 23 14 14 16 33 3 49-34-1-67-16-88-39-9-10-9-21 2-33Z" />
            <path d="M612 166c18-8 41-4 57 9 13 11 17 27 9 43-22 2-43-7-57-23-10-12-11-23-9-29Z" />
          </g>
        </g>

        <path className="kai-map-signal" d="M196 156 C256 82 301 92 354 126 C394 151 416 165 438 177" fill="none" stroke="url(#kaiMapStroke)" strokeWidth="3.4" strokeLinecap="round" />
        <path className="kai-map-signal kai-map-signal-2" d="M354 126 C458 104 514 150 529 220 C541 254 568 276 594 286" fill="none" stroke="url(#kaiMapStroke)" strokeWidth="3.4" strokeLinecap="round" />
        <path className="kai-map-signal kai-map-signal-3" d="M196 156 C297 268 426 274 529 220" fill="none" stroke="url(#kaiMapStroke)" strokeWidth="3.4" strokeLinecap="round" />

        {nodes.map((node) => (
          <g key={node.id} filter="url(#kaiMapNodeGlow)">
            <circle className="kai-map-node-pulse" cx={node.x} cy={node.y} r="16" fill="#6fe7ff" opacity="0.25" style={{ animationDelay: node.delay }} />
            <circle cx={node.x} cy={node.y} r="7" fill="#e9fbff" stroke="#228DC1" strokeWidth="2.4" />
            <circle cx={node.x} cy={node.y} r="2.5" fill="#061a32" />
          </g>
        ))}
      </svg>
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-transparent">
      <style>{`
        @keyframes kaiGlobeLand {
          from { transform: translateX(-276px); }
          to { transform: translateX(0); }
        }
        @keyframes kaiGlobeSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes kaiGlobeSignal {
          0% { stroke-dashoffset: 260; opacity: 0; }
          18% { opacity: 0.96; }
          78% { opacity: 0.78; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes kaiGlobePulse {
          0%, 100% { transform: scale(0.82); opacity: 0.9; }
          50% { transform: scale(1.62); opacity: 0.12; }
        }
        @keyframes kaiSatelliteDrift {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.42; }
          50% { transform: translate3d(8px, -5px, 0); opacity: 0.9; }
        }
        .kai-globe-land {
          animation: kaiGlobeLand 18s linear infinite;
        }
        .kai-globe-orbit {
          animation: kaiGlobeSpin 17s linear infinite;
          transform-box: view-box;
          transform-origin: 280px 160px;
        }
        .kai-globe-orbit-slow {
          animation-duration: 26s;
          animation-direction: reverse;
        }
        .kai-globe-signal {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          animation: kaiGlobeSignal 4.8s ease-in-out infinite;
        }
        .kai-globe-signal-2 { animation-delay: 1.25s; }
        .kai-globe-signal-3 { animation-delay: 2.5s; }
        .kai-globe-node-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: kaiGlobePulse 2.7s ease-in-out infinite;
        }
        .kai-globe-satellite {
          animation: kaiSatelliteDrift 4.5s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 560 320" role="img" aria-label="Kai global network shown as a revolving world globe with live connections" className="block h-full min-h-[300px] w-full">
        <defs>
          <radialGradient id="kaiSpaceGlow" cx="50%" cy="47%" r="70%">
            <stop offset="0%" stopColor="#123a5a" />
            <stop offset="58%" stopColor="#071423" />
            <stop offset="100%" stopColor="#050b13" />
          </radialGradient>
          <radialGradient id="kaiGlobeWater" cx="36%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#dff7ff" />
            <stop offset="19%" stopColor="#7ed7f4" />
            <stop offset="48%" stopColor="#228DC1" />
            <stop offset="77%" stopColor="#0d4d7a" />
            <stop offset="100%" stopColor="#061a32" />
          </radialGradient>
          <radialGradient id="kaiGlobeAtmosphere" cx="35%" cy="28%" r="68%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="44%" stopColor="rgba(92,205,246,0.2)" />
            <stop offset="74%" stopColor="rgba(34,141,193,0.08)" />
            <stop offset="100%" stopColor="rgba(34,141,193,0)" />
          </radialGradient>
          <linearGradient id="kaiLandFill" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#d6f6e8" />
            <stop offset="45%" stopColor="#63b99e" />
            <stop offset="100%" stopColor="#1d735f" />
          </linearGradient>
          <linearGradient id="kaiSignalStroke" x1="170" x2="430" y1="80" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9cecff" stopOpacity="0" />
            <stop offset="35%" stopColor="#9cecff" />
            <stop offset="100%" stopColor="#228DC1" stopOpacity="0" />
          </linearGradient>
          <filter id="kaiGlobeShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#000814" floodOpacity="0.58" />
          </filter>
          <filter id="kaiNodeGlow" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="kaiGlobeClip">
            <circle cx="280" cy="160" r="112" />
          </clipPath>
          <mask id="kaiGlobeFade">
            <rect width="560" height="320" fill="black" />
            <circle cx="280" cy="160" r="112" fill="white" />
            <ellipse cx="336" cy="160" rx="72" ry="114" fill="rgba(0,0,0,0.36)" />
          </mask>
        </defs>

        <rect width="560" height="320" fill="transparent" />
        <ellipse cx="280" cy="277" rx="128" ry="20" fill="#0a1628" opacity="0.08" />

        <g filter="url(#kaiGlobeShadow)">
          <circle cx="280" cy="160" r="116" fill="#4dc9ee" opacity="0.18" />
          <circle cx="280" cy="160" r="112" fill="url(#kaiGlobeWater)" />

          <g clipPath="url(#kaiGlobeClip)">
            <rect x="168" y="48" width="224" height="224" fill="url(#kaiGlobeWater)" />
            <g opacity="0.18" stroke="#d8f8ff" strokeWidth="0.75" fill="none">
              <ellipse cx="280" cy="160" rx="36" ry="112" />
              <ellipse cx="280" cy="160" rx="72" ry="112" />
              <path d="M168 160h224" />
              <path d="M181 120c54 20 110 21 166 0" />
              <path d="M181 200c54-20 110-21 166 0" />
            </g>

            <g className="kai-globe-land" fill="url(#kaiLandFill)" stroke="#b5f0d9" strokeWidth="0.8" opacity="0.92">
              <path d="M192 93c21-12 54-8 72 11 8 9 12 20 9 30-14 6-30 4-41-4-12-9-19-4-34-7-18-4-27-19-6-30Z" />
              <path d="M266 91c28-16 66-12 94 11 17 15 27 34 18 48-24 7-44-6-64-16-16-8-35-8-46-23-4-5-6-12-2-20Z" />
              <path d="M336 151c22 1 44 15 53 35 10 22 1 44-19 52-26-8-42-25-48-51-4-17 0-30 14-36Z" />
              <path d="M238 158c24 5 41 20 44 42 3 21-8 38-24 47-20-8-30-27-30-53 0-17 3-29 10-36Z" />
              <path d="M116 102c31-17 76-12 103 11 14 12 19 27 10 41-26 8-51-4-74-16-22-12-43-12-61-21 3-7 8-12 22-15Z" />
              <path d="M110 176c30-9 66 2 84 27 10 14 10 31-1 44-29-3-58-18-77-41-8-10-10-19-6-30Z" />
              <path d="M469 95c30-12 64 0 80 24 8 13 9 27 2 41-25 6-54-2-78-20-18-13-27-29-4-45Z" />
              <path d="M447 181c35-7 70 9 82 36 6 15 4 31-6 43-34-5-65-22-82-50-5-9-4-16 6-29Z" />
              <path d="M560 93c21-12 54-8 72 11 8 9 12 20 9 30-14 6-30 4-41-4-12-9-19-4-34-7-18-4-27-19-6-30Z" />
              <path d="M634 91c28-16 66-12 94 11 17 15 27 34 18 48-24 7-44-6-64-16-16-8-35-8-46-23-4-5-6-12-2-20Z" />
              <path d="M704 151c22 1 44 15 53 35 10 22 1 44-19 52-26-8-42-25-48-51-4-17 0-30 14-36Z" />
              <path d="M606 158c24 5 41 20 44 42 3 21-8 38-24 47-20-8-30-27-30-53 0-17 3-29 10-36Z" />
            </g>

            <rect x="168" y="48" width="224" height="224" fill="url(#kaiGlobeAtmosphere)" />
            <ellipse cx="342" cy="160" rx="80" ry="116" fill="#020711" opacity="0.32" />
          </g>

          <circle cx="280" cy="160" r="112" fill="none" stroke="#a6edff" strokeWidth="1.2" opacity="0.65" />
          <circle cx="280" cy="160" r="119" fill="none" stroke="#6cdcff" strokeWidth="1" opacity="0.18" />
        </g>

        <g className="kai-globe-orbit" fill="none" stroke="#79e7ff" strokeWidth="1.1" opacity="0.36">
          <ellipse cx="280" cy="160" rx="158" ry="48" />
        </g>
        <g className="kai-globe-orbit kai-globe-orbit-slow" fill="none" stroke="#ffffff" strokeWidth="0.9" opacity="0.18">
          <ellipse cx="280" cy="160" rx="154" ry="76" transform="rotate(-18 280 160)" />
        </g>

        <path className="kai-globe-signal" d="M228 142 C258 86 324 83 383 205" fill="none" stroke="url(#kaiSignalStroke)" strokeWidth="3" strokeLinecap="round" />
        <path className="kai-globe-signal kai-globe-signal-2" d="M282 113 C360 100 405 139 326 238" fill="none" stroke="url(#kaiSignalStroke)" strokeWidth="3" strokeLinecap="round" />
        <path className="kai-globe-signal kai-globe-signal-3" d="M228 142 C276 226 330 236 339 170" fill="none" stroke="url(#kaiSignalStroke)" strokeWidth="3" strokeLinecap="round" />

        {nodes.map((node) => (
          <g key={node.id} filter="url(#kaiNodeGlow)">
            <circle className="kai-globe-node-pulse" cx={node.x} cy={node.y} r="13" fill="#6fe7ff" opacity="0.26" style={{ animationDelay: node.delay }} />
            <circle cx={node.x} cy={node.y} r="5.5" fill="#e9fbff" stroke="#228DC1" strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r="2" fill="#061a32" />
          </g>
        ))}

      </svg>
    </div>
  )
}

// -- Kai Dashboard mockup ------------------------------------------------------
export function KaiDashboard() {
  const [activeTab,  setActiveTab]  = useState('details')
  const [activeAsst, setActiveAsst] = useState(0)
  const [visible,    setVisible]    = useState<number[]>([])
  const [typing,     setTyping]     = useState(false)
  const tmrRef = useRef<number[]>([])

  type PlayMsg = { role: 'user' | 'ai' | 'signal'; text: string; meta?: string }
  const playMsgs: PlayMsg[] = [
    { role: 'user',   text: 'Hi, my order hasn\'t arrived � it\'s been 5 days.' },
    { role: 'ai',     text: 'I can see order #48291. It shipped Monday and is with the courier � delivery is due today before 6 pm.', meta: 'Order lookup � CRM synced' },
    { role: 'user',   text: 'Perfect, thank you!' },
    { role: 'signal', text: 'Resolved � 22s handle time � CSAT triggered' },
  ]
  const delays = [900, 2300, 3900, 5100]

  const runChat = () => {
    setVisible([])
    setTyping(false)
    tmrRef.current.forEach(clearTimeout)
    tmrRef.current = []
    playMsgs.forEach((msg, i) => {
      if (msg.role === 'ai') {
        const t1 = window.setTimeout(() => setTyping(true), delays[i] - 700)
        tmrRef.current.push(t1)
      }
      const t = window.setTimeout(() => {
        setTyping(false)
        setVisible(prev => [...prev, i])
      }, delays[i])
      tmrRef.current.push(t)
    })
  }

  useEffect(() => {
    const t = window.setTimeout(runChat, 700)
    return () => { clearTimeout(t); tmrRef.current.forEach(clearTimeout) }
  }, [])

  const resolved   = visible.includes(3)
  const tabs       = ['Details', 'Instructions', 'Training', 'Prompts', 'Chat interface', 'Integrations']
  const assistants = [
    { name: 'Contact Centre AI', sessions: '12,481', live: true  },
    { name: 'British Council',   sessions: '8,924',  live: true  },
  ]

  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow-[0_24px_60px_rgba(10,22,40,0.10)]">

      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#f0f2f5] border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#fc5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 flex justify-center">
          <div className="bg-white border border-gray-200 px-4 py-1 text-[11px] text-gray-400 font-normal text-center" style={{ minWidth: '240px' }}>
            app.kai.awtg.co.uk/dashboard
          </div>
        </div>
        <button onClick={runChat} className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#228DC1]/50 hover:text-[#228DC1] transition-colors">
          Replay
        </button>
      </div>

      {/* App top bar */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-[#0a1628] border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 bg-[#228DC1] flex items-center justify-center shrink-0">
            <img src="/kai-logo.svg" alt="Kai" className="w-3.5 h-3.5 object-contain brightness-0 invert"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          </div>
          <div className="leading-none">
            <span className="text-white font-bold text-[13px] tracking-[-0.01em]">Kai</span>
            <span className="text-white/30 text-[9px] ml-2">powered by AWTG</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[10px] font-semibold text-white/80 border border-white/20 px-3 py-1 hover:bg-white/10 transition-colors">
            Switch to Kai Agent
          </button>
          <div className="w-6 h-6 bg-white/10 flex items-center justify-center">
            <FontAwesomeIcon icon={faGear} className="w-3 h-3 text-white/45" />
          </div>
        </div>
      </div>

      {/* 3-column layout */}
      <div className="grid grid-cols-[195px_1fr_235px] divide-x divide-gray-100" style={{ minHeight: '460px' }}>

        {/* -- Sidebar -- */}
        <div className="bg-[#f8fafc] flex flex-col">
          <div className="flex-1 px-3 pt-5 pb-3 overflow-hidden">
            <p className="font-bold text-[#0a1628] text-[14px] mb-4 px-1">Dashboard</p>

            {/* Admin Panel nav group */}
            <div className="mb-3">
              <div className="flex items-center justify-between px-2 py-1 mb-0.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35">Admin Panel</span>
                <span className="text-[#0a1628]/25 text-[10px]">?</span>
              </div>
              {['Dashboard', 'Access management', 'User management'].map(item => (
                <button key={item} className="w-full text-left px-3 py-1.5 text-[11px] text-[#0a1628]/50 hover:text-[#0a1628]/80 hover:bg-white/70 transition-colors">
                  {item}
                </button>
              ))}
            </div>

            <div className="space-y-0.5 mb-4">
              {['Chats history', 'Collected leads'].map(item => (
                <button key={item} className="w-full text-left px-3 py-1.5 text-[11px] text-[#0a1628]/50 hover:text-[#0a1628]/80 hover:bg-white/70 transition-colors">
                  {item}
                </button>
              ))}
            </div>

            {/* Assistants */}
            <div className="border-t border-gray-200 pt-3">
              <div className="flex items-center justify-between px-1 mb-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35">Assistants</p>
                <span className="text-[9px] text-[#0a1628]/30 font-medium">2 / 40</span>
              </div>
              {assistants.map((asst, i) => (
                <button
                  key={asst.name}
                  onClick={() => setActiveAsst(i)}
                  className={`w-full flex items-center gap-2 px-2 py-2 mb-1 text-left transition-all ${
                    activeAsst === i
                      ? 'bg-white border border-gray-200 shadow-[0_1px_4px_rgba(10,22,40,0.06)]'
                      : 'hover:bg-white/60'
                  }`}
                >
                  <div className="w-5 h-5 bg-[#228DC1] flex items-center justify-center shrink-0">
                    <span className="text-white text-[8px] font-black">K</span>
                  </div>
                  <span className={`text-[11px] truncate flex-1 ${activeAsst === i ? 'text-[#0a1628] font-semibold' : 'text-[#0a1628]/50'}`}>
                    {asst.name}
                  </span>
                  {asst.live && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Usage stats pinned to bottom */}
          <div className="px-3 py-4 border-t border-gray-200 shrink-0">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[9px] font-bold text-[#0a1628]/35 uppercase tracking-[0.14em]">Enterprise plan</p>
              <span className="text-[9px] text-[#228DC1] font-semibold">Active</span>
            </div>
            {[
              { label: 'Sessions', pct: 25 },
              { label: 'Tokens',   pct: 11 },
              { label: 'Messages', pct: 4  },
            ].map(u => (
              <div key={u.label} className="mb-2">
                <div className="flex justify-between text-[9px] text-[#0a1628]/40 mb-0.5">
                  <span>{u.label}</span><span>{u.pct}%</span>
                </div>
                <div className="h-0.5 bg-gray-200 overflow-hidden">
                  <div className="h-full bg-[#228DC1] transition-all" style={{ width: `${u.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -- Main content -- */}
        <div className="flex flex-col bg-white">

          {/* Tab bar */}
          <div className="flex items-end border-b border-gray-100 overflow-x-auto shrink-0">
            {tabs.map(tab => {
              const key = tab.toLowerCase().replace(/\s+/g, '-')
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-3 text-[11px] whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === key
                      ? 'border-[#228DC1] text-[#228DC1] font-semibold'
                      : 'border-transparent text-[#0a1628]/40 hover:text-[#0a1628]/60 font-medium'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-auto">

            {activeTab === 'details' && (
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1.5">Name</p>
                    <div className="flex items-center gap-2">
                      <p className="text-[#0a1628] font-semibold text-[13px]">{assistants[activeAsst].name}</p>
                      <span className="text-[#228DC1]/40 text-[11px] cursor-pointer hover:text-[#228DC1] transition-colors">?</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1.5">Status</p>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#059669]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                      Live
                    </span>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1.5">AI model</p>
                    <div className="inline-flex items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 cursor-pointer hover:border-gray-300 transition-colors">
                      <span className="text-[#0a1628] text-[12px] font-medium">Claude Sonnet</span>
                      <span className="text-gray-400 text-[9px]">?</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1.5">Sessions (30d)</p>
                    <p className="text-[#0a1628] font-semibold text-[13px]">{assistants[activeAsst].sessions}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1.5">Created</p>
                    <p className="text-[#0a1628]/60 text-[12px]">12 Mar 2025</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1.5">Last trained</p>
                    <p className="text-[#0a1628]/60 text-[12px]">Today, 08:14</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-2.5">Active channels</p>
                  <div className="flex gap-2 flex-wrap">
                    {['Web chat', 'WhatsApp', 'Email', 'Microsoft Teams'].map(ch => (
                      <span key={ch} className="text-[10px] font-medium text-[#228DC1] bg-[#e5f4fa] border border-[#228DC1]/20 px-2.5 py-1">{ch}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-2.5">Performance (30d)</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Resolution',      val: '74%',   color: '#059669' },
                      { label: 'Avg handle time', val: '38 sec', color: '#228DC1' },
                      { label: 'CSAT score',      val: '4.7/5', color: '#7c3aed' },
                    ].map(s => (
                      <div key={s.label} className="bg-[#f8fafc] border border-gray-100 px-3 py-3">
                        <p className="font-black text-[18px] leading-none mb-1" style={{ color: s.color, letterSpacing: '-0.02em' }}>{s.val}</p>
                        <p className="text-[9px] text-[#0a1628]/40">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-2">System instruction</p>
                  <div className="bg-[#f8fafc] border border-gray-100 p-4 font-mono text-[11px] text-[#0a1628]/60 leading-relaxed">
                    You are Kai, an AI agent for AWTG's Contact Centre. Assist customers with account queries, order tracking, billing and technical support. Always verify identity before accessing account data. Escalate safeguarding concerns or formal complaints to a human agent immediately. Maintain a professional, empathetic tone at all times.
                  </div>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-2">Escalation rules</p>
                  <div className="border border-gray-100 divide-y divide-gray-100">
                    {[
                      { trigger: 'Safeguarding concern',   action: 'Immediate escalation' },
                      { trigger: 'Formal complaint',        action: 'Senior agent queue' },
                      { trigger: 'Billing dispute > �500',  action: 'Finance team + full transcript' },
                      { trigger: 'Unresolved in 3 turns',   action: 'Human handoff with summary' },
                    ].map(r => (
                      <div key={r.trigger} className="flex items-center justify-between px-4 py-2.5">
                        <span className="text-[11px] text-[#0a1628]/60 font-medium">{r.trigger}</span>
                        <span className="text-[10px] text-[#228DC1] font-semibold shrink-0 ml-4">{r.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'training' && (
              <div className="p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-3">Knowledge base</p>
                <div className="border border-gray-100 divide-y divide-gray-100">
                  {[
                    { name: 'Contact Centre Policy v3.pdf', size: '2.4 MB', date: 'Today, 08:14', type: 'PDF' },
                    { name: 'Product FAQ � Q1 2025.docx',  size: '890 KB', date: '14 May 2025',  type: 'DOC' },
                    { name: 'Billing and Refunds Guide.pdf', size: '1.1 MB', date: '2 Apr 2025', type: 'PDF' },
                  ].map(f => (
                    <div key={f.name} className="flex items-center gap-3 px-4 py-3">
                      <div className="w-7 h-7 bg-[#e5f4fa] flex items-center justify-center shrink-0">
                        <span className="text-[#228DC1] text-[8px] font-black">{f.type}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-[#0a1628] truncate">{f.name}</p>
                        <p className="text-[9px] text-[#0a1628]/40">{f.size} � {f.date}</p>
                      </div>
                      <FontAwesomeIcon icon={faCircleCheck} className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-3">Connected services</p>
                <div className="space-y-1.5">
                  {[
                    { name: 'HubSpot CRM',        status: 'Connected', badge: 'CRM'       },
                    { name: 'Zendesk',             status: 'Connected', badge: 'Support'   },
                    { name: 'WhatsApp Business',   status: 'Connected', badge: 'Messaging' },
                    { name: 'Microsoft Teams',     status: 'Connected', badge: 'Messaging' },
                    { name: 'Jira',                status: 'Available', badge: 'Ticketing' },
                    { name: 'Salesforce',          status: 'Available', badge: 'CRM'       },
                  ].map(svc => (
                    <div key={svc.name} className="flex items-center gap-3 px-4 py-3 bg-[#f8fafc] border border-gray-100 hover:border-gray-200 transition-colors">
                      <span className="text-[9px] font-bold text-[#0a1628]/35 bg-white border border-gray-200 px-2 py-0.5 w-[68px] text-center shrink-0">{svc.badge}</span>
                      <span className="flex-1 text-[12px] font-medium text-[#0a1628]">{svc.name}</span>
                      <span className={`text-[10px] font-semibold shrink-0 ${svc.status === 'Connected' ? 'text-[#059669]' : 'text-[#0a1628]/30'}`}>
                        {svc.status === 'Connected' ? '? ' : '? '}{svc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!['details','instructions','training','integrations'].includes(activeTab) && (
              <div className="flex items-center justify-center h-full p-12 text-center">
                <div>
                  <p className="text-[#0a1628]/20 text-[13px] font-medium mb-1">
                    {tabs.find(t => t.toLowerCase().replace(/\s+/g,'-') === activeTab)}
                  </p>
                  <p className="text-[#0a1628]/15 text-[11px]">Configure this section for your assistant</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* -- Playground -- */}
        <div className="bg-[#f8fafc] flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-white shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35">Playground</p>
            <button onClick={runChat} className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#228DC1]/45 hover:text-[#228DC1] transition-colors">Replay</button>
          </div>

          {/* Chat widget */}
          <div className="flex flex-col flex-1 m-3 mb-2 bg-white border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(10,22,40,0.07)]">
            <div className="bg-[#228DC1] px-3.5 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 flex items-center justify-center shrink-0">
                  <span className="text-white text-[8px] font-black">K</span>
                </div>
                <div className="leading-none">
                  <p className="text-white font-semibold text-[11px]">{assistants[activeAsst].name}</p>
                  <p className="text-white/50 text-[9px]">powered by AWTG</p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#34d399]" style={{ boxShadow: '0 0 6px rgba(52,211,153,0.7)', animation: 'pulse 2s ease-in-out infinite' }} />
            </div>

            <div className="flex-1 p-3 space-y-2.5 overflow-hidden" style={{ background: '#fafafa', minHeight: '200px' }}>
              {/* Greeting bubble � always visible */}
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 bg-[#228DC1] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[8px] font-black">K</span>
                </div>
                <div className="bg-white border border-gray-100 px-3 py-2 shadow-[0_1px_3px_rgba(10,22,40,0.04)]">
                  <p className="text-[#0a1628] text-[10px] leading-relaxed">Hi there! How can I help you today?</p>
                </div>
              </div>

              {playMsgs.slice(0, 3).map((msg, i) => {
                if (!visible.includes(i)) return null
                if (msg.role === 'signal') return null
                if (msg.role === 'user') return (
                  <div key={i} className="flex justify-end" style={{ animation: 'fadeIn 200ms ease-out' }}>
                    <div className="max-w-[82%] bg-[#228DC1] px-3 py-2">
                      <p className="text-white text-[10px] leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                )
                return (
                  <div key={i} className="flex gap-2 items-start" style={{ animation: 'fadeIn 200ms ease-out' }}>
                    <div className="w-5 h-5 bg-[#228DC1] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-[8px] font-black">K</span>
                    </div>
                    <div>
                      <div className="bg-white border border-gray-100 px-3 py-2 shadow-[0_1px_3px_rgba(10,22,40,0.04)]">
                        <p className="text-[#0a1628] text-[10px] leading-relaxed">{msg.text}</p>
                      </div>
                      {msg.meta && (
                        <div className="mt-1 flex gap-1 flex-wrap">
                          {msg.meta.split(' � ').map(m => (
                            <span key={m} className="text-[8px] text-[#228DC1] bg-[#e5f4fa] border border-[#228DC1]/15 px-1.5 py-0.5">{m}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}

              {typing && (
                <div className="flex gap-2 items-start" style={{ animation: 'fadeIn 150ms ease-out' }}>
                  <div className="w-5 h-5 bg-[#228DC1] flex items-center justify-center shrink-0">
                    <span className="text-white text-[8px] font-black">K</span>
                  </div>
                  <div className="bg-white border border-gray-100 px-3 py-2.5 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" style={{ animation: 'pulse 0.9s ease-in-out infinite' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" style={{ animation: 'pulse 0.9s ease-in-out 0.18s infinite' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" style={{ animation: 'pulse 0.9s ease-in-out 0.36s infinite' }} />
                  </div>
                </div>
              )}

              {resolved && (
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f0fdf4] border border-[#059669]/20" style={{ animation: 'fadeIn 300ms ease-out' }}>
                  <FontAwesomeIcon icon={faCircleCheck} className="w-3 h-3 text-[#059669] shrink-0" />
                  <p className="text-[9px] text-[#059669] font-semibold">{playMsgs[3].text}</p>
                </div>
              )}
            </div>

            <div className="px-3 py-2 border-t border-gray-100 flex gap-1.5 shrink-0">
              <div className="flex-1 bg-[#f8fafc] border border-gray-100 px-2.5 py-1.5 text-[10px] text-gray-300">
                Type a message...
              </div>
              <div className="w-6 h-6 bg-[#228DC1] flex items-center justify-center shrink-0 self-center">
                <FontAwesomeIcon icon={faPaperPlane} className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Resolution stat card */}
          <div className="px-3 pb-3 shrink-0">
            <div className="bg-white border border-gray-100 px-4 py-3 shadow-[0_1px_6px_rgba(10,22,40,0.04)]">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#0a1628]/35">AI resolution</p>
                <p className="font-black text-[#059669] text-[15px] leading-none" style={{ letterSpacing: '-0.02em' }}>
                  {resolved ? '74%' : '73%'}
                </p>
              </div>
              <div className="h-1 bg-gray-100 overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-[#228DC1] to-[#059669]"
                  style={{ width: resolved ? '74%' : '73%', transition: 'width 0.9s ease-out' }} />
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { label: 'CSAT',       val: '+17%',   color: '#228DC1' },
                  { label: 'Contain.',   val: '+22%',   color: '#7c3aed' },
                  { label: 'Escalat.',   val: '-13%',   color: '#059669' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <p className="text-[10px] font-bold" style={{ color: s.color }}>{s.val}</p>
                    <p className="text-[8px] text-[#0a1628]/30">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// -- Integrations � Kai as glowing hub ----------------------------------------
function IntegrationsSection() {
  const [ref, inView] = useInView(0.08)

  // 5 � 3 grid = 15 slots; Kai sits at index 7 (row 1, col 2 � dead centre)
  type Item = { label: string; category: string; logo: string | null; isKai?: true }
  const items: Item[] = [
    { label: 'HubSpot',      category: 'CRM',        logo: integrationLogos.hubspot },
    { label: 'Salesforce',   category: 'CRM',        logo: integrationLogos.salesforce },
    { label: 'Proton Mail',  category: 'Email',      logo: integrationLogos.protonMail },
    { label: 'Yahoo Mail',   category: 'Email',      logo: integrationLogos.yahooMail },
    { label: 'Apple Mail',   category: 'Email',      logo: integrationLogos.appleMail },
    { label: 'Docs',         category: 'Knowledge',  logo: integrationLogos.doc },
    { label: 'WhatsApp',     category: 'Messaging',  logo: integrationLogos.whatsapp },
    { label: 'Kai',          category: 'AI Agent',   logo: '/kai-logo.svg',         isKai: true },
    { label: 'Telegram',     category: 'Messaging',  logo: integrationLogos.telegram },
    { label: 'Teams',        category: 'Messaging',  logo: integrationLogos.teams },
    { label: 'Jira',         category: 'Ticketing',  logo: integrationLogos.jira },
    { label: 'Gmail',        category: 'Email',      logo: integrationLogos.gmail },
    { label: 'Outlook',      category: 'Email',      logo: integrationLogos.outlook },
    { label: 'SAP',          category: 'ERP',        logo: integrationLogos.sap },
    { label: 'Zoho',         category: 'CRM',        logo: integrationLogos.zoho },
  ]

  // Manhattan distance from center card (row 1, col 2 in a 5-col grid)
  const dist = (i: number) => Math.abs(Math.floor(i / 5) - 1) + Math.abs((i % 5) - 2)

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className="text-[#228DC1] mb-4" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.75 }}>Integrations</p>
            <h2 className="font-heading text-[#0a1628] mb-5">
              Connects to your stack. Works from day one.
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] mb-8">
              Kai connects to your existing CRM, ticketing, messaging, knowledge, and workflow tools, giving your AI agent the context it needs to resolve queries, route requests, qualify leads, and trigger actions without replacing your current systems.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Customer context', value: 'CRM, tickets, knowledge bases, and account history' },
                { label: 'Omnichannel support', value: 'Web chat, email, WhatsApp, Teams, Slack, and voice' },
                { label: 'Actions and automation', value: 'APIs, workflows, handovers, and ticket creation' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#228DC1] rounded-full shrink-0 mt-1.5" />
                  <div className="grid gap-1">
                    <span className="text-[#0a1628] text-[13px] font-semibold leading-tight">{item.label}</span>
                    <span className="text-[#0a1628]/55 text-[13px] font-normal leading-relaxed">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 5 � 3 hub grid */}
          <div ref={ref} className="grid grid-cols-5 gap-2">
            {items.map((item, i) => {
              const d = dist(i)
              const isCorner   = d === 3
              const isAdjacent = d === 1

              return (
                <div
                  key={item.label}
                  className={`relative flex flex-col items-center justify-center gap-2 p-3 min-h-[100px] transition-all duration-300 select-none ${
                    item.isKai
                      ? 'z-10 [&_span]:hidden'
                      : isAdjacent
                        ? 'bg-[#f9fcff] border border-[#228DC1]/18 hover:border-[#228DC1]/40 hover:shadow-sm cursor-default'
                        : isCorner
                          ? 'bg-white border border-gray-100 opacity-50 cursor-default'
                          : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm cursor-default'
                  }`}
                  style={{
                    ...reveal(inView, d * 75),
                    ...(item.isKai ? {
                      background: '#ffffff',
                      border: '1.5px solid rgba(144,62,142,0.30)',
                      animation: inView ? 'kaiGlow 3s ease-in-out infinite' : 'none',
                    } : {}),
                  }}
                >
                  {item.isKai && (
                    <>
                      {/* Radial inner glow */}
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(144,62,142,0.08) 0%, transparent 70%)' }} />
                      {/* Pulse ring 1 */}
                      <div className="absolute inset-0 pointer-events-none rounded-sm"
                        style={{ border: '1.5px solid rgba(144,62,142,0.35)', animation: 'kaiPulseRing 2.4s ease-out infinite' }} />
                      {/* Pulse ring 2 — offset */}
                      <div className="absolute inset-0 pointer-events-none rounded-sm"
                        style={{ border: '1.5px solid rgba(144,62,142,0.20)', animation: 'kaiPulseRing 2.4s ease-out 1.2s infinite' }} />
                    </>
                  )}

                  {item.isKai ? (
                    <>
                      <img
                        src="/kai-logo-horiz.svg"
                        alt="Kai"
                        className="relative w-24 object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                      <span className="relative text-[8px] font-semibold text-[#903E8E] bg-[#903E8E]/10 border border-[#903E8E]/30 px-1.5 py-0.5 rounded-sm">
                        AI Agent · MCP
                      </span>
                    </>
                  ) : (
                    <>
                      <img src={item.logo ?? undefined} alt={item.label}
                        className="w-10 h-10 object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    </>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

function SecurityComplianceSection() {
  const [leftRef, leftInView] = useInView()
  const [gridRef, gridInView] = useInView()
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16 items-start">
          <div ref={leftRef} className="lg:sticky lg:top-28">
            <p className="type-label text-[#228DC1] mb-4" style={reveal(leftInView)}>Security & Compliance</p>
            <h2 className="font-heading text-[#0a1628] mb-5" style={{ ...reveal(leftInView, 100) }}>
              Designed for regulated<br />environments.
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mb-8 max-w-xl" style={reveal(leftInView, 180)}>
              Safe, measurable and auditable AI for teams with real governance requirements.
            </p>

            <div className="bg-[#0a1628] text-white p-8 shadow-[0_16px_50px_rgba(10,22,40,0.12)]" style={reveal(leftInView, 280)}>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 mb-4">Governance proof</p>
              <p className="font-heading text-[20px] leading-tight mb-3">ISO 42001 AI Management System certified</p>
              <p className="text-white/58 text-sm font-normal leading-relaxed mb-6">
                Governance, access control and auditability are built in from day one.
              </p>
              {/* Certification badges */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <img src={certISO42001} alt="ISO 42001" style={{ width: 36, height: 36, objectFit: 'contain' }} />
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.12em] leading-none mb-0.5">Certified</p>
                    <p className="text-[11px] font-semibold text-white/80 leading-none">ISO 42001</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <img src={certCREST} alt="CREST" style={{ width: 36, height: 36, objectFit: 'contain' }} />
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.12em] leading-none mb-0.5">Certified</p>
                    <p className="text-[11px] font-semibold text-white/80 leading-none">CREST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div ref={gridRef} className="grid sm:grid-cols-2 gap-4">
              {[
                { badge: 'Encryption', title: 'Protected data paths', detail: 'TLS in transit. AES-256 at rest.' },
                { badge: 'Access', title: 'Least-privilege control', detail: 'Roles, MFA, permissions and audit trails.' },
                { badge: 'Testing', title: 'Penetration-tested posture', detail: 'CREST-aligned penetration testing and TLS 1.3 checks.' },
                { badge: 'Residency', title: 'Data control', detail: 'GDPR-aligned with UK residency options.' },
                { badge: 'Deployment', title: 'Flexible deployment', detail: 'Cloud, hybrid or on-premises.' },
                { badge: 'AI governance', title: 'Auditable AI', detail: 'Rules for access, consent and escalation.' },
              ].map((item, i) => (
                <div key={item.badge} className="group bg-white border border-gray-200 p-6 shadow-[0_1px_8px_rgba(10,22,40,0.03)] hover:shadow-[0_16px_40px_rgba(10,22,40,0.07)] hover:-translate-y-0.5 transition-all" style={reveal(gridInView, i * 80)}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#228DC1] mb-5">{item.badge}</p>
                  <h3 className="text-[#0a1628] text-[14px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#0a1628]/60 text-[13px] font-normal leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                { label: 'Audit ready', value: 'Logs + trails' },
                { label: 'Data control', value: 'GDPR aligned' },
                { label: 'Deployment', value: 'Your choice' },
              ].map((item) => (
                <div key={item.label} className="bg-[#f8fafc] border border-gray-200 px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1">{item.label}</p>
                  <p className="text-[#0a1628] text-[13px] font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Figma design tokens (node 2691:17369) ───────────────────────────────────
const KAI_HDR_GRAD = 'linear-gradient(126deg,#4C97C3 0%,#6AC1EF 28.5%,#BEF3FF 43.36%,#67D7E4 50.91%,#6AC1EF 64.5%)'
// const KAI_BORDER   = '#4c97c3'          // gradient border handled by wrapper padding
const KAI_MSG_AI   = '#f4fbff'          // AI message row bg
const KAI_MSG_USER = '#ffffff'          // User message row bg
const KAI_HDR_TXT  = '#1a253e'
const KAI_INPUT_BD = '#b3b3b3'
const KAI_ICON_DARK = '#353535'

type VoiceSpeaker = 'ai' | 'user'
interface VoiceTurn { speaker: VoiceSpeaker; text: string }
const VOICE_SCRIPT: VoiceTurn[] = [
  { speaker: 'ai',   text: "Hi there! How can I help you today?" },
  { speaker: 'user', text: "Where's my parcel? It's been 5 days." },
  { speaker: 'ai',   text: "Found it! Order #48291 is out for delivery, arriving today before 6 PM." },
  { speaker: 'user', text: "How far away is the driver?" },
  { speaker: 'ai',   text: "Just 2.4 miles away. They'll be with you before 6 PM." },
  { speaker: 'user', text: "Can I change the delivery address?" },
  { speaker: 'ai',   text: "Yes! I've updated the address. You'll receive a confirmation shortly." },
]

// ─── Voice script (drives the animated voice phase) ──────────────────────────
// ─── Chat script (mirrors voice, revealed all at once after voice ends) ───────
type ChatRole = 'ai' | 'user' | 'signal' | 'map' | 'chips'
const CHAT_SCRIPT: { role: ChatRole; text: string; meta?: string }[] = [
  { role: 'ai',     text: "Hi there! 👋\nHow can I help you today?" },
  { role: 'user',   text: "Where's my parcel? It's been 5 days." },
  { role: 'ai',     text: "Found it! Order #48291 is out for delivery, arriving today before 6 PM.", meta: 'Order #48291 · GPS active' },
  { role: 'map',    text: '' },
  { role: 'user',   text: "How far away is the driver?" },
  { role: 'ai',     text: "Just 2.4 miles away. They'll be with you before 6 PM. 📦" },
  { role: 'user',   text: "Can I change the delivery address?" },
  { role: 'ai',     text: "Yes! I've updated the address. You'll receive a confirmation shortly. ✅" },
  { role: 'signal', text: 'Resolved · 52s · CSAT sent' },
  { role: 'chips',  text: '' },
]

// ─── Delivery map widget ──────────────────────────────────────────────────────
function MapWidget() {
  // Street colour and block colours match the reference screenshot
  const STREET  = '#f5f2ec'
  const BLOCK   = '#ddd6c8'
  const GREEN   = '#b8d49a'

  return (
    <div style={{ width: '100%', lineHeight: 0 }}>
      <svg width="100%" viewBox="0 0 360 142" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
        {/* Base */}
        <rect width="360" height="142" fill="#ece7dc"/>

        {/* ── Vertical streets ── */}
        {[0, 94, 188, 282, 351].map(x => (
          <rect key={x} x={x} width="9" height="142" fill={STREET}/>
        ))}

        {/* ── Horizontal streets ── */}
        <rect y="0"   width="360" height="9"  fill={STREET}/>
        <rect y="59"  width="360" height="16" fill={STREET}/>   {/* route street */}
        <rect y="113" width="360" height="9"  fill={STREET}/>
        <rect y="133" width="360" height="9"  fill={STREET}/>

        {/* ── Row 1 blocks  (y 9–59) ── */}
        <rect x="9"   y="9" width="85" height="50" fill={BLOCK}/>  {/* Col1 tan  */}
        <rect x="103" y="9" width="85" height="50" fill={GREEN}/>  {/* Col2 GREEN */}
        <rect x="197" y="9" width="85" height="50" fill={BLOCK}/>  {/* Col3 tan  */}
        <rect x="291" y="9" width="60" height="50" fill={BLOCK}/>  {/* Col4 tan  */}

        {/* ── Row 2 blocks  (y 75–113) ── */}
        <rect x="9"   y="75" width="85" height="38" fill={GREEN}/>  {/* Col1 GREEN */}
        <rect x="103" y="75" width="85" height="38" fill={BLOCK}/>  {/* Col2 tan  */}
        <rect x="197" y="75" width="85" height="38" fill={BLOCK}/>  {/* Col3 tan  */}
        <rect x="291" y="75" width="60" height="38" fill={BLOCK}/>  {/* Col4 tan  */}

        {/* ── Row 3 strip  (y 122–133) ── */}
        {[9, 103, 197, 291].map((x, i) => (
          <rect key={i} x={x} y="122" width={i === 3 ? 60 : 85} height="11" fill={BLOCK}/>
        ))}

        {/* ── Route line ── */}
        <line x1="38" y1="67" x2="287" y2="67"
              stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round"/>

        {/* ── Arrow chevrons along route ── */}
        {[108, 183, 248].map(x => (
          <polyline key={x}
            points={`${x-6},62 ${x},67 ${x-6},72`}
            fill="none" stroke="#1a73e8" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.75"/>
        ))}

        {/* ── Current position — hollow blue ring ── */}
        <circle cx="38" cy="67" r="9" fill="white" stroke="#1a73e8" strokeWidth="2.5"/>

        {/* ── Destination — classic map pin (pointed bottom, circle top) ──
             Tip at (287, 75), circle centre at (287, 46), radius 17        */}
        <path
          d="M287,75 C276,67 270,57 270,46 A17,17,0,1,1,304,46 C304,57 298,67 287,75 Z"
          fill="#E53935"
        />
        <circle cx="287" cy="44" r="7" fill="white" opacity="0.92"/>

        {/* ── ETA badge ── */}
        <rect x="183" y="116" width="172" height="21" rx="4" fill="white" opacity="0.93"/>
        <circle cx="196" cy="126.5" r="4" fill="#E53935"/>
        <text x="204" y="131" fontSize="10.5" fill="#374151"
              fontFamily="system-ui,sans-serif" fontWeight="500">
          2.4 mi · ETA 6 PM
        </text>
      </svg>
    </div>
  )
}

// ─── Voice + Chat demo ────────────────────────────────────────────────────────
type OrbMode   = 'listen' | 'user' | 'ai'
type DemoPhase = 'voice' | 'chat' | 'csat' | 'csat-out'

function KaiChatDemo() {
  const [phase,   setPhase]   = useState<DemoPhase>('voice')
  const [orbMode, setOrbMode] = useState<OrbMode>('listen')
  const [turnIdx, setTurnIdx] = useState(-1)
  const [words,   setWords]   = useState(0)
  const tids = useRef<number[]>([])

  const sched = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms); tids.current.push(id)
  }

  const run = () => {
    tids.current.forEach(clearTimeout); tids.current = []
    setPhase('voice'); setOrbMode('listen'); setTurnIdx(-1); setWords(0)

    let t = 1800 // initial silence

    VOICE_SCRIPT.forEach((turn, i) => {
      const tokens = turn.text.split(' ')
      const msPw   = turn.speaker === 'ai' ? 155 : 95
      const revealMs = tokens.length * msPw
      const speechMs = turn.speaker === 'ai'
        ? Math.max(4300, turn.text.length * 80)
        : revealMs

      if (turn.speaker === 'user') {
        sched(() => { setTurnIdx(i); setWords(0); setOrbMode('listen') }, t)
        t += 1100
        sched(() => setOrbMode('user'), t)
      } else {
        sched(() => { setTurnIdx(i); setWords(0); setOrbMode('ai') }, t)
      }

      tokens.forEach((_, j) => sched(() => setWords(j + 1), t + j * msPw))
      t += Math.max(revealMs, speechMs)

      sched(() => setOrbMode('listen'), t)
      t += turn.speaker === 'ai' ? 450 : 1100
    })

    sched(() => setPhase('chat'), t)
    t += 4000
    sched(() => setPhase('csat'), t)       // CSAT card eases in
    t += 4500
    sched(() => setPhase('csat-out'), t)
    sched(run, t + 700)
  }

  useEffect(() => {
    const id = window.setTimeout(run, 500)
    return () => {
      clearTimeout(id)
      tids.current.forEach(clearTimeout)
      window.speechSynthesis?.cancel()
    }
  }, [])

  const isVoice     = phase === 'voice'
  const isChat      = phase === 'chat' || phase === 'csat' || phase === 'csat-out'
  const chatOpacity = phase === 'chat' || phase === 'csat' ? 1 : 0
  const isCsat      = phase === 'csat' || phase === 'csat-out'
  const csatOpacity = phase === 'csat' ? 1 : 0

  const orbAnim =
    orbMode === 'ai'   ? 'kaiOrbSpeak 1s ease-in-out infinite' :
    orbMode === 'user' ? 'kaiOrbUser 1.1s ease-in-out infinite' :
                         'kaiOrbListen 2.8s ease-in-out infinite'

  const orbBg =
    orbMode === 'user'
      ? 'radial-gradient(circle at 36% 34%, #a8f0d4 0%, #34c78a 32%, #0d9e60 60%, #076b41 100%)'
      : 'radial-gradient(circle at 36% 34%, #b8e4f9 0%, #55b0de 28%, #228DC1 58%, #0b5a88 100%)'

  const orbGlow =
    orbMode === 'user'
      ? '0 0 55px rgba(34,193,141,0.85), 0 0 110px rgba(34,193,141,0.45), 0 0 170px rgba(34,193,141,0.18)'
      : '0 0 55px rgba(34,141,193,0.90), 0 0 110px rgba(34,141,193,0.50), 0 0 170px rgba(34,141,193,0.22)'

  const currentTurn       = turnIdx >= 0 ? VOICE_SCRIPT[turnIdx] : null
  const prevTurn          = turnIdx > 0  ? VOICE_SCRIPT[turnIdx - 1] : null
  const transcript        = currentTurn ? currentTurn.text.split(' ').slice(0, words).join(' ') : ''
  const showListeningLabel = orbMode === 'listen' && currentTurn?.speaker === 'user' && words === 0

  return (
    <div className="select-none" style={{ width: '100%', maxWidth: 420, aspectRatio: '420 / 613' }}>
      <div style={{ width: '100%', height: '100%', padding: 7, borderRadius: 33, background: KAI_HDR_GRAD, boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 30, overflow: 'hidden', background: KAI_HDR_GRAD }}>

          {/* ── SHARED HEADER — always on top, never transitions ── */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 73,
            background: KAI_HDR_GRAD,
            zIndex: 10,
            display: 'flex', alignItems: 'center',
            padding: '0 23px', gap: 10,
          }}>
            <div style={{ width: 40, height: 40, background: '#fff', borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/kai-logo.svg" alt="Kai" style={{ width: 28, height: 22, objectFit: 'contain' }} />
            </div>
            <span style={{ flex: 1, fontFamily: 'Roboto,sans-serif', fontWeight: 600, fontSize: 16, color: KAI_HDR_TXT, lineHeight: 1 }}>AI Assistant</span>
            <FontAwesomeIcon icon={faGear}        style={{ width: 18, height: 18, color: KAI_ICON_DARK, opacity: 0.72 }} />
            <FontAwesomeIcon icon={faChevronDown} style={{ width: 18, height: 18, color: KAI_ICON_DARK, opacity: 0.72, marginLeft: 7 }} />
          </div>

          {/* ── VOICE VIEW ── */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, #071220 0%, #0c1b30 55%, #08152a 100%)',
            opacity: isVoice ? 1 : 0,
            transition: 'opacity 0.65s ease',
            pointerEvents: isVoice ? 'auto' : 'none',
            zIndex: 1,
          }}>

            {/* ── Main body: transcript TOP, orb BOTTOM ── */}
            <div style={{
              position: 'absolute', top: 73, left: 0, right: 0, bottom: 58,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              padding: '6px 0 14px',
            }}>

              {/* ── TOP: KAI VOICE label + live transcript ── */}
              <div style={{ padding: '0 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4c97c3' }} />
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'Roboto,sans-serif' }}>
                    KAI VOICE
                  </span>
                </div>

                {/* Previous turn — dimmed */}
                {prevTurn && (
                  <div style={{ marginBottom: 18, opacity: 0.32 }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', margin: '0 0 5px',
                      color: prevTurn.speaker === 'ai' ? 'rgba(106,193,239,0.9)' : 'rgba(255,255,255,0.7)' }}>
                      {prevTurn.speaker === 'ai' ? 'AI Assistant' : 'You'}
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, margin: 0 }}>
                      {prevTurn.text}
                    </p>
                  </div>
                )}

                {/* Current turn — typing out */}
                {currentTurn && (
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', margin: '0 0 7px',
                      color: currentTurn.speaker === 'ai' ? 'rgba(106,193,239,1)' : 'rgba(255,255,255,0.65)' }}>
                      {currentTurn.speaker === 'ai' ? 'AI Assistant' : 'You'}
                    </p>
                    {showListeningLabel
                      ? <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em', margin: 0 }}>Listening…</p>
                      : <p style={{ fontSize: 16, color: '#fff', lineHeight: 1.65, margin: 0, letterSpacing: '-0.01em' }}>{transcript}</p>
                    }
                  </div>
                )}

                {/* Pre-first-turn placeholder */}
                {!currentTurn && !prevTurn && (
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.14)', margin: 0, letterSpacing: '0.06em' }}>…</p>
                )}
              </div>

              {/* ── BOTTOM: Orb + waveform + status ── */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 112, height: 112, borderRadius: '50%',
                  background: orbBg, boxShadow: orbGlow,
                  animation: orbAnim,
                  transition: 'background 0.6s ease, box-shadow 0.6s ease',
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 26 }}>
                  {[5,10,18,24,28,24,18,10,5].map((h, i) => {
                    const delays = [0.12,0.06,0.22,0.04,0.16,0.08,0.20,0.02,0.14]
                    const dur = orbMode === 'ai' ? 0.50 : orbMode === 'user' ? 0.34 : 1.8
                    const col = orbMode === 'user' ? 'rgba(52,199,138,0.75)' : 'rgba(106,193,239,0.68)'
                    return (
                      <div key={i} style={{ width: 3.5, height: h, borderRadius: 2, background: col, transformOrigin: 'bottom', animation: `kaiWaveBar ${dur}s ease-in-out ${delays[i]}s infinite alternate`, transition: 'background 0.5s ease' }} />
                    )
                  })}
                </div>

                <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', color: orbMode === 'user' ? 'rgba(52,199,138,0.75)' : 'rgba(255,255,255,0.30)', margin: 0, fontFamily: 'Roboto,sans-serif', transition: 'color 0.4s ease' }}>
                  {orbMode === 'ai' ? 'Speaking…' : 'Listening…'}
                </p>
              </div>
            </div>

            {/* KAI label — bottom left */}
            <div style={{ position: 'absolute', bottom: 66, left: 22 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'Roboto,sans-serif' }}>KAI</span>
            </div>

            {/* Voice input bar — minimal, buttons only */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: '#fff', borderRadius: '0 0 30px 30px',
              padding: '11px 16px 14px',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10,
              borderTop: '0.5px solid #e5e7eb',
            }}>
              <div style={{ flex: 1 }} />
              <div style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: orbMode === 'user' ? '#228DC1' : '#f0f2f5',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.3s ease',
              }}>
                <FontAwesomeIcon icon={faMicrophone} style={{ width: 15, height: 15, color: orbMode === 'user' ? '#fff' : 'rgba(10,22,40,0.4)' }} />
              </div>
              <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faXmark} style={{ width: 14, height: 14, color: 'rgba(10,22,40,0.4)' }} />
              </div>
            </div>
          </div>

          {/* ── CHAT VIEW (full conversation revealed at once) ── */}
          <div style={{
            position: 'absolute', inset: 0,
            background: KAI_HDR_GRAD,
            opacity: chatOpacity,
            transition: 'opacity 0.65s ease',
            pointerEvents: isChat ? 'auto' : 'none',
            zIndex: 2,
          }}>
            {/* Chat area — starts just below the shared header */}
            <div style={{ position: 'absolute', top: 73, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: 30, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              {/* All messages visible at once */}
              <div className="kai-chat-scroll" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                {CHAT_SCRIPT.map((msg, i) => {
                  if (msg.role === 'map') return <MapWidget key={i} />
                  if (msg.role === 'signal') return (
                    <div key={i} style={{ display: 'flex', justifyContent: 'center', padding: '10px 12px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, color: '#059669', background: 'rgba(5,150,105,0.12)', borderRadius: 99, padding: '4px 14px' }}>
                        ✓&nbsp;{msg.text}
                      </span>
                    </div>
                  )
                  if (msg.role === 'chips') return (
                    <div key={i} style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '6px 12px 12px' }}>
                      {['Track my order', 'Reset my password', 'Contact support'].map(chip => (
                        <div key={chip} style={{ border: '1px solid #228DC1', borderRadius: 8, padding: '5px 10px', fontSize: 11, color: '#228DC1', background: '#fff', cursor: 'default', whiteSpace: 'nowrap' }}>
                          {chip}
                        </div>
                      ))}
                    </div>
                  )
                  const isAI = msg.role === 'ai'
                  return (
                    <div key={i} style={{ width: '100%', background: isAI ? KAI_MSG_AI : KAI_MSG_USER, padding: '12px 12px 14px', display: 'flex', flexDirection: 'column', gap: 6, wordBreak: 'break-word' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#000', lineHeight: 1 }}>{isAI ? 'AI Assistant' : 'You'}</span>
                      <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(0,0,0,0.87)', margin: 0, whiteSpace: 'pre-line' }}>{msg.text}</p>
                      {msg.meta && isAI && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, alignSelf: 'flex-start', fontSize: 10, fontWeight: 600, color: '#228DC1', background: 'rgba(34,141,193,0.10)', borderRadius: 4, padding: '2px 8px' }}>
                          ⚡ {msg.meta}
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* CSAT rating overlay — eases in over messages at end */}
              {isCsat && (
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 5,
                  background: '#f3f5f8',
                  opacity: csatOpacity,
                  transition: 'opacity 0.5s ease',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0 18px',
                }}>
                  <div style={{
                    background: '#fff', borderRadius: 16, padding: '22px 18px', width: '100%',
                    boxShadow: '0 4px 24px rgba(10,22,40,0.09)',
                    animation: phase === 'csat' ? 'csatIn 0.55s cubic-bezier(0.22,1,0.36,1) both' : 'none',
                  }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#0a1628', textAlign: 'center', margin: '0 0 16px', lineHeight: 1.45 }}>
                      Rate your experience to help us improve!
                    </p>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                      {[{ e: '👍', l: 'Satisfied' }, { e: '👎', l: 'Dissatisfied' }].map(b => (
                        <div key={b.l} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '10px 8px', border: '1px solid #e5e7eb', borderRadius: 10, background: '#fff', fontSize: 13, fontWeight: 600, color: '#0a1628', cursor: 'default' }}>
                          <span style={{ fontSize: 16 }}>{b.e}</span>{b.l}
                        </div>
                      ))}
                    </div>
                    <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: '10px 14px', color: 'rgba(10,22,40,0.32)', fontSize: 13, fontFamily: 'Roboto,sans-serif' }}>
                      Leave a comment (optional)
                    </div>
                  </div>
                </div>
              )}

              {/* Input bar — matches voice bar layout */}
              <div style={{ borderTop: '0.5px solid #e5e7eb', padding: '11px 16px 14px', display: 'flex', alignItems: 'center', gap: 10, background: '#fff', flexShrink: 0 }}>
                <span style={{ flex: 1, fontFamily: 'Roboto,sans-serif', fontWeight: 500, fontSize: 15, color: 'rgba(10,22,40,0.35)', userSelect: 'none' }}>
                  Type here...
                </span>
                {/* Mic button */}
                <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesomeIcon icon={faMicrophone} style={{ width: 15, height: 15, color: 'rgba(10,22,40,0.4)' }} />
                </div>
                {/* Send button */}
                <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: '#228DC1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesomeIcon icon={faPaperPlane} style={{ width: 14, height: 14, color: '#fff' }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


// -- Escalation chart with hover interaction ----------------------------------
function EscalationChart() {
  const [hovered, setHovered] = useState<number | null>(null)

  const pts = [
    { x:54,  y:67,  pct:'40%', lbl:'MAY 2024' },
    { x:136, y:92,  pct:'34%', lbl:'SEP 2024' },
    { x:219, y:120, pct:'28%', lbl:'JAN 2025' },
    { x:301, y:147, pct:'22%', lbl:'MAY 2025' },
    { x:383, y:174, pct:'16%', lbl:'SEP 2025' },
    { x:466, y:192, pct:'12%', lbl:'DEC 2025' },
    { x:548, y:201, pct:'10%', lbl:'MAR 2026' },
  ]

  const hp = hovered !== null ? pts[hovered] : null
  // Keep tooltip box (80px wide) fully within the 560-wide viewBox
  const tx = hp ? Math.min(Math.max(hp.x, 44), 516) : 0

  return (
    <svg width="100%" viewBox="0 0 560 295" xmlns="http://www.w3.org/2000/svg" style={{ display:'block' }}>
      <defs>
        <pattern id="escDots" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
          <rect width="9" height="9" fill="#228DC1"/>
          <circle cx="4.5" cy="4.5" r="1.6" fill="white" opacity="0.42"/>
        </pattern>
        <linearGradient id="escFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#228DC1" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#228DC1" stopOpacity="1"/>
        </linearGradient>
        <clipPath id="escClip">
          <rect x="54" y="10" width="494" height="234"/>
        </clipPath>
        <mask id="escMask">
          <rect x="54" y="10" width="494" height="234" fill="url(#escFade)"/>
        </mask>
      </defs>

      {/* Chart bg */}
      <rect x="54" y="10" width="494" height="234" fill="white"/>

      {/* Dashed grid lines + Y labels */}
      {[
        { pct:50, y:20  },
        { pct:40, y:67  },
        { pct:30, y:114 },
        { pct:20, y:161 },
        { pct:10, y:208 },
      ].map(({ pct, y }) => (
        <g key={pct}>
          <line x1="54" y1={y} x2="548" y2={y} stroke="#ddd" strokeDasharray="5,4" strokeWidth="1"/>
          <text x="46" y={y+4} textAnchor="end" fontSize="11" fill="#526779" fontWeight="600" fontFamily="Roboto,sans-serif">{pct}%</text>
        </g>
      ))}

      {/* X-axis baseline */}
      <line x1="54" y1="244" x2="548" y2="244" stroke="#ccc" strokeWidth="1"/>

      {/* Area fill */}
      <polygon
        points="54,67 136,92 219,120 301,147 383,174 466,192 548,201 548,244 54,244"
        fill="url(#escDots)" clipPath="url(#escClip)" mask="url(#escMask)"
      />

      {/* Line */}
      <polyline
        points="54,67 136,92 219,120 301,147 383,174 466,192 548,201"
        fill="none" stroke="#228DC1" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Vertical indicator line on hover */}
      {hp && (
        <line
          x1={hp.x} y1={hp.y + 8} x2={hp.x} y2={244}
          stroke="#228DC1" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.4"
        />
      )}

      {/* Data points + labels */}
      {pts.map((pt, i) => (
        <g key={pt.lbl} style={{ cursor:'crosshair' }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Static % label — hidden while its tooltip is showing */}
          {hovered !== i && (
            <text x={pt.x} y={pt.y - 11} textAnchor="middle" fontSize="10.5" fontWeight="700"
              fill="#1a6e99" fontFamily="Roboto,sans-serif">{pt.pct}</text>
          )}
          {/* X-axis date label */}
          <text x={pt.x} y="256" textAnchor="end" fontSize="9" fill="#526779" fontWeight="600"
            fontFamily="Roboto,sans-serif" transform={`rotate(-60,${pt.x},256)`}>{pt.lbl}</text>
          {/* Wide invisible hit area for easy hover */}
          <circle cx={pt.x} cy={pt.y} r="20" fill="transparent"/>
          {/* Visible circle — filled on hover */}
          <circle cx={pt.x} cy={pt.y} r={hovered === i ? 7 : 5}
            fill={hovered === i ? '#228DC1' : 'white'}
            stroke="#228DC1" strokeWidth="2.5"/>
        </g>
      ))}

      {/* Tooltip card */}
      {hp && (
        <g style={{ pointerEvents:'none' }}>
          <rect x={tx-40} y={hp.y - 70} width="80" height="46"
            rx="6" fill="#0a1628"/>
          <text x={tx} y={hp.y - 49} textAnchor="middle"
            fontSize="15" fontWeight="700" fill="white" fontFamily="Roboto,sans-serif">{hp.pct}</text>
          <text x={tx} y={hp.y - 33} textAnchor="middle"
            fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Roboto,sans-serif" letterSpacing="0.04em">{hp.lbl}</text>
          {/* Arrow */}
          <polygon points={`${tx-6},${hp.y-24} ${tx+6},${hp.y-24} ${tx},${hp.y-16}`} fill="#0a1628"/>
        </g>
      )}
    </svg>
  )
}

// -- Omnichannel Section -------------------------------------------------------
//
// Layout mirrors the Intercom "Fin" showcase:
//   • dot-grid section background
//   • 7 channel icon squares in a 3-column grid (matching panels below)
//   • SVG connector: stubs → horizontal bar → 3 drops → panel tops
//   • Three panels: Telegram | KAI Web Chat | Gmail
//
// SVG coordinate system  viewBox="0 0 1000 80"  preserveAspectRatio="none"
//   Column centres: 160 | 500 | 840   (same proportions as CSS grid cols)
//   Left icon stubs  x = 120, 160, 200   Right icon stubs  x = 800, 840, 880
//   Bar  y = 38   Drops  y = 38 → 80
// ---------------------------------------------------------------------------

function OmnichannelSection() {
  // ─── Design tokens ──────────────────────────────────────────────────────
  const OMNI_BG  = '#f4f4ff'
  const CONN_CLR = '#4c97c3'

  // ─── Telegram messages ──────────────────────────────────────────────────
  const tgMsgs = [
    { from:'bot',  text:"Hi! I'm Kai 👋\nHow can I help you today?",                                        time:'09:41' },
    { from:'user', text:'I need help raising a complaint about a missed delivery',                            time:'09:42', ticks:'✓✓' },
    { from:'bot',  text:"Got it! I've raised case #7823 and notified the delivery team.\nExpect a callback within 2 hours. ✅", time:'09:42' },
    { from:'user', text:'Brilliant, thank you!',                                                              time:'09:43', ticks:'✓✓' },
  ]

  // ─── KAI web messages ───────────────────────────────────────────────────
  const kaiMsgs: { from:'ai'|'user'; text:string; meta?:string; signal?:string }[] = [
    { from:'ai',   text:"Hi there! 👋\nWhat can I help you with today?" },
    { from:'user', text:"I'd like to upgrade my subscription to the Pro plan." },
    { from:'ai',   text:"Your current plan is Starter. Pro unlocks unlimited agents, priority support and full analytics.", meta:'Account #10284 · CRM synced' },
    { from:'user', text:'What does it cost per month?' },
    { from:'ai',   text:"Pro is £299/month. I've emailed a full comparison and a one-click upgrade link.", signal:'Upgraded · 44s · CSAT sent' },
  ]

  // ─── Channel icon box ────────────────────────────────────────────────
  const ChIcon = ({
    children,
  }: { color?:string; bg?:string; glow?:boolean; children:React.ReactNode }) => (
    <div style={{
      width:44, height:44, borderRadius:12, flexShrink:0,
      background: 'transparent',
      border: '1px solid rgba(10,22,40,0.12)',
      display:'flex', alignItems:'center', justifyContent:'center',
      boxShadow: 'none',
    }}>
      {children}
    </div>
  )

  // ─── Telegram icon path ───────────────────────────────────────────────
  const TgPath = ({ size = 20, fill = '#229ED9' }: { size?:number; fill?:string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )

  return (
    <section
      className="border-b border-gray-100"
      style={{
        background: OMNI_BG,
        backgroundImage: 'radial-gradient(circle, rgba(76,151,195,0.055) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-20">

        {/* ── Centred heading ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="type-label text-[#228DC1] mb-4">Omnichannel</p>
          <h2 className="font-heading text-[#0a1628] mb-5">One AI. Every channel.</h2>
          <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
            Kai meets customers on Telegram, your website or email — with the same intelligence, context and resolution on every channel.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            DESKTOP ROUTING DIAGRAM
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block">

          {/* ── Channel icon row (3-col grid matching panels) ── */}
          <div className="grid grid-cols-3 gap-6 mb-0">

            {/* Left: WhatsApp · Telegram · Teams */}
            <div className="flex justify-center items-center gap-2">
              <ChIcon color="#25D366" bg="rgba(37,211,102,0.10)">
                <img src={integrationLogos.whatsapp} alt="WhatsApp" style={{ width:24, height:24, objectFit:'contain' }}
                  onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
              </ChIcon>
              <ChIcon color="#229ED9" bg="rgba(34,158,217,0.10)">
                <img src={integrationLogos.telegram} alt="Telegram" style={{ width:24, height:24, objectFit:'contain' }}
                  onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
              </ChIcon>
              <ChIcon color="#6264A7" bg="rgba(98,100,167,0.10)">
                <img src={integrationLogos.teams} alt="Teams" style={{ width:24, height:24, objectFit:'contain' }}
                  onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
              </ChIcon>
            </div>

            {/* Centre: KAI (glowing) */}
            <div className="flex justify-center items-center">
              <ChIcon color="#228DC1" bg="rgba(34,141,193,0.10)" glow>
                <img src={integrationLogos.kaiHoriz} alt="Kai" style={{ width:36, height:18, objectFit:'contain' }}
                  onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
              </ChIcon>
            </div>

            {/* Right: Gmail · Outlook · Apple Mail */}
            <div className="flex justify-center items-center gap-2">
              <ChIcon color="#EA4335" bg="rgba(234,67,53,0.10)">
                <img src={integrationLogos.gmail} alt="Gmail" style={{ width:24, height:24, objectFit:'contain' }}
                  onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
              </ChIcon>
              <ChIcon color="#0078D4" bg="rgba(0,120,212,0.10)">
                <img src={integrationLogos.outlook} alt="Outlook" style={{ width:24, height:24, objectFit:'contain' }}
                  onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
              </ChIcon>
              <ChIcon color="#209CF5" bg="rgba(32,156,245,0.10)">
                <img src={integrationLogos.appleMail} alt="Apple Mail" style={{ width:24, height:24, objectFit:'contain' }}
                  onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
              </ChIcon>
            </div>
          </div>

          {/* ── SVG connector ── */}
          <svg
            width="100%" height="80"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            style={{ display:'block', overflow:'visible' }}
          >
            {[120,160,200,500,800,840,880].map(x => (
              <line key={`stub-${x}`} x1={x} y1="0" x2={x} y2="40"
                stroke="#cdd5de" strokeWidth="1.5" strokeDasharray="5,4" />
            ))}
            <line x1="120" y1="40" x2="880" y2="40" stroke="#cdd5de" strokeWidth="1.5" strokeDasharray="5,4" />
            {[160,500,840].map(x => (
              <line key={`drop-${x}`} x1={x} y1="40" x2={x} y2="80"
                stroke={CONN_CLR} strokeWidth="1.5" strokeDasharray="5,4" opacity="0.55" />
            ))}
            {[120,160,200,500,800,840,880].map(x => (
              <circle key={`dot-${x}`} cx={x} cy="40" r="3.5"
                fill="white" stroke="#cdd5de" strokeWidth="1.5" />
            ))}
            {[160,500,840].map(x => (
              <circle key={`entry-${x}`} cx={x} cy="80" r="4.5"
                fill="white" stroke={CONN_CLR} strokeWidth="1.5" opacity="0.7" />
            ))}
          </svg>

          {/* ── Three channel panels ── */}
          <div className="grid grid-cols-3 gap-6">

            {/* ════ LEFT: TELEGRAM ════ */}
            <div style={{ border:'1px solid #e0e6ed', borderRadius:16, overflow:'hidden', display:'flex', flexDirection:'column', background:'#fff', boxShadow:'0 4px 24px rgba(10,22,40,0.07)' }}>

              {/* Header */}
              <div style={{ background:'#229ED9', padding:'11px 14px', display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
                <div style={{ width:34, height:34, borderRadius:'50%', background:'rgba(255,255,255,0.22)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <TgPath size={17} fill="white" />
                </div>
                <div style={{ flex:1 }}>
                  <p style={{ color:'white', fontSize:13, fontWeight:600, lineHeight:1.2 }}>Kai Support Bot</p>
                  <p style={{ color:'rgba(255,255,255,0.65)', fontSize:11, marginTop:1 }}>bot · online</p>
                </div>
                <div style={{ display:'flex', gap:2, alignItems:'flex-end' }}>
                  {[9,13,17].map((h,i) => (
                    <div key={i} style={{ width:2.5, height:h, background:'rgba(255,255,255,0.55)', borderRadius:1 }} />
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div style={{ flex:1, padding:'12px 10px', display:'flex', flexDirection:'column', gap:8, background:'#EFEFF4' }}>
                {tgMsgs.map((msg, i) =>
                  msg.from === 'bot' ? (
                    <div key={i} style={{ display:'flex', gap:7, alignItems:'flex-end' }}>
                      <div style={{ width:26, height:26, borderRadius:'50%', background:'#229ED9', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <span style={{ color:'white', fontSize:10, fontWeight:800 }}>K</span>
                      </div>
                      <div style={{ background:'white', borderRadius:'12px 12px 12px 4px', padding:'8px 11px', maxWidth:'82%', boxShadow:'0 1px 2px rgba(0,0,0,0.07)' }}>
                        <p style={{ fontSize:13, color:'#000', lineHeight:1.5, whiteSpace:'pre-line' }}>{msg.text}</p>
                        <p style={{ fontSize:10, color:'rgba(0,0,0,0.38)', marginTop:3, textAlign:'right' }}>{msg.time}</p>
                      </div>
                    </div>
                  ) : (
                    <div key={i} style={{ display:'flex', justifyContent:'flex-end' }}>
                      <div style={{ background:'#DCFFBE', borderRadius:'12px 12px 4px 12px', padding:'8px 11px', maxWidth:'82%', boxShadow:'0 1px 2px rgba(0,0,0,0.07)' }}>
                        <p style={{ fontSize:13, color:'#000', lineHeight:1.5 }}>{msg.text}</p>
                        <p style={{ fontSize:10, color:'rgba(0,0,0,0.38)', marginTop:3, textAlign:'right' }}>
                          {msg.ticks ?? ''} {msg.time}
                        </p>
                      </div>
                    </div>
                  )
                )}
                <div style={{ display:'flex', justifyContent:'center', marginTop:6 }}>
                  <span style={{ background:'rgba(0,0,0,0.09)', borderRadius:20, padding:'4px 12px', fontSize:11, color:'rgba(0,0,0,0.45)', fontFamily:'Roboto,sans-serif' }}>
                    ✓ Case raised · 28s
                  </span>
                </div>
              </div>

              {/* Input */}
              <div style={{ padding:'8px 10px', display:'flex', alignItems:'center', gap:8, background:'white', borderTop:'1px solid #ebebeb', flexShrink:0 }}>
                <div style={{ flex:1, background:'#F5F5F5', borderRadius:20, padding:'7px 14px' }}>
                  <p style={{ fontSize:13, color:'rgba(0,0,0,0.33)', fontFamily:'Roboto,sans-serif' }}>Message...</p>
                </div>
                <div style={{ width:34, height:34, borderRadius:'50%', background:'#229ED9', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </div>
              </div>
            </div>

            {/* ════ CENTRE: KAI WEB CHAT ════ */}
            <div style={{ padding:5, borderRadius:20, background:KAI_HDR_GRAD, boxShadow:'0px 8px 32px rgba(0,0,0,0.18)', display:'flex', flexDirection:'column' }}>
              <div style={{ borderRadius:15, background:'#fff', overflow:'hidden', flex:1, display:'flex', flexDirection:'column' }}>

                {/* KAI header */}
                <div style={{ background:KAI_HDR_GRAD, padding:'13px 16px', display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>
                  <div style={{ width:32, height:32, background:'#fff', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <img src="/kai-logo.svg" alt="Kai" style={{ width:20, height:20 }}
                      onError={(e)=>{ (e.target as HTMLImageElement).style.display='none' }} />
                  </div>
                  <span style={{ flex:1, fontFamily:'Roboto,sans-serif', fontWeight:600, fontSize:14, color:KAI_HDR_TXT }}>AI Assistant</span>
                  <FontAwesomeIcon icon={faGear} style={{ width:14, height:14, color:'rgba(26,37,62,0.45)' }} />
                  <FontAwesomeIcon icon={faChevronDown} style={{ width:14, height:14, color:'rgba(26,37,62,0.45)', marginLeft:4 }} />
                </div>

                {/* Messages */}
                <div style={{ flex:1, display:'flex', flexDirection:'column', overflowY:'hidden' }}>
                  {kaiMsgs.map((msg, i) =>
                    msg.from === 'ai' ? (
                      <div key={i} style={{ background:KAI_MSG_AI, padding:'10px 12px 12px', display:'flex', flexDirection:'column', gap:5, flexShrink:0 }}>
                        <span style={{ fontSize:11, fontWeight:700, color:'#000', lineHeight:1 }}>AI Assistant</span>
                        <p style={{ fontSize:13, color:'rgba(0,0,0,0.87)', lineHeight:1.55, whiteSpace:'pre-line', margin:0 }}>{msg.text}</p>
                        {msg.meta && (
                          <span style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:10, fontWeight:600, color:'#228DC1', background:'rgba(34,141,193,0.10)', borderRadius:4, padding:'2px 8px', alignSelf:'flex-start' }}>
                            ⚡ {msg.meta}
                          </span>
                        )}
                        {msg.signal && (
                          <span style={{ display:'inline-flex', alignItems:'center', gap:5, fontSize:11, fontWeight:600, color:'#059669', background:'rgba(5,150,105,0.10)', borderRadius:99, padding:'4px 14px', alignSelf:'center', marginTop:4 }}>
                            ✓ {msg.signal}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div key={i} style={{ background:KAI_MSG_USER, padding:'10px 12px 12px', display:'flex', flexDirection:'column', gap:5, flexShrink:0 }}>
                        <span style={{ fontSize:11, fontWeight:700, color:'#000', lineHeight:1 }}>You</span>
                        <p style={{ fontSize:13, color:'rgba(0,0,0,0.87)', lineHeight:1.55, margin:0 }}>{msg.text}</p>
                      </div>
                    )
                  )}
                </div>

                {/* Input */}
                <div style={{ borderTop:`0.5px solid ${KAI_INPUT_BD}`, padding:'10px 16px', display:'flex', alignItems:'center', gap:8, background:'#fff', flexShrink:0 }}>
                  <span style={{ flex:1, fontFamily:'Roboto,sans-serif', fontWeight:600, fontSize:14, color:'rgba(0,0,0,0.33)' }}>Type here...</span>
                  <FontAwesomeIcon icon={faPaperPlane} style={{ width:16, height:16, color:'rgba(0,0,0,0.33)' }} />
                </div>
              </div>
            </div>

            {/* ════ RIGHT: GMAIL ════ */}
            <div style={{ border:'1px solid #e0e6ed', borderRadius:16, overflow:'hidden', display:'flex', flexDirection:'column', background:'#fff', boxShadow:'0 4px 24px rgba(10,22,40,0.07)' }}>

              {/* Gmail toolbar */}
              <div style={{ background:'white', borderBottom:'1px solid #e8e8e8', padding:'9px 14px', display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
                <svg width="20" height="15" viewBox="0 0 24 18">
                  <rect width="24" height="18" rx="2" fill="#fff"/>
                  <path d="M0 2L12 11 24 2" fill="none" stroke="#EA4335" strokeWidth="1.6"/>
                  <path d="M0 2v14h3.5V6.8L12 12l8.5-5.2V16H24V2L12 11z" fill="#EA4335"/>
                </svg>
                <span style={{ fontSize:13, fontWeight:700, color:'#202124', flex:1, fontFamily:'Roboto,sans-serif' }}>Gmail</span>
                <div style={{ width:26, height:26, borderRadius:'50%', background:'#228DC1', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color:'white', fontSize:11, fontWeight:700 }}>K</span>
                </div>
              </div>

              {/* Thread header */}
              <div style={{ padding:'12px 14px 8px', borderBottom:'1px solid #f0f0f0', flexShrink:0 }}>
                <p style={{ fontSize:14, fontWeight:600, color:'#202124', marginBottom:3, fontFamily:'Roboto,sans-serif' }}>
                  RE: Subscription Upgrade — Pro Plan
                </p>
                <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <span style={{ fontSize:11, color:'rgba(10,22,40,0.45)', fontFamily:'Roboto,sans-serif' }}>2 messages</span>
                  <span style={{ width:3, height:3, borderRadius:'50%', background:'rgba(10,22,40,0.2)', display:'inline-block' }}/>
                  <span style={{ fontSize:11, color:'rgba(10,22,40,0.45)', fontFamily:'Roboto,sans-serif' }}>Today</span>
                </div>
              </div>

              {/* Customer email — collapsed */}
              <div style={{ padding:'9px 14px', borderBottom:'1px solid #f5f5f5', background:'#fafafa', flexShrink:0 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <div style={{ width:28, height:28, borderRadius:'50%', background:'#dde2e8', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <span style={{ fontSize:12, fontWeight:700, color:'#5f6368' }}>J</span>
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', justifyContent:'space-between' }}>
                      <span style={{ fontSize:12, fontWeight:600, color:'#202124', fontFamily:'Roboto,sans-serif' }}>James Hargreaves</span>
                      <span style={{ fontSize:11, color:'rgba(10,22,40,0.4)', fontFamily:'Roboto,sans-serif' }}>11:02 AM</span>
                    </div>
                    <p style={{ fontSize:11, color:'rgba(10,22,40,0.5)', lineHeight:1.4, marginTop:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', fontFamily:'Roboto,sans-serif' }}>
                      Hi, I'd like to upgrade from Starter to the Pro plan...
                    </p>
                  </div>
                </div>
              </div>

              {/* KAI reply — expanded */}
              <div style={{ padding:'12px 14px', flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:9 }}>
                  <div style={{ width:30, height:30, borderRadius:'50%', background:'#228DC1', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <span style={{ fontSize:12, fontWeight:700, color:'white' }}>K</span>
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                        <span style={{ fontSize:13, fontWeight:600, color:'#202124', fontFamily:'Roboto,sans-serif' }}>Kai</span>
                        <span style={{ fontSize:10, fontWeight:600, color:'#228DC1', background:'rgba(34,141,193,0.10)', borderRadius:4, padding:'1px 6px' }}>AI Agent</span>
                      </div>
                      <span style={{ fontSize:11, color:'rgba(10,22,40,0.4)', fontFamily:'Roboto,sans-serif' }}>11:02 AM</span>
                    </div>
                    <span style={{ fontSize:11, color:'rgba(10,22,40,0.42)', fontFamily:'Roboto,sans-serif' }}>kai@awtg.co.uk → james.h@email.com</span>
                  </div>
                </div>

                <p style={{ fontSize:13, color:'rgba(10,22,40,0.70)', lineHeight:1.65, fontFamily:'Roboto,sans-serif' }}>
                  Hi James, I can see you're on the <strong>Starter</strong> plan. Pro unlocks unlimited agents, priority support and full analytics — at <strong>£299/month</strong>.
                </p>
                <p style={{ fontSize:13, color:'rgba(10,22,40,0.70)', lineHeight:1.65, fontFamily:'Roboto,sans-serif', marginTop:6 }}>
                  I've sent a one-click upgrade link to your inbox. Let me know if you have any questions!
                </p>
                <div style={{ marginTop:9 }}>
                  <span style={{ fontSize:10, fontWeight:600, color:'#228DC1', background:'rgba(34,141,193,0.10)', borderRadius:4, padding:'2px 8px', fontFamily:'Roboto,sans-serif' }}>
                    ⚡ Account #10284 · CRM synced
                  </span>
                </div>
              </div>

              {/* Reply input */}
              <div style={{ margin:'0 14px 12px', border:'1px solid #e4e8ed', borderRadius:8, padding:'8px 12px', flexShrink:0 }}>
                <p style={{ fontSize:12, color:'rgba(10,22,40,0.30)', fontFamily:'Roboto,sans-serif' }}>Reply...</p>
              </div>
            </div>

          </div>{/* end panels grid */}
        </div>{/* end desktop block */}

        {/* ═══════════════════════════════════════════════════════════════════
            MOBILE: channel pills + KAI widget
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden flex flex-wrap justify-center gap-2 mb-10">
          {['WhatsApp','Telegram','Teams','Web Chat','Gmail','Outlook','Telegram'].map((ch, i) => (
            <span key={`${ch}-${i}`} className="text-[11px] font-semibold text-[#228DC1] bg-white border border-[#228DC1]/20 px-3 py-1.5 rounded-full shadow-sm">
              {ch}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

// -- Hero Section --------------------------------------------------------------
function HeroSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

      {/* Diagonal dot-grid background pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kaiHeroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kaiHeroGrid)" />
        </svg>
      </div>

      {/* Diagonal connecting lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kaiHeroLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kaiHeroLines)" />
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
      <div className="absolute rounded-full pointer-events-none" style={{ top: '68%', left: '5%', width: 6, height: 6, background: 'rgba(144,62,142,0.35)' }} />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(34,141,193,0.12) 0, transparent 55%)' }} />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div className="mb-6">
              <img
                src="/kai-logo-horiz-hero.svg"
                alt="Kai"
                style={{
                  width: 'clamp(220px, 18vw, 300px)',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
            <h1 className="font-serif-display text-[#0a1628] leading-[1.02] mb-6">
              Customer Enterprise<br />
              Service that <span style={{ color: '#0a1628' }}>resolves,</span><br />
              no just responds.
            </h1>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] max-w-xl mb-10">
              Kai resolves customer requests, qualifies leads, triggers workflows, and improves every customer interaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <button type="button" onClick={onDemoClick} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[13px] font-semibold hover:bg-[#1a6e99] transition-colors">
                Request a Demo
              </button>
            </div>
          </div>

          {/* Right: live chat demo */}
          <div className="flex items-center justify-center lg:justify-end">
            <KaiChatDemo />
          </div>

        </div>
      </div>
    </section>
  )
}

// -- Main page -----------------------------------------------------------------
export default function KaiPage() {
  const [stepsRef, stepsInView] = useInView()
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const openDemo = () => setIsDemoOpen(true)
  const closeDemo = () => setIsDemoOpen(false)

  return (
    <>
      <ScrollProgress />
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
        productName="Kai"
        title="See Kai in action"
        description="Share a few details and we will show how Kai can resolve customer and operational workflows across your systems, channels and governance rules."
        logoSrc="/kai-logo-horiz-hero.svg"
        accentColor="#228DC1"
        trustItems={['British Council', 'Enterprise support', 'Governed AI', 'Hybrid deployment', 'Live integrations', 'Audit-ready workflows']}
        outcomes={[
          'A focused demo around your support or service workflow',
          'Recommended integrations for your CRM, helpdesk and channels',
          'Guidance on escalation, consent and governance design',
          'A practical pilot path with measurable resolution outcomes',
        ]}
      />
      {/* -- Hero -- */}
      <HeroSection onDemoClick={openDemo} />

      {/* -- Single combined logo strip -- */}
      {(() => {
        const items = [
          { src: '/logos/clients/kai-kp.svg',              alt: 'Kaiser Permanente' },
          { src: '/logos/clients/kai-cambridge.svg',       alt: 'Cambridgeshire County Council' },
          { src: '/logos/clients/kai-cumberland.svg',      alt: 'Cumberland Council', height: 56 },
          { src: '/logos/clients/kai-british-council.svg', alt: 'British Council' },
          { src: '/logos/clients/kai-borderlands.svg',     alt: 'Borderlands 5G Innovation Region' },
          { src: '/logos/clients/kai-frame1.svg',          alt: 'West Berkshire Council' },
          { src: '/logos/clients/kai-frame3.svg',          alt: 'Retail Hub' },
          { src: '/logos/clients/kai-frame2.svg',          alt: 'TVRA Rural Action' },
        ]
        const all = [...items, ...items]
        return (
          <div className="bg-white border-y border-gray-100 py-10 overflow-hidden">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.26em] text-[#0a1628]/30 mb-9">
              Trusted by leading organisations
            </p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, white, transparent)' }} />
              <div className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, white, transparent)' }} />
              <div className="flex animate-[marquee_50s_linear_infinite] whitespace-nowrap w-max items-center gap-0">
                {all.map((item, i) => (
                  <div key={i} className="inline-flex items-center justify-center px-14 select-none">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                      style={{ height: item.height ?? 36, maxWidth: '200px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })()}

      {/* -- Live in production -- */}
      <section className="bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-10 items-center mb-14">
            <div className="max-w-xl">
              <h2 className="font-heading text-[#0a1628] mb-5">
                Global reach. Measurable customer outcomes.
              </h2>
              <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
                Our AI agent is live at enterprise scale.
              </p>
            </div>
            <GlobalReachMap />
          </div>

          {/* Metrics row � same section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard num={250} suffix="k+" label="Production reach" note="Users supported each month" delay={0} />
            <StatCard prefix="+" num={17} suffix="%" label="CSAT uplift" note="User satisfaction" delay={100} />
            <StatCard num={38} suffix=" sec" label="Avg handle time" note="vs 4+ min industry avg" delay={200} />
            <StatCard num={150} suffix="+" label="Countries reached" note="Global enterprise reach" delay={300} />
          </div>
        </div>
      </section>

      {/* -- Escalation Rate Chart -- */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-[0.95fr_1.65fr] gap-10 lg:gap-16 items-center">

            {/* Left: copy */}
            <div className="lg:pt-2">
              <h2 className="font-heading text-[#0a1628] mb-5">
                Escalation rate reduced from 40% to 10% on average for all our users
              </h2>
              <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mb-8">
                Escalation rate reduced from 40% to 10% on average for all our users
              </p>
            </div>

            {/* Right: chart card — Intercom-style */}
            <div style={{ border:'1px solid #e4e8ed', background:'#fafaf7' }}>
              {/* Card header */}
              <div style={{ padding:'18px 20px 10px' }}>
                <p className="type-label" style={{ color:'rgba(10,22,40,0.4)', letterSpacing:'0.14em' }}>
                  Escalation rate reduction over time
                </p>
              </div>

              {/* SVG chart — hover-interactive */}
              <div style={{ padding:'4px 16px 20px' }}>
                <EscalationChart />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* -- Integrations -- */}
      <IntegrationsSection />

      {/* -- Omnichannel (Telegram / KAI / Gmail) -- */}
      <OmnichannelSection />

      {/* -- How Kai Works -- */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2240 40%, #0a3352 70%, #0a1628 100%)' }}>
        {/* Ambient glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,141,193,0.18) 0%, transparent 70%)' }} />
          <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,141,193,0.12) 0%, transparent 70%)' }} />
        </div>

        {/* Dot grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 py-28">

          {/* Heading */}
          <div className="mb-16">
            <p className="text-[#228DC1] mb-4 font-bold uppercase tracking-[0.28em]" style={{ fontSize: '11px' }}>How It Works</p>
            <h2 className="font-heading text-white mb-4">
              Kai Connect Customers
            </h2>
            <p className="text-white/65 text-[16px] max-w-lg leading-[1.7]">
              Kai meets customers across web, email, chat, and messaging channels, delivering the same intelligence, context, and resolution wherever the conversation starts.
            </p>
          </div>

          {/* Cards */}
          <div ref={stepsRef} className="grid sm:grid-cols-3 gap-4">
            {[
              {
                num: '01',
                pill: 'PARAMETERS',
                label: 'Define your agent',
                desc: 'Build your agent with no code. Bring your own LLM (open weight or closed source) and set your goals, tone, and rules. State your goal, Kai executes.',
                icon: faSliders,
              },
              {
                num: '02',
                pill: 'KNOWLEDGE',
                label: 'Connector Knowledge',
                desc: 'End-to-end data privacy and control. Deploy on-prem or your cloud, on your terms. Data encrypted at rest and in transit, Crest-certified and ISO 42001 compliant.',
                icon: faBookOpen,
              },
              {
                num: '03',
                pill: 'SYSTEMS',
                label: 'Activate your channel',
                desc: 'Kai triggers systems automatically and works with your existing tools via MCP server. Closed loop resolution: raise, route, resolve. Outcomes, not just chat.',
                icon: faPlug,
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="relative group rounded-2xl p-8 cursor-default"
                style={{
                  ...reveal(stepsInView, i * 130),
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.2)',
                  transition: 'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(139,92,246,0.55)';
                  el.style.boxShadow = '0 16px 56px rgba(124,58,237,0.28), 0 4px 32px rgba(0,0,0,0.15)';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(255,255,255,0.12)';
                  el.style.boxShadow = '0 4px 32px rgba(0,0,0,0.2)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Hover purple gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(109,40,217,0.06) 60%, transparent 100%)',
                }} />

                {/* Step number */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="font-black text-white/20 group-hover:text-violet-400 transition-colors duration-300"
                    style={{ fontSize: '48px', lineHeight: 1, letterSpacing: '-0.04em' }}
                  >{step.num}</span>
                </div>

                <h3 className="text-white group-hover:text-violet-200 font-semibold text-[20px] leading-snug mb-3 transition-colors duration-300">{step.label}</h3>
                <p className="text-white/55 text-[16px] font-normal leading-relaxed">{step.desc}</p>

                {/* Icon bottom-right */}
                <div className="mt-6 flex justify-end">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-violet-500/40"
                    style={{ background: 'rgba(34,141,193,0.15)', border: '1px solid rgba(34,141,193,0.25)' }}
                  >
                    <FontAwesomeIcon icon={step.icon} className="w-4 h-4 text-[#228DC1] group-hover:text-violet-400 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -- Security & compliance -- */}
      <SecurityComplianceSection />


      <CTASection
        title="Ready to see Kai in your workflows?"
        subtitle="Talk to our AI delivery team about a focused pilot across your systems, channels and governance model."
        primaryLabel="Request a Demo"
        primaryOnClick={openDemo}
      />
    </>
  )
}
