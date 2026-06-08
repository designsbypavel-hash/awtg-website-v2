import CTASection from '@/components/CTASection'

const baselineEmissions = [
  { scope: 'Scope 1', value: '5.5 metric tons' },
  { scope: 'Scope 2', value: '5.6 metric tons' },
  { scope: 'Scope 3', value: '23.5 metric tons' },
]

const currentEmissions = [
  { scope: 'Scope 1', value: '4.56 metric tons' },
  { scope: 'Scope 2', value: '11.9 metric tons' },
  { scope: 'Scope 3', value: '63.9 metric tons' },
]

const reductionTargets = [
  'We will reduce our carbon emissions from Scope 1 and 2 emissions to achieve NetZero by 2040 and will put in place interim targets to ensure sufficient progress is made.',
  'We will continuously update and adjust our report as we identify possible gaps in our reporting',
  'We will be ISO 14001 certified',
]

const completedProjects = [
  'We are ISO 14001 certified',
  'We reported CDP annually and reported our energy use and carbon emissions through Ecovadis',
  'We initiated our internal Net Zero project. This included gathering data to inform our baseline scope 1, 2 and 3 carbon emissions and production and measure our annual carbon emissions',
  'We ran internal awareness campaigns to educate and drive awareness to all our employees and contractors',
  'We have launched a hybrid approach to working for our staff, which supports homeworking and brings a reduction in the amount of carbon generated through employee commuting',
  'We have shared our definition of Net Zero through firm wide meetings',
  'We have begun consultation with stakeholders to establish a target date, which we will aim to reach Net Zero',
  'We have launched an environmental policy which outlines our commitment to minimising the negative environmental impact of our activities.',
  'We are swapping our computing systems with more power efficient machines with less consumptions',
  'We provision TEAMS and other e-meeting tools to facilitate online meetings for all staff, reducing the need for travel to our sites and facilities',
]

const plannedProjects = [
  'Continuously measure and gather data on our emissions to aid reduction.',
  'Develop a roadmap towards achieving Net Zero',
  'Work with our suppliers and contractors to achieve Net Zero based on the UK target of Net Zero by 2050.',
  'Procure renewable energy to our sites and facilities.',
  'Reduce gas and electricity consumption by making sustainable choices for our heating and cooling needs.',
  'Start carbon off-setting initiatives to staff such as joining existing carbon off-setting programmes',
  'Developing external communications plan such as publishing CSR with focus on carbon reduction in our websites and applications',
]

const socialValueSections = [
  {
    title: 'Employment and Skills',
    items: [
      'Enabling local and community members to achieve the skills needed to access employment.',
      'Providing means for communities to publish and access employment, internship and apprenticeship opportunities.',
      'Training our employees and contractors with new skills for the future.',
      'Creating employment opportunities within the communities with which we',
      'Removing barriers for employment in the technology sector.',
      'Closing the gender pay gap within our staff and contractors.',
    ],
  },
  {
    title: 'Local Business and Economy',
    items: [
      'AWTG is an accredited Living Wage Employer.',
      'Providing equal work opportunities for local talent.',
      'Working with micro-sized businesses, social enterprises and minority owned businesses to improve capability and grow sustainably.',
      'Procuring goods and service locally where possible.',
      'Providing free access to our online platforms that helps bring additional revenues to local communities, local authorities, local enterprises and private individuals.',
    ],
  },
  {
    title: 'Community Engagement',
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
    items: [
      'Committing to NetZero by 2045 as outlined in our carbon reduction plan.',
      'Playing out part to reduce pollution in communities we work with.',
      'Using resources efficiently to reduce waste and maximise value.',
      'Promoting sustainable and ethical procurement within our supply chain.',
      'Promoting a cleaner and healthier environment through technology.',
    ],
  },
  {
    title: 'Governance Measurement and Reporting',
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
        <li key={item} className="flex items-start gap-3 text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal">
          <span className="mt-2 h-1.5 w-1.5 bg-[#228DC1] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AboutSustainabilityPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-4">Corporate Social Responsibility</p>
          <h1 className="font-serif-display text-[#0a1628] mb-6">
            Carbon Reduction Plan and Social Value Statement
          </h1>
          <p className="text-[#0a1628]/70 text-[18px] max-w-3xl font-normal leading-[1.7]">
            Commitment to Achieving Net Zero. Supporting communities, enabling growth and economic wellbeing.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-wrap gap-2 py-4">
            <a href="#carbon-reduction-plan" className="px-4 py-2 bg-[#228DC1] text-white text-[13px] font-semibold uppercase tracking-[0.1em]">Carbon Reduction Plan</a>
            <a href="#social-value-statement" className="px-4 py-2 bg-[#f8fafc] text-[#0a1628]/70 text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-[#228DC1] hover:text-white transition-colors">Social Value Statement</a>
          </div>
        </div>
      </section>

      <section id="carbon-reduction-plan" className="py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-10 lg:gap-16 mb-16">
            <div>
              <p className="type-label text-[#228DC1] mb-3">Carbon Reduction Plan</p>
              <h2 className="font-heading text-[#0a1628]">Commitment to Achieving Net Zero</h2>
            </div>
            <div className="space-y-5">
              <p className="text-[#0a1628]/70 text-[16px] leading-[1.85] font-normal">
                AWTG is committed to achieving Net Zero by 2045. We are currently working to develop a full implementation plan which will allow us to bring this target further forward. All emissions reported and future plans include the entities controlled by AWTG Ltd.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-gray-100 border border-gray-100 mb-16">
            <div className="bg-[#f8fafc] p-8">
              <h3 className="font-card-heading text-[#0a1628] text-[18px] mb-4">Baseline Emission Footprint</h3>
              <p className="text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal mb-6">
                Baseline emissions are a record of the greenhouse gases that have been produced in the past and were produced prior to the introduction of any strategies to reduce emissions. Baseline emissions are the reference point against which emissions reduction can be measured. As it happens the baseline year of 2019 was the start of the Covid-19 pandemic which affected actual utilisation of the office facilities, this continued until 2021.
              </p>
              <p className="text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal mb-6">
                The current reporting year 2024 is a better representation of back to normal working conditions, however it already benefited from carbon reduction programmes that were put in place between 2019 to date.
              </p>
              <p className="type-label text-[#228DC1] mb-4">Baseline Year 2019</p>
              <div className="grid sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                {baselineEmissions.map((item) => (
                  <div key={item.scope} className="bg-white p-5">
                    <p className="text-[#0a1628] font-semibold text-[14px]">{item.scope}</p>
                    <p className="text-[#0a1628]/60 text-sm mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-card-heading text-[#0a1628] text-[18px] mb-4">Current Emission Reporting</h3>
              <p className="type-label text-[#228DC1] mb-4">Reporting Year to December 2024</p>
              <div className="grid sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mb-6">
                {currentEmissions.map((item) => (
                  <div key={item.scope} className="bg-[#f8fafc] p-5">
                    <p className="text-[#0a1628] font-semibold text-[14px]">{item.scope}</p>
                    <p className="text-[#0a1628]/60 text-sm mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal mb-5">
                With the pandemic Covid-19 in 2019 it has skewed the baseline due to staff absences while 2020 and 2021 were characterised with lock-downs in the UK and other countries where AWTG have customers and do businesses. 2022 and 2023 represents the more realistic emissions with working in offices being back to normal.
              </p>
              <p className="text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal">
                With businesses returning to normal in 2022 AWTG have been growing as a business with the number of employees increasing steadily. With these business growth AWTG have continued to maintain its emissions target per person and is consistently below companies of the same size in the tech sector.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 mb-16">
            <div className="bg-white p-8">
              <h3 className="font-card-heading text-[#0a1628] text-[18px] mb-5">Emission Reduction Targets</h3>
              <p className="text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal mb-6">We have adopted the following carbon reduction targets to continue our march toward achieving Net Zero.</p>
              <BulletList items={reductionTargets} />
            </div>
            <div className="bg-white p-8">
              <h3 className="font-card-heading text-[#0a1628] text-[18px] mb-5">Completed Projects</h3>
              <p className="text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal mb-6">The following environmental management measures and projects have been completed or implemented since the 2019/2020 baseline.</p>
              <BulletList items={completedProjects} />
            </div>
            <div className="bg-white p-8">
              <h3 className="font-card-heading text-[#0a1628] text-[18px] mb-5">Planned Projects</h3>
              <p className="text-[#0a1628]/68 text-[15px] leading-[1.75] font-normal mb-6">Over the next 5 years we plan to implement further measures to continuously drive down our emissions</p>
              <BulletList items={plannedProjects} />
            </div>
          </div>

          <div className="border-l-2 border-[#228DC1] pl-8 py-1 max-w-4xl">
            <h3 className="font-card-heading text-[#0a1628] text-[18px] mb-4">Declaration and Sign off</h3>
            <p className="text-[#0a1628]/70 text-[15px] leading-[1.8] font-normal mb-4">
              This Carbon Reduction Plan has been completed in accordance with PPN 06/21 and associated guidance and reporting standard for Carbon Reduction Plans. Emissions have been reported and recorded in accordance with the published reporting standard for Carbon Reduction Plans and the GHG Reporting Protocol corporate standard and uses the appropriate Government emission conversion factors for greenhouse gas company reporting.
            </p>
            <p className="text-[#0a1628]/70 text-[15px] leading-[1.8] font-normal mb-4">
              Scope 1 and Scope 2 emissions have been reported in accordance with SECR requirements, and the required subset of Scope 3 emissions have been reported (where available) in accordance with the published reporting standard for Carbon Reduction Plans and the Corporate Value Chain (Scope 3) Standard.
            </p>
            <p className="text-[#0a1628]/70 text-[15px] leading-[1.8] font-normal">This Carbon Reduction Plan has been reviewed and signed off by the management team.</p>
            <p className="text-[#0a1628] text-[15px] leading-[1.8] font-semibold mt-6">Signed on behalf of the supplier: Abbey Alidoosti, Chief Executive Officer. Date: 4th September 2024</p>
          </div>
        </div>
      </section>

      <section id="social-value-statement" className="py-24 bg-[#f7f8fa] border-y border-gray-100 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-10 lg:gap-16 mb-16">
            <div>
              <p className="type-label text-[#228DC1] mb-3">Social Value Statement</p>
              <h2 className="font-heading text-[#0a1628]">Supporting communities, enabling growth and economic wellbeing</h2>
            </div>
            <div className="space-y-5">
              <p className="text-[#0a1628]/70 text-[16px] leading-[1.85] font-normal">
                AWTG creates innovation that supports communities, enable growth and economic wellbeing of our customers and the communities they serve through technology, automation and transformation. We assist our customers to maximise social, economic, technological and environmental wellbeing of their local communities.
              </p>
              <p className="text-[#0a1628]/70 text-[16px] leading-[1.85] font-normal">
                Through our internal policies, and collaboration with our supply chain, AWTG is committed to:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {socialValueSections.map((section) => (
              <article key={section.title} className="bg-white p-8">
                <h3 className="font-card-heading text-[#0a1628] text-[18px] mb-5">{section.title}</h3>
                <BulletList items={section.items} />
              </article>
            ))}
          </div>

          <div className="mt-16 border-l-2 border-[#228DC1] pl-8 py-1 max-w-4xl">
            <p className="font-serif-display text-[#0a1628] leading-[1.25]" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}>
              Our social value goals, objectives and policies will be communicated clearly to our employees, contractors, supply chain partners, communities we work with and relevant parties. We will review our social value statements and related policies on an annual basis and aim for continuous improvement.
            </p>
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
