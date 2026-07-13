import CTASection from '@/components/CTASection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faBuilding,
  faPeopleGroup,
  faLeaf,
  faScaleBalanced,
  faCircleCheck,
  faClipboardList,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons'

const baselineEmissions = [
  { scope: 'Scope 1', value: '5.5',  unit: 'metric tons' },
  { scope: 'Scope 2', value: '5.6',  unit: 'metric tons' },
  { scope: 'Scope 3', value: '23.5', unit: 'metric tons' },
]

const currentEmissions = [
  { scope: 'Scope 1', value: '4.56', unit: 'metric tons' },
  { scope: 'Scope 2', value: '11.9', unit: 'metric tons' },
  { scope: 'Scope 3', value: '63.9', unit: 'metric tons' },
]

const reductionTargets = [
  'Reduce Scope 1 and 2 emissions to achieve NetZero by 2040 with interim targets.',
  'Continuously update and adjust our report as we identify possible gaps in reporting.',
  'Achieve and maintain ISO 14001 certification.',
]

const completedProjects = [
  'ISO 14001 certified.',
  'Reported CDP annually and energy use via Ecovadis.',
  'Initiated internal Net Zero project including gathering baseline scope 1, 2 and 3 data.',
  'Ran internal awareness campaigns to educate all employees and contractors.',
  'Launched hybrid working approach, supporting homeworking and reducing commuting carbon.',
  'Shared our definition of Net Zero through firm-wide meetings.',
  'Begun consultation with stakeholders to establish a Net Zero target date.',
  'Launched an environmental policy outlining commitment to minimising environmental impact.',
  'Swapping computing systems with more power efficient machines.',
  'Provision TEAMS and e-meeting tools to facilitate online meetings, reducing travel.',
]

const plannedProjects = [
  'Continuously measure and gather data on emissions to aid reduction.',
  'Develop a roadmap towards achieving Net Zero.',
  'Work with suppliers and contractors to achieve Net Zero based on the UK target of 2050.',
  'Procure renewable energy to sites and facilities.',
  'Reduce gas and electricity consumption by making sustainable choices.',
  'Start carbon off-setting initiatives such as joining existing carbon off-setting programmes.',
  'Develop external communications plan such as publishing CSR with focus on carbon reduction.',
]

const socialValueSections = [
  {
    title: 'Employment and Skills',
    icon: faGraduationCap,
    accent: '#228DC1',
    items: [
      'Enabling local and community members to achieve the skills needed to access employment.',
      'Providing means for communities to publish and access employment, internship and apprenticeship opportunities.',
      'Training our employees and contractors with new skills for the future.',
      'Creating employment opportunities within the communities with which we work.',
      'Removing barriers for employment in the technology sector.',
      'Closing the gender pay gap within our staff and contractors.',
    ],
  },
  {
    title: 'Local Business and Economy',
    icon: faBuilding,
    accent: '#059669',
    items: [
      'AWTG is an accredited Living Wage Employer.',
      'Providing equal work opportunities for local talent.',
      'Working with micro-sized businesses, social enterprises and minority owned businesses.',
      'Procuring goods and services locally where possible.',
      'Providing free access to our online platforms that helps bring additional revenues to local communities.',
    ],
  },
  {
    title: 'Community Engagement',
    icon: faPeopleGroup,
    accent: '#7c3aed',
    items: [
      'Providing technological capabilities to communities through our CSR programme.',
      'Supporting volunteering activities by our staff to deliver benefits to their local communities.',
      'Supporting local and grassroot initiatives to develop and prosper.',
      'Partnering with local communities to support employment, internship, and apprenticeship opportunities.',
      'Supporting our staff and contractors to live healthier lives.',
    ],
  },
  {
    title: 'Environment',
    icon: faLeaf,
    accent: '#16a34a',
    items: [
      'Committing to NetZero by 2045 as outlined in our carbon reduction plan.',
      'Playing our part to reduce pollution in communities we work with.',
      'Using resources efficiently to reduce waste and maximise value.',
      'Promoting sustainable and ethical procurement within our supply chain.',
      'Promoting a cleaner and healthier environment through technology.',
    ],
  },
  {
    title: 'Governance, Measurement and Reporting',
    icon: faScaleBalanced,
    accent: '#0a1628',
    items: [
      'Monitoring and reporting our social value and environmental impact using recognised independent tools and reporting platforms.',
      'Continuously improving our standards, efficiency and effectiveness.',
      'Maintaining clear accountability for delivering our social value commitments.',
    ],
  },
]

function BulletList({ items, accent = '#228DC1' }: { items: string[]; accent?: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[#0a1628]/60 text-[14px] leading-[1.8]">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0" style={{ background: accent }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AboutSustainabilityPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

        {/* Diagonal dot-grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sustGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sustGrid)" />
          </svg>
        </div>

        {/* Diagonal connecting lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sustLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sustLines)" />
          </svg>
        </div>

        {/* Decorative + crosses */}
        {[
          { top: '18%', left: '6%' }, { top: '52%', left: '3%' },
          { top: '72%', left: '9%' }, { top: '30%', left: '55%' },
          { top: '62%', left: '48%' },
        ].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none select-none text-[#228DC1]"
            style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.35, fontWeight: 300, lineHeight: 1 }}>+</div>
        ))}

        {/* Decorative diamond */}
        <div className="absolute pointer-events-none" style={{ top: '42%', left: '4.5%', opacity: 0.25 }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="2" width="10" height="10" transform="rotate(45 7 7)" fill="none" stroke="#228DC1" strokeWidth="1.5"/></svg>
        </div>

        {/* Decorative dots */}
        <div className="absolute rounded-full pointer-events-none" style={{ top: '12%', left: '7%', width: 5, height: 5, background: 'rgba(34,141,193,0.3)' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ top: '68%', left: '5%', width: 6, height: 6, background: 'rgba(34,141,193,0.35)' }} />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 35%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-12 lg:gap-20 items-end">
            <div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
                Carbon Reduction Plan and Social Value Statement </h1>
              <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.7]">
                Commitment to Achieving Net Zero. Supporting communities, enabling growth and economic wellbeing. </p>
            </div>
            <div className="border-l-2 border-[#228DC1] pl-6 py-2">
              <p className="font-h2 text-[#0a1628]">2045</p>
              <p className="text-[#0a1628]/60 text-sm leading-relaxed mt-2">AWTG committed to achieving Net Zero emissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jump nav */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-wrap gap-0 divide-x divide-gray-100">
            <a href="#carbon-reduction-plan"   className="px-5 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60 hover:text-[#1a7aab] hover:bg-[#f8fafc] transition-colors">Carbon Reduction Plan</a>
            <a href="#social-value-statement"  className="px-5 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60 hover:text-[#1a7aab] hover:bg-[#f8fafc] transition-colors">Social Value Statement</a>
          </div>
        </div>
      </section>

      {/* -- CARBON REDUCTION PLAN -- */}
      <div id="carbon-reduction-plan" className="scroll-mt-14 overflow-hidden">

        {/* Panel 1, Commitment */}
        <div className="grid lg:grid-cols-2" style={{ minHeight: 540 }}>
          <div className="flex items-center bg-white" style={{ padding: '72px clamp(28px, 5vw, 88px)' }}>
            <div style={{ maxWidth: 520 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#1a7aab]">01</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60">Carbon Reduction Plan</span>
              </div>
              <h2 className="font-heading text-[#0a1628] leading-[1.16] mb-6" style={{ fontSize: 'clamp(22px, 2.2vw, 30px)' }}>
                Commitment to Achieving Net Zero </h2>
              <p className="text-[#0a1628]/60 text-[15px] leading-[1.88] mb-8">
                AWTG is committed to achieving Net Zero by 2045. We are currently working to develop a full implementation plan which will allow us to bring this target further forward. All emissions reported and future plans include the entities controlled by AWTG Ltd. </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-[40px] font-black text-[#228DC1] leading-none">2045</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60 mt-1">Net Zero target</p>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-[40px] font-black text-[#059669] leading-none">2040</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60 mt-1">Scope 1 &amp; 2 target</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden lg:order-1" style={{ minHeight: 420, background: '#0a1628' }}>
            <img src="/images/insights/cloud-network.jpg" alt="Net Zero commitment" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.2) 0%, transparent 40%)' }} />
          </div>
        </div>

        {/* Panel 2, Emissions data */}
        <div className="grid lg:grid-cols-2" style={{ minHeight: 540 }}>
          <div className="relative overflow-hidden" style={{ minHeight: 420, background: '#0a1628' }}>
            <img src="/images/insights/performance-testing.jpg" alt="Emissions reporting" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(10,22,40,0.2) 0%, transparent 40%)' }} />
          </div>
          <div className="flex items-center bg-white" style={{ padding: '72px clamp(28px, 5vw, 88px)' }}>
            <div style={{ maxWidth: 540 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#1a7aab]">02</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60">Emissions Reporting</span>
              </div>
              <h2 className="font-heading text-[#0a1628] leading-[1.16] mb-7" style={{ fontSize: 'clamp(22px, 2.2vw, 30px)' }}>
                Baseline and current emission footprint </h2>
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-xl bg-[#f8fafc] border border-gray-100 p-5">
                  <p className="text-[#1a7aab] text-[11px] font-bold uppercase tracking-[0.14em] mb-4">Baseline 2019</p>
                  <div className="space-y-3">
                    {baselineEmissions.map((item) => (
                      <div key={item.scope} className="flex items-center justify-between">
                        <span className="text-[12px] font-semibold text-[#0a1628]/60">{item.scope}</span>
                        <span className="text-[15px] font-black text-[#0a1628]">{item.value}<span className="text-[11px] font-normal text-[#0a1628]/60 ml-1">t</span></span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-[#edf5fb] border border-[#228DC1]/15 p-5">
                  <p className="text-[#1a7aab] text-[11px] font-bold uppercase tracking-[0.14em] mb-4">Reporting 2024</p>
                  <div className="space-y-3">
                    {currentEmissions.map((item) => (
                      <div key={item.scope} className="flex items-center justify-between">
                        <span className="text-[12px] font-semibold text-[#0a1628]/60">{item.scope}</span>
                        <span className="text-[15px] font-black text-[#0a1628]">{item.value}<span className="text-[11px] font-normal text-[#0a1628]/60 ml-1">t</span></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#0a1628]/60 text-[12px] leading-[1.7] mt-5">
                2022 and 2023 represent more realistic post pandemic emissions. AWTG has grown steadily while maintaining emissions per person below the sector average. </p>
            </div>
          </div>
        </div>

        {/* Panel 3, Projects */}
        <div className="grid lg:grid-cols-2" style={{ minHeight: 580 }}>
          <div className="flex items-start bg-white" style={{ padding: '72px clamp(28px, 5vw, 88px)' }}>
            <div style={{ maxWidth: 560 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#1a7aab]">03</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60">Action Plan</span>
              </div>
              <h2 className="font-heading text-[#0a1628] leading-[1.16] mb-8" style={{ fontSize: 'clamp(22px, 2.2vw, 30px)' }}>
                Targets, completed and planned projects </h2>
              <div className="space-y-7">
                {[
                  { icon: faBullseye,     label: 'Targets',   accent: '#228DC1', items: reductionTargets },
                  { icon: faCircleCheck,  label: 'Completed', accent: '#059669', items: completedProjects },
                  { icon: faClipboardList,label: 'Planned',   accent: '#7c3aed', items: plannedProjects },
                ].map(({ icon, label, accent, items }) => (
                  <div key={label}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="h-7 w-7 flex items-center justify-center shrink-0" style={{ background: accent + '15' }}>
                        <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5" style={{ color: accent }} />
                      </div>
                      <p className="text-[11px] font-black uppercase tracking-[0.18em]" style={{ color: accent }}>{label}</p>
                    </div>
                    <BulletList items={items} accent={accent} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden lg:order-1" style={{ minHeight: 420, background: '#0a1628' }}>
            <img src="/images/insights/safety-network.jpg" alt="Reduction projects" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.2) 0%, transparent 40%)' }} />
          </div>
        </div>

        {/* Declaration, full width */}
        <div className="bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
            <div className="border-l-[3px] border-[#228DC1] pl-8 max-w-4xl">
              <p className="text-[#1a7aab] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">Declaration and Sign Off</p>
              <h3 className="font-h5 text-[#0a1628] mb-5">Carbon Reduction Plan Compliance</h3>
              <p className="text-[#0a1628]/60 text-sm leading-[1.85] mb-4">
                This Carbon Reduction Plan has been completed in accordance with PPN 06/21 and associated guidance and reporting standard for Carbon Reduction Plans. Emissions have been reported and recorded in accordance with the GHG Reporting Protocol corporate standard and uses the appropriate Government emission conversion factors for greenhouse gas company reporting. </p>
              <p className="text-[#0a1628]/60 text-sm leading-[1.85] mb-4">
                Scope 1 and Scope 2 emissions have been reported in accordance with SECR requirements, and the required subset of Scope 3 emissions have been reported in accordance with the Corporate Value Chain (Scope 3) Standard. </p>
              <p className="text-[#0a1628]/60 text-sm leading-[1.85]">This Carbon Reduction Plan has been reviewed and signed off by the management team.</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-[#0a1628] text-[14px] font-semibold">
                  Signed: Abbey Alidoosti, Chief Executive Officer, 4th September 2024 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -- SOCIAL VALUE STATEMENT -- */}
      <div id="social-value-statement" className="scroll-mt-14 overflow-hidden">

        {/* Section intro, full width */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#1a7aab] mb-4">Social Value Statement</p>
                <h2 className="font-heading text-[#0a1628] leading-tight">
                  Supporting communities, enabling growth and economic wellbeing </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#0a1628]/60 text-[15px] leading-[1.85]">
                  AWTG creates innovation that supports communities, enables growth and economic wellbeing through technology, automation and transformation. We assist our customers to maximise social, economic, technological and environmental wellbeing of their local communities. </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social value panels */}
        <div className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-8 pb-20 lg:grid-cols-2 lg:px-12">
            {socialValueSections.map((section, index) => (
              <article key={section.title} className="border border-gray-100 bg-white p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: section.accent }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a1628]/60">Social Value</span>
                </div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center" style={{ background: section.accent + '12' }}>
                    <FontAwesomeIcon icon={section.icon} className="h-4 w-4" style={{ color: section.accent }} />
                  </div>
                  <h2 className="font-heading text-[#0a1628] leading-snug" style={{ fontSize: 'clamp(20px, 2vw, 27px)' }}>
                    {section.title}
                  </h2>
                </div>
                <BulletList items={section.items} accent={section.accent} />
              </article>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
            <div className="max-w-4xl">
              <div className="text-[#228DC1] text-[64px] font-serif leading-none mb-2 opacity-20 select-none">&ldquo;</div>
              <p className="text-[#0a1628] text-lg lg:text-2xl font-light leading-[1.65]">
                Our social value goals, objectives and policies will be communicated clearly to our employees, contractors, supply chain partners, communities we work with and relevant parties. We will review our social value statements and related policies on an annual basis and aim for continuous improvement. </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Partner With AWTG for Responsible Innovation"
        subtitle="Ask about our services and solutions today."
        primaryLabel="Contact AWTG Ltd."
        primaryHref="/contact"
      />
    </>
  )
}
