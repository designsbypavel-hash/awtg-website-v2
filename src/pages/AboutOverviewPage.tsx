import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faGlobe, faHandshake, faHospital, faIndustry, faLandmark, faMicroscope, faPuzzlePiece, faServer, faSignal } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'

const contentSections = [
  {
    label: 'About the company',
    title: 'AWTG delivers innovative platforms, solutions and services for enterprises, cities and communities.',
    paragraphs: [
      'AWTG is an end-to-end engineering services and technology solutions provider operating in Telecommunications, Immersive Tourism, Smart Education, Smart Cities, Smart Retail and Shopping, Industry 4.0, Smart Health, New Media, Internet and other markets that employ digital technologies. AWTG’s technology solutions cover Digital Transformation, Rapid Prototyping, Artificial Intelligence, Internet of Everything and Software.',
      'Our vision is to improve communities through innovation that facilitates a better future for our employees, clients and stakeholders. Our mission is to create innovations that enables our clients to deliver products and services that brings better value to their customers and higher returns on investments.',
    ],
  },
  {
    label: 'Our Story',
    title: 'Founded in 2006 to provide advanced professional services catering to the specific needs of the telecommunications industry.',
    paragraphs: [
      'Founded in 2006 to provide advanced professional services catering to the specific needs of the telecommunications industry, AWTG has built a strong reputation by focusing on customer satisfaction—utilising our considerable skills and expertise to deliver superior results and returns-on-investments for our clients.',
      'In 2014, AWTG deployed the first 5G test bed in the UK—including the first developed 5G core network in the UK and the provisioning of software solutions, support and engagement as part of this. Since then, AWTG has designed and deployed 5G and other mobile and wireless communications networks for numerous other clients, and continues to be the leading services company delivering 5G solutions for various market verticals.',
      'AWTG has also delivered various successful government projects that are both network deployment and consultancy centric, and has deployed thousands of 4G and 5G sites across three continents over the last 17 years.',
    ],
  },
  {
    label: 'Open RAN Success Story',
    title: 'AWTG has delivered more than 45,000 RAN sites globally.',
    paragraphs: [
      'AWTG has delivered more than 45,000 RAN sites globally and has built a strong reputation for its expertise in Open RAN technology since 2016 after the launch of the first private 5G network in the UK. In 2021, the company made significant investments in the development of Open RAN solutions, which have yielded positive outcomes. AWTG has secured multiple multi-million consortiums, including Flex-5G, Flexi-DAS, TUDOR, SCONDA, HiPerRAN, and Core HDD.',
    ],
  },
  {
    label: 'Our Culture',
    title: 'We deliver innovations and technology to our customers with the highest standards of quality and cost effectiveness.',
    paragraphs: [
      'We deliver innovations and technology to our customers with the highest standards of quality and cost effectiveness.',
      'Our innovation engineering and software development services are focused on the quality of deliverables while at the same time within defined budgets and timelines.',
      'We promote a healthy work-life balance to our employees.',
    ],
  },
  {
    label: 'Diversity and Inclusion',
    title: 'At AWTG, we cultivate an environment where individuals can feel at liberty to express themselves authentically.',
    paragraphs: [
      'At AWTG, we cultivate an environment where individuals can feel at liberty to express themselves authentically and establish significant connections with one another. Our focus on workplace diversity, promoting inclusivity, and community involvement, encouraging creativity to help build a more optimistic future for the company and the communities we work with.',
      'We have full confidence in our staff to balance the demands of their personal and professional lives to create a flexible work environment. To broaden our diverse range of employees, we offer multiple opportunities to our team members, professionals and talented students.',
    ],
  },
  {
    label: 'Driving Long-term Social Impact',
    title: 'AWTG has a strong commitment to corporate social responsibility.',
    paragraphs: [
      'AWTG has a strong commitment to corporate social responsibility (CSR) and is committed to creating a sustainable world in which all can thrive. Our team has embraced our responsibility to our community as part of our mission, striving to improve people’s lives and promote sustainability throughout the world.',
    ],
  },
]

const trustCategories = [
  { label: 'Government', icon: faLandmark },
  { label: 'Health and Care', icon: faHospital },
  { label: 'Industry Bodies', icon: faIndustry },
  { label: 'MNOs', icon: faSignal },
  { label: 'Researchers', icon: faMicroscope },
  { label: 'Technology Vendors', icon: faServer },
  { label: 'Vertical Applications', icon: faPuzzlePiece },
]

const aboutLinks = [
  { label: 'Management', href: '/about/leadership', desc: 'Meet the brilliant minds behind our strides towards sustainability and innovation.' },
  { label: 'Certifications', href: '/about/certifications', desc: 'Trusted and safe solutions to accommodate your regulatory requirements.' },
  { label: 'Carbon Reduction Plan', href: '/about/sustainability#carbon-reduction-plan', desc: 'Our commitment to achieving Net Zero.' },
  { label: 'Social Value Statement', href: '/about/sustainability#social-value-statement', desc: 'Supporting communities, enabling growth and economic wellbeing.' },
]

export default function AboutOverviewPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-12 lg:gap-20 items-end">
            <div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
                AWTG delivers innovative platforms, solutions and services for enterprises, cities and communities.
              </h1>
              <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.7]">
                AWTG is an end-to-end engineering services and technology solutions provider operating across digital technology markets.
              </p>
            </div>
            <div className="border-l-2 border-[#228DC1] pl-6 py-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/55 mb-3">Delivery footprint</p>
              <p className="font-h2 text-[#0a1628]">45,000+</p>
              <p className="text-[#0a1628]/60 text-sm leading-relaxed mt-2">RAN sites delivered globally.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { icon: faBuilding, stat: '2006', label: 'Founded', text: 'Built to serve the specific needs of the telecommunications industry.' },
              { icon: faGlobe, stat: '3', label: 'Continents', text: 'Thousands of 4G and 5G sites deployed across three continents.' },
              { icon: faHandshake, stat: '45k+', label: 'RAN Sites Delivered', text: 'Government projects, network deployment and consultancy-centric programmes.' },
            ].map((item) => (
              <div key={item.label} className="relative overflow-hidden px-10 py-14 lg:px-14">
                <span
                  className="pointer-events-none select-none absolute -top-2 right-4 font-black leading-none text-white/[0.04]"
                  style={{ fontSize: 'clamp(80px, 10vw, 130px)' }}
                >
                  {item.stat}
                </span>
                <div className="h-10 w-10 flex items-center justify-center mb-8" style={{ background: 'rgba(34,141,193,0.15)' }}>
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-[#228DC1]" />
                </div>
                <p
                  className="font-black text-[#228DC1] mb-1 leading-none"
                  style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-0.03em' }}
                >
                  {item.stat}
                </p>
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">{item.label}</p>
                <p className="text-white/55 text-[14px] leading-[1.78] max-w-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="space-y-0 border-y border-gray-100">
            {contentSections.map((section, index) => (
              <article key={section.label} className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-8 lg:gap-14 py-12 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="type-label text-[#228DC1] mb-3">{String(index + 1).padStart(2, '0')}</p>
                  <h2 className="font-h5 text-[#0a1628]">{section.label}</h2>
                </div>
                <div>
                  <p className="font-h2 text-[#0a1628] mb-6">
                    {section.title}
                  </p>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-[#0a1628]/68 text-[16px] leading-[1.85] font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <p className="type-label text-[#228DC1] mb-3">Who we work with</p>
            <h2 className="font-heading text-[#0a1628] max-w-lg">The organisations and communities we serve.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustCategories.map(({ label, icon }) => (
              <div
                key={label}
                className="group bg-white border border-gray-100 p-7 hover:border-[#228DC1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-11 w-11 flex items-center justify-center mb-6" style={{ background: 'rgba(34,141,193,0.10)' }}>
                  <FontAwesomeIcon icon={icon} className="w-5 h-5 text-[#228DC1]" />
                </div>
                <p className="font-semibold text-[#0a1628] text-[15px] leading-snug">{label}</p>
                <div className="mt-4 h-0.5 w-0 group-hover:w-8 transition-all duration-300 bg-[#228DC1]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {aboutLinks.map((link) => (
              <Link key={link.href} to={link.href} className="group bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                <h3 className="font-card-heading text-[#0a1628] text-[14px] mb-2 group-hover:text-[#228DC1] transition-colors">{link.label}</h3>
                <p className="text-[#0a1628]/60 text-[14px] leading-[1.7] font-normal mb-5">{link.desc}</p>
                <span className="inline-flex items-center gap-2 text-[#228DC1] text-xs font-semibold uppercase tracking-[0.14em]">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
