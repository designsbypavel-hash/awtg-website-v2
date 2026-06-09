import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '@/components/CTASection'
import InsightsResourceNav from '@/components/InsightsResourceNav'

const tagColour: Record<string, string> = {
  'Open RAN Security': 'bg-[#228DC1]/10 text-[#228DC1]',
  'Network Economics': 'bg-emerald-50 text-emerald-700',
  'Public Sector': 'bg-violet-50 text-violet-700',
  'Mobile Networks': 'bg-sky-50 text-sky-700',
  'Capacity Planning': 'bg-amber-50 text-amber-700',
  'Performance Testing': 'bg-orange-50 text-orange-700',
  'Mobile Services': 'bg-indigo-50 text-indigo-700',
  'Site Acquisition': 'bg-slate-100 text-slate-700',
}

const tagAccent: Record<string, string> = {
  'Open RAN Security': 'bg-[#228DC1]',
  'Network Economics': 'bg-emerald-500',
  'Public Sector': 'bg-violet-500',
  'Mobile Networks': 'bg-sky-500',
  'Capacity Planning': 'bg-amber-400',
  'Performance Testing': 'bg-orange-400',
  'Mobile Services': 'bg-indigo-500',
  'Site Acquisition': 'bg-slate-400',
}

const featured = {
  slug: 'itrustric-open-ran-security',
  tag: 'Open RAN Security',
  title: "iTRUSTRIC: Securing Open RAN with AWTG’s Advanced Solution",
  date: 'October 7, 2024',
  excerpt: "Open RAN’s disaggregated architecture creates powerful flexibility and new security exposure. iTRUSTRIC is AWTG’s purpose-built platform to secure data flows, improve network visibility and ensure compliance across multi-vendor Open RAN deployments.",
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
    title: "AWTG’s Service Assurance and Service Creation Platform",
    date: 'April 20, 2020',
    excerpt: "A GSMA-validated study with Telecom of Thailand — 50%+ operating cost reduction and $250M in new revenue through AWTG’s iSASCP platform.",
  },
  {
    slug: 'central-london-benchmarking',
    tag: 'Mobile Networks',
    title: 'Central London Benchmarking',
    date: 'May 6, 2018',
    excerpt: "Multidimensional benchmarking across four major UK operators, comparing 3G, EE’s newly launched LTE and carrier-grade outdoor Wi-Fi in Central London.",
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
    excerpt: "Multi-day network stability assessment using AWTG’s Broadband Tester agents to measure user-perceived speed, reliability and quality of experience.",
  },
  {
    slug: 'rich-communications-suite',
    tag: 'Mobile Services',
    title: 'Rich Communications Suite',
    date: 'June 23, 2012',
    excerpt: "AWTG’s analysis of the GSMA RCS-e initiative — how operators could use IMS/SIP-based rich communications to compete with over-the-top services at scale.",
  },
  {
    slug: 'small-cell-site-acquisition',
    tag: 'Site Acquisition',
    title: 'Site Acquisition Proposition for Small Cell/3G Data Offload',
    date: 'June 23, 2012',
    excerpt: "A site acquisition proposition for small cell deployment in high-density urban areas, drawing on AWTG’s experience building outdoor small cell networks for O2.",
  },
]

const caseStudyTopics = ['All', featured.tag, ...Array.from(new Set(studies.map((study) => study.tag)))]

export default function InsightsCaseStudiesPage() {
  const [activeTopic, setActiveTopic] = useState('All')
  const filteredStudies = activeTopic === 'All' ? studies : studies.filter((study) => study.tag === activeTopic)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] mb-6">Case Studies</h1>
          <p className="text-[#0a1628]/70 text-[16px] max-w-xl font-normal leading-[1.7]">
            Real projects, measurable outcomes. Eight case studies spanning Open RAN security, network economics, mobile benchmarking and urban connectivity.
          </p>
        </div>
      </section>

      <InsightsResourceNav
        activeResource="case-studies"
        activeTopic={activeTopic}
        topics={caseStudyTopics}
        onTopicChange={setActiveTopic}
      />

      {/* Featured */}
      <section className="bg-[#f8fafc] pb-0 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <Link
            to={`/insights/case-studies/${featured.slug}`}
            className="group block bg-white border border-gray-100 hover:border-[#228DC1] transition-all overflow-hidden"
          >
            <div className="grid lg:grid-cols-[1fr_360px]">
              {/* Left: content */}
              <div className="p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 ${tagColour[featured.tag]}`}>
                      {featured.tag}
                    </span>
                    <span className="text-[#0a1628]/40 text-xs">{featured.date}</span>
                  </div>
                  <h2 className="font-h2 text-[#0a1628] group-hover:text-[#228DC1] transition-colors mb-5">
                    {featured.title}
                  </h2>
                  <p className="text-[#0a1628]/60 text-[15px] font-normal leading-[1.75] max-w-lg">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-[#228DC1] text-sm font-semibold">
                  Read case study                </div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#0a1628]/50 mb-10">All case studies</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map(cs => (
              <Link
                key={cs.slug}
                to={`/insights/case-studies/${cs.slug}`}
                className="group bg-white border border-gray-100 hover:border-[#228DC1] hover:shadow-md transition-all flex flex-col overflow-hidden"
              >
                {/* Colour accent bar */}
                <div className={`h-1 w-full ${tagAccent[cs.tag] ?? 'bg-[#228DC1]'}`} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 ${tagColour[cs.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                      {cs.tag}
                    </span>
                    <span className="text-[#0a1628]/40 text-[11px]">{cs.date.split(' ').pop()}</span>
                  </div>
                  <h3 className="font-h5 text-[#0a1628] mb-3 group-hover:text-[#228DC1] transition-colors flex-1">
                    {cs.title}
                  </h3>
                  <p className="text-[#0a1628]/55 text-[13px] font-normal leading-[1.7] mb-6">
                    {cs.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#228DC1] text-[12px] font-semibold mt-auto">
                    Read case study                  </div>
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
