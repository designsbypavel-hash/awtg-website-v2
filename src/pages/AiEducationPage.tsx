import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import {
  faGraduationCap,
  faComments,
  faLanguage,
  faMagnifyingGlass,
  faChartLine,
  faUsers,
  faClock,
  faTriangleExclamation,
  faHeadset,
  faArrowTrendUp,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'

const data: SectorPageData = {
  hero: {
    badge: 'AI Platform · Education',
    title: 'AI for education and student success',
    subtitle:
      'Handle student enquiries at scale, support multilingual learners and surface retention insights with AI built for education.',
    description:
      'From first enquiry through to alumni engagement, AWTG builds conversational AI that integrates with existing systems, works within institutional governance and delivers measurable improvements from deployment.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faGraduationCap,
    visualItems: [
      { icon: faComments, label: 'Student enquiry automation' },
      { icon: faLanguage, label: 'Multilingual AI support' },
      { icon: faMagnifyingGlass, label: 'Admissions & enrolment AI' },
      { icon: faChartLine, label: 'Retention analytics' },
    ],
  },

  challenges: {
    heading: 'The pressures facing education today',
    intro:
      'Institutions face growing student expectations, multilingual populations and administrative demand that manual operations cannot sustainably absorb.',
    items: [
      {
        icon: faUsers,
        title: 'High enquiry volumes',
        desc: 'Students expect instant answers on courses, fees, timetables and support. Manual handling at scale drives delays, inconsistency and staff fatigue.',
      },
      {
        icon: faLanguage,
        title: 'Multilingual complexity',
        desc: 'Serving international students across many languages requires consistent, accurate guidance that traditional operations cannot sustainably provide.',
      },
      {
        icon: faClock,
        title: 'Administrative overload',
        desc: 'Repetitive routine queries consume staff capacity that should be directed at teaching, pastoral care and complex individual student needs.',
      },
      {
        icon: faTriangleExclamation,
        title: 'Student retention pressure',
        desc: 'Students who cannot access timely, relevant support disengage early. Identifying at-risk students requires insights most institutions currently lack.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for education',
    intro:
      'AWTG builds AI that works within your existing institution — integrating with your systems, governed by your policies and measured against outcomes that matter to you.',
    items: [
      {
        icon: faComments,
        title: 'Student enquiry and support automation',
        desc: 'AI that handles the high proportion of student queries drawing on standard institutional guidance, freeing staff for complex, pastoral and high-value interactions.',
        bullets: [
          'Common query handling at scale, 24/7',
          'Responses grounded in approved institutional content',
          'Clear escalation pathways to human advisors',
          'Deployable across web, app and messaging channels',
        ],
      },
      {
        icon: faLanguage,
        title: 'Multilingual student engagement',
        desc: 'Serve international and diverse learner populations with AI that responds consistently across languages, using the same institutional guidance regardless of language chosen.',
        bullets: [
          'Multiple language support available from day one',
          'Consistent accuracy and content parity across languages',
          'Configurable to cross-campus and multi-programme deployments',
          'No proportional cost increase as language volume grows',
        ],
      },
      {
        icon: faChartLine,
        title: 'Insight and institutional intelligence',
        desc: 'Turn student interactions into actionable intelligence — revealing demand patterns, content gaps, confusion points and early indicators of disengagement or support need.',
        bullets: [
          'Interaction demand and trend analysis',
          'Content gap and knowledge base improvement signals',
          'Retention risk indicator surfacing',
          'Reporting for service improvement and governance',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Where AI makes a difference',
    intro:
      'From prospective student enquiries through to ongoing learner support, AWTG deploys AI across the full student lifecycle.',
    items: [
      {
        icon: faComments,
        title: 'AI student support assistant',
        desc: 'Conversational AI for common student questions on courses, fees, timetables and welfare, using approved institutional content with escalation built in.',
      },
      {
        icon: faMagnifyingGlass,
        title: 'Admissions and enrolment AI',
        desc: 'Support prospective students through the enquiry and application journey with consistent guidance on requirements, deadlines and next steps.',
      },
      {
        icon: faLanguage,
        title: 'Multilingual education AI',
        desc: 'Consistent AI-powered student communications in multiple languages, serving international and diverse learner populations more effectively.',
      },
      {
        icon: faChartLine,
        title: 'Student insight and analytics',
        desc: 'Turn interaction data into institutional intelligence — surfacing common concerns, service gaps and early retention risk signals for action.',
      },
      {
        icon: faHeadset,
        title: 'Human handover and pastoral escalation',
        desc: 'Context-rich escalation to student services, welfare teams and academic advisors when students need human support beyond what AI can provide.',
      },
    ],
  },

  outcomes: {
    heading: 'What good looks like',
    intro:
      'AI-powered student support delivers measurable improvements in containment, multilingual coverage, staff efficiency and institutional intelligence.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Higher containment rates',
        desc: 'Measurable reduction in avoidable contacts reaching human teams, visible from the first weeks of deployment.',
      },
      {
        icon: faLanguage,
        title: 'Multilingual coverage at scale',
        desc: 'International students receive the same quality of information as home students, without proportional cost increases.',
      },
      {
        icon: faUsers,
        title: 'Staff time redirected',
        desc: 'Teams focus on complex, high-value and pastoral student needs rather than repetitive routine queries.',
      },
      {
        icon: faLightbulb,
        title: 'Better institutional decisions',
        desc: 'Insight from AI interactions informs service design, content improvement and proactive student engagement strategies.',
      },
    ],
  },

  proof: {
    quote:
      'AWTG delivered AI at enterprise scale for the British Council, demonstrating measurable containment improvements and CSAT gains from the first weeks of operation across a globally distributed deployment.',
    author: 'AWTG',
    context: 'British Council deployment',
  },

  cta: {
    title: 'Ready to transform student support?',
    subtitle:
      'Speak to AWTG about AI for student enquiry management, multilingual engagement and education service delivery.',
    label: 'Talk to our experts',
  },
}

export default function AiEducationPage() {
  return <IndustrySectorPage data={data} />
}
