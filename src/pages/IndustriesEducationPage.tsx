import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWifi, faDesktop, faMicrochip, faNetworkWired, faShieldHalved, faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'

const COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

const solutions = [
  { icon: faWifi, title: 'Campus-Wide Wi-Fi and 5G', desc: 'High-density wireless design and deployment across university estates, including lecture theatres, libraries, student accommodation and outdoor spaces.' },
  { icon: faDesktop, title: 'Smart Classroom Connectivity', desc: 'Reliable, low-latency connectivity infrastructure supporting interactive displays, AV systems, collaborative platforms and digital learning tools.' },
  { icon: faMicrochip, title: 'Student IoT Platforms', desc: 'IoT-enabled campus services including smart building management, environmental monitoring, occupancy sensing and energy optimisation.' },
  { icon: faNetworkWired, title: 'Research Network Infrastructure', desc: 'High-throughput network design for data-intensive research, HPC connectivity and multi-site collaboration across academic and research institutions.' },
  { icon: faShieldHalved, title: 'Secure Access Management', desc: 'Zero-trust network access, identity federation and role-based policy enforcement protecting staff, student and guest connectivity across campus.' },
  { icon: faGraduationCap, title: 'e-Learning Platform Integration', desc: 'Connectivity and infrastructure optimisation supporting VLE platforms, video streaming, remote lecture delivery and hybrid learning environments.' },
]

export default function IndustriesEducationPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] leading-tight mb-6">
            Education
          </h1>
          <p className="text-[#0a1628]/60 text-lg max-w-2xl font-normal leading-relaxed">
            Connected campus solutions and EdTech infrastructure for universities, colleges and research institutions, enabling seamless learning, collaboration and innovation at scale.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>30+</p>
            <p className="type-label text-[#0a1628]/60">Universities and Colleges</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>500k+</p>
            <p className="type-label text-[#0a1628]/60">Students Connected</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Eduroam</p>
            <p className="type-label text-[#0a1628]/60">Integrated</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-heading text-[#0a1628] mb-4">
            Solutions for Education
          </h2>
          <p className="text-[#0a1628]/60 mb-14 max-w-2xl font-normal text-[16px] leading-[1.7]">
            AWTG designs and delivers campus connectivity that supports modern pedagogy, research ambition and the operational demands of large, multi-site educational institutions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, i) => {
              const color = COLORS[i % 4]
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-[18px] p-7 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    border: '1px solid rgba(15,23,42,0.08)',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.05)',
                    borderTop: `3px solid ${color}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}10`, border: `1px solid ${color}22`, color }}
                  >
                    <FontAwesomeIcon icon={s.icon} style={{ fontSize: 16 }} />
                  </div>
                  <h3 className="font-semibold text-[#0a1628] text-sm mb-2">{s.title}</h3>
                  <p className="text-[#0a1628]/60 text-[13.5px] font-normal leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl border-l-4 border-[#228DC1] pl-8">
            <p className="text-[#0a1628]/80 text-xl font-normal leading-relaxed">
              All campus wireless deployments include full Eduroam federation, enabling staff and students to roam seamlessly across participating institutions, with consistent security policy enforcement throughout.
            </p>
            <Link
              to="/insights/case-studies"
              className="inline-flex items-center gap-2 mt-6 text-[#228DC1] text-sm font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
