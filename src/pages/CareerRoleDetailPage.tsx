import { Link, useParams, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot, faBriefcase,
  faBuilding, faCalendarDays, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'

export type Role = {
  slug: string
  title: string
  dept: string
  location: string
  type: string
  postedDate: string
  summary: string
  about: string[]
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
}

export const roles: Role[] = [
  {
    slug: 'senior-rf-engineer',
    title: 'Senior RF Engineer',
    dept: 'Engineering',
    location: 'London, UK',
    type: 'Full-time',
    postedDate: 'June 2026',
    summary: 'Design, deploy and optimise radio access networks across 4G, 5G and Open RAN for enterprise and public sector clients.',
    about: [
      'We are looking for a Senior RF Engineer to join our growing engineering team in London. You will take technical ownership of radio network planning and optimisation across private 5G, Distributed Antenna Systems and Open RAN deployments.',
      'Working closely with solutions architects and project managers, you will deliver end-to-end RF engineering from initial site surveys and coverage modelling through to network acceptance and post-deployment tuning.',
      'This is a senior individual contributor role with opportunities to mentor junior engineers and contribute to AWTG\'s expanding portfolio of DSIT-funded and enterprise connectivity programmes.',
    ],
    responsibilities: [
      'Design and plan RF networks for indoor and outdoor deployments including private 5G, DAS and Open RAN.',
      'Conduct site surveys, drive tests and walk tests, and perform post-processing analysis to validate network performance.',
      'Perform network optimisation activities including parameter tuning, antenna configuration and interference management.',
      'Produce high-quality technical documentation: coverage planning reports, parameter files, design specifications and acceptance reports.',
      'Collaborate with project managers and solutions architects on end-to-end delivery.',
      'Support client presentations and technical workshops as the RF subject matter expert.',
      'Mentor junior engineers and contribute to the team\'s technical knowledge base.',
      'Contribute to bid writing and technical proposals for new business opportunities.',
    ],
    requirements: [
      'Degree in Electrical Engineering, Telecommunications or a related discipline.',
      '5+ years of RF engineering experience across 4G LTE and 5G NR networks.',
      'Proficiency with planning tools such as Atoll, Planet or similar.',
      'Hands-on experience with drive test tools (TEMS, NEMO or equivalent).',
      'Strong understanding of RAN architecture, MIMO, beamforming and spectrum planning.',
      'Experience with at least one major vendor: Ericsson, Nokia, Huawei or an Open RAN vendor.',
      'Excellent written and verbal communication skills with confidence presenting to clients.',
    ],
    niceToHave: [
      'Hands-on experience with Open RAN / O-RAN ALLIANCE standards and deployments.',
      'Knowledge of private 5G network design for enterprise environments.',
      'SC or DV security clearance (or eligibility to obtain).',
    ],
  },
  {
    slug: 'devops-engineer-network-automation',
    title: 'DevOps Engineer, Network Automation',
    dept: 'Engineering',
    location: 'Remote (UK)',
    type: 'Full-time',
    postedDate: 'June 2026',
    summary: 'Build CI/CD pipelines and automation tooling for cloud-native network functions, O-RAN components and enterprise network infrastructure.',
    about: [
      'As a DevOps Engineer at AWTG you will design and operate the automation infrastructure that underpins our 5G and Open RAN deployments. You will work across containerised network functions, GitOps workflows and infrastructure-as-code tooling in a fast-paced engineering environment.',
      'You will collaborate directly with our RF, software and solutions teams to build reliable, repeatable deployment pipelines for O-RAN software components including near-RT RIC, non-RT RIC and CU/DU disaggregated stacks.',
      'This is a fully remote role with flexibility and the expectation of occasional on-site visits to client locations or AWTG labs in London.',
    ],
    responsibilities: [
      'Design and maintain CI/CD pipelines for network software components using GitLab CI, Jenkins or equivalent.',
      'Containerise and orchestrate network functions using Docker and Kubernetes (K8s / K3s).',
      'Develop Infrastructure as Code using Terraform, Ansible or Helm to manage lab and production environments.',
      'Automate testing, monitoring and alerting for deployed network infrastructure.',
      'Support the engineering team with environment provisioning for O-RAN integration and testing.',
      'Maintain security, access control and patching across cloud and on-premise systems.',
      'Document operational runbooks, deployment procedures and infrastructure diagrams.',
    ],
    requirements: [
      '3+ years in a DevOps, platform engineering or infrastructure automation role.',
      'Strong hands-on experience with Kubernetes and container orchestration.',
      'Proficiency in at least one scripting language: Python, Bash or Go.',
      'Experience with CI/CD tools: GitLab CI, GitHub Actions, Jenkins or equivalent.',
      'Understanding of networking fundamentals: VLANs, routing, firewalls, VXLAN.',
      'Comfortable working with Linux-based systems in production environments.',
    ],
    niceToHave: [
      'Exposure to O-RAN, 5G core (5GC) or cloud-native network functions (CNFs).',
      'Experience with observability stacks: Prometheus, Grafana, ELK or similar.',
      'Relevant certifications: CKA, AWS/GCP/Azure, or RHCE.',
    ],
  },
  {
    slug: '5g-solutions-architect',
    title: '5G Solutions Architect',
    dept: 'Pre-Sales',
    location: 'Remote (UK)',
    type: 'Full-time',
    postedDate: 'June 2026',
    summary: 'Lead technical pre-sales engagements for private 5G and Open RAN solutions, translating complex client requirements into winning architectures.',
    about: [
      'We are seeking a 5G Solutions Architect to act as the technical lead in our pre-sales process. You will own the solution design for private 5G, Open RAN and enterprise connectivity opportunities across telecoms operators, enterprise clients and public sector bodies.',
      'Working closely with the commercial team, you will respond to RFIs and RFPs, develop reference architectures, lead proof-of-concept engagements and present technically to senior client stakeholders.',
      'You will be the bridge between customer requirements and AWTG\'s engineering capability, drawing on deep knowledge of 5G NR, core networks and enterprise IT integration.',
    ],
    responsibilities: [
      'Lead the technical response to RFIs, RFPs and tender documents for private 5G and Open RAN opportunities.',
      'Design end-to-end solution architectures covering RAN, core, transport and integration layers.',
      'Develop and deliver compelling technical presentations and demonstrations to C-level and technical stakeholders.',
      'Define proof-of-concept architectures and support the lab team in executing them.',
      'Work with product and engineering teams to ensure proposed solutions are deliverable within budget and timeline.',
      'Maintain knowledge of the 5G and Open RAN vendor ecosystem, emerging standards and competitor offerings.',
      'Contribute to the AWTG technical collateral library: reference architectures, capability decks and white papers.',
    ],
    requirements: [
      '7+ years of experience in telecoms, network engineering or a solutions architecture role.',
      'Deep understanding of 5G NR architecture: NG-RAN, 5GC, network slicing and QoS.',
      'Experience designing private network solutions for enterprise or public sector clients.',
      'Strong commercial awareness with experience contributing to bids and proposals.',
      'Excellent presentation and stakeholder management skills.',
      'Familiarity with the Open RAN ecosystem: O-RAN ALLIANCE specifications, disaggregated RAN and the RIC.',
    ],
    niceToHave: [
      'Experience with neutral host and multi-operator in-building coverage solutions.',
      'Background in public sector procurement (G-Cloud, Crown Commercial Service frameworks).',
      'Relevant vendor certifications: Ericsson ECPE, Nokia SRC, or equivalent.',
    ],
  },
  {
    slug: 'ai-ml-engineer-telecoms',
    title: 'AI/ML Engineer, Telecoms',
    dept: 'AI & Data',
    location: 'London, UK',
    type: 'Full-time',
    postedDate: 'May 2026',
    summary: 'Build and deploy AI and machine learning models for network intelligence, RAN automation and predictive optimisation across 5G and Open RAN infrastructure.',
    about: [
      'AWTG is at the forefront of AI-driven network intelligence, and we are looking for an AI/ML Engineer to join our AI & Data team. You will develop ML models and xApps/rApps that improve network performance, automate optimisation tasks and deliver actionable insights from RAN telemetry data.',
      'You will work within our growing AI platform practice, integrating models into AWTG\'s internal tools and client-facing products including our Kai AI platform and O-RAN near-RT RIC integrations.',
      'This role sits at the intersection of applied machine learning and telecommunications — ideal for an engineer who wants to see their models running on live networks.',
    ],
    responsibilities: [
      'Design, train and deploy ML models for RAN KPI prediction, anomaly detection and automated optimisation.',
      'Develop xApps and rApps targeting O-RAN E2, A1 and O1 interfaces for near-RT and non-RT RIC platforms.',
      'Process and analyse large-scale RAN telemetry datasets to identify patterns and improvement opportunities.',
      'Build and maintain ML pipelines from data ingestion through to model serving in production.',
      'Collaborate with RF engineers to validate model outputs against real-world network behaviour.',
      'Contribute to AWTG\'s AI research programme, including DSIT-funded projects like HiPer-RAN.',
      'Write clean, well-tested and documented code following engineering best practices.',
    ],
    requirements: [
      'Degree in Computer Science, Mathematics, Engineering or a related quantitative discipline.',
      '3+ years of professional ML engineering experience with production deployments.',
      'Strong proficiency in Python and ML frameworks: PyTorch, TensorFlow or scikit-learn.',
      'Experience working with time-series data and signal processing.',
      'Familiarity with MLOps practices: experiment tracking, model versioning and serving.',
      'Strong software engineering fundamentals: testing, version control, code review.',
    ],
    niceToHave: [
      'Understanding of RAN KPIs, 5G NR performance counters or O-RAN interfaces (E2, A1, O1).',
      'Experience with open-source RIC platforms such as O-RAN Software Community or OpenAirInterface.',
      'Background in reinforcement learning or time-series forecasting for operational systems.',
    ],
  },
  {
    slug: 'project-manager-private-networks',
    title: 'Project Manager, Private Networks',
    dept: 'Delivery',
    location: 'Manchester, UK',
    type: 'Full-time',
    postedDate: 'May 2026',
    summary: 'Own end-to-end delivery of private 5G network deployments, managing client relationships, cross-functional teams, schedules and budgets from kick-off to acceptance.',
    about: [
      'We are looking for an experienced Project Manager to lead the delivery of private network programmes for enterprise and public sector clients. You will manage the full project lifecycle from initial scoping through to network acceptance and handover, working with RF engineers, software developers, procurement and client teams.',
      'You will be based in Manchester with regular travel to client sites and AWTG offices. You will manage a portfolio of concurrent projects across sectors including rail, ports, smart cities and industrial IoT.',
      'This is a highly visible role where delivery quality directly impacts client satisfaction and AWTG\'s reputation in the private networks market.',
    ],
    responsibilities: [
      'Own end-to-end project delivery for private 5G and connectivity programmes from initiation through to acceptance.',
      'Build and maintain detailed project plans, resource schedules and risk registers.',
      'Act as the primary point of contact for client stakeholders throughout delivery.',
      'Manage cross-functional delivery teams including RF engineers, software developers and third-party contractors.',
      'Monitor project budgets, track spend against forecast and proactively manage variances.',
      'Run project governance: status meetings, steering committees and project board reporting.',
      'Identify and mitigate delivery risks; escalate issues appropriately and quickly.',
      'Contribute to lessons-learned reviews and process improvement initiatives across the delivery function.',
    ],
    requirements: [
      '5+ years of project management experience delivering technology infrastructure or telecoms programmes.',
      'PMP, PRINCE2 or APM certification (or equivalent demonstrable experience).',
      'Proven ability to manage multiple projects concurrently with competing priorities.',
      'Strong client-facing skills with experience managing senior stakeholder relationships.',
      'Competency with project management tooling: MS Project, Jira, Smartsheet or equivalent.',
      'Comfortable in technically complex environments with the ability to engage credibly with engineers.',
    ],
    niceToHave: [
      'Experience delivering private 5G, DAS or neutral host network deployments.',
      'Background in public sector or government-funded programmes.',
      'Experience working with agile delivery frameworks alongside traditional project management.',
    ],
  },
  {
    slug: 'business-development-manager',
    title: 'Business Development Manager',
    dept: 'Commercial',
    location: 'London, UK',
    type: 'Full-time',
    postedDate: 'April 2026',
    summary: 'Drive new business growth across telecoms operators, enterprise and public sector clients, leading bid responses and building lasting commercial relationships.',
    about: [
      'AWTG is growing its commercial function and we are looking for a Business Development Manager to identify, qualify and close new opportunities across our target markets: mobile network operators, enterprise clients and UK public sector bodies.',
      'You will work closely with our solutions architecture, marketing and leadership teams to develop compelling propositions and lead bid responses for complex technology programmes including private 5G, Open RAN and AI platform deployments.',
      'This role requires a deep understanding of the UK telecoms and connectivity market, the confidence to operate at senior levels, and a track record of winning significant new business.',
    ],
    responsibilities: [
      'Identify and qualify new business opportunities across MNO, enterprise and public sector target accounts.',
      'Build and maintain a healthy pipeline of qualified opportunities using CRM tools.',
      'Lead commercial bid responses to RFIs and RFPs, coordinating input from technical and delivery teams.',
      'Develop and manage senior stakeholder relationships at target clients and partners.',
      'Represent AWTG at industry events, conferences and client workshops.',
      'Work with marketing to develop sector-specific campaigns, collateral and case studies.',
      'Report pipeline health, activity metrics and revenue forecasts to the leadership team.',
      'Negotiate and close commercial agreements in line with AWTG\'s pricing and margin requirements.',
    ],
    requirements: [
      '5+ years of B2B sales or business development experience in telecoms, technology or connectivity markets.',
      'Demonstrable track record of winning new business with deal values of £500k+.',
      'Strong understanding of the UK telecoms market: MNOs, MVNOs, systems integrators and public sector procurement.',
      'Experience managing complex sales cycles with multiple stakeholders.',
      'Excellent written and verbal communication skills with high-quality proposal writing ability.',
      'Self-motivated and target-driven with strong commercial judgement.',
    ],
    niceToHave: [
      'Existing network of contacts across UK MNOs, NHS Digital, local authorities or central government.',
      'Familiarity with Crown Commercial Service frameworks (G-Cloud, Technology Services).',
      'Experience selling private 5G, network infrastructure or AI/data platform solutions.',
    ],
  },
]

export const getRoleHref = (slug: string) => `/careers/${slug}`

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[#0a1628]/70 text-[15px] leading-[1.85] font-normal">
          <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-[#228DC1] shrink-0 mt-[3px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CareerRoleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const role = roles.find((r) => r.slug === slug)

  if (!role) return <Navigate to="/careers" replace />

  const related = roles.filter((r) => r.slug !== role.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-[#0a1628]/50 text-[13px] font-semibold hover:text-[#228DC1] transition-colors mb-8"
          >
            Back to Careers
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#228DC1] bg-[#228DC1]/8 px-2.5 py-1 mb-5">
                {role.dept}
              </span>
              <h1 className="font-serif-display text-[#0a1628] mb-5">{role.title}</h1>
              <div className="flex flex-wrap items-center gap-5 text-[14px] text-[#0a1628]/55 font-normal">
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-[#228DC1]" /> {role.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faBriefcase} className="w-3.5 h-3.5 text-[#228DC1]" /> {role.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCalendarDays} className="w-3.5 h-3.5 text-[#228DC1]" /> Posted {role.postedDate}
                </span>
              </div>
            </div>
            <Link
              to={`/careers/${role.slug}/apply`}
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
            >
              Apply for This Role
            </Link>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-14 lg:gap-20 items-start">

            {/* Main content */}
            <div className="space-y-12">

              {/* About */}
              <div>
                <h2 className="font-h3 text-[#0a1628] mb-6 pb-4 border-b border-gray-100">About the Role</h2>
                <div className="space-y-4">
                  {role.about.map((para) => (
                    <p key={para} className="text-[#0a1628]/70 text-[15px] leading-[1.9] font-normal">{para}</p>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="font-h3 text-[#0a1628] mb-2 pb-4 border-b border-gray-100">Key Responsibilities</h2>
                <BulletList items={role.responsibilities} />
              </div>

              {/* Requirements */}
              <div>
                <h2 className="font-h3 text-[#0a1628] mb-2 pb-4 border-b border-gray-100">Requirements</h2>
                <BulletList items={role.requirements} />
              </div>

              {/* Nice to have */}
              <div>
                <h2 className="font-h3 text-[#0a1628] mb-2 pb-4 border-b border-gray-100">Nice to Have</h2>
                <BulletList items={role.niceToHave} />
              </div>

              {/* Apply CTA inline */}
              <div className="bg-[#f7f9fc] border border-gray-100 p-8">
                <p className="type-label text-[#228DC1] mb-3">Ready to apply?</p>
                <h3 className="font-h4 text-[#0a1628] mb-3">Send us your application</h3>
                <p className="text-[#0a1628]/60 text-[14px] leading-[1.75] mb-6">
                  Complete your application in a few minutes. Upload your CV, add a covering note, and our team will be in touch.
                </p>
                <Link
                  to={`/careers/${role.slug}/apply`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-6">

              {/* Quick facts */}
              <div className="bg-[#f8fafc] border border-gray-100 p-7">
                <h3 className="font-h5 text-[#0a1628] mb-6">Role Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: faBuilding, label: 'Department', value: role.dept },
                    { icon: faLocationDot, label: 'Location', value: role.location },
                    { icon: faBriefcase, label: 'Employment', value: role.type },
                    { icon: faCalendarDays, label: 'Posted', value: role.postedDate },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white border border-[#228DC1]/15 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5 text-[#228DC1]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0a1628]/40 mb-0.5">{label}</p>
                        <p className="text-[14px] text-[#0a1628] font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to={`/careers/${role.slug}/apply`}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#228DC1] text-white text-[13px] font-semibold hover:bg-[#1a7fa8] transition-colors"
                  >
                    Apply for This Role
                  </Link>
                </div>
              </div>

              {/* Speculative */}
              <div className="border border-gray-100 p-7">
                <p className="type-label text-[#228DC1] mb-3">Not the right fit?</p>
                <p className="text-[#0a1628]/60 text-[13px] leading-[1.75] mb-5">
                  We welcome speculative applications from talented people. Send your CV and tell us how you can contribute.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#228DC1] text-[13px] font-semibold hover:text-[#1a7fa8] transition-colors"
                >
                  Send Speculative CV
                </Link>
              </div>

              {/* Other open roles */}
              {related.length > 0 && (
                <div className="border border-gray-100 p-7">
                  <h3 className="font-h5 text-[#0a1628] mb-5">Other Open Roles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        to={getRoleHref(r.slug)}
                        className="group block border-t border-gray-100 pt-4 first:border-t-0 first:pt-0"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#228DC1] mb-1">{r.dept}</p>
                        <p className="text-[14px] font-semibold text-[#0a1628] group-hover:text-[#228DC1] transition-colors leading-[1.3]">{r.title}</p>
                        <p className="text-[12px] text-[#0a1628]/45 mt-1">{r.location}</p>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/careers"
                    className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2 text-[#228DC1] text-[13px] font-semibold hover:text-[#1a7fa8] transition-colors"
                  >
                    View all positions
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Related roles footer strip */}
      <section className="py-16 bg-[#f7f9fc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="type-label text-[#228DC1] mb-3">Keep Exploring</p>
              <h2 className="font-h3 text-[#0a1628]">More open positions</h2>
            </div>
            <Link to="/careers" className="text-[#228DC1] text-sm font-semibold hover:text-[#1a7fa8] transition-colors flex items-center gap-1.5">
              All roles
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={getRoleHref(r.slug)}
                className="group bg-white border border-gray-100 hover:border-[#228DC1] hover:shadow-[0_4px_20px_rgba(34,141,193,0.1)] transition-all p-7"
              >
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#228DC1] bg-[#228DC1]/8 px-2.5 py-1 mb-4">
                  {r.dept}
                </span>
                <h3 className="font-h5 text-[#0a1628] group-hover:text-[#228DC1] transition-colors mb-3">{r.title}</h3>
                <p className="text-[#0a1628]/55 text-[13px] mb-5">{r.location} · {r.type}</p>
                <span className="inline-flex items-center gap-2 text-[#228DC1] text-[12px] font-semibold uppercase tracking-[0.1em]">
                  View Role
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
