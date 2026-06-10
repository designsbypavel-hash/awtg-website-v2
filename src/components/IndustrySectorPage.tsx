import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import CTASection from '@/components/CTASection'

export interface SectorHero {
  badge?: string
  title: string
  subtitle?: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  accentColor?: string
  visualIcon: IconDefinition
  visualItems: Array<{ icon: IconDefinition; label: string }>
  heroVisual?: ReactNode
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

const CHALLENGE = '#d97706'
const SUPPORT   = '#228DC1'
const USECASE   = '#7c3aed'
const OUTCOME   = '#059669'
const ITEM_COLORS = [SUPPORT, USECASE, OUTCOME, CHALLENGE]

export default function IndustrySectorPage({ data }: { data: SectorPageData }) {
  const { hero, challenges, supports, useCases, outcomes, proof, cta } = data
  const accent = hero.accentColor ?? '#228DC1'

  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f0f7fb 0%, #e8f4fa 50%, #f5f8fc 100%)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 72% 38%, ${accent}18 0%, transparent 55%)` }}
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          {hero.badge && (
            <div
              className="inline-flex items-center mb-6 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] border"
              style={{ background: `${accent}12`, color: accent, borderColor: `${accent}25` }}
            >
              {hero.badge}
            </div>
          )}

          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
            <div>
              <h1 className="font-serif-display text-[#0a1628] mb-5">{hero.title}</h1>
              <p className="text-[#0a1628]/55 text-[16px] font-normal leading-[1.8] mb-10 max-w-lg">
                {hero.description}
              </p>
              <Link to={hero.ctaHref ?? '/contact'} className="btn btn-primary">
                {hero.ctaLabel ?? 'Talk to our experts'}
              </Link>
            </div>

            {/* ─── Hero right visual ─── */}
            <div className="hidden lg:block">
              {hero.heroVisual ?? (
                <div
                  className="rounded-[20px] overflow-hidden bg-white"
                  style={{
                    border: '1px solid rgba(15,23,42,0.08)',
                    boxShadow: '0 12px 48px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06)',
                  }}
                >
                  <div
                    className="flex items-center gap-3 px-6 py-5 border-b"
                    style={{
                      background: `linear-gradient(135deg, ${accent}0e 0%, ${accent}06 100%)`,
                      borderColor: `${accent}18`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${accent}18`, border: `1px solid ${accent}28` }}
                    >
                      <FontAwesomeIcon icon={hero.visualIcon} style={{ fontSize: 22, color: accent }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
                        {hero.badge ?? 'Capabilities'}
                      </p>
                      <p className="text-[12px] text-[#0a1628]/45 font-medium mt-0.5">AWTG platform</p>
                    </div>
                  </div>

                  <div className="px-5 py-4 space-y-2">
                    {hero.visualItems.map((item, i) => {
                      const c = ITEM_COLORS[i % 4]
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-xl px-4 py-3"
                          style={{ background: 'rgba(15,23,42,0.02)', border: '1px solid rgba(15,23,42,0.06)' }}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: `${c}12`, border: `1px solid ${c}22` }}
                          >
                            <FontAwesomeIcon icon={item.icon} style={{ fontSize: 12, color: c }} />
                          </div>
                          <span className="text-[#0a1628]/70 text-[13px] font-medium flex-1">{item.label}</span>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Challenges ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">{challenges.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] max-w-2xl">{challenges.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {challenges.items.map((c, i) => (
              <div
                key={c.title}
                className="relative p-7 bg-white rounded-[18px] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 2px 8px rgba(15,23,42,0.05)',
                  borderTop: `3px solid ${CHALLENGE}`,
                }}
              >
                <span className="absolute top-5 right-5 font-bold text-[#0a1628]/10 text-[11px] tracking-widest select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${CHALLENGE}12`, border: `1px solid ${CHALLENGE}25`, color: CHALLENGE }}
                >
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 18 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-sm leading-snug mb-2.5">{c.title}</h3>
                <p className="text-[#0a1628]/55 text-[13.5px] font-normal leading-relaxed">{c.desc}</p>
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
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] max-w-2xl">{supports.intro}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {supports.items.map(s => (
              <div
                key={s.title}
                className="bg-white rounded-[18px] p-8 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 2px 8px rgba(15,23,42,0.05)',
                  borderTop: `3px solid ${SUPPORT}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${SUPPORT}10`, border: `1px solid ${SUPPORT}22`, color: SUPPORT }}
                >
                  <FontAwesomeIcon icon={s.icon} style={{ fontSize: 20 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-base leading-snug mb-3">{s.title}</h3>
                <p className="text-[#0a1628]/60 text-[14px] font-normal leading-relaxed mb-5">{s.desc}</p>
                {s.bullets.length > 0 && (
                  <ul className="pt-5 border-t border-gray-100 space-y-2.5">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: SUPPORT }} />
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

      {/* ─── Use Cases ─── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">{useCases.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] max-w-2xl">{useCases.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.items.map(u => (
              <div
                key={u.title}
                className="bg-white rounded-[18px] p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: '1px solid rgba(15,23,42,0.08)',
                  boxShadow: '0 2px 8px rgba(15,23,42,0.05)',
                  borderLeft: `3px solid ${USECASE}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${USECASE}10`, border: `1px solid ${USECASE}22`, color: USECASE }}
                >
                  <FontAwesomeIcon icon={u.icon} style={{ fontSize: 16 }} />
                </div>
                <h3 className="font-card-heading text-[#0a1628] text-sm mb-2 leading-snug">{u.title}</h3>
                <p className="text-[#0a1628]/55 text-[13.5px] font-normal leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outcomes ─── light green instead of dark navy */}
      <section className="py-24 border-t border-gray-100" style={{ background: '#f0f9f5' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">{outcomes.heading}</h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75]">{outcomes.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.items.map(o => (
              <div
                key={o.title}
                className="p-7 bg-white rounded-[18px] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: `1px solid ${OUTCOME}18`,
                  boxShadow: `0 2px 8px ${OUTCOME}0a`,
                  borderTop: `3px solid ${OUTCOME}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${OUTCOME}12`, border: `1px solid ${OUTCOME}25`, color: OUTCOME }}
                >
                  <FontAwesomeIcon icon={o.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-sm leading-snug mb-2">{o.title}</h3>
                <p className="text-[#0a1628]/60 text-[13px] font-normal leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof (optional) ─── */}
      {proof && (
        <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="max-w-3xl border-l-4 border-[#228DC1] pl-8">
              <p className="text-[#0a1628]/80 text-lg font-normal leading-relaxed mb-5">"{proof.quote}"</p>
              {proof.author && (
                <p className="text-[#0a1628]/50 text-[13px] font-semibold uppercase tracking-wider">
                  {proof.author}
                  {proof.context && (
                    <span className="font-normal normal-case tracking-normal"> — {proof.context}</span>
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
