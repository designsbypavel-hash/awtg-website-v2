import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding, faShield, faWifi, faGlobe, faLock, faMicrochip,
} from '@fortawesome/free-solid-svg-icons'

const COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

const solutions = [
  { icon: faBuilding, title: 'Smart City Connectivity', desc: 'City-wide wireless infrastructure design and deployment: from sensor networks and connected streetlighting to integrated urban data platforms.' },
  { icon: faShield, title: 'Emergency Services Networks', desc: 'Mission-critical communications design for police, fire and ambulance services, including ESMCP-aligned 4G/5G transitional architectures.' },
  { icon: faWifi, title: 'PSBA/ESMCP Programmes', desc: 'Specialist delivery support for the Emergency Services Mobile Communications Programme, covering integration, testing and programme assurance.' },
  { icon: faGlobe, title: 'Digital Inclusion', desc: 'Connectivity programmes targeting underserved communities, rural broadband planning, and digital skills infrastructure for local authorities.' },
  { icon: faLock, title: 'Secure Government Communications', desc: 'Design and implementation of classified and sensitive communications networks, compliant with government security policy frameworks.' },
  { icon: faMicrochip, title: 'Local Authority IoT', desc: 'IoT platform deployment for waste management, environmental monitoring, parking, and asset tracking across council estates and public spaces.' },
]

export default function IndustriesPublicSectorPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] leading-tight mb-6">
            Public Sector
          </h1>
          <p className="text-[#0a1628]/60 text-lg max-w-2xl font-normal leading-relaxed">
            Trusted technology partner to central and local government, delivering secure, compliant and future-ready connectivity and digital infrastructure across the UK public sector.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>50+</p>
            <p className="type-label text-[#0a1628]/60">Public Sector Clients</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>CCS</p>
            <p className="type-label text-[#0a1628]/60">Crown Commercial Supplier</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>SC</p>
            <p className="type-label text-[#0a1628]/60">Cleared Personnel</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-heading text-[#0a1628] mb-4">
            Solutions for Public Sector
          </h2>
          <p className="text-[#0a1628]/60 mb-14 max-w-2xl font-normal text-[16px] leading-[1.7]">
            As a Crown Commercial Supplier with SC-cleared engineers, AWTG is fully accredited to support sensitive government programmes and public service infrastructure delivery.
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
              AWTG is a Crown Commercial Supplier, enabling public sector bodies to procure our services directly under compliant framework agreements, reducing procurement timelines and administrative overhead.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-[#228DC1] text-sm font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              About AWTG
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
