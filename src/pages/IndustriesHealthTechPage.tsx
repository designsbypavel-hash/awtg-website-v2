import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import {
  faArrowTrendUp, faShield, faUserGroup, faSitemap,
  faHeartPulse, faHouseChimney, faCode,
  faRotate, faMicrochip, faLock, faMobile, faCloud, faEye,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup,
  faHospital,
} from '@fortawesome/free-solid-svg-icons'

const data: SectorPageData = {
  hero: {
    badge: 'AI · Health Tech',
    accentColor: '#059669',
    heroImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Health Tech',
    description:
      'Digital health solutions that improve care delivery, operational efficiency and patient experiences through connected systems, secure platforms and intelligent healthcare workflows.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faHospital,
    visualItems: [
      { icon: faHeartPulse, label: 'Clinical AI platforms' },
      { icon: faMicrochip, label: 'IoMT device connectivity' },
      { icon: faShield,     label: 'DSPT-compliant infrastructure' },
      { icon: faCloud,      label: 'Cloud healthcare solutions' },
    ],
  },

  challenges: {
    heading: 'Challenges facing health tech today',
    intro:
      'Healthcare organisations are navigating mounting operational, regulatory and technological complexity. These are the core pressures AWTG helps address.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Rising care demand',
        desc: 'Ageing populations and rising chronic conditions are placing unprecedented pressure on NHS trusts and private providers, requiring smarter and more scalable digital solutions.',
      },
      {
        icon: faShield,
        title: 'Complex regulations',
        desc: 'Healthcare organisations must navigate DSPT, GDPR, NHS England standards and CQC requirements without compromising care delivery or operational agility.',
      },
      {
        icon: faUserGroup,
        title: 'Workforce pressure',
        desc: 'Clinical and administrative staff face mounting workloads. Intelligent automation and streamlined digital tools reduce friction and free time for direct patient care.',
      },
      {
        icon: faSitemap,
        title: 'Fragmented systems',
        desc: 'Disconnected EPR systems, legacy infrastructure and siloed data prevent integrated care. Modern interoperable platforms are essential to deliver joined-up outcomes.',
      },
    ],
  },

  supports: {
    heading: 'AWTG health technology solutions',
    intro:
      'Purpose-built platforms and products designed for the demands of clinical environments, developed in collaboration with healthcare professionals.',
    items: [
      {
        icon: faHeartPulse,
        title: 'iHS — Intelligent Health Solution',
        desc: 'A comprehensive electronic health record platform designed to streamline clinical documentation, patient data management and care coordination across NHS environments.',
        bullets: [
          'Clinical documentation and electronic health records management',
          'Patient data management across NHS environments',
          'Care coordination and referral workflow automation',
          'Compliance with NHS England, CQC and DSPT standards',
        ],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faHouseChimney,
        title: 'iCAL — Intelligent Connected Assistive Living',
        desc: 'Smart home technology and IoT integration enabling independent living for elderly and vulnerable individuals with real-time remote monitoring and care alerts.',
        bullets: [
          'IoT integration for remote patient monitoring and care alerts',
          'Smart home technology and environmental sensing',
          'Real-time intervention triggers for clinical teams',
          'GDPR-compliant data flows from home to clinical systems',
        ],
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faCode,
        title: 'Clinical Software Development',
        desc: 'Purpose-built applications for clinical use — GDPR-compliant, interoperable with NHS systems and designed around the real needs of practitioners and patients.',
        bullets: [
          'Purpose-built applications designed for clinical environments',
          'GDPR-compliant and NHS-interoperable architecture',
          'Mobile-first portals for patients and practitioners',
          'Continuous iteration with clinical and operational stakeholders',
        ],
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'What we deliver',
    intro:
      'From strategy to implementation, AWTG delivers end-to-end digital health capabilities that integrate with NHS systems, protect patient data and scale with your organisation.',
    items: [
      {
        icon: faEye,
        title: 'VRBA — Virtual Reality Behavioural Activation',
        desc: 'Immersive VR-based therapy delivery for mental health and behavioural rehabilitation, bringing evidence-based treatment to patients wherever they are.',
      },
      {
        icon: faRotate,
        title: 'Digital health transformation',
        desc: 'Strategy through to delivery — redesigning clinical workflows, digitising paper-based processes and modernising legacy infrastructure across NHS trusts.',
      },
      {
        icon: faMicrochip,
        title: 'Internet of Medical Things',
        desc: 'Secure IoMT integration connecting medical devices, wearables and sensors to clinical platforms for continuous monitoring and real-time data intelligence.',
      },
      {
        icon: faLock,
        title: 'Secure healthcare connectivity',
        desc: 'Encrypted private networks, DSPT-compliant infrastructure and zero-trust security architecture across hospitals, clinics and virtual care environments.',
      },
      {
        icon: faMobile,
        title: 'Patient and practitioner applications',
        desc: 'Mobile-first portals and apps that improve access, communication and self-management for patients — and reduce administrative overhead for clinical teams.',
      },
      {
        icon: faCloud,
        title: 'Cloud-based healthcare platforms',
        desc: 'Scalable, resilient cloud infrastructure for healthcare data, analytics and AI workloads — with full compliance, disaster recovery and 99.99% uptime SLAs.',
      },
    ],
  },

  outcomes: {
    heading: 'Why AWTG for health tech',
    intro:
      'We combine technical depth with genuine healthcare domain expertise, delivering solutions that work in the real world of clinical care.',
    items: [
      {
        icon: faShieldHalved,
        title: 'Secure connectivity expertise',
        desc: 'Deep experience deploying DSPT-compliant networks and zero-trust security frameworks across complex clinical environments.',
      },
      {
        icon: faDiagramProject,
        title: 'Healthcare workflow understanding',
        desc: 'We understand clinical operations from the ground up, ensuring every solution fits the real-world demands of NHS and private healthcare.',
      },
      {
        icon: faUserShield,
        title: 'GDPR-aware implementation',
        desc: 'Privacy-by-design principles embedded across every platform we build, with full data governance, audit trails and patient consent management.',
      },
      {
        icon: faLayerGroup,
        title: 'Scalable software delivery',
        desc: 'Modular architecture built to scale from a single site to an integrated care system without costly redevelopment as your organisation grows.',
      },
    ],
  },

  proof: {
    quote:
      'All AWTG health technology deployments are delivered in full compliance with the NHS Data Security and Protection Toolkit, with 99.99% uptime SLAs and defined incident response procedures aligned to NHS England standards.',
  },

  cta: {
    title: 'Ready to modernise healthcare delivery?',
    subtitle:
      "Speak with our health technology specialists about your organisation's digital transformation goals.",
    label: 'Talk to our experts',
  },
}

export default function IndustriesHealthTechPage() {
  return <IndustrySectorPage data={data} />
}
