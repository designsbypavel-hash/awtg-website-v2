import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAward, faLock, faLeaf, faUserShield, faServer, faMicrochip,
  faShieldHalved, faShield, faUserSecret,
  faPlane, faLandmark, faCloud,
  faMoneyBillWave, faNetworkWired,
  faMedal, faRocket,
  faTowerCell, faGlobe, faWifi, faLink, faSignal, faVrCardboard,
  faLocationDot, faBroadcastTower,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import CTASection from '@/components/CTASection'

type CertItem = { name: string; icon: IconDefinition; desc: string }
type CertGroup = { label: string; image: string; items: CertItem[] }

const certificationGroups: CertGroup[] = [
  {
    label: 'ISO & Cyber Security',
    image: '/images/insights/data-centre.jpg',
    items: [
      { name: 'ISO 9001: 2015',         icon: faAward,        desc: 'ISO 9001 is a globally accepted standard for Quality Management Systems (QMS). Organisations that adhere to it are demonstrating their capacity to continually supply products and services that satisfy both customer and governmental needs. This is the most commonly adopted QMS around the world.' },
      { name: 'ISO IEC 27001',           icon: faLock,         desc: 'ISO/IEC 27001 is a globally-recognised standard of security for information systems. Its principles of best-practice provide organisations the guidance they need to create an ISMS and properly secure the people, processes, and technology of their business.' },
      { name: 'ISO 14001:2015',          icon: faLeaf,         desc: 'ISO 14001 is a globally agreed standard that sets out the requirements for an environmental management system. It helps organisations improve their environmental performance through more efficient use of resources and reduction of waste.' },
      { name: 'ISO 45001:2018',          icon: faUserShield,   desc: 'ISO 45001 is a globally accepted standard that specifies requirements for an occupational health and safety (OH&S) management system, providing a framework for organizations to manage risks and improve OH&S performance.' },
      { name: 'ISO 20000:2018',          icon: faServer,       desc: 'ISO/IEC 20000-1:2018 is an international standard for IT service management (ITSM), providing requirements for organizations to establish, implement, maintain and continually improve a service management system focused on delivering value.' },
      { name: 'ISO/IEC 42001 – AI Management System', icon: faMicrochip, desc: 'ISO/IEC 42001 provides the framework and requirements for organisations to establish, implement and maintain responsible, ethical, and risk-based governance of AI systems, ensuring transparency, accountability and trust.' },
      { name: 'Cyber Essentials',        icon: faShieldHalved, desc: 'Cyber Essentials Basic is an assessment tool that helps companies evaluate and adjust their digital security measures to the baseline standards of Cyber Essentials, identifying potential vulnerabilities in devices, networks and protocols.' },
      { name: 'Cyber Essentials Plus',   icon: faShield,       desc: "Cyber Essentials Plus goes beyond the standard self-assessment questionnaire and requires an audit of IT systems by a certified auditor to ensure appropriate controls are in place across the organisation's network." },
      { name: 'CREST Penetration Testing', icon: faUserSecret, desc: "This certificate confirms that AWTG's Vulnerability Assessment and Penetration Test for the Kai Application was conducted in line with industry best practices, including OWASP, NIST, ISO 27001:2022 and CREST." },
    ],
  },
  {
    label: 'Supplier Accreditation',
    image: '/images/insights/public-sector.jpg',
    items: [
      { name: 'JOSCAR',                           icon: faPlane,    desc: 'JOSCAR is the accreditation and compliance system for the defence aerospace sectors including prime contractors, civil aviation and security.' },
      { name: 'Crown Commercial Service Supplier', icon: faLandmark, desc: 'The Crown Commercial Service is the biggest public procurement organisation in the UK that acts as the central purchasing body for the government and across the public and third sectors.' },
      { name: 'G-cloud 13 Digital Marketplace',   icon: faCloud,    desc: 'An online catalogue where public sector customers can buy cloud-based computing services such as hosting, software and cloud support, including many off-the-shelf, pay-as-you-go cloud solutions.' },
    ],
  },
  {
    label: 'Membership',
    image: '/images/insights/conference.jpg',
    items: [
      { name: 'TMForum',            icon: faNetworkWired,   desc: 'TMforum is an alliance of 850+ global companies working together to break down technology and cultural barriers between digital service providers, technology suppliers, consultancies and systems integrators.' },
      { name: 'Living Wage Employer', icon: faMoneyBillWave, desc: 'The real Living Wage is the only UK wage rate based on the cost of living. It is voluntarily paid by over 13,000 UK businesses who believe their staff deserve a wage which meets everyday needs.' },
      { name: 'UKTIN',              icon: faTowerCell,      desc: 'UKTIN is the innovation network for the UK telecoms sector, bringing together industry, academia, and government stakeholders to catalyse telecoms R&D talent in investment, cooperation and commercialisation.' },
    ],
  },
  {
    label: 'Ratings',
    image: '/images/insights/performance-testing.jpg',
    items: [
      { name: 'Cybervadis Gold', icon: faMedal,      desc: 'CyberVadis Gold Medal is awarded to organizations with exceptional cybersecurity practices, with AWTG scoring 918/1000 in the latest assessment, achieving a Mature rating demonstrating commitment to ISO 27001, NIST and GDPR.' },
      { name: 'EcoVadis',        icon: faLeaf,        desc: 'EcoVadis provides a collaborative web-based rating platform assessing the non-financial global performance of organisations, working towards increased insight into the sustainability performance of their suppliers.' },
      { name: 'Tech200',         icon: faRocket,      desc: "Tussell and techUK's 3rd annual Tech200 awards is a list of the 200 fastest-growing technology companies in the UK public sector, from FY 2021/22 to FY 2022/23." },
    ],
  },
  {
    label: 'Partnerships',
    image: '/images/insights/connectivity.jpg',
    items: [
      { name: 'Flex-5G',                            icon: faTowerCell,       desc: 'Flex-5G is a complete 5G Stand Alone network providing lower prices, improved scalability and private network options expected to bring public benefits across health, education and entertainment.' },
      { name: 'TUDOR',                               icon: faGlobe,           desc: 'TUDOR is an ambitious research project aiming to develop economically viable full geographic coverage and eliminate the digital divide, contributing to UK strategy of diversification of telecom vendors.' },
      { name: 'Flexi-DAS',                           icon: faWifi,            desc: 'Flexi-DAS Consortium aims to develop highly flexible Distributed Antenna System (DAS) radio heads based on field-programmable flexible radio chipsets and Radio Frequency Identification cards.' },
      { name: 'CORE HDD',                            icon: faBroadcastTower,  desc: 'The CORE project aims to develop a 5G Open RAN platform for High Demand Density areas, with the goal of accelerating 5G deployment in similar regions in the UK.' },
      { name: 'SCONDA',                              icon: faNetworkWired,    desc: 'SCONDA is a project that aims to address technical and commercial challenges in high-density areas by integrating ORAN and Traditional RAN to effectively handle live traffic.' },
      { name: 'Spirit Project EU',                   icon: faVrCardboard,     desc: "Eight of Europe's most cutting-edge companies and universities in the field of telepresence applications are at work in SPIRIT, bringing advanced expertise in extended reality (XR) and multimedia communications." },
      { name: 'Hiper-RAN',                           icon: faSignal,          desc: "The 'Highly Intelligent, Highly Performing RAN (HiPer-RAN)' project is a ground-breaking initiative aimed at overcoming key challenges in software automation and efficiency in the UK's mobile infrastructure." },
      { name: 'Borderlands 5G Innovation Region',    icon: faLocationDot,     desc: 'The Borderlands Inclusive Growth Deal aims to deliver sustainable improvements to boost potential and opportunities for residents, visitors and businesses.' },
      { name: 'UKI-FNI',                             icon: faLink,            desc: 'The UK-India Future Networks Initiative (UKI-FNI) explores advanced innovations in supply chains for hardware and software systems, providing connectivity for future digital networks and a joint vision in Beyond 5G and 6G.' },
    ],
  },
]

const GROUP_COLORS: Record<string, string> = {
  'ISO & Cyber Security':   '#228DC1',
  'Supplier Accreditation': '#059669',
  'Membership':             '#7c3aed',
  'Ratings':                '#d97706',
  'Partnerships':           '#0a1628',
}

export default function AboutCertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-12 lg:gap-20 items-end">
            <div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
                Trusted and safe solutions to accommodate your regulatory requirements.
              </h1>
              <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.7]">
                ISO standards, cyber security, supplier accreditations, memberships, ratings and research partnerships.
              </p>
            </div>
            <div className="border-l-2 border-[#228DC1] pl-6 py-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/55 mb-3">Certifications</p>
              <p className="font-h2 text-[#0a1628]">{certificationGroups.reduce((n, g) => n + g.items.length, 0)}</p>
              <p className="text-[#0a1628]/60 text-sm leading-relaxed mt-2">accreditations, memberships and partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jump nav */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-wrap gap-0 divide-x divide-gray-100">
            {certificationGroups.map((group) => (
              <a
                key={group.label}
                href={`#${group.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="px-5 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/55 hover:text-[#228DC1] hover:bg-[#f8fafc] transition-colors"
              >
                {group.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating panels */}
      <div className="border-t border-gray-100 overflow-hidden">
        {certificationGroups.map((group, groupIndex) => {
          const isReversed = groupIndex % 2 === 1
          const accent = GROUP_COLORS[group.label] ?? '#228DC1'
          const hasManyItems = group.items.length > 4

          return (
            <section
              key={group.label}
              id={group.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="grid lg:grid-cols-2 border-b border-gray-100 scroll-mt-14"
            >
              {/* Content panel */}
              <div
                className={`bg-white ${isReversed ? 'lg:order-2' : ''}`}
                style={{ padding: '72px clamp(28px, 5vw, 88px)' }}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: accent }}>
                    {String(groupIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-8" style={{ background: accent + '55' }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/45">
                    {group.label}
                  </span>
                </div>

                {/* Items */}
                <div className={hasManyItems ? 'grid sm:grid-cols-2 gap-x-8 gap-y-0' : 'space-y-0'}>
                  {group.items.map((item, itemIndex) => (
                    <article
                      key={item.name}
                      className="py-6 border-b border-gray-100 last:border-b-0"
                      style={hasManyItems && itemIndex === group.items.length - 1 && group.items.length % 2 === 1
                        ? { gridColumn: '1 / -1' } : {}}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="shrink-0 h-9 w-9 flex items-center justify-center mt-0.5"
                          style={{ background: accent + '12' }}
                        >
                          <FontAwesomeIcon icon={item.icon} className="w-4 h-4" style={{ color: accent }} />
                        </div>
                        <div>
                          <h3 className="text-[14px] font-bold text-[#0a1628] leading-snug mb-2">{item.name}</h3>
                          <p className="text-[13px] text-[#0a1628]/55 leading-[1.78] font-normal">{item.desc}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Image panel — no text on image */}
              <div
                className={`relative overflow-hidden ${isReversed ? 'lg:order-1' : ''}`}
                style={{ minHeight: 480, background: '#0a1628' }}
              >
                <img
                  src={group.image}
                  alt={group.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Accent color tint at join edge */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isReversed
                      ? `linear-gradient(to right, ${accent}22 0%, transparent 45%)`
                      : `linear-gradient(to left, ${accent}22 0%, transparent 45%)`,
                  }}
                />
                {/* Dark edge shadow for depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isReversed
                      ? 'linear-gradient(to right, rgba(10,22,40,0.22) 0%, transparent 35%)'
                      : 'linear-gradient(to left, rgba(10,22,40,0.22) 0%, transparent 35%)',
                  }}
                />
              </div>
            </section>
          )
        })}
      </div>

      <CTASection
        title="Work With a Certified Partner"
        subtitle="Trusted and safe solutions to accommodate your regulatory requirements."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  )
}
