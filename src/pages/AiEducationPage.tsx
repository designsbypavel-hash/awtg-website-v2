import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap, faUsers, faLanguage, faClipboardList, faArrowTrendUp,
  faComments, faBook, faChartLine, faBell, faLightbulb,
  faHeadset, faMagnifyingGlass, faBuilding, faUserShield, faGlobe,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
  {
    icon: faArrowTrendUp,
    title: 'Scale of student enquiries',
    desc: 'Educational institutions handle enormous volumes of repetitive questions about admissions, courses, fees, scheduling and support services — consuming staff time that could be directed at students who need more complex help.',
  },
  {
    icon: faLanguage,
    title: 'Multilingual learner populations',
    desc: 'Institutions serving international or diverse student bodies must provide accurate, consistent information across languages while maintaining quality and compliance with institutional guidance.',
  },
  {
    icon: faClipboardList,
    title: 'Administrative overload',
    desc: 'Academic and administrative teams carry a significant burden of routine queries and repetitive communications that reduce focus on teaching, pastoral care and institutional strategy.',
  },
  {
    icon: faUsers,
    title: 'Student retention and engagement',
    desc: 'Students who cannot get timely answers to their questions are more likely to disengage, defer or withdraw. Responsive, accurate information at the right moment is critical to retention.',
  },
  {
    icon: faGraduationCap,
    title: 'Supporting learners at every stage',
    desc: 'From prospective students exploring options through to alumni, institutions need AI that can serve different audience needs with appropriate tone, content and escalation routes.',
  },
]

const capabilities = [
  {
    icon: faComments,
    title: 'Student enquiry management',
    desc: 'AI can handle a high proportion of common student questions around admissions, enrolment, timetables, fees, facilities and support services using approved institutional content.',
  },
  {
    icon: faBook,
    title: 'Course and programme guidance',
    desc: 'Support prospective and current students in understanding course options, entry requirements, pathways and progression routes — available around the clock.',
  },
  {
    icon: faLanguage,
    title: 'Multilingual student support',
    desc: 'Serve international students and diverse learner populations with consistent, accurate responses across multiple languages, reducing language barriers to access.',
  },
  {
    icon: faChartLine,
    title: 'Insight from student interactions',
    desc: 'Identify patterns in student questions to surface content gaps, common points of confusion and early signals of disengagement — helping institutions act before issues escalate.',
  },
  {
    icon: faBell,
    title: 'Proactive student communications',
    desc: 'Support timely, relevant outreach to students at key moments in the academic cycle — induction, assessment deadlines, enrolment renewals and support referrals.',
  },
  {
    icon: faLightbulb,
    title: 'Staff knowledge and productivity',
    desc: 'Help administrative and academic staff find institutional policies, procedures and information quickly — reducing time spent searching and improving response consistency.',
  },
]

const services = [
  {
    icon: faHeadset,
    title: 'AI student support assistant',
    desc: 'A conversational AI layer that answers common student questions using approved institutional content, with clear escalation to human teams when needed.',
  },
  {
    icon: faMagnifyingGlass,
    title: 'AI for admissions and enrolment',
    desc: 'Support prospective students through the enquiry and application journey with consistent, accurate information about requirements, deadlines and next steps.',
  },
  {
    icon: faLanguage,
    title: 'Multilingual education AI',
    desc: 'Deliver AI-powered student communications in multiple languages, helping institutions serve international and diverse learner populations more effectively.',
  },
  {
    icon: faChartLine,
    title: 'Student insight and analytics',
    desc: 'Turn student interaction data into actionable intelligence — surfacing common concerns, service gaps and retention risk signals for institutional decision-makers.',
  },
  {
    icon: faUsers,
    title: 'Human handover and pastoral escalation',
    desc: 'Ensure the right queries reach the right people, with context-rich escalation to student services, welfare teams and academic advisors when students need human support.',
  },
]

const whyItems = [
  {
    icon: faBuilding,
    title: 'Proven in large-scale education environments',
    desc: 'AWTG has delivered AI at enterprise scale through Kai, including a major deployment with the British Council — one of the world\'s largest education and cultural organisations.',
  },
  {
    icon: faLanguage,
    title: 'Multilingual from the ground up',
    desc: 'Our AI capability is built for multilingual environments, making it well suited to institutions serving international students or operating across multiple countries.',
  },
  {
    icon: faChartLine,
    title: 'Analytics that support institutional improvement',
    desc: 'AWTG builds AI with insight built in, helping education institutions understand student needs, identify service gaps and track the impact of AI on enquiry volumes and outcomes.',
  },
  {
    icon: faUserShield,
    title: 'Responsible AI by design',
    desc: 'Every AWTG deployment is designed around human oversight and clear escalation, ensuring AI complements pastoral and support teams rather than replacing the human relationships that matter.',
  },
  {
    icon: faGlobe,
    title: 'Deployable across international campuses',
    desc: 'Whether a single institution or a multi-site education organisation operating globally, AWTG delivers AI that scales with your footprint while maintaining consistency and quality.',
  },
]

export default function AiEducationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              AI for education and student support
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              AWTG helps educational institutions use AI to improve student engagement, reduce administrative burden and deliver consistent, multilingual support at scale.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Talk to our experts
            </Link>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              Challenges in education today
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Education institutions face growing pressure to serve more students with the same resources, across more languages and more channels. These are the pressures AI directly helps address.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(c => (
              <div key={c.title} className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What AI supports ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              What AI can support in education
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              Through platforms such as Kai, AWTG helps education organisations create an AI layer that supports students at every stage of their journey — using approved institutional content and maintaining appropriate escalation routes to human teams.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(c => (
              <div key={c.title} className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service blocks ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              How AWTG can help
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              AWTG structures AI delivery around focused service areas, built around real institutional need and student journeys.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {services.map(s => (
              <div key={s.title} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={s.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-card-heading text-[#0a1628] text-[15px] mb-2">{s.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AWTG ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              Why AWTG
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              AWTG brings real-world experience delivering AI in large education environments, with a track record of measurable results in student engagement, containment and satisfaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {whyItems.map(w => (
              <div key={w.title} className="flex gap-5">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center text-[#228DC1] mt-0.5" style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}>
                  <FontAwesomeIcon icon={w.icon} style={{ fontSize: 17 }} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-1.5">{w.title}</h3>
                  <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="AI for education and student success"
        subtitle="Speak to AWTG about AI for student support, multilingual engagement and education service delivery."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
