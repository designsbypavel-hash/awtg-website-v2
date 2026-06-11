import IndustrySectorPage from '@/components/IndustrySectorPage'
import type { SectorPageData } from '@/components/IndustrySectorPage'
import IndustryVisualPanel from '@/components/IndustryVisualPanel'
import {
  faCartShopping,
  faHeadset,
  faLanguage,
  faRotateLeft,
  faChartLine,
  faArrowTrendUp,
  faUsers,
  faMagnifyingGlass,
  faBolt,
  faComments,
  faShield,
} from '@fortawesome/free-solid-svg-icons'

const heroVisual = (
  <IndustryVisualPanel
    accent="#d97706"
    headerIcon={faCartShopping}
    title="Commerce AI"
    subtitle="Customer operations platform"
    items={[
      { icon: faHeadset, label: 'AI customer support automation' },
      { icon: faLanguage, label: 'Multilingual query handling' },
      { icon: faRotateLeft, label: 'Returns & order management' },
      { icon: faBolt, label: 'Real-time product recommendations' },
    ]}
    badges={[
      { icon: faShield, label: 'GDPR Aligned', color: '#059669' },
      { icon: faComments, label: 'CRM Ready', color: '#7c3aed' },
      { icon: faUsers, label: 'Omnichannel', color: '#d97706' },
    ]}
  />
)

const data: SectorPageData = {
  hero: {
    badge: 'AI Platform · Commerce',
    accentColor: '#d97706',
    heroVisual,
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'AI for commerce and customer operations',
    subtitle:
      'Resolve customer enquiries faster, reduce friction across the purchase journey and surface demand intelligence at scale.',
    description:
      'AWTG deploys AI that handles the high volume, repetitive side of customer operations — from product questions and order tracking to returns and multilingual support — so your teams focus on the interactions that need them most.',
    ctaLabel: 'Talk to our experts',
    visualIcon: faCartShopping,
    visualItems: [
      { icon: faHeadset, label: 'Customer service AI' },
      { icon: faLanguage, label: 'Multilingual CX' },
      { icon: faRotateLeft, label: 'Returns & refunds automation' },
      { icon: faChartLine, label: 'Demand analytics' },
    ],
  },

  challenges: {
    heading: 'The pressures retail and commerce faces',
    intro:
      'Customer expectations for instant, accurate support conflict with the cost of scaling human operations to meet them.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Peak volume spikes',
        desc: 'Sales events, launches and seasonal peaks drive contact volumes that human teams cannot absorb without significant cost or quality compromise.',
      },
      {
        icon: faLanguage,
        title: 'Multilingual customer base',
        desc: 'International customers expect support in their own language. Providing it consistently at scale is challenging without proportionate cost increases.',
      },
      {
        icon: faRotateLeft,
        title: 'Post-purchase friction',
        desc: 'Returns, exchanges, delayed deliveries and order status queries drive high contact volumes with poor automation rates in most operations today.',
      },
      {
        icon: faUsers,
        title: 'Customer retention pressure',
        desc: 'Poor service experiences drive churn. Without insight into what customers are asking and where they fail, improvement is slow and reactive.',
      },
    ],
  },

  supports: {
    heading: 'What AWTG delivers for commerce',
    intro:
      'AWTG builds and deploys AI for retail and commerce operations — handling volume, reducing friction and providing the analytics to drive continuous improvement.',
    items: [
      {
        icon: faHeadset,
        title: 'Customer service AI',
        desc: 'Conversational AI that handles the high-volume enquiries your teams handle daily — order status, product queries, account questions — with consistent, accurate responses.',
        bullets: [
          'Common enquiry resolution at scale, 24/7',
          'Integration with order management and CRM systems',
          'Escalation to human agents with full context',
          'CSAT measurement built in from deployment',
        ],
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faCartShopping,
        title: 'Product guidance and discovery',
        desc: 'AI that helps customers find the right product, understand features and navigate complex catalogues — reducing pre-purchase uncertainty and support load.',
        bullets: [
          'Natural language product search and guidance',
          'Compatibility and specification Q&A',
          'Cross-sell and upsell surfacing from catalogue data',
          'Available across web, app and messaging channels',
        ],
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      {
        icon: faChartLine,
        title: 'Analytics and demand intelligence',
        desc: 'Turn customer interaction data into business intelligence — surfacing what customers are asking, where they drop off and which product areas generate the most confusion.',
        bullets: [
          'Contact reason and demand trend analysis',
          'Content gap and FAQ improvement signals',
          'CSAT and resolution quality dashboards',
          'Seasonal and campaign impact reporting',
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  useCases: {
    heading: 'AI across the commerce journey',
    intro:
      'AWTG deploys AI at the moments that matter most — from pre-purchase guidance to post-purchase support and long-term loyalty.',
    items: [
      {
        icon: faHeadset,
        title: 'Customer support AI',
        desc: 'AI assistant handling order status, account queries, product questions and common service requests with system-integrated, accurate responses.',
      },
      {
        icon: faMagnifyingGlass,
        title: 'Product guidance and search',
        desc: 'Natural language product discovery and guidance, helping customers find the right product and understand their options before purchase.',
      },
      {
        icon: faRotateLeft,
        title: 'Returns and refunds AI',
        desc: 'Automated returns initiation, status tracking and exchange processing — reducing manual handling and customer frustration after purchase.',
      },
      {
        icon: faLanguage,
        title: 'Multilingual customer experience',
        desc: 'Consistent support across languages for international customer bases, using the same approved content regardless of language chosen.',
      },
      {
        icon: faChartLine,
        title: 'Demand and service analytics',
        desc: 'Reporting on interaction volumes, resolution rates, CSAT trends and product inquiry patterns to inform operations and product decisions.',
      },
    ],
  },

  outcomes: {
    heading: 'Outcomes for commerce operations',
    intro:
      'AI-powered customer operations deliver measurable improvements across containment, satisfaction, operational efficiency and revenue visibility.',
    items: [
      {
        icon: faArrowTrendUp,
        title: 'Higher containment rates',
        desc: 'More enquiries resolved without human escalation, reducing cost per contact and improving service speed.',
      },
      {
        icon: faComments,
        title: 'Improved customer satisfaction',
        desc: 'Faster, more accurate and consistently available responses improve CSAT and reduce the service experiences that drive churn.',
      },
      {
        icon: faUsers,
        title: 'Team capacity freed',
        desc: 'Agents redirected from repetitive volume to complex, high-value customer interactions where human judgement makes a real difference.',
      },
      {
        icon: faBolt,
        title: 'Faster response at any scale',
        desc: 'AI handles peak volumes without queue times, providing consistent service quality whether it is quiet or a major campaign launch.',
      },
    ],
  },

  cta: {
    title: 'AI for customer-led retail growth',
    subtitle:
      'Speak to AWTG about AI for customer service, product guidance, multilingual CX and commerce operations analytics.',
    label: 'Talk to our experts',
  },
}

export default function AiCommercePage() {
  return <IndustrySectorPage data={data} />
}
