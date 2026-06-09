import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSitemap, faDatabase, faUsers, faGears, faLayerGroup,
  faRobot, faBrain, faChartLine, faLightbulb, faCode,
  faBuilding, faUserShield, faShieldHalved, faDiagramProject, faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faSitemap,
    title: 'Siloed data and disconnected systems',
    desc: 'Organisations often hold knowledge and data across dozens of disconnected platforms. AI cannot deliver value unless it can access, synthesise and act on the right information.',
  },
  {
    icon: faGears,
    title: 'Manual processes at scale',
    desc: 'High-volume repetitive processes consume significant operational resource. Without intelligent automation, teams remain trapped in manual work that limits scalability and agility.',
  },
  {
    icon: faUsers,
    title: 'Change management complexity',
    desc: 'Digital transformation fails as often due to people and culture as technology. AI adoption requires structured change management, clear use cases and measurable outcomes.',
  },
  {
    icon: faLayerGroup,
    title: 'Legacy infrastructure constraints',
    desc: 'Many organisations carry legacy technology debt that complicates AI integration. Incremental modernisation strategies are needed to unlock AI value without full system replacement.',
  },
  {
    icon: faDatabase,
    title: 'Data quality and governance',
    desc: 'AI is only as reliable as the data it uses. Inconsistent, incomplete or ungoverned data leads to outputs that cannot be trusted — and that damage confidence in AI programmes overall.',
  },
]

const capabilities = [
  {
    icon: faRobot,
    title: 'Intelligent process automation',
    desc: 'Automate high-volume, rule-based processes using AI — reducing manual effort, improving accuracy and freeing teams to focus on higher-value work.',
  },
  {
    icon: faBrain,
    title: 'Knowledge management and search',
    desc: 'Help staff find the right information faster by creating AI-powered knowledge layers that surface relevant content from across enterprise systems and repositories.',
  },
  {
    icon: faChartLine,
    title: 'Decision support and analytics',
    desc: 'Support better decision-making with AI that can analyse operational data, surface trends and highlight anomalies — giving leaders clearer, faster intelligence.',
  },
  {
    icon: faLightbulb,
    title: 'Customer and citizen service transformation',
    desc: 'Use AI to transform how organisations interact with customers, citizens or members — delivering faster, more consistent responses at scale without proportional cost growth.',
  },
  {
    icon: faCode,
    title: 'Developer and productivity AI',
    desc: 'Accelerate internal productivity with AI tools that help teams draft, summarise, translate and create — reducing time spent on routine cognitive tasks.',
  },
  {
    icon: faDiagramProject,
    title: 'Workflow integration and orchestration',
    desc: 'Connect AI capability to existing business workflows, CRM platforms, collaboration tools and operational systems without requiring wholesale system replacement.',
  },
]

const services = [
  {
    icon: faBrain,
    title: 'AI strategy and use-case design',
    desc: 'Help organisations identify where AI creates the most value, define use cases with measurable outcomes and build a phased roadmap for responsible AI deployment.',
  },
  {
    icon: faRobot,
    title: 'Conversational AI and knowledge agents',
    desc: 'Deploy AI agents that understand and respond to employee and customer queries using approved organisational content, with full audit trails and oversight.',
  },
  {
    icon: faChartLine,
    title: 'AI-powered analytics and insight',
    desc: 'Surface operational insight from internal data sources — helping teams understand performance, demand patterns and process inefficiencies faster.',
  },
  {
    icon: faGears,
    title: 'Process automation and workflow AI',
    desc: 'Identify and automate high-volume repetitive processes, integrating AI into existing operational workflows for measurable efficiency gains.',
  },
  {
    icon: faUsers,
    title: 'Change management and AI adoption',
    desc: 'Support the human side of AI transformation — designing communication, training and adoption programmes that build confidence and drive sustainable change.',
  },
]

const whyItems = [
  {
    icon: faBuilding,
    title: 'End-to-end delivery capability',
    desc: 'AWTG delivers AI from strategy through to deployment and ongoing support, ensuring transformation programmes are grounded in real outcomes rather than theoretical roadmaps.',
  },
  {
    icon: faArrowTrendUp,
    title: 'Proven impact from day one',
    desc: 'Our AI programmes are designed to deliver measurable containment, productivity and satisfaction improvements from the first weeks of operation, not after months of configuration.',
  },
  {
    icon: faShieldHalved,
    title: 'Responsible AI and governance built in',
    desc: 'Every AWTG deployment includes clear governance frameworks, audit trails, human oversight and escalation design — meeting the expectations of enterprise compliance and risk teams.',
  },
  {
    icon: faUserShield,
    title: 'People-first transformation approach',
    desc: 'We combine technical delivery with structured change management, ensuring AI programmes succeed because teams understand, trust and adopt the tools we deploy.',
  },
]

export default function AiDigitalTransformationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              AI for digital transformation
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG helps organisations embed AI into their digital transformation programmes — automating processes, improving knowledge access and delivering measurable outcomes across operations.
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
              Challenges in digital transformation
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Most organisations recognise the need to transform. Fewer successfully embed AI in ways that scale beyond pilots. These are the barriers AWTG helps organisations overcome.
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
              Where AI accelerates transformation
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG identifies the points in your organisation where AI creates the most value, then delivers solutions that integrate with existing systems and workflows rather than replacing them wholesale.
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
              AWTG structures AI transformation delivery around clear service areas, each designed to produce measurable outcomes that justify investment and enable the next phase of change.
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
              AWTG delivers AI transformation programmes that move past the proof-of-concept stage to production systems that run at scale and generate real returns.
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
        title="AI-led digital transformation"
        subtitle="Speak to AWTG about embedding AI into your organisation's transformation programme for measurable impact."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
