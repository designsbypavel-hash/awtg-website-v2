import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendUp, faShield, faUserGroup, faSitemap, faHospital,
  faHeartPulse, faHouseChimney, faEye, faClipboardList, faBuilding, faGraduationCap,
  faRotate, faMicrochip, faCode, faLock, faMobile, faCloud,
  faShieldHalved, faDiagramProject, faUserShield, faLayerGroup, faGears, faHeart,
} from '@fortawesome/free-solid-svg-icons'

const challenges = [
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
  {
    icon: faHospital,
    title: 'Patient access and experience',
    desc: 'Patients expect digital-first access to appointments, records and support. Outdated portals and limited self-service erode trust and increase avoidable contacts.',
  },
]

const solutions = [
  {
    icon: faHeartPulse,
    abbr: 'iHS',
    title: 'Intelligent Health Solution',
    desc: 'A comprehensive electronic health record platform designed to streamline clinical documentation, patient data management and care coordination across NHS environments.',
  },
  {
    icon: faHouseChimney,
    abbr: 'iCAL',
    title: 'Intelligent Connected Assistive Living',
    desc: 'Smart home technology and IoT integration enabling independent living for elderly and vulnerable individuals with real-time remote monitoring and care alerts.',
  },
  {
    icon: faEye,
    abbr: 'VRBA',
    title: 'Virtual Reality Behavioural Activation',
    desc: 'Immersive VR-based therapy delivery for mental health and behavioural rehabilitation, bringing evidence-based treatment to patients wherever they are.',
  },
  {
    icon: faClipboardList,
    abbr: 'iCMS',
    title: 'Intelligent Clinical Management Solutions',
    desc: 'End-to-end practice management for scheduling, referrals, billing and reporting — reducing administrative burden while improving clinical workflow visibility.',
  },
  {
    icon: faBuilding,
    abbr: 'iWPS',
    title: 'Intelligent Workplace Solutions',
    desc: 'Workplace safety monitoring and environmental intelligence for healthcare facilities, supporting compliance, incident prevention and staff wellbeing.',
  },
  {
    icon: faGraduationCap,
    abbr: 'IHPT',
    title: 'Immersive Health Professional Training',
    desc: 'Simulation-based training programmes using immersive technologies to upskill clinical staff, reduce onboarding time and improve patient safety outcomes.',
  },
]

const deliverables = [
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
    icon: faCode,
    title: 'Clinical software development',
    desc: 'Purpose-built applications for clinical use — GDPR-compliant, interoperable with NHS systems and designed around the real needs of practitioners and patients.',
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
]

const whyItems = [
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
  {
    icon: faGears,
    title: 'Operational transformation',
    desc: 'We go beyond technology: mapping processes, training teams and supporting change management to realise the full value of digital investment.',
  },
  {
    icon: faHeart,
    title: 'Patient-centred design',
    desc: 'Every product is designed with patients and clinicians at the centre — improving outcomes, reducing friction and building trust in digital health services.',
  },
]

export default function IndustriesHealthTechPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[#0a1628] mb-6">
              Health Tech
            </h1>
            <p className="text-[#0a1628]/60 text-[18px] max-w-2xl font-normal leading-[1.75] mb-10">
              Digital health solutions that improve care delivery, operational efficiency and patient experiences through connected systems, secure platforms and intelligent healthcare workflows.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Talk to our experts
            </Link>
          </div>
        </div>
      </section>

      {/* ── Healthcare challenges ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              Challenges facing health tech today
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              Healthcare organisations are navigating mounting operational, regulatory and technological complexity. These are the core pressures AWTG helps address.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(c => (
              <div
                key={c.title}
                className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{c.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWTG solutions ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[#0a1628] mb-4">
              AWTG health technology solutions
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7]">
              Purpose-built platforms and products designed for the demands of clinical environments, developed in collaboration with healthcare professionals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(s => (
              <div
                key={s.title}
                className="p-7 border border-gray-100 bg-white hover:border-[#228DC1]/30 hover:shadow-sm transition-all"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={s.icon} style={{ fontSize: 17 }} />
                </div>
                <p className="type-label text-[#0a1628]/40 mb-2">{s.abbr}</p>
                <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-2">{s.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we deliver ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-end mb-14">
            <h2 className="font-heading text-[#0a1628]">
              What we deliver
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-4 lg:mt-0">
              From strategy to implementation, AWTG delivers end-to-end digital health capabilities that integrate with NHS systems, protect patient data and scale with your organisation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {deliverables.map(d => (
              <div key={d.title} className="bg-white p-7 hover:bg-[#f7f8fa] transition-colors">
                <div
                  className="w-10 h-10 flex items-center justify-center text-[#228DC1] mb-5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
                  <FontAwesomeIcon icon={d.icon} style={{ fontSize: 17 }} />
                </div>
                <h3 className="font-card-heading text-[#0a1628] text-[15px] mb-2">{d.title}</h3>
                <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{d.desc}</p>
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
              We combine technical depth with genuine healthcare domain expertise, delivering solutions that work in the real world of clinical care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map(w => (
              <div key={w.title} className="flex gap-5">
                <div
                  className="w-10 h-10 shrink-0 flex items-center justify-center text-[#228DC1] mt-0.5"
                  style={{ backgroundColor: 'rgba(34,141,193,0.08)' }}
                >
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

      {/* ── Compliance note ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="border-l-2 border-[#228DC1] pl-8">
            <p className="text-[#0a1628]/80 text-xl font-normal leading-relaxed max-w-3xl">
              All AWTG health technology deployments are delivered in full compliance with the NHS Data Security and Protection Toolkit, with 99.99% uptime SLAs and defined incident response procedures aligned to NHS England standards.
            </p>
            <Link
              to="/insights/case-studies"
              className="inline-flex items-center gap-2 mt-6 text-[#228DC1] text-sm font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTASection
        title="Ready to modernise healthcare delivery?"
        subtitle="Speak with our health technology specialists about your organisation's digital transformation goals."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
