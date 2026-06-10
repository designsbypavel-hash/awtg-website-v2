import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendUp, faShield, faUserGroup, faSitemap, faHospital,
  faHeartPulse, faHouseChimney, faEye, faClipboardList, faBuilding,
  faGraduationCap, faRotate, faMicrochip, faCode, faLock, faMobile,
  faCloud, faShieldHalved, faDiagramProject, faUserShield, faLayerGroup,
  faGears, faHeart,
} from '@fortawesome/free-solid-svg-icons'
import CTASection from '@/components/CTASection'
import IndustrySectionHeader from '@/components/IndustrySectionHeader'
import IndustryCard from '@/components/IndustryCard'

const ACCENT = '#059669'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=840&q=80'

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
  const [imgError, setImgError] = useState(false)

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8fbfe 0%, #f0f7fb 50%, #fafcfe 100%)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.03,
            backgroundImage: 'radial-gradient(circle, #0a1628 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 72% 38%, ${ACCENT}12 0%, transparent 58%)` }}
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-[1fr_460px] gap-14 items-center">

            {/* Left: text */}
            <div>
              <span
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] mb-6"
                style={{ background: `${ACCENT}12`, color: ACCENT, border: `1px solid ${ACCENT}22` }}
              >
                AI · Health Tech
              </span>
              <h1 className="font-serif-display text-[#0a1628] mb-5 leading-[1.1]">
                Health Tech
              </h1>
              <p className="text-[#0a1628]/55 text-[16px] font-normal leading-[1.85] mb-10 max-w-lg">
                Digital health solutions that improve care delivery, operational efficiency and patient
                experiences through connected systems, secure platforms and intelligent healthcare workflows.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: ACCENT, boxShadow: `0 4px 18px ${ACCENT}35` }}
              >
                Talk to our experts
              </Link>
            </div>

            {/* Right: hero image */}
            <div className="hidden lg:block">
              {!imgError ? (
                <div
                  className="relative rounded-[20px] overflow-hidden"
                  style={{
                    boxShadow: '0 20px 60px rgba(15,23,42,0.13), 0 4px 16px rgba(15,23,42,0.07)',
                    border: '1px solid rgba(15,23,42,0.07)',
                  }}
                >
                  <img
                    src={HERO_IMAGE}
                    alt="Health Tech"
                    onError={() => setImgError(true)}
                    className="w-full object-cover"
                    style={{ height: '420px', display: 'block' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                    style={{ background: `linear-gradient(to top, ${ACCENT}25 0%, transparent 100%)` }}
                  />
                </div>
              ) : (
                /* Fallback capability panel */
                <div
                  className="rounded-[20px] overflow-hidden bg-white"
                  style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 16px 56px rgba(15,23,42,0.1)' }}
                >
                  <div
                    className="flex items-center gap-3 px-6 py-5 border-b"
                    style={{
                      background: `linear-gradient(135deg, ${ACCENT}0d 0%, ${ACCENT}06 100%)`,
                      borderColor: `${ACCENT}18`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}28` }}
                    >
                      <FontAwesomeIcon icon={faHospital} style={{ fontSize: 18, color: ACCENT }} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                        AI · Health Tech
                      </p>
                      <p className="text-[12px] text-[#0a1628]/40 font-medium mt-0.5">AWTG platform</p>
                    </div>
                  </div>
                  {[
                    { icon: faHeartPulse, label: 'Clinical AI platforms' },
                    { icon: faMicrochip, label: 'IoMT device connectivity' },
                    { icon: faShield, label: 'DSPT-compliant infrastructure' },
                    { icon: faCloud, label: 'Cloud healthcare solutions' },
                  ].map((item, i) => {
                    const colors = ['#228DC1', '#7c3aed', '#059669', '#d97706']
                    const c = colors[i]
                    return (
                      <div key={item.label} className="flex items-center gap-3 rounded-xl px-4 py-3 mx-5 my-1.5"
                        style={{ background: 'rgba(15,23,42,0.02)', border: '1px solid rgba(15,23,42,0.06)' }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${c}12`, border: `1px solid ${c}22` }}>
                          <FontAwesomeIcon icon={item.icon} style={{ fontSize: 12, color: c }} />
                        </div>
                        <span className="text-[#0a1628]/65 text-[13px] font-medium flex-1">{item.label}</span>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.55 }} />
                      </div>
                    )
                  })}
                  <div className="pb-4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CHALLENGES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <IndustrySectionHeader
            heading="Challenges facing health tech today"
            intro="Healthcare organisations are navigating mounting operational, regulatory and technological complexity. These are the core pressures AWTG helps address."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <IndustryCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SOLUTIONS (with product abbreviations)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <IndustrySectionHeader
            heading="AWTG health technology solutions"
            intro="Purpose-built platforms and products designed for the demands of clinical environments, developed in collaboration with healthcare professionals."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <IndustryCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                index={i}
                accentTop={ACCENT}
                abbr={s.abbr}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DELIVERABLES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 border-t border-gray-100" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <IndustrySectionHeader
            heading="What we deliver"
            intro="From strategy to implementation, AWTG delivers end-to-end digital health capabilities that integrate with NHS systems, protect patient data and scale with your organisation."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d, i) => (
              <IndustryCard key={d.title} icon={d.icon} title={d.title} desc={d.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY AWTG — asymmetric: sticky heading left + 2×2 grid right
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-heading text-[#0a1628] mb-5 leading-tight">Why AWTG</h2>
              <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">
                We combine technical depth with genuine healthcare domain expertise, delivering solutions
                that work in the real world of clinical care.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {whyItems.map((w, i) => (
                <IndustryCard key={w.title} icon={w.icon} title={w.title} desc={w.desc} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COMPLIANCE NOTE
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-gray-100" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl border-l-4 pl-8" style={{ borderColor: ACCENT }}>
            <p className="text-[#0a1628]/75 text-[18px] font-normal leading-relaxed mb-5">
              All AWTG health technology deployments are delivered in full compliance with the NHS Data
              Security and Protection Toolkit, with 99.99% uptime SLAs and defined incident response
              procedures aligned to NHS England standards.
            </p>
            <Link
              to="/insights/case-studies"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to modernise healthcare delivery?"
        subtitle="Speak with our health technology specialists about your organisation's digital transformation goals."
        primaryLabel="Talk to our experts"
        primaryHref="/contact"
      />
    </>
  )
}
