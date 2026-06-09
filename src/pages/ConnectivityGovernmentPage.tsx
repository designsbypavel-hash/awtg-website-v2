import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShield, faBuilding, faLock, faSitemap, faServer,
  faNetworkWired, faCloud, faWifi, faGlobe, faArrowTrendUp,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faGears,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faShield,
    title: 'Official Sensitive and classified data requirements',
    desc: 'Central government networks must handle data at Official Sensitive and above, requiring network architecture with appropriate classification-level controls, segmentation and information assurance.',
  },
  {
    icon: faBuilding,
    title: 'Ageing government network infrastructure',
    desc: 'Many government departments operate on legacy network infrastructure that limits digital modernisation. Replacing or augmenting this infrastructure requires careful planning to avoid service disruption.',
  },
  {
    icon: faSitemap,
    title: 'Whole-of-government connectivity',
    desc: 'Central government departments must connect to shared government services, cross-departmental platforms and CDDO-mandated infrastructure — requiring network designs that integrate with the wider government digital estate.',
  },
  {
    icon: faLock,
    title: 'Cyber resilience and threat exposure',
    desc: 'Government organisations are high-priority targets for nation-state and criminal cyber threats. Network security architecture must reflect the elevated threat profile that government status creates.',
  },
  {
    icon: faServer,
    title: 'Hybrid working and remote access security',
    desc: 'Government organisations have extended their remote working footprint significantly. Secure, accredited remote access solutions are essential to maintaining security posture for distributed workforces.',
  },
]

const capabilities = [
  {
    icon: faNetworkWired,
    title: 'Cross-government network connectivity',
    desc: 'Network infrastructure that connects government departments to PSN, GovWifi, Crown hosting and shared government digital platforms — meeting GDS and CDDO technical standards.',
  },
  {
    icon: faShieldHalved,
    title: 'High-assurance and classified networks',
    desc: 'Network solutions designed for Official Sensitive and above — with appropriate classification labelling, traffic segmentation and access controls aligned to NCSC and government security frameworks.',
  },
  {
    icon: faCloud,
    title: 'Government cloud and hybrid networking',
    desc: 'Connectivity to Crown Hosting, public cloud and government-approved cloud platforms — with appropriate security controls, data residency and accreditation documentation.',
  },
  {
    icon: faWifi,
    title: 'GovWifi and department wireless',
    desc: 'GovWifi deployment and departmental wireless infrastructure for government offices — enabling civil servants to connect securely and providing recognised GovWifi access across government estate.',
  },
  {
    icon: faGlobe,
    title: 'Secure remote and hybrid working',
    desc: 'Accredited remote access, VPN and zero-trust solutions for government departments enabling secure home and remote working for civil servants.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Network managed services',
    desc: 'Ongoing managed network services for government departments — with cleared personnel, appropriate security management and service reporting aligned to government standards.',
  },
]

const services = [
  {
    icon: faShield,
    title: 'PSN and government network compliance',
    desc: 'Network design and documentation support for PSN Code of Connection certification, GDS standards compliance and government security framework alignment.',
  },
  {
    icon: faNetworkWired,
    title: 'Central government WAN and connectivity',
    desc: 'Wide area network solutions for government departments connecting offices, data centres and remote workers across PSN-aligned and government-approved network infrastructure.',
  },
  {
    icon: faCloud,
    title: 'Government cloud connectivity',
    desc: 'Secure connectivity to government cloud platforms, Crown Hosting and public cloud — with the access controls and documentation required for government accreditation.',
  },
  {
    icon: faWifi,
    title: 'Departmental wireless and GovWifi',
    desc: 'GovWifi deployment and departmental wireless infrastructure for government offices and estate — meeting Cabinet Office and GDS requirements.',
  },
  {
    icon: faGears,
    title: 'Managed network services for government',
    desc: 'Ongoing network management, monitoring and support for government departments — with cleared staff, appropriate governance and service reporting.',
  },
]

const whyItems = [
  {
    icon: faShieldHalved,
    title: 'Government security framework expertise',
    desc: 'AWTG has experience delivering network infrastructure within UK government security frameworks — including PSN, NCSC guidance and government information classification requirements.',
  },
  {
    icon: faDiagramProject,
    title: 'Central government procurement experience',
    desc: 'We understand the governance frameworks and procurement routes through which government departments purchase network services — including Crown Commercial Service and G-Cloud routes.',
  },
  {
    icon: faLayerGroup,
    title: 'Complex estate delivery',
    desc: 'Government network programmes span complex, multi-site estates with diverse legacy infrastructure. AWTG has the project management and technical capability to deliver consistently across complex environments.',
  },
  {
    icon: faUserShield,
    title: 'Discretion and security awareness',
    desc: 'Working with government requires professional discretion, security awareness and an understanding of the accountability and transparency standards that public sector delivery demands.',
  },
]

export default function ConnectivityGovernmentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for government
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and delivers secure, accredited network infrastructure for central and local government — from PSN-aligned connectivity and government cloud networking to GovWifi and managed network services.
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
              Connectivity challenges in government
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Government network infrastructure operates under unique security, compliance and accountability pressures. These are the challenges AWTG helps central and local government organisations navigate.
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
              What AWTG delivers for government connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG designs government connectivity infrastructure that meets the security, compliance and operational demands of central and local government — with the documentation, accreditation support and ongoing management that government organisations require.
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
              AWTG structures government connectivity delivery around focused service areas aligned to the real infrastructure, security and compliance needs of government departments and public bodies.
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
              AWTG brings government security framework expertise, procurement experience and infrastructure delivery capability to central and local government network programmes.
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
        title="Connectivity for government organisations"
        subtitle="Speak to AWTG about secure, accredited network infrastructure for central government, departments and public bodies."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
