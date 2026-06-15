import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot, faBriefcase,
  faLightbulb, faUsers, faArrowTrendUp, faGlobe,
  faHeartPulse, faGraduationCap, faLaptopCode,
  faHouseChimney, faHandshake, faPeopleGroup,
  faBuilding, faTowerCell, faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { roles as openRoles, getRoleHref } from './CareerRoleDetailPage'

const values: { icon: IconDefinition; title: string; desc: string }[] = [
  { icon: faLightbulb,     title: 'Innovation at the core',    desc: 'At the frontier of 5G, Open RAN and AI — working on real-world deployments that push the boundaries of what networks can do.' },
  { icon: faUsers,         title: 'Brilliant, diverse people', desc: 'Our team spans engineers, researchers, consultants and strategists from across the globe, united by a passion for connectivity.' },
  { icon: faArrowTrendUp,  title: 'Grow with purpose',         desc: 'From dedicated learning budgets to hands-on project exposure, your professional development is built into how we work every day.' },
  { icon: faGlobe,         title: 'Meaningful global impact',  desc: 'Your work will connect communities, power smart cities and help enterprises operate more efficiently across three continents.' },
]

const benefits: { icon: IconDefinition; title: string; desc: string }[] = [
  { icon: faHouseChimney,  title: 'Flexible Working',         desc: 'Hybrid-first across most roles with remote options available.' },
  { icon: faGraduationCap, title: 'Learning & Development',   desc: 'Dedicated training budgets, certifications and mentorship.' },
  { icon: faHeartPulse,    title: 'Health & Wellbeing',       desc: 'Healthcare support and a culture that values balance.' },
  { icon: faHandshake,     title: 'Real Living Wage',         desc: 'AWTG is an accredited Living Wage Employer.' },
  { icon: faLaptopCode,    title: 'Cutting-Edge Technology',  desc: 'Work daily with 5G, Open RAN, AI and the latest network tech.' },
  { icon: faPeopleGroup,   title: 'Inclusive Culture',        desc: 'A diverse team where every voice is heard and valued.' },
]

const departments = ['All', ...Array.from(new Set(openRoles.map((r) => r.dept)))]

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All')
  const filtered = activeDept === 'All' ? openRoles : openRoles.filter((r) => r.dept === activeDept)

  return (
    <>
      {/* ── HERO — full-bleed image, no text on photo ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 680 }}>
        <img
          src="/images/insights/mobile-networks.jpg"
          alt="AWTG Careers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient: dark left for text, fades right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,22,40,0.90) 0%, rgba(10,22,40,0.72) 30%, rgba(10,22,40,0.30) 55%, rgba(10,22,40,0.06) 72%, transparent 85%)',
          }}
        />
        <div
          className="relative max-w-7xl mx-auto px-8 lg:px-12 flex items-end"
          style={{ minHeight: 680, paddingTop: 140, paddingBottom: 88 }}
        >
          <div style={{ maxWidth: 640 }}>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#228DC1] mb-5">
              Careers at AWTG
            </p>
            <h1
              className="font-serif-display text-white leading-[1.06] mb-7"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
            >
              Be at the forefront of connectivity innovation
            </h1>
            <p className="text-white/65 text-[17px] font-normal leading-[1.8] mb-10" style={{ maxWidth: 520 }}>
              Join world-class engineers, researchers and innovators deploying 5G, Open RAN and AI solutions that connect communities and enterprises worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
              >
                View Open Roles
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
              </a>
              <a
                href="mailto:recruitment@awtg.co.uk"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-[14px] font-semibold hover:border-white/60 hover:bg-white/10 transition-all"
              >
                Send your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { icon: faBuilding,   stat: '2006',  label: 'Founded',      text: '18+ years at the frontier of telecommunications engineering.' },
              { icon: faTowerCell,  stat: '45k+',  label: 'RAN Sites',    text: 'Deployed across three continents, powering communities globally.' },
              { icon: faUsers,      stat: '3',     label: 'Continents',   text: 'A global team united by a passion for connectivity and innovation.' },
            ].map((item) => (
              <div key={item.label} className="relative overflow-hidden px-10 py-14 lg:px-14 group">
                <div className="h-0.5 w-10 bg-[#228DC1] mb-9 transition-all duration-300 group-hover:w-16" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 flex items-center justify-center shrink-0" style={{ background: 'rgba(34,141,193,0.08)' }}>
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-[#228DC1]" />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a1628]/45">{item.label}</p>
                </div>
                <p className="font-black text-[#0a1628] leading-none mb-5"
                  style={{ fontSize: 'clamp(40px, 4.5vw, 58px)', letterSpacing: '-0.03em' }}>
                  {item.stat}
                </p>
                <p className="text-[#0a1628]/55 text-[14px] leading-[1.78] max-w-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING PANELS ── */}
      <div className="border-t border-gray-100 overflow-hidden">

        {/* Panel 1 — Why AWTG: text left, image right */}
        <div className="grid lg:grid-cols-2 border-b border-gray-100" style={{ minHeight: 580 }}>
          <div className="flex items-center bg-white" style={{ padding: '80px clamp(28px, 5.5vw, 96px)' }}>
            <div style={{ maxWidth: 520 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#228DC1]">01</span>
                <span className="h-px w-8 bg-[#228DC1]/40" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/45">Why AWTG</span>
              </div>
              <h2 className="font-heading text-[#0a1628] leading-[1.16] mb-8"
                style={{ fontSize: 'clamp(24px, 2.4vw, 32px)' }}>
                Why you belong here
              </h2>
              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.title} className="flex items-start gap-4">
                    <div className="h-9 w-9 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(34,141,193,0.09)' }}>
                      <FontAwesomeIcon icon={v.icon} className="w-3.5 h-3.5 text-[#228DC1]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#0a1628] mb-1">{v.title}</p>
                      <p className="text-[13px] text-[#0a1628]/58 leading-[1.78]">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ minHeight: 440, background: '#0a1628' }}>
            <img src="/images/insights/connectivity.jpg" alt="Innovation at AWTG"
              className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(10,22,40,0.18) 0%, transparent 40%)' }} />
          </div>
        </div>

        {/* Panel 2 — Benefits: image left, text right */}
        <div className="grid lg:grid-cols-2 border-b border-gray-100" style={{ minHeight: 560 }}>
          <div className="relative overflow-hidden" style={{ minHeight: 440, background: '#0a1628' }}>
            <img src="/images/insights/private-networks.jpg" alt="Benefits at AWTG"
              className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.18) 0%, transparent 40%)' }} />
          </div>
          <div className="flex items-center bg-white" style={{ padding: '80px clamp(28px, 5.5vw, 96px)' }}>
            <div style={{ maxWidth: 540 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#228DC1]">02</span>
                <span className="h-px w-8 bg-[#228DC1]/40" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/45">Benefits &amp; Perks</span>
              </div>
              <h2 className="font-heading text-[#0a1628] leading-[1.16] mb-8"
                style={{ fontSize: 'clamp(24px, 2.4vw, 32px)' }}>
                What we offer
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3 py-5 border-b border-gray-100 last:border-b-0">
                    <div className="h-8 w-8 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(34,141,193,0.09)' }}>
                      <FontAwesomeIcon icon={b.icon} className="w-3.5 h-3.5 text-[#228DC1]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#0a1628] mb-0.5">{b.title}</p>
                      <p className="text-[12px] text-[#0a1628]/55 leading-[1.7]">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PULL QUOTE — navy ── */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-[#228DC1]/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-gradient-to-tr from-[#228DC1]/08 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="text-[#228DC1] text-[72px] font-serif leading-none mb-4 opacity-30 select-none">&ldquo;</div>
            <p className="text-white text-xl lg:text-2xl font-light leading-[1.65] mb-8">
              At AWTG, your work connects communities, powers smart cities and shapes the future of communications — across three continents and counting.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#228DC1]" />
              <p className="text-white/45 text-[12px] font-bold uppercase tracking-[0.2em]">AWTG People Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="py-24 bg-[#f8fafc] border-t border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-end mb-12">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#228DC1] mb-3">Open Positions</p>
              <h2 className="font-heading text-[#0a1628]">Join the team</h2>
            </div>
            <p className="text-[#0a1628]/50 text-sm pb-1">{openRoles.length} open positions</p>
          </div>

          {/* Department filter tabs */}
          <div className="mb-10 rounded-xl border border-gray-200 bg-white p-2 shadow-[0_10px_34px_rgba(10,22,40,0.04)]">
            <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`rounded-lg px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-all ${
                  activeDept === dept
                    ? 'bg-[#0a1628] text-white shadow-[0_10px_24px_rgba(10,22,40,0.16)]'
                    : 'text-[#0a1628]/48 hover:bg-[#f3f7fb] hover:text-[#0a1628]'
                }`}
              >
                {dept}
              </button>
            ))}
            </div>
          </div>

          <ul role="list" className="grid gap-4">
            {filtered.map((role) => (
              <li key={role.title}>
                <Link
                  to={getRoleHref(role.slug)}
                  className="group relative grid gap-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#228DC1]/45 hover:shadow-[0_22px_54px_rgba(10,22,40,0.10)] sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[#228DC1] opacity-70 transition-all duration-300 group-hover:w-1.5 group-hover:opacity-100" />
                  <div className="pl-2">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex rounded-full bg-[#228DC1]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#228DC1]">
                        {role.dept}
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0a1628]/35">
                        {role.type}
                      </span>
                    </div>
                    <h3 className="mb-4 text-[20px] font-semibold leading-snug text-[#0a1628] transition-colors group-hover:text-[#228DC1]">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#0a1628]/55">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#f3f7fb] px-3 py-1.5">
                        <FontAwesomeIcon icon={faLocationDot} className="h-3 w-3 text-[#228DC1]" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#f3f7fb] px-3 py-1.5">
                        <FontAwesomeIcon icon={faBriefcase} className="h-3 w-3 text-[#228DC1]" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#228DC1] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(34,141,193,0.22)] transition-all duration-300 group-hover:bg-[#1a7fa8] group-hover:shadow-[0_14px_30px_rgba(34,141,193,0.30)]">
                    View Role
                    <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SPECULATIVE / CTA — alternating panel with image ── */}
      <div className="grid lg:grid-cols-2 border-t border-gray-100" style={{ minHeight: 460 }}>
        <div className="relative overflow-hidden" style={{ background: '#0a1628', minHeight: 300 }}>
          <img src="/images/insights/ai-lab.jpg" alt="AI technology workspace at AWTG"
            className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0.1) 100%)' }} />
        </div>
        <div className="flex items-center bg-[#0a1628] relative overflow-hidden"
          style={{ padding: '80px clamp(28px, 5.5vw, 88px)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#228DC1]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative" style={{ maxWidth: 500 }}>
            <h2 className="font-heading text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(24px, 2.4vw, 32px)' }}>
              Don't see the right role?
            </h2>
            <p className="text-white/60 text-[15px] font-normal leading-[1.8] mb-9">
              We are always interested in hearing from talented people. Send us your CV and tell us how you can contribute to the future of connectivity.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
            >
              Send Speculative Application
              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
