import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import {
  faWrench,
  faWifi,
  faShield,
  faMicrochip,
  faNetworkWired,
  faCloud,
  faUsers,
  faChartLine,
  faArrowTrendUp,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Engineering',
    title: 'Connectivity for engineering and construction',
    subtitle:
      'Deployable site wireless, asset IoT connectivity and remote team communications for engineering and construction operations.',
    description:
      'AWTG designs and deploys connectivity solutions for engineering and construction environments — temporary site networks, asset tracking and remote team communications that keep projects running efficiently from groundbreak to handover.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faWrench,
    visualItems: [
      { icon: faWifi, label: 'Deployable site wireless' },
      { icon: faMicrochip, label: 'Asset IoT connectivity' },
      { icon: faNetworkWired, label: 'Project network infrastructure' },
      { icon: faCloud, label: 'Cloud-connected site systems' },
    ],
  },

  challenges: {
    heading: 'Connectivity challenges on engineering projects',
    intro:
      'Engineering and construction projects require connectivity that can be deployed quickly, withstands harsh environments and supports the operational technology that modern projects depend on.',
    items: [
      {
        icon: faGlobe,
        title: 'Remote and temporary site locations',
        desc: 'Engineering projects often operate in remote locations or temporary site environments where commercial connectivity infrastructure does not exist or is inadequate.',
      },
      {
        icon: faMicrochip,
        title: 'Asset tracking and visibility',
        desc: 'Large project sites involve significant plant, equipment and materials that are difficult to track and manage without reliable IoT connectivity and visibility tools.',
      },
      {
        icon: faWifi,
        title: 'Site wireless performance',
        desc: 'Outdoor environments, large structures and interference from plant equipment create challenging wireless propagation conditions that consumer solutions cannot overcome.',
      },
      {
        icon: faUsers,
        title: 'Distributed team communications',
        desc: 'Project teams spanning multiple sites, disciplines and organisations need reliable, secure communications infrastructure that moves with the project through its phases.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for engineering',
    intro:
      'AWTG provides connectivity solutions designed for the demands of engineering and construction environments — deployable, ruggedised and managed across the full project lifecycle.',
    items: [
      {
        icon: faWifi,
        title: 'Deployable site wireless networks',
        desc: 'Ruggedised, rapidly deployable wireless infrastructure for construction sites and engineering environments — providing reliable coverage outdoors and across complex structures.',
        bullets: [
          'Outdoor and industrial-grade wireless hardware',
          'Rapid deployment and reconfiguration as the site evolves',
          'Coverage design for large-scale outdoor environments',
          'Managed service with remote monitoring capability',
        ],
      },
      {
        icon: faMicrochip,
        title: 'Asset and equipment IoT',
        desc: 'IoT connectivity for plant, equipment and materials tracking across the project site — providing the real-time visibility that project managers need to control costs and schedules.',
        bullets: [
          'Asset location and utilisation tracking',
          'Plant monitoring and maintenance alerting',
          'Materials and inventory tracking systems',
          'Integration with project management platforms',
        ],
      },
      {
        icon: faNetworkWired,
        title: 'Project network infrastructure',
        desc: 'Scalable network infrastructure for site offices, welfare facilities and engineering systems — supporting BIM platforms, project management software and collaboration tools.',
        bullets: [
          'Temporary site office LAN and wireless',
          'Secure connectivity between site and central project systems',
          'VPN access for remote project team members',
          'Infrastructure scaling as the project progresses',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Connectivity across the project lifecycle',
    intro:
      'From mobilisation to handover, AWTG provides the connectivity infrastructure that keeps engineering and construction projects moving efficiently.',
    items: [
      {
        icon: faWifi,
        title: 'Site wireless deployment',
        desc: 'Rapid deployment of ruggedised outdoor wireless for construction sites — providing coverage for site offices, plant areas and distributed work zones.',
      },
      {
        icon: faMicrochip,
        title: 'Plant and asset tracking',
        desc: 'IoT-enabled asset tracking for construction plant, equipment and materials — giving project managers real-time visibility of their site resources.',
      },
      {
        icon: faNetworkWired,
        title: 'Site office and engineering system networks',
        desc: 'Managed LAN and wireless for site offices, design hubs and engineering workspaces — supporting BIM, design collaboration and project management platforms.',
      },
      {
        icon: faShield,
        title: 'Site security and access control',
        desc: 'Network-connected site security, CCTV and access control systems — providing reliable monitoring and access management across the project boundary.',
      },
      {
        icon: faCloud,
        title: 'Cloud platform connectivity',
        desc: 'Reliable connectivity to cloud-hosted project platforms — BIM 360, Procore, Microsoft 365 and specialist engineering software used across the project team.',
      },
    ],
  },

  outcomes: {
    heading: 'What connected sites deliver',
    intro:
      'Reliable, well-managed connectivity across engineering and construction sites improves project efficiency, reduces risk and keeps distributed teams productive.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Projects running on schedule',
        desc: 'Reliable connectivity for engineering systems and project management platforms reduces the delays that poor site infrastructure creates.',
      },
      {
        icon: faUsers,
        title: 'Distributed teams connected',
        desc: 'Project teams across sites, disciplines and organisations stay connected and collaborative — reducing the communication gaps that cause rework and delay.',
      },
      {
        icon: faChartLine,
        title: 'Asset and resource visibility',
        desc: 'IoT-enabled asset tracking gives project managers the visibility to optimise plant utilisation, reduce losses and manage costs more effectively.',
      },
      {
        icon: faGlobe,
        title: 'Connectivity anywhere on site',
        desc: 'Ruggedised wireless infrastructure provides reliable coverage across the full project footprint — regardless of scale, environment or project phase.',
      },
    ],
  },

  cta: {
    title: 'Connectivity built for engineering',
    subtitle:
      'Speak to AWTG about deployable site wireless, asset IoT connectivity and project network infrastructure for engineering and construction.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityEngineeringPage() {
  return <IndustrySectorPage data={data} />
}
