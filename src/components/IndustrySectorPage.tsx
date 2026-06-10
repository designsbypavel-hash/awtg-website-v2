import { useState, type ReactNode } from 'react'
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
  heroImage?: string
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
  const [imgError, setImgError] = useState(false)

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — light gradient, text left + panel right
      ═══════════════════════════════════════════ */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #f8fbfe 0%, #f0f7fb 50%, #fafcfe 100%)` }}
      >
        {/* subtle dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.035,
            backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* accent glow orb */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 72% 38%, ${accent}14 0%, transparent 58%)` }}
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center">
            {/* Left: copy */}
            <div>
              {hero.subtitle && (
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
                  style={{ color: accent }}
                >
                  {hero.subtitle}
                </p>
              )}
              <h1 className="font-serif-display text-[#0a1628] mb-6 leading-[1.1]">
                {hero.title}
              </h1>
              <p className="text-[#0a1628]/55 text-[16px] font-normal leading-[1.85] mb-10 max-w-lg">
                {hero.description}
              </p>
              <Link
                to={hero.ctaHref ?? '/contact'}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: accent, boxShadow: `0 4px 18px ${accent}35` }}
              >
                {hero.ctaLabel ?? 'Talk to our experts'}
              </Link>
            </div>

            {/* Right: image (with fallback) or visual panel */}
            <div className="hidden lg:block">
              {hero.heroImage && !imgError ? (
                <div
                  className="relative rounded-[20px] overflow-hidden"
                  style={{
                    boxShadow: '0 20px 60px rgba(15,23,42,0.14), 0 4px 16px rgba(15,23,42,0.08)',
                    border: '1px solid rgba(15,23,42,0.07)',
                  }}
                >
                  <img
                    src={hero.heroImage}
                    alt={hero.title}
                    onError={() => setImgError(true)}
                    className="w-full object-cover"
                    style={{ height: '420px', display: 'block' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                    style={{ background: `linear-gradient(to top, ${accent}28 0%, transparent 100%)` }}
                  />
                </div>
              ) : hero.heroVisual ?? (
                <div
                  className="rounded-[20px] overflow-hidden bg-white"
                  style={{
                    border: '1px solid rgba(15,23,42,0.08)',
                    boxShadow: '0 16px 56px rgba(15,23,42,0.1), 0 2px 8px rgba(15,23,42,0.05)',
                  }}
                >
                  <div
                    className="flex items-center gap-3 px-6 py-5 border-b"
                    style={{
                      background: `linear-gradient(135deg, ${accent}0d 0%, ${accent}06 100%)`,
                      borderColor: `${accent}18`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${accent}18`, border: `1px solid ${accent}28` }}
                    >
                      <FontAwesomeIcon icon={hero.visualIcon} style={{ fontSize: 18, color: accent }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
                        {hero.badge ?? 'Capabilities'}
                      </p>
                      <p className="text-[12px] text-[#0a1628]/40 font-medium mt-0.5">AWTG platform</p>
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
                          <span className="text-[#0a1628]/65 text-[13px] font-medium flex-1">{item.label}</span>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.55 }} />
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

      {/* ═══════════════════════════════════════════
          CHALLENGES — off-white bg, 4-col cards
      ═══════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: CHALLENGE }}>
              Challenges
            </p>
            <h2 className="font-heading text-[#0a1628] mb-4">{challenges.heading}</h2>
            <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{challenges.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {challenges.items.map((c, i) => (
              <div
                key={c.title}
                className="relative bg-white p-7 rounded-[18px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(15,23,42,0.07)',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
                  borderTop: `3px solid ${CHALLENGE}`,
                }}
              >
                <span
                  className="absolute -top-1 right-3 font-black select-none leading-none pointer-events-none"
                  style={{ fontSize: '64px', color: `${CHALLENGE}09`, letterSpacing: '-0.05em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${CHALLENGE}10`, border: `1px solid ${CHALLENGE}25`, color: CHALLENGE }}
                >
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 20 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[14px] leading-snug mb-3">{c.title}</h3>
                <p className="text-[#0a1628]/52 text-[13px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SUPPORTS — white bg, alternating rows
      ═══════════════════════════════════════════ */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-20 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: SUPPORT }}>
              What we deliver
            </p>
            <h2 className="font-heading text-[#0a1628] mb-4">{supports.heading}</h2>
            <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{supports.intro}</p>
          </div>

          <div className="space-y-24">
            {supports.items.map((s, i) => {
              const isReversed = i % 2 === 1
              return (
                <div key={s.title} className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Text side */}
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                      style={{ backgroundColor: `${SUPPORT}10`, border: `1.5px solid ${SUPPORT}25`, color: SUPPORT }}
                    >
                      <FontAwesomeIcon icon={s.icon} style={{ fontSize: 24 }} />
                    </div>
                    <h3 className="font-heading text-[#0a1628] text-[26px] leading-snug mb-5">{s.title}</h3>
                    <p className="text-[#0a1628]/58 text-[15px] leading-[1.85] mb-8">{s.desc}</p>
                    {s.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {s.bullets.map(b => (
                          <li key={b} className="flex items-start gap-3">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: `${SUPPORT}12`, border: `1px solid ${SUPPORT}28` }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: SUPPORT }} />
                            </div>
                            <span className="text-[#0a1628]/58 text-[14px] leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Visual panel side — feature preview card */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div
                      className="rounded-[20px] overflow-hidden"
                      style={{
                        border: '1px solid rgba(15,23,42,0.09)',
                        boxShadow: '0 16px 48px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.05)',
                      }}
                    >
                      {/* Accent header */}
                      <div
                        className="flex items-center gap-4 px-6 py-5"
                        style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)` }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.25)' }}
                        >
                          <FontAwesomeIcon icon={s.icon} style={{ fontSize: 18, color: 'white' }} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-[14px] leading-tight truncate">{s.title}</p>
                          <p className="text-white/60 text-[11px] mt-0.5 font-medium uppercase tracking-[0.12em]">AWTG capability</p>
                        </div>
                        <div className="ml-auto shrink-0 flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-white/30" />
                          <div className="w-2 h-2 rounded-full bg-white/30" />
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                      </div>

                      {/* Bullet feature rows */}
                      <div className="bg-white px-4 py-4 space-y-2">
                        {s.bullets.map((b, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 px-4 py-3.5 rounded-[12px]"
                            style={{
                              background: idx % 2 === 0 ? `${accent}06` : 'rgba(15,23,42,0.018)',
                              border: '1px solid rgba(15,23,42,0.055)',
                            }}
                          >
                            <div
                              className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                              style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                            </div>
                            <span className="text-[#0a1628]/62 text-[13px] leading-relaxed">{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer accent bar */}
                      <div
                        className="h-1"
                        style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accent}35 100%)` }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          USE CASES — off-white bg, 3-col card grid
      ═══════════════════════════════════════════ */}
      <section className="py-24 border-t border-gray-100" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: USECASE }}>
              Use cases
            </p>
            <h2 className="font-heading text-[#0a1628] mb-4">{useCases.heading}</h2>
            <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{useCases.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.items.map(u => (
              <div
                key={u.title}
                className="bg-white p-7 rounded-[18px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(15,23,42,0.07)',
                  boxShadow: '0 2px 10px rgba(15,23,42,0.04)',
                  borderLeft: `3px solid ${USECASE}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${USECASE}0e`, border: `1px solid ${USECASE}22`, color: USECASE }}
                >
                  <FontAwesomeIcon icon={u.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[14px] mb-3 leading-snug">{u.title}</h3>
                <p className="text-[#0a1628]/52 text-[13.5px] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUTCOMES — white bg, 4-col cards
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: OUTCOME }}>
                Outcomes
              </p>
              <h2 className="font-heading text-[#0a1628] mb-4">{outcomes.heading}</h2>
              <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{outcomes.intro}</p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: OUTCOME }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: OUTCOME }}>
                AWTG outcomes
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.items.map(o => (
              <div
                key={o.title}
                className="p-7 rounded-[18px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(145deg, #f2faf6 0%, #eaf7f1 100%)`,
                  border: `1px solid ${OUTCOME}18`,
                  borderTop: `3px solid ${OUTCOME}`,
                  boxShadow: `0 2px 10px ${OUTCOME}0a`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${OUTCOME}12`, border: `1px solid ${OUTCOME}28`, color: OUTCOME }}
                >
                  <FontAwesomeIcon icon={o.icon} style={{ fontSize: 18 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[14px] leading-snug mb-2.5">{o.title}</h3>
                <p className="text-[#0a1628]/55 text-[13px] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof quote (optional) ─── */}
      {proof && (
        <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div
              className="max-w-3xl border-l-4 pl-8"
              style={{ borderColor: accent }}
            >
              <p className="text-[#0a1628]/75 text-[18px] font-normal leading-relaxed mb-5">"{proof.quote}"</p>
              {proof.author && (
                <p className="text-[#0a1628]/40 text-[13px] font-semibold uppercase tracking-wider">
                  {proof.author}
                  {proof.context && (
                    <span className="font-normal normal-case tracking-normal text-[#0a1628]/35"> — {proof.context}</span>
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
