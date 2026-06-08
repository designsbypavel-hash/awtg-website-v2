import CTASection from '@/components/CTASection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faBuilding,
  faPeopleGroup,
  faLeaf,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons'

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

const socialValueSections = [
  {
    title: 'Employment and Skills',
    icon: faGraduationCap,
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
      <section className="relative pt-36 pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[900px] h-[600px] bg-gradient-to-bl from-[#e8f4fb] via-[#f0f8fd] to-transparent" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-gradient-to-tr from-[#f0f8fd] to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(34,141,193,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,141,193,0.07) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] mb-6 max-w-4xl leading-[1.1]">
            Carbon Reduction Plan<br />and Social Value Statement
          </h1>
          <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-12">
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
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#0a1628]/20 text-[#0a1628]/70 text-[13px] font-semibold uppercase tracking-[0.1em] hover:border-[#228DC1] hover:text-[#228DC1] transition-colors"
            >
              Social Value Statement
            </a>
          </div>
        </div>
      </section>

      {/* CARBON REDUCTION PLAN */}
      <section id="carbon-reduction-plan" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <h2 className="font-heading text-[#0a1628]">Commitment to Achieving Net Zero</h2>
            <p className="text-[#0a1628]/65 text-[16px] leading-[1.85] self-center">
              AWTG is committed to achieving Net Zero by 2045. We are currently working to develop a full implementation plan which will allow us to bring this target further forward. All emissions reported and future plans include the entities controlled by AWTG Ltd.
            </p>
          </div>

          {/* Emissions comparison cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            <div className="bg-[#f8fafc] p-8 lg:p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#228DC1]/6 rounded-full blur-[60px]" />
              <div className="relative">
                <p className="text-[#228DC1] text-[11px] font-bold uppercase tracking-[0.15em] mb-6">Baseline Year 2019</p>
                <h3 className="font-h4 text-[#0a1628] mb-3">Baseline Emission Footprint</h3>
                <p className="text-[#0a1628]/55 text-[14px] leading-[1.8] mb-8">
                  Baseline emissions are a record of greenhouse gases produced prior to any reduction strategies.
                  The 2019 baseline was affected by the start of the Covid-19 pandemic.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {baselineEmissions.map((item) => (
                    <div key={item.scope} className="bg-white border border-[#228DC1]/12 p-4">
                      <p className="text-[#228DC1] text-[10px] font-bold uppercase tracking-[0.12em] mb-2">{item.scope}</p>
                      <p className="text-[#0a1628] text-[24px] font-bold leading-none mb-1">{item.value}</p>
                      <p className="text-[#0a1628]/40 text-[11px]">{item.unit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#edf5fb] p-8 lg:p-10 border border-[#228DC1]/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#228DC1]/8 rounded-full blur-[60px]" />
              <div className="relative">
                <p className="text-[#228DC1] text-[11px] font-bold uppercase tracking-[0.15em] mb-6">Reporting Year 2024</p>
                <h3 className="font-h4 text-[#0a1628] mb-3">Current Emission Reporting</h3>
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
                  <h3 className="font-h5 text-[#0a1628] mb-5">{title}</h3>
                  <BulletList items={items} />
                </div>
              </div>
            ))}
          </div>

          {/* Declaration */}
          <div className="bg-[#f8fafc] border-l-[3px] border-[#228DC1] pl-8 pr-8 py-8 max-w-4xl">
            <p className="text-[#228DC1] text-[10px] font-bold uppercase tracking-[0.18em] mb-4">Declaration and Sign Off</p>
            <h3 className="font-h5 text-[#0a1628] mb-5">Carbon Reduction Plan Compliance</h3>
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
            {socialValueSections.map((section, index) => (
              <article
                key={section.title}
                className="bg-white border border-gray-100 shadow-[0_2px_16px_rgba(10,22,40,0.05)] hover:shadow-[0_12px_36px_rgba(34,141,193,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="h-[3px] bg-gradient-to-r from-[#228DC1] to-[#5bb8e8]" />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-7">
                    <div className="w-12 h-12 bg-[#228DC1]/10 flex items-center justify-center text-[#228DC1]">
                      <FontAwesomeIcon icon={section.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-[#228DC1]/15 text-[42px] font-bold leading-none select-none tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-h5 text-[#0a1628] mb-4">{section.title}</h3>
                  <div className="h-px bg-gray-100 mb-5" />
                  <BulletList items={section.items} />
                </div>
              </article>
            ))}
          </div>

          {/* Pull quote */}
          <div className="relative bg-[#edf5fb] border border-[#228DC1]/15 p-10 lg:p-14 overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-72 h-72 bg-[#228DC1]/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative">
              <div className="text-[#228DC1] text-[72px] font-serif leading-none mb-2 opacity-25 select-none">&ldquo;</div>
              <p className="text-[#0a1628] text-[18px] lg:text-[22px] font-light leading-[1.65] max-w-4xl">
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
