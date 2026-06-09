import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSitemap, faWifi, faMicrochip, faShield,
  faNetworkWired, faCloud, faGears, faArrowTrendUp,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faMobile,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faSitemap,
    title: 'Remote and temporary site connectivity',
    desc: 'Engineering and construction projects operate from remote locations, temporary sites and brownfield environments where permanent connectivity infrastructure does not exist and needs to be rapidly deployed.',
  },
  {
    icon: faWifi,
    title: 'High-mobility workforce',
    desc: 'Engineering teams move between sites, within large facilities and across complex structures. Reliable wireless connectivity must follow the workforce rather than being confined to fixed locations.',
  },
  {
    icon: faMicrochip,
    title: 'Connected equipment and asset monitoring',
    desc: 'Engineering operations rely on connected plant, machinery and assets for real-time monitoring, remote diagnostics, predictive maintenance and safety monitoring — requiring reliable IoT connectivity.',
  },
  {
    icon: faShield,
    title: 'Security in operational environments',
    desc: 'Engineering sites often host sensitive designs, proprietary processes and critical infrastructure. Network security must protect intellectual property and operational data without impeding site operations.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Project lifecycle connectivity requirements',
    desc: 'Engineering connectivity needs change through project phases — from initial site surveys and construction through commissioning, handover and ongoing asset management — requiring flexible, scalable solutions.',
  },
]

const capabilities = [
  {
    icon: faWifi,
    title: 'Temporary and deployable wireless networks',
    desc: 'Rapidly deployable wireless network infrastructure for engineering sites, construction projects and temporary operational environments — providing reliable connectivity from day one.',
  },
  {
    icon: faMicrochip,
    title: 'Asset and equipment IoT connectivity',
    desc: 'Connectivity infrastructure for connected engineering assets — plant machinery, vehicles, sensors and monitoring equipment — supporting real-time visibility and remote management.',
  },
  {
    icon: faNetworkWired,
    title: 'Site and compound networking',
    desc: 'Structured site network infrastructure for construction compounds, engineering offices and operational control centres — providing reliable wired and wireless connectivity for site teams.',
  },
  {
    icon: faMobile,
    title: 'Mobile team connectivity',
    desc: 'Private wireless and mobile connectivity solutions that enable engineering teams to access project data, drawings, BIM models and communication tools while mobile across large sites.',
  },
  {
    icon: faCloud,
    title: 'Cloud and project data connectivity',
    desc: 'High-bandwidth internet and cloud connectivity for engineering sites — supporting access to project management platforms, BIM collaboration, engineering software and video conferencing.',
  },
  {
    icon: faShieldHalved,
    title: 'Secure site and project network',
    desc: 'Network security architecture for engineering environments — protecting project data, design intellectual property and operational systems from unauthorised access.',
  },
]

const services = [
  {
    icon: faWifi,
    title: 'Deployable site wireless networks',
    desc: 'Rapid deployment wireless solutions for engineering and construction sites — from initial ground clearance through to long-term operational phases, sized for site scale and duration.',
  },
  {
    icon: faMicrochip,
    title: 'Engineering IoT and asset connectivity',
    desc: 'Connectivity infrastructure and device management for connected plant, equipment and monitoring systems deployed across engineering sites and operational environments.',
  },
  {
    icon: faNetworkWired,
    title: 'Site compound and office networking',
    desc: 'Wired and wireless network infrastructure for engineering site offices, welfare facilities and control rooms — providing reliable connectivity aligned to project duration.',
  },
  {
    icon: faCloud,
    title: 'Internet and WAN connectivity for remote sites',
    desc: 'High-bandwidth internet connectivity for remote engineering sites — using fixed, wireless or satellite solutions depending on location and bandwidth requirements.',
  },
  {
    icon: faGears,
    title: 'Project lifecycle network management',
    desc: 'Managed network services that flex with engineering project phases — from initial deployment through commissioning support to decommission or handover to permanent operations.',
  },
]

const whyItems = [
  {
    icon: faDiagramProject,
    title: 'Large-scale infrastructure delivery',
    desc: 'AWTG has delivered connectivity infrastructure across complex, large-scale environments — including our 500-hectare private network deployment — demonstrating the scale and engineering depth that major projects require.',
  },
  {
    icon: faWifi,
    title: 'Rapid deployment capability',
    desc: 'Engineering projects cannot wait for extended network design cycles. AWTG has the equipment, processes and expertise to deploy reliable connectivity rapidly when projects demand it.',
  },
  {
    icon: faLayerGroup,
    title: 'Flexible, project-aligned commercial model',
    desc: 'Engineering connectivity often needs to align with project phases and budgets. AWTG provides commercial flexibility that matches network services to project lifecycle requirements.',
  },
  {
    icon: faUserShield,
    title: 'Single-supplier programme management',
    desc: 'Managing multiple network suppliers across an engineering programme creates risk and complexity. AWTG provides a single point of accountability for all connectivity requirements across a project lifecycle.',
  },
]

export default function ConnectivityEngineeringPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for engineering
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and deploys connectivity infrastructure for engineering projects and operations — from deployable site wireless and engineering IoT to remote site internet and project lifecycle network management.
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
              Connectivity challenges in engineering
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Engineering connectivity must serve mobile workforces, connected assets and project teams across temporary, remote and complex physical environments. These are the pressures AWTG helps address.
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
              What AWTG delivers for engineering connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG designs engineering connectivity that adapts to the realities of construction and engineering environments — temporary infrastructure, mobile workforces and connected assets across challenging physical conditions.
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
              AWTG structures engineering connectivity delivery around focused service areas aligned to the practical realities of engineering projects and operational environments.
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
              AWTG brings large-scale infrastructure delivery experience, rapid deployment capability and project-lifecycle commercial flexibility to engineering connectivity programmes.
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
        title="Connectivity for engineering projects and operations"
        subtitle="Speak to AWTG about site wireless, asset IoT connectivity and network infrastructure for engineering programmes."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
