import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const products = [
  {
    name: 'Kai',
    tag: 'Enterprise AI Platform',
    color: '#228DC1',
    desc: 'Kai is our production enterprise AI platform. Live, not a concept. It handles customer conversations at scale, connects to your existing systems, and gives you clear visibility of what is working through real-time dashboards and satisfaction metrics.',
    proof: 'Live with British Council English Online',
    features: [
      'Handles high volumes of customer interactions in production',
      'Connects to existing CRMs and enterprise systems',
      'Real-time dashboards with CSAT and containment data',
      'Human-in-the-loop escalation when AI hands off to people',
    ],
  },
  {
    name: 'Aruva',
    tag: 'Agentic Education AI',
    color: '#059669',
    desc: 'Aruva is an agentic AI platform built for schools and institutions. It personalises learning for every student, automates content delivery, and gives educators real-time insight into progress, without adding to their workload.',
    proof: 'Education sector deployments across the UK',
    features: [
      'Agentic AI that adapts to each individual learner',
      'Automated content delivery and curriculum support',
      'Real-time student progress and engagement analytics',
      'Secure, institution-grade deployment and governance',
    ],
  },
  {
    name: 'Ella',
    tag: 'Voice AI, Est. 2016',
    color: '#7c3aed',
    desc: "Ella was AWTG's first AI product, a voice command and control solution launched in 2016, the first of its kind in the market at the time. Ella established AWTG's AI engineering capability and laid the foundation for Kai and Aruva.",
    proof: 'First voice AI of its kind at launch',
    features: [
      'Voice command and control interface',
      'First-generation natural language processing',
      'Foundation for AWTG\'s AI product heritage',
      'Launched commercially in 2016',
    ],
  },
]

const caseStudies = [
  {
    client: 'British Council',
    project: 'English Online: Kai in Production',
    outcome: 'British Council needed to handle a high volume of learner enquiries without scaling their support team. AWTG deployed Kai and integrated it directly into their systems. It now handles the bulk of interactions, reduces escalations, and tracks satisfaction in real time.',
    tags: ['Enterprise AI', 'Customer Service', 'Live Production'],
  },
]

export default function GenerativeAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 opacity-[0.16]" style={{ background: 'radial-gradient(circle at 82% 18%, #228DC1 0, transparent 34%), radial-gradient(circle at 12% 82%, #7c3aed 0, transparent 28%)' }} />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-end">
          <div>
            <h1 className="font-serif-display text-[#0a1628] leading-[1.02] mb-6">
              Generative AI
            </h1>
            <p className="text-[#0a1628]/60 text-[16px] max-w-xl font-normal leading-[1.7] mb-3">
              Most AI projects never reach production. Ours do. We build AI that works inside real organisations, connected to your systems, governed by your rules, and measured by actual outcomes.
            </p>
            <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7] max-w-xl mb-9">
              Kai, Aruva and our AI consultancy practice are evidence of this. We have been shipping AI since 2016.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-colors">
                Request a Demo
              </Link>
              <Link to="/solutions" className="inline-flex items-center gap-2 px-7 py-3.5 text-[#0a1628]/60 hover:text-[#228DC1] text-sm font-medium transition-colors">
                View all solutions
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative h-[340px] overflow-hidden bg-[#0a1628]/4">
              <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1100&q=85&auto=format&fit=crop" alt="Generative AI" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="border border-white/12 bg-[#0a1628]/4 px-6 py-5">
              <p className="text-[#0a1628]/60 text-[14px] uppercase tracking-[0.2em] font-semibold mb-2">Focus</p>
              <p className="text-[#0a1628] text-[16px] font-medium leading-[1.3]">Production-ready AI: Kai, Aruva and enterprise GenAI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-10 grid sm:grid-cols-3 gap-8">
          <div><p className="text-[#0a1628] text-[28px] font-semibold mb-1">2016</p><p className="text-[#0a1628]/60 text-[14px] font-normal uppercase tracking-[0.18em]">AI products shipping since</p></div>
          <div><p className="text-[#0a1628] text-[28px] font-semibold mb-1">3</p><p className="text-[#0a1628]/60 text-[14px] font-normal uppercase tracking-[0.18em]">Production AI products</p></div>
          <div><p className="text-[#0a1628] text-[28px] font-semibold mb-1">Enterprise</p><p className="text-[#0a1628]/60 text-[14px] font-normal uppercase tracking-[0.18em]">Governed, secure deployment</p></div>
        </div>
      </section>

      {/* FEATURED – Kai */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-8">Featured</p>
          <div className="bg-white border border-gray-100 overflow-hidden shadow-[0_2px_24px_rgba(10,22,40,0.06)]">
            {/* Code editor mockup */}
            <div className="border-b border-gray-100 overflow-hidden bg-white" style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}>
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f0f0f0] border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-[#fc5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="flex-1 text-center text-[12px] text-[#666] font-medium tracking-tight">AI Agent Composer - Retail Hub</span>
              </div>
              {/* Editor body */}
              <div className="flex bg-[#fafafa]" style={{ minHeight: 340 }}>
                {/* Sidebar icons */}
                <div className="flex flex-col items-center gap-4 px-3 py-5 bg-[#f3f3f3] border-r border-gray-200">
                  {['M3 12h18M3 6h18M3 18h18', 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18', 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7', 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', 'M13 10V3L4 14h7v7l9-11h-7z', 'M4 6h16M4 10h16M4 14h16M4 18h16'].map((d, i) => (
                    <svg key={i} className="w-4 h-4 text-[#888]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>
                  ))}
                </div>
                {/* Code area */}
                <div className="flex-1 p-4 text-[11.5px] leading-[1.75] overflow-hidden select-none">
                  {[
                    { ln: 1,  tokens: [{ t: '• Core System Config', c: '#888' }] },
                    { ln: 2,  tokens: [{ t: 'SUPERVISOR', c: '#0e7490' }, { t: ': ', c: '#444' }, { t: 'Retail_Manager', c: '#1a1a1a' }] },
                    { ln: 3,  tokens: [{ t: 'GOAL', c: '#0e7490' }, { t: ': ', c: '#444' }, { t: '"Enhance the end-to-end retail customer e…"', c: '#b45309' }] },
                    { ln: 4,  tokens: [{ t: 'PERSONA', c: '#0e7490' }, { t: ': |', c: '#444' }] },
                    { ln: 5,  tokens: [{ t: '  ', c: '#444' }, { t: '"Helpful, approachable, and product-aware…"', c: '#b45309' }] },
                    { ln: 6,  tokens: [] },
                    { ln: 7,  tokens: [{ t: '• Capability Modules', c: '#888' }] },
                    { ln: 8,  tokens: [{ t: 'CAPABILITIES', c: '#0e7490' }, { t: ':', c: '#444' }] },
                    { ln: 9,  tokens: [{ t: '  ', c: '#444' }, { t: 'order_lookup', c: '#b45309' }, { t: ':', c: '#444' }] },
                    { ln: 10, tokens: [{ t: '    { service: Order_Service, parameters: { or…', c: '#555' }] },
                    { ln: 11, tokens: [{ t: '  ', c: '#444' }, { t: 'inventory_status', c: '#b45309' }, { t: ':', c: '#444' }] },
                    { ln: 12, tokens: [{ t: '    { service: Inventory_Service, parameters: {…', c: '#555' }] },
                    { ln: 13, tokens: [{ t: '  ', c: '#444' }, { t: 'recommendation_engine', c: '#b45309' }, { t: ':', c: '#444' }] },
                    { ln: 14, tokens: [{ t: '    { service: Reco_Service, parameters: { user…', c: '#555' }] },
                    { ln: 15, tokens: [] },
                    { ln: 16, tokens: [{ t: '• Typed Tool Definitions', c: '#888' }] },
                    { ln: 17, tokens: [{ t: 'TOOLS', c: '#0e7490' }, { t: ':', c: '#444' }] },
                    { ln: 18, tokens: [{ t: '  ', c: '#444' }, { t: 'Apply_discount', c: '#b45309' }, { t: ' (code: string, cart_id: string…', c: '#555' }] },
                    { ln: 19, tokens: [{ t: '    description: ', c: '#555' }, { t: '"Apply a valid coupon code to…"', c: '#b45309' }] },
                    { ln: 20, tokens: [{ t: '  ', c: '#444' }, { t: 'Create_order', c: '#b45309' }, { t: ' (items: [{sku: string, quantity…', c: '#555' }] },
                    { ln: 21, tokens: [{ t: '    description: ', c: '#555' }, { t: '"Process a new order."', c: '#b45309' }, { t: ' }', c: '#555' }] },
                    { ln: 22, tokens: [{ t: '  ', c: '#444' }, { t: 'Initiate_return', c: '#b45309' }, { t: ' (order_id: string, reason: st…', c: '#555' }] },
                    { ln: 23, tokens: [{ t: '    description: ', c: '#555' }, { t: '"Process a customer return req…"', c: '#b45309' }] },
                    { ln: 24, tokens: [{ t: '  ', c: '#444' }, { t: 'Update_inventory', c: '#b45309' }, { t: ' (sku: string, change: intege…', c: '#555' }] },
                    { ln: 25, tokens: [] },
                    { ln: 26, tokens: [{ t: '• Agent Behavior Logic', c: '#888' }] },
                    { ln: 27, tokens: [{ t: 'rules', c: '#0e7490' }, { t: ':', c: '#444' }] },
                    { ln: 28, tokens: [{ t: '  - if capability.order_lookup fails:', c: '#555' }] },
                    { ln: 29, tokens: [{ t: '      escalate to: ', c: '#555' }, { t: 'SUPERVISOR', c: '#0e7490' }] },
                  ].map(row => (
                    <div key={row.ln} className="flex">
                      <span className="w-8 shrink-0 text-right pr-3 text-[#bbb] select-none">{row.ln}</span>
                      <span>
                        {row.tokens.map((tok, i) => (
                          <span key={i} style={{ color: tok.c }}>{tok.t}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="px-8 py-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#0a1628]/35 mb-2">KAI</p>
              <h3 className="font-semibold text-[#0a1628] text-[22px] leading-[1.3] mb-3">
                AI for Sales and Customer Services
              </h3>
              <p className="text-[#0a1628]/60 text-[15px] leading-[1.7] font-normal mb-5 max-w-2xl">
                Kai helps teams respond faster, govern handoffs and improve customer operations.
              </p>
              <Link to="/solutions/kai" className="text-sm font-medium text-[#228DC1] hover:underline transition-all">
                Explore innovation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-4">Our AI Products</p>
          <h2 className="font-heading text-[#0a1628] mb-16">
            Built and shipped.<br />Not theoretical.
          </h2>
          <div className="space-y-px">
            {products.map((p) => (
              <div key={p.name} className="grid lg:grid-cols-[280px_1fr] gap-0 border border-gray-100 bg-white hover:border-[#228DC1]/30 transition-all">
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between">
                  <div>
                    <p className="text-[14px] font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: p.color }}>{p.tag}</p>
                    <h3 className="font-serif-display text-[#0a1628]">{p.name}</h3>
                  </div>
                  <p className="text-[#0a1628]/60 text-xs font-normal mt-6 italic">{p.proof}</p>
                </div>
                <div className="p-8">
                  <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] font-normal mb-6">{p.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 shrink-0 mt-0.5 text-[#228DC1]" />
                        <span className="text-[#0a1628]/75 text-[14px] font-normal">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-4">Delivered</p>
          <h2 className="font-heading text-[#0a1628] mb-16">
            Proof points, not promises.
          </h2>
          <div className="grid lg:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="bg-white p-10">
                <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#228DC1] mb-2">{cs.client}</p>
                <h3 className="font-semibold text-[#0a1628] text-[20px] mb-4 leading-[1.3]">{cs.project}</h3>
                <p className="text-[#0a1628]/75 text-[14px] leading-[1.7] font-normal mb-6">{cs.outcome}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-[14px] font-semibold uppercase tracking-[0.12em] px-3 py-1 bg-[#228DC1]/8 text-[#228DC1]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-4">What we build</p>
          <h2 className="font-heading text-[#0a1628] mb-12">
            Built to work in your organisation.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: 'AI Agents', desc: 'AI that handles real workflows, not just answers questions. With built-in approval, audit trails and human handoff when needed.' },
              { title: 'Knowledge AI', desc: 'AI that searches and answers from your own documents, policies and internal records. Accurate, secure and always up to date.' },
              { title: 'AI Strategy and Transformation', desc: 'We help organisations find where AI actually adds value, build the case, and create a roadmap the whole leadership team can get behind.' },
              { title: 'Safe Deployment', desc: 'Deployed on your infrastructure or in a private cloud. You stay in control of your data, with full observability from day one.' },
            ].map((c) => (
              <div key={c.title} className="bg-white p-8 hover:bg-[#f7f8fa] transition-colors">
                <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 text-[#228DC1] mb-5" />
                <h3 className="text-[#0a1628] font-semibold mb-2 text-[14px]">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-12 text-center">
          <p className="type-label text-[#228DC1] mb-6">Get in Touch</p>
          <h2 className="font-heading text-[#0a1628] mb-6">
            Ready to build AI that actually works in your organisation?
          </h2>
          <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] mb-10 font-normal max-w-xl mx-auto">
            We have the products, the experience and the delivery track record. Talk to us about what you need and we will show you what is possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] hover:bg-[#1a6e99] text-white text-sm font-medium transition-colors">
              Request a conversation
            </Link>
            <Link to="/solutions" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#228DC1]/40 hover:border-[#228DC1] text-[#228DC1] text-sm font-medium transition-colors">
              View all solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
