import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap, faUsers, faShield, faWifi, faMobile,
  faCloud, faSitemap, faNetworkWired, faLock, faArrowTrendUp,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faGears,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faUsers,
    title: 'High-density user environments',
    desc: 'Lecture theatres, libraries, student unions and halls of residence create extreme wireless density challenges. Networks must handle thousands of simultaneous connections without performance degradation.',
  },
  {
    icon: faMobile,
    title: 'BYOD and device proliferation',
    desc: 'Students and staff bring multiple personal devices onto campus networks. Managing access, security and performance across an unpredictable device estate requires thoughtful network architecture.',
  },
  {
    icon: faShield,
    title: 'Safeguarding and content filtering',
    desc: 'Schools and colleges have statutory safeguarding obligations that require appropriate internet filtering, monitoring and access controls for student networks — without blocking legitimate academic use.',
  },
  {
    icon: faSitemap,
    title: 'Multi-building and multi-site estates',
    desc: 'Education institutions operate across many buildings, campuses and sites with very different construction types, ages and legacy infrastructure — making consistent connectivity complex to deliver.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Budget and procurement constraints',
    desc: 'Education institutions must balance network performance investment against significant budget pressure — requiring efficient design, competitive procurement and clear return on investment.',
  },
]

const capabilities = [
  {
    icon: faWifi,
    title: 'Campus wireless networks',
    desc: 'High-density wireless network design and deployment for university campuses, schools and colleges — delivering reliable coverage across lecture spaces, libraries, labs and social areas.',
  },
  {
    icon: faShield,
    title: 'Safeguarding and content filtering',
    desc: 'Network-level content filtering and monitoring solutions for schools and colleges, meeting DfE requirements and Ofsted expectations for online safety and digital safeguarding.',
  },
  {
    icon: faNetworkWired,
    title: 'Campus LAN and core network infrastructure',
    desc: 'Structured cabling, switching and core network infrastructure for education campuses — designed for performance, reliability and long-term scalability.',
  },
  {
    icon: faCloud,
    title: 'Cloud and internet connectivity',
    desc: 'High-bandwidth internet and cloud connectivity for education institutions — supporting streaming, video conferencing, cloud-based learning platforms and research network access.',
  },
  {
    icon: faSitemap,
    title: 'Multi-site network management',
    desc: 'Unified network management across multi-site education estates, providing consistent performance, visibility and control whether a student is on the main campus or a satellite site.',
  },
  {
    icon: faLock,
    title: 'Network security and access control',
    desc: 'Identity-based network access control that distinguishes between staff, students and visitors — ensuring appropriate access, security segmentation and monitoring across the estate.',
  },
]

const services = [
  {
    icon: faWifi,
    title: 'Campus wireless design and deployment',
    desc: 'Survey, design and deployment of high-density wireless networks for education campuses — from schools and sixth forms to university estates with thousands of concurrent users.',
  },
  {
    icon: faShield,
    title: 'Safeguarding and filtering solutions',
    desc: 'Compliant internet filtering, monitoring and online safety solutions for schools and colleges — meeting statutory safeguarding requirements and supporting Ofsted readiness.',
  },
  {
    icon: faNetworkWired,
    title: 'Network infrastructure refresh',
    desc: 'Structured cabling, switching and core infrastructure modernisation for education sites with outdated or performance-limited network hardware.',
  },
  {
    icon: faCloud,
    title: 'Connectivity and internet services',
    desc: 'High-bandwidth internet, WAN and cloud connectivity services for education institutions, sized for the demands of modern digital learning and research.',
  },
  {
    icon: faGears,
    title: 'Network managed services for education',
    desc: 'Ongoing managed network services with SLAs, monitoring and support tailored to the academic calendar and operational requirements of education institutions.',
  },
]

const whyItems = [
  {
    icon: faGraduationCap,
    title: 'Education sector experience',
    desc: 'AWTG has delivered network infrastructure for education organisations, with understanding of the specific technical, safeguarding and commercial requirements of the sector.',
  },
  {
    icon: faShieldHalved,
    title: 'Safeguarding and compliance expertise',
    desc: 'We understand the online safety and safeguarding obligations that schools and colleges must meet, and design network solutions that support compliance without limiting legitimate use.',
  },
  {
    icon: faLayerGroup,
    title: 'High-density wireless engineering',
    desc: 'Our wireless network engineering capability is specifically suited to the high-density, high-demand environments that university and college campuses present.',
  },
  {
    icon: faUserShield,
    title: 'Long-term partnership approach',
    desc: 'Education institutions need reliable, responsive partners for ongoing network support. AWTG offers managed services with the continuity and accountability that multi-year relationships require.',
  },
]

export default function ConnectivityEducationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Connectivity for education
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG designs and delivers campus wireless, safeguarding solutions and network infrastructure for schools, colleges and universities — built for the demands of modern digital learning environments.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Talk to our experts
            </Link>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              Connectivity challenges in education
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Education institutions face a unique combination of density, diversity and compliance demands. These are the challenges AWTG helps schools, colleges and universities address.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(c => (
              <div key={c.title} className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What connectivity supports ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              What AWTG delivers for education connectivity
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG delivers connectivity solutions designed for the specific environment of education — high-density user populations, safeguarding obligations and the diverse infrastructure of modern campuses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(c => (
              <div key={c.title} className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service blocks ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              How AWTG can help
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              AWTG structures education connectivity delivery around the real demands of schools, colleges and universities — from campus wireless and safeguarding to managed network services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {services.map(s => (
              <div key={s.title} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={s.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-card-heading text-[#0a1628] text-[15px] mb-2">{s.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AWTG ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              Why AWTG
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG brings education sector understanding, safeguarding expertise and campus wireless engineering capability to schools, colleges and universities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {whyItems.map(w => (
              <div key={w.title} className="flex gap-5">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center text-[#228DC1] mt-0.5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={w.icon} style={{ fontSize: 17 }} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-1.5">{w.title}</h3>
                  <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Connectivity for schools, colleges and universities"
        subtitle="Speak to AWTG about campus wireless, safeguarding solutions and network infrastructure for education institutions."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
