import { useState, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot, faBriefcase,
  faBuilding, faCloudArrowUp, faCircleCheck, faXmark,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
import { roles, getRoleHref } from './CareerRoleDetailPage'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  linkedIn: string
  portfolio: string
  coverLetter: string
  hearAbout: string
  rightToWork: string
  sponsorship: string
  cvFile: File | null
}

const INITIAL: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  linkedIn: '',
  portfolio: '',
  coverLetter: '',
  hearAbout: '',
  rightToWork: '',
  sponsorship: '',
  cvFile: null,
}

const hearAboutOptions = [
  'LinkedIn',
  'Indeed',
  'Company Website',
  'Referral from a colleague',
  'Industry event or conference',
  'Google search',
  'Other',
]

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[#0a1628]/60 mb-2">
      {children}
      {required && <span className="text-[#228DC1] ml-1">*</span>}
    </label>
  )
}

function Input({
  id, value, onChange, placeholder, type = 'text', required,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#0a1628] placeholder-[#0a1628]/30 focus:outline-none focus:border-[#228DC1] focus:ring-1 focus:ring-[#228DC1]/20 transition-colors"
    />
  )
}

function Select({
  id, value, onChange, options, placeholder, required,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder?: string
  required?: boolean
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#0a1628] focus:outline-none focus:border-[#228DC1] focus:ring-1 focus:ring-[#228DC1]/20 transition-colors appearance-none cursor-pointer"
    >
      <option value="" disabled>{placeholder ?? 'Select an option'}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  )
}

function SectionCard({
  num, title, children,
}: {
  num: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-gray-100 shadow-[0_2px_12px_rgba(10,22,40,0.04)]">
      <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-4">
        <span className="w-7 h-7 bg-[#228DC1] text-white text-[12px] font-bold flex items-center justify-center shrink-0">
          {num}
        </span>
        <h2 className="font-h5 text-[#0a1628]">{title}</h2>
      </div>
      <div className="px-8 py-7">{children}</div>
    </div>
  )
}

export default function CareerApplyPage() {
  const { slug } = useParams<{ slug: string }>()
  const role = roles.find((r) => r.slug === slug)

  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!role) return <Navigate to="/careers" replace />

  const set = (field: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  function handleFile(file: File | null) {
    if (!file) return
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type)) return
    if (file.size > 10 * 1024 * 1024) return
    setForm((prev) => ({ ...prev, cvFile: file }))
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    handleFile(e.dataTransfer.files[0] ?? null)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <>
        <section className="pt-32 pb-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <Link
              to={getRoleHref(role.slug)}
              className="inline-flex items-center gap-2 text-[#0a1628]/50 text-[13px] font-semibold hover:text-[#228DC1] transition-colors mb-8"
            >
              Back to role
            </Link>
            <div className="max-w-xl">
              <div className="w-14 h-14 bg-[#228DC1]/10 flex items-center justify-center mb-8">
                <FontAwesomeIcon icon={faCircleCheck} className="w-7 h-7 text-[#228DC1]" />
              </div>
              <p className="type-label text-[#228DC1] mb-4">Application Received</p>
              <h1 className="font-h2 text-[#0a1628] mb-5">Thank you, {form.firstName}.</h1>
              <p className="text-[#0a1628]/60 text-[16px] leading-[1.8] mb-8">
                We've received your application for <strong className="text-[#0a1628]">{role.title}</strong>. Our team will review it and get back to you within 5 business days.
              </p>
              <div className="bg-white border border-gray-100 p-6 mb-8 space-y-2">
                <p className="text-[13px] text-[#0a1628]/50 font-semibold uppercase tracking-[0.1em] mb-3">Application Summary</p>
                <p className="text-[14px] text-[#0a1628]/70"><span className="font-semibold text-[#0a1628]">Role:</span> {role.title}</p>
                <p className="text-[14px] text-[#0a1628]/70"><span className="font-semibold text-[#0a1628]">Department:</span> {role.dept}</p>
                <p className="text-[14px] text-[#0a1628]/70"><span className="font-semibold text-[#0a1628]">Email submitted:</span> {form.email}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
                >
                  View All Roles
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-[#0a1628] text-[14px] font-semibold hover:border-[#228DC1] hover:text-[#228DC1] transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-10 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <Link
            to={getRoleHref(role.slug)}
            className="inline-flex items-center gap-2 text-[#0a1628]/50 text-[13px] font-semibold hover:text-[#228DC1] transition-colors mb-8"
          >
            Back to role
          </Link>
          <p className="type-label text-[#228DC1] mb-3">Apply</p>
          <h1 className="font-h1 text-[#0a1628] mb-4">{role.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-[13px] text-[#0a1628]/55">
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faBuilding} className="w-3 h-3 text-[#228DC1]" /> {role.dept}
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-[#228DC1]" /> {role.location}
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3 text-[#228DC1]" /> {role.type}
            </span>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 items-start">

              {/* Form */}
              <div className="space-y-5">

                {/* 01 Personal Details */}
                <SectionCard num="1" title="Personal Details">
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <FieldLabel required>First Name</FieldLabel>
                        <Input id="firstName" value={form.firstName} onChange={set('firstName')} placeholder="Jane" required />
                      </div>
                      <div>
                        <FieldLabel required>Last Name</FieldLabel>
                        <Input id="lastName" value={form.lastName} onChange={set('lastName')} placeholder="Smith" required />
                      </div>
                    </div>
                    <div>
                      <FieldLabel required>Email Address</FieldLabel>
                      <Input id="email" type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" required />
                    </div>
                    <div>
                      <FieldLabel required>Phone Number</FieldLabel>
                      <Input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+44 7700 900000" required />
                    </div>
                    <div>
                      <FieldLabel required>Current City / Location</FieldLabel>
                      <Input id="city" value={form.city} onChange={set('city')} placeholder="London, UK" required />
                    </div>
                  </div>
                </SectionCard>

                {/* 02 Online Profiles */}
                <SectionCard num="2" title="Online Profiles">
                  <div className="space-y-5">
                    <div>
                      <FieldLabel>LinkedIn Profile URL</FieldLabel>
                      <Input id="linkedIn" type="url" value={form.linkedIn} onChange={set('linkedIn')} placeholder="https://linkedin.com/in/your-profile" />
                    </div>
                    <div>
                      <FieldLabel>Portfolio / Website URL</FieldLabel>
                      <Input id="portfolio" type="url" value={form.portfolio} onChange={set('portfolio')} placeholder="https://yourwebsite.com" />
                    </div>
                  </div>
                </SectionCard>

                {/* 03 CV Upload */}
                <SectionCard num="3" title="CV / Resume">
                  <div className="space-y-3">
                    <FieldLabel required>Upload your CV</FieldLabel>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed cursor-pointer transition-colors p-8 text-center ${
                        dragOver
                          ? 'border-[#228DC1] bg-[#228DC1]/5'
                          : form.cvFile
                          ? 'border-[#228DC1]/40 bg-[#228DC1]/3'
                          : 'border-gray-200 hover:border-[#228DC1]/50 hover:bg-[#f7f9fc]'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                      />
                      {form.cvFile ? (
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-10 h-10 bg-[#228DC1]/10 flex items-center justify-center">
                            <FontAwesomeIcon icon={faFile} className="w-5 h-5 text-[#228DC1]" />
                          </div>
                          <div className="text-left">
                            <p className="text-[14px] font-semibold text-[#0a1628]">{form.cvFile.name}</p>
                            <p className="text-[12px] text-[#0a1628]/45 mt-0.5">
                              {(form.cvFile.size / 1024).toFixed(0)} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setForm((p) => ({ ...p, cvFile: null })) }}
                            className="ml-2 w-7 h-7 bg-gray-100 hover:bg-red-50 flex items-center justify-center text-[#0a1628]/40 hover:text-red-500 transition-colors"
                          >
                            <FontAwesomeIcon icon={faXmark} className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div className="w-12 h-12 bg-[#228DC1]/8 flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon icon={faCloudArrowUp} className="w-6 h-6 text-[#228DC1]" />
                          </div>
                          <p className="text-[14px] font-semibold text-[#0a1628] mb-1">
                            Drop your CV here, or <span className="text-[#228DC1]">browse</span>
                          </p>
                          <p className="text-[12px] text-[#0a1628]/40">PDF, DOC or DOCX · Max 10 MB</p>
                        </div>
                      )}
                    </div>
                  </div>
                </SectionCard>

                {/* 04 Cover Letter */}
                <SectionCard num="4" title="Cover Letter">
                  <div className="space-y-3">
                    <FieldLabel>Tell us why you're a great fit</FieldLabel>
                    <textarea
                      id="coverLetter"
                      value={form.coverLetter}
                      onChange={(e) => set('coverLetter')(e.target.value)}
                      rows={7}
                      placeholder="Share what excites you about this role and what you'd bring to the team..."
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#0a1628] placeholder-[#0a1628]/30 focus:outline-none focus:border-[#228DC1] focus:ring-1 focus:ring-[#228DC1]/20 transition-colors resize-none"
                    />
                    <p className="text-[12px] text-[#0a1628]/40">{form.coverLetter.length} / 2000 characters</p>
                  </div>
                </SectionCard>

                {/* 05 Work Eligibility */}
                <SectionCard num="5" title="Work Eligibility">
                  <div className="space-y-5">
                    <div>
                      <FieldLabel required>Do you have the right to work in the UK?</FieldLabel>
                      <Select
                        id="rightToWork"
                        value={form.rightToWork}
                        onChange={set('rightToWork')}
                        options={['Yes, I am a UK/EU citizen', 'Yes, I have a valid work visa', 'No, I would require sponsorship', 'I am currently in the process of obtaining the right to work']}
                        placeholder="Please select"
                        required
                      />
                    </div>
                    <div>
                      <FieldLabel required>Do you require visa sponsorship?</FieldLabel>
                      <Select
                        id="sponsorship"
                        value={form.sponsorship}
                        onChange={set('sponsorship')}
                        options={['No', 'Yes, I will require sponsorship', 'Unsure — happy to discuss']}
                        placeholder="Please select"
                        required
                      />
                    </div>
                  </div>
                </SectionCard>

                {/* 06 How did you hear */}
                <SectionCard num="6" title="Final Details">
                  <div>
                    <FieldLabel>How did you hear about this role?</FieldLabel>
                    <Select
                      id="hearAbout"
                      value={form.hearAbout}
                      onChange={set('hearAbout')}
                      options={hearAboutOptions}
                      placeholder="Please select"
                    />
                  </div>
                </SectionCard>

                {/* Legal + Submit */}
                <div className="bg-white border border-gray-100 shadow-[0_2px_12px_rgba(10,22,40,0.04)] px-8 py-7">
                  <p className="text-[12px] text-[#0a1628]/45 leading-[1.8] mb-7">
                    By submitting this application you consent to AWTG Limited processing your personal data for recruitment purposes in accordance with our{' '}
                    <Link to="/privacy" className="text-[#228DC1] hover:underline">Privacy Policy</Link>.
                    {' '}Your data will be stored securely and retained for up to 12 months.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
                  >
                    Submit Application
                  </button>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 space-y-4">

                {/* Job summary */}
                <div className="bg-white border border-gray-100 shadow-[0_2px_12px_rgba(10,22,40,0.04)] p-7">
                  <p className="type-label text-[#228DC1] mb-4">You're applying for</p>
                  <h3 className="font-h5 text-[#0a1628] mb-5">{role.title}</h3>
                  <div className="space-y-3 pb-5 border-b border-gray-100">
                    {[
                      { icon: faBuilding, value: role.dept },
                      { icon: faLocationDot, value: role.location },
                      { icon: faBriefcase, value: role.type },
                    ].map(({ icon, value }) => (
                      <div key={value} className="flex items-center gap-2.5 text-[13px] text-[#0a1628]/60">
                        <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5 text-[#228DC1] shrink-0" />
                        {value}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={getRoleHref(role.slug)}
                    className="mt-5 flex items-center gap-2 text-[#228DC1] text-[13px] font-semibold hover:text-[#1a7fa8] transition-colors"
                  >
                    View full job description
                  </Link>
                </div>

                {/* What to expect */}
                <div className="bg-[#f8fafc] border border-gray-100 p-7">
                  <p className="type-label text-[#228DC1] mb-4">What happens next</p>
                  <div className="space-y-4">
                    {[
                      { step: '01', text: 'We review your application within 5 business days.' },
                      { step: '02', text: 'Shortlisted candidates are invited to an initial call.' },
                      { step: '03', text: 'Technical or competency interview with the team.' },
                      { step: '04', text: 'Final decision and offer.' },
                    ].map(({ step, text }) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="text-[11px] font-bold text-[#228DC1] tabular-nums shrink-0 mt-0.5">{step}</span>
                        <p className="text-[13px] text-[#0a1628]/60 leading-[1.7]">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AWTG contact */}
                <div className="border border-gray-100 p-7 bg-white">
                  <p className="text-[13px] text-[#0a1628]/55 leading-[1.75] mb-4">
                    Questions before applying? Email our team directly.
                  </p>
                  <a
                    href="mailto:info@awtg.co.uk"
                    className="inline-flex items-center gap-2 text-[#228DC1] text-[13px] font-semibold hover:text-[#1a7fa8] transition-colors"
                  >
                    info@awtg.co.uk
                  </a>
                </div>

              </aside>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
