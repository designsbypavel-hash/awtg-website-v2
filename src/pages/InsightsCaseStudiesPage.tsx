import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '@/components/CTASection'
import InsightImage from '@/components/InsightImage'
import InsightsResourceNav from '@/components/InsightsResourceNav'
import { getCaseStudyImage } from '@/lib/insightImages'

const featured = {
  slug: 'itrustric-open-ran-security',
  tag: 'Open RAN Security',
  title: "iTRUSTRIC: Securing Open RAN with AWTG's Advanced Solution",
  date: 'October 7, 2024',
  excerpt: "Open RAN's disaggregated architecture creates powerful flexibility and new security exposure. iTRUSTRIC is AWTG's purpose-built platform to secure data flows, improve network visibility and ensure compliance across multi-vendor Open RAN deployments.",
  sector: 'Telecommunications',
  stats: [
    { value: 'Real-time', label: 'Threat monitoring' },
    { value: 'O-RAN', label: 'Standards compliant' },
    { value: 'Multi-vendor', label: 'Architecture support' },
  ],
}

const studies = [
  {
    slug: 'high-street-recovery',
    tag: 'Public Sector',
    title: 'Connectivity, Software and Services for High Street Recovery',
    date: 'September 17, 2021',
    excerpt: 'How AWTG delivered digital infrastructure and connectivity underpinning local authority high street recovery programmes across retail and leisure sectors.',
  },
  {
    slug: 'tot-service-assurance',
    tag: 'Network Economics',
    title: "AWTG's Service Assurance and Service Creation Platform",
    date: 'April 20, 2020',
    excerpt: "A GSMA-validated study with Telecom of Thailand — 50%+ operating cost reduction and $250M in new revenue through AWTG's iSASCP platform.",
  },
  {
    slug: 'central-london-benchmarking',
    tag: 'Mobile Networks',
    title: 'Central London Benchmarking',
    date: 'May 6, 2018',
    excerpt: "Multidimensional benchmarking across four major UK operators, comparing 3G, EE's newly launched LTE and carrier-grade outdoor Wi-Fi in Central London.",
  },
  {
    slug: 'data-offloading-wifi',
    tag: 'Capacity Planning',
    title: 'Data Offloading with WiFi Enabled Devices',
    date: 'September 2, 2013',
    excerpt: 'A laboratory demonstration of seamless cellular-to-WiFi offloading for dual-mode devices, examining the technical and commercial case for operator-managed offload.',
  },
  {
    slug: 'akt-stability-testing',
    tag: 'Performance Testing',
    title: 'AKT: Stability Testing Scenario',
    date: 'September 1, 2013',
    excerpt: "Multi-day network stability assessment using AWTG's Broadband Tester agents to measure user-perceived speed, reliability and quality of experience.",
  },
  {
    slug: 'rich-communications-suite',
    tag: 'Mobile Services',
    title: 'Rich Communications Suite',
    date: 'June 23, 2012',
    excerpt: "AWTG's analysis of the GSMA RCS-e initiative — how operators could use IMS/SIP-based rich communications to compete with over-the-top services at scale.",
  },
  {
    slug: 'small-cell-site-acquisition',
    tag: 'Site Acquisition',
    title: 'Site Acquisition Proposition for Small Cell/3G Data Offload',
    date: 'June 23, 2012',
    excerpt: "A site acquisition proposition for small cell deployment in high-density urban areas, drawing on AWTG's experience building outdoor small cell networks for O2.",
  },
]

const caseStudyTopics = ['All', featured.tag, ...Array.from(new Set(studies.map((study) => study.tag)))]

export default function InsightsCaseStudiesPage() {
  const [activeTopic, setActiveTopic] = useState('All')
  const filteredStudies = activeTopic === 'All' ? studies : studies.filter((study) => study.tag === activeTopic)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: 540 }}>
        <img
          src="/images/insights/education.jpg"
          alt="AWTG Case Studies"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.74) 30%, rgba(10,22,40,0.32) 58%, rgba(10,22,40,0.06) 74%, transparent 88%)' }}
        />
        <div
          className="relative max-w-7xl mx-auto px-8 lg:px-12 flex items-end"
          style={{ minHeight: 540, paddingTop: 140, paddingBottom: 72 }}
        >
          <div style={{ maxWidth: 600 }}>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#1a7aab] mb-5">Case Studies</p>
            <h1
              className="font-serif-display text-white leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
            >
              Case Studies
            </h1>
            <p className="text-white/65 text-[17px] font-normal leading-[1.8]" style={{ maxWidth: 500 }}>
              Real projects, measurable outcomes. Case studies spanning Open RAN security, network economics, mobile benchmarking and urban connectivity.
            </p>
          </div>
        </div>
      </section>

      <InsightsResourceNav
        activeResource="case-studies"
        activeTopic={activeTopic}
        topics={caseStudyTopics}
        onTopicChange={setActiveTopic}
      />

      {/* Featured */}
      <section className="bg-[#f8fafc] pb-0">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <Link
            to={`/insights/case-studies/${featured.slug}`}
            className="group block bg-white"
          >
            {/* Image strip */}
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <InsightImage src={getCaseStudyImage(featured.slug, featured.tag)} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid lg:grid-cols-[1fr_360px]">
              {/* Left: content */}
              <div className="p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#0a1628]/60 text-xs">{featured.date}</span>
                  </div>
                  <h2 className="font-h2 text-[#0a1628] mb-5">
                    {featured.title}
                  </h2>
                  <p className="text-[#0a1628]/60 text-sm font-normal leading-[1.75] max-w-lg">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-[#1a7aab] text-sm font-semibold">
                  Read case study
                </div>
              </div>
              {/* Right: stats panel */}
              <div className="bg-[#0a1628] p-10 lg:p-14 flex flex-col justify-between">
                <p className="type-label text-white/40 mb-8">Key outcomes</p>
                <div className="space-y-8">
                  {featured.stats.map((s, i) => (
                    <div key={i} className={i < featured.stats.length - 1 ? 'pb-8 border-b border-white/10' : ''}>
                      <p className="font-h4 font-black text-white" style={{ letterSpacing: '-0.02em' }}>{s.value}</p>
                      <p className="type-label text-white/50 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#0a1628]/60 mb-10">All case studies</p>
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/insights/case-studies/${cs.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0a1628]/8 bg-white shadow-[0_8px_30px_rgba(10,22,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,22,40,0.11)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e8f4fa]">
                  <InsightImage
                    src={getCaseStudyImage(cs.slug, cs.tag)}
                    alt={cs.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/16 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="mb-4 text-[11px] font-semibold text-[#0a1628]/50">
                    {cs.date.split(' ').pop()}
                  </span>
                  <h3 className="mb-3 text-[17px] font-semibold leading-[1.3] text-[#0a1628]">
                    {cs.title}
                  </h3>
                  <p className="mb-7 text-[13px] font-normal leading-[1.72] text-[#0a1628]/60">
                    {cs.excerpt}
                  </p>
                  <div className="mt-auto border-t border-[#0a1628]/8 pt-5">
                    <span className="text-[12px] font-semibold text-[#1a7aab] transition-colors group-hover:text-[#0a1628]">
                      Read case study
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="See What We Can Achieve Together"
        subtitle="Tell us about your challenge and we will share the most relevant experience from across our project portfolio."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  )
}
