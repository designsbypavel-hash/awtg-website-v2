import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faShieldHalved,
  faNetworkWired,
  faServer,
  faCloud,
  faLock,
  faCertificate,
  faArrowTrendUp,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#dc2626"
    headerIcon={faShieldHalved}
    title="Network Security Operations"
    subtitle="Telecoms grade protection"
    items={[
      { icon: faNetworkWired, label: '5G & Open RAN security' },
      { icon: faServer, label: 'SOC & SIEM monitoring' },
      { icon: faLock, label: 'Zero Trust architecture' },
      { icon: faCertificate, label: 'Compliance & audit support' },
    ]}
    badges={[
      { icon: faShieldHalved, label: 'ISO 27001', color: '#059669' },
      { icon: faCertificate, label: 'Cyber Essentials+', color: '#0891b2' },
      { icon: faServer, label: '24/7 SOC', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Security & Assurance',
    accentColor: '#dc2626',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Network and infrastructure security built for telecoms grade resilience',
    subtitle:
      'Protect networks, cloud and critical infrastructure with security designed around real telecom and IT operating environments.',
    description:
      'AWTG provides specialised security across telecommunications, cloud and infrastructure — from 5G and Open RAN to SOC led threat detection — helping organisations protect critical connectivity and meet evolving compliance requirements.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faShieldHalved,
    visualItems: [
      { icon: faNetworkWired, label: 'Telecom network security' },
      { icon: faServer, label: 'SOC & threat detection' },
      { icon: faCloud, label: 'Cloud & infrastructure security' },
      { icon: faCertificate, label: 'Compliance & assurance' },
    ],
  },

  challenges: {
    heading: 'Security pressures across modern networks',
    intro:
      'Next generation connectivity expands the attack surface as fast as it expands capability — and compliance requirements are rising to match.',
    items: [
      {
        icon: faNetworkWired,
        title: 'Expanding telecom attack surface',
        desc: '5G, Open RAN, network slicing and edge/MEC deployments expand the attack surface faster than traditional perimeter security can adapt.',
      },
      {
        icon: faServer,
        title: 'Limited threat visibility',
        desc: 'Without SOC led monitoring and correlation, threats across hybrid IT, cloud and network environments go undetected until they become incidents.',
      },
      {
        icon: faCloud,
        title: 'Cloud and hybrid complexity',
        desc: 'Multi cloud, containerised and hybrid environments multiply configuration risk and make a consistent security posture difficult to maintain.',
      },
      {
        icon: faCertificate,
        title: 'Mounting compliance pressure',
        desc: 'Telecom, data protection and industry specific standards keep evolving, requiring continuous evidence rather than point in time assessments.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for network security',
    intro:
      'AWTG provides security engineered around real telecom and infrastructure environments — not generic IT security retrofitted to networks.',
    items: [
      {
        icon: faNetworkWired,
        title: 'Telecommunications network security',
        desc: 'Specialised security for next generation telecom and connectivity ecosystems — covering everything from the radio access network to the core.',
        bullets: [
          '4G, 5G and 6G security architecture',
          'Open RAN (O-RAN) security assessment',
          'Private mobile, satellite and NTN security',
          'Network slicing and edge/MEC security',
        ],
        image: 'https://images.unsplash.com/photo-1629837093109-11325d6e7afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faServer,
        title: 'Security operations and threat detection',
        desc: 'Around the clock monitoring, detection and response across IT, cloud and network environments.',
        bullets: [
          'Security Operations Centre (SOC) and SIEM solutions',
          'Threat detection and event correlation',
          'Security automation and orchestration',
          'Digital forensics and incident investigation',
        ],
        image: 'https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faCloud,
        title: 'Cloud and infrastructure security',
        desc: 'Secure design and operation of cloud native, hybrid and on premises infrastructure.',
        bullets: [
          'Cloud security architecture and Zero Trust design',
          'Container and Kubernetes security',
          'Identity, access and encryption management',
          'Continuous vulnerability and configuration management',
        ],
        image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'Security across the connectivity stack',
    intro:
      'From the radio access network to the cloud, AWTG secures every layer that modern connectivity depends on.',
    items: [
      {
        icon: faNetworkWired,
        title: '5G and Open RAN security',
        desc: 'Security architecture and assessment for next generation mobile networks, from RAN to core.',
      },
      {
        icon: faServer,
        title: 'SOC led threat detection',
        desc: 'Continuous monitoring, correlation and response across IT, network and cloud environments.',
      },
      {
        icon: faCloud,
        title: 'Cloud native and hybrid security',
        desc: 'Secure architecture for multi cloud, containerised and hybrid infrastructure estates.',
      },
      {
        icon: faLock,
        title: 'Zero Trust network access',
        desc: 'Identity led access control replacing implicit trust across distributed network environments.',
      },
      {
        icon: faCertificate,
        title: 'Compliance and assurance reviews',
        desc: 'Gap assessments, audits and supplier evaluations that provide continuous evidence of security maturity.',
      },
    ],
  },

  outcomes: {
    heading: 'What telecoms grade security delivers',
    intro:
      'Security designed around real network operations gives organisations resilience, visibility and compliance assurance they can act on.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Protection of critical infrastructure',
        desc: 'Telecom and network environments hardened against the threats specific to next generation connectivity.',
      },
      {
        icon: faServer,
        title: 'Faster threat detection and response',
        desc: 'SOC led monitoring and correlation that surfaces incidents before they affect service availability.',
      },
      {
        icon: faCloud,
        title: 'Secure cloud adoption',
        desc: 'Cloud and hybrid infrastructure deployed with security and configuration risk managed from day one.',
      },
      {
        icon: faChartLine,
        title: 'Stronger regulatory compliance',
        desc: 'Continuous evidence and assurance support that keeps pace with evolving telecom and data protection standards.',
      },
    ],
  },

  cta: {
    title: 'Security built for telecoms grade networks',
    subtitle:
      'Speak to AWTG about network security, SOC monitoring and cloud & infrastructure protection.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivitySecurityPage() {
  return <IndustrySectorPage data={data} />
}
