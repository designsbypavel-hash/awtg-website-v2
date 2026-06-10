import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBolt, faNetworkWired, faMicrochip, faLock, faServer, faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'

const COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

const solutions = [
  { icon: faBolt, title: 'Tactical Private 5G', desc: 'Rapidly deployable, hardened 5G private networks for tactical operations, providing high-throughput, low-latency communications in contested and austere environments.' },
  { icon: faNetworkWired, title: 'Secure Mesh Networking', desc: 'Self-healing mesh network architectures delivering resilient communications across distributed nodes without reliance on fixed infrastructure.' },
  { icon: faMicrochip, title: 'Battlefield IoT', desc: 'Ruggedised IoT sensor integration for situational awareness, asset tracking, environmental monitoring and force protection across operational theatres.' },
  { icon: faLock, title: 'Encrypted Communications', desc: 'End-to-end encrypted voice, data and video communications platforms designed and validated for defence security classifications.' },
  { icon: faServer, title: 'ISR Data Platforms', desc: 'Intelligence, Surveillance and Reconnaissance data infrastructure, processing, fusing and distributing multi-sensor data to operational decision-makers.' },
  { icon: faShieldHalved, title: 'NATO-Compatible Infrastructure', desc: 'Network architecture and protocol design aligned with NATO STANAG standards, enabling interoperability with allied forces and coalition operations.' },
]

export default function IndustriesDefencePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] leading-tight mb-6">
            Defence
          </h1>
          <p className="text-[#0a1628]/60 text-lg max-w-2xl font-normal leading-relaxed">
            Secure, mission-critical communications and private network solutions for defence, delivered by SC and DV cleared engineers with proven experience across MOD programmes and NATO-aligned environments.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>MOD</p>
            <p className="type-label text-[#0a1628]/60">Approved Supplier</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>SC/DV</p>
            <p className="type-label text-[#0a1628]/60">Cleared Staff</p>
          </div>
          <div>
            <p className="font-black text-[#0a1628] mb-1" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>15+</p>
            <p className="type-label text-[#0a1628]/60">Defence Deployments</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-heading text-[#0a1628] mb-4">
            Solutions for Defence
          </h2>
          <p className="text-[#0a1628]/60 mb-14 max-w-2xl font-normal text-[16px] leading-[1.7]">
            AWTG brings together classified-environment expertise, SC and DV cleared engineering capability, and cutting-edge private 5G technology to support the UK defence sector's most demanding connectivity requirements.
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
              AWTG is an MOD approved supplier with SC and DV cleared engineers available for classified programme delivery, ensuring continuity, security compliance and trusted access across the full project lifecycle.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 text-[#228DC1] text-sm font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Contact Defence Team
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
