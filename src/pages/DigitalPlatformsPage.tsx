import { Link } from 'react-router-dom'
import lysHomePage from '@/assets/iYouth/LYS home page.jpg'

const products = [
  {
    name: 'iBecome',
    subtitle: 'A platform for jobs, apprenticeships and local opportunity',
    desc: 'iBecome helps young people discover opportunities, build confidence and move closer to employment.',
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
    subtitle: 'A platform for youth engagement, activities and local participation',
    desc: 'iYouth helps organisations manage youth-facing activities, events and engagement in one place.',
    image: lysHomePage,
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

export default function DigitalPlatformsPage() {
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
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] leading-[1.02] mb-6">
              Digital platforms for opportunity, engagement and service delivery
            </h1>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] max-w-xl">
              Our Digital Platforms support the services that connect people with opportunities, activities and support. They bring together clear user journeys, practical delivery tools and better visibility for the teams managing them.
            </p>
          </div>
        </div>
      </section>

      {/* ── SELECTION CARDS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.name}
                to={product.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(10,22,40,0.12)]"
                style={{ boxShadow: '0 4px 24px rgba(10,22,40,0.06)' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e8f4fa]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/15 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-[#0a1628] font-bold leading-snug mb-2" style={{ fontSize: 24 }}>{product.name}</h2>
                  <p className="text-[#1a7aab] text-[14px] font-semibold leading-snug mb-4">{product.subtitle}</p>
                  <p className="text-[#0a1628]/60 text-[14px] leading-relaxed mb-6">{product.desc}</p>
                  <div className="space-y-2.5 border-t border-gray-100 pt-5 mb-7">
                    {product.highlights.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 bg-[#228DC1] rounded-full shrink-0 mt-1.5" />
                        <p className="text-[13px] font-normal leading-relaxed text-[#0a1628]/70">{point}</p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold rounded-lg transition-colors group-hover:bg-[#1a6e99] w-fit">
                    {product.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
