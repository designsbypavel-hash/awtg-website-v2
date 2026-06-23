import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPen, faBriefcase, faCalendarCheck, faCompass, faVideo, faHandshake, faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'
import iBecomeHero from '@/assets/Digital Platforms/iBecome_Hero.png'

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

const metrics = [
  { stat: '12,500+', label: 'young people connected with apprenticeship and job opportunities' },
  { stat: 'Award winning', label: 'Recognised through the LGC Awards Technology category for Liverpool City Region BeMore' },
  { stat: '3x monthly users', label: 'after redesign and mobile app launch' },
]

const capabilities = [
  {
    icon: faUserPen,
    title: 'Profile & CV builder',
    desc: 'Users can create a profile, build a CV and stay ready to apply.',
    color: '#228DC1',
  },
  {
    icon: faBriefcase,
    title: 'Apprenticeships & jobs',
    desc: 'Bring live vacancies and apprenticeship opportunities into one place, with saved opportunities and a clear route back.',
    color: '#059669',
  },
  {
    icon: faCalendarCheck,
    title: 'Events & engagement',
    desc: 'Promote careers fairs, employer sessions and local opportunity events through the same platform.',
    color: '#7c3aed',
  },
  {
    icon: faCompass,
    title: 'Personalised guidance',
    desc: 'Recommendations, reminders and notifications help users keep moving and stay engaged.',
    color: '#d97706',
  },
  {
    icon: faVideo,
    title: 'Careers content',
    desc: 'Videos, guides, case studies and sector pathways help users make better informed choices.',
    color: '#228DC1',
  },
  {
    icon: faHandshake,
    title: 'Employer & provider reach',
    desc: 'Give employers and training providers a clearer way to reach local talent.',
    color: '#059669',
  },
  {
    icon: faMobileScreenButton,
    title: 'Web and mobile access',
    desc: 'Support a joined-up experience across web and mobile so access stays simple.',
    color: '#7c3aed',
  },
]

const valueProps = [
  { label: 'For young people', desc: 'A clearer path from discovering an opportunity to being ready to apply.' },
  { label: 'For local partners', desc: 'Stronger engagement and better visibility of the opportunities being delivered.' },
  { label: 'For programmes', desc: 'A proven digital model that can be adapted around local goals and service needs.' },
]

export default function DigitalPlatformsIBecomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [outcomesRef, outcomesInView] = useInView(0.1)
  const [capRef, capInView] = useInView(0.08)
  const [valueRef, valueInView] = useInView(0.08)

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
      <section className="relative overflow-hidden pt-32 pb-20 lg:flex lg:h-[634px] lg:items-center" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>
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
                iBecome helps young people discover opportunities, become application-ready and stay engaged. It carries forward the proven model behind Liverpool City Region BeMore, giving local partners a clearer way to connect talent with jobs, apprenticeships, training and careers support.
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
              <img
                src={iBecomeHero}
                alt="iBecome digital opportunity platform"
                className="block max-h-[430px] w-full max-w-[760px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVEN OUTCOMES AT SCALE ─────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-28 overflow-hidden">
        <div ref={outcomesRef} className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div style={reveal(outcomesInView)}>
              <p className="mb-4 text-[12px] font-black uppercase tracking-[0.22em] text-[#1a7aab]">
                Proven impact
              </p>
              <h2 className="font-heading mb-6 leading-[1.12] text-[#0a1628]">
                Built on the success of BeMore.<br />
                Proven through measurable outcomes.
              </h2>
              <p className="mb-4 text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
                BeMore transformed how young people discover careers, apprenticeships and opportunities across Liverpool City Region.
              </p>
              <p className="mb-10 text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
                iBecome builds on that proven foundation, helping organisations connect services, improve engagement and provide better visibility across programmes and delivery partners.
              </p>

              <div className="space-y-4">
                {metrics.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex gap-5 rounded-2xl border border-[#0a1628]/8 bg-white p-6"
                    style={{ boxShadow: '0 12px 32px rgba(10,22,40,0.06)', ...reveal(outcomesInView, 150 + i * 100) }}
                  >
                    <div className="mt-1 h-auto w-1 shrink-0 rounded-full" style={{ background: '#228DC1' }} />
                    <div>
                      <p className="font-heading mb-1.5 text-[#0a1628]" style={{ fontSize: 'clamp(24px,2.4vw,32px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                        {item.stat}
                      </p>
                      <p className="text-[#0a1628]/60 text-[14px] font-normal leading-snug">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={reveal(outcomesInView, 200)}>
              <div
                className="group relative overflow-hidden rounded-[24px] border border-[#0a1628]/8"
                style={{ aspectRatio: '4 / 5', boxShadow: '0 30px 70px rgba(10,22,40,0.18)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80"
                  alt="Young people discovering apprenticeship and career opportunities together"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1628]/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628]">What iBecome does</h2>
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

      {/* ── VALUE: WHY IT WORKS ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628]">Why it works</h2>
          </div>
          <div ref={valueRef} className="grid sm:grid-cols-3 gap-5">
            {valueProps.map((v, i) => (
              <div key={v.label}
                className="bg-white rounded-2xl p-8"
                style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 2px 12px rgba(10,22,40,0.05)', ...reveal(valueInView, i * 90) }}>
                <p className="text-[#1a7aab] text-[13px] font-bold uppercase tracking-[0.12em] mb-4">{v.label}</p>
                <p className="text-[#0a1628]/70 text-[15px] font-normal leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORTING ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[#0a1628] mb-5">Designed for local opportunity delivery</h2>
            <p className="text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              iBecome is well suited to local and regional programmes that want to bring employability support into one place. It helps reduce fragmentation, improve visibility and create a better user experience for young people navigating jobs, apprenticeships and career pathways.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Looking to build on a proven employability platform?"
        subtitle="We can show you how iBecome can be shaped around your programme, region or delivery model."
        primaryLabel="Request a demo"
        primaryOnClick={() => setIsDemoOpen(true)}
        image="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
      />
    </>
  )
}
