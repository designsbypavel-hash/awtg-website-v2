import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faGears,
  faBrain,
  faDatabase,
  faCloud,
  faChartLine,
  faUsers,
  faSitemap,
  faLightbulb,
  faArrowTrendUp,
  faComments,
  faShield,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#7c3aed"
    headerIcon={faGears}
    title="AI Transformation"
    subtitle="Enterprise automation platform"
    items={[
      { icon: faBrain, label: 'Intelligent process automation' },
      { icon: faDatabase, label: 'Knowledge extraction & RAG' },
      { icon: faCloud, label: 'Cloud-native AI integration' },
      { icon: faChartLine, label: 'Performance analytics' },
    ]}
    badges={[
      { icon: faShield, label: 'ISO 27001', color: '#059669' },
      { icon: faCloud, label: 'Cloud Ready', color: '#0891b2' },
      { icon: faSitemap, label: 'Enterprise Scale', color: '#7c3aed' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'AI Platform · Digital Transformation',
    accentColor: '#7c3aed',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'AI for digital transformation',
    subtitle:
      'Automate processes, unlock trapped knowledge and give your organisation the intelligence it needs to move faster.',
    description:
      'AWTG works with organisations at every stage of digital transformation — deploying AI that integrates with existing systems, reduces manual workload and creates the feedback loops that inform better decisions.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faGears,
    visualItems: [
      { icon: faBrain, label: 'Process automation AI' },
      { icon: faDatabase, label: 'Knowledge management' },
      { icon: faCloud, label: 'Cloud-native deployment' },
      { icon: faChartLine, label: 'Organisational analytics' },
    ],
  },

  challenges: {
    heading: 'Where transformation stalls',
    intro:
      'Most organisations have the intent but face structural barriers — siloed knowledge, inconsistent processes, change burden and measurement gaps that slow progress.',
    items: [
      {
        icon: faDatabase,
        title: 'Knowledge trapped in silos',
        desc: 'Critical institutional knowledge sits in documents, inboxes and individual expertise rather than being accessible, searchable and useful at scale.',
      },
      {
        icon: faSitemap,
        title: 'Process inconsistency',
        desc: 'Workflows that depend on manual interpretation, individual judgement or disconnected systems create variation, errors and unpredictable outcomes.',
      },
      {
        icon: faUsers,
        title: 'Change management burden',
        desc: 'New tools fail without adoption. Organisations struggle to bring people along on transformation journeys, creating shadow processes and wasted investment.',
      },
      {
        icon: faChartLine,
        title: 'Measurement and visibility gaps',
        desc: 'Without clear insight into what is working, where bottlenecks form and how processes perform, continuous improvement is slow and often reactive.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for transformation',
    intro:
      'AWTG helps organisations build AI capability that sticks — grounded in your existing systems, aligned to your processes and measured for real outcomes.',
    items: [
      {
        icon: faGears,
        title: 'Intelligent process automation',
        desc: 'AI that handles the structured, repetitive work that consumes your teams — routing, classification, data extraction, workflow triggering — at scale and with consistency.',
        bullets: [
          'Document and data processing automation',
          'Workflow routing and case classification',
          'Exception handling with escalation pathways',
          'Integration with existing systems and platforms',
        ],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faDatabase,
        title: 'Knowledge management and access',
        desc: 'Make institutional knowledge accessible across the organisation — structured, searchable and delivered to the people who need it at the moment they need it.',
        bullets: [
          'Knowledge base creation from existing documentation',
          'Conversational search and Q&A interfaces',
          'Version control and content governance',
          'Usage analytics to identify gaps and improve content',
        ],
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faChartLine,
        title: 'Organisational intelligence',
        desc: 'Turn operational data into continuous improvement signals — surfacing process bottlenecks, team performance patterns and decision-making blind spots.',
        bullets: [
          'Process performance dashboards and trend analysis',
          'Bottleneck and inefficiency identification',
          'Predictive signals for operational planning',
          'Executive reporting on transformation progress',
        ],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'AI applied across the organisation',
    intro:
      'From frontline operations to executive decision-making, AWTG deploys AI that makes every layer of the organisation more effective.',
    items: [
      {
        icon: faGears,
        title: 'Workflow and process AI',
        desc: 'Automate structured workflows — document handling, approvals, routing and classification — reducing manual effort and improving consistency.',
      },
      {
        icon: faDatabase,
        title: 'Institutional knowledge base',
        desc: 'Build a searchable, conversational knowledge layer from existing documentation, policies and expertise that any team member can access instantly.',
      },
      {
        icon: faCloud,
        title: 'Cloud-native AI deployment',
        desc: 'Deploy AI across cloud infrastructure with governance, observability and integration built in — designed for enterprise-scale operation from day one.',
      },
      {
        icon: faComments,
        title: 'Employee AI assistant',
        desc: 'Conversational AI for internal operations — answering policy questions, guiding process steps and reducing time spent searching for information.',
      },
      {
        icon: faBrain,
        title: 'AI-powered decision support',
        desc: 'Provide leaders and teams with AI-generated insight to inform decisions — drawing on operational data, trends and risk signals in real time.',
      },
    ],
  },

  outcomes: {
    heading: 'What transformation delivers',
    intro:
      'The right AI foundation creates compounding returns — productivity gains, better decisions, faster adoption and consistent processes across the organisation.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Productivity at scale',
        desc: 'Teams handle more with less manual effort as AI absorbs structured, repetitive workload across operations.',
      },
      {
        icon: faUsers,
        title: 'Faster organisation-wide adoption',
        desc: 'AI tools designed for how people actually work drive higher adoption rates and fewer shadow processes.',
      },
      {
        icon: faLightbulb,
        title: 'Better-informed decisions',
        desc: 'Leaders and teams make decisions with better intelligence — drawn from operational data rather than anecdote or instinct.',
      },
      {
        icon: faSitemap,
        title: 'Consistent processes',
        desc: 'Automated workflows eliminate variation, reduce errors and create the consistency that allows organisations to scale confidently.',
      },
    ],
  },

  cta: {
    title: 'Start your AI transformation',
    subtitle:
      'Speak to AWTG about AI for process automation, knowledge management and organisational intelligence.',
    label: 'Talk to our experts',
  },
}

export default function AiDigitalTransformationPage() {
  return <IndustrySectorPage data={data} />
}
