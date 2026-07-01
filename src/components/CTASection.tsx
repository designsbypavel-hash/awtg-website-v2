import { Link } from 'react-router-dom'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  primaryOnClick?: () => void
  image?: string
  imagePosition?: string
  eyebrow?: string
}

const DEFAULT_IMAGE = '/images/insights/connectivity.jpg'

export default function CTASection({
  title = 'Ready to Transform Your Network?',
  subtitle = 'Talk to our experts about how AWTG can design and deliver a solution tailored to your needs.',
  primaryLabel = 'Get in Touch',
  primaryHref = '/contact',
  primaryOnClick,
  image,
  imagePosition = 'center',
  eyebrow,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="rounded-2xl overflow-hidden bg-[#0a1628] grid lg:grid-cols-[1fr_420px]">

          {/* Left, dark panel */}
          <div className="p-12 lg:p-16 flex flex-col justify-between" style={{ minHeight: 400 }}>
            <div>
              {eyebrow && (
                <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#228DC1] mb-6">
                  {eyebrow}
                </p>
              )}
              <h2
                className="font-heading text-white leading-[1.08] mb-6"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', maxWidth: 480 }}
              >
                {title}
              </h2>
              <p className="text-white/50 text-[15px] leading-[1.85]" style={{ maxWidth: 420 }}>
                {subtitle}
              </p>
            </div>

            <div className="mt-12">
              {primaryOnClick ? (
                <button
                  type="button"
                  onClick={primaryOnClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#228DC1] text-white text-[14px] font-semibold transition-colors hover:bg-[#1a6e99]"
                >
                  {primaryLabel}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) : (
                <Link
                  to={primaryHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#228DC1] text-white text-[14px] font-semibold transition-colors hover:bg-[#1a6e99]"
                >
                  {primaryLabel}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* Right, white inset panel */}
          <div className="p-5 lg:p-6">
            <div className="rounded-xl overflow-hidden h-full bg-white relative flex flex-col justify-center" style={{ minHeight: 320 }}>
                <img
                src={image ?? DEFAULT_IMAGE}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: imagePosition }}
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
