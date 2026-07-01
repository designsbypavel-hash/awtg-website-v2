import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

const inputCls = 'h-[52px] w-full rounded-[7px] border border-gray-300 bg-white px-4 text-sm text-[#0a1628] outline-none transition-colors placeholder:text-[#0a1628]/60 focus:border-[#228DC1] focus:ring-4 focus:ring-[#228DC1]/10'
const labelCls = 'mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-h1 text-[#0a1628] mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-[#0a1628]/60 text-[16px] max-w-xl font-light leading-[1.75] tracking-wide">
            Whether you have a project in mind or just want to explore what&apos;s possible, our experts are ready to help.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-20">

          {/* Form */}
          <div>
            <h2 className="font-h2 text-[#0a1628] mb-8">Send Us a Message</h2>

            {submitted ? (
              <div className="rounded-2xl p-8 bg-[#f0f5ff] border border-[#228DC1]/20 text-[#0a1628]">
                <p className="font-semibold text-[16px] mb-2">Thank you for getting in touch.</p>
                <p className="text-[#0a1628]/75 font-normal">A member of our team will respond within 2 business hours.</p>
              </div>
            ) : (
              <form
                aria-label="Contact form"
                onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className={labelCls}>First Name *</span>
                    <input id="c-first" required type="text" placeholder="First name" className={inputCls} />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Last Name *</span>
                    <input id="c-last" required type="text" placeholder="Last name" className={inputCls} />
                  </label>
                </div>

                <label className="block">
                  <span className={labelCls}>Work Email *</span>
                  <input id="c-email" required type="email" placeholder="jane@company.com" className={inputCls} />
                </label>

                <label className="block">
                  <span className={labelCls}>Organisation *</span>
                  <input id="c-org" required type="text" placeholder="Company name" className={inputCls} />
                </label>

                <label className="block">
                  <span className={labelCls}>Area of Interest</span>
                  <select id="c-interest" className="h-[52px] w-full rounded-[7px] border border-gray-300 bg-white px-4 text-sm text-[#0a1628]/60 outline-none transition-colors focus:border-[#228DC1] focus:ring-4 focus:ring-[#228DC1]/10">
                    <option value="">Select a topic</option>
                    <option>Products and Services</option>
                    <option>Solutions</option>
                    <option>Business Opportunities</option>
                    <option>Others</option>
                  </select>
                </label>

                <label className="block">
                  <span className={labelCls}>Message *</span>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    placeholder="Tell us about your project or question..."
                    className="w-full resize-none rounded-[7px] border border-gray-300 bg-white px-4 py-3 text-sm text-[#0a1628] outline-none transition-colors placeholder:text-[#0a1628]/60 focus:border-[#228DC1] focus:ring-4 focus:ring-[#228DC1]/10"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-[52px] w-full items-center justify-center rounded-[7px] bg-[#3d3a8c] px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>

                <p className="pt-4 text-[11px] font-normal leading-relaxed text-[#0a1628]/60">
                  By submitting, you agree that AWTG may process your details to respond to your request. We will only use your information in line with our privacy policy.
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-h2 text-[#0a1628] mb-8">Get in Touch Directly</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[#1a7aab] shrink-0 mt-0.5" />
                <div>
                  <p className="mb-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">Email</p>
                  <a href="mailto:info@awtg.co.uk" className="text-[#0a1628] font-medium hover:text-[#1a7aab] transition-colors">info@awtg.co.uk</a>
                  <p className="text-[14px] text-[#0a1628]/60 mt-0.5 font-normal">Typically reply within 2 hours</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#1a7aab] shrink-0 mt-0.5" />
                <div>
                  <p className="mb-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">Phone</p>
                  <a href="tel:+442046027050" className="text-[#0a1628] font-semibold hover:text-[#1a7aab] transition-colors">+44 (0) 20 4602 7050</a>
                  <p className="text-[14px] text-[#0a1628]/60 mt-0.5 font-normal">Mon to Fri, 8:30am to 6:00pm GMT</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-[#1a7aab] shrink-0 mt-0.5" />
                <div>
                  <p className="mb-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">Head Office</p>
                  <p className="text-[#0a1628] font-medium">8 Canham Mews, Canham Road</p>
                  <p className="text-[14px] text-[#0a1628]/60 mt-0.5 font-normal">London, W3 7SR, United Kingdom</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-[#1a7aab] shrink-0 mt-0.5" />
                <div>
                  <p className="mb-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0a1628]/75">Response Time</p>
                  <p className="text-[#0a1628] font-medium">Within 2 business hours</p>
                  <p className="text-[14px] text-[#0a1628]/60 mt-0.5 font-normal">For urgent matters, please call</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
