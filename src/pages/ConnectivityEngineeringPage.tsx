import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faWrench,
  faWifi,
  faMicrochip,
  faNetworkWired,
  faCloud,
  faGlobe,
  faUsers,
  faChartLine,
  faLightbulb,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#6b7280"
    headerIcon={faWrench}
    title="Site Connectivity"
    subtitle="Engineering infrastructure"
    items={[
      { icon: faWifi, label: 'Multi-site wireless' },
      { icon: faMicrochip, label: 'Asset IoT' },
      { icon: faNetworkWired, label: 'OT/IT convergence' },
      { icon: faCloud, label: 'Remote monitoring' },
    ]}
    badges={[
      { icon: faNetworkWired, label: 'SD-WAN', color: '#059669' },
      { icon: faMicrochip, label: 'IoT Ready', color: '#6b7280' },
      { icon: faGlobe, label: 'Multi-site', color: '#0891b2' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Engineering',
    accentColor: '#6b7280',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=840&q=80',
    title: 'Connectivity for complex engineering projects',
    subtitle:
      'AWTG helps engineering and infrastructure organisations connect sites, assets, teams and systems through secure digital infrastructure.',
    description:
      'Engineering projects often involve complex sites, technical teams, distributed assets and operational data. AWTG brings experience in telecoms, 5G, IoT, software, secure infrastructure and innovation programmes — allowing us to support engineering organisations that need better connectivity across sites, systems and assets.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faWrench,
    visualItems: [
      { icon: faWifi, label: 'Site connectivity' },
      { icon: faMicrochip, label: 'Connected assets & IoT' },
      { icon: faNetworkWired, label: 'Advanced private networks' },
      { icon: faCloud, label: 'Data platforms' },
    ],
  },

  challenges: {
    heading: 'Connectivity challenges in engineering',
    intro:
      'Engineering and infrastructure projects face connectivity challenges that limit team productivity, reduce operational visibility and create barriers to digital innovation.',
    items: [
      {
        icon: faGlobe,
        title: 'Complex and distributed environments',
        desc: 'Engineering projects often span multiple sites, remote locations and technical environments where standard commercial connectivity is inadequate or unavailable.',
      },
      {
        icon: faMicrochip,
        title: 'Disconnected assets and equipment',
        desc: 'Without reliable connectivity to equipment and operational assets, engineering organisations lack the real-time visibility needed to support efficient project and site management.',
      },
      {
        icon: faUsers,
        title: 'Field team digital access',
        desc: 'Teams working in the field or across distributed project sites often lack reliable access to the systems, data and communications they need to work effectively.',
      },
      {
        icon: faWifi,
        title: 'Connectivity gaps at project sites',
        desc: 'Project locations frequently lack appropriate connectivity infrastructure — creating barriers to operational monitoring, team communications and data-driven decision making.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG supports for engineering',
    intro:
      "AWTG's experience in telecoms, 5G, IoT, public sector connectivity, ESA-related innovation and digital infrastructure enables us to support engineering organisations with complex connectivity requirements.",
    items: [
      {
        icon: faWifi,
        title: 'Site and wireless connectivity',
        desc: 'Connectivity for operational sites, technical environments, project locations and distributed teams — including advanced wireless and private networks where standard connectivity falls short.',
        bullets: [
          'Site connectivity for project and operational environments',
          'Advanced wireless and private networks where required',
          'Connectivity for remote and technically demanding locations',
          'Secure access for distributed engineering teams',
        ],
      },
      {
        icon: faMicrochip,
        title: 'Connected assets and data platforms',
        desc: 'IoT and sensor infrastructure to support visibility across equipment, environmental conditions or operational assets — connected through to data platforms and reporting tools that support operational decisions.',
        bullets: [
          'Asset and equipment connectivity foundations',
          'Environmental and operational monitoring where required',
          'Data collection and platform integration',
          'Dashboards and reporting for engineering decision making',
        ],
      },
      {
        icon: faNetworkWired,
        title: 'Innovation environments and secure infrastructure',
        desc: 'AWTG has experience in advanced connectivity and innovation programmes, making us well placed to support pilots, demonstrators and emerging technology projects alongside secure operational infrastructure delivery.',
        bullets: [
          'Pilot and demonstrator connectivity support',
          'Innovation and testbed programme experience',
          'Secure infrastructure for technical environments',
          'ESA and public sector innovation programme experience',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Connectivity service areas',
    intro:
      'From project site connectivity to innovation programmes, AWTG supports engineering and infrastructure organisations across a range of connectivity needs.',
    items: [
      {
        icon: faWifi,
        title: 'Site and project connectivity',
        desc: 'Support teams working across complex, distributed or technical environments — providing reliable connectivity for project sites, field operations and multi-site programmes.',
      },
      {
        icon: faMicrochip,
        title: 'Connected assets',
        desc: 'Use connectivity and sensors to improve visibility across equipment, environmental conditions and operational assets where required by the project or programme.',
      },
      {
        icon: faChartLine,
        title: 'Engineering data platforms',
        desc: 'Connect data from operational assets and site systems into dashboards and reporting tools that support better project and engineering decision making.',
      },
      {
        icon: faLightbulb,
        title: 'Innovation environments',
        desc: 'Support pilots, demonstrators and emerging technology programmes with the connectivity and digital infrastructure that advanced engineering and innovation projects require.',
      },
    ],
  },

  outcomes: {
    heading: 'What better connectivity delivers',
    intro:
      'Reliable, well-designed connectivity across engineering environments improves team productivity, operational visibility and readiness for future digital and AI programmes.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Better site and asset connectivity',
        desc: 'Sites, assets and operational systems connected reliably — removing the infrastructure barriers that slow project delivery and limit operational visibility.',
      },
      {
        icon: faUsers,
        title: 'Engineering teams better connected',
        desc: 'Field and project teams with the digital access they need — reducing the communication and information gaps that create rework and delay.',
      },
      {
        icon: faCloud,
        title: 'Improved data access',
        desc: 'Operational and asset data flowing from the site into the platforms and dashboards that support engineering decisions and programme oversight.',
      },
      {
        icon: faGlobe,
        title: 'Visibility across distributed sites',
        desc: 'Connected monitoring across project sites and technical environments — improving situational awareness for engineering leaders and project teams.',
      },
    ],
  },

  cta: {
    title: 'Speak to AWTG about connectivity for engineering',
    subtitle:
      'AWTG supports engineering and infrastructure organisations with site connectivity, connected assets, data platforms and innovation programmes.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityEngineeringPage() {
  return <IndustrySectorPage data={data} />
}
