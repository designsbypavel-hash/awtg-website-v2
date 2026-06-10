import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faIndustry,
  faNetworkWired,
  faWifi,
  faMicrochip,
  faChartLine,
  faShieldHalved,
  faGears,
  faArrowTrendUp,
  faLightbulb,
  faCloud,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#ea580c"
    headerIcon={faIndustry}
    title="Industrial IoT"
    subtitle="Manufacturing connectivity"
    items={[
      { icon: faNetworkWired, label: 'OT/IT convergence' },
      { icon: faWifi, label: 'Private 5G networks' },
      { icon: faMicrochip, label: 'Industrial IoT' },
      { icon: faGears, label: 'Automation-ready' },
    ]}
    badges={[
      { icon: faMicrochip, label: 'Private 5G', color: '#059669' },
      { icon: faGears, label: 'OT/IT Ready', color: '#ea580c' },
      { icon: faShieldHalved, label: 'IEC 62443', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Manufacturing',
    accentColor: '#ea580c',
    heroVisual,
    title: 'Connectivity for industrial and operational environments',
    subtitle:
      'AWTG supports organisations with the connectivity foundations needed for operational visibility, automation and connected assets.',
    description:
      'Manufacturing and industrial organisations need reliable connectivity to support operational systems, connected assets, data flows and future automation. AWTG brings experience in telecoms, advanced connectivity, 5G, IoT, software and secure infrastructure — giving us the capability to support manufacturers exploring connected operations.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faIndustry,
    visualItems: [
      { icon: faNetworkWired, label: 'Operational connectivity' },
      { icon: faWifi, label: 'Private 5G & wireless' },
      { icon: faMicrochip, label: 'IoT foundations' },
      { icon: faChartLine, label: 'Data & dashboards' },
    ],
  },

  challenges: {
    heading: 'Connectivity challenges in industrial environments',
    intro:
      'Industrial and manufacturing organisations face infrastructure challenges that limit operational visibility, constrain automation and slow the path to more connected operations.',
    items: [
      {
        icon: faNetworkWired,
        title: 'Operational connectivity gaps',
        desc: 'Many industrial environments rely on fragmented or ageing connectivity that cannot reliably support the operational systems, devices and data flows that modern operations require.',
      },
      {
        icon: faWifi,
        title: 'Standard networks not sufficient',
        desc: 'Consumer or office-grade wireless is often insufficient for industrial environments — where coverage, interference, device density and performance requirements are fundamentally different.',
      },
      {
        icon: faMicrochip,
        title: 'Disconnected assets and limited visibility',
        desc: 'Without reliable connectivity to equipment, sensors and operational assets, organisations lack the real-time visibility needed to support efficient and safe site operations.',
      },
      {
        icon: faShieldHalved,
        title: 'Security and resilience requirements',
        desc: 'Operational environments need connectivity that is resilient, secure and designed around business continuity — requirements that generic network solutions often fail to address.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG supports for manufacturing',
    intro:
      "AWTG's capability in telecoms, advanced connectivity, 5G, IoT and secure infrastructure gives us the foundations to support industrial and manufacturing organisations with their connectivity needs.",
    items: [
      {
        icon: faNetworkWired,
        title: 'Operational and private wireless connectivity',
        desc: 'Reliable networks that support equipment, staff devices, operational systems and digital workflows across industrial environments — including private 5G and advanced wireless where standard connectivity falls short.',
        bullets: [
          'Operational network design for industrial environments',
          'Private 5G and advanced wireless where required',
          'Coverage across complex industrial sites and structures',
          'Resilient architecture supporting business continuity',
        ],
      },
      {
        icon: faMicrochip,
        title: 'IoT foundations and data infrastructure',
        desc: 'Connected sensors can support visibility across assets, equipment and site conditions. AWTG can support the digital layer needed to collect, organise and present operational data where required.',
        bullets: [
          'IoT and sensor connectivity foundations',
          'Asset and equipment monitoring infrastructure',
          'Data collection and dashboard integration',
          'Secure data flow architecture from edge to platform',
        ],
      },
      {
        icon: faShieldHalved,
        title: 'AI-ready and secure infrastructure',
        desc: 'Manufacturers exploring AI and automation need strong connectivity and reliable data foundations. AWTG can help build the secure, resilient infrastructure that makes future intelligent operations possible.',
        bullets: [
          'Infrastructure designed for AI and automation readiness',
          'Secure operational environment architecture',
          'Network resilience and business continuity design',
          'Connectivity that supports digital transformation programmes',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Connectivity service areas',
    intro:
      "AWTG's experience in advanced connectivity and secure digital infrastructure enables us to support industrial organisations across a range of connectivity needs.",
    items: [
      {
        icon: faNetworkWired,
        title: 'Industrial connectivity',
        desc: 'Support operational environments with secure and reliable network foundations — connecting equipment, systems and teams across industrial sites.',
      },
      {
        icon: faWifi,
        title: 'Private networks',
        desc: 'Explore advanced wireless and private 5G connectivity for controlled industrial environments where performance, security and coverage requirements demand it.',
      },
      {
        icon: faMicrochip,
        title: 'IoT foundations',
        desc: 'Enable connected assets, sensors and data flows where required — creating the visibility layer that supports operational decision making and future automation.',
      },
      {
        icon: faGears,
        title: 'AI-ready operations',
        desc: 'Prepare the connectivity and data infrastructure needed for automation, analytics and future AI use cases — building the foundations before the applications are ready.',
      },
    ],
  },

  outcomes: {
    heading: 'What better connectivity enables',
    intro:
      'Strong connectivity foundations create the conditions for operational improvement, greater visibility and readiness for more intelligent, automated industrial operations.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Improved operational connectivity',
        desc: 'Operational systems, staff devices and digital workflows supported by reliable, purpose-designed connectivity across the industrial environment.',
      },
      {
        icon: faChartLine,
        title: 'Better site visibility',
        desc: 'Connected assets and sensors provide the operational data needed to support informed decisions and improve visibility across the site.',
      },
      {
        icon: faLightbulb,
        title: 'Foundations for automation',
        desc: 'The connectivity and data infrastructure in place to support automation, analytics and AI when the organisation is ready to pursue them.',
      },
      {
        icon: faCloud,
        title: 'Secure data flows',
        desc: 'Operational data flowing securely from edge devices and sensors through to dashboards and platforms that support operational decision making.',
      },
    ],
  },

  cta: {
    title: 'Speak to AWTG about connectivity for industrial environments',
    subtitle:
      'AWTG brings experience in telecoms, advanced connectivity, 5G, IoT and secure infrastructure to support manufacturing and industrial organisations.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityManufacturingPage() {
  return <IndustrySectorPage data={data} />
}
