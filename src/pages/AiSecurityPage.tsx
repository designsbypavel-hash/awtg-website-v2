import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faShieldHalved,
  faGavel,
  faMicrochip,
  faRobot,
  faKey,
  faBug,
  faCertificate,
  faArrowTrendUp,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#dc2626"
    headerIcon={faShieldHalved}
    title="AI Security & Governance"
    subtitle="Trusted AI deployment"
    items={[
      { icon: faGavel, label: 'AI governance frameworks' },
      { icon: faMicrochip, label: 'Model security assessments' },
      { icon: faRobot, label: 'Responsible AI deployment' },
      { icon: faKey, label: 'Post quantum readiness' },
    ]}
    badges={[
      { icon: faShieldHalved, label: 'GDPR', color: '#059669' },
      { icon: faCertificate, label: 'ISO 27001', color: '#0891b2' },
      { icon: faKey, label: 'PQC Ready', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'AI Platform · Security & Governance',
    accentColor: '#dc2626',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Secure, trustworthy AI you can deploy with confidence',
    subtitle:
      'Governance, risk management and security built into every AI deployment — so innovation never comes at the cost of trust.',
    description:
      'AWTG helps organisations adopt AI securely and responsibly — combining AI governance frameworks, model security assessments and forward looking cryptography so that innovation keeps pace with emerging regulation and emerging threats.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faShieldHalved,
    visualItems: [
      { icon: faGavel, label: 'AI governance frameworks' },
      { icon: faMicrochip, label: 'Model security assessments' },
      { icon: faRobot, label: 'Responsible AI deployment' },
      { icon: faKey, label: 'Quantum safe security strategies' },
    ],
  },

  challenges: {
    heading: 'The risks of moving fast on AI',
    intro:
      'AI adoption is outpacing the governance, security and cryptographic foundations many organisations have in place — creating exposure that grows with every new deployment.',
    items: [
      {
        icon: faRobot,
        title: 'Ungoverned AI adoption',
        desc: 'Teams adopt AI tools faster than governance frameworks can keep pace, creating blind spots in risk ownership, data handling and model accountability.',
      },
      {
        icon: faBug,
        title: 'Model and data security risks',
        desc: "AI systems introduce new attack surfaces — from training data exposure to model manipulation — that traditional security tooling wasn't built to address.",
      },
      {
        icon: faGavel,
        title: 'Regulatory uncertainty',
        desc: "AI specific regulation is evolving quickly across jurisdictions, leaving organisations exposed if governance and documentation can't demonstrate compliance.",
      },
      {
        icon: faKey,
        title: 'Cryptography running out of road',
        desc: 'Advances in quantum computing put long lived encryption and sensitive data at risk, demanding migration plans many organisations have not yet started.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for secure AI adoption',
    intro:
      'AWTG combines AI governance, security engineering and forward looking cryptography to help organisations innovate without losing control of risk.',
    items: [
      {
        icon: faGavel,
        title: 'AI governance and risk management',
        desc: 'We help organisations stand up the frameworks, policies and accountability structures needed to govern AI use safely, from pilot through to production.',
        bullets: [
          'AI governance frameworks and policy design',
          'AI risk management and impact assessments',
          'Responsible AI deployment practices',
          'AI security architecture reviews',
        ],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faMicrochip,
        title: 'Secure AI system design and model security',
        desc: 'From architecture to deployment, we assess and harden AI systems against the security and privacy risks specific to machine learning.',
        bullets: [
          'Secure AI system design reviews',
          'Model security assessments',
          'Data protection and privacy controls',
          'Ongoing security architecture reviews as systems evolve',
        ],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faKey,
        title: 'Quantum safe and future ready security',
        desc: 'We help organisations get ahead of the cryptographic transition — assessing exposure today and planning the migration to quantum safe standards.',
        bullets: [
          'Post Quantum Cryptography (PQC) readiness assessments',
          'Cryptographic inventory and migration planning',
          'Quantum safe security strategies',
          'Emerging technology and future network security reviews',
        ],
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'Security across the AI lifecycle',
    intro:
      'From governance to cryptography, AWTG supports the security decisions organisations face at every stage of AI adoption.',
    items: [
      {
        icon: faGavel,
        title: 'AI governance frameworks',
        desc: 'Policies, accountability structures and oversight that let teams adopt AI with confidence rather than caution alone.',
      },
      {
        icon: faMicrochip,
        title: 'Model security assessments',
        desc: 'Identifying weaknesses in deployed AI and machine learning systems before they can be exploited.',
      },
      {
        icon: faRobot,
        title: 'Responsible AI deployment',
        desc: 'Embedding safeguards, human oversight and transparency into how AI is rolled out across the organisation.',
      },
      {
        icon: faKey,
        title: 'Post quantum readiness',
        desc: 'Cryptographic inventory, PQC readiness assessments and migration planning ahead of the quantum transition.',
      },
      {
        icon: faShieldHalved,
        title: 'Emerging technology risk reviews',
        desc: 'Evaluating new AI and connected technologies for security and compliance risk before they scale across the business.',
      },
    ],
  },

  outcomes: {
    heading: 'Confidence to scale AI responsibly',
    intro:
      'Security led AI adoption with AWTG gives organisations the assurance to innovate while staying ahead of risk and regulation.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Trusted AI adoption',
        desc: 'Governance and security built in from the start, giving stakeholders confidence in how AI is deployed and managed.',
      },
      {
        icon: faShieldHalved,
        title: 'Reduced technology risk',
        desc: 'Model, data and infrastructure risks identified and addressed before they translate into security or compliance incidents.',
      },
      {
        icon: faKey,
        title: 'Future ready security posture',
        desc: 'Cryptographic and architectural foundations that hold up as quantum computing and emerging technologies mature.',
      },
      {
        icon: faLightbulb,
        title: 'Alignment with emerging regulation',
        desc: 'Governance and documentation that keeps pace with fast evolving AI and data protection standards.',
      },
    ],
  },

  cta: {
    title: 'Adopt AI without adopting the risk',
    subtitle:
      'Speak to AWTG about AI governance, model security and quantum readiness for your AI deployments.',
    label: 'Talk to our experts',
  },
}

export default function AiSecurityPage() {
  return <IndustrySectorPage data={data} />
}
