import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'

const papers = [
  {
    title: 'Open RAN Innovations',
    author: 'Metti Jab',
    date: 'August 16, 2024',
    topic: 'Open RAN',
    desc: 'A practical view of Open RAN transformation, covering flexibility, integration challenges, security protocols and AWTG’s role in advancing more open radio access networks.',
  },
  {
    title: 'rApps in HiPer-RAN',
    author: 'Ian Vernon',
    date: 'August 15, 2024',
    topic: 'RAN Intelligence',
    desc: 'Insights from the HiPer-RAN project, including ML-driven rApps and xApps for energy efficiency, MIMO optimisation, RAN slice SLA assurance and security use cases.',
  },
  {
    title: 'Youth Development and Apprenticeship Platforms',
    author: 'Roderick MacFadyen',
    date: 'March 27, 2024',
    topic: 'Public Services',
    desc: 'How digital platforms can help young people discover, access and enrol in career, apprenticeship and leisure opportunities while supporting public services and local businesses.',
  },
  {
    title: 'iDAMS: Enhanced Connectivity and Efficiency through Collaborative Asset Management',
    author: 'AWTG Manager',
    date: 'February 21, 2024',
    topic: 'Asset Management',
    desc: 'A white paper on improving collaboration between mobile operators, local authorities and private landowners to speed up asset approvals and improve connectivity outcomes.',
  },
  {
    title: 'Stations of the Future',
    author: 'AWTG Manager',
    date: 'October 24, 2022',
    topic: 'Rail Infrastructure',
    desc: 'A look at how new and redeveloped train stations can use public investment, digital infrastructure and smarter connectivity to support future passenger and operational needs.',
  },
  {
    title: 'Connectivity, Software and Services for High Street Recovery',
    author: 'AWTG Manager',
    date: 'October 20, 2021',
    topic: 'Public Sector',
    desc: 'A recovery-focused paper on the role of connectivity, software and services in helping local authorities respond to long-term changes affecting town and city centres.',
  },
  {
    title: 'AI-Powered Dam and Reservoir Management',
    author: 'AWTG Manager',
    date: 'December 18, 2019',
    topic: 'AI Infrastructure',
    desc: 'A white paper exploring how AI and monitoring technologies can support ageing water infrastructure, helping identify risks around dams and reservoirs earlier.',
  },
  {
    title: 'Neutral Host and Private Network Solutions',
    author: 'AWTG Manager',
    date: 'December 9, 2019',
    topic: 'Private Networks',
    desc: 'A review of neutral host models and private network approaches, including how shared mobile infrastructure can serve multiple network operators and environments.',
  },
  {
    title: 'Snapshot of the Status of 5G Developments in the UK',
    author: 'AWTG Manager',
    date: 'June 27, 2018',
    topic: '5G Strategy',
    desc: 'A snapshot of 5G progress in the UK, outlining how next-generation mobile technology differs from 4G through speed, latency, reliability and new service potential.',
  },
  {
    title: 'Coverage Assurance for the ESN',
    author: 'AWTG Manager',
    date: 'April 30, 2018',
    topic: 'Public Safety',
    desc: 'An overview of coverage assurance considerations for the Emergency Services Network as public safety communications transition from Airwave TETRA to LTE-based services.',
  },
  {
    title: '5G: Vision and Requirements',
    author: 'AWTG Manager',
    date: 'October 20, 2016',
    topic: '5G Requirements',
    desc: 'A technical perspective on the requirements shaping 5G, from high-speed access and low latency to reliability, services and the broader mobile communications shift.',
  },
  {
    title: 'The Hospital of the Future',
    author: 'AWTG Manager',
    date: 'September 29, 2016',
    topic: 'Health Tech',
    desc: 'A healthcare-focused paper on how hospitals can use digital service models, connectivity and technology to improve efficiency, scalability and patient value.',
  },
  {
    title: 'Guide to Building an M2M Platform to Deploy M2M Solutions',
    author: 'AWTG Manager',
    date: 'September 1, 2016',
    topic: 'M2M',
    desc: 'A guide to the foundations of machine-to-machine platforms and how telecoms teams can support connected devices and wider M2M service deployment.',
  },
  {
    title: 'Smart Hospitals Service Catalogue',
    author: 'AWTG Manager',
    date: 'September 1, 2016',
    topic: 'Smart Health',
    desc: 'A catalogue-style white paper covering commercially available smart hospital services and how organisations can prioritise the services that best match their goals.',
  },
  {
    title: 'What is 5G? How Will It Improve Lives?',
    author: 'AWTG Manager',
    date: 'February 17, 2014',
    topic: '5G Research',
    desc: 'A research-led introduction to 5G network design, developed with academic collaboration and focused on how faster, more efficient networks can improve services.',
  },
  {
    title: 'Heterogeneous Networks Using Small Cells',
    author: 'AWTG Manager',
    date: 'September 22, 2013',
    topic: 'Small Cells',
    desc: 'A paper on mobile data growth, radio access pressure and the role of heterogeneous networks and small cells in increasing capacity beyond macro network limits.',
  },
  {
    title: 'An Incumbent 3G Mobile Operator’s Strategy',
    author: 'AWTG Manager',
    date: 'August 21, 2012',
    topic: 'Mobile Strategy',
    desc: 'A strategy paper for 2G and 3G operators, covering upgrade paths through HSPA+, 3G rollout, UMTS900 support and later LTE network evolution.',
  },
  {
    title: 'Interworking of Future Networks',
    author: 'AWTG Manager',
    date: 'June 22, 2012',
    topic: 'Future Networks',
    desc: 'A view of future network interworking, focused on delivering ubiquitous services across multiple access technologies while reducing the cost of data delivery.',
  },
]

export default function InsightsWhitePapersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#228DC1] mb-4">Insights</p>
          <h1
            className="font-serif-display text-[#0a1628] leading-[1.1] mb-6"
           
          >
            White Papers &amp; Research
          </h1>
          <p className="text-[#0a1628]/60 text-[18px] max-w-xl font-normal leading-[1.7]">
            Technical research, sector perspectives and practical frameworks from AWTG’s work across Open RAN, 5G, private networks, public services, smart health and future infrastructure.
          </p>
        </div>
      </section>

      {/* Papers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid gap-px bg-gray-100 border border-gray-100 md:grid-cols-2">
          {papers.map(p => (
            <div
              key={p.title}
              className="bg-white p-8 hover:bg-[#f7f8fa] transition-colors flex flex-col justify-between min-h-[310px]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[14px] font-semibold uppercase tracking-[0.18em] bg-[#228DC1]/8 text-[#228DC1] px-3 py-1">
                    {p.topic}
                  </span>
                  <span className="text-xs text-[#0a1628]/60 font-normal">{p.date}</span>
                </div>
                <h2 className="font-serif-display text-[#0a1628] mb-3" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>
                  {p.title}
                </h2>
                <p className="text-[#0a1628]/75 text-[14px] font-normal leading-[1.7]">{p.desc}</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100 pt-5">
                <p className="text-[13px] text-[#0a1628]/55 font-normal">{p.author}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#228DC1] text-[#228DC1] text-[13px] font-semibold hover:bg-[#228DC1] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faDownload} className="w-4 h-4 shrink-0" />
                  Request paper
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Research Tailored to Your Sector?"
        subtitle="Our strategy team produces bespoke research and market analysis for clients. Get in touch to discuss your requirements."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  )
}
