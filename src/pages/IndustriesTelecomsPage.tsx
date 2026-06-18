import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import {
  faArrowTrendUp,
  faBrain,
  faBuilding,
  faCar,
  faChartLine,
  faCloud,
  faGears,
  faGlobe,
  faNetworkWired,
  faRadio,
  faSatelliteDish,
  faSignal,
  faSitemap,
  faTowerBroadcast,
  faUsers,
  faWifi,
} from '@fortawesome/free-solid-svg-icons'

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Telecommunications',
    accentColor: '#228DC1',
    heroImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=85',
    title: 'Telecommunications',
    subtitle: 'Future-ready networks, delivered with confidence.',
    description:
      'AWTG combines advanced network services, software and telecoms expertise to help operators, infrastructure providers and enterprises design, deploy and manage the next generation of communications.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faTowerBroadcast,
    visualItems: [
      { icon: faSignal, label: '5G and future networks' },
      { icon: faWifi, label: 'In-building wireless' },
      { icon: faRadio, label: 'Spectrum management' },
      { icon: faNetworkWired, label: 'Network rollout' },
    ],
  },

  challenges: {
    heading: 'The telecommunications challenge',
    intro:
      'Operators must expand capacity, modernise complex estates and improve customer experience while controlling cost and meeting evolving regulatory requirements.',
    items: [
      {
        icon: faSignal,
        title: 'Network evolution',
        desc: 'Moving from legacy infrastructure to 5G and future communication systems requires careful planning, integration and assurance.',
      },
      {
        icon: faChartLine,
        title: 'Performance and capacity',
        desc: 'Growing data use and connected devices place continual pressure on coverage, capacity and service quality.',
      },
      {
        icon: faSitemap,
        title: 'Multi-vendor complexity',
        desc: 'Modern networks depend on coordinated radio, transport, core, cloud and operational platforms from multiple suppliers.',
      },
      {
        icon: faRadio,
        title: 'Spectrum efficiency',
        desc: 'Licensed and shared spectrum must be planned and managed efficiently while maintaining regulatory compliance.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for telecommunications',
    intro:
      'From strategy and architecture through deployment, integration and managed operations, AWTG supports the full network lifecycle.',
    items: [
      {
        icon: faSignal,
        title: '5G, Wi-Fi 6 and future communication systems',
        desc:
          'AWTG designs and delivers advanced communication networks that support data-intensive services, low-latency applications and connected operations.',
        bullets: [
          'Solution design, architecture and network planning',
          'Deployment, implementation and systems integration',
          'Integrated service platforms and application enablement',
          'End-to-end operational and managed network services',
        ],
        image:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85',
      },
      {
        icon: faBuilding,
        title: 'In-building design and deployment',
        desc:
          'Comprehensive indoor wireless services for corporate customers, venues, hospitals and mobile operators—from RF survey and design to integration and go-live.',
        bullets: [
          'Cellular, Wi-Fi, DAS and small-cell network design',
          'Radio-frequency surveys and coverage planning',
          'Deployment, commissioning and service assurance',
          'Smart-building, IoT and location technology integration',
        ],
        image:
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85',
      },
      {
        icon: faRadio,
        title: 'Spectrum, rollout and network operations',
        desc:
          'AWTG helps organisations manage spectrum, launch new infrastructure and improve existing networks with experienced engineering and operational teams.',
        bullets: [
          'Spectrum sharing, databases and regulatory frameworks',
          'Greenfield rollout and existing-network expansion',
          'Planning, design, optimisation and preventive maintenance',
          'AI-supported site surveys and infrastructure inspections',
        ],
        image:
          'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85',
      },
    ],
  },

  useCases: {
    heading: 'Telecommunications solutions across the network',
    intro:
      'AWTG brings together connectivity, software and engineering expertise for operators, infrastructure owners and communications-led enterprises.',
    items: [
      {
        icon: faBrain,
        title: 'Network AI and automation',
        desc: 'AI-assisted optimisation, fault correlation and operational automation that improve service performance and network efficiency.',
      },
      {
        icon: faTowerBroadcast,
        title: 'Small cells and fixed wireless',
        desc: 'Turnkey small-cell and fixed-wireless delivery for indoor and dense outdoor environments, from rollout to maintenance.',
      },
      {
        icon: faCar,
        title: 'Connected autonomous vehicles',
        desc: '5G, LTE-V and intelligent transport connectivity supporting safer vehicles, route planning and responsive roadside infrastructure.',
      },
      {
        icon: faGlobe,
        title: 'Immersive communications',
        desc: 'Low-latency mixed-reality, telepresence and smart application delivery enabled by high-performance communications networks.',
      },
      {
        icon: faSatelliteDish,
        title: 'Drone-powered site surveys',
        desc: 'AI-supported line-of-sight surveys, site inspections and maintenance assessments that reduce cost and personnel risk.',
      },
      {
        icon: faCloud,
        title: 'OSS/BSS and service platforms',
        desc: 'Integration of operational and business support systems to strengthen assurance, provisioning and revenue management.',
      },
    ],
  },

  outcomes: {
    heading: 'Networks built for what comes next',
    intro:
      'The right telecommunications partner helps organisations move faster, control risk and turn network investment into dependable services and new opportunities.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Faster network evolution',
        desc: 'Experienced planning and delivery teams accelerate launches, upgrades and transformation programmes without compromising quality.',
      },
      {
        icon: faChartLine,
        title: 'Improved performance',
        desc: 'Better visibility, optimisation and assurance improve coverage, capacity and the customer experience across the network.',
      },
      {
        icon: faGears,
        title: 'Greater operational efficiency',
        desc: 'Automation, integrated platforms and managed services reduce manual effort and support more efficient network operations.',
      },
      {
        icon: faUsers,
        title: 'A dependable delivery partner',
        desc: 'AWTG combines technical depth with practical deployment experience across operators, vendors, enterprises and public-sector estates.',
      },
    ],
  },

  proof: {
    quote:
      'The key to capitalising on next-generation networks is working with the right partner to deliver the vision, the use cases and the support behind them.',
    author: 'AWTG',
    context: 'Telecommunications',
  },

  cta: {
    title: 'Build the network your next service depends on',
    subtitle:
      'Speak to AWTG about network strategy, 5G and Wi-Fi delivery, in-building wireless, spectrum management and rollout programmes.',
    label: 'Talk to our experts',
  },
}

export default function IndustriesTelecomsPage() {
  return <IndustrySectorPage data={data} />
}
