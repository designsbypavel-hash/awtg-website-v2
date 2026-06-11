import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faLandmark,
  faComments,
  faShieldHalved,
  faUsers,
  faChartLine,
  faClipboardList,
  faGlobe,
  faArrowTrendUp,
  faClock,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#0891b2"
    headerIcon={faLandmark}
    title="Public Services AI"
    subtitle="Citizen engagement platform"
    items={[
      { icon: faComments, label: 'Citizen enquiry automation' },
      { icon: faShieldHalved, label: 'Secure by design' },
      { icon: faClipboardList, label: 'Case management intelligence' },
      { icon: faGlobe, label: 'Multi-channel service delivery' },
    ]}
    badges={[
      { icon: faShieldHalved, label: 'UK GDPR', color: '#059669' },
      { icon: faGlobe, label: 'GOV.UK Ready', color: '#0891b2' },
      { icon: faClock, label: '24/7 Service', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'AI Platform · Public Sector',
    accentColor: '#0891b2',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=840&q=80',
    title: 'AI for the public sector',
    subtitle:
      'Respond to more citizens faster, reduce case backlogs and give frontline teams the intelligence to act on what matters.',
    description:
      'AWTG deploys conversational AI and intelligent automation for public sector organisations — designed around compliance, accessibility and the practical constraints of government IT environments.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faLandmark,
    visualItems: [
      { icon: faComments, label: 'Citizen service AI' },
      { icon: faUsers, label: 'Case processing automation' },
      { icon: faChartLine, label: 'Service analytics' },
      { icon: faShieldHalved, label: 'Governance & compliance' },
    ],
  },

  challenges: {
    heading: 'The pressures public services face',
    intro:
      'Public sector organisations must deliver more with constrained resources, navigate strict governance and serve citizens with diverse needs and digital confidence.',
    items: [
      {
        icon: faUsers,
        title: 'Rising citizen demand',
        desc: 'Enquiry volumes across benefits, services and information requests continue to grow while staffing levels and budgets remain under pressure.',
      },
      {
        icon: faShieldHalved,
        title: 'Compliance and governance',
        desc: 'Public sector AI must operate within strict governance frameworks — GDPR, accessibility standards and ministerial accountability requirements that commercial tools often overlook.',
      },
      {
        icon: faClock,
        title: 'Staff capacity and retention',
        desc: 'Frontline teams spend disproportionate time on routine enquiries, reducing the bandwidth available for complex casework and vulnerable citizen support.',
      },
      {
        icon: faGlobe,
        title: 'Digital inclusion gaps',
        desc: 'Not all citizens are equally digitally confident. AI deployments must be accessible, clearly signposted and complemented by human escalation pathways.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for public services',
    intro:
      'AWTG designs AI for the real operating environment of public sector organisations — compliant, accessible and built to work with existing systems and governance frameworks.',
    items: [
      {
        icon: faComments,
        title: 'Citizen service automation',
        desc: 'Conversational AI that handles high-volume citizen enquiries on benefits, services, eligibility and local information — available around the clock via web and messaging channels.',
        bullets: [
          'Common enquiry resolution using approved, current guidance',
          'Accessible design meeting WCAG and public sector standards',
          'Clear escalation to human advisors where needed',
          'Audit trail and transparency for governance requirements',
        ],
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faClipboardList,
        title: 'Case management and triage AI',
        desc: 'AI that supports case intake, classification, routing and status management — reducing manual handling and improving consistency across complex workflows.',
        bullets: [
          'Automated case triage and priority classification',
          'Document processing and data extraction',
          'Integration with existing case management platforms',
          'Audit-ready logging for accountability requirements',
        ],
        image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faShieldHalved,
        title: 'Policy and compliance intelligence',
        desc: 'Give frontline teams and citizens access to accurate, current policy guidance — reducing errors, improving consistency and ensuring compliance with changing requirements.',
        bullets: [
          'Conversational access to current policy and guidance',
          'Version-controlled knowledge base management',
          'Usage analytics to identify guidance gaps',
          'Integration with legislative change workflows',
        ],
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'AI across public service delivery',
    intro:
      'From citizen-facing helpdesks to back-office case processing, AWTG deploys AI that improves both citizen experience and operational efficiency.',
    items: [
      {
        icon: faComments,
        title: 'Citizen helpdesk AI',
        desc: 'Conversational AI for citizen enquiries on local services, benefits eligibility, appointment booking and information requests — available 24/7 across channels.',
      },
      {
        icon: faClipboardList,
        title: 'Case triage and processing',
        desc: 'Automated intake, classification and routing of cases to the right team at the right time, reducing manual effort and improving response consistency.',
      },
      {
        icon: faShieldHalved,
        title: 'Policy navigation and guidance',
        desc: 'AI-powered access to current policy, legislation and guidance for both citizens and frontline staff — reducing errors and improving first-contact resolution.',
      },
      {
        icon: faChartLine,
        title: 'Service analytics and reporting',
        desc: 'Operational dashboards and trend analysis to surface demand patterns, service gaps and performance metrics for leadership and continuous improvement teams.',
      },
      {
        icon: faGlobe,
        title: 'Multi-channel citizen access',
        desc: 'Consistent AI across web, mobile and telephony channels — meeting citizens where they are and supporting digital inclusion goals across the population.',
      },
    ],
  },

  outcomes: {
    heading: 'Better outcomes for citizens and teams',
    intro:
      'Public sector AI deployments with AWTG deliver improvements in response times, compliance assurance, staff capacity and service intelligence.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Faster citizen response',
        desc: 'More enquiries resolved at first contact, reducing wait times and improving the citizen experience across routine service interactions.',
      },
      {
        icon: faShieldHalved,
        title: 'Compliance by design',
        desc: 'AI built to meet public sector governance, accessibility and data handling requirements — reducing risk and supporting auditability.',
      },
      {
        icon: faUsers,
        title: 'Staff capacity freed',
        desc: 'Frontline teams redirected from repetitive volume to complex casework, vulnerable citizen support and high-value service delivery.',
      },
      {
        icon: faLightbulb,
        title: 'Better service intelligence',
        desc: 'Insight from citizen interactions informs service design, policy communication and proactive improvements to the most common failure points.',
      },
    ],
  },

  cta: {
    title: 'AI for better public services',
    subtitle:
      'Speak to AWTG about AI for citizen service delivery, case management automation and public sector compliance.',
    label: 'Talk to our experts',
  },
}

export default function AiPublicSectorPage() {
  return <IndustrySectorPage data={data} />
}
