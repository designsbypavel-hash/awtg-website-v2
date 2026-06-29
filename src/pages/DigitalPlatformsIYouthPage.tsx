import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarCheck, faUserPlus, faBullhorn, faEye, faPeopleGroup,
  faBuildingColumns, faHandsHolding, faPersonWalkingArrowRight, faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import ProductDemoModal from '@/components/ProductDemoModal'
import lysLogin from '@/assets/iYouth/Login.jpg'
import clubHomePage from '@/assets/iYouth/Club Home page.jpg'
import lysOrganisations from '@/assets/iYouth/LYS Organisations Clubs table Active tab.jpg'
import lysReporting from '@/assets/iYouth/LYS Reporting table.jpg'
import iYouthHero from '@/assets/Digital Platforms/Hero_iYouth.png'

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

const capabilities = [
  {
    icon: faCalendarCheck,
    title: 'Activities & events',
    desc: 'Present youth activities and events in a clear, accessible format.',
    color: '#228DC1',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faUserPlus,
    title: 'Registrations & participation',
    desc: 'Give young people and families a simpler route to register and take part.',
    color: '#059669',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faBullhorn,
    title: 'Communications & updates',
    desc: 'Share important updates, reminders and information in one place.',
    color: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1514464750060-00e6e34c8b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faEye,
    title: 'Service visibility',
    desc: 'Make local youth offers easier to discover and easier to understand.',
    color: '#d97706',
    image: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
]

const useCases = [
  {
    icon: faPeopleGroup,
    label: 'Youth services',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faBuildingColumns,
    label: 'Local authority teams',
    image: 'https://images.unsplash.com/photo-1562693772-471c489f5178?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faHandsHolding,
    label: 'Community programmes',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faPersonWalkingArrowRight,
    label: 'Outreach and engagement teams',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faGraduationCap,
    label: 'Education-linked youth initiatives',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: faCalendarCheck,
    label: 'Event and activity-based youth programmes',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
]

const proofShots = [
  { src: clubHomePage, label: 'Club dashboard and announcements' },
  { src: lysOrganisations, label: 'Organisations and clubs management' },
  { src: lysReporting, label: 'Reporting and oversight' },
]

export default function DigitalPlatformsIYouthPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [capRef, capInView] = useInView(0.08)
  const [useCasesRef, useCasesInView] = useInView(0.08)
  const [shotsRef, shotsInView] = useInView(0.08)

  return (
    <>
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        productName="iYouth"
        title="See iYouth in action"
        description="Share a few details and we will show how iYouth helps your organisation manage activities, engagement and participation for young people."
        logoSrc="/logo-icon.svg"
        accentColor="#228DC1"
        outcomes={[
          'A walkthrough of activities, registrations and communications',
          'Guidance on engaging young people and families',
          'A look at participation tracking and reporting',
          'A practical pilot path for your service area',
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:flex lg:h-[634px] lg:items-center" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="iyouthGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#iyouthGrid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.10 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="iyouthLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#iyouthLines)" />
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
              <div className="mb-3 w-fit">
                <h1 className="font-serif-display leading-[1.02] text-[#1a2233]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)', textShadow: '0 8px 28px rgba(10,22,40,0.22)' }}>
                  iYouth
                </h1>
                <div className="relative mt-3 h-[10px] w-full">
                  <div className="absolute inset-0 rounded-full opacity-80 blur-xl" style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899, #f97316, #eab308, #22c55e, #3b82f6)' }} />
                  <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899, #f97316, #eab308, #22c55e, #3b82f6)' }} />
                </div>
              </div>
              <p className="mb-3 text-[#1a7aab] text-[17px] font-semibold">
                A platform for youth engagement, activities and local participation
              </p>
              <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.7] text-[#0a1628]/60">
                iYouth helps organisations bring youth activities, events and participation into one joined-up digital experience. It is designed to make access simpler for young people and families.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setIsDemoOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1a6e99]"
                >
                  Request a demo
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={iYouthHero}
                alt="iYouth youth engagement platform"
                className="block max-h-[430px] w-full max-w-[760px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628]">What iYouth supports</h2>
          </div>
          <div ref={capRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <div key={cap.title} className="group" style={reveal(capInView, i * 80)}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ boxShadow: '0 1px 4px rgba(15,23,42,0.08)' }}>
                  <img
                    src={cap.image}
                    alt={cap.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-4 text-[#0a1628] font-semibold text-base leading-snug mb-2">{cap.title}</p>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-[#0a1628] mb-5">Where iYouth fits</h2>
            <p className="text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              iYouth is suited to organisations that need a clearer digital layer around youth participation and service delivery.
            </p>
          </div>
          <div ref={useCasesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <div key={u.label} className="group" style={reveal(useCasesInView, i * 70)}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ boxShadow: '0 1px 4px rgba(15,23,42,0.08)' }}>
                  <img
                    src={u.image}
                    alt={u.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0) 55%, rgba(10,22,40,0.6) 100%)' }} />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center bg-white">
                    <FontAwesomeIcon icon={u.icon} style={{ fontSize: 15, color: '#228DC1' }} />
                  </div>
                </div>
                <p className="mt-4 text-[#0a1628] text-[15px] font-semibold leading-snug">{u.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE / CREDIBILITY ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-5">Relevant youth service experience</h2>
            <p className="text-[16px] font-normal leading-[1.78] text-[#0a1628]/60">
              Our wider work in this space includes youth-focused digital delivery such as My Youth Club in Limerick, which helped hundreds of students and families manage youth services. iYouth sits in that same broader area of youth engagement and service access.
            </p>
          </div>
          <div ref={shotsRef} className="grid sm:grid-cols-3 gap-6">
            {proofShots.map((shot, i) => (
              <div key={shot.label} style={reveal(shotsInView, i * 100)}>
                <div className="relative aspect-[1910/896] overflow-hidden rounded-2xl border border-gray-200 bg-white" style={{ boxShadow: '0 8px 32px rgba(10,22,40,0.08)' }}>
                  <img src={shot.src} alt={shot.label} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-[#0a1628] text-[13px] font-semibold text-center">{shot.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Need a better digital experience for youth engagement?"
        subtitle="We can help shape iYouth around the way your programme, service or organisation works."
        primaryLabel="Request a demo"
        primaryOnClick={() => setIsDemoOpen(true)}
        image={lysLogin}
        imagePosition="right center"
      />
    </>
  )
}
