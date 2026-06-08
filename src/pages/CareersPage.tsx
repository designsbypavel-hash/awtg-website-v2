import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot, faBriefcase,
  faLightbulb, faUsers, faArrowTrendUp, faGlobe,
  faHeartPulse, faGraduationCap, faLaptopCode,
  faHouseChimney, faHandshake, faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { roles as openRoles, getRoleHref } from './CareerRoleDetailPage'

const values: { icon: IconDefinition; title: string; desc: string }[] = [
  { icon: faLightbulb, title: 'Innovation at the core', desc: 'We are at the frontier of 5G, Open RAN and AI — working on real-world deployments that push the boundaries of what networks can do.' },
  { icon: faUsers, title: 'Brilliant, diverse people', desc: 'Our team spans engineers, researchers, consultants and strategists from across the globe, united by a passion for connectivity.' },
  { icon: faArrowTrendUp, title: 'Grow with purpose', desc: 'From dedicated learning budgets to hands-on project exposure, your professional development is built into how we work every day.' },
  { icon: faGlobe, title: 'Meaningful global impact', desc: 'Your work will connect communities, power smart cities and help enterprises operate more efficiently across three continents.' },
]

const benefits: { icon: IconDefinition; title: string; desc: string }[] = [
  { icon: faHouseChimney, title: 'Flexible Working', desc: 'Hybrid-first across most roles with remote options available.' },
  { icon: faGraduationCap, title: 'Learning & Development', desc: 'Dedicated training budgets, certifications and mentorship.' },
  { icon: faHeartPulse, title: 'Health & Wellbeing', desc: 'Healthcare support and a culture that values balance.' },
  { icon: faHandshake, title: 'Real Living Wage', desc: 'AWTG is an accredited Living Wage Employer.' },
  { icon: faLaptopCode, title: 'Cutting-Edge Technology', desc: 'Work daily with 5G, Open RAN, AI and the latest network tech.' },
  { icon: faPeopleGroup, title: 'Inclusive Culture', desc: 'A diverse team where every voice is heard and valued.' },
]

const departments = ['All', ...Array.from(new Set(openRoles.map((r) => r.dept)))]

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All')
  const filtered = activeDept === 'All' ? openRoles : openRoles.filter((r) => r.dept === activeDept)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[640px] bg-gradient-to-bl from-[#ddf0fa] via-[#edf7fd] to-transparent" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-gradient-to-tr from-[#edf7fd] to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(34,141,193,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,141,193,0.07) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="type-label text-[#228DC1] mb-5">Careers at AWTG</p>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.05] mb-6">
                Be at the Forefront<br />of Connectivity<br />Innovation
              </h1>
              <p className="text-[#0a1628]/65 text-[18px] font-normal leading-[1.75] max-w-lg mb-10">
                Join a team of world-class engineers, researchers and innovators deploying 5G, Open RAN and AI solutions that connect communities and enterprises worldwide.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
                >
                  View Open Roles
                </a>
              </div>
            </div>

            {/* Right: floating metric cards */}
            <div className="hidden lg:flex flex-col items-start gap-5 pl-10">
              <div className="self-end bg-white shadow-[0_8px_40px_rgba(10,22,40,0.10)] border border-gray-100 p-7 w-[230px]">
                <p className="type-label text-[#228DC1] mb-2">Founded</p>
                <p className="font-h2 text-[#0a1628]">2006</p>
                <p className="text-[#0a1628]/50 text-[13px] mt-1.5">18+ years of innovation</p>
              </div>
              <div className="self-center bg-[#0a1628] shadow-[0_8px_40px_rgba(10,22,40,0.22)] p-7 w-[230px]">
                <p className="type-label text-white/45 mb-2">RAN Sites</p>
                <p className="font-h2 text-white">45,000+</p>
                <p className="text-white/50 text-[13px] mt-1.5">Delivered globally</p>
              </div>
              <div className="self-start bg-white shadow-[0_8px_40px_rgba(10,22,40,0.10)] border border-gray-100 p-7 w-[230px]">
                <p className="type-label text-[#228DC1] mb-2">Continents</p>
                <p className="font-h2 text-[#0a1628]">3</p>
                <p className="text-[#0a1628]/50 text-[13px] mt-1.5">Global delivery footprint</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AWTG */}
      <section className="py-24 bg-[#f7f9fc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="type-label text-[#228DC1] mb-4">Why AWTG</p>
            <h2 className="font-heading text-[#0a1628]">Why you belong at AWTG</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 shadow-[0_2px_16px_rgba(10,22,40,0.05)] hover:shadow-[0_10px_36px_rgba(34,141,193,0.12)] hover:-translate-y-1 transition-all duration-300 p-8"
              >
                <div className="w-12 h-12 bg-[#228DC1]/10 flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={v.icon} className="w-5 h-5 text-[#228DC1]" />
                </div>
                <h3 className="font-h5 text-[#0a1628] mb-3">{v.title}</h3>
                <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.75]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <p className="type-label text-[#228DC1] mb-4">Benefits &amp; Perks</p>
            <h2 className="font-heading text-[#0a1628]">What we offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-8 hover:bg-[#f7f9fc] transition-colors">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-[#228DC1]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={b.icon} className="w-4 h-4 text-[#228DC1]" />
                  </div>
                  <div>
                    <h3 className="font-h5 text-[#0a1628] mb-2">{b.title}</h3>
                    <p className="text-[#0a1628]/60 text-[13px] font-normal leading-[1.75]">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="py-24 bg-[#f7f9fc] border-t border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="type-label text-[#228DC1] mb-4">Open Positions</p>
              <h2 className="font-heading text-[#0a1628]">Join the team</h2>
            </div>
            <p className="text-[#0a1628]/50 text-sm">{openRoles.length} open positions</p>
          </div>

          {/* Department filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors ${
                  activeDept === dept
                    ? 'bg-[#228DC1] text-white'
                    : 'bg-white border border-gray-200 text-[#0a1628]/55 hover:border-[#228DC1] hover:text-[#228DC1]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <ul role="list" className="space-y-3">
            {filtered.map((role) => (
              <li
                key={role.title}
                className="group bg-white border border-gray-100 hover:border-[#228DC1] hover:shadow-[0_4px_24px_rgba(34,141,193,0.1)] transition-all"
              >
                <div className="p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#228DC1] bg-[#228DC1]/8 px-2.5 py-1 mb-3">
                      {role.dept}
                    </span>
                    <h3 className="font-h4 text-[#0a1628] group-hover:text-[#228DC1] transition-colors mb-2.5">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-5 text-[13px] text-[#0a1628]/55 font-normal">
                      <span className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-[#228DC1]" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3 text-[#228DC1]" /> {role.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={getRoleHref(role.slug)}
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 border border-[#228DC1] text-[#228DC1] text-[13px] font-semibold hover:bg-[#228DC1] hover:text-white transition-all"
                  >
                    View Role
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,141,193,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,141,193,0.4) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-[#228DC1]/20 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <p className="type-label text-[#228DC1] mb-5">Speculative Applications</p>
          <h2 className="font-heading text-white mb-5">Don't see the right role?</h2>
          <p className="text-white/60 text-[16px] font-normal max-w-xl mx-auto mb-10 leading-[1.75]">
            We are always interested in hearing from talented people. Send us your CV and tell us how you can contribute to the future of connectivity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
          >
            Send Speculative Application
          </Link>
        </div>
      </section>
    </>
  )
}
