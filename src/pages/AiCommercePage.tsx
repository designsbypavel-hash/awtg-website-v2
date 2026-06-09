import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendUp, faHeadset, faMagnifyingGlass, faCartShopping, faLanguage,
  faComments, faRotateLeft, faTruck, faGlobe, faChartLine,
  faBuilding, faUserShield, faUsers,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faArrowTrendUp,
    title: 'Fast response expectations',
    desc: 'Customers expect immediate answers. Slow or inconsistent responses damage trust, increase abandoned journeys and push avoidable contact into already stretched support teams.',
  },
  {
    icon: faHeadset,
    title: 'Support team overload',
    desc: 'High volumes of repetitive queries around orders, delivery, returns and policies consume team capacity that could be focused on complex or high-value customer interactions.',
  },
  {
    icon: faMagnifyingGlass,
    title: 'Product discovery gaps',
    desc: 'Customers who cannot find the right product information, compare options clearly or get answers to buying questions often leave without converting.',
  },
  {
    icon: faCartShopping,
    title: 'Missed conversion opportunities',
    desc: 'Too many sales opportunities are lost because customers cannot find what they need at the right moment in the journey, across web, chat and support channels.',
  },
  {
    icon: faLanguage,
    title: 'Multilingual service complexity',
    desc: 'Retail and commerce businesses serving customers across languages and regions struggle to maintain consistent, accurate and accessible service at scale.',
  },
]

const capabilities = [
  {
    icon: faComments,
    title: 'Customer service automation',
    desc: 'AI can help answer common service questions quickly using approved content — covering delivery, returns, refunds, opening hours, policies and support routes.',
  },
  {
    icon: faMagnifyingGlass,
    title: 'Product questions and buying support',
    desc: 'Help customers understand product information, compare options, check compatibility and get clearer answers at the point of interest before they leave the page.',
  },
  {
    icon: faRotateLeft,
    title: 'Returns, refunds and policy guidance',
    desc: 'Guide customers through approved policy information, explain next steps and reduce unnecessary back and forth with support teams around returns and refunds.',
  },
  {
    icon: faTruck,
    title: 'Order and delivery support',
    desc: 'Support order-related journeys with guidance around delivery options, tracking, dispatch information and common fulfilment questions where integrations allow.',
  },
  {
    icon: faGlobe,
    title: 'Multilingual customer engagement',
    desc: 'Provide faster multilingual support while keeping responses aligned with approved business guidance, serving customers across languages and regions consistently.',
  },
  {
    icon: faChartLine,
    title: 'Customer insight and demand trends',
    desc: 'Turn every customer interaction into useful insight — identifying repeated questions, confusing journey points, common product concerns and topics affecting conversion.',
  },
]

const services = [
  {
    icon: faHeadset,
    title: 'AI customer service for retail',
    desc: 'Support customers with fast, consistent answers across common service questions including delivery, returns, refunds, opening hours, policies and support routes.',
  },
  {
    icon: faMagnifyingGlass,
    title: 'AI product guidance',
    desc: 'Help customers understand product information, compare options and get answers to buying questions before they leave the page or abandon the journey.',
  },
  {
    icon: faCartShopping,
    title: 'AI for ecommerce support',
    desc: 'Support online customer journeys with guidance around checkout, delivery, account questions, promotions, fulfilment and post-purchase support.',
  },
  {
    icon: faChartLine,
    title: 'AI insight for retail teams',
    desc: 'Turn customer questions into useful insight, helping teams understand repeated issues, product confusion, content gaps and customer intent.',
  },
  {
    icon: faUsers,
    title: 'Human handover and escalation',
    desc: 'Keep people in control by routing sensitive, complex or unresolved queries to the right human team with full context preserved.',
  },
]

const whyItems = [
  {
    icon: faBuilding,
    title: 'Proven at enterprise scale',
    desc: 'AWTG has delivered AI customer service capability through Kai, including large-scale deployment with the British Council, giving us practical experience in real-world service environments.',
  },
  {
    icon: faLanguage,
    title: 'Multilingual AI capability',
    desc: 'Our AI platforms are designed to support multilingual customer engagement while maintaining consistency with approved business content and guidance.',
  },
  {
    icon: faChartLine,
    title: 'Analytics and insight built in',
    desc: 'AWTG builds AI with operational visibility from the start, helping teams understand demand patterns, service gaps and friction points in the customer journey.',
  },
  {
    icon: faUserShield,
    title: 'Human oversight by design',
    desc: 'Every AWTG AI deployment is designed with escalation and human handover in mind, ensuring the right queries reach the right people when needed.',
  },
]

export default function AiCommercePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              AI for commerce, retail and customer operations
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG helps commerce and retail organisations use AI to improve customer service, support buying journeys and give teams better insight into what customers need.
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
              Challenges in commerce and retail
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Retail and commerce teams cannot afford slow responses, inconsistent information or missed customer intent. These are the pressures that AI directly helps address.
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
              What AI can support in commerce and retail
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              Through platforms such as Kai, AWTG helps businesses create an AI layer that understands approved content, supports customer service teams and improves the customer journey before, during and after purchase.
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
              AWTG structures AI delivery around focused service areas, ensuring each capability is grounded in real customer need and operational context.
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
              AWTG brings practical AI delivery experience to commerce and retail, built on real deployments rather than pilots that never scaled.
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
        title="AI for commerce and retail customer service"
        subtitle="Speak to AWTG about AI for commerce, retail customer service and ecommerce support."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
