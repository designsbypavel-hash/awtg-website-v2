import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBrain, faWifi, faGears, faChartLine, faNetworkWired, faSitemap,
} from '@fortawesome/free-solid-svg-icons'

const COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

const solutions = [
  { icon: faBrain, title: 'MNO Network Optimisation with AI', desc: 'Machine-learning-driven radio optimisation, predictive fault detection and automated capacity management for mobile network operators.' },
  { icon: faWifi, title: 'MVNO Platform Enablement', desc: 'End-to-end MVNO launch and operational support: from core network integration to BSS provisioning and billing platform configuration.' },
  { icon: faGears, title: 'Tower Company Automation', desc: 'Automated site management, energy monitoring and remote infrastructure control for towercos managing large passive infrastructure portfolios.' },
  { icon: faChartLine, title: 'Spectrum Management', desc: 'Advisory and tooling for spectrum acquisition, interference analysis and regulatory compliance across licensed and shared spectrum bands.' },
  { icon: faNetworkWired, title: 'RAN Modernisation', desc: 'Vendor-neutral consultancy and delivery for Open RAN deployments, legacy RAN transformation and multi-vendor integration programmes.' },
  { icon: faSitemap, title: 'OSS/BSS Integration', desc: 'Systems integration services connecting operational and business support systems to enable end-to-end service assurance and revenue management.' },
]

export default function IndustriesTelecomsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] leading-tight mb-6">
            Telecommunications
          </h1>
          <p className="text-[#0a1628]/60 text-lg max-w-2xl font-normal leading-relaxed">
            Deep technical expertise serving MNOs, MVNOs and infrastructure vendors: from network AI and RAN modernisation to OSS/BSS integration and spectrum strategy.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>15+</p>
            <p className="type-label text-[#0a1628]/60">MNO Clients</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>40+</p>
            <p className="type-label text-[#0a1628]/60">RF Engineers</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>30</p>
            <p className="type-label text-[#0a1628]/60">Countries</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-heading text-[#0a1628] mb-4">
            Solutions for Telecoms
          </h2>
          <p className="text-[#0a1628]/60 mb-14 max-w-2xl font-normal text-[16px] leading-[1.7]">
            From greenfield network builds to incumbent transformation, AWTG delivers proven telecoms solutions across the full operator lifecycle.
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
              "Network AI for a Tier-1 UK MNO. 35% reduction in OPEX delivered through automated fault correlation and predictive maintenance across 12,000 cell sites."
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
