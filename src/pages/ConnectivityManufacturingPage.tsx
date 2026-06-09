import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import {
  faIndustry,
  faMicrochip,
  faShieldHalved,
  faNetworkWired,
  faCloud,
  faGears,
  faWifi,
  faChartLine,
  faUsers,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Manufacturing',
    title: 'Connectivity for manufacturing',
    subtitle:
      'Private 5G and LTE, industrial IoT connectivity and OT security for manufacturing, logistics and industrial operations.',
    description:
      'AWTG designs and deploys wireless infrastructure for complex industrial environments — from factory floor to port logistics — providing the reliable, secure connectivity that Industry 4.0 operations demand.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faIndustry,
    visualItems: [
      { icon: faWifi, label: 'Private 5G & LTE' },
      { icon: faMicrochip, label: 'Industrial IoT' },
      { icon: faShieldHalved, label: 'OT security' },
      { icon: faGears, label: 'Industry 4.0 automation' },
    ],
  },

  challenges: {
    heading: 'Connectivity challenges in manufacturing',
    intro:
      'Manufacturing and logistics operations demand connectivity that performs across large, complex sites — supporting automation, IoT and operational technology without compromise.',
    items: [
      {
        icon: faWifi,
        title: 'Coverage across complex sites',
        desc: 'Large factories, warehouses and port facilities present significant wireless coverage challenges — with metal structures, interference and scale that commercial Wi-Fi cannot adequately address.',
      },
      {
        icon: faMicrochip,
        title: 'Industrial IoT density',
        desc: 'Manufacturing operations increasingly depend on hundreds or thousands of connected sensors, AGVs, robots and monitoring devices — each requiring reliable, low-latency connectivity.',
      },
      {
        icon: faShieldHalved,
        title: 'OT security and IT/OT convergence',
        desc: 'Connecting operational technology to enterprise IT networks creates significant security exposure. OT systems were not designed for network connectivity and require careful segmentation and protection.',
      },
      {
        icon: faCloud,
        title: 'Edge computing and latency',
        desc: 'Real-time manufacturing applications — machine vision, process control, autonomous vehicles — require low-latency local processing that centralised cloud connectivity cannot always provide.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for manufacturing',
    intro:
      'AWTG combines wireless expertise, OT security knowledge and industrial IoT experience to deliver connectivity programmes for manufacturing, logistics and port operations.',
    items: [
      {
        icon: faWifi,
        title: 'Private 5G and LTE wireless',
        desc: 'Purpose-built private wireless networks for industrial sites — providing the coverage, capacity and deterministic performance that critical manufacturing operations require.',
        bullets: [
          'RF design for complex industrial environments',
          'Private LTE and 5G deployment across large sites',
          'Seamless coverage for mobile assets and AGVs',
          'Spectrum coordination and interference management',
        ],
      },
      {
        icon: faMicrochip,
        title: 'Industrial IoT connectivity',
        desc: 'Robust, segmented connectivity for the growing estate of industrial IoT devices — from environmental sensors to robotic process equipment and automated guided vehicles.',
        bullets: [
          'Dedicated network segments for IoT device categories',
          'Device onboarding and lifecycle management',
          'Traffic prioritisation for operational-critical devices',
          'Integration with SCADA, MES and enterprise platforms',
        ],
      },
      {
        icon: faShieldHalved,
        title: 'OT security and network segmentation',
        desc: 'Network architecture and security controls that protect operational technology from IT-side threats — maintaining the availability and safety of critical manufacturing systems.',
        bullets: [
          'IT/OT network segmentation and zone architecture',
          'Firewall and access control policy for OT environments',
          'Vulnerability management adapted for OT system constraints',
          'Ongoing OT network monitoring and threat detection',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Applications across manufacturing and logistics',
    intro:
      'From automotive factory to container port, AWTG delivers the connectivity programmes that enable modern industrial operations.',
    items: [
      {
        icon: faWifi,
        title: 'Private wireless for industrial sites',
        desc: 'Private LTE and 5G network design and deployment across factories, warehouses and logistics facilities — providing reliable coverage from floor to ceiling.',
      },
      {
        icon: faMicrochip,
        title: 'Industrial IoT programmes',
        desc: 'End-to-end industrial IoT connectivity — from initial device and network architecture design through to deployment, management and performance monitoring.',
      },
      {
        icon: faShieldHalved,
        title: 'OT network security programmes',
        desc: 'Assessment, segmentation and ongoing management of OT network security — protecting manufacturing systems from cyber threats without compromising operational continuity.',
      },
      {
        icon: faGears,
        title: 'Industry 4.0 network enablement',
        desc: 'Network infrastructure supporting smart manufacturing programmes — machine vision, digital twins, autonomous systems and real-time process monitoring.',
      },
      {
        icon: faNetworkWired,
        title: 'Logistics and port connectivity',
        desc: 'Wireless and wired connectivity for large logistics and port environments — providing seamless coverage for cranes, vehicles and container operations across the site.',
      },
    ],
  },

  outcomes: {
    heading: 'What industrial connectivity delivers',
    intro:
      'Well-designed industrial wireless and OT networks improve operational efficiency, enable automation and reduce the risk exposure that poor connectivity creates in manufacturing environments.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Operational efficiency gains',
        desc: 'Reliable wireless connectivity enables automation, real-time monitoring and data-driven process optimisation that reduce waste and improve throughput.',
      },
      {
        icon: faUsers,
        title: 'Safer working environments',
        desc: 'Connected safety systems, real-time location services and IoT-enabled hazard monitoring improve worker safety across complex industrial sites.',
      },
      {
        icon: faChartLine,
        title: 'Asset and process visibility',
        desc: 'IoT-connected assets and real-time operational data provide the visibility needed for predictive maintenance, inventory management and process improvement.',
      },
      {
        icon: faCloud,
        title: 'IT/OT integration enabled',
        desc: 'Secure, segmented OT networks enable safe integration with enterprise IT systems — unlocking the data that drives Industry 4.0 programmes.',
      },
    ],
  },

  proof: {
    quote:
      'AWTG delivered a private wireless network for a 500-hectare port facility, providing seamless coverage across container yards, warehouses and operational buildings — connecting the entire estate on a single, managed private network.',
    author: 'AWTG Engineering',
    context: 'Port infrastructure deployment',
  },

  cta: {
    title: 'Connectivity for industrial operations',
    subtitle:
      'Speak to AWTG about private 5G and LTE, industrial IoT connectivity and OT security for manufacturing and logistics.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityManufacturingPage() {
  return <IndustrySectorPage data={data} />
}
