import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faHospital,
  faWifi,
  faShield,
  faMicrochip,
  faCloud,
  faNetworkWired,
  faChartLine,
  faUsers,
  faLock,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#059669"
    headerIcon={faHospital}
    title="NHS Connectivity"
    subtitle="Clinical network infrastructure"
    items={[
      { icon: faShield, label: 'DSPT-compliant networks' },
      { icon: faWifi, label: 'Clinical wireless coverage' },
      { icon: faMicrochip, label: 'IoMT device connectivity' },
      { icon: faCloud, label: 'NHS cloud integration' },
    ]}
    badges={[
      { icon: faShield, label: 'DSPT', color: '#059669' },
      { icon: faHospital, label: 'NHS Aligned', color: '#0891b2' },
      { icon: faLock, label: 'Encrypted', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'Connectivity · Healthcare',
    accentColor: '#059669',
    heroVisual,
    title: 'Connectivity for healthcare',
    subtitle:
      'Secure, DSPT-compliant network infrastructure designed for the clinical environment — from acute ward to community care.',
    description:
      'AWTG designs, deploys and manages network infrastructure for NHS trusts and healthcare organisations. Every solution is built around DSPT compliance, clinical continuity and the practical demands of a 24/7 care environment.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faHospital,
    visualItems: [
      { icon: faShield, label: 'DSPT-compliant networks' },
      { icon: faWifi, label: 'Private clinical wireless' },
      { icon: faMicrochip, label: 'IoMT device connectivity' },
      { icon: faCloud, label: 'Healthcare cloud networking' },
    ],
  },

  challenges: {
    heading: 'The network challenges in healthcare',
    intro:
      'Healthcare networks must meet strict compliance requirements, support a growing estate of connected devices and maintain clinical continuity without interruption.',
    items: [
      {
        icon: faShield,
        title: 'DSPT compliance pressure',
        desc: 'NHS organisations must meet the Data Security and Protection Toolkit requirements. Network infrastructure is a key element of the compliance evidence trail.',
      },
      {
        icon: faMicrochip,
        title: 'IoMT device proliferation',
        desc: 'The estate of connected medical devices — monitors, infusion pumps, imaging systems — is growing rapidly, placing new demands on wireless and wired infrastructure.',
      },
      {
        icon: faWifi,
        title: 'Clinical Wi-Fi reliability',
        desc: 'Poor wireless coverage in wards, theatres and clinical spaces directly impacts staff mobility, EPR access and patient care delivery at the point of need.',
      },
      {
        icon: faCloud,
        title: 'Cloud and hybrid migration',
        desc: 'Modernising to cloud-hosted clinical systems requires network infrastructure capable of providing the bandwidth, latency and resilience that patient safety demands.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for healthcare',
    intro:
      'AWTG provides end-to-end network infrastructure services for healthcare — from compliance-led design through to managed ongoing operations.',
    items: [
      {
        icon: faShield,
        title: 'DSPT-compliant network design',
        desc: 'Network architecture designed from the ground up around DSPT requirements — covering access control, segmentation, encryption and audit logging for clinical data.',
        bullets: [
          'Network segmentation aligned to clinical data classification',
          'Audit logging and access control for compliance evidence',
          'Encryption across all clinical data pathways',
          'Architecture documentation for DSPT submission support',
        ],
      },
      {
        icon: faWifi,
        title: 'Clinical wireless infrastructure',
        desc: 'High-density Wi-Fi designed for complex clinical environments — providing reliable coverage in wards, theatres, waiting areas and clinical support spaces.',
        bullets: [
          'RF survey and design for clinical building types',
          'High-density access point deployment for IoMT and staff devices',
          'Roaming and handoff optimised for mobile clinical workflows',
          'Separate SSID management for clinical, staff and guest traffic',
        ],
      },
      {
        icon: faMicrochip,
        title: 'IoMT and device connectivity',
        desc: 'Robust, segmented connectivity for the growing estate of connected medical devices — from bedside monitors to imaging systems and infusion management.',
        bullets: [
          'Dedicated network segments for clinical device categories',
          'Device onboarding and lifecycle management support',
          'Traffic prioritisation for patient-critical device communications',
          'Integration with clinical IT and EPR infrastructure',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Network solutions across the care estate',
    intro:
      'From acute hospital to community clinic, AWTG delivers network infrastructure across the full breadth of the NHS estate.',
    items: [
      {
        icon: faWifi,
        title: 'Clinical wireless rollout',
        desc: 'Full wireless infrastructure programmes for NHS trusts — survey, design, deployment and commissioning of Wi-Fi across ward, theatre and clinical support environments.',
      },
      {
        icon: faMicrochip,
        title: 'IoMT connectivity programmes',
        desc: 'Segmented, managed connectivity for connected medical device estates — from initial design through to ongoing device lifecycle management.',
      },
      {
        icon: faNetworkWired,
        title: 'Electronic patient records connectivity',
        desc: 'Network infrastructure designed to support EPR system performance requirements — low latency, high availability and seamless access from all clinical points.',
      },
      {
        icon: faShield,
        title: 'DSPT compliance support',
        desc: 'Network audit, gap analysis and remediation against DSPT requirements — providing the technical evidence base for annual submission and ongoing assurance.',
      },
      {
        icon: faCloud,
        title: 'Cloud connectivity for healthcare',
        desc: 'Scalable, compliant connectivity to cloud-hosted clinical systems — designed for the bandwidth, resilience and security requirements of healthcare data.',
      },
    ],
  },

  outcomes: {
    heading: 'Better infrastructure, better care',
    intro:
      'The right network infrastructure in healthcare means safer care, better compliance, more mobile staff and lower total cost of ownership.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Improved clinical mobility',
        desc: 'Staff access EPRs, clinical apps and communications systems reliably from anywhere on the estate — supporting point-of-care delivery.',
      },
      {
        icon: faUsers,
        title: 'Stronger clinical collaboration',
        desc: 'Reliable connectivity across all care settings supports multi-disciplinary team working, telemedicine and cross-site clinical coordination.',
      },
      {
        icon: faChartLine,
        title: 'Network visibility and control',
        desc: 'Managed services with proactive monitoring provide operational insight across the estate before network issues affect clinical operations.',
      },
      {
        icon: faLock,
        title: 'Reduced compliance risk',
        desc: 'DSPT-aligned infrastructure reduces the technical risk exposure in annual submission and provides a stronger baseline for cyber resilience assessment.',
      },
    ],
  },

  cta: {
    title: 'Secure connectivity for better patient care',
    subtitle:
      'Speak to AWTG about DSPT-compliant network design, clinical wireless infrastructure and IoMT connectivity for NHS organisations.',
    label: 'Talk to our experts',
  },
}

export default function ConnectivityHealthPage() {
  return <IndustrySectorPage data={data} />
}
