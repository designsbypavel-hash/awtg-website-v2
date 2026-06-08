import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'

const certificationGroups = [
  {
    label: 'ISO & Cyber Security',
    items: [
      { name: 'ISO 9001: 2015', desc: 'ISO 9001 is a globally accepted standard for Quality Management Systems (QMS). Organisations that adhere to it are demonstrating their capacity to continually supply products and services that satisfy both customer and governmental needs. This is the most commonly adopted QMS around the world.' },
      { name: 'ISO IEC 27001', desc: 'ISO/IEC 27001 is a globally-recognised standard of security for information systems. Its principles of best-practice provide organisations the guidance they need to create an ISMS (Information Security Management System) and properly secure the people, processes, and technology of their business.' },
      { name: 'ISO 14001:2015', desc: 'ISO 14001 is a globally agreed standard that sets out the requirements for an environmental management system. It helps organisations improve their environmental performance through more efficient use of resources and reduction of waste, gaining a competitive advantage and the trust of stakeholders.' },
      { name: 'ISO 45001:2018', desc: 'ISO 45001 is a globally accepted standard that specifies requirements for an occupational health and safety (OH&S) management system. It provides a framework for organizations to manage risks and improve OH&S performance.' },
      { name: 'ISO 20000:2018', desc: 'ISO/IEC 20000-1:2018 is an international standard for IT service management (ITSM), providing requirements for organizations to establish, implement, maintain, and continually improve a service management system (SMS). It focuses on the planning, design, transition, delivery, and improvement of services to meet customer needs and deliver value.' },
      { name: 'ISO/IEC 42001 – Artificial Intelligence Management System', desc: 'ISO/IEC 42001 is an international standard for Artificial Intelligence Management Systems (AIMS). It provides the framework and requirements for organisations to establish, implement and maintain responsible, ethical, and risk‑based governance of AI systems, ensuring transparency, accountability and trust in the development and use of AI technologies.' },
      { name: 'Cyber Essentials', desc: 'Cyber Essentials Basic is an assessment tool that helps companies evaluate and adjust their digital security measures to the baseline standards of Cyber Essentials. Its aim is to identify any potential vulnerabilities in the devices, networks, and protocols of the organisation.' },
      { name: 'Cyber Essentials Plus', desc: "Cyber Essentials Plus goes beyond the standard self-assessment questionnaire in Cyber Essentials Basic. It requires an audit of the IT systems by a certified auditor to ensure that the appropriate controls have been set in place in the organisation's network." },
      { name: 'CREST Penetration Testing Certification', desc: 'This certificate confirms that AWTG’s Vulnerability Assessment and Penetration Test for the Kai Application was conducted in line with industry best practices, including OWASP, NIST, ISO 27001:2022, and CREST, demonstrating AWTG’s commitment to robust and secure IT systems.' },
    ],
  },
  {
    label: 'Supplier Accreditation',
    items: [
      { name: 'JOSCAR', desc: 'JOSCAR is the accreditation and compliance system for the defence aerospace sectors including prime contractors, civil aviation and security.' },
      { name: 'Crown Commercial Service Supplier', desc: 'The Crown Commercial Service is the biggest public procurement organisation in the UK that acts as the central purchasing body for the government and across the public and third sectors.' },
      { name: 'G-cloud 13 Digital Marketplace', desc: 'An online catalogue where public sector customers can buy cloud-based computing services such as hosting, software and cloud support. Includes many off-the-shelf, pay-as-you-go cloud solutions.' },
    ],
  },
  {
    label: 'Membership',
    items: [
      { name: 'TMForum', desc: 'TMforum is an alliance of 850+ global companies working together to break down technology and cultural barriers between digital service providers, technology suppliers, consultancies and systems integrators.' },
      { name: 'Living Wage Employer', desc: 'The real Living Wage is the only UK wage rate based on the cost of living. It is voluntarily paid by over 13,000 UK businesses who believe their staff deserve a wage which meets everyday needs.' },
      { name: 'UKTIN', desc: 'UKTIN is the innovation network for the UK telecoms sector, bringing together industry, academia, and government stakeholders to catalyse telecoms R&D talent in investment, cooperation and commercialisation.' },
    ],
  },
  {
    label: 'Ratings',
    items: [
      { name: 'Cybervadis Gold', desc: 'CyberVadis Gold Medal is awarded to organizations with exceptional cybersecurity practices, with AWTG scoring 918/1000 in the latest assessment, achieving a Mature rating. This assessment demonstrates our commitment to international information security standards, including ISO 27001, NIST Cybersecurity Framework, and GDPR.' },
      { name: 'EcoVadis', desc: 'EcoVadis provides a collaborative web-based rating platform assessing the non-financial global performance of organisations, working towards increased insight into the sustainability performance of their suppliers.' },
      { name: 'Tech200', desc: "Tussell and techUK's 3rd annual Tech200 awards is a list of the 200 fastest-growing technology companies in the UK public sector, from FY 2021/22 to FY 2022/23." },
    ],
  },
  {
    label: 'Partnerships',
    items: [
      { name: 'Flex-5G', desc: 'Flex-5G is a complete 5G Stand Alone network that provides benefits such as lower prices, improved scalability, and private network options expected to bring public benefits in terms of health and social care, education, and entertainment, as well as economic yield for the UK.' },
      { name: 'TUDOR', desc: 'TUDOR is an ambitious research project aiming to develop economically viable full geographic coverage and thereby eliminating the digital divide, unprecedented energy efficient open system and massively contribute to UK strategy of diversification of telecom vendors ecosystem.' },
      { name: 'Flexi-DAS', desc: 'Flexi-DAS Consortium aims to develop highly flexible Distributed Antenna System (DAS) radio heads/units based on field-programmable flexible radio chipsets and Radio Frequency Identification cards.' },
      { name: 'CORE HDD', desc: 'The CORE project aims to develop a 5G Open RAN platform for High Demand Density (HDD) areas, with the goal of accelerating 5G deployment in similar regions in the UK.' },
      { name: 'SCONDA', desc: 'SCONDA is a project that aims to address technical and commercial challenges in high-density areas by integrating ORAN and Traditional RAN to effectively handle live traffic.' },
      { name: 'Spirit Project EU', desc: 'Eight of Europe’s most cutting-edge companies and universities in the field of telepresence applications are at work in SPIRIT bringing advanced and complementary expertise in extended reality (XR) and multimedia communications.' },
      { name: 'Hiper-RAN', desc: "The 'Highly Intelligent, Highly Performing RAN (HiPer-RAN)' project is a ground-breaking initiative aimed at overcoming key challenges in software automation and efficiency to propel the UK's mobile telecommunications infrastructure to new heights." },
      { name: 'Borderlands 5G Innovation Region Programme', desc: 'The Borderlands Inclusive Growth Deal aims to deliver sustainable improvements to boost potential and opportunities for residents, visitors and businesses.' },
      { name: 'UKI-FNI', desc: 'The UK-India Future Networks Initiative (UKI-FNI) explores advanced innovations in supply chains for hardware and software systems. Providing connectivity and services for future digital networks, and a joint vision and research strategy in Beyond 5G and 6G.' },
    ],
  },
]

export default function AboutCertificationsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] mb-6">
            Trusted and safe solutions to accommodate your regulatory requirements.
          </h1>
          <p className="text-[#0a1628]/65 text-[18px] max-w-2xl font-normal leading-[1.7]">
            ISO & Cyber Security, Supplier Accreditation, Membership, Ratings and Partnerships.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-wrap gap-2">
            {certificationGroups.map((group) => (
              <a key={group.label} href={`#${group.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="px-4 py-2 bg-[#f8fafc] text-[#0a1628]/70 text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-[#228DC1] hover:text-white transition-colors">
                {group.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {certificationGroups.map((group, index) => (
        <section key={group.label} id={group.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f7f8fa]'} border-b border-gray-100 scroll-mt-24`}>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="type-label text-[#228DC1] mb-3">{String(index + 1).padStart(2, '0')}</p>
                <h2 className="font-heading text-[#0a1628]">{group.label}</h2>
              </div>
              <p className="text-[#0a1628]/60 text-sm">{group.items.length} entries</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
              {group.items.map((item) => (
                <article key={item.name} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                  <FontAwesomeIcon icon={group.label === 'ISO & Cyber Security' ? faShieldHalved : faCertificate} className="w-5 h-5 text-[#228DC1] mb-5" />
                  <h3 className="font-h5 text-[#0a1628] mb-3">{item.name}</h3>
                  <p className="text-[#0a1628]/65 text-[14px] leading-[1.75] font-normal">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Work With a Certified Partner"
        subtitle="Trusted and safe solutions to accommodate your regulatory requirements."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  )
}
