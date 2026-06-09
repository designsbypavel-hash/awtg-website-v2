import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShield, faHospital, faMicrochip, faLock, faSitemap,
  faWifi, faCloud, faMobile, faArrowTrendUp, faServer,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faGears,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faShield,
    title: 'Data Security and Protection Toolkit compliance',
    desc: 'NHS and healthcare organisations must maintain DSPT compliance across all network infrastructure. Non-compliant connectivity creates risk exposure that can have serious regulatory and operational consequences.',
  },
  {
    icon: faHospital,
    title: 'Legacy clinical infrastructure',
    desc: 'Many healthcare sites operate on connectivity infrastructure that predates modern clinical systems, creating bottlenecks and security vulnerabilities that limit digital health transformation.',
  },
  {
    icon: faMicrochip,
    title: 'Proliferating medical devices and IoMT',
    desc: 'The growth of connected medical devices, wearables and monitoring equipment creates significant network complexity. Each device requires secure, reliable connectivity to function safely.',
  },
  {
    icon: faSitemap,
    title: 'Multi-site care network connectivity',
    desc: 'Integrated care systems require consistent, reliable connectivity across hospital sites, community health facilities, GP practices and virtual care environments — often on separate legacy network architectures.',
  },
  {
    icon: faLock,
    title: 'Patient data and clinical confidentiality',
    desc: 'Healthcare network infrastructure must ensure patient data is protected in transit and at rest, with full visibility and control to meet GDPR and NHS data governance requirements.',
  },
]

const capabilities = [
  {
    icon: faWifi,
    title: 'Private wireless networks for clinical environments',
    desc: 'Dedicated private wireless infrastructure designed for the density, reliability and security requirements of NHS trusts and healthcare facilities.',
  },
  {
    icon: faMicrochip,
    title: 'Secure IoMT and medical device connectivity',
    desc: 'Connectivity architecture for medical devices, patient monitoring equipment and clinical IoT that maintains full security segmentation and management visibility.',
  },
  {
    icon: faCloud,
    title: 'Healthcare cloud connectivity',
    desc: 'Secure, high-performance cloud connectivity for NHS and healthcare systems — supporting access to EPR platforms, diagnostic imaging and clinical applications.',
  },
  {
    icon: faSitemap,
    title: 'Integrated care network design',
    desc: 'Network architecture that connects hospital sites, community settings, GP practices and virtual care into a unified, manageable healthcare network estate.',
  },
  {
    icon: faMobile,
    title: 'Clinical mobile and staff device connectivity',
    desc: 'Reliable wireless coverage for clinical staff using mobile devices, tablets and laptops across wards, theatres, outpatient and community settings.',
  },
  {
    icon: faServer,
    title: 'Secure edge and on-premises infrastructure',
    desc: 'Edge computing and on-premises infrastructure designed for healthcare environments where data sovereignty and low-latency processing are essential requirements.',
  },
]

const services = [
  {
    icon: faShield,
    title: 'DSPT-compliant network infrastructure',
    desc: 'Design and deployment of network infrastructure aligned to NHS Data Security and Protection Toolkit standards, with documented compliance evidence and audit support.',
  },
  {
    icon: faWifi,
    title: 'Private wireless for NHS trusts',
    desc: 'Campus-wide private wireless network design for hospital sites, delivering reliable coverage for clinical and administrative operations across complex built environments.',
  },
  {
    icon: faMicrochip,
    title: 'IoMT connectivity and device management',
    desc: 'Secure connectivity and network management for connected medical devices, patient monitoring equipment and clinical IoT deployments.',
  },
  {
    icon: faCloud,
    title: 'Healthcare SD-WAN and cloud networking',
    desc: 'Managed SD-WAN and cloud connectivity solutions for NHS and healthcare organisations connecting multiple sites, cloud platforms and virtual care environments.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Network managed services',
    desc: 'Ongoing managed network services for healthcare organisations — including monitoring, incident response, patching and reporting aligned to NHS service requirements.',
  },
]

const whyItems = [
  {
    icon: faShieldHalved,
    title: 'Deep NHS and healthcare compliance expertise',
    desc: 'AWTG has direct experience designing and delivering connectivity infrastructure within NHS frameworks, including DSPT compliance documentation and NHS Digital engagement.',
  },
  {
    icon: faDiagramProject,
    title: 'Complex clinical environment experience',
    desc: 'Healthcare connectivity requires understanding of clinical workflows, building constraints and device requirements that general enterprise network providers often lack.',
  },
  {
    icon: faLayerGroup,
    title: 'End-to-end infrastructure delivery',
    desc: 'From network design through survey, deployment and ongoing support, AWTG delivers complete infrastructure programmes rather than point solutions.',
  },
  {
    icon: faUserShield,
    title: 'Patient safety as a design principle',
    desc: 'Every connectivity solution for healthcare is designed with patient safety and clinical continuity at the core — ensuring reliable access to critical systems at all times.',
  },
  {
    icon: faGears,
    title: 'Integration with clinical systems and applications',
    desc: 'AWTG designs network infrastructure that supports seamless operation of EPR systems, diagnostic platforms, telehealth applications and clinical device management solutions.',
  },
]

export default function ConnectivityHealthPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for healthcare
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and delivers secure, DSPT-compliant connectivity infrastructure for NHS trusts, healthcare organisations and integrated care systems — from private wireless to IoMT and cloud networking.
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
              Connectivity challenges in healthcare
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Healthcare organisations face unique connectivity demands — combining rigorous compliance requirements with the reliability and security needed in environments where network failure has direct patient impact.
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
              What AWTG delivers for healthcare connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG designs healthcare connectivity infrastructure that meets the specific demands of clinical environments — from complex hospital campuses to distributed community care networks — with compliance, security and clinical continuity built in.
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
              AWTG structures healthcare connectivity delivery around focused service areas, each aligned to the specific infrastructure, compliance and operational needs of NHS and private healthcare organisations.
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
              Healthcare connectivity is not a commodity service. AWTG brings the clinical environment understanding, compliance expertise and infrastructure delivery experience that this sector demands.
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

      {/* ── Compliance note ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="border-l-2 border-[#228DC1] pl-8">
            <p className="text-[#0a1628]/80 text-xl font-normal leading-relaxed max-w-3xl">
              All AWTG healthcare connectivity deployments are designed in alignment with the NHS Data Security and Protection Toolkit, with documented compliance evidence, 99.99% uptime SLAs and incident response procedures aligned to NHS England standards.
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
        title="Connectivity for healthcare organisations"
        subtitle="Speak to AWTG about secure, DSPT-compliant connectivity infrastructure for your NHS trust or healthcare organisation."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
