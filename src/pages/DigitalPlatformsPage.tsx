import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuildingColumns, faGraduationCap, faPeopleGroup, faBriefcase, faChalkboardUser, faHandsHolding,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import lysLogin from '@/assets/iYouth/Login.jpg'
import iBecomeHero from '@/assets/Digital Platforms/iBecome_Hero.png'
import iBecomeLCRReels from '@/assets/Digital Platforms/iBecome_LCRReels.png'
import iBecomeVacancies from '@/assets/Digital Platforms/iBecome_Vacancies.png'
import iYouthHero from '@/assets/Digital Platforms/Hero_iYouth.png'
import clearAccessImage from '@/assets/Digital Platforms/outcomes/clear-access.webp'
import betterEngagementImage from '@/assets/Digital Platforms/outcomes/better-engagement.webp'
import joinedUpDeliveryImage from '@/assets/Digital Platforms/outcomes/joined-up-delivery.webp'
import strongerVisibilityImage from '@/assets/Digital Platforms/outcomes/stronger-visibility.webp'
import webMobileReadinessImage from '@/assets/Digital Platforms/outcomes/web-mobile-readiness.webp'

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

const products = [
  {
    name: 'iBecome',
    subtitle: 'A platform for jobs, apprenticeships and local opportunity',
    desc: 'iBecome helps young people discover opportunities, build confidence and move closer to employment. It carries forward the proven model behind Liverpool City Region BeMore, bringing together vacancies, careers content, profile tools and local engagement in one joined-up experience. It includes a profile and CV builder, apprenticeships and jobs, events and engagement, personalised guidance, and employer and provider reach.',
    image: iBecomeVacancies,
    href: '/digital-platforms/ibecome',
    cta: 'View iBecome',
    deviceFrame: true,
  },
  {
    name: 'iYouth',
    subtitle: 'A platform for youth engagement, activities and local participation',
    desc: 'iYouth helps organisations manage youth-facing activities, events and engagement in one place. It is designed to make access simpler for young people and families, while giving delivery teams a clearer way to manage participation and communicate with their communities. It covers activities and event management, youth participation, communications and updates, better visibility of services, and clearer delivery oversight.',
    image: iYouthHero,
    href: '/digital-platforms/iyouth',
    cta: 'View iYouth',
  },
]

const benefits = [
  { label: 'Clear access', desc: 'Make it easier for people to find what is available and take the next step.', image: clearAccessImage, alt: 'Young person using a mobile phone to access local opportunities and public services', accent: '#228DC1' },
  { label: 'Better engagement', desc: 'Support participation through timely information, relevant content and a clearer user journey.', image: betterEngagementImage, alt: 'Youth worker facilitating an inclusive community workshop with young people', accent: '#059669' },
  { label: 'Joined-up delivery', desc: 'Bring services, opportunities and activities into one connected experience rather than fragmented systems.', image: joinedUpDeliveryImage, alt: 'Cross-organisational team collaborating in a digital transformation workshop', accent: '#7C3AED' },
  { label: 'Stronger visibility', desc: 'Give delivery teams a better view of activity, engagement and programme performance.', image: strongerVisibilityImage, alt: 'Operations team reviewing programme analytics and performance metrics', accent: '#D97706' },
  { label: 'Web and mobile readiness', desc: 'Design for how people actually access services today.', image: webMobileReadinessImage, alt: 'Person accessing a modern digital service across a smartphone and laptop', accent: '#228DC1' },
]
const audiences = [
  { icon: faBuildingColumns, label: 'Local authorities' },
  { icon: faGraduationCap, label: 'Education providers' },
  { icon: faPeopleGroup, label: 'Youth services' },
  { icon: faBriefcase, label: 'Employability programmes' },
  { icon: faChalkboardUser, label: 'Training providers' },
  { icon: faHandsHolding, label: 'Community and outreach teams' },
]

function PlatformOutcomeSection({ outcome, index }: { outcome: typeof benefits[number]; index: number }) {
  const [sectionRef, inView] = useInView(0.14)
  const imageLayerRef = useRef<HTMLDivElement>(null)
  const imageOnRight = index % 2 === 1

  useEffect(() => {
    const section = sectionRef.current
    const imageLayer = imageLayerRef.current
    if (!section || !imageLayer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const updateParallax = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const progress = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight
      imageLayer.style.transform = `translate3d(0, ${Math.max(-22, Math.min(22, progress * 32))}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [sectionRef])

  return (
    <article className={index % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-white'}>
      <div ref={sectionRef} className="mx-auto grid max-w-[1400px] items-center gap-10 px-8 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
        <div
          className={`group relative h-[360px] overflow-hidden rounded-[24px] border border-[#0a1628]/8 bg-[#e8eef4] shadow-[0_18px_50px_rgba(10,22,40,0.10)] motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!transition-none sm:h-[460px] lg:h-[560px] ${imageOnRight ? 'lg:order-2' : ''}`}
          style={reveal(inView)}
        >
          <div ref={imageLayerRef} className="absolute inset-x-0 -inset-y-[7%] will-change-transform">
            <img src={outcome.image} alt={outcome.alt} loading="lazy" className="h-full w-full scale-[1.03] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transform-none motion-reduce:transition-none" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1628]/12 via-transparent to-transparent" />
        </div>

        <div className={`max-w-[540px] motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!transition-none ${imageOnRight ? 'lg:order-1 lg:justify-self-end' : 'lg:order-2'}`} style={reveal(inView, 100)}>
          <div className="mb-7 h-1 w-12 rounded-full" style={{ background: outcome.accent }} />
          <h3 className="font-heading mb-6 text-[#0a1628]" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', lineHeight: 1.08 }}>
            {outcome.label}
          </h3>
          <p className="text-[17px] font-normal leading-[1.8] text-[#0a1628]/65 sm:text-[18px]">{outcome.desc}</p>
        </div>
      </div>
    </article>
  )
}
// -- Main page -----------------------------------------------------------------
export default function DigitalPlatformsPage() {
  const [productsRef, productsInView] = useInView(0.08)
  const [audienceRef, audienceInView] = useInView(0.08)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:flex lg:h-[634px] lg:items-center" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

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

        <div className="relative mx-auto max-w-[1320px] px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h1 className="font-serif-display mb-6 leading-[1.02] text-[#0a1628]">
                Digital platforms for opportunity, engagement and service delivery
              </h1>
              <p className="max-w-xl text-[16px] font-normal leading-[1.7] text-[#0a1628]/60">
                Our Digital Platforms support the services that connect people with opportunities, activities and support. They bring together clear user journeys, practical delivery tools and better visibility for the teams managing them.
              </p>
            </div>
            {/* CSS tablet device showing LCR Reels screenshot */}
            <div className="flex justify-center lg:justify-end" style={{ perspective: '1100px' }}>
              <div
                className="relative w-full max-w-[640px]"
                style={{ transform: 'rotateY(-9deg) rotateX(2deg)', transformStyle: 'preserve-3d' }}
              >
                {/* Tablet bezel */}
                <div className="bg-[#0e0e1c] rounded-[22px] p-[10px] shadow-[0_40px_90px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)]">
                  {/* Top bar (camera) */}
                  <div className="flex justify-center mb-1.5">
                    <div className="w-8 h-[5px] rounded-full bg-[#1a1a2c]" />
                  </div>
                  {/* Screen */}
                  <div className="overflow-hidden rounded-[12px]">
                    <img
                      src={iBecomeLCRReels}
                      alt="iBecome — LCR Reels"
                      className="w-full block"
                      loading="lazy"
                    />
                  </div>
                  {/* Bottom bar (home indicator) */}
                  <div className="flex justify-center mt-1.5">
                    <div className="w-14 h-[5px] rounded-full bg-[#1a1a2c]" />
                  </div>
                </div>
              </div>
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
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(10,22,40,0.12)]"
                style={{ boxShadow: '0 4px 24px rgba(10,22,40,0.06)', ...reveal(productsInView, i * 120) }}
              >
                {'deviceFrame' in product && product.deviceFrame ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#f0f4f8] to-[#e2eaf2] flex items-start justify-center pt-5 px-5">
                    <div className="w-full overflow-hidden rounded-t-xl shadow-[0_16px_48px_rgba(10,22,40,0.20)] border border-[#0a1628]/10 flex flex-col">
                      {/* Browser chrome */}
                      <div className="bg-[#1c1c28] px-3 py-[9px] flex items-center gap-2.5 shrink-0">
                        <div className="flex gap-1.5">
                          <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f56]" />
                          <div className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                          <div className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                        </div>
                        <div className="flex-1 bg-white/10 rounded h-[18px] flex items-center px-2.5">
                          <span className="text-white/50 text-[9px] font-mono">ibecome.co.uk/apprenticeships</span>
                        </div>
                      </div>
                      {/* Screenshot — crops naturally at bottom to fill card */}
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full block transition-transform duration-700 group-hover:scale-[1.02]"
                        style={{ maxHeight: 230, objectFit: 'cover', objectPosition: 'top' }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8f4fa]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/15 via-transparent to-transparent" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-[#0a1628] font-bold leading-snug mb-2" style={{ fontSize: 24 }}>{product.name}</h2>
                  <p className="text-[#1a7aab] text-[14px] font-semibold leading-snug mb-4">{product.subtitle}</p>
                  <p className="text-[#0a1628]/60 text-[14px] leading-relaxed mb-7">{product.desc}</p>
                  <span className="mt-auto inline-flex items-center px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold rounded-lg transition-colors group-hover:bg-[#1a6e99] w-fit">
                    {product.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOME STORIES ──────────────────────────────────────────────── */}
      <section className="bg-white pt-20 lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-8 pb-14 lg:px-12 lg:pb-20">
          <div className="max-w-3xl">
            <h2 className="font-heading mb-6 text-[#0a1628]">What our platforms are built to deliver</h2>
            <p className="max-w-2xl text-[16px] font-normal leading-[1.75] text-[#0a1628]/60 sm:text-[17px]">
              Digital services should make opportunity easier to find, participation simpler to manage and delivery clearer for every team involved.
            </p>
          </div>
        </div>

        {benefits.map((outcome, index) => (
          <PlatformOutcomeSection key={outcome.label} outcome={outcome} index={index} />
        ))}
      </section>
      {/* ── AUDIENCE ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div ref={audienceRef} className="grid gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <h2 className="font-heading text-[#0a1628] mb-5 max-w-xl">
                Who these platforms are for
              </h2>
              <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.75] text-[#0a1628]/60">
                Our Digital Platforms are suited to organisations working across youth engagement, employability, education, local programmes and community service delivery.
              </p>
              <div className="relative overflow-hidden rounded-sm bg-[#0a1628] shadow-[0_24px_70px_rgba(10,22,40,0.16)]" style={{ aspectRatio: '4 / 3' }}>
                <img
                  src="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Organisations collaborating around the services they deliver"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:pl-4">
              <div className="border-y border-[#0a1628]/10">
                {audiences.map((a, i) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-5 border-b border-[#0a1628]/10 py-6 last:border-b-0"
                    style={reveal(audienceInView, i * 70)}
                  >
                    <FontAwesomeIcon icon={a.icon} style={{ fontSize: 20, color: '#228DC1' }} className="shrink-0" />
                    <p className="text-[#0a1628] text-[16px] font-semibold leading-snug">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Looking for a platform built around your service model?"
        subtitle="We work with organisations that need practical, well-designed digital platforms for real delivery settings."
        primaryLabel="Talk to us"
        primaryHref="/contact"
        image={lysLogin}
        imagePosition="right center"
      />
    </>
  )
}
