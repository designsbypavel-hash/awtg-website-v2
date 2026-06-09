import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShieldHalved, faLock, faSatellite, faServer, faSitemap,
  faWifi, faNetworkWired, faMicrochip, faGears, faArrowTrendUp,
  faShield, faDiagramProject, faUserShield, faLayerGroup, faCloud,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faShieldHalved,
    title: 'Mission-critical reliability requirements',
    desc: 'Defence and space operations have zero tolerance for connectivity failure. Networks must operate at the highest levels of resilience, with redundancy and failover that meets mission-critical standards.',
  },
  {
    icon: faLock,
    title: 'Classified information handling',
    desc: 'Defence organisations operate across multiple security classifications. Network architecture must enforce strict segmentation, access control and information assurance aligned to MOD and government security standards.',
  },
  {
    icon: faSatellite,
    title: 'Contested and remote environments',
    desc: 'Defence and space assets often operate in remote, hostile or contested environments where conventional connectivity is unavailable, unreliable or vulnerable to interference.',
  },
  {
    icon: faSitemap,
    title: 'Multi-domain interoperability',
    desc: 'Modern defence operations require seamless connectivity across land, maritime, air, cyber and space domains — bridging platforms, command systems and partner organisations with different technical standards.',
  },
  {
    icon: faServer,
    title: 'Secure supply chain and industrial environments',
    desc: 'Defence industrial facilities, R&D sites and maintenance depots require secure, isolated network environments that protect intellectual property and classified programme information.',
  },
]

const capabilities = [
  {
    icon: faNetworkWired,
    title: 'Private mission-critical networks',
    desc: 'Dedicated private network infrastructure designed for the reliability, security classification and performance requirements of defence facilities and operational environments.',
  },
  {
    icon: faSatellite,
    title: 'Satellite and SATCOM connectivity',
    desc: 'Satellite communications solutions for remote and deployed environments where terrestrial connectivity is unavailable — supporting both data and voice in challenging conditions.',
  },
  {
    icon: faShieldHalved,
    title: 'High-assurance secure communications',
    desc: 'Encrypted communications infrastructure designed to handle classified information at appropriate security classification levels, aligned to government information assurance frameworks.',
  },
  {
    icon: faMicrochip,
    title: 'Edge computing and tactical networks',
    desc: 'Deployable edge computing and network infrastructure supporting real-time processing, command and control and situational awareness at the tactical edge.',
  },
  {
    icon: faWifi,
    title: 'Secure facility and campus wireless',
    desc: 'Private wireless infrastructure for defence facilities, R&D sites and industrial environments — with full security segmentation and classified network support.',
  },
  {
    icon: faCloud,
    title: 'Sovereign and private cloud connectivity',
    desc: 'Connectivity to sovereign cloud and private cloud environments for defence programmes requiring data residency, air-gapped or high-assurance cloud solutions.',
  },
]

const services = [
  {
    icon: faShieldHalved,
    title: 'Defence-grade private network infrastructure',
    desc: 'Design and deployment of private network infrastructure for defence facilities — meeting MOD security requirements with full documentation and accreditation support.',
  },
  {
    icon: faSatellite,
    title: 'Satellite and remote connectivity',
    desc: 'SATCOM and remote connectivity solutions for deployed operations, maritime platforms and remote sites where terrestrial network infrastructure is not available.',
  },
  {
    icon: faNetworkWired,
    title: 'Secure WAN for multi-site defence estates',
    desc: 'Managed wide area network solutions connecting defence facilities, MOD sites and industry partners across secure, accredited network infrastructure.',
  },
  {
    icon: faMicrochip,
    title: 'Edge and tactical network solutions',
    desc: 'Deployable connectivity and edge computing solutions for forward operating environments and tactical scenarios requiring rapid, secure network deployment.',
  },
  {
    icon: faGears,
    title: 'Network managed services for defence',
    desc: 'Ongoing managed network services with appropriate security clearances, cleared personnel and support frameworks aligned to defence operational requirements.',
  },
]

const whyItems = [
  {
    icon: faShield,
    title: 'Government security framework expertise',
    desc: 'AWTG has experience delivering network infrastructure within UK government and defence security frameworks, with understanding of information assurance and accreditation requirements.',
  },
  {
    icon: faDiagramProject,
    title: 'Complex infrastructure delivery',
    desc: 'AWTG delivers large-scale, complex network programmes — including our 500-hectare private network deployment — demonstrating the engineering capability that demanding environments require.',
  },
  {
    icon: faLayerGroup,
    title: 'Resilience and reliability engineering',
    desc: 'Every AWTG network solution for critical environments is engineered with resilience at the core — redundant paths, failover design and high-availability architecture that meets operational requirements.',
  },
  {
    icon: faUserShield,
    title: 'Trusted delivery partner',
    desc: 'AWTG operates as a trusted delivery partner, with the discretion, security awareness and professional standards that working with defence and space organisations requires.',
  },
]

export default function ConnectivitySpaceDefencePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for space and defence
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and delivers mission-critical connectivity infrastructure for defence organisations, space programmes and critical national infrastructure — where reliability, security and resilience are non-negotiable.
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
              Connectivity challenges in defence and space
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Defence and space environments place demands on connectivity that no standard enterprise solution can meet. These are the unique challenges AWTG is equipped to address.
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
              What AWTG delivers for defence and space connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG designs connectivity solutions that meet the exacting demands of defence operations and space programmes — from secure facility networks and SATCOM to edge infrastructure and high-assurance communications.
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
              AWTG structures defence and space connectivity delivery around focused service areas aligned to the real operational, security and infrastructure needs of this sector.
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
              AWTG brings the technical depth, security awareness and operational rigour that defence and space programmes demand from their connectivity partners.
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

      <CTASection
        title="Connectivity for defence and space programmes"
        subtitle="Speak to AWTG about mission-critical connectivity infrastructure for defence facilities, deployed environments and space operations."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
