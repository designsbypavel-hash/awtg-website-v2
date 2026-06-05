import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'

// -- Featured clients — hero treatment --------------------------------------
const featured = [
  {
    client: 'October 7, 2024',
    tag: 'Open RAN Security',
    outcome: 'iTRUSTRIC - Securing Open RAN with AWTG’s Advanced Solution',
    desc: 'AWTG addresses Open RAN security with iTRUSTRIC, a solution designed to protect data flows, improve network visibility and support compliance across Open RAN environments.',
    deliverable: 'Open RAN security and assurance',
    sector: 'Telecommunications',
    href: 'https://www.awtg.co.uk/itrustric-securing-open-ran-with-awtgs-advanced-solution',
  },
]

// -- Supporting case studies -------------------------------------------------
const supporting = [
  {
    client: 'September 17, 2021',
    title: 'Connectivity, Software and Services for High Street Recovery',
    sector: 'Public Sector',
    stat: '2021',
    statLabel: 'Published',
    desc: 'A local authority focused case study on high street recovery, place-making strategies, reuse of buildings, public realm improvements, business support and active travel plans.',
    href: 'https://www.awtg.co.uk/connectivity-software-and-services-for-high-street-recovery-2',
  },
  {
    client: 'April 20, 2020',
    title: 'AWTG’s Service Assurance and Service Creation Platform',
    sector: 'Network Economics',
    stat: '2020',
    statLabel: 'Published',
    desc: 'A GSMA validated case study with TOT on AWTG’s Integrated Service Assurance and Service Creation Platform, operational savings, new service creation and network economics.',
    href: 'https://www.awtg.co.uk/awtgs-service-assurance-and-service-creation-platform',
  },
  {
    client: 'May 6, 2018',
    title: 'Central London Benchmarking',
    sector: 'Mobile Networks',
    stat: '2018',
    statLabel: 'Published',
    desc: 'A pilot mobile service benchmarking trial in Central London, covering multidimensional analysis across major mobile network operators, 3G voice, data and emerging services.',
    href: 'https://www.awtg.co.uk/central-london-benchmarking',
  },
  {
    client: 'September 2, 2013',
    title: 'Data Offloading with WiFi enabled devices',
    sector: 'Capacity Planning',
    stat: '2013',
    statLabel: 'Published',
    desc: 'A study of WiFi enabled devices, carrier-class WiFi, mobile data pressure and seamless offloading between WiFi and traditional mobile access technologies.',
    href: 'https://www.awtg.co.uk/data-offloading-with-wifi-enabled-devices',
  },
  {
    client: 'September 1, 2013',
    title: 'AKT - Stability Testing - Scenario',
    sector: 'Performance Testing',
    stat: '2013',
    statLabel: 'Published',
    desc: 'A network stability test scenario measuring user experience over several days, using broadband tester agents to estimate speed, reliability and quality of experience.',
    href: 'https://www.awtg.co.uk/akt-stability-testing-scenario',
  },
  {
    client: 'June 23, 2012',
    title: 'Rich Communications Suite',
    sector: 'Mobile Services',
    stat: '2012',
    statLabel: 'Published',
    desc: 'A case study explaining the GSMA RCS-e initiative and its relevance for mobile network operators delivering richer voice, data, video and messaging services.',
    href: 'https://www.awtg.co.uk/rich-communications-suite',
  },
  {
    client: 'June 23, 2012',
    title: 'Site Acquisition Proposition for Small Cell/3G Data Offload',
    sector: 'Site Acquisition',
    stat: '2012',
    statLabel: 'Published',
    desc: 'A proposition for small cells and 3G data offload in high-density locations where mobile data growth creates pressure on operator network capacity.',
    href: 'https://www.awtg.co.uk/site-acquisition-proposition-for-small-cell-3g-data-offload',
  },
]

export default function InsightsCaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-4">Insights</p>
          <h1 className="font-serif-display text-[#0a1628] mb-6">
            Case Studies
          </h1>
          <p className="text-[#0a1628]/70 text-[16px] max-w-xl font-normal leading-[1.7]">
            The complete AWTG case-study library, aligned with the source content and linked back to each original study.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-[#f8fafc] border-t border-gray-100 pb-0">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-0">
          <div className="grid gap-px bg-[#0a1628]/5">
            {featured.map((f, i) => (
              <a
                key={f.outcome}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#f8fafc] p-10 flex flex-col justify-between hover:bg-[#0f2347] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="type-label text-[#228DC1]">{f.tag}</p>
                    <span className="type-label text-[#0a1628]/60 group-hover:text-white/45">0{i + 1}</span>
                  </div>
                  {/* Client name — the hero */}
                  <p className="font-black text-[#0a1628] group-hover:text-white mb-2 transition-colors" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {f.client}
                  </p>
                  {/* Scannable outcome */}
                  <p className="text-[#228DC1] font-semibold text-[16px] leading-[1.3] mb-5">
                    {f.outcome}
                  </p>
                  <p className="text-[#0a1628]/60 group-hover:text-white/62 text-[14px] font-normal leading-[1.7] transition-colors">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-gray-100 group-hover:border-white/12 pt-6 transition-colors">
                  <span className="text-[#0a1628]/65 group-hover:text-white/55 text-xs font-normal transition-colors">{f.deliverable}</span>
                  <span className="type-label text-[#228DC1] group-hover:text-white transition-colors flex items-center gap-2">
                    Read case study <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting case studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#0a1628]/60 mb-10">More projects</p>
          <div className="space-y-px bg-gray-100 border border-gray-100">
            {supporting.map(cs => (
              <a
                key={cs.title}
                href={cs.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white grid lg:grid-cols-[1fr_auto] gap-8 p-8 hover:bg-[#f7f8fa] transition-colors"
              >
                <div className="grid lg:grid-cols-[200px_1fr] gap-6">
                  {/* Client name — prominent */}
                  <div>
                    <p className="font-bold text-[#0a1628] text-[16px] leading-[1.3] mb-1">{cs.client}</p>
                    <span className="type-label text-[#228DC1]">{cs.sector}</span>
                  </div>
                  <div>
                    <h2 className="font-card-heading text-[#0a1628] text-[14px] mb-2">{cs.title}</h2>
                    <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7]">{cs.desc}</p>
                  </div>
                </div>
                {/* Stat */}
                <div className="flex flex-col justify-center items-end min-w-[100px]">
                  <p className="font-black text-[#228DC1]" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>{cs.stat}</p>
                  <p className="type-label text-[#0a1628]/60 text-right mt-1">{cs.statLabel}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#228DC1]">
                    Read <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </span>
                </div>
              </a>
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

