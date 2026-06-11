import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faLandmark,
  faNetworkWired,
  faShield,
  faCloud,
  faLock,
  faServer,
  faUsers,
  faKey,
  faChartLine,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#4f46e5"
    headerIcon={faLandmark}
    title="Gov Connectivity"
    subtitle="Secure government infrastructure"
    items={[
      { icon: faNetworkWired, label: 'PSN-compliant networks' },
      { icon: faShield, label: 'GovWifi infrastructure' },
      { icon: faLock, label: 'Classified environments' },
      { icon: faCloud, label: 'G-Cloud connectivity' },
    ]}
    badges={[
      { icon: faShield, label: 'PSN', color: '#059669' },
      { icon: faNetworkWired, label: 'GovWifi', color: '#4f46e5' },
      { icon: faLock, label: 'NCSC Aligned', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Government',
    accentColor: '#4f46e5',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=840&q=80',
    title: 'Connectivity for government',
    subtitle:
      'PSN-compliant networks, GovWifi infrastructure and cleared managed services for central and local government.',
    description:
      'AWTG designs and delivers secure, compliant network infrastructure for government organisations — from PSN-aligned WAN programmes to classified network environments and cloud connectivity for digital transformation.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faLandmark,
    visualItems: [
      { icon: faShield, label: 'PSN & GovWifi compliant' },
      { icon: faNetworkWired, label: 'Government WAN' },
      { icon: faCloud, label: 'Cloud connectivity' },
      { icon: faKey, label: 'Classified network support' },
    ],
  },

  challenges: {
    heading: 'The complexity of government networking',
    intro:
      'Government networks must meet stringent security requirements, support digital transformation and maintain continuity for services that citizens depend on.',
    items: [
      {
        icon: faShield,
        title: 'PSN and security frameworks',
        desc: 'Government networks carrying sensitive data must comply with PSN Code of Connection and related security standards — with evidence for annual compliance assessment.',
      },
      {
        icon: faNetworkWired,
        title: 'Legacy infrastructure complexity',
        desc: 'Many government departments and local authorities carry complex legacy network estates that create operational overhead, inconsistency and increasing technical debt.',
      },
      {
        icon: faCloud,
        title: 'Digital transformation demands',
        desc: 'Government cloud adoption and digital service programmes require network infrastructure capable of delivering performance, security and scalability across hybrid environments.',
      },
      {
        icon: faServer,
        title: 'Data centre and hosting transitions',
        desc: 'Government data centre consolidation programmes and hosting transitions require careful connectivity planning to avoid service disruption to citizen-facing systems.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for government',
    intro:
      'AWTG brings deep experience in government networking — from PSN-compliant WAN programmes to classified network environments and managed services for complex estates.',
    items: [
      {
        icon: faNetworkWired,
        title: 'PSN-compliant WAN and SD-WAN',
        desc: 'Government-grade WAN architecture designed to meet PSN Code of Connection requirements — providing secure, resilient connectivity across departmental and local authority sites.',
        bullets: [
          'PSN compliance-led network architecture design',
          'SD-WAN for modernised, cost-efficient government connectivity',
          'Traffic classification and segmentation for data handling policies',
          'High-availability design for continuity of citizen services',
        ],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faShield,
        title: 'GovWifi and secure wireless',
        desc: 'GovWifi deployment and management for government offices and public-facing buildings — providing compliant, secure wireless access for staff and visitors.',
        bullets: [
          'GovWifi programme delivery and ongoing management',
          'Separate wireless segments for staff, contractors and public',
          'Integration with government identity and access management',
          'Monitoring and compliance reporting for GovWifi obligations',
        ],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faCloud,
        title: 'Government cloud connectivity',
        desc: 'Secure, optimised connectivity to G-Cloud, Microsoft Azure Government and other public cloud platforms supporting government digital programmes.',
        bullets: [
          'Connectivity to G-Cloud and government PaaS environments',
          'Secure remote access for hybrid and home-working staff',
          'Performance optimisation for cloud-hosted citizen services',
          'Routing compliance for government data handling requirements',
        ],
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'Network solutions across government',
    intro:
      'From central departments to local authorities and arm\'s length bodies, AWTG delivers connectivity across the breadth of the government estate.',
    items: [
      {
        icon: faNetworkWired,
        title: 'PSN and government WAN programmes',
        desc: 'End-to-end WAN programmes for government organisations — from network assessment and design through to deployment and managed ongoing operations.',
      },
      {
        icon: faKey,
        title: 'GovWifi deployment and management',
        desc: 'Full GovWifi programme delivery for government offices — compliant deployment, ongoing management and the reporting required to maintain GovWifi status.',
      },
      {
        icon: faServer,
        title: 'Data centre and hosting connectivity',
        desc: 'High-availability connectivity for government data centres, co-location environments and hosting transitions supporting critical public services.',
      },
      {
        icon: faCloud,
        title: 'Digital transformation connectivity',
        desc: 'Network infrastructure supporting government digital programmes — providing the cloud connectivity, performance and security that modern digital services require.',
      },
      {
        icon: faLock,
        title: 'Secure remote and classified access',
        desc: 'Managed secure remote access and classified network connectivity for government staff — aligned to relevant security frameworks and accreditation requirements.',
      },
    ],
  },

  outcomes: {
    heading: 'What government networks should deliver',
    intro:
      'The right connectivity infrastructure enables government to operate securely, support digital transformation and meet the compliance requirements that public sector networking demands.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Service continuity',
        desc: 'Resilient, well-managed networks reduce the risk of connectivity failures that affect citizen-facing services and operational continuity.',
      },
      {
        icon: faShield,
        title: 'Compliance and security posture',
        desc: 'PSN-aligned architecture, ongoing managed security and compliance support reduces risk exposure for government network operations.',
      },
      {
        icon: faChartLine,
        title: 'Network visibility and management',
        desc: 'Proactive monitoring and managed NOC services provide government IT teams with the insight and support to manage complex estates effectively.',
      },
      {
        icon: faUsers,
        title: 'Flexible working enabled',
        desc: 'Secure remote access and consistent connectivity across sites supports hybrid working for government staff without compromising security.',
      },
    ],
  },

  cta: {
    title: 'Connectivity designed for government',
    subtitle:
      'Speak to AWTG about PSN-compliant networks, GovWifi programmes and managed connectivity for government organisations.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityGovernmentPage() {
  return <IndustrySectorPage data={data} />
}
