import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping, faShield, faSitemap, faWifi, faMicrochip,
  faNetworkWired, faCloud, faArrowTrendUp, faLock,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faGears,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faCartShopping,
    title: 'PCI DSS compliance requirements',
    desc: 'Retail and commerce organisations handling card payments must maintain PCI DSS compliance across network infrastructure. Card data environments require strict segregation, monitoring and access control.',
  },
  {
    icon: faSitemap,
    title: 'High branch and site count',
    desc: 'Retail businesses operate across many sites — stores, distribution centres, offices and fulfilment locations — each requiring reliable, consistent and secure connectivity managed centrally.',
  },
  {
    icon: faWifi,
    title: 'Customer and guest Wi-Fi',
    desc: 'Providing customer Wi-Fi in retail environments requires careful separation from business-critical networks, with appropriate access controls, content filtering and terms of use enforcement.',
  },
  {
    icon: faMicrochip,
    title: 'IoT, EPOS and retail technology',
    desc: 'Modern retail environments rely on a growing estate of connected devices — EPOS systems, digital signage, self-checkout, CCTV and inventory management — all requiring reliable, segmented connectivity.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Uptime and trading continuity',
    desc: 'Network outages in retail environments have immediate revenue impact. Connectivity infrastructure must be resilient, with failover options that protect trading continuity during primary link failures.',
  },
]

const capabilities = [
  {
    icon: faNetworkWired,
    title: 'Retail branch and SD-WAN connectivity',
    desc: 'Managed SD-WAN solutions connecting retail branches and multi-site estates with consistent, reliable and centrally managed connectivity — with built-in failover and traffic prioritisation.',
  },
  {
    icon: faShield,
    title: 'PCI DSS network segmentation',
    desc: 'Network architecture and segmentation design that meets PCI DSS requirements — isolating card data environments, controlling access and providing the monitoring and logging that QSA assessments require.',
  },
  {
    icon: faWifi,
    title: 'Customer Wi-Fi and guest access',
    desc: 'Managed customer Wi-Fi solutions for retail environments — with appropriate separation from business networks, content filtering, splash page branding and usage analytics.',
  },
  {
    icon: faMicrochip,
    title: 'EPOS and retail IoT connectivity',
    desc: 'Connectivity infrastructure designed for the reliability and performance that EPOS systems, self-checkout and retail IoT devices require — with appropriate segmentation from customer and staff networks.',
  },
  {
    icon: faCloud,
    title: 'Cloud and ecommerce connectivity',
    desc: 'High-performance internet and cloud connectivity for ecommerce platforms, fulfilment systems and retail cloud applications — with the bandwidth and reliability that online trading requires.',
  },
  {
    icon: faLock,
    title: 'Network security and threat management',
    desc: 'Retail network security solutions including firewall management, intrusion detection, vulnerability scanning and security monitoring aligned to PCI DSS and retail cyber security requirements.',
  },
]

const services = [
  {
    icon: faNetworkWired,
    title: 'Retail SD-WAN and branch connectivity',
    desc: 'Managed SD-WAN deployment for retail chains — connecting stores, distribution centres and offices with centrally managed, resilient and cost-effective connectivity.',
  },
  {
    icon: faShield,
    title: 'PCI DSS network compliance',
    desc: 'Network design, segmentation and documentation services for retail organisations seeking or maintaining PCI DSS compliance — with ongoing assessment support.',
  },
  {
    icon: faWifi,
    title: 'Customer and guest Wi-Fi',
    desc: 'Customer-facing Wi-Fi solutions for retail environments — branded, monitored, separate from business networks and compliant with content filtering requirements.',
  },
  {
    icon: faMicrochip,
    title: 'Retail IoT and device connectivity',
    desc: 'Connectivity infrastructure for the growing estate of connected retail technology — from EPOS and digital signage to inventory management and environmental monitoring.',
  },
  {
    icon: faGears,
    title: 'Managed network services for retail',
    desc: 'Ongoing managed network services for retail organisations — covering monitoring, support, patching and incident response aligned to trading hours and business continuity requirements.',
  },
]

const whyItems = [
  {
    icon: faShieldHalved,
    title: 'PCI DSS and retail security expertise',
    desc: 'AWTG has experience designing network infrastructure that meets the specific segmentation, monitoring and access control requirements of PCI DSS compliance for retail environments.',
  },
  {
    icon: faDiagramProject,
    title: 'Multi-site deployment capability',
    desc: 'Retail network programmes require consistent delivery across many sites simultaneously. AWTG has the programme management and technical delivery capability to manage complex multi-site rollouts.',
  },
  {
    icon: faLayerGroup,
    title: 'Business continuity focus',
    desc: 'We design retail connectivity with trading continuity as a primary concern — resilient architectures, failover options and rapid incident response to minimise the impact of any outages.',
  },
  {
    icon: faUserShield,
    title: 'Ongoing managed service partnership',
    desc: 'Retail organisations need reliable, responsive network partners. AWTG provides managed services with the responsiveness and commercial flexibility that multi-site retail operations require.',
  },
]

export default function ConnectivityCommercePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for commerce and retail
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and delivers retail and commerce network infrastructure — from multi-site SD-WAN and PCI DSS-compliant segmentation to customer Wi-Fi and retail IoT connectivity.
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
              Connectivity challenges in retail
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Retail and commerce network infrastructure must support trading continuity, PCI DSS compliance and the growing complexity of connected retail technology. These are the pressures AWTG helps address.
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
              What AWTG delivers for retail connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG designs connectivity infrastructure for retail and commerce organisations that combines reliable trading connectivity with the security controls, compliance alignment and management visibility that modern retail requires.
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
              AWTG structures retail connectivity delivery around focused service areas aligned to the operational, compliance and technology needs of retail chains and commerce businesses.
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
              AWTG brings retail network expertise, PCI DSS compliance experience and multi-site delivery capability to commerce and retail connectivity programmes.
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
        title="Connectivity for retail and commerce"
        subtitle="Speak to AWTG about network infrastructure for retail chains, ecommerce operations and commerce businesses."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
