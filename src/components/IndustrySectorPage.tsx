import { type ReactNode } from 'react'
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
export interface SectorSupport   { icon: IconDefinition; title: string; desc: string; bullets: string[]; image?: string }
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

export default function IndustrySectorPage({ data }: { data: SectorPageData }) {
  const { hero, challenges, supports, useCases, outcomes, proof, cta } = data
  const accent = hero.accentColor ?? '#228DC1'

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — full-bleed image with dark overlay
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 640 }}>
        {/* Background photo */}
        {hero.heroImage && (
          <img
            src={hero.heroImage}
            alt={hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Gradient overlay — dark left for text, transparent right for photo */}
        <div
          className="absolute inset-0"
          style={{
            background: hero.heroImage
              ? 'linear-gradient(to right, rgba(8,18,36,0.88) 0%, rgba(8,18,36,0.72) 26%, rgba(8,18,36,0.28) 48%, rgba(8,18,36,0.06) 62%, transparent 75%)'
              : `linear-gradient(135deg, #f0f7fb 0%, ${accent}10 100%)`,
          }}
        />

        {/* Text content */}
        <div
          className="relative max-w-7xl mx-auto px-8 lg:px-12 flex items-end"
          style={{ minHeight: 640, paddingTop: 128, paddingBottom: 80 }}
        >
          <div style={{ maxWidth: 660 }}>
            <h1
              className="font-serif-display text-white leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(34px, 4.2vw, 56px)' }}
            >
              {hero.title}
            </h1>

            <p
              className="mb-10"
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, lineHeight: 1.82, maxWidth: 540 }}
            >
              {hero.description}
            </p>

            <Link
              to={hero.ctaHref ?? '/contact'}
              className="inline-flex items-center gap-2 rounded-xl font-semibold text-[14px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              style={{
                background: accent,
                boxShadow: `0 6px 24px ${accent}55`,
                padding: '14px 32px',
              }}
            >
              {hero.ctaLabel ?? 'Talk to our experts'}
            </Link>
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
          SUPPORTS — "What AWTG delivers for ___"
          Full-width alternating photo + text panels
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100 overflow-hidden">
        {/* Section heading — constrained width */}
        <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-20 pb-14">
          <IndustrySectionHeader
            heading={supports.heading}
            intro={supports.intro}
          />
        </div>

        {/* Edge-to-edge alternating panels */}
        {supports.items.map((s, i) => {
          const isReversed = i % 2 === 1
          return (
            <div key={s.title} className="grid lg:grid-cols-2" style={{ minHeight: 500 }}>

              {/* Text panel */}
              <div
                className={`flex flex-col justify-center bg-white ${isReversed ? 'lg:order-2' : ''}`}
                style={{ padding: '64px clamp(32px, 5vw, 80px)' }}
              >
                <div style={{ maxWidth: 520 }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div style={{ width: 3, height: 32, background: accent, borderRadius: 2, flexShrink: 0 }} />
                    <FontAwesomeIcon icon={s.icon} style={{ fontSize: 19, color: accent }} />
                  </div>

                  <h3
                    className="font-heading text-[#0a1628] leading-snug mb-4"
                    style={{ fontSize: 'clamp(20px, 2vw, 27px)' }}
                  >
                    {s.title}
                  </h3>

                  <p style={{ color: 'rgba(10,22,40,0.55)', fontSize: 15, lineHeight: 1.88, marginBottom: 32 }}>
                    {s.desc}
                  </p>

                  {s.bullets.length > 0 && (
                    <div className="space-y-3">
                      {s.bullets.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span
                            className="shrink-0 rounded-full"
                            style={{ width: 5, height: 5, background: accent, marginTop: 8, flexShrink: 0 }}
                          />
                          <span style={{ color: 'rgba(10,22,40,0.6)', fontSize: 14, lineHeight: 1.72 }}>
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Photo / visual panel */}
              <div
                className={`relative overflow-hidden ${isReversed ? 'lg:order-1' : ''}`}
                style={{
                  minHeight: 420,
                  background: s.image
                    ? undefined
                    : `linear-gradient(135deg, ${accent}10 0%, ${accent}05 100%)`,
                }}
              >
                {s.image ? (
                  <>
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Subtle inner shadow on the join edge for depth */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: isReversed
                          ? 'linear-gradient(to right, rgba(10,22,40,0.12) 0%, transparent 30%)'
                          : 'linear-gradient(to left, rgba(10,22,40,0.12) 0%, transparent 30%)',
                      }}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <IndustryIconVisual icon={s.icon} accent={accent} chips={s.bullets} />
                  </div>
                )}
              </div>

            </div>
          )
        })}
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
      <section className="relative overflow-hidden border-t border-gray-100 bg-white py-24">
        <div
          className="absolute inset-x-0 top-0 h-[58%] pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #07162b 0%, #0a2038 54%, #0b2e47 100%)' }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[58%] pointer-events-none opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="pb-2">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12" style={{ background: accent }} />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
                  Measurable outcomes
                </p>
              </div>
              <h2 className="font-heading mb-6 max-w-xl leading-tight text-white">
                {outcomes.heading}
              </h2>
              <p className="max-w-xl text-[15px] leading-[1.82] text-white/62">
                {outcomes.intro}
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur">
              <div className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-4">
                {outcomes.items.map((o, i) => (
                  <div key={o.title} className="bg-[#0d1c31] p-5">
                    <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                      0{i + 1}
                    </p>
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm"
                      style={{ background: `${accent}24` }}
                    >
                      <FontAwesomeIcon icon={o.icon} className="h-4 w-4" style={{ color: accent }} />
                    </div>
                    <p className="text-[13px] font-semibold leading-[1.3] text-white">{o.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.items.map((o, i) => (
              <article
                key={o.title}
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-7 shadow-[0_10px_34px_rgba(10,22,40,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(10,22,40,0.13)]"
              >
                <div className="absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-1.5" style={{ background: accent }} />
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                    style={{ background: `${accent}12` }}
                  >
                    <FontAwesomeIcon icon={o.icon} className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <span className="text-[38px] font-black leading-none text-[#0a1628]/[0.06]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mb-4 text-[17px] font-semibold leading-[1.28] text-[#0a1628]">
                  {o.title}
                </h3>
                <p className="text-[14px] font-normal leading-[1.78] text-[#0a1628]/58">
                  {o.desc}
                </p>
                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-gray-100" />
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0a1628]/36">
                      Outcome layer
                    </span>
                  </div>
                </div>
              </article>
            ))}
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
