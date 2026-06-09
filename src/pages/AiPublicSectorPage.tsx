import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding, faShield, faDatabase, faUsers, faClipboardList,
  faComments, faMagnifyingGlass, faChartLine, faRobot, faGears,
  faShieldHalved, faUserShield, faArrowTrendUp, faDiagramProject, faLock,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faUsers,
    title: 'High volumes of public enquiries',
    desc: 'Public sector organisations face enormous volumes of inbound queries from citizens about services, entitlements, applications and processes — far exceeding the capacity of front-line teams.',
  },
  {
    icon: faClipboardList,
    title: 'Administrative burden on staff',
    desc: 'Complex case management, regulatory reporting and document processing consume significant staff time that could be directed toward delivering services and resolving the most complex issues.',
  },
  {
    icon: faShield,
    title: 'Data security and compliance requirements',
    desc: 'AI deployments in the public sector must meet stringent information security standards, data protection obligations and public accountability requirements that commercial deployments may not face.',
  },
  {
    icon: faBuilding,
    title: 'Legacy systems and infrastructure',
    desc: 'Many public sector organisations rely on legacy IT that was not designed to integrate with modern AI platforms — requiring thoughtful approaches to integration that avoid disruption to live services.',
  },
  {
    icon: faDatabase,
    title: 'Accurate, trusted information at scale',
    desc: 'Citizens need reliable answers to complex questions about entitlements, procedures and services. AI used in this context must draw only on approved, current guidance and operate with clear accountability.',
  },
]

const capabilities = [
  {
    icon: faComments,
    title: 'Citizen service and enquiry support',
    desc: 'AI can handle a high proportion of common citizen enquiries using approved guidance and service information, reducing pressure on front-line teams while improving speed of response.',
  },
  {
    icon: faMagnifyingGlass,
    title: 'Knowledge and policy management',
    desc: 'Help staff navigate complex policy and procedure documentation quickly, reducing time spent searching and improving the consistency of advice given to citizens.',
  },
  {
    icon: faRobot,
    title: 'Case processing and workflow support',
    desc: 'Support caseworkers with AI that assists document review, data extraction and case management tasks — freeing time for the human judgement that complex cases require.',
  },
  {
    icon: faChartLine,
    title: 'Service demand intelligence',
    desc: 'Turn citizen interactions into useful insight, helping organisations identify emerging issues, predict demand, and direct resource to where it will have the greatest impact.',
  },
  {
    icon: faGears,
    title: 'Internal productivity and staff support',
    desc: 'Help public sector teams work more efficiently with AI that assists drafting, research, translation and internal knowledge management — reducing time spent on routine cognitive tasks.',
  },
  {
    icon: faLock,
    title: 'Secure, compliant AI deployment',
    desc: 'Every deployment is designed around the data security, governance and transparency requirements of public sector operation, with full audit trails and human oversight built in.',
  },
]

const services = [
  {
    icon: faComments,
    title: 'AI citizen service assistant',
    desc: 'A conversational AI layer that answers common citizen questions using approved service and policy content, with clear escalation pathways to human advisors.',
  },
  {
    icon: faMagnifyingGlass,
    title: 'AI for internal knowledge and policy',
    desc: 'Help staff find the right policy, procedure or guidance quickly — reducing inconsistency in advice and cutting the time teams spend searching internal systems.',
  },
  {
    icon: faChartLine,
    title: 'Service analytics and demand intelligence',
    desc: 'Build a picture of citizen needs from interaction data — identifying trends, anticipating demand spikes and supporting evidence-based decisions about service design.',
  },
  {
    icon: faRobot,
    title: 'AI-assisted case processing',
    desc: 'Support caseworkers with document processing, data extraction and workflow AI that reduces the administrative component of case management.',
  },
  {
    icon: faUsers,
    title: 'Human oversight and escalation design',
    desc: 'Design escalation frameworks that ensure complex, sensitive or contested cases are always handled by trained human staff, with full context preserved from AI interactions.',
  },
]

const whyItems = [
  {
    icon: faShieldHalved,
    title: 'Security and compliance first',
    desc: 'AWTG designs every AI deployment around information security, data protection and public accountability requirements — with full audit trails, governance documentation and clear oversight.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Measurable outcomes from deployment',
    desc: 'Our AI programmes are built around measurable containment, satisfaction and productivity targets — with reporting frameworks that meet public sector accountability expectations.',
  },
  {
    icon: faDiagramProject,
    title: 'Integration with existing public sector systems',
    desc: 'AWTG has experience integrating AI with the legacy platforms, document management systems and case management tools common in public sector organisations.',
  },
  {
    icon: faUserShield,
    title: 'Responsible AI built for public trust',
    desc: 'Public trust depends on transparent, accountable AI. Every AWTG deployment is designed with explainability, human oversight and clear escalation in mind.',
  },
]

export default function AiPublicSectorPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              AI for the public sector
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG helps public sector organisations use AI to improve citizen services, reduce administrative burden and deliver better outcomes within the security and compliance frameworks that public service demands.
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
              Challenges facing the public sector
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Public sector organisations must serve more citizens with constrained resources while maintaining accuracy, security and accountability. These are the pressures AI directly helps address.
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

      {/* ── What AI supports ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              What AI can support in public services
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              Through platforms such as Kai, AWTG helps public sector organisations build an AI layer that improves citizen service quality, supports staff productivity and maintains the security and accountability standards that public organisations require.
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
              AWTG structures AI delivery for public sector organisations around focused service areas, each designed to deliver measurable improvement to citizen experience and operational efficiency.
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
              AWTG brings proven AI delivery experience to public sector organisations, with a track record in large-scale service environments and the governance rigour that public accountability demands.
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
        title="AI for public sector service delivery"
        subtitle="Speak to AWTG about responsible AI for citizen services, case management and public sector operations."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
