import { Link } from 'react-router-dom'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  primaryOnClick?: () => void
  image?: string
  eyebrow?: string
}

const defaultStats = [
  { label: 'Network uptime SLA', value: '99.99%', color: '#228DC1' },
  { label: 'Projects delivered', value: '500+', color: '#0ea472' },
  { label: 'Countries served', value: '40+', color: '#7c3aed' },
  { label: 'Years of expertise', value: '20+', color: '#f59e0b' },
]

export default function CTASection({
  title = 'Ready to Transform Your Network?',
  subtitle = 'Talk to our experts about how AWTG can design and deliver a solution tailored to your needs.',
  primaryLabel = 'Get in Touch',
  primaryHref = '/contact',
  primaryOnClick,
  image,
  eyebrow,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="rounded-2xl overflow-hidden bg-[#0a1628] grid lg:grid-cols-[1fr_420px]">

          {/* Left — dark panel */}
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
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[14px] font-medium hover:bg-white hover:text-[#0a1628] hover:border-white transition-all duration-200"
                >
                  {primaryLabel}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) : (
                <Link
                  to={primaryHref}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 text-white text-[14px] font-medium hover:bg-white hover:text-[#0a1628] hover:border-white transition-all duration-200"
                >
                  {primaryLabel}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* Right — white inset panel */}
          <div className="p-5 lg:p-6">
            <div className="rounded-xl overflow-hidden h-full bg-white relative flex flex-col justify-center" style={{ minHeight: 320 }}>
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                />
              ) : (
                <div className="px-6 py-8 space-y-3">
                  {defaultStats.map(stat => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between px-5 py-4 rounded-lg bg-[#f8fafc] border border-gray-100"
                    >
                      <span className="text-[#0a1628]/50 text-[13px] font-medium">{stat.label}</span>
                      <span className="font-bold text-[20px] leading-none" style={{ color: stat.color }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
