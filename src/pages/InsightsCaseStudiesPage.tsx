import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'

// ── Featured clients — hero treatment ──────────────────────────────────────
const featured = [
  {
    client: 'iTRUSTRIC',
    tag: 'Open RAN Security',
    outcome: 'Securing Open RAN with AWTG’s advanced solution.',
    desc: 'In the rapidly evolving world of telecommunications, Open RAN introduces new security and visibility challenges. AWTG developed iTRUSTRIC to enhance Open RAN integrity, protect data flows, improve network visibility and support compliance across modern network environments.',
    deliverable: 'iTRUSTRIC: Open RAN security and assurance',
    sector: 'Telecommunications / October 2024',
  },
]

// ── Supporting case studies ─────────────────────────────────────────────────
const supporting = [
  {
    client: 'High Street Recovery',
    title: 'Connectivity, software and services for high street recovery',
    sector: 'Public Sector',
    stat: 'Sep 2021',
    statLabel: 'Published',
    desc: 'AWTG supported town and city centre recovery through connectivity, software and digital services designed around local authority place-making strategies and changing retail conditions.',
  },
  {
    client: 'TOT and GSMA',
    title: 'AWTG’s Service Assurance and Service Creation Platform',
    sector: 'Network Economics',
    stat: 'Apr 2020',
    statLabel: 'Published',
    desc: 'A GSMA-validated case study with TOT explored AWTG’s integrated service assurance and service creation platform, focusing on operational efficiency and service management opportunities.',
  },
  {
    client: 'Central London Benchmarking',
    title: 'Multidimensional mobile service benchmarking',
    sector: 'Mobile Networks',
    stat: 'May 2018',
    statLabel: 'Published',
    desc: 'AWTG carried out a pilot benchmarking trial in Central London, assessing mobile network performance across voice, data and emerging service capabilities.',
  },
  {
    client: 'Data Offloading',
    title: 'Wi-Fi enabled devices and mobile data offload',
    sector: 'Capacity Planning',
    stat: 'Sep 2013',
    statLabel: 'Published',
    desc: 'The study examined how dual-mode smartphones, tablets and laptops could use Wi-Fi data offloading to reduce pressure on mobile networks and improve user experience.',
  },
  {
    client: 'AKT',
    title: 'Network stability testing scenario',
    sector: 'Performance Testing',
    stat: 'Sep 2013',
    statLabel: 'Published',
    desc: 'AWTG measured network stability and user experience over time using a defined hardware setup, estimating speed and reliability from a simulated user perspective.',
  },
  {
    client: 'Rich Communications Suite',
    title: 'RCS-e relevance for mobile network operators',
    sector: 'Mobile Services',
    stat: 'Jun 2012',
    statLabel: 'Published',
    desc: 'The paper explained the rationale behind the GSMA RCS-e initiative and its relevance for operators delivering richer voice, data, video and messaging experiences.',
  },
  {
    client: 'Small Cell and 3G Data Offload',
    title: 'Site acquisition proposition for overloaded urban networks',
    sector: 'Site Acquisition',
    stat: 'Jun 2012',
    statLabel: 'Published',
    desc: 'AWTG explored how small cells and data offload could help operators address capacity pressure in dense environments such as urban centres, transport hubs and public locations.',
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
            Real project examples from AWTG’s work across telecoms security, service assurance, network benchmarking, data offload and mobile service innovation.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-[#f8fafc] border-t border-gray-100 pb-0">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-0">
          <div className="grid gap-px bg-[#0a1628]/5">
            {featured.map((f, i) => (
              <div key={f.client} className="bg-[#f8fafc] p-10 flex flex-col justify-between hover:bg-[#0f2347] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="type-label text-[#228DC1]">{f.tag}</p>
                    <span className="type-label text-[#0a1628]/60">0{i + 1}</span>
                  </div>
                  {/* Client name — the hero */}
                  <p className="font-black text-[#0a1628] mb-2" style={{ fontSize: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {f.client}
                  </p>
                  {/* Scannable outcome */}
                  <p className="text-[#228DC1] font-semibold text-[16px] leading-[1.3] mb-5">
                    {f.outcome}
                  </p>
                  <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7]">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                  <span className="text-[#0a1628]/65 text-xs font-normal">{f.deliverable}</span>
                  <Link to="/contact" className="type-label text-[#228DC1] hover:text-white transition-colors flex items-center gap-2">
                    Discuss a similar project <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </Link>
                </div>
              </div>
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
              <div
                key={cs.title}
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
                </div>
              </div>
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
