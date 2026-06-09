import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShield, faBuilding, faSitemap, faLock, faServer,
  faWifi, faCloud, faArrowTrendUp, faGlobe, faNetworkWired,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faGears,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faShield,
    title: 'PSN and security accreditation requirements',
    desc: 'Public sector networks must meet PSN Code of Connection and associated accreditation requirements. These create significant design constraints that general-purpose network providers are often not equipped to address.',
  },
  {
    icon: faBuilding,
    title: 'Legacy infrastructure across multiple sites',
    desc: 'Many public sector organisations operate across dozens of sites running different legacy network architectures, creating management complexity and security inconsistency.',
  },
  {
    icon: faSitemap,
    title: 'Secure inter-agency connectivity',
    desc: 'Delivering joined-up public services requires secure connectivity between agencies with different network standards, security classifications and IT governance frameworks.',
  },
  {
    icon: faLock,
    title: 'Classified and sensitive data protection',
    desc: 'Public sector connectivity must protect data at multiple sensitivity levels, with clear segmentation and access controls that meet the standards of government information frameworks.',
  },
  {
    icon: faServer,
    title: 'Procurement and commercial frameworks',
    desc: 'Public sector organisations must procure network services within complex commercial frameworks including G-Cloud, Crown Commercial Service and sector-specific frameworks.',
  },
]

const capabilities = [
  {
    icon: faNetworkWired,
    title: 'PSN-aligned network infrastructure',
    desc: 'Design and delivery of network infrastructure aligned to the Public Services Network Code of Connection and associated government security frameworks.',
  },
  {
    icon: faSitemap,
    title: 'Multi-site WAN and SD-WAN',
    desc: 'Managed wide area network and SD-WAN solutions connecting public sector sites into a consistent, manageable and secure network estate.',
  },
  {
    icon: faCloud,
    title: 'Government cloud connectivity',
    desc: 'Secure connectivity to government cloud platforms including PSN, JANET and public cloud environments — with appropriate segmentation and access controls.',
  },
  {
    icon: faWifi,
    title: 'Campus and facility wireless',
    desc: 'Reliable wireless network infrastructure for public sector facilities — from council offices and courts to libraries, job centres and citizen-facing sites.',
  },
  {
    icon: faGlobe,
    title: 'Secure remote and hybrid working',
    desc: 'Zero-trust remote access and VPN solutions that enable public sector staff to work securely from remote locations while maintaining network security controls.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Network managed services',
    desc: 'Ongoing managed network services for public sector organisations — covering monitoring, maintenance, patching, incident response and service reporting.',
  },
]

const services = [
  {
    icon: faShield,
    title: 'PSN Code of Connection alignment',
    desc: 'Network design, documentation and engagement support for organisations seeking or maintaining PSN Code of Connection certification.',
  },
  {
    icon: faSitemap,
    title: 'Public sector SD-WAN deployment',
    desc: 'Managed SD-WAN solutions that modernise multi-site connectivity for councils, government agencies and public bodies — with appropriate security controls built in.',
  },
  {
    icon: faCloud,
    title: 'Secure cloud and hybrid network connectivity',
    desc: 'Connectivity solutions for public sector organisations migrating to cloud platforms, including secure government cloud connectivity and hybrid networking.',
  },
  {
    icon: faWifi,
    title: 'Public facility wireless networks',
    desc: 'Wireless network design and deployment for citizen-facing public sector facilities, balancing staff operational needs with secure visitor and public access.',
  },
  {
    icon: faGears,
    title: 'Network managed services for public sector',
    desc: 'Ongoing managed network services with SLAs, service reporting and support aligned to public sector operational requirements and procurement frameworks.',
  },
]

const whyItems = [
  {
    icon: faShieldHalved,
    title: 'Government security framework expertise',
    desc: 'AWTG has direct experience designing and delivering network infrastructure within government security frameworks, including PSN and associated accreditation requirements.',
  },
  {
    icon: faDiagramProject,
    title: 'Public sector procurement experience',
    desc: 'We understand the commercial and governance frameworks under which public sector organisations must procure services, and can support engagement through appropriate routes.',
  },
  {
    icon: faLayerGroup,
    title: 'Multi-site infrastructure delivery',
    desc: 'AWTG has delivered complex multi-site network programmes for organisations with large, distributed footprints — managing design, procurement and delivery across multiple locations simultaneously.',
  },
  {
    icon: faUserShield,
    title: 'Security and data protection first',
    desc: 'Every AWTG network deployment for the public sector is designed around government security standards, with appropriate classification, segmentation and access controls built in from the outset.',
  },
]

export default function ConnectivityPublicSectorPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for the public sector
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and delivers secure network infrastructure for public sector organisations — from PSN-aligned wide area networks and campus wireless to cloud connectivity and managed network services.
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
              Connectivity challenges in the public sector
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Public sector connectivity sits at the intersection of security, compliance, legacy infrastructure and commercial constraints. These are the pressures AWTG helps organisations navigate.
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
              What AWTG delivers for public sector connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG designs connectivity infrastructure that meets the specific security, compliance and operational demands of public sector organisations — from central government to local councils and public bodies.
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
              AWTG structures public sector connectivity delivery around focused service areas aligned to the real infrastructure challenges and compliance requirements of government organisations.
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
              AWTG brings public sector connectivity experience, government security framework expertise and end-to-end infrastructure delivery capability — from initial design through ongoing managed service.
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
        title="Connectivity for public sector organisations"
        subtitle="Speak to AWTG about secure, compliant network infrastructure for government, councils and public bodies."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
