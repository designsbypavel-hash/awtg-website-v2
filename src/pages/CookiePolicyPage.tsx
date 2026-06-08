import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-[#0a1628]/70 text-[15px] leading-[1.9] font-normal">{children}</p>
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[#0a1628]/70 text-[15px] leading-[1.85] font-normal">
          <span className="mt-[9px] h-1.5 w-1.5 bg-[#228DC1] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const sections = [
  {
    num: '01',
    title: 'Introduction',
    content: (
      <div className="space-y-4">
        <Para>
          AWTG Limited (AWTG) takes its obligations with regard to your personal information seriously. This privacy &amp; cookie policy sets out the ways AWTG handles your personal information collected via our websites (our "Websites") and through your participation and contribution in AWTG related activities.
        </Para>
      </div>
    ),
  },
  {
    num: '02',
    title: 'The Information We Collect About You and the Way We Use It',
    content: (
      <div className="space-y-4">
        <Para>
          You may be asked to give us personal details when purchasing, registering or subscribing to an AWTG service or product, taking part in customer research and surveys, service or product trials, or providing feedback on various issues relating to AWTG.
        </Para>
        <Para>Information we collect is used for:</Para>
        <Bullets items={[
          'Service provision and improvement',
          'Communication and personalisation (post, email, telephone, SMS)',
          'Marketing offers and news',
          'Accounting, billing, and audit',
          'Payment verification and screening',
          'Safety and security',
          'Statistical and marketing analysis (anonymised)',
          'Systems testing, maintenance and development',
          'Customer research and surveys',
        ]} />
        <Para>
          We may disclose your personal information to others where we are required or permitted to do so by law, or if you send us any material that is unlawful, offensive, abusive, threatening, defamatory, obscene, discriminatory or infringes the rights of anyone else, in order to prevent you from continuing to do so.
        </Para>
        <Para>
          If you are under 16 you must obtain consent from a parent or guardian before providing us with any personal information.
        </Para>
        <Para>
          All personal information is held in a secure environment. All personal data that AWTG collects is used in accordance with the Data Protection Act 2018.
        </Para>
        <Para>
          AWTG may use third party processors to handle personal data collected; these processors may be located in the UK or abroad. When using processors, we ensure that appropriate contractual safeguards, as dictated by the Data Protection Act 2018, are put in place.
        </Para>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Cookies',
    content: (
      <div className="space-y-4">
        <Para>
          AWTG collects information about your use of the Websites from cookies. When you enter the Websites your computer or device will automatically be issued with a cookie. A cookie is a small text file that identifies your computer to our server. Cookies in themselves do not identify the individual user, just the computer used.
        </Para>
        <Para>
          If you do not know what cookies are or how to control them, we recommend you visit{' '}
          <a href="http://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#228DC1] hover:underline">www.aboutcookies.org</a>{' '}
          for detailed guidance.
        </Para>
        <Para>
          AWTG cookies record those areas of the Websites that have been visited by your computer or device, for how long and what activity was undertaken on the Website. We do this so as to understand which are the most popular parts of the Websites, and also to improve your experience.
        </Para>
        <Para>
          In addition, we would also like to make you aware that, although external to AWTG, third party cookies are served on the Websites and can be used to track internet activity after a user has left the Website. Third party cookies usually have a long lifetime as they are 'harvested' and 'refreshed' whenever a user visits a page where the same or a similar cookie is being used.
        </Para>
        <Para>
          You are not obliged to accept cookies. You have the opportunity to set your computer or device either to accept all cookies, to notify you when a cookie is issued, or not to receive cookies at any time. The last of these means that your experience of using the Websites may be impaired as we will be unable to personalise aspects of your use of the Websites.
        </Para>
      </div>
    ),
  },
  {
    num: '04',
    title: 'Your Rights Under the Data Protection Act',
    content: (
      <div className="space-y-4">
        <Para>
          Under the Data Protection Act, you have the right to ask us what information we hold about you, the source of that information, and the uses to which it has been put. Such a request must be in writing and should be directed to the address below.
        </Para>
      </div>
    ),
  },
  {
    num: '05',
    title: 'Contact Us',
    content: (
      <div className="space-y-4">
        <Para>
          If you would like to update your information, modify your communication preferences, or if you do not want to receive marketing communications from AWTG in the future, please contact us:
        </Para>
        <div className="bg-[#f8fafc] border border-gray-100 p-6 space-y-2">
          <p className="text-[#0a1628] text-[15px] font-semibold">AWTG Limited</p>
          <p className="text-[#0a1628]/70 text-[15px]">8 Canham Mews, Canham Road, London, W3 7SR, United Kingdom</p>
          <a href="mailto:info@awtg.co.uk" className="block text-[#228DC1] text-[15px] hover:underline">info@awtg.co.uk</a>
        </div>
      </div>
    ),
  },
  {
    num: '06',
    title: 'Links to Third Party Websites',
    content: (
      <div className="space-y-4">
        <Para>
          This Privacy &amp; Cookie policy applies solely to the Websites and does not apply to any third party websites you may access from the Websites. We encourage you to read the privacy policies of any websites you visit via links from our Websites.
        </Para>
      </div>
    ),
  },
  {
    num: '07',
    title: 'Updates to the Privacy & Cookie Policy',
    content: (
      <div className="space-y-4">
        <Para>
          AWTG may amend this privacy &amp; cookie policy from time to time in order to meet changes in the regulatory environment, business needs, or to satisfy the needs of our customers, properties, strategic marketing partners, and service providers. Updated versions will be posted to our Websites and date stamped so that you are aware of when the privacy &amp; cookie policy was last updated.
        </Para>
      </div>
    ),
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="type-label text-[#228DC1] mb-4">Legal</p>
          <h1 className="font-serif-display text-[#0a1628] mb-6">Cookie Policy</h1>
          <p className="text-[#0a1628]/65 text-[17px] max-w-2xl font-normal leading-[1.75]">
            This policy sets out how AWTG Limited handles your personal information collected via our websites and through your participation in AWTG related activities.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.num}
                href={`#section-${s.num}`}
                className="px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] bg-[#f8fafc] text-[#0a1628]/55 border border-gray-100 hover:border-[#228DC1] hover:text-[#228DC1] transition-colors"
              >
                {s.num}. {s.title.split(' ').slice(0, 3).join(' ')}{s.title.split(' ').length > 3 ? '…' : ''}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="border-b border-gray-100">
            {sections.map((section) => (
              <article
                key={section.num}
                id={`section-${section.num}`}
                className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-16 py-14 border-t border-gray-100 scroll-mt-24"
              >
                <div className="lg:pt-1">
                  <p className="type-label text-[#228DC1] mb-3">{section.num}</p>
                  <h2 className="font-h4 text-[#0a1628]">{section.title}</h2>
                </div>
                <div>{section.content}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="type-label text-[#228DC1] mb-3">Cookie Enquiries</p>
            <h2 className="font-h2 text-[#0a1628]">Questions about our cookie use?</h2>
            <p className="text-[#0a1628]/60 text-[15px] mt-3 max-w-xl leading-[1.75]">
              Contact AWTG at <a href="mailto:info@awtg.co.uk" className="text-[#228DC1] hover:underline">info@awtg.co.uk</a> or write to us at 8 Canham Mews, Canham Road, London, W3 7SR.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
          >
            Get in Touch <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  )
}
