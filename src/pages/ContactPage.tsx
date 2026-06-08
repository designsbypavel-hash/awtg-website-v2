import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      {/* Dark hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-4">Contact Us</p>
          <h1 className="font-h1 text-[#0a1628] mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-[#0a1628]/60 text-[16px] max-w-xl font-normal leading-[1.75]">
            Whether you have a project in mind or just want to explore what&apos;s possible, our experts are ready to help.
          </p>
        </div>
      </section>

      {/* Contact form + info grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <div>
            <h2 className="font-h2 text-[#0a1628] mb-8">Send Us a Message</h2>
            {submitted ? (
              <div className="p-8 bg-[#f0f5ff] border border-[#228DC1]/20 text-[#0a1628]">
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
                  <div>
                    <label htmlFor="c-first" className="form-label">First Name *</label>
                    <input id="c-first" required className="form-input" placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="c-last" className="form-label">Last Name *</label>
                    <input id="c-last" required className="form-input" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-email" className="form-label">Work Email *</label>
                  <input id="c-email" type="email" required className="form-input" placeholder="jane@company.com" />
                </div>
                <div>
                  <label htmlFor="c-org" className="form-label">Organisation *</label>
                  <input id="c-org" required className="form-input" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="c-interest" className="form-label">Area of Interest</label>
                  <select id="c-interest" className="form-input">
                    <option value="">Select a topic</option>
                    <option>Products and Services</option>
                    <option>Solutions</option>
                    <option>Business Opportunities</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="form-label">Message *</label>
                  <textarea id="c-message" required rows={5} className="form-input resize-none" placeholder="Tell us about your project or question..." />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-h2 text-[#0a1628] mb-8">Get in Touch Directly</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[#228DC1] shrink-0 mt-0.5" />
                <div>
                  <p className="form-label mb-1">Email</p>
                  <a href="mailto:info@awtg.co.uk" className="text-[#0a1628] font-medium hover:text-[#228DC1] transition-colors">info@awtg.co.uk</a>
                  <p className="text-[14px] text-[#0a1628]/60 mt-0.5 font-normal">Typically reply within 2 hours</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#228DC1] shrink-0 mt-0.5" />
                <div>
                  <p className="form-label mb-1">Phone</p>
                  <a href="tel:+442046027050" className="text-[#0a1628] font-semibold hover:text-[#228DC1] transition-colors">+44 (0) 20 4602 7050</a>
                  <p className="text-[14px] text-[#0a1628]/60 mt-0.5 font-normal">Mon to Fri, 8:30am to 6:00pm GMT</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-[#228DC1] shrink-0 mt-0.5" />
                <div>
                  <p className="form-label mb-1">Head Office</p>
                  <p className="text-[#0a1628] font-medium">8 Canham Mews, Canham Road</p>
                  <p className="text-[14px] text-[#0a1628]/60 mt-0.5 font-normal">London, W3 7SR, United Kingdom</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-[#228DC1] shrink-0 mt-0.5" />
                <div>
                  <p className="form-label mb-1">Response Time</p>
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
