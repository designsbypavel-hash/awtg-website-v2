import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faSatellite,
  faShieldHalved,
  faNetworkWired,
  faServer,
  faCloud,
  faLock,
  faGlobe,
  faMicrochip,
  faBolt,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#1d4ed8"
    headerIcon={faSatellite}
    title="Secure Comms"
    subtitle="Space & defence infrastructure"
    items={[
      { icon: faSatellite, label: 'SATCOM integration' },
      { icon: faShieldHalved, label: 'High-assurance security' },
      { icon: faNetworkWired, label: 'Tactical private networking' },
      { icon: faLock, label: 'Classified communications' },
    ]}
    badges={[
      { icon: faShieldHalved, label: 'SC/DV', color: '#059669' },
      { icon: faSatellite, label: 'MOD Approved', color: '#1d4ed8' },
      { icon: faGlobe, label: 'NATO Aligned', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Space & Defence',
    accentColor: '#1d4ed8',
    heroVisual,
    title: 'Connectivity for space and defence',
    subtitle:
      'Mission-critical network infrastructure, SATCOM integration and high-assurance communications for defence and space environments.',
    description:
      'AWTG designs and delivers connectivity for the most demanding operational environments — where failure is not an option, security classifications must be maintained and communications must work at the edge of coverage.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faSatellite,
    visualItems: [
      { icon: faShieldHalved, label: 'High-assurance networks' },
      { icon: faNetworkWired, label: 'Tactical communications' },
      { icon: faSatellite, label: 'SATCOM integration' },
      { icon: faServer, label: 'Edge infrastructure' },
    ],
  },

  challenges: {
    heading: 'The demands of defence and space connectivity',
    intro:
      'Defence and space programmes operate under extreme constraints — remote environments, strict security classifications, hostile conditions and zero tolerance for connectivity failure.',
    items: [
      {
        icon: faGlobe,
        title: 'Extreme and remote environments',
        desc: 'Connectivity must function in remote, harsh and contested environments where commercial infrastructure does not exist and resilience is non-negotiable.',
      },
      {
        icon: faShieldHalved,
        title: 'Security classification requirements',
        desc: 'Networks must support classified communications at the appropriate assurance level, with architecture, certification and operational processes to match.',
      },
      {
        icon: faSatellite,
        title: 'SATCOM reliability and latency',
        desc: 'Satellite communications must deliver reliable performance for voice, data and tactical applications despite the inherent challenges of satellite link management.',
      },
      {
        icon: faCloud,
        title: 'Edge computing and data sovereignty',
        desc: 'Processing and communications at the tactical edge require infrastructure that keeps data sovereign, operates autonomously and integrates with wider enterprise systems.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for defence and space',
    intro:
      'AWTG brings deep expertise in mission-critical networks, SATCOM integration and high-assurance communications design for defence and space programmes.',
    items: [
      {
        icon: faNetworkWired,
        title: 'Mission-critical network design',
        desc: 'Resilient, high-availability network architecture for defence and space environments — designed to maintain communications under adverse conditions and operational stress.',
        bullets: [
          'Redundant architecture with automatic failover',
          'Designed for hostile and contested environments',
          'Interoperability with NATO and allied systems where required',
          'Operational continuity under degraded conditions',
        ],
      },
      {
        icon: faSatellite,
        title: 'SATCOM integration and management',
        desc: 'End-to-end SATCOM integration for defence programmes — from terminal selection and link budget design to network management and performance optimisation.',
        bullets: [
          'Multi-band SATCOM terminal configuration and integration',
          'Link budget analysis and capacity planning',
          'SATCOM network management and monitoring',
          'Integration with terrestrial and tactical radio networks',
        ],
      },
      {
        icon: faShieldHalved,
        title: 'High-assurance communications',
        desc: 'Networks designed and certified to operate at the appropriate security classification level — with the architecture, controls and documentation that assurance demands.',
        bullets: [
          'Architecture designed to security classification requirements',
          'Compliance with relevant security frameworks and standards',
          'Formal risk assessment and accreditation support',
          'Ongoing security monitoring and assurance reporting',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Applications across defence and space',
    intro:
      'From deployed tactical communications to space programme ground infrastructure, AWTG provides connectivity solutions for the most demanding programmes.',
    items: [
      {
        icon: faMicrochip,
        title: 'Edge computing and tactical processing',
        desc: 'Ruggedised edge compute and communications infrastructure for tactical environments — enabling local data processing where connectivity to central systems is intermittent.',
      },
      {
        icon: faSatellite,
        title: 'SATCOM programme support',
        desc: 'End-to-end SATCOM programme support — from system design and terminal procurement through to network management and in-service performance monitoring.',
      },
      {
        icon: faShieldHalved,
        title: 'Classified network programmes',
        desc: 'Design, deployment and management of networks operating at government security classification levels — supported by appropriate accreditation and assurance activities.',
      },
      {
        icon: faCloud,
        title: 'Hybrid cloud for defence',
        desc: 'Secure, compliant connectivity between classified on-premise environments and cloud platforms — maintaining data sovereignty and classification boundaries.',
      },
      {
        icon: faNetworkWired,
        title: 'Deployed and expeditionary networks',
        desc: 'Rapidly deployable network infrastructure for expeditionary operations — providing voice, data and ISR connectivity at the tactical edge.',
      },
    ],
  },

  outcomes: {
    heading: 'What the right infrastructure delivers',
    intro:
      'Mission-critical connectivity infrastructure delivers operational advantage, security assurance and the resilience that defence and space programmes demand.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Operational resilience',
        desc: 'Redundant, high-availability architecture maintains communications under adverse conditions — from equipment failure to contested environments.',
      },
      {
        icon: faLock,
        title: 'Security assurance',
        desc: 'Networks certified and operated to the appropriate classification level, with ongoing assurance activities supporting programme compliance.',
      },
      {
        icon: faBolt,
        title: 'Rapid deployment capability',
        desc: 'Pre-configured, ruggedised infrastructure that can be deployed quickly in austere environments — from expeditionary operations to satellite ground stations.',
      },
      {
        icon: faServer,
        title: 'Edge to enterprise integration',
        desc: 'Seamless integration between tactical edge systems and enterprise infrastructure — providing situational awareness from the edge to the command level.',
      },
    ],
  },

  cta: {
    title: 'Communications infrastructure for critical programmes',
    subtitle:
      'Speak to AWTG about mission-critical network design, SATCOM integration and high-assurance communications for defence and space.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivitySpaceDefencePage() {
  return <IndustrySectorPage data={data} />
}
