import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faLandmark,
  faNetworkWired,
  faShield,
  faCloud,
  faWifi,
  faUsers,
  faLock,
  faServer,
  faChartLine,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#0891b2"
    headerIcon={faLandmark}
    title="PSN Network"
    subtitle="Public sector connectivity"
    items={[
      { icon: faShield, label: 'PSN-aligned networks' },
      { icon: faNetworkWired, label: 'Government WAN & SD-WAN' },
      { icon: faCloud, label: 'Cloud & G-Cloud connectivity' },
      { icon: faWifi, label: 'GovWifi deployment' },
    ]}
    badges={[
      { icon: faShield, label: 'PSN', color: '#059669' },
      { icon: faNetworkWired, label: 'CCS', color: '#0891b2' },
      { icon: faUsers, label: 'SC Cleared', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Public Sector',
    accentColor: '#0891b2',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=840&q=80',
    title: 'Connectivity for the public sector',
    subtitle:
      'PSN-aligned network infrastructure, secure remote access and managed services for central and local government.',
    description:
      'AWTG designs, deploys and manages connectivity solutions for public sector organisations — meeting the security, compliance and resilience requirements of government networking while supporting the demands of a modern, hybrid-working workforce.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faLandmark,
    visualItems: [
      { icon: faShield, label: 'PSN-aligned networks' },
      { icon: faNetworkWired, label: 'Government WAN & SD-WAN' },
      { icon: faCloud, label: 'Cloud connectivity' },
      { icon: faWifi, label: 'GovWifi deployment' },
    ],
  },

  challenges: {
    heading: 'Network challenges across government',
    intro:
      'Public sector organisations must balance strict security requirements with the operational demands of distributed teams, citizen services and digital transformation programmes.',
    items: [
      {
        icon: faShield,
        title: 'PSN and compliance requirements',
        desc: 'Networks carrying public sector data must meet PSN Code of Connection and associated security requirements — with evidence for annual compliance assessment.',
      },
      {
        icon: faNetworkWired,
        title: 'Fragmented legacy estate',
        desc: 'Many public sector organisations operate connectivity built over decades — creating fragmentation, inconsistency and growing operational overhead.',
      },
      {
        icon: faCloud,
        title: 'Cloud migration demands',
        desc: 'Digital transformation and G-Cloud adoption require network infrastructure capable of delivering consistent performance to cloud-hosted systems across multiple sites.',
      },
      {
        icon: faUsers,
        title: 'Hybrid working complexity',
        desc: 'Supporting a mix of office, home and remote working across a distributed public sector workforce requires secure, performant and manageable connectivity.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for public sector',
    intro:
      'AWTG provides connectivity solutions built to meet public sector security standards while supporting the operational and transformation requirements of modern government.',
    items: [
      {
        icon: faNetworkWired,
        title: 'PSN-aligned WAN and SD-WAN',
        desc: 'Wide area network design and deployment aligned to PSN Code of Connection requirements — covering government sites from central departments to local authority offices.',
        bullets: [
          'PSN-compliant network architecture design',
          'SD-WAN for multi-site government connectivity',
          'Traffic segmentation for different data classifications',
          'High-availability design for critical government services',
        ],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faCloud,
        title: 'Cloud and hybrid connectivity',
        desc: 'Secure, performant connectivity to public cloud, G-Cloud hosted services and hybrid environments — designed for the demands of government digital transformation.',
        bullets: [
          'Optimised connectivity to G-Cloud and government PaaS platforms',
          'Secure remote access for hybrid working staff',
          'Bandwidth management for cloud-dependent applications',
          'Integration with existing PSN and HSCN connectivity where relevant',
        ],
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faShield,
        title: 'Managed security and compliance',
        desc: 'Ongoing network security management, monitoring and compliance support — providing the operational assurance and evidence base that public sector organisations require.',
        bullets: [
          'Network security monitoring and threat detection',
          'PSN compliance evidence gathering and documentation',
          'Vulnerability management and patching support',
          'Incident response and service restoration',
        ],
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'Solutions across the public sector estate',
    intro:
      'From central government departments to local authorities and arm\'s length bodies, AWTG delivers connectivity that meets public sector requirements.',
    items: [
      {
        icon: faNetworkWired,
        title: 'Government WAN and PSN connectivity',
        desc: 'End-to-end WAN programmes aligned to PSN Code of Connection — connecting government sites with the security and resilience that public sector data demands.',
      },
      {
        icon: faWifi,
        title: 'GovWifi and staff wireless',
        desc: 'GovWifi-compliant wireless infrastructure for government offices, council buildings and public sector facilities — providing secure access for staff and visitors.',
      },
      {
        icon: faCloud,
        title: 'Cloud and digital service connectivity',
        desc: 'Reliable, optimised connectivity to cloud-hosted citizen services, case management systems and government platforms supporting digital transformation.',
      },
      {
        icon: faServer,
        title: 'Data centre and co-location connectivity',
        desc: 'High-availability connectivity for government data centres and co-location environments supporting critical public services and citizen-facing systems.',
      },
      {
        icon: faLock,
        title: 'Secure remote access',
        desc: 'Managed VPN and zero-trust network access for hybrid working public sector staff — secure, scalable and aligned to government security frameworks.',
      },
    ],
  },

  outcomes: {
    heading: 'What modern public sector connectivity delivers',
    intro:
      'Well-designed, managed connectivity infrastructure enables public sector organisations to operate efficiently, securely and at the pace that digital transformation demands.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Improved service resilience',
        desc: 'High-availability network design reduces downtime for citizen-facing services and the internal systems that staff depend on to deliver them.',
      },
      {
        icon: faShield,
        title: 'Stronger compliance posture',
        desc: 'PSN-aligned design and managed compliance support reduces risk exposure and provides the evidence base required for annual assessments.',
      },
      {
        icon: faChartLine,
        title: 'Operational network visibility',
        desc: 'Proactive monitoring and managed NOC services provide insight across the estate before network issues affect services or staff productivity.',
      },
      {
        icon: faUsers,
        title: 'Hybrid workforce enabled',
        desc: 'Secure, performant connectivity for office, home and remote working staff — removing the connectivity barriers to flexible public sector working.',
      },
    ],
  },

  cta: {
    title: 'Connectivity built for public sector',
    subtitle:
      'Speak to AWTG about PSN-compliant networks, government WAN, GovWifi and managed connectivity services.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityPublicSectorPage() {
  return <IndustrySectorPage data={data} />
}
