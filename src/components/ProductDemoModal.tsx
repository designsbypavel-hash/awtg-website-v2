import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

type ProductDemoModalProps = {
  isOpen: boolean
  onClose: () => void
  productName: string
  productLabel: string
  title: string
  description: string
  logoSrc: string
  accentColor?: string
  trustItems: string[]
  outcomes: string[]
}

const companySizes = [
  '1-50 employees',
  '51-250 employees',
  '251-1,000 employees',
  '1,001-5,000 employees',
  '5,000+ employees',
]

const industryDomains = [
  'Education',
  'Public sector',
  'Customer service',
  'Telecommunications',
  'Healthcare',
  'Financial services',
  'Retail',
  'Technology',
  'Other',
]

export default function ProductDemoModal({
  isOpen,
  onClose,
  productName,
  productLabel,
  title,
  description,
  logoSrc,
  accentColor = '#228DC1',
  trustItems,
  outcomes,
}: ProductDemoModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6">
      <button
        type="button"
        aria-label="Close demo form"
        onClick={onClose}
        className="absolute inset-0 bg-[#0a1628]/35 backdrop-blur-[6px]"
      />

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[18px] border border-gray-200 bg-white shadow-[0_28px_90px_rgba(10,22,40,0.22)]">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden bg-[#f8fafc] px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: `linear-gradient(90deg, ${accentColor}, rgba(34,141,193,0.25))` }}
            />
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-15" style={{ background: accentColor }} />
            <div className="absolute -bottom-32 left-8 h-56 w-56 rounded-full bg-white" />

            <button
              type="button"
              onClick={onClose}
              className="mb-10 inline-flex items-center border-b border-[#0a1628]/35 pb-1 text-[14px] font-medium text-[#0a1628]/75 transition-colors hover:border-[#228DC1] hover:text-[#228DC1]"
            >
              Back
            </button>

            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-3 rounded-[12px] border border-gray-200 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(10,22,40,0.06)]">
                <img
                  src={logoSrc}
                  alt={productName}
                  className="max-h-8 w-auto max-w-[116px] object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <span className="h-7 w-px bg-gray-200" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0a1628]/45">{productLabel}</span>
              </div>

              <h2 className="font-serif-display text-[#0a1628] leading-[1.04] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 54px)' }}>
                {title}
              </h2>
              <p className="max-w-xl text-[17px] font-normal leading-[1.7] text-[#0a1628]/65">
                {description}
              </p>

              <div className="mt-14">
                <p className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#0a1628]/35">
                  What you can expect
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style={{ background: accentColor }}>
                        <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                      </span>
                      <p className="text-[13px] font-medium leading-relaxed text-[#0a1628]/70">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#0a1628]/35">
                  Trusted delivery experience
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {trustItems.map((item) => (
                    <span key={item} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-[#0a1628]/55">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5f9] text-[#0a1628]/45 transition-colors hover:bg-[#e5edf4] hover:text-[#0a1628]"
            >
              <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
            </button>

            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              {[
                { label: 'First name', placeholder: 'First name', type: 'text' },
                { label: 'Last name', placeholder: 'Last name', type: 'text' },
                { label: 'Email', placeholder: 'Email address', type: 'email' },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">{field.label} *</span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-[52px] w-full rounded-[7px] border border-gray-300 bg-white px-4 text-[15px] text-[#0a1628] outline-none transition-colors placeholder:text-[#0a1628]/35 focus:border-[#228DC1] focus:ring-4 focus:ring-[#228DC1]/10"
                  />
                </label>
              ))}

              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">Company size *</span>
                <select className="h-[52px] w-full rounded-[7px] border border-gray-300 bg-white px-4 text-[15px] text-[#0a1628]/65 outline-none transition-colors focus:border-[#228DC1] focus:ring-4 focus:ring-[#228DC1]/10">
                  <option value="">Select number of employees</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">Industry domain *</span>
                <select className="h-[52px] w-full rounded-[7px] border border-gray-300 bg-white px-4 text-[15px] text-[#0a1628]/65 outline-none transition-colors focus:border-[#228DC1] focus:ring-4 focus:ring-[#228DC1]/10">
                  <option value="">Select industry domain</option>
                  {industryDomains.map((domain) => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">What would you like to explore?</span>
                <textarea
                  placeholder={`Tell us what you want to achieve with ${productName}`}
                  rows={4}
                  className="w-full resize-none rounded-[7px] border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#0a1628] outline-none transition-colors placeholder:text-[#0a1628]/35 focus:border-[#228DC1] focus:ring-4 focus:ring-[#228DC1]/10"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-[52px] w-full items-center justify-center rounded-[7px] px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: accentColor }}
              >
                Continue
              </button>

              <p className="pt-4 text-[11px] font-normal leading-relaxed text-[#0a1628]/45">
                By continuing, you agree that AWTG may process your details to respond to your request. We will only use your information in line with our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
