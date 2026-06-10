import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faGraduationCap,
  faBrain,
  faBookOpen,
  faChartLine,
  faShieldHalved,
  faUsers,
  faLightbulb,
  faArrowTrendUp,
  faClipboardList,
  faComments,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#228DC1"
    headerIcon={faGraduationCap}
    title="Aruva Platform"
    subtitle="Higher education AI"
    items={[
      { icon: faBrain, label: 'Adaptive AI tutoring' },
      { icon: faBookOpen, label: 'Formative assessment engine' },
      { icon: faChartLine, label: 'Student progress analytics' },
      { icon: faComments, label: 'Personalised feedback' },
    ]}
    badges={[
      { icon: faShieldHalved, label: 'UK GDPR', color: '#059669' },
      { icon: faGraduationCap, label: 'HE Ready', color: '#228DC1' },
      { icon: faBookOpen, label: 'Evidence Based', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'AI Platform · Education',
    accentColor: '#228DC1',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=840&q=80&auto=format&fit=crop',
    title: 'AI-powered teaching and formative assessment for higher education',
    subtitle:
      'Aruva helps universities personalise learning, generate meaningful feedback and understand student progress in real time.',
    description:
      'Guided by educator intent, evidence-based pedagogy and institution-controlled AI, Aruva connects course design, adaptive tutoring, formative assessment, performance profiling and institutional analytics into one continuous learning loop.',
    ctaLabel: 'Request a demo',
    visualIcon: faGraduationCap,
    visualItems: [
      { icon: faBookOpen, label: 'Smart Syllabus' },
      { icon: faComments, label: 'Adaptive AI tutoring' },
      { icon: faClipboardList, label: 'Formative assessment' },
      { icon: faChartLine, label: 'Real-time learning analytics' },
    ],
  },

  challenges: {
    heading: 'The pressures facing higher education today',
    intro:
      'Universities are under pressure to adopt AI, improve student engagement, strengthen formative assessment and protect academic integrity — without losing control of pedagogy, data or institutional governance.',
    items: [
      {
        icon: faBrain,
        title: 'Generic AI does not improve learning',
        desc: 'Generic AI can help students move faster, but speed alone does not improve learning. Universities need tools grounded in course structure, approved content and educator intent — not blank chatbot prompts.',
      },
      {
        icon: faClipboardList,
        title: 'Educators lack timely insight',
        desc: 'Faculty need earlier visibility into where students are struggling. Traditional analytics dashboards show information after the fact, disconnected from day-to-day learning and formative feedback.',
      },
      {
        icon: faComments,
        title: 'Feedback arrives too late to act on',
        desc: 'End-of-term grades and surveys tell educators what happened, not what is happening. Identifying learning gaps and adjusting teaching in time to improve outcomes requires continuous, real-time signals.',
      },
      {
        icon: faShieldHalved,
        title: 'AI governance and academic integrity',
        desc: 'Institutions need AI that aligns with teaching quality, data governance and academic integrity — with auditability, source traceability and institution-level policy control built in from the start.',
      },
    ],
  },

  supports: {
    heading: 'What Aruva delivers for universities',
    intro:
      'Aruva connects the full academic lifecycle — course design, adaptive support, formative assessment, performance profiling and institutional analytics — into one governed platform designed for higher education.',
    items: [
      {
        icon: faBookOpen,
        title: 'Smart Syllabus and professor-guided tutoring',
        desc: 'Course outcomes, approved resources, policies and assessments become the intelligence layer that guides AI tutoring, assessment and analytics. Educators define tone, depth, rules and learning flow so AI support follows academic intent.',
        bullets: [
          'Turns syllabus structure into an intelligent learning framework',
          'Professor-defined rules govern AI behaviour and content',
          'Approved materials used as the source for every student interaction',
          'Consistent alignment between course design and AI support',
        ],
      },
      {
        icon: faClipboardList,
        title: 'Formative assessment and Learning Curve AI',
        desc: 'Aruva supports quizzes, rubrics, assessment variants and early learning-gap detection before final outcomes are fixed. Learning Curve AI builds student performance profiles across mastery, confidence, pace, workload and risk signals.',
        bullets: [
          'Formative feedback during the term, not only after it',
          'Mastery tracking and confidence signals per student',
          'Assessment variants to support academic integrity',
          'Early intervention signals for at-risk learners',
        ],
      },
      {
        icon: faChartLine,
        title: 'Institutional analytics and governance',
        desc: 'Real-time analytics give educators, departments and quality teams visibility into engagement, topic difficulty, material effectiveness and assessment alignment. The platform supports data residency strategy, audit trails, role-based access and institution-controlled deployment.',
        bullets: [
          'Educator and department-level learning dashboards',
          'Cross-course and cross-cohort quality intelligence',
          'Role-based access, audit trails and attribution',
          'Cloud, hybrid or on-premises deployment supported',
        ],
      },
    ],
  },

  useCases: {
    heading: 'Platform capabilities',
    intro:
      'Aruva brings the core elements of teaching and learning into one governed platform — from course design and adaptive tutoring through to formative assessment, performance profiling and institutional analytics.',
    items: [
      {
        icon: faBookOpen,
        title: 'Smart Syllabus',
        desc: 'Turns course outcomes, resources, policies, assessments and pedagogy into the intelligence layer that guides tutoring, assessment and analytics across the institution.',
      },
      {
        icon: faComments,
        title: 'Professor-guided AI tutoring',
        desc: 'Allows educators to define tone, depth, approved content and learning flow, so AI support follows academic intent and keeps students engaged with verified source material.',
      },
      {
        icon: faClipboardList,
        title: 'Formative assessment intelligence',
        desc: 'Supports quizzes, rubrics, feedback checks and early learning-gap detection — giving educators insight into student understanding before final outcomes are fixed.',
      },
      {
        icon: faBrain,
        title: 'Learning Curve AI',
        desc: 'Builds student performance profiles across mastery, confidence, pace, workload and risk signals to personalise support and surface early intervention opportunities.',
      },
      {
        icon: faChartLine,
        title: 'Institutional analytics',
        desc: 'Aggregates learning signals across courses, cohorts and departments to support quality enhancement, retention monitoring and accreditation evidence.',
      },
      {
        icon: faShieldHalved,
        title: 'Governance and data control',
        desc: 'Supports role-based access, audit trails, data residency strategy, attribution, policy controls and institution-controlled deployment across the academic lifecycle.',
      },
    ],
  },

  outcomes: {
    heading: 'What Aruva delivers',
    intro:
      'Aruva is designed to create measurable improvement across the whole academic lifecycle — better student support, more effective educators, stronger formative assessment and institution-level learning intelligence.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Better student outcomes',
        desc: 'Personalised support, source-backed explanations, mastery tracking and earlier intervention help students build understanding and stay on track throughout the term.',
      },
      {
        icon: faUsers,
        title: 'More effective educators',
        desc: 'Assessment support, feedback intelligence, material effectiveness insight and reduced routine workload give faculty more time for research, mentoring and deeper teaching.',
      },
      {
        icon: faLightbulb,
        title: 'Formative insight during the term',
        desc: 'Continuous signals from tutoring, quizzes, planner activity and student reflection let educators identify gaps and adjust teaching while it still matters.',
      },
      {
        icon: faShieldHalved,
        title: 'Responsible, governed AI adoption',
        desc: 'Institutions gain a practical route from AI experimentation to accountable deployment — with auditability, traceability and governance built into the platform from day one.',
      },
    ],
  },

  cta: {
    title: 'See Aruva in action with a real course structure',
    subtitle:
      'Request a demo to see how Aruva turns syllabus design, adaptive tutoring, formative assessment and learning analytics into one continuous feedback loop for higher education.',
    label: 'Request a demo',
  },
}

export default function AiEducationPage() {
  return <IndustrySectorPage data={data} />
}
