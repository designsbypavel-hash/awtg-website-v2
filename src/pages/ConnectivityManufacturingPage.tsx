import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faIndustry, faMicrochip, faShield, faSitemap, faServer,
  faWifi, faNetworkWired, faGears, faArrowTrendUp,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faCloud,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faIndustry,
    title: 'OT and IT network convergence',
    desc: 'Manufacturing environments increasingly require convergence of operational technology and IT networks — creating security and architecture challenges where legacy OT systems were never designed for IP connectivity.',
  },
  {
    icon: faMicrochip,
    title: 'Industrial IoT and connected machinery',
    desc: 'Modern manufacturing relies on a growing estate of connected machines, sensors and monitoring equipment. Managing device connectivity, security and performance at scale requires dedicated network design.',
  },
  {
    icon: faShield,
    title: 'OT security and cyber resilience',
    desc: 'Manufacturing and industrial environments are high-priority targets for ransomware and nation-state attacks. OT security requires specialist approaches distinct from standard enterprise cybersecurity.',
  },
  {
    icon: faSitemap,
    title: 'Large campus and multi-building environments',
    desc: 'Manufacturing plants, warehouses and distribution centres span large footprints with challenging RF environments, metallic interference and harsh conditions for wireless infrastructure.',
  },
  {
    icon: faServer,
    title: 'Real-time operational requirements',
    desc: 'Manufacturing processes depend on real-time data exchange between machines, control systems and enterprise platforms. Network latency or packet loss directly impacts production quality and efficiency.',
  },
]

const capabilities = [
  {
    icon: faWifi,
    title: 'Private 5G and LTE for manufacturing',
    desc: 'Dedicated private wireless networks delivering the performance, coverage and reliability that industrial automation, AGVs, robotics and smart manufacturing require.',
  },
  {
    icon: faMicrochip,
    title: 'Industrial IoT connectivity and management',
    desc: 'Connectivity infrastructure for connected machines, production sensors, environmental monitoring and asset tracking — with appropriate segmentation from enterprise IT networks.',
  },
  {
    icon: faNetworkWired,
    title: 'OT and IT network architecture',
    desc: 'Network design that safely enables OT and IT convergence — protecting legacy industrial systems while enabling real-time data flow to enterprise platforms and cloud analytics.',
  },
  {
    icon: faShieldHalved,
    title: 'OT and industrial cyber security',
    desc: 'Security architecture and monitoring solutions designed for operational technology environments — protecting SCADA, PLC and industrial control systems from cyber threats.',
  },
  {
    icon: faCloud,
    title: 'Edge computing and cloud integration',
    desc: 'Edge infrastructure supporting real-time data processing at the factory floor, with secure connectivity to cloud platforms for analytics, digital twin and enterprise applications.',
  },
  {
    icon: faGears,
    title: 'Network managed services for manufacturing',
    desc: 'Ongoing managed network services for manufacturing facilities — with support models aligned to shift patterns, planned maintenance windows and production continuity requirements.',
  },
]

const services = [
  {
    icon: faWifi,
    title: 'Private wireless for industrial environments',
    desc: 'Private 5G and LTE network design and deployment for manufacturing facilities — covering production floors, warehouses, yards and complex multi-building campus environments.',
  },
  {
    icon: faMicrochip,
    title: 'Industrial IoT connectivity',
    desc: 'Connectivity infrastructure and device management for connected manufacturing equipment, production monitoring and industrial IoT deployments.',
  },
  {
    icon: faNetworkWired,
    title: 'OT network design and modernisation',
    desc: 'OT network architecture design that protects legacy industrial systems while enabling safe IT/OT convergence and real-time data integration.',
  },
  {
    icon: faShieldHalved,
    title: 'OT security and monitoring',
    desc: 'Security monitoring, asset discovery and threat detection for operational technology environments — using OT-specific tooling designed for industrial control system environments.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Digital manufacturing connectivity',
    desc: 'Network infrastructure supporting smart manufacturing, digital twin, predictive maintenance and Industry 4.0 initiatives — connecting factory floor data to enterprise and cloud platforms.',
  },
]

const whyItems = [
  {
    icon: faDiagramProject,
    title: 'Proven in large-scale industrial environments',
    desc: 'AWTG has delivered private wireless networks at significant scale — including a 500-hectare campus deployment — demonstrating the engineering and project management capability that industrial programmes require.',
  },
  {
    icon: faShieldHalved,
    title: 'OT and industrial security expertise',
    desc: 'We understand the specific security requirements of industrial control systems, SCADA and OT environments — applying appropriate approaches that protect operational continuity.',
  },
  {
    icon: faLayerGroup,
    title: 'End-to-end industrial network delivery',
    desc: 'From initial survey and design through deployment, integration and ongoing managed service, AWTG delivers complete industrial network programmes with a single point of accountability.',
  },
  {
    icon: faUserShield,
    title: 'Production continuity as a design principle',
    desc: 'Manufacturing network infrastructure is designed with zero-tolerance for disruption to production. Resilience, redundancy and failover are engineered into every AWTG deployment from the start.',
  },
]

export default function ConnectivityManufacturingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for manufacturing
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and delivers private wireless, industrial IoT connectivity and OT network infrastructure for manufacturing facilities — supporting smart manufacturing, automation and Industry 4.0 programmes.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Talk to our experts
            </Link>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              Connectivity challenges in manufacturing
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Manufacturing connectivity sits at the intersection of operational technology, industrial IoT and enterprise IT — with production continuity and OT security as non-negotiable requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(c => (
              <div key={c.title} className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What connectivity supports ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              What AWTG delivers for manufacturing connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG designs manufacturing connectivity infrastructure that supports smart factory operations, industrial automation and OT security — with the resilience and performance that production environments demand.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(c => (
              <div key={c.title} className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service blocks ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              How AWTG can help
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              AWTG structures manufacturing connectivity delivery around focused service areas aligned to the specific infrastructure, OT and Industry 4.0 requirements of modern manufacturing operations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {services.map(s => (
              <div key={s.title} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={s.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-card-heading text-[#0a1628] text-[15px] mb-2">{s.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AWTG ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              Why AWTG
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG brings proven large-scale industrial network delivery, OT security expertise and the manufacturing sector understanding that complex connectivity programmes require.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {whyItems.map(w => (
              <div key={w.title} className="flex gap-5">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center text-[#228DC1] mt-0.5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={w.icon} style={{ fontSize: 17 }} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-1.5">{w.title}</h3>
                  <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scale note ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="border-l-2 border-[#228DC1] pl-8">
            <p className="text-[#0a1628]/80 text-xl font-normal leading-relaxed max-w-3xl">
              AWTG deployed a campus-wide private 5G network across 500 hectares for a major UK port operator — enabling autonomous vehicle coordination, real-time cargo tracking and digital twin integration. The same engineering capability applies to large-scale manufacturing environments.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 text-[#228DC1] text-sm font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Speak to our team
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Connectivity for manufacturing and Industry 4.0"
        subtitle="Speak to AWTG about private wireless, industrial IoT and OT network infrastructure for your manufacturing operations."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
