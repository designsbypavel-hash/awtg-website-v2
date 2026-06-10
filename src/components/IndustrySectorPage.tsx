import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import CTASection from '@/components/CTASection'

export interface SectorHero {
  badge: string
  title: string
  subtitle: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  visualIcon: IconDefinition
  visualItems: Array<{ icon: IconDefinition; label: string }>
}
export interface SectorChallenge { icon: IconDefinition; title: string; desc: string }
export interface SectorSupport { icon: IconDefinition; title: string; desc: string; bullets: string[] }
export interface SectorUseCase { icon: IconDefinition; title: string; desc: string }
export interface SectorOutcome { icon: IconDefinition; title: string; desc: string }
export interface SectorPageData {
  hero: SectorHero
  challenges: { heading: string; intro: string; items: SectorChallenge[] }
  supports: { heading: string; intro: string; items: SectorSupport[] }
  useCases: { heading: string; intro: string; items: SectorUseCase[] }
  outcomes: { heading: string; intro: string; items: SectorOutcome[] }
  proof?: { quote: string; author?: string; context?: string }
  cta: { title: string; subtitle: string; label?: string }
}

export default function IndustrySectorPage({ data }: { data: SectorPageData }) {
  const { hero, challenges, supports, useCases, outcomes, proof, cta } = data

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-24 bg-[#f8fafc] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
            <div>
              <h1 className="font-serif-display text-[#0a1628] mb-5">{hero.title}</h1>
              <p className="text-[#0a1628]/50 text-sm font-normal leading-[1.8] mb-10 max-w-lg">
                {hero.description}
              </p>
              <Link to={hero.ctaHref ?? '/contact'} className="btn btn-primary">
                {hero.ctaLabel ?? 'Talk to our experts'}
              </Link>
            </div>

            {/* capability panel */}
            <div className="hidden lg:block">
              <div
                className="rounded-[20px] overflow-hidden bg-white"
                style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 4px 24px rgba(15,23,42,0.07), 0 1px 4px rgba(15,23,42,0.04)' }}
              >
                <div className="flex items-center justify-center py-8 px-6 border-b" style={{ borderColor: 'rgba(15,23,42,0.06)' }}>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(34,141,193,0.1)' }}
                  >
                    <FontAwesomeIcon
                      icon={hero.visualIcon}
                      style={{ fontSize: 28, color: '#228DC1' }}
                    />
                  </div>
                </div>
                <div className="px-5 py-5 space-y-2.5">
                  {hero.visualItems.map(item => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 bg-[#f8fafc]"
                      style={{ border: '1px solid rgba(15,23,42,0.06)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(34,141,193,0.1)' }}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{ fontSize: 12, color: '#228DC1' }}
                        />
                      </div>
                      <span className="text-[#0a1628]/65 text-[13px] font-medium flex-1">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Challenges ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">{challenges.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] max-w-2xl">
              {challenges.intro}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {challenges.items.map((c, i) => (
              <div
                key={c.title}
                className="relative p-7 bg-white rounded-[18px] hover:shadow-md transition-all duration-200"
                style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 1px 4px rgba(15,23,42,0.04)' }}
              >
                <span className="absolute top-5 right-5 font-bold text-[#0a1628]/10 text-[11px] tracking-widest select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[#228DC1] mb-5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 18 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-sm leading-snug mb-2.5">
                  {c.title}
                </h3>
                <p className="text-[#0a1628]/55 text-[13.5px] font-normal leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What AWTG Supports ─── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">{supports.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] max-w-2xl">
              {supports.intro}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {supports.items.map(s => (
              <div
                key={s.title}
                className="bg-white rounded-[18px] p-8 hover:shadow-md transition-all duration-200"
                style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 1px 4px rgba(15,23,42,0.04)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[#228DC1] mb-6"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={s.icon} style={{ fontSize: 20 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-base leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-[#0a1628]/60 text-[14px] font-normal leading-relaxed mb-5">
                  {s.desc}
                </p>
                {s.bullets.length > 0 && (
                  <ul className="pt-5 border-t border-gray-100 space-y-2.5">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-[#228DC1] shrink-0 mt-2" />
                        <span className="text-[#0a1628]/55 text-[13px] leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Use Cases / Service Blocks ─── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">{useCases.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] max-w-2xl">
              {useCases.intro}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.items.map(u => (
              <div
                key={u.title}
                className="bg-white rounded-[18px] p-6 hover:shadow-md transition-all duration-200"
                style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 1px 4px rgba(15,23,42,0.04)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#228DC1] mb-4"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={u.icon} style={{ fontSize: 16 }} />
                </div>
                <h3 className="font-card-heading text-[#0a1628] text-sm mb-2 leading-snug">
                  {u.title}
                </h3>
                <p className="text-[#0a1628]/55 text-[13.5px] font-normal leading-relaxed">
                  {u.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outcomes ─── */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-white mb-4">{outcomes.heading}</h2>
            <p className="text-white/45 text-[16px] font-normal leading-[1.75]">{outcomes.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.items.map(o => (
              <div
                key={o.title}
                className="p-7 rounded-[18px] hover:bg-white/5 transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#228DC1] mb-5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.15)' }}
                >
                  <FontAwesomeIcon icon={o.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-white text-sm leading-snug mb-2">
                  {o.title}
                </h3>
                <p className="text-white/45 text-[13px] font-normal leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof (optional) ─── */}
      {proof && (
        <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="max-w-3xl border-l-2 border-[#228DC1] pl-8">
              <p className="text-[#0a1628]/80 text-lg font-normal leading-relaxed mb-5">
                "{proof.quote}"
              </p>
              {proof.author && (
                <p className="text-[#0a1628]/50 text-[13px] font-semibold uppercase tracking-wider">
                  {proof.author}
                  {proof.context && (
                    <span className="font-normal normal-case tracking-normal">
                      {' '}— {proof.context}
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={cta.title}
        subtitle={cta.subtitle}
        primaryLabel={cta.label ?? 'Talk to our experts'}
        primaryHref="/contact"
      />
    </>
  )
}
