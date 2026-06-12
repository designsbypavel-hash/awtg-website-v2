import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import InsightImage from '@/components/InsightImage'
import InsightsResourceNav from '@/components/InsightsResourceNav'
import { getWhitePaperImage } from '@/lib/insightImages'

export type WhitePaper = {
  slug: string
  title: string
  date: string
  topic: string
  desc: string
  pdf: string
  featured?: boolean
}

export const whitePapers: WhitePaper[] = [
  {
    slug: 'open-ran-innovations',
    title: 'Open RAN Innovations',
    date: 'August 16, 2024',
    topic: 'Open RAN',
    desc: 'A practical view of Open RAN transformation, covering flexibility, integration challenges, security protocols and AWTG’s role in advancing more open radio access networks.',
    pdf: '/white-papers/AWTG-White-Paper-Open-RAN-Innovations.pdf',
    featured: true,
  },
  {
    slug: 'rapps-in-hiper-ran',
    title: 'rApps in HiPer-RAN',
    date: 'August 15, 2024',
    topic: 'RAN Intelligence',
    desc: 'Insights from the HiPer-RAN project, including ML-driven rApps and xApps for energy efficiency, MIMO optimisation, RAN slice SLA assurance and security use cases.',
    pdf: '/white-papers/AWTG-White-Paper-rAPPS-in-HiPerRAN.pdf',
  },
  {
    slug: 'youth-development-and-apprenticeship-platforms',
    title: 'Youth Development and Apprenticeship Platforms',
    date: 'March 27, 2024',
    topic: 'Public Services',
    desc: 'How digital platforms can help young people discover, access and enrol in career, apprenticeship and leisure opportunities while supporting public services and local businesses.',
    pdf: '/white-papers/AWTG-White-Paper-Youth-Apprenticeships.pdf',
  },
  {
    slug: 'idams-collaborative-asset-management',
    title: 'iDAMS: Enhanced Connectivity and Efficiency through Collaborative Asset Management',
    date: 'February 21, 2024',
    topic: 'Asset Management',
    desc: 'A white paper on improving collaboration between mobile operators, local authorities and private landowners to speed up asset approvals and improve connectivity outcomes.',
    pdf: '/white-papers/AWTG-White-Paper-iDAMS.pdf',
  },
  {
    slug: 'stations-of-the-future',
    title: 'Stations of the Future',
    date: 'October 24, 2022',
    topic: 'Rail Infrastructure',
    desc: 'A look at how new and redeveloped train stations can use public investment, digital infrastructure and smarter connectivity to support future passenger and operational needs.',
    pdf: '/white-papers/AWTG-White-Paper-Stations-of-the-Future.pdf',
  },
  {
    slug: 'high-street-recovery',
    title: 'Connectivity, Software and Services for High Street Recovery',
    date: 'October 20, 2021',
    topic: 'Public Sector',
    desc: 'A recovery-focused paper on the role of connectivity, software and services in helping local authorities respond to long-term changes affecting town and city centres.',
    pdf: '/white-papers/AWTG-Connectivity-Software-and-Services-for-High-Street-Recovery.pdf',
  },
  {
    slug: 'ai-powered-dam-and-reservoir-management',
    title: 'AI-Powered Dam and Reservoir Management',
    date: 'December 18, 2019',
    topic: 'AI Infrastructure',
    desc: 'A white paper exploring how AI and monitoring technologies can support ageing water infrastructure, helping identify risks around dams and reservoirs earlier.',
    pdf: '/white-papers/AI-Powered-Dam-and-Reservoir-Management.pdf',
  },
  {
    slug: 'neutral-host-and-private-network-solutions',
    title: 'Neutral Host and Private Network Solutions',
    date: 'December 9, 2019',
    topic: 'Private Networks',
    desc: 'A review of neutral host models and private network approaches, including how shared mobile infrastructure can serve multiple network operators and environments.',
    pdf: '/white-papers/Neutral-Host-and-Private-Network-Solutions.pdf',
  },
  {
    slug: '5g-snapshot-june-2018',
    title: 'Snapshot of the Status of 5G Developments in the UK',
    date: 'June 27, 2018',
    topic: '5G Strategy',
    desc: 'A snapshot of 5G progress in the UK, outlining how next-generation mobile technology differs from 4G through speed, latency, reliability and new service potential.',
    pdf: '/white-papers/WP_5G-Snapshot-June-2018.pdf',
  },
  {
    slug: 'esn-coverage-assurance',
    title: 'Coverage Assurance for the ESN',
    date: 'April 30, 2018',
    topic: 'Public Safety',
    desc: 'An overview of coverage assurance considerations for the Emergency Services Network as public safety communications transition from Airwave TETRA to LTE-based services.',
    pdf: '/white-papers/AWTG-ESN-coverage-assurance-brochure.pdf',
  },
  {
    slug: 'what-is-5g',
    title: 'What is 5G? How Will It Improve Lives?',
    date: 'February 17, 2014',
    topic: '5G Research',
    desc: 'A research-led introduction to 5G network design, developed with academic collaboration and focused on how faster, more efficient networks can improve services.',
    pdf: '/white-papers/WP_What-is-5G.pdf',
  },
  {
    slug: 'heterogeneous-networks-using-small-cells',
    title: 'Heterogeneous Networks Using Small Cells',
    date: 'September 22, 2013',
    topic: 'Small Cells',
    desc: 'A paper on mobile data growth, radio access pressure and the role of heterogeneous networks and small cells in increasing capacity beyond macro network limits.',
    pdf: '/white-papers/AWTG-Heterogeneous-Networks-using-Small-Cells-v1.6.pdf',
  },
  {
    slug: 'incumbent-3g-operator-strategy',
    title: "An Incumbent 3G Mobile Operator's Strategy",
    date: 'August 21, 2012',
    topic: 'Mobile Strategy',
    desc: 'A strategy paper for 2G and 3G operators, covering upgrade paths through HSPA+, 3G rollout, UMTS900 support and later LTE network evolution.',
    pdf: '/white-papers/WP_An-Incumbent-3G-Operators-Strategy.pdf',
  },
  {
    slug: 'interworking-of-future-networks',
    title: 'Interworking of Future Networks',
    date: 'June 22, 2012',
    topic: 'Future Networks',
    desc: 'A view of future network interworking, focused on delivering ubiquitous services across multiple access technologies while reducing the cost of data delivery.',
    pdf: '/white-papers/WP_Interworking-of-future-networks.pdf',
  },
]

const topics = ['All', ...Array.from(new Set(whitePapers.map((paper) => paper.topic)))]
const featuredPaper = whitePapers.find((paper) => paper.featured) ?? whitePapers[0]

export const getWhitePaperHref = (paper: WhitePaper) => `/insights/white-papers/${paper.slug}`

export default function InsightsWhitePapersPage() {
  const [activeTopic, setActiveTopic] = useState('All')

  const filteredPapers = useMemo(
    () => activeTopic === 'All' ? whitePapers : whitePapers.filter((paper) => paper.topic === activeTopic),
    [activeTopic],
  )

  const visiblePapers = filteredPapers.filter((paper) => paper.slug !== featuredPaper.slug)

  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16 items-end">
            <div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
                Technical research and practical frameworks from AWTG.
              </h1>
              <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.7]">
                Explore white papers across Open RAN, private networks, public services, AI infrastructure, 5G strategy, rail, small cells and future networks.
              </p>
            </div>
            <div className="border-l-2 border-[#228DC1] pl-6 py-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/55 mb-3">Resource library</p>
              <p className="font-h2 text-[#0a1628]">{whitePapers.length}</p>
              <p className="text-[#0a1628]/60 text-sm leading-relaxed mt-2">downloadable PDF white papers available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <Link to={getWhitePaperHref(featuredPaper)} className="group grid lg:grid-cols-5 border border-gray-100 hover:border-[#228DC1] transition-all">
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/60">Featured</span>
                <span className="w-8 h-px bg-gray-200" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 bg-[#228DC1]/10 text-[#228DC1]">
                  {featuredPaper.topic}
                </span>
              </div>
              <h2 className="font-h2 text-[#0a1628] mb-5 group-hover:text-[#228DC1] transition-colors">
                {featuredPaper.title}
              </h2>
              <p className="text-[#0a1628]/70 text-[16px] font-normal leading-[1.8] max-w-2xl mb-9">
                {featuredPaper.desc}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 text-[#0a1628]/60 text-xs border-t border-gray-100 pt-7">
                <span>{featuredPaper.date}</span>
                <span className="inline-flex items-center gap-2 text-[#228DC1] font-semibold uppercase tracking-[0.12em]">
                  Read whitepaper                </span>
              </div>
            </div>
            <div className="lg:col-span-2 bg-[#0a1628] flex flex-col">
              <div className="h-52 overflow-hidden bg-gray-100">
                <InsightImage src={getWhitePaperImage(featuredPaper.slug, featuredPaper.topic)} alt={featuredPaper.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-between flex-1">
                <div>
                  <FontAwesomeIcon icon={faFilePdf} className="w-10 h-10 text-[#7ac4e0] mb-8" />
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7ac4e0] mb-5">AWTG Research</p>
                  <p className="font-h3 text-white">
                    Open RAN transformation, security and deployment insight.
                  </p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mt-10">Dedicated PDF viewer and download available on the whitepaper page.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <InsightsResourceNav
        activeResource="whitepapers"
        activeTopic={activeTopic}
        topics={topics}
        onTopicChange={setActiveTopic}
      />

      <section className="py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#0a1628]/55 mb-3">All Whitepapers</p>
              <h2 className="font-h2 text-[#0a1628]">
                {activeTopic === 'All' ? 'Research for real infrastructure decisions.' : activeTopic}
              </h2>
            </div>
            <p className="text-[#0a1628]/60 text-sm">{filteredPapers.length} items</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {visiblePapers.map((paper, index) => (
              <Link key={paper.slug} to={getWhitePaperHref(paper)} className="group bg-white border border-gray-100 hover:border-[#228DC1] transition-all overflow-hidden">
                <div className="h-44 relative overflow-hidden">
                  <InsightImage src={getWhitePaperImage(paper.slug, paper.topic)} alt={paper.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 h-10 w-10 bg-white/90 flex items-center justify-center text-[#228DC1]">
                    <FontAwesomeIcon icon={faFilePdf} className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-[12px] text-[#0a1628]/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 bg-[#228DC1]/10 text-[#228DC1]">
                      {paper.topic}
                    </span>
                    <span className="text-[#0a1628]/50 text-xs">{paper.date}</span>
                  </div>
                  <h3 className="font-h5 text-[#0a1628] mb-3 group-hover:text-[#228DC1] transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7]">
                    {paper.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[#228DC1] text-xs font-semibold uppercase tracking-[0.12em]">
                    Open whitepaper
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-[360px_minmax(0,1fr)] gap-12 items-center">
          <div>
            <FontAwesomeIcon icon={faLayerGroup} className="w-8 h-8 text-[#228DC1] mb-6" />
            <p className="type-label text-[#228DC1] mb-3">Resource Hub</p>
            <h2 className="font-serif-display text-[#0a1628] leading-tight">Explore more AWTG insights.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              { label: 'Blog', href: '/insights/blog' },
              { label: 'Case Studies', href: '/insights/case-studies' },
              { label: 'Newsroom', href: '/insights' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors group">
                <p className="font-card-heading text-[#0a1628] text-sm group-hover:text-[#228DC1] transition-colors">{item.label}</p>
              </Link>
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
