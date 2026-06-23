import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPen, faBriefcase, faCalendarCheck, faCompass, faHandshake,
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

const HERO_SCREENS = [
  { label: 'iBecome profile and opportunity dashboard', src: 'https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80' },
  { label: 'iBecome apprenticeships and jobs listing', src: 'https://images.unsplash.com/photo-1758270705290-62b6294dd044?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80' },
]

function IBecomeHeroShowcase() {
  const [active, setActive] = useState(0)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive((current) => (current + 1) % HERO_SCREENS.length), 3200)
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
        {HERO_SCREENS.map((screen, index) => (
          <img
            key={screen.src}
            src={screen.src}
            alt={screen.label}
            className="rounded-2xl border border-gray-200"
            style={{
              gridRow: '1 / 2',
              gridColumn: '1 / 2',
              width: '100%',
              height: 'auto',
              aspectRatio: '4 / 3',
              objectFit: 'cover',
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

const metrics = [
  { stat: '1', label: 'profile, every opportunity' },
  { stat: '100%', label: 'mobile and desktop ready' },
  { stat: '24/7', label: 'access to listings and events' },
  { stat: '360°', label: 'view of local opportunity' },
]

const capabilities = [
  {
    icon: faUserPen,
    title: 'Profile and CV builder',
    desc: 'A simple, guided profile and CV builder that helps people present their skills and experience clearly to employers and providers.',
    color: '#228DC1',
  },
  {
    icon: faBriefcase,
    title: 'Apprenticeships and jobs',
    desc: 'A single place to discover apprenticeships, jobs and training opportunities from local employers and providers.',
    color: '#059669',
  },
  {
    icon: faCalendarCheck,
    title: 'Events and engagement',
    desc: 'Careers fairs, workshops and local events surfaced alongside opportunities, with simple registration.',
    color: '#7c3aed',
  },
  {
    icon: faCompass,
    title: 'Personalised guidance',
    desc: 'Recommendations and next steps tailored to each person’s profile, interests and progress.',
    color: '#d97706',
  },
  {
    icon: faHandshake,
    title: 'Employer and provider reach',
    desc: 'Tools for employers and providers to reach candidates, post opportunities and track engagement.',
    color: '#228DC1',
  },
]

const benefits = [
  'A single, guided journey from profile to opportunity',
  'Local jobs, apprenticeships and events in one place',
  'Personalised guidance based on profile and progress',
  'Better visibility of engagement for delivery teams',
  'Built to work for employers, providers and individuals',
  'Web and mobile ready from day one',
]

const screenshots = [
  { src: 'https://images.unsplash.com/photo-1758270705290-62b6294dd044?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', label: 'Profile and CV builder' },
  { src: 'https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', label: 'Apprenticeships and jobs' },
]

export default function DigitalPlatformsIBecomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [capRef, capInView] = useInView(0.08)
  const [benefitsRef, benefitsInView] = useInView(0.08)
  const [shotsRef, shotsInView] = useInView(0.08)

  return (
    <>
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName="iBecome"
        title="See iBecome in action"
        description="Share a few details and we will show how iBecome helps your organisation connect people with jobs, apprenticeships and local opportunity."
        logoSrc="/logo-icon.svg"
        accentColor="#228DC1"
        outcomes={[
          'A walkthrough of profiles, listings and events in your context',
          'Guidance on connecting employers and providers to candidates',
          'A look at engagement and delivery visibility for your team',
          'A practical pilot path for your service area',
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ibecomeGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ibecomeGrid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.10 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ibecomeLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ibecomeLines)" />
          </svg>
        </div>
        {[{ top: '18%', left: '5%' }, { top: '55%', left: '3%' }, { top: '75%', left: '8%' }, { top: '32%', left: '44%' }].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none select-none text-[#228DC1]"
            style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.30, fontWeight: 300, lineHeight: 1 }}>+</div>
        ))}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 35%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative mx-auto max-w-[1320px] px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h1 className="font-serif-display mb-3 leading-[1.02] text-[#0a1628]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
                iBecome
              </h1>
              <p className="mb-3 text-[#1a7aab] text-[17px] font-semibold">
                A complete local opportunity ecosystem
              </p>
              <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.7] text-[#0a1628]/60">
                iBecome brings profiles, apprenticeships, jobs, events and guidance together in one platform, helping local authorities, education providers and employers connect people with real opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setIsDemoOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1a6e99]"
                >
                  Request a demo
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-[#1a7aab] transition-colors hover:bg-[#228DC1] hover:text-white"
                >
                  Talk to us
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <IBecomeHeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT METRICS ───────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {metrics.map((item, i) => (
              <div key={item.label}
                className={`px-8 py-10 lg:py-12 flex flex-col items-center justify-center text-center min-h-[148px] ${
                  i % 2 === 1 ? 'sm:border-l sm:border-gray-200' : ''
                } ${i > 0 ? 'lg:border-l lg:border-gray-200' : ''} ${i > 1 ? 'max-sm:border-t max-sm:border-gray-200' : ''}`}>
                <p className="font-heading text-[#228DC1] mb-3" style={{ fontSize: 'clamp(34px,3vw,46px)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {item.stat}
                </p>
                <p className="text-[#0a1628]/70 text-sm font-normal leading-snug max-w-[200px]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628] mb-5">What iBecome brings together</h2>
            <p className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/60">
              Every piece of the local opportunity journey, connected in one platform.
            </p>
          </div>
          <div ref={capRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <div key={cap.title}
                className="bg-white rounded-2xl p-7"
                style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 2px 12px rgba(10,22,40,0.05)', ...reveal(capInView, i * 80) }}>
                <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-6"
                  style={{ background: cap.color + '15', border: `1px solid ${cap.color}25` }}>
                  <FontAwesomeIcon icon={cap.icon} style={{ width: 18, height: 18, color: cap.color }} />
                </div>
                <p className="text-[#0a1628] font-semibold text-base leading-snug mb-3">{cap.title}</p>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={benefitsRef}>
              <h2 className="font-heading text-[#0a1628] mb-8">Why teams choose iBecome</h2>
              <div className="space-y-4">
                {benefits.map((item, i) => (
                  <div key={item} className="flex items-start gap-3.5" style={reveal(benefitsInView, i * 70)}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#228DC1] shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" /></svg>
                    </span>
                    <p className="text-[14px] text-[#0a1628]/75 leading-snug font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ boxShadow: '0 16px 40px rgba(10,22,40,0.12)' }}>
              <img
                src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="iBecome connecting people with employers and providers"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628]">See iBecome in practice</h2>
          </div>
          <div ref={shotsRef} className="grid sm:grid-cols-2 gap-6">
            {screenshots.map((shot, i) => (
              <div key={shot.label} style={reveal(shotsInView, i * 100)}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200" style={{ boxShadow: '0 8px 32px rgba(10,22,40,0.08)' }}>
                  <img src={shot.src} alt={shot.label} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-[#0a1628] text-[14px] font-semibold text-center">{shot.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Ready to see iBecome in your service?"
        subtitle="Talk to us about how iBecome can support your local opportunity programmes from day one."
        primaryLabel="Talk to us"
        primaryHref="/contact"
        image="https://images.unsplash.com/photo-1758270705290-62b6294dd044?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
      />
    </>
  )
}
