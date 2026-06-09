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
      <section className="pt-32 pb-24 bg-[#0a1628] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
            <div>
              <span className="inline-block px-3.5 py-1.5 border border-white/15 bg-white/5 text-white/55 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-8">
                {hero.badge}
              </span>
              <h1 className="font-serif-display text-white mb-5">{hero.title}</h1>
              <p className="text-white/65 text-[18px] font-medium leading-[1.65] mb-3 max-w-xl">
                {hero.subtitle}
              </p>
              <p className="text-white/45 text-[15px] font-normal leading-[1.8] mb-10 max-w-lg">
                {hero.description}
              </p>
              <Link to={hero.ctaHref ?? '/contact'} className="btn btn-primary">
                {hero.ctaLabel ?? 'Talk to our experts'}
              </Link>
            </div>

            {/* capability panel */}
            <div className="hidden lg:block">
              <div
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="ml-2 text-white/30 text-[11px] font-medium tracking-[0.18em] uppercase">
                    AWTG Platform
                  </span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      style={{ boxShadow: '0 0 6px rgba(52,211,153,0.7)' }}
                    />
                    <span className="text-emerald-400/80 text-[10px] font-semibold tracking-wide uppercase">
                      Live
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center py-8 px-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(34,141,193,0.2)' }}
                  >
                    <FontAwesomeIcon
                      icon={hero.visualIcon}
                      style={{ fontSize: 28, color: '#228DC1' }}
                    />
                  </div>
                </div>
                <div className="px-5 pb-6 space-y-2.5">
                  {hero.visualItems.map(item => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl px-4 py-3"
                      style={{ background: 'rgba(255,255,255,0.045)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(34,141,193,0.18)' }}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{ fontSize: 12, color: '#60b8e0' }}
                        />
                      </div>
                      <span className="text-white/65 text-[13px] font-medium flex-1">
                        {item.label}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
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
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-heading text-[#0a1628] mb-4">{challenges.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75]">
              {challenges.intro}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.items.map((c, i) => (
              <div
                key={c.title}
                className="relative p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-md transition-all"
              >
                <span className="absolute top-5 right-5 font-bold text-[#0a1628]/10 text-[11px] tracking-widest select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="w-11 h-11 flex items-center justify-center text-[#228DC1] mb-5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 18 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2.5">
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
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">{supports.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] mt-4 lg:mt-0">
              {supports.intro}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {supports.items.map(s => (
              <div
                key={s.title}
                className="bg-white border border-gray-100 p-8 hover:border-[#228DC1]/25 hover:shadow-sm transition-all"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-[#228DC1] mb-6"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={s.icon} style={{ fontSize: 20 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[17px] leading-snug mb-3">
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
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">{useCases.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] mt-4 lg:mt-0">
              {useCases.intro}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {useCases.items.map(u => (
              <div key={u.title} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-[#228DC1] shrink-0"
                    style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                  >
                    <FontAwesomeIcon icon={u.icon} style={{ fontSize: 16 }} />
                  </div>
                  <div>
                    <h3 className="font-card-heading text-[#0a1628] text-[15px] mb-1.5 leading-snug">
                      {u.title}
                    </h3>
                    <p className="text-[#0a1628]/55 text-[13.5px] font-normal leading-relaxed">
                      {u.desc}
                    </p>
                  </div>
                </div>
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
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'rgba(255,255,255,0.09)' }}
          >
            {outcomes.items.map(o => (
              <div
                key={o.title}
                className="p-8 hover:bg-white/5 transition-colors"
                style={{ background: '#0a1628' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.15)' }}
                >
                  <FontAwesomeIcon icon={o.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-white text-[15px] leading-snug mb-2">
                  {o.title}
                </h3>
                <p className="text-white/40 text-[13px] font-normal leading-relaxed">{o.desc}</p>
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
              <p className="text-[#0a1628]/80 text-[19px] font-normal leading-relaxed mb-5">
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
