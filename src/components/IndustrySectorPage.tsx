import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import CTASection from '@/components/CTASection'
import IndustryIconVisual from '@/components/IndustryIconVisual'
import IndustryCard from '@/components/IndustryCard'
import IndustrySectionHeader from '@/components/IndustrySectionHeader'

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
export interface SectorSupport   { icon: IconDefinition; title: string; desc: string; bullets: string[] }
export interface SectorUseCase   { icon: IconDefinition; title: string; desc: string }
export interface SectorOutcome   { icon: IconDefinition; title: string; desc: string }
export interface SectorPageData {
  hero: SectorHero
  challenges: { heading: string; intro: string; items: SectorChallenge[] }
  supports:   { heading: string; intro: string; items: SectorSupport[] }
  useCases:   { heading: string; intro: string; items: SectorUseCase[] }
  outcomes:   { heading: string; intro: string; items: SectorOutcome[] }
  proof?: { quote: string; author?: string; context?: string }
  cta: { title: string; subtitle: string; label?: string }
}

const ITEM_COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

export default function IndustrySectorPage({ data }: { data: SectorPageData }) {
  const { hero, challenges, supports, useCases, outcomes, proof, cta } = data
  const accent = hero.accentColor ?? '#228DC1'
  const [imgError, setImgError] = useState(false)

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8fbfe 0%, #f0f7fb 50%, #fafcfe 100%)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.03,
            backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 72% 38%, ${accent}12 0%, transparent 58%)` }}
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-[1fr_460px] gap-14 items-center">

            {/* Left: text */}
            <div>
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

            {/* Right: hero image → heroVisual → capability list */}
            <div className="hidden lg:block">
              {hero.heroImage && !imgError ? (
                <div
                  className="relative rounded-[20px] overflow-hidden"
                  style={{
                    boxShadow: '0 20px 60px rgba(15,23,42,0.13), 0 4px 16px rgba(15,23,42,0.07)',
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
                    style={{ background: `linear-gradient(to top, ${accent}25 0%, transparent 100%)` }}
                  />
                </div>
              ) : hero.heroVisual ?? (
                <div
                  className="rounded-[20px] overflow-hidden bg-white"
                  style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 16px 56px rgba(15,23,42,0.1)' }}
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

      {/* ══════════════════════════════════════════════════════
          CHALLENGES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <IndustrySectionHeader
            heading={challenges.heading}
            intro={challenges.intro}
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {challenges.items.map((c, i) => (
              <IndustryCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SUPPORTS — alternating text + icon visual
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <IndustrySectionHeader
            heading={supports.heading}
            intro={supports.intro}
            className="mb-20"
          />
          <div className="space-y-24">
            {supports.items.map((s, i) => {
              const isReversed = i % 2 === 1
              return (
                <div key={s.title} className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <h3 className="font-heading text-[#0a1628] text-[26px] leading-snug mb-5">{s.title}</h3>
                    <p className="text-[#0a1628]/58 text-[15px] leading-[1.85] mb-8">{s.desc}</p>
                    {s.bullets.length > 0 && (
                      <div className="space-y-3">
                        {s.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div
                              className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold"
                              style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}22` }}
                            >
                              {String(idx + 1).padStart(2, '0')}
                            </div>
                            <span className="text-[#0a1628]/60 text-[14px] leading-relaxed pt-0.5">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <IndustryIconVisual icon={s.icon} accent={accent} chips={s.bullets} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          USE CASES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 border-t border-gray-100" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <IndustrySectionHeader
            heading={useCases.heading}
            intro={useCases.intro}
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.items.map((u, i) => (
              <IndustryCard
                key={u.title}
                icon={u.icon}
                title={u.title}
                desc={u.desc}
                index={i}
                accentTop={accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUTCOMES — asymmetric: sticky heading left + 2×2 grid right
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-heading text-[#0a1628] mb-5 leading-tight">{outcomes.heading}</h2>
              <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{outcomes.intro}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {outcomes.items.map((o, i) => (
                <IndustryCard key={o.title} icon={o.icon} title={o.title} desc={o.desc} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional proof quote */}
      {proof && (
        <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="max-w-3xl border-l-4 pl-8" style={{ borderColor: accent }}>
              <p className="text-[#0a1628]/75 text-[18px] font-normal leading-relaxed mb-5">
                "{proof.quote}"
              </p>
              {proof.author && (
                <p className="text-[#0a1628]/40 text-[13px] font-semibold uppercase tracking-wider">
                  {proof.author}
                  {proof.context && (
                    <span className="font-normal normal-case tracking-normal text-[#0a1628]/35">
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
