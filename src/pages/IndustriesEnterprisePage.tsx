import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWifi, faMicrochip, faBrain, faDiagramProject, faServer, faCloud,
} from '@fortawesome/free-solid-svg-icons'

const COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

const solutions = [
  { icon: faWifi, title: 'Private 5G and LTE Networks', desc: 'Campus-wide private wireless networks delivering guaranteed coverage, low latency and complete independence from public mobile networks for enterprise operations.' },
  { icon: faMicrochip, title: 'Industrial IoT Platforms', desc: 'Connected sensor and device management platforms providing real-time visibility across factories, warehouses, logistics estates and connected supply chains.' },
  { icon: faBrain, title: 'AI-Driven Operations', desc: 'Machine learning and intelligent automation for asset monitoring, predictive maintenance, energy management and operational workflow optimisation.' },
  { icon: faDiagramProject, title: 'Digital Twin Integration', desc: 'Wireless infrastructure designed to feed real-time data into digital twin environments, enabling simulation, planning and remote operational oversight.' },
  { icon: faServer, title: 'Secure Edge Computing', desc: 'On-premises compute and connectivity architectures that keep sensitive operational data local while enabling real-time processing at the network edge.' },
  { icon: faCloud, title: 'Cloud and Hybrid Networking', desc: 'Enterprise-grade SD-WAN, cloud connectivity and hybrid networking solutions integrating sites, data centres and cloud platforms into a unified managed estate.' },
]

export default function IndustriesEnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] mb-6">
            Enterprises and Connected Industries
          </h1>
          <p className="text-[#0a1628]/70 text-lg max-w-2xl font-normal leading-relaxed">
            Private wireless, AI and IoT solutions for enterprises operating at scale, from manufacturing and logistics to energy, utilities and connected campuses.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12 grid sm:grid-cols-3 gap-8">
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>500+</p>
            <p className="type-label text-[#0a1628]/60">Hectares of private network coverage delivered</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>40%</p>
            <p className="type-label text-[#0a1628]/60">Average productivity gain reported</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>20+</p>
            <p className="type-label text-[#0a1628]/60">Enterprise sectors served</p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-heading text-[#0a1628] mb-4">
            Solutions for enterprise connectivity
          </h2>
          <p className="text-[#0a1628]/60 mb-14 max-w-2xl font-normal text-[16px] leading-[1.7]">
            AWTG designs and deploys the wireless and AI infrastructure that enterprise organisations need to operate securely, efficiently and at scale.
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

      {/* Proof */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl border-l-4 border-[#228DC1] pl-8">
            <p className="text-[#0a1628]/80 text-xl font-normal leading-relaxed">
              AWTG deployed a campus-wide private 5G network across 500 hectares for a major UK port operator, enabling autonomous vehicle coordination, real-time cargo tracking and digital twin integration, delivering a 40% productivity gain.
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

      <CTASection
        title="Connect Your Enterprise"
        subtitle="Talk to our team about private wireless, AI and IoT solutions designed for your operational environment."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  )
}
