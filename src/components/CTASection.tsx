import { Link } from 'react-router-dom'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  primaryOnClick?: () => void
}

export default function CTASection({
  title = "Ready to Transform Your Network?",
  subtitle = "Talk to our experts about how AWTG can design and deliver a solution tailored to your needs.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  primaryOnClick,
}: CTASectionProps) {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        <h2 className="font-heading text-[#0a1628] mb-6">{title}</h2>
        <p className="text-[#0a1628]/60 text-base mb-10 max-w-2xl mx-auto font-normal leading-[1.75]">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {primaryOnClick ? (
            <button
              type="button"
              onClick={primaryOnClick}
              className="btn btn-primary"
            >
              {primaryLabel}
            </button>
          ) : (
            <Link
              to={primaryHref}
              className="btn btn-primary"
            >
              {primaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
