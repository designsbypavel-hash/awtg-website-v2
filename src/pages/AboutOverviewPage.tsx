import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faIndustry, faLandmark, faMicroscope, faPuzzlePiece, faServer, faSignal } from '@fortawesome/free-solid-svg-icons'
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

const SECTION_IMAGES = [
  '/images/insights/engineering-team.jpg',
  '/images/insights/telecom-tower.jpg',
  '/images/insights/open-ran.jpg',
  '/images/insights/ai-innovation.jpg',
  '/images/insights/city-infrastructure.jpg',
  '/images/insights/smart-city.jpg',
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
      <section className="relative overflow-hidden" style={{ minHeight: 500 }}>
        <img
          src="/images/insights/engineering-team.jpg"
          alt="AWTG team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 38%, rgba(10,22,40,0.30) 65%, transparent 85%)' }}
        />
        <div
          className="relative max-w-7xl mx-auto px-8 lg:px-12 flex items-end"
          style={{ minHeight: 500, paddingTop: 160, paddingBottom: 88 }}
        >
          <div style={{ maxWidth: 660 }}>
            <h1
              className="font-serif-display text-white leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 54px)' }}
            >
              AWTG delivers innovative platforms, solutions and services for enterprises, cities and communities.
            </h1>
            <p className="text-white/70 text-[17px] max-w-xl font-normal leading-[1.8]">
              An end-to-end engineering services and technology solutions provider operating across digital technology markets.
            </p>
          </div>
        </div>
      </section>

      {/* Capgemini-style alternating panels */}
      <section className="overflow-hidden">
        {contentSections.map((section, index) => {
          const isReversed = index % 2 === 1
          return (
            <div key={section.label} className="grid lg:grid-cols-2" style={{ minHeight: 560 }}>

              {/* Text panel */}
              <div
                className={`flex items-center bg-white ${isReversed ? 'lg:order-2' : ''}`}
                style={{ padding: '72px clamp(32px, 5.5vw, 96px)' }}
              >
                <div style={{ maxWidth: 520 }}>
                  <h2
                    className="font-heading text-[#0a1628] leading-[1.16] mb-7"
                    style={{ fontSize: 'clamp(22px, 2.2vw, 30px)' }}
                  >
                    {section.title}
                  </h2>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-[#0a1628]/60 text-[15px] leading-[1.88] font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image panel — no text on image */}
              <div
                className={`relative overflow-hidden ${isReversed ? 'lg:order-1' : ''}`}
                style={{ minHeight: 420, background: '#0a1628' }}
              >
                <img
                  src={SECTION_IMAGES[index]}
                  alt={section.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isReversed
                      ? 'linear-gradient(to right, rgba(10,22,40,0.18) 0%, transparent 40%)'
                      : 'linear-gradient(to left, rgba(10,22,40,0.18) 0%, transparent 40%)',
                  }}
                />
              </div>

            </div>
          )
        })}
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-heading text-[#0a1628] max-w-xl mb-12">The organisations and communities we serve.</h2>
          <div className="flex flex-wrap gap-3">
            {trustCategories.map(({ label, icon }) => (
              <div
                key={label}
                className="group flex items-center gap-3 bg-white border border-gray-100 rounded-full px-6 py-3.5 hover:border-[#228DC1]/50 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="h-7 w-7 flex items-center justify-center rounded-full shrink-0" style={{ background: 'rgba(34,141,193,0.10)' }}>
                  <FontAwesomeIcon icon={icon} className="w-3 h-3 text-[#228DC1]" />
                </div>
                <span className="font-semibold text-[#0a1628] text-[14px] whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {aboutLinks.map((link) => (
              <Link key={link.href} to={link.href} className="group bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                <h3 className="font-card-heading text-[#0a1628] text-[14px] mb-2 group-hover:text-[#1a7aab] transition-colors">{link.label}</h3>
                <p className="text-[#0a1628]/60 text-[14px] leading-[1.7] font-normal mb-5">{link.desc}</p>
                <span className="inline-flex items-center gap-2 text-[#1a7aab] text-xs font-semibold uppercase tracking-[0.14em]">
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
