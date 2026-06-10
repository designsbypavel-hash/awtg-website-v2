import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faGraduationCap,
  faWifi,
  faShield,
  faNetworkWired,
  faCloud,
  faUsers,
  faMobile,
  faLock,
  faChartLine,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#7c3aed"
    headerIcon={faGraduationCap}
    title="Campus Network"
    subtitle="Education connectivity"
    items={[
      { icon: faWifi, label: 'High-density campus wireless' },
      { icon: faShield, label: 'Safeguarding-compliant networks' },
      { icon: faNetworkWired, label: 'Research & HPC infrastructure' },
      { icon: faMobile, label: 'BYOD & guest access' },
    ]}
    badges={[
      { icon: faGraduationCap, label: 'Eduroam', color: '#059669' },
      { icon: faShield, label: 'DfE Aligned', color: '#7c3aed' },
      { icon: faCloud, label: 'Cloud Ready', color: '#0891b2' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Education',
    accentColor: '#7c3aed',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=840&q=80&auto=format&fit=crop',
    title: 'Connectivity for education',
    subtitle:
      'Campus wireless, safeguarding-compliant networks and managed infrastructure services for schools, colleges and universities.',
    description:
      'AWTG designs and deploys network infrastructure for educational institutions — from primary school to university campus — meeting DfE requirements, online safety standards and the connectivity demands of modern teaching and learning.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faGraduationCap,
    visualItems: [
      { icon: faWifi, label: 'Campus wireless networks' },
      { icon: faShield, label: 'Safeguarding & filtering' },
      { icon: faNetworkWired, label: 'Managed education networks' },
      { icon: faCloud, label: 'Cloud-ready connectivity' },
    ],
  },

  challenges: {
    heading: 'Network challenges in education',
    intro:
      'Educational institutions need reliable, secure networks that support modern teaching, meet safeguarding requirements and remain manageable within constrained IT budgets.',
    items: [
      {
        icon: faUsers,
        title: 'High device density',
        desc: 'Modern classrooms support dozens of simultaneous devices — student laptops, tablets, interactive displays and IoT sensors — placing significant demands on wireless infrastructure.',
      },
      {
        icon: faShield,
        title: 'Safeguarding and compliance',
        desc: 'Schools and colleges must meet Keeping Children Safe in Education and DfE requirements for online safety filtering and monitoring across all school-provided connectivity.',
      },
      {
        icon: faWifi,
        title: 'Coverage and performance gaps',
        desc: 'Older or poorly designed wireless infrastructure creates dead zones, performance issues and frustration for both staff and students that directly affect learning outcomes.',
      },
      {
        icon: faMobile,
        title: 'BYOD and personal device management',
        desc: 'Supporting a mix of school-owned and personal devices across student and staff populations requires network segmentation and access policy that many networks lack.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for education',
    intro:
      'AWTG provides network infrastructure services tailored to educational institutions — combining technical expertise with an understanding of the DfE and safeguarding requirements that govern school networking.',
    items: [
      {
        icon: faWifi,
        title: 'Campus wireless infrastructure',
        desc: 'High-density Wi-Fi designed for educational environments — providing reliable coverage in classrooms, libraries, sports halls and outdoor teaching areas.',
        bullets: [
          'RF survey and design for educational building types',
          'High-density access point deployment for classroom environments',
          'Seamless roaming across campus buildings and zones',
          'Separate networks for staff, students and guests',
        ],
      },
      {
        icon: faShield,
        title: 'Safeguarding-compliant networks',
        desc: 'Network design and filtering solutions that meet Keeping Children Safe in Education obligations and DfE guidance on internet safety for educational institutions.',
        bullets: [
          'Content filtering aligned to DfE requirements',
          'Monitoring and alerting for safeguarding compliance',
          'Separate traffic handling for different user categories',
          'Audit logging to support safeguarding investigations',
        ],
      },
      {
        icon: faCloud,
        title: 'Managed and cloud-ready connectivity',
        desc: 'Managed connectivity services that keep educational networks performing reliably — with cloud-ready architecture for Microsoft 365, Google Workspace and cloud-hosted learning platforms.',
        bullets: [
          'Managed NOC with education-aware monitoring',
          'Optimised routing for cloud-hosted educational platforms',
          'Bandwidth management for teaching and learning priorities',
          'Proactive maintenance during school holidays where possible',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Solutions across the education estate',
    intro:
      'From a single school to a multi-academy trust, AWTG delivers network infrastructure that supports the full range of educational activities.',
    items: [
      {
        icon: faWifi,
        title: 'Campus-wide wireless rollout',
        desc: 'End-to-end wireless programmes for schools and universities — survey, design, deployment and commissioning across all teaching and support spaces.',
      },
      {
        icon: faShield,
        title: 'Online safety and content filtering',
        desc: 'DfE-compliant internet safety filtering and monitoring for schools — meeting statutory safeguarding obligations with appropriate controls and reporting.',
      },
      {
        icon: faNetworkWired,
        title: 'School and MAT network programmes',
        desc: 'Consistent, well-managed network infrastructure across multi-academy trusts — reducing fragmentation and operational overhead across multiple sites.',
      },
      {
        icon: faCloud,
        title: 'Cloud platform connectivity',
        desc: 'Optimised connectivity for Microsoft 365, Google Workspace and cloud-hosted MIS and learning management systems used across the school estate.',
      },
      {
        icon: faLock,
        title: 'Network security and access control',
        desc: 'Appropriate network segmentation, access control and security monitoring to protect school systems, student data and safeguarding records.',
      },
    ],
  },

  outcomes: {
    heading: 'Better connectivity, better learning',
    intro:
      'Well-designed education networks improve teaching delivery, meet compliance requirements and reduce the burden on IT staff and school leadership.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Reliable classroom connectivity',
        desc: 'Consistent wireless performance across all teaching spaces removes the connectivity failures that disrupt lessons and frustrate staff.',
      },
      {
        icon: faShield,
        title: 'Safeguarding compliance met',
        desc: 'Networks designed and managed to meet DfE and Keeping Children Safe in Education requirements — reducing compliance risk for school leadership.',
      },
      {
        icon: faUsers,
        title: 'Reduced IT burden',
        desc: 'Managed services and well-designed infrastructure reduce the daily support burden on school IT teams and staff, freeing time for teaching support.',
      },
      {
        icon: faChartLine,
        title: 'Network visibility and reporting',
        desc: 'Monitoring and reporting tools provide IT leads and school leadership with the insight needed to manage network performance and safeguarding obligations.',
      },
    ],
  },

  cta: {
    title: 'Better connectivity for every learner',
    subtitle:
      'Speak to AWTG about campus wireless, DfE-compliant networks and managed connectivity services for educational institutions.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityEducationPage() {
  return <IndustrySectorPage data={data} />
}
