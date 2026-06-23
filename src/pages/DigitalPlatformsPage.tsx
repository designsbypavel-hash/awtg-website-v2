import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faKey, faComments, faLayerGroup, faChartLine, faMobileScreenButton,
  faBuildingColumns, faGraduationCap, faPeopleGroup, faBriefcase, faChalkboardUser, faHandsHolding,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'

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

// -- Hero visual ---------------------------------------------------------------
function DigitalPlatformsHeroShowcase() {
  const [entered, setEntered] = useState(false)
  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 100))
    return () => cancelAnimationFrame(raf)
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
      <div
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white"
        style={{ filter: 'drop-shadow(0 30px 60px rgba(10,22,40,0.20)) drop-shadow(0 8px 20px rgba(10,22,40,0.10))' }}
      >
        <img
          src="https://images.unsplash.com/photo-1758270705290-62b6294dd044?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80"
          alt="People exploring opportunities together on a digital platform"
          className="w-full h-auto block"
          style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

// -- Data -----------------------------------------------------------------------
const products = [
  {
    name: 'iBecome',
    desc: 'A platform for jobs, apprenticeships and local opportunity.',
    image: 'https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Profile and CV builder',
      'Apprenticeships and jobs',
      'Events and engagement',
      'Personalised guidance',
      'Employer and provider reach',
    ],
    href: '/digital-platforms/ibecome',
    cta: 'View iBecome',
  },
  {
    name: 'iYouth',
    desc: 'A platform for youth engagement, activities and local participation.',
    image: 'https://images.unsplash.com/photo-1758691737584-a8f17fb34475?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    highlights: [
      'Activities and event management',
      'Youth participation',
      'Communications and updates',
      'Better visibility of services',
      'Clearer delivery oversight',
    ],
    href: '/digital-platforms/iyouth',
    cta: 'View iYouth',
  },
]

const benefits = [
  { icon: faKey, label: 'Clear access', desc: 'Simple, guided journeys that help people find and use the right service quickly.', color: '#228DC1' },
  { icon: faComments, label: 'Better engagement', desc: 'Communications and updates that keep people informed and involved.', color: '#059669' },
  { icon: faLayerGroup, label: 'Joined-up delivery', desc: 'One platform connecting the teams, services and partners behind delivery.', color: '#7c3aed' },
  { icon: faChartLine, label: 'Stronger visibility', desc: 'Clear oversight of participation, activity and outcomes for delivery teams.', color: '#d97706' },
  { icon: faMobileScreenButton, label: 'Web and mobile readiness', desc: 'Built to work everywhere people are, on any device.', color: '#228DC1' },
]

const audiences = [
  { icon: faBuildingColumns, label: 'Local authorities' },
  { icon: faGraduationCap, label: 'Education providers' },
  { icon: faPeopleGroup, label: 'Youth services' },
  { icon: faBriefcase, label: 'Employability programmes' },
  { icon: faChalkboardUser, label: 'Training providers' },
  { icon: faHandsHolding, label: 'Community outreach teams' },
]

// -- Main page -----------------------------------------------------------------
export default function DigitalPlatformsPage() {
  const [productsRef, productsInView] = useInView(0.08)
  const [benefitsRef, benefitsInView] = useInView(0.08)
  const [audienceRef, audienceInView] = useInView(0.08)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

        {/* Diagonal dot-grid background pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dpHeroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dpHeroGrid)" />
          </svg>
        </div>

        {/* Diagonal connecting lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dpHeroLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dpHeroLines)" />
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
        <div className="absolute rounded-full pointer-events-none" style={{ top: '68%', left: '5%', width: 6, height: 6, background: 'rgba(5,150,105,0.35)' }} />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(34,141,193,0.12) 0, transparent 55%)' }} />

        <div className="relative max-w-[1320px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
            <div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.02] mb-6">
                Digital platforms for opportunity, engagement and service delivery
              </h1>
              <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] max-w-xl mb-10">
                Our Digital Platforms support the services that connect people with opportunities, activities and support. They bring together clear user journeys, practical delivery tools and better visibility for the teams managing them.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/digital-platforms/ibecome"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold rounded-lg hover:bg-[#1a6e99] transition-colors"
                >
                  Explore iBecome
                </Link>
                <Link
                  to="/digital-platforms/iyouth"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#228DC1] text-[#1a7aab] text-[14px] font-semibold rounded-lg hover:bg-[#228DC1] hover:text-white transition-colors"
                >
                  Explore iYouth
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <DigitalPlatformsHeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CARDS ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div ref={productsRef} className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <Link
                key={product.name}
                to={product.href}
                className="group flex flex-col"
                style={reveal(productsInView, i * 120)}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#e8f4fa]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/20 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col pt-7">
                  <h3 className="text-[#0a1628] font-bold leading-snug mb-2" style={{ fontSize: 22 }}>{product.name}</h3>
                  <p className="text-[#0a1628]/60 text-[14px] leading-relaxed mb-6">{product.desc}</p>
                  <div className="space-y-2.5 border-t border-gray-100 pt-5 mb-6">
                    {product.highlights.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 bg-[#228DC1] rounded-full shrink-0 mt-1.5" />
                        <p className="text-[13px] font-normal leading-relaxed text-[#0a1628]/70">{point}</p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 text-[#1a7aab] text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors group-hover:text-[#0a1628]">
                    {product.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHARED BENEFITS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628]">
              What our platforms are built to deliver
            </h2>
          </div>
          <div ref={benefitsRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {benefits.map((b, i) => (
              <div key={b.label}
                className="bg-white rounded-2xl p-7 hover:shadow-md transition-shadow"
                style={{
                  borderTop: `3px solid ${b.color}`,
                  boxShadow: '0 2px 12px rgba(10,22,40,0.06)',
                  ...reveal(benefitsInView, i * 80),
                }}>
                <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-6"
                  style={{ background: b.color + '15', border: `1px solid ${b.color}25` }}>
                  <FontAwesomeIcon icon={b.icon} style={{ width: 18, height: 18, color: b.color }} />
                </div>
                <p className="text-[#0a1628] font-semibold text-[15px] leading-snug mb-2.5">{b.label}</p>
                <p className="text-[#0a1628]/60 text-[13px] font-normal leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628]">
              Who these platforms are for
            </h2>
          </div>
          <div ref={audienceRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <div key={a.label}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white"
                style={{
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 1px 4px rgba(15,23,42,0.04)',
                  ...reveal(audienceInView, i * 70),
                }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(34,141,193,0.09)' }}>
                  <FontAwesomeIcon icon={a.icon} style={{ fontSize: 17, color: '#228DC1' }} />
                </div>
                <p className="text-[#0a1628] text-[15px] font-semibold leading-snug">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Looking for a platform built around your service model?"
        subtitle="We work with organisations that need practical, well-designed digital platforms for real delivery settings."
        primaryLabel="Talk to us"
        primaryHref="/contact"
        image="https://images.unsplash.com/photo-1758270705290-62b6294dd044?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
      />
    </>
  )
}
