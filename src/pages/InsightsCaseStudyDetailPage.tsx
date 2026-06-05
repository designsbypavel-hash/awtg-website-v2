import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'

type Section = {
  type: 'heading' | 'paragraph' | 'pullquote' | 'bullets' | 'stat-row'
  text?: string
  items?: string[]
  stats?: { value: string; label: string }[]
}

type CaseStudy = {
  title: string
  date: string
  tag: string
  sector: string
  client: string
  excerpt: string
  content: Section[]
}

const studies: Record<string, CaseStudy> = {
  'itrustric-open-ran-security': {
    title: 'iTRUSTRIC – Securing Open RAN with AWTG's Advanced Solution',
    date: 'October 7, 2024',
    tag: 'Open RAN Security',
    sector: 'Telecommunications',
    client: 'AWTG Platform',
    excerpt: 'Open RAN architecture introduces powerful flexibility but creates new security exposure across disaggregated, multi-vendor interfaces. iTRUSTRIC is AWTG's purpose-built platform to close that gap.',
    content: [
      { type: 'paragraph', text: 'Open RAN is reshaping how mobile networks are built. By disaggregating the radio access network into open, standardised components from multiple vendors, operators gain flexibility, reduce lock-in and open the door to software-driven innovation. But this same openness introduces a broader attack surface than traditional, integrated RAN architectures.' },
      { type: 'paragraph', text: 'The interfaces between O-RAN components — the fronthaul, midhaul and open interfaces such as O1, O2, A1 and E2 — were defined for interoperability. Security across these interfaces requires an additional layer of assurance that the O-RAN Alliance specifications alone do not fully address. iTRUSTRIC was built to provide exactly that.' },
      { type: 'heading', text: 'The Security Challenge in Open RAN' },
      { type: 'bullets', items: [
        'Disaggregated architecture means more interfaces, each a potential point of attack',
        'Multi-vendor deployments require trust frameworks that span supplier boundaries',
        'Open interfaces introduce software-defined vulnerabilities not present in closed RAN',
        'Operators must demonstrate compliance with 3GPP, O-RAN Alliance and national telecoms security frameworks',
        'Real-time traffic monitoring across distributed components requires new tooling',
      ]},
      { type: 'heading', text: 'The iTRUSTRIC Platform' },
      { type: 'paragraph', text: 'iTRUSTRIC is a security assurance platform engineered specifically for Open RAN environments. It operates across the full RAN stack — from the radio unit through the distributed and centralised units — providing continuous monitoring, threat detection and compliance validation in real time.' },
      { type: 'paragraph', text: 'The platform secures data flows between O-RAN components, provides granular visibility into inter-component communication, and alerts operators to anomalous behaviour before it escalates into a breach or service degradation event. Compliance reporting against telecoms security standards is built in, reducing the manual burden on engineering and security teams.' },
      { type: 'pullquote', text: 'Open RAN gives operators flexibility. iTRUSTRIC gives them the confidence to use it — deploying Open RAN at scale without compromising on security or compliance.' },
      { type: 'heading', text: 'Key Capabilities' },
      { type: 'bullets', items: [
        'Real-time security monitoring across all O-RAN open interfaces',
        'Threat detection and anomaly identification at the component and network level',
        'Automated compliance reporting against O-RAN Alliance and 3GPP security frameworks',
        'Data flow protection with end-to-end visibility across multi-vendor deployments',
        'Integration with existing NOC and security operations tooling',
        'Supports deployment across greenfield Open RAN and migration from traditional RAN',
      ]},
      { type: 'heading', text: 'Outcomes for Operators' },
      { type: 'paragraph', text: 'Operators deploying iTRUSTRIC gain a security layer that moves at network speed. Rather than periodic audits or reactive incident response, the platform provides continuous assurance — verifying that data flows are behaving as expected and that the multi-vendor trust boundary is being maintained at all times.' },
      { type: 'paragraph', text: 'For operators under regulatory scrutiny or national security framework obligations, iTRUSTRIC also provides the audit trail and compliance evidence needed to demonstrate due diligence to regulators and stakeholders.' },
    ],
  },

  'high-street-recovery': {
    title: 'Connectivity, Software and Services for High Street Recovery',
    date: 'September 17, 2021',
    tag: 'Public Sector',
    sector: 'Retail & Leisure',
    client: 'Local Authorities',
    excerpt: 'As retail and leisure sectors faced structural decline accelerated by the pandemic, AWTG worked with local authorities to deliver the connectivity and digital infrastructure underpinning high street recovery programmes.',
    content: [
      { type: 'paragraph', text: 'High streets across the UK were under pressure before the pandemic. A decade of online retail growth, changing consumer behaviour and reduced footfall had already forced local authorities to rethink how town and city centres could be made relevant again. The pandemic accelerated this challenge sharply, leaving many high streets facing vacancy rates and footfall levels that made conventional recovery strategies insufficient.' },
      { type: 'paragraph', text: 'Local authorities responded with place-making strategies — coordinated programmes designed to create vibrant, mixed-use centres that could attract visitors, residents and businesses. Connectivity and digital infrastructure became a central pillar of these strategies, not an afterthought.' },
      { type: 'heading', text: 'The Five Pillars of Place-Making' },
      { type: 'bullets', items: [
        'Repurposing and reusing buildings — converting vacant retail units to mixed uses including workspace, health services and community facilities',
        'Public realm improvements — upgrading streetscapes, creating attractive outdoor spaces and improving accessibility',
        'Supporting local businesses — providing digital tools, connectivity and platforms to help independent businesses compete and connect',
        'Creating appealing town and city centres — using events, culture and community programming to drive footfall',
        'Implementing active travel initiatives — walking and cycling infrastructure that makes centres more accessible and reduces car dependency',
      ]},
      { type: 'heading', text: 'AWTG's Role' },
      { type: 'paragraph', text: 'AWTG provided the connectivity infrastructure and software solutions that made place-making strategies technically deliverable. This included public realm Wi-Fi networks, private connectivity for high street businesses, smart sensors for footfall and environmental monitoring, and digital platforms for local authority management and reporting.' },
      { type: 'paragraph', text: 'The work required close coordination with local authority teams, BIDs (Business Improvement Districts), commercial landlords and retail operators. AWTG's consultancy-led approach meant that technology choices were driven by the specific recovery objectives of each location, not by a standard product deployment.' },
      { type: 'pullquote', text: 'High street recovery is not a single intervention. It is a sustained programme that requires connectivity, data and digital capability running as a foundation beneath every other initiative.' },
      { type: 'heading', text: 'Delivered Capabilities' },
      { type: 'bullets', items: [
        'Public realm Wi-Fi across town centre areas, enabling visitor connectivity and supporting digital engagement programmes',
        'Smart sensor networks for footfall counting, dwell time analysis and environmental monitoring',
        'Connectivity for repurposed buildings transitioning to workspace, health and community uses',
        'Digital reporting platforms giving local authorities real-time insight into place performance',
        'Business connectivity solutions for independent and SME retailers',
      ]},
    ],
  },

  'tot-service-assurance': {
    title: 'AWTG's Service Assurance and Service Creation Platform',
    date: 'April 20, 2020',
    tag: 'Network Economics',
    sector: 'Telecommunications',
    client: 'Telecom of Thailand (TOT)',
    excerpt: 'A GSMA-validated case study with Telecom of Thailand demonstrating how AWTG's Integrated Service Assurance and Service Creation Platform delivered over 50% reduction in operating costs and opened $250M in new revenue.',
    content: [
      { type: 'paragraph', text: 'Telecom of Thailand (TOT) faced a challenge common to many incumbent operators: significant operational expenditure across engineering, customer care, monitoring and site operations, with existing infrastructure that was underutilised for value-added services. The Thailand 4.0 national initiative created both an imperative and an opportunity to modernise.' },
      { type: 'paragraph', text: 'TOT partnered with AWTG to deploy the Integrated Service Assurance and Service Creation Platform (iSASCP) — a solution designed to address operational costs while simultaneously unlocking new IoT and smart city revenue streams on existing 3G infrastructure.' },
      { type: 'stat-row', stats: [
        { value: '50%+', label: 'reduction in annual operating costs' },
        { value: '$250M', label: 'increase in addressable revenues' },
        { value: 'GSMA', label: 'validated and published case study' },
      ]},
      { type: 'heading', text: 'The Challenge' },
      { type: 'paragraph', text: 'TOT needed to reduce the cost intensity of its operations without compromising service quality or network performance. At the same time, growing pressure from Thailand 4.0 requirements meant the operator needed to demonstrate a path to smart city, smart enterprise and Industry 4.0 service delivery — ideally without the capital expenditure of building entirely new infrastructure.' },
      { type: 'heading', text: 'The AWTG Solution' },
      { type: 'paragraph', text: 'AWTG's iSASCP platform was deployed to provide a unified service assurance and service creation layer across TOT's existing network. The platform consolidated monitoring, fault management, customer care tooling and field operations management into a single integrated environment, eliminating duplicated systems and reducing the manual overhead across operational teams.' },
      { type: 'paragraph', text: 'Crucially, the platform also provided a service creation capability that allowed TOT to build and launch IoT services on top of its existing 3G infrastructure. This meant smart city, smart enterprise and Industry 4.0 services could be delivered without requiring a new network build — dramatically improving the economics of Thailand 4.0 participation.' },
      { type: 'pullquote', text: 'TOT and AWTG have established the possibility for TOT to create new and innovative services on top of its existing network. — Dr. Pairoj Likitthanasate, Vice President, TOT' },
      { type: 'heading', text: 'Outcomes' },
      { type: 'bullets', items: [
        'Over 50% reduction in annual operating costs across engineering, customer care, monitoring licences and site operations',
        '$250 million increase in addressable revenue through smart city and enterprise IoT service delivery',
        'IoT service creation on existing 3G infrastructure — no new network investment required',
        'Consolidated operational tooling across network management, customer care and field operations',
        'GSMA publication of the case study as a model for operator efficiency and service creation',
        'Platform positioned TOT for Thailand 4.0, smart homes, smart cities and Industry 4.0 programmes',
      ]},
    ],
  },

  'central-london-benchmarking': {
    title: 'Central London Benchmarking',
    date: 'May 6, 2018',
    tag: 'Mobile Networks',
    sector: 'Mobile Networks',
    client: 'Major UK MNOs',
    excerpt: 'A pilot mobile service benchmarking programme across Central London, covering four major network operators, 3G voice and data performance, and a novel comparison of EE's newly launched LTE against carrier-grade outdoor Wi-Fi.',
    content: [
      { type: 'paragraph', text: 'Benchmarking mobile network performance in a dense urban environment like Central London requires a methodology capable of capturing the real experience of users across different service types, network operators, and transport environments. Standard drive testing approaches miss significant portions of how people actually use mobile services in cities.' },
      { type: 'paragraph', text: 'AWTG designed and delivered a multidimensional benchmarking pilot that evaluated the mobile network performance of four major UK mobile network operators across Central London, using a combination of pedestrian, indoor and transit testing methodologies.' },
      { type: 'heading', text: 'What Was Measured' },
      { type: 'bullets', items: [
        '3G voice quality and data performance across all four major UK network operators',
        'LTE data performance using EE's newly launched 4G service, one of the first commercial LTE deployments in the UK',
        'Carrier-grade outdoor Wi-Fi performance as a direct comparison to LTE in the same locations',
        'Mobile service performance on board London's new \'Boris\' buses, capturing the transit user experience',
        'Multidimensional analysis combining throughput, latency, coverage consistency and handover performance',
      ]},
      { type: 'heading', text: 'Why This Mattered' },
      { type: 'paragraph', text: 'At the time of this study, EE had just launched LTE in the UK and there was significant industry and media interest in how 4G compared to existing services in real-world conditions. The comparison with carrier-grade outdoor Wi-Fi was particularly relevant given the simultaneous investment by local authorities and operators in public Wi-Fi infrastructure across Central London.' },
      { type: 'paragraph', text: 'The inclusion of in-transit testing on Boris buses reflected an increasingly important dimension of mobile user experience — commuters and visitors spending significant time on public transport were a major cohort of urban mobile users, yet their experience was rarely measured in standard benchmarking programmes.' },
      { type: 'pullquote', text: 'Benchmarking that only captures static or pedestrian use misses a substantial share of how people actually use mobile services in cities. The transit dimension is where operators often have their biggest performance gaps.' },
      { type: 'heading', text: 'Methodology' },
      { type: 'bullets', items: [
        'Multi-level analysis combining network performance data with user experience metrics',
        'Parallel testing across all four operators using identical test equipment and conditions',
        'Wi-Fi versus LTE comparative analysis at matched locations across Central London',
        'In-transit testing protocol developed specifically for the London bus environment',
        'Repeatable test framework designed for ongoing benchmarking rather than one-time assessment',
      ]},
    ],
  },

  'data-offloading-wifi': {
    title: 'Data Offloading with WiFi Enabled Devices',
    date: 'September 2, 2013',
    tag: 'Capacity Planning',
    sector: 'Mobile Networks',
    client: 'Mobile Operators',
    excerpt: 'A laboratory demonstration of seamless cellular-to-WiFi data offloading, examining the technical and commercial case for dual-mode devices as a solution to mobile data capacity pressure.',
    content: [
      { type: 'paragraph', text: 'By 2013, the growth of mobile data traffic was outpacing the capacity of 3G networks in high-density areas. Smartphones, tablets and laptops had become predominantly dual-mode devices — carrying both cellular and WiFi radios — but the capability to seamlessly offload traffic between these access technologies was not yet being fully exploited.' },
      { type: 'paragraph', text: 'AWTG conducted a laboratory demonstration programme to test and document the technical requirements for seamless data offloading from cellular to WiFi, examining what was needed at the network level and what the user experience implications were across different offloading scenarios.' },
      { type: 'heading', text: 'The Capacity Context' },
      { type: 'bullets', items: [
        'Mobile data consumption was growing exponentially, driven by video, app usage and always-on connectivity behaviours',
        'Flat-rate data tariffs meant operator revenues were not scaling with traffic growth',
        'Traditional capacity expansion through additional spectrum and cell densification could not keep pace with demand alone',
        'Dual-mode device penetration had reached a point where WiFi offload was a viable commercial strategy',
        'Carrier-grade WiFi networks were emerging as a parallel infrastructure investment by operators and local authorities',
      ]},
      { type: 'heading', text: 'The Laboratory Demonstration' },
      { type: 'paragraph', text: 'AWTG's demonstration was built on industry standards for access network handover and authentication, using network solutions from Cisco and Ericsson to create a representative test environment. The demonstration examined real-life usage scenarios including video streaming, web browsing, email and file transfer across both cellular and WiFi access.' },
      { type: 'paragraph', text: 'Key focus areas were the seamlessness of the handover from the user perspective, the authentication and security model required for trusted offload, and the network management requirements for operators wanting to implement offload as a managed service rather than an opportunistic behaviour.' },
      { type: 'pullquote', text: 'The question was not whether WiFi offload would happen — dual-mode devices were already doing it. The question was whether it could be made seamless enough and managed well enough to be an operator-grade capacity tool.' },
      { type: 'heading', text: 'Key Findings' },
      { type: 'bullets', items: [
        'Standards-based offload using Hotspot 2.0 and 802.11u provided a usable foundation for seamless handover',
        'User experience during handover was acceptable for most application types but required careful tuning for voice and video',
        'Operator-managed offload required authentication infrastructure beyond what was available in most public WiFi deployments at the time',
        'Cisco and Ericsson solutions could be integrated to support managed offload at carrier grade',
        'Commercial model needed to align WiFi capacity investment with measurable cellular traffic reduction',
      ]},
    ],
  },

  'akt-stability-testing': {
    title: 'AKT – Stability Testing – Scenario',
    date: 'September 1, 2013',
    tag: 'Performance Testing',
    sector: 'Network Testing',
    client: 'AKT',
    excerpt: 'A multi-day network stability assessment using AWTG's Broadband Tester agents to measure user-perceived speed and reliability, providing an objective view of network quality of experience over sustained periods.',
    content: [
      { type: 'paragraph', text: 'Network stability is not the same as network availability. A network can be technically available while delivering inconsistent performance that degrades the user experience in ways that standard uptime monitoring will never capture. Understanding stability requires sustained measurement over time, across real usage patterns, from the user's perspective.' },
      { type: 'paragraph', text: 'AWTG designed a stability testing scenario for AKT that measured network performance continuously over multiple days, using AWTG's Broadband Tester agents to simulate real user activity and capture the quality of experience rather than just raw network metrics.' },
      { type: 'heading', text: 'What Network Stability Testing Measures' },
      { type: 'bullets', items: [
        'User-perceived speed over sustained periods, not just peak performance snapshots',
        'Reliability: how consistently the network delivers against its performance baseline',
        'Latency consistency and variation, which directly affects interactive application experience',
        'Packet loss patterns over time, identifying degradation windows that point to underlying issues',
        'The relationship between time of day, traffic load and experienced performance',
      ]},
      { type: 'heading', text: 'The AWTG Broadband Tester Agent Approach' },
      { type: 'paragraph', text: 'AWTG's Broadband Tester agents were deployed to simulate user data exchange activity across the network under test. Rather than synthetic traffic generation at a network level, the agents replicated the pattern of data transmission and reception that a real user would generate across typical applications and usage behaviours.' },
      { type: 'paragraph', text: 'The multi-day duration of the testing was deliberate. Single-day or short-window network assessments can miss cyclic patterns, off-peak degradation, and the cumulative effects of network changes made by operations teams during working hours. The sustained assessment gave AKT a view of stability that correlated directly with their users' actual experience.' },
      { type: 'pullquote', text: 'Short test windows tell you what the network can do. Multi-day stability testing tells you what the network actually does, consistently, across the full range of real operating conditions.' },
      { type: 'heading', text: 'Outcomes' },
      { type: 'bullets', items: [
        'Objective baseline of user-perceived network performance across the test period',
        'Identification of stability patterns including time-of-day variations and degradation windows',
        'Quantified reliability score based on consistency of performance against baseline',
        'Evidence base for network optimisation and capacity planning decisions',
        'Repeatable test methodology enabling future comparative assessments',
      ]},
    ],
  },

  'rich-communications-suite': {
    title: 'Rich Communications Suite',
    date: 'June 23, 2012',
    tag: 'Mobile Services',
    sector: 'Mobile Networks',
    client: 'Mobile Network Operators',
    excerpt: 'An analysis of the GSMA RCS-e initiative and its strategic importance for mobile network operators facing competition from over-the-top services, with AWTG's assessment of deployment considerations and commercial positioning.',
    content: [
      { type: 'paragraph', text: 'By 2012, mobile network operators faced a structural challenge: the services that had historically generated the highest-margin revenues — voice calls, SMS messaging, and MMS — were being displaced by over-the-top providers. Skype, WhatsApp (then emerging), Google Voice and similar services were delivering equivalent functionality over the mobile data connection that operators provided, without paying operators for the access.' },
      { type: 'paragraph', text: 'The industry response was the Rich Communications Suite. Specifically, RCS-e (Rich Communications Suite-enhanced) was the GSMA's standardised framework for operators to deliver voice, messaging and multimedia services that could match or exceed the functionality of OTT providers, while keeping the service within the operator's own platform and revenue model.' },
      { type: 'heading', text: 'What RCS-e Was Solving For' },
      { type: 'bullets', items: [
        'OTT services (Skype, Google Voice) were taking call and messaging revenue from operators',
        'LTE networks were pure data bearers with no integrated voice service — VoLTE was years away from widespread deployment',
        'Operators needed a standards-based way to offer social networking, HD voice and multimedia messaging that worked across carriers',
        'A fragmented approach — each operator building proprietary services — would not achieve the scale needed to compete with global OTT platforms',
        'The GSMA One API initiative required a common interface for application developers to access operator network capabilities',
      ]},
      { type: 'heading', text: 'The Technical Architecture' },
      { type: 'paragraph', text: 'RCS-e was built on IMS (IP Multimedia Subsystem) and SIP protocols, providing a standards-based foundation for inter-operator interconnection. This was critical: an RCS-e message or call needed to work between a user on one operator's network and a user on another operator's network, just as SMS worked universally regardless of which network each party was on.' },
      { type: 'paragraph', text: 'The architecture supported quality-of-service data bearers capable of delivering HD VoIP on LTE, creating a technical basis for operators to differentiate their services from best-effort OTT alternatives. The GSMA One API integration meant that application developers could access RCS-e capabilities across all participating operators through a single standardised interface.' },
      { type: 'pullquote', text: 'RCS-e was not a feature upgrade. It was a strategic repositioning of the operator as the platform layer — giving developers a single interface to network capabilities across all carriers simultaneously.' },
      { type: 'heading', text: 'Deployment Considerations' },
      { type: 'bullets', items: [
        'IMS core investment required: operators without IMS needed a deployment path before RCS-e was viable',
        'Inter-operator interconnection agreements needed to be in place for cross-network service delivery',
        'Device support: RCS-e required handset software integration, limiting initial rollout to supported device tiers',
        'Commercial model: operators needed to decide whether RCS-e services would be bundled or separately charged',
        'Developer ecosystem: attracting application developers to build on RCS-e APIs was critical to the platform's long-term value',
      ]},
    ],
  },

  'small-cell-site-acquisition': {
    title: 'Site Acquisition Proposition for Small Cell/3G Data Offload',
    date: 'June 23, 2012',
    tag: 'Site Acquisition',
    sector: 'Mobile Infrastructure',
    client: 'Mobile Operators incl. O2',
    excerpt: 'A site acquisition proposition for small cell and 3G data offload deployment in high-density urban areas, drawing on AWTG's experience building outdoor small cell networks for O2 and other major UK operators.',
    content: [
      { type: 'paragraph', text: 'By 2012, 3G networks were operating at or near capacity in high-density urban environments. The explosion of smartphone usage, combined with flat-rate data tariffs that had become the commercial norm, meant operators were carrying increasing traffic volumes while average revenue per user was declining. Traditional capacity expansion — adding more macro cell sites — was constrained by planning, cost and time.' },
      { type: 'paragraph', text: 'Small cells offered a complementary path: dense, low-power radio nodes deployed on existing street furniture and building assets, capable of significantly increasing network capacity in the locations where it was most needed without the planning complexity and capital cost of new macro sites.' },
      { type: 'stat-row', stats: [
        { value: '10×', label: 'capacity increase achievable with dense small cell deployment' },
        { value: '60–80%', label: 'of urban mobile data generated in indoor environments' },
        { value: '4G', label: 'offload networks built today serve future LTE demand' },
      ]},
      { type: 'heading', text: 'The Capacity Problem' },
      { type: 'bullets', items: [
        '3G networks were at capacity in high-density locations: city centres, transport hubs, stadiums, retail destinations',
        'Flat-rate data tariffs meant revenue was not scaling with the traffic growth operators were carrying',
        'LTE/4G expansion was planned but would take years to deploy at sufficient scale',
        'Indoor environments — where 60–80% of mobile data was consumed — were poorly served by outdoor macro networks',
        'Traditional network densification through new macro sites was slow, expensive and planning-constrained',
      ]},
      { type: 'heading', text: 'The Small Cell and Offload Approach' },
      { type: 'paragraph', text: 'AWTG's proposition combined two complementary strategies. Outdoor small cells — deployed on lamp columns, CCTV poles, bus shelters and building facades — increased network capacity in high-footfall outdoor environments. Indoor WiFi hotspots addressed the indoor capacity gap where small cells could not reach.' },
      { type: 'paragraph', text: 'The site acquisition dimension was critical and often underestimated. Deploying small cells at density requires access to a large number of street assets owned by local authorities, transport operators and private landlords. AWTG's experience in building and managing site acquisition programmes meant operators could deploy at the speed and density required, not just at the sites that were easy to access.' },
      { type: 'pullquote', text: 'The technical case for small cells was clear. The challenge was always the site acquisition — getting access to the right locations at the right density. That is where the programme either works or doesn't.' },
      { type: 'heading', text: 'AWTG's Experience' },
      { type: 'paragraph', text: 'AWTG had direct experience designing, deploying and operating outdoor small cell networks for O2 and other major UK network operators in busy urban areas. This experience informed a site acquisition proposition built around practical programme management, local authority relationships and asset owner engagement, not just the radio planning.' },
      { type: 'bullets', items: [
        'Street asset categories: lamp columns, CCTV poles, bus shelters, buildings and urban furniture',
        'Local authority and transport operator engagement for public realm deployments',
        'Private landlord propositions for retail, leisure and commercial estate deployments',
        'Indoor WiFi as a complement to outdoor small cells for the remaining capacity gap',
        'Programme management to deliver at the density and pace that commercial capacity objectives required',
        'Network design that ensures 3G/WiFi offload infrastructure is reusable for 4G as it deploys',
      ]},
    ],
  },
}

const allStudies = [
  { slug: 'itrustric-open-ran-security', tag: 'Open RAN Security', title: 'iTRUSTRIC – Securing Open RAN with AWTG's Advanced Solution', date: 'October 7, 2024' },
  { slug: 'high-street-recovery', tag: 'Public Sector', title: 'Connectivity, Software and Services for High Street Recovery', date: 'September 17, 2021' },
  { slug: 'tot-service-assurance', tag: 'Network Economics', title: 'AWTG's Service Assurance and Service Creation Platform', date: 'April 20, 2020' },
  { slug: 'central-london-benchmarking', tag: 'Mobile Networks', title: 'Central London Benchmarking', date: 'May 6, 2018' },
  { slug: 'data-offloading-wifi', tag: 'Capacity Planning', title: 'Data Offloading with WiFi Enabled Devices', date: 'September 2, 2013' },
  { slug: 'akt-stability-testing', tag: 'Performance Testing', title: 'AKT – Stability Testing – Scenario', date: 'September 1, 2013' },
  { slug: 'rich-communications-suite', tag: 'Mobile Services', title: 'Rich Communications Suite', date: 'June 23, 2012' },
  { slug: 'small-cell-site-acquisition', tag: 'Site Acquisition', title: 'Site Acquisition Proposition for Small Cell/3G Data Offload', date: 'June 23, 2012' },
]

const tagColour: Record<string, string> = {
  'Open RAN Security': 'bg-[#228DC1]/10 text-[#228DC1]',
  'Network Economics': 'bg-emerald-50 text-emerald-700',
  'Public Sector': 'bg-violet-50 text-violet-700',
  'Mobile Networks': 'bg-sky-50 text-sky-700',
  'Capacity Planning': 'bg-amber-50 text-amber-700',
  'Performance Testing': 'bg-orange-50 text-orange-700',
  'Mobile Services': 'bg-indigo-50 text-indigo-700',
  'Site Acquisition': 'bg-slate-100 text-slate-700',
}

export default function InsightsCaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? studies[slug] : null
  const related = allStudies.filter(s => s.slug !== slug).slice(0, 3)

  if (!study) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#228DC1] mb-4">404</p>
        <h1 className="text-[32px] font-bold text-[#0a1628] mb-4">Case Study Not Found</h1>
        <p className="text-[#0a1628]/60 mb-8 font-normal">This case study doesn't exist or may have been moved.</p>
        <Link to="/insights/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-[#228DC1] border border-[#228DC1] px-5 py-2.5 hover:bg-[#228DC1] hover:text-white transition-all">
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/insights/case-studies"
              className="inline-flex items-center gap-2 text-[#0a1628]/60 hover:text-[#228DC1] text-xs font-medium uppercase tracking-[0.12em] transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" /> Case Studies
            </Link>
            <span className="text-[#0a1628]/30">·</span>
            <span className={`text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 ${tagColour[study.tag] ?? 'bg-[#228DC1]/8 text-[#0a1628]/60'}`}>
              {study.tag}
            </span>
          </div>

          <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
            {study.title}
          </h1>

          <p className="text-[#0a1628]/60 text-[18px] font-normal leading-[1.7] mb-10 max-w-2xl">
            {study.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-100">
            <div>
              <p className="text-[#0a1628] text-[14px] font-medium">{study.client}</p>
              <p className="text-[#0a1628]/60 text-xs mt-0.5">{study.sector}</p>
            </div>
            <div className="w-px h-8 bg-[#228DC1]/8" />
            <div className="flex items-center gap-1.5 text-[#0a1628]/60 text-xs">
              <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3" /> {study.date}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          {study.content.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="font-serif-display text-[#0a1628] mt-14 mb-5" style={{ fontSize: '20px', lineHeight: 1.1 }}>
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="text-[#0a1628]/70 leading-[1.85] text-[16px] font-normal mb-7">
                  {block.text}
                </p>
              )
            }
            if (block.type === 'pullquote') {
              return (
                <blockquote key={i} className="my-12 pl-8 border-l-2 border-[#228DC1]">
                  <p className="font-serif-display text-[#0a1628] leading-snug italic" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
                    "{block.text}"
                  </p>
                </blockquote>
              )
            }
            if (block.type === 'bullets' && block.items) {
              return (
                <ul key={i} className="my-8 space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#0a1628]/70 text-[16px] font-normal leading-[1.7]">
                      <span className="mt-2 w-1 h-1 bg-[#228DC1] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.type === 'stat-row' && block.stats) {
              return (
                <div key={i} className="my-12 grid grid-cols-3 border border-gray-100">
                  {block.stats.map((s, j) => (
                    <div key={j} className={`px-6 py-6 ${j < block.stats!.length - 1 ? 'border-r border-gray-100' : ''}`}>
                      <p className="font-serif-display text-[#0a1628]" style={{ fontSize: '24px', lineHeight: 1.1 }}>{s.value}</p>
                      <p className="text-[#0a1628]/65 text-[14px] font-normal leading-[1.7] mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              )
            }
            return null
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#228DC1] mb-4">Talk to AWTG</p>
            <h2 className="font-serif-display text-[#0a1628] leading-tight">
              Want to explore<br />this further?
            </h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link to="/contact" className="px-7 py-3.5 bg-white text-[#0a1628] text-sm font-medium hover:bg-[#f0f5ff] transition-all">
              Speak to our experts
            </Link>
            <Link to="/insights/case-studies" className="px-7 py-3.5 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-all inline-flex items-center gap-2">
              More case studies <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-[#f7f8fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#0a1628]/60 mb-10">More from AWTG</p>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(r => (
              <Link
                key={r.slug}
                to={`/insights/case-studies/${r.slug}`}
                className="group bg-white border border-gray-100 p-6 hover:border-[#228DC1] transition-all"
              >
                <span className={`text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 mb-4 inline-block ${tagColour[r.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                  {r.tag}
                </span>
                <h3 className="text-[#0a1628] text-[14px] font-semibold leading-[1.3] mb-3 group-hover:text-[#228DC1] transition-colors">
                  {r.title}
                </h3>
                <p className="text-[#0a1628]/60 text-xs">{r.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See What We Can Achieve Together"
        subtitle="Tell us about your challenge and we will share the most relevant experience from across our project portfolio."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  )
}
