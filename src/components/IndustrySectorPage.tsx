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

/* Kore.ai-style pastel icon tile colours — cycling per card */
const PASTEL = [
  { bg: '#fff7ed', fg: '#d97706' },
  { bg: '#eff6ff', fg: '#2563eb' },
  { bg: '#f0fdf4', fg: '#16a34a' },
  { bg: '#fdf4ff', fg: '#9333ea' },
]
const ITEM_COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

export default function IndustrySectorPage({ data }: { data: SectorPageData }) {
  const { hero, challenges, supports, useCases, outcomes, proof, cta } = data
  const accent = hero.accentColor ?? '#228DC1'
  const [imgError, setImgError] = useState(false)

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — light gradient, pill badge, text left + right panel
      ══════════════════════════════════════════════════════ */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8fbfe 0%, #f0f7fb 50%, #fafcfe 100%)' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ opacity: 0.03, backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 72% 38%, ${accent}12 0%, transparent 58%)` }} />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-[1fr_460px] gap-14 items-center">
            <div>
              {/* Kore.ai-style pill badge */}
              {hero.badge && (
                <span
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-6"
                  style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}22` }}
                >
                  {hero.badge}
                </span>
              )}
              <h1 className="font-serif-display text-[#0a1628] mb-5 leading-[1.1]">{hero.title}</h1>
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

            {/* Right: image or visual panel */}
            <div className="hidden lg:block">
              {hero.heroImage && !imgError ? (
                <div className="relative rounded-[20px] overflow-hidden"
                  style={{ boxShadow: '0 20px 60px rgba(15,23,42,0.13), 0 4px 16px rgba(15,23,42,0.07)', border: '1px solid rgba(15,23,42,0.07)' }}>
                  <img src={hero.heroImage} alt={hero.title} onError={() => setImgError(true)}
                    className="w-full object-cover" style={{ height: '420px', display: 'block' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                    style={{ background: `linear-gradient(to top, ${accent}25 0%, transparent 100%)` }} />
                </div>
              ) : hero.heroVisual ?? (
                <div className="rounded-[20px] overflow-hidden bg-white"
                  style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 16px 56px rgba(15,23,42,0.1)' }}>
                  <div className="flex items-center gap-3 px-6 py-5 border-b"
                    style={{ background: `linear-gradient(135deg, ${accent}0d 0%, ${accent}06 100%)`, borderColor: `${accent}18` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${accent}18`, border: `1px solid ${accent}28` }}>
                      <FontAwesomeIcon icon={hero.visualIcon} style={{ fontSize: 18, color: accent }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>{hero.badge ?? 'Capabilities'}</p>
                      <p className="text-[12px] text-[#0a1628]/40 font-medium mt-0.5">AWTG platform</p>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    {hero.visualItems.map((item, i) => {
                      const c = ITEM_COLORS[i % 4]
                      return (
                        <div key={item.label} className="flex items-center gap-3 rounded-xl px-4 py-3"
                          style={{ background: 'rgba(15,23,42,0.02)', border: '1px solid rgba(15,23,42,0.06)' }}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: `${c}12`, border: `1px solid ${c}22` }}>
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

      {/* ══════════════════════════════════════════════════════
          CHALLENGES — Kore.ai style: pastel icon tiles, clean cards
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
              style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}>
              Challenges
            </span>
            <h2 className="font-heading text-[#0a1628] mb-4">{challenges.heading}</h2>
            <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{challenges.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {challenges.items.map((c, i) => {
              const tile = PASTEL[i % 4]
              return (
                <div key={c.title} className="bg-white p-7 rounded-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 2px 10px rgba(15,23,42,0.05)' }}>
                  {/* Kore.ai-style pastel square icon tile */}
                  <div className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5"
                    style={{ background: tile.bg }}>
                    <FontAwesomeIcon icon={c.icon} style={{ fontSize: 20, color: tile.fg }} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2" style={{ color: tile.fg }}>
                    Challenge {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-semibold text-[#0a1628] text-[14px] leading-snug mb-3">{c.title}</h3>
                  <p className="text-[#0a1628]/52 text-[13px] leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SUPPORTS — Kore.ai use-case rows: text left + panel right
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-20 max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
              style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}>
              What we deliver
            </span>
            <h2 className="font-heading text-[#0a1628] mb-4">{supports.heading}</h2>
            <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{supports.intro}</p>
          </div>

          <div className="space-y-24">
            {supports.items.map((s, i) => {
              const isReversed = i % 2 === 1
              return (
                <div key={s.title} className="grid lg:grid-cols-2 gap-16 items-center">

                  {/* ── Text side (Kore.ai use-case left) ── */}
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    {/* Category pill */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-6"
                      style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
                      {s.title}
                    </span>
                    <h3 className="font-heading text-[#0a1628] text-[26px] leading-snug mb-5">{s.title}</h3>
                    <p className="text-[#0a1628]/58 text-[15px] leading-[1.85] mb-8">{s.desc}</p>

                    {/* Kore.ai-style numbered feature rows */}
                    {s.bullets.length > 0 && (
                      <div className="space-y-3 mb-8">
                        {s.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold"
                              style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}22` }}>
                              {String(idx + 1).padStart(2, '0')}
                            </div>
                            <span className="text-[#0a1628]/60 text-[14px] leading-relaxed pt-0.5">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* ── Visual panel side ── */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="rounded-[20px] overflow-hidden"
                      style={{ border: '1px solid rgba(15,23,42,0.09)', boxShadow: '0 16px 48px rgba(15,23,42,0.09), 0 2px 8px rgba(15,23,42,0.05)' }}>

                      {/* Accent header */}
                      <div className="flex items-center gap-4 px-6 py-5"
                        style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)` }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.25)' }}>
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

                      {/* Central icon with rings */}
                      <div className="flex items-center justify-center py-8"
                        style={{ background: `linear-gradient(180deg, ${accent}06 0%, white 100%)` }}>
                        <div className="relative flex items-center justify-center">
                          <div className="absolute rounded-full" style={{ width: 88, height: 88, border: `1.5px dashed ${accent}28` }} />
                          <div className="absolute rounded-full" style={{ width: 114, height: 114, border: `1px dashed ${accent}16` }} />
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                            style={{ background: `${accent}12`, border: `2px solid ${accent}26`, boxShadow: `0 8px 24px ${accent}20` }}>
                            <FontAwesomeIcon icon={s.icon} style={{ fontSize: 28, color: accent }} />
                          </div>
                        </div>
                      </div>

                      {/* 2×2 tag grid */}
                      <div className="px-5 pb-5 grid grid-cols-2 gap-2">
                        {s.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-2 px-3 py-2.5 rounded-[10px]"
                            style={{ background: idx % 2 === 0 ? `${accent}07` : 'rgba(15,23,42,0.025)', border: `1px solid ${idx % 2 === 0 ? `${accent}16` : 'rgba(15,23,42,0.07)'}` }}>
                            <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-[5px]" style={{ background: accent }} />
                            <span className="text-[#0a1628]/58 text-[12px] leading-tight">{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="h-1" style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accent}25 100%)` }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          USE CASES — Accenture-inspired light: accent bar + label + heading
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 border-t border-gray-100" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
              style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}>
              Use cases
            </span>
            <h2 className="font-heading text-[#0a1628] mb-4">{useCases.heading}</h2>
            <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{useCases.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.items.map((u, i) => {
              const tile = PASTEL[i % 4]
              return (
                <div key={u.title} className="bg-white rounded-[16px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 2px 10px rgba(15,23,42,0.04)', borderTop: `3px solid ${accent}` }}>
                  <div className="p-7">
                    {/* Pastel icon tile */}
                    <div className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5" style={{ background: tile.bg }}>
                      <FontAwesomeIcon icon={u.icon} style={{ fontSize: 20, color: tile.fg }} />
                    </div>
                    {/* Accenture-style small caps label */}
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2.5" style={{ color: accent }}>
                      Use case
                    </p>
                    <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-3">{u.title}</h3>
                    <p className="text-[#0a1628]/52 text-[13.5px] leading-relaxed">{u.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUTCOMES — Kore.ai "Why" layout: heading left + 2×2 grid right
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

            {/* Left: large heading — Kore.ai "Why enterprises choose" */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-5"
                style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}>
                Outcomes
              </span>
              <h2 className="font-heading text-[#0a1628] mb-5 leading-tight">{outcomes.heading}</h2>
              <p className="text-[#0a1628]/55 text-[15px] leading-[1.75] mb-8">{outcomes.intro}</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: '#059669' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#059669' }}>AWTG outcomes</span>
              </div>
            </div>

            {/* Right: 2×2 card grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {outcomes.items.map((o, i) => {
                const tile = PASTEL[i % 4]
                return (
                  <div key={o.title} className="bg-white p-7 rounded-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ border: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 2px 10px rgba(15,23,42,0.04)' }}>
                    <div className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5" style={{ background: tile.bg }}>
                      <FontAwesomeIcon icon={o.icon} style={{ fontSize: 20, color: tile.fg }} />
                    </div>
                    <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-3">{o.title}</h3>
                    <p className="text-[#0a1628]/52 text-[13px] leading-relaxed">{o.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof quote (optional) ── */}
      {proof && (
        <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="max-w-3xl border-l-4 pl-8" style={{ borderColor: accent }}>
              <p className="text-[#0a1628]/75 text-[18px] font-normal leading-relaxed mb-5">"{proof.quote}"</p>
              {proof.author && (
                <p className="text-[#0a1628]/40 text-[13px] font-semibold uppercase tracking-wider">
                  {proof.author}
                  {proof.context && <span className="font-normal normal-case tracking-normal text-[#0a1628]/35"> — {proof.context}</span>}
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
