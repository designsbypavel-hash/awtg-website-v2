import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faStore,
  faNetworkWired,
  faShieldHalved,
  faWifi,
  faChartLine,
  faUsers,
  faMicrochip,
  faCloud,
  faArrowTrendUp,
  faLock,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#d97706"
    headerIcon={faStore}
    title="Retail Network"
    subtitle="Commerce connectivity platform"
    items={[
      { icon: faNetworkWired, label: 'Multi-site SD-WAN' },
      { icon: faShieldHalved, label: 'PCI DSS compliance' },
      { icon: faWifi, label: 'Customer Wi-Fi' },
      { icon: faCloud, label: 'Cloud integration' },
    ]}
    badges={[
      { icon: faShieldHalved, label: 'PCI DSS', color: '#059669' },
      { icon: faWifi, label: 'SD-WAN', color: '#0891b2' },
      { icon: faStore, label: 'Retail Ready', color: '#d97706' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Commerce',
    accentColor: '#d97706',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Connectivity for commerce and retail',
    subtitle:
      'Multi-site SD-WAN, PCI DSS-compliant networks and customer Wi-Fi infrastructure for retail and commercial operations.',
    description:
      'AWTG designs and manages network infrastructure for retail, hospitality and commercial organisations — providing consistent, secure connectivity across all sites and the compliance controls that commerce demands.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faStore,
    visualItems: [
      { icon: faNetworkWired, label: 'Multi-site SD-WAN' },
      { icon: faShieldHalved, label: 'PCI DSS compliance' },
      { icon: faWifi, label: 'Customer Wi-Fi' },
      { icon: faMicrochip, label: 'Retail IoT connectivity' },
    ],
  },

  challenges: {
    heading: 'Network challenges in commerce and retail',
    intro:
      'Retail and commercial operations need consistent, secure connectivity across every site — meeting compliance requirements while supporting the customer and operational demands of modern commerce.',
    items: [
      {
        icon: faNetworkWired,
        title: 'Multi-site consistency',
        desc: 'Maintaining consistent network quality, security policies and management across tens or hundreds of retail sites is operationally complex and costly without the right architecture.',
      },
      {
        icon: faShieldHalved,
        title: 'PCI DSS compliance',
        desc: 'Retail networks handling card payment data must meet PCI DSS requirements — with appropriate segmentation, encryption and annual compliance assessment evidence.',
      },
      {
        icon: faWifi,
        title: 'Customer Wi-Fi expectations',
        desc: 'Customers expect reliable, fast Wi-Fi in stores, restaurants and hospitality venues. Poorly performing customer wireless damages experience and dwell time.',
      },
      {
        icon: faMicrochip,
        title: 'IoT device proliferation',
        desc: 'Digital signage, EPOS systems, queue management, environmental sensors and CCTV all demand reliable, segmented network connectivity across the estate.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for commerce',
    intro:
      'AWTG provides network infrastructure services for retail and commercial organisations — combining multi-site SD-WAN, PCI compliance expertise and customer-facing wireless in a single managed programme.',
    items: [
      {
        icon: faNetworkWired,
        title: 'Multi-site SD-WAN and WAN',
        desc: 'Consistent, manageable connectivity across retail estates — SD-WAN architecture that delivers performance, centralised management and cost efficiency at scale.',
        bullets: [
          'Centralised policy management across all retail sites',
          'Application-aware routing for EPOS and operational systems',
          'Failover and resilience for always-on retail operations',
          'Cost-efficient bandwidth utilisation across the estate',
        ],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faShieldHalved,
        title: 'PCI DSS-compliant network design',
        desc: 'Network architecture designed to meet PCI DSS requirements — with appropriate segmentation of cardholder data environments and the documentation that compliance demands.',
        bullets: [
          'Cardholder data environment segmentation and isolation',
          'Firewall and access control policy aligned to PCI DSS',
          'Compliance documentation and evidence gathering support',
          'Ongoing managed compliance monitoring and alerting',
        ],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faWifi,
        title: 'Customer Wi-Fi and retail IoT',
        desc: 'High-quality customer-facing wireless infrastructure and segmented IoT connectivity across retail sites — improving customer experience and supporting operational IoT devices.',
        bullets: [
          'Customer Wi-Fi with captive portal and analytics capability',
          'Separate network segments for customer, staff and IoT traffic',
          'IoT device onboarding and lifecycle management',
          'Footfall and dwell time analytics from Wi-Fi infrastructure',
        ],
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'Solutions across the retail estate',
    intro:
      'From flagship stores to distribution centres, AWTG delivers connectivity that supports every aspect of retail and commercial operations.',
    items: [
      {
        icon: faNetworkWired,
        title: 'SD-WAN across the retail estate',
        desc: 'Software-defined WAN providing consistent, centrally managed connectivity across multiple retail sites — with application performance visibility and cost efficiency.',
      },
      {
        icon: faShieldHalved,
        title: 'PCI DSS network programmes',
        desc: 'End-to-end network design and compliance support for retail organisations — from gap assessment through to remediation, documentation and ongoing managed compliance.',
      },
      {
        icon: faWifi,
        title: 'Customer and venue Wi-Fi',
        desc: 'Managed customer Wi-Fi infrastructure for stores, hospitality venues and commercial spaces — with analytics and captive portal capability to maximise value.',
      },
      {
        icon: faMicrochip,
        title: 'Retail IoT connectivity',
        desc: 'Segmented, managed connectivity for retail IoT estate — EPOS, digital signage, queue management, environmental monitoring and security systems.',
      },
      {
        icon: faCloud,
        title: 'Cloud and e-commerce connectivity',
        desc: 'Reliable connectivity to cloud-hosted retail platforms, e-commerce systems and central management infrastructure that the omnichannel retail operation depends on.',
      },
    ],
  },

  outcomes: {
    heading: 'What better retail connectivity delivers',
    intro:
      'Well-designed commercial network infrastructure improves compliance posture, customer experience, operational efficiency and management visibility across the estate.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Consistent site performance',
        desc: 'Every retail site operates with the same network quality and security standards — reducing the variability that creates operational and compliance risk.',
      },
      {
        icon: faUsers,
        title: 'Better customer experience',
        desc: 'Reliable customer Wi-Fi and fast-performing EPOS and service systems improve the in-store experience and reduce customer-facing friction.',
      },
      {
        icon: faChartLine,
        title: 'Estate-wide visibility',
        desc: 'Centralised monitoring and management provides IT teams with full visibility across the retail network estate from a single pane of glass.',
      },
      {
        icon: faLock,
        title: 'Reduced PCI compliance risk',
        desc: 'PCI DSS-aligned network design and ongoing compliance management reduces the risk exposure and audit burden for retail finance and IT teams.',
      },
    ],
  },

  cta: {
    title: 'Network infrastructure for modern retail',
    subtitle:
      'Speak to AWTG about SD-WAN, PCI DSS-compliant networks and customer Wi-Fi for retail and commercial operations.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityCommercePage() {
  return <IndustrySectorPage data={data} />
}
