import CTASection from '@/components/CTASection'

const baselineEmissions = [
  { scope: 'Scope 1', value: '5.5', unit: 'metric tons' },
  { scope: 'Scope 2', value: '5.6', unit: 'metric tons' },
  { scope: 'Scope 3', value: '23.5', unit: 'metric tons' },
]

const currentEmissions = [
  { scope: 'Scope 1', value: '4.56', unit: 'metric tons' },
  { scope: 'Scope 2', value: '11.9', unit: 'metric tons' },
  { scope: 'Scope 3', value: '63.9', unit: 'metric tons' },
]

const reductionTargets = [
  'We will reduce our carbon emissions from Scope 1 and 2 emissions to achieve NetZero by 2040 and will put in place interim targets to ensure sufficient progress is made.',
  'We will continuously update and adjust our report as we identify possible gaps in our reporting',
  'We will be ISO 14001 certified',
]

const completedProjects = [
  'We are ISO 14001 certified',
  'We reported CDP annually and reported our energy use and carbon emissions through Ecovadis',
  'We initiated our internal Net Zero project including gathering data to inform our baseline scope 1, 2 and 3 carbon emissions',
  'We ran internal awareness campaigns to educate and drive awareness to all our employees and contractors',
  'We have launched a hybrid approach to working for our staff, supporting homeworking and reducing carbon from commuting',
  'We have shared our definition of Net Zero through firm wide meetings',
  'We have begun consultation with stakeholders to establish a target date for reaching Net Zero',
  'We have launched an environmental policy outlining our commitment to minimising negative environmental impact',
  'We are swapping our computing systems with more power efficient machines',
  'We provision TEAMS and other e-meeting tools to facilitate online meetings, reducing the need for travel',
]

const plannedProjects = [
  'Continuously measure and gather data on our emissions to aid reduction.',
  'Develop a roadmap towards achieving Net Zero',
  'Work with our suppliers and contractors to achieve Net Zero based on the UK target of Net Zero by 2050.',
  'Procure renewable energy to our sites and facilities.',
  'Reduce gas and electricity consumption by making sustainable choices for heating and cooling needs.',
  'Start carbon off-setting initiatives to staff such as joining existing carbon off-setting programmes',
  'Developing external communications plan such as publishing CSR with focus on carbon reduction',
]

function IconEducation() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function IconBusiness() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12.01" y2="12" />
    </svg>
  )
}

function IconCommunity() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function IconLeaf() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22c1.25-1.25 2.208-2.5 3-4 1.056-1.98 1.5-4.5 1.5-4.5S9.5 16 12 16c5 0 8-4 8-8S16 2 12 2 4 6 4 10c0 1.5.5 3 1 4L2 22z" />
    </svg>
  )
}

function IconGovernance() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const socialValueSections = [
  {
    title: 'Employment and Skills',
    Icon: IconEducation,
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
    Icon: IconBusiness,
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
    Icon: IconCommunity,
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
    Icon: IconLeaf,
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
    Icon: IconGovernance,
    items: [
      'Monitoring and reporting our social value and environmental impact by using recognised independent tools and reporting platforms',
      'Continuously improving our standards, efficiency and effectiveness.',
      'Maintaining clear accountability for delivering our social value commitments.',
    ],
  },
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[#0a1628]/65 text-[14px] leading-[1.8]">
          <span className="mt-[7px] h-1.5 w-1.5 bg-[#228DC1] shrink-0" />
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
      <section className="relative pt-36 pb-28 bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] bg-[#228DC1]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-[-80px] w-[500px] h-[400px] bg-[#228DC1]/6 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#228DC1]" />
            <p className="text-[#228DC1] text-[11px] font-bold uppercase tracking-[0.18em]">Corporate Social Responsibility</p>
          </div>
          <h1 className="font-serif-display text-white mb-6 max-w-4xl leading-[1.1]">
            Carbon Reduction Plan<br />and Social Value Statement
          </h1>
          <p className="text-white/55 text-[18px] max-w-2xl font-normal leading-[1.75] mb-12">
            Commitment to Achieving Net Zero. Supporting communities, enabling growth and economic wellbeing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#carbon-reduction-plan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#228DC1] text-white text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-[#1a7fa8] transition-colors"
            >
              Carbon Reduction Plan
            </a>
            <a
              href="#social-value-statement"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/75 text-[13px] font-semibold uppercase tracking-[0.1em] hover:border-white/40 hover:text-white transition-colors"
            >
              Social Value Statement
            </a>
          </div>
        </div>
      </section>

      {/* CARBON REDUCTION PLAN */}
      <section id="carbon-reduction-plan" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">

          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#228DC1]" />
            <p className="text-[#228DC1] text-[11px] font-bold uppercase tracking-[0.18em]">Carbon Reduction Plan</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <h2 className="font-heading text-[#0a1628]">Commitment to Achieving Net Zero</h2>
            <p className="text-[#0a1628]/65 text-[16px] leading-[1.85] self-center">
              AWTG is committed to achieving Net Zero by 2045. We are currently working to develop a full implementation plan which will allow us to bring this target further forward. All emissions reported and future plans include the entities controlled by AWTG Ltd.
            </p>
          </div>

          {/* Emissions comparison cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            <div className="bg-[#0a1628] p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#228DC1]/8 rounded-full blur-[60px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-[#228DC1]" />
                  <p className="text-[#228DC1] text-[11px] font-bold uppercase tracking-[0.15em]">Baseline Year 2019</p>
                </div>
                <h3 className="text-white text-[20px] font-semibold mb-3">Baseline Emission Footprint</h3>
                <p className="text-white/45 text-[14px] leading-[1.8] mb-8">
                  Baseline emissions are a record of greenhouse gases produced prior to any reduction strategies.
                  The 2019 baseline was affected by the start of the Covid-19 pandemic.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {baselineEmissions.map((item) => (
                    <div key={item.scope} className="border border-white/10 p-4 bg-white/3">
                      <p className="text-[#228DC1] text-[10px] font-bold uppercase tracking-[0.12em] mb-2">{item.scope}</p>
                      <p className="text-white text-[24px] font-bold leading-none mb-1">{item.value}</p>
                      <p className="text-white/35 text-[11px]">{item.unit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#edf5fb] p-8 lg:p-10 border border-[#228DC1]/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#228DC1]/8 rounded-full blur-[60px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-[#228DC1]" />
                  <p className="text-[#228DC1] text-[11px] font-bold uppercase tracking-[0.15em]">Reporting Year 2024</p>
                </div>
                <h3 className="text-[#0a1628] text-[20px] font-semibold mb-3">Current Emission Reporting</h3>
                <p className="text-[#0a1628]/55 text-[14px] leading-[1.8] mb-8">
                  2022 and 2023 represent more realistic post-pandemic emissions. AWTG has grown steadily
                  while maintaining emissions per person below the sector average.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {currentEmissions.map((item) => (
                    <div key={item.scope} className="bg-white border border-[#228DC1]/12 p-4">
                      <p className="text-[#228DC1] text-[10px] font-bold uppercase tracking-[0.12em] mb-2">{item.scope}</p>
                      <p className="text-[#0a1628] text-[24px] font-bold leading-none mb-1">{item.value}</p>
                      <p className="text-[#0a1628]/40 text-[11px]">{item.unit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Three action columns */}
          <div className="grid lg:grid-cols-3 gap-5 mb-20">
            {[
              { title: 'Emission Reduction Targets', label: 'Targets', accent: '#228DC1', items: reductionTargets },
              { title: 'Completed Projects', label: 'Completed', accent: '#1e9e70', items: completedProjects },
              { title: 'Planned Projects', label: 'Planned', accent: '#6c63ff', items: plannedProjects },
            ].map(({ title, label, accent, items }) => (
              <div key={title} className="border border-gray-100 bg-white overflow-hidden">
                <div className="h-[3px]" style={{ background: accent }} />
                <div className="p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: accent }}>{label}</p>
                  <h3 className="text-[#0a1628] text-[17px] font-semibold mb-5">{title}</h3>
                  <BulletList items={items} />
                </div>
              </div>
            ))}
          </div>

          {/* Declaration */}
          <div className="bg-[#f8fafc] border-l-[3px] border-[#228DC1] pl-8 pr-8 py-8 max-w-4xl">
            <p className="text-[#228DC1] text-[10px] font-bold uppercase tracking-[0.18em] mb-4">Declaration and Sign Off</p>
            <h3 className="text-[#0a1628] text-[17px] font-semibold mb-5">Carbon Reduction Plan Compliance</h3>
            <p className="text-[#0a1628]/65 text-[15px] leading-[1.85] mb-4">
              This Carbon Reduction Plan has been completed in accordance with PPN 06/21 and associated guidance and reporting standard for Carbon Reduction Plans. Emissions have been reported and recorded in accordance with the GHG Reporting Protocol corporate standard and uses the appropriate Government emission conversion factors for greenhouse gas company reporting.
            </p>
            <p className="text-[#0a1628]/65 text-[15px] leading-[1.85] mb-4">
              Scope 1 and Scope 2 emissions have been reported in accordance with SECR requirements, and the required subset of Scope 3 emissions have been reported in accordance with the Corporate Value Chain (Scope 3) Standard.
            </p>
            <p className="text-[#0a1628]/65 text-[15px] leading-[1.85]">This Carbon Reduction Plan has been reviewed and signed off by the management team.</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-[#0a1628] text-[14px] font-semibold">
                Signed: Abbey Alidoosti, Chief Executive Officer — 4th September 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL VALUE STATEMENT */}
      <section id="social-value-statement" className="py-24 bg-[#f7f9fc] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">

          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#228DC1]" />
            <p className="text-[#228DC1] text-[11px] font-bold uppercase tracking-[0.18em]">Social Value Statement</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <h2 className="font-heading text-[#0a1628]">Supporting communities, enabling growth and economic wellbeing</h2>
            <div className="space-y-4 self-center">
              <p className="text-[#0a1628]/65 text-[16px] leading-[1.85]">
                AWTG creates innovation that supports communities, enables growth and economic wellbeing through technology, automation and transformation. We assist our customers to maximise social, economic, technological and environmental wellbeing of their local communities.
              </p>
              <p className="text-[#0a1628]/65 text-[16px] leading-[1.85]">
                Through our internal policies, and collaboration with our supply chain, AWTG is committed to:
              </p>
            </div>
          </div>

          {/* Social value cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {socialValueSections.map((section) => (
              <article key={section.title} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 group overflow-hidden">
                <div className="h-[3px] bg-[#228DC1]" />
                <div className="p-7">
                  <div className="w-10 h-10 bg-[#228DC1]/10 flex items-center justify-center mb-5 text-[#228DC1] group-hover:bg-[#228DC1] group-hover:text-white transition-colors duration-200">
                    <section.Icon />
                  </div>
                  <h3 className="text-[#0a1628] font-semibold text-[16px] mb-5 leading-[1.4]">{section.title}</h3>
                  <BulletList items={section.items} />
                </div>
              </article>
            ))}
          </div>

          {/* Pull quote */}
          <div className="relative bg-[#0a1628] p-10 lg:p-14 overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-72 h-72 bg-[#228DC1]/12 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 bg-[#228DC1]/6 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative">
              <div className="text-[#228DC1] text-[72px] font-serif leading-none mb-2 opacity-30 select-none">&ldquo;</div>
              <p className="text-white text-[18px] lg:text-[22px] font-light leading-[1.65] max-w-4xl">
                Our social value goals, objectives and policies will be communicated clearly to our employees,
                contractors, supply chain partners, communities we work with and relevant parties. We will review
                our social value statements and related policies on an annual basis and aim for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With AWTG for Responsible Innovation"
        subtitle="Ask about our services and solutions today."
        primaryLabel="Contact AWTG Ltd."
        primaryHref="/contact"
      />
    </>
  )
}
