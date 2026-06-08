import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-h5 text-[#0a1628] mt-7 mb-3 first:mt-0">{children}</h3>
}

const sections = [
  {
    num: '01',
    title: "Controller's Name and Contact Details",
    content: (
      <div className="space-y-4">
        <Para>
          Controller in the sense of the General Data Protection Regulation (GDPR) and other data protection or data privacy laws in the Member States of the European Union and other guidelines with a data protection nature regarding our online and mobile applications — including, but not limited to, SPEED TEST, SPORTS AR, associated web-sites such as www.awtg.website, as well as any other AWTG Service, AWTG site or AWTG Software and any other websites owned or operated by AWTG (hereinafter "AWTG Products") — is:
        </Para>
        <div className="bg-[#f8fafc] border border-gray-100 p-6 space-y-2">
          <p className="text-[#0a1628] text-[15px] font-semibold">AWTG Limited</p>
          <p className="text-[#0a1628]/70 text-[15px]">8 Canham Mews, Canham Road, London, W3 7SR, United Kingdom</p>
          <a href="mailto:info@awtg.website" className="block text-[#228DC1] text-[15px] hover:underline">info@awtg.website</a>
        </div>
        <Para>
          In this Policy, "AWTG", "we", "us" or "our" means AWTG Limited. The term "Services" refers to the act of providing you with the opportunity to use the named AWTG Products, AWTG Software ("Software") or related Account ("Account"), any of our other products and services (including support services, forums) related to the AWTG Products.
        </Para>
      </div>
    ),
  },
  {
    num: '02',
    title: 'General Information in Brief',
    content: (
      <div className="space-y-4">
        <Para>
          We process personal data only when necessary for the performance of a contract with you, for compliance with a legal obligation to which we are subject, or based on our legitimate interests, except where such interests are overridden by the interests or fundamental rights and freedoms for which require the protection of your Personal Data.
        </Para>
        <Para>
          Our legitimate interests are to render and improve our Services in an effective, safe and harmless manner. We want to provide everyone with a fair and balanced experience when using our Services.
        </Para>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Information Security',
    content: (
      <div className="space-y-4">
        <Para>
          We and our employees understand the need for user privacy, and we maintain reasonable and appropriate security procedures to protect your information from loss, misuse and unauthorised access, disclosure, alteration and destruction, taking into due account the risks involved in the processing and the nature of the Personal Data.
        </Para>
      </div>
    ),
  },
  {
    num: '04',
    title: 'Processing Information by Third Parties',
    content: (
      <div className="space-y-4">
        <Para>
          We may share Personal Data with our affiliates, subsidiaries, vendors or agents working on our behalf for the purposes described in this Policy. For example, we may hire companies to assist with protecting and securing our systems or services. Any vendor or agent that we retain must comply with our data privacy and security requirements and are not allowed to use personal data they receive from us for any other purpose. Those companies may be located outside of the European Economic Area.
        </Para>
      </div>
    ),
  },
  {
    num: '05',
    title: 'Children',
    content: (
      <div className="space-y-4">
        <Para>
          We recognise that we have a special obligation to protect personal information obtained from children. We will not knowingly collect Personal Data from any child, or process such information, without parental consent. For the purpose of this Policy, a child means any individual who is under the age of 18 (or the minimum legal age to consent to the collection and processing of Personal Data where this is different under applicable law).
        </Para>
      </div>
    ),
  },
  {
    num: '06',
    title: 'Data Retention',
    content: (
      <div className="space-y-4">
        <Para>
          We keep most of your Personal Data gathered and processed for the purposes described in this Policy for as long as you continue to use our Services. We will delete your Personal Data after you request your Account deletion and the grace period of 45 (forty-five) calendar days, during which we can restore your Account, expires. The process of erasing your Personal Data can take up to one month from expiry of the grace period and, considering the complexity and number of requests, may be extended by a further two months.
        </Para>
      </div>
    ),
  },
  {
    num: '07',
    title: 'The Kinds of Information We Collect',
    content: (
      <div className="space-y-4">
        <Para>
          Depending on which Services you use, we collect different kinds of information from or about you. This includes information you provide directly, information we collect indirectly through your use of our Services, and information we receive from third-party partners. The sections below describe these categories in detail.
        </Para>
      </div>
    ),
  },
  {
    num: '08',
    title: 'Information We Collect Directly',
    content: (
      <div className="space-y-4">
        <Para>
          We collect Personal Data and other information that you voluntarily provide. It is entirely your decision to provide the requested information. However, your use of certain Services is possible only if you provide required information, e.g. while creating an Account.
        </Para>
        <SubHeading>Account Data</SubHeading>
        <Para>
          When setting up an Account, you may be asked to provide Personal Data including, but not limited to, your name, email address and telephone number.
        </Para>
        <SubHeading>Content Data</SubHeading>
        <Para>We may obtain your Personal Data when you register for and use our other Services, e.g. forums, chats, or when you provide feedback about our Services. This data includes:</Para>
        <Bullets items={[
          'Information that you post, comment or like in any of the forums, on the pages of social network groups, in the applications and on the Site; share information such as pictures, videos, music and send messages or communicate using the AWTG Service and/or AWTG Software.',
          'Information you provide when you request information or support from us or purchase a product or service from us, including information necessary to process your orders with the relevant payment merchant.',
          'Information other than Account Data you provide when participating in competitions, contests, games or tournaments, responding to surveys, e.g. your contact details.',
          'Information that you provide to us to become a participant of any tests.',
        ]} />
        <SubHeading>Things others do and information they provide</SubHeading>
        <Para>
          We also collect content and information that other people provide when they use our Services, including information about you, such as when they share a photo of you, send a message to you, or import your contact information.
        </Para>
        <SubHeading>Your connections</SubHeading>
        <Para>
          We collect information about the people and groups you are connected to using AWTG Services and how you interact with them. We also collect contact information you provide if you upload such information (such as an address book) from a device.
        </Para>
        <SubHeading>Information from websites and apps that use our Services</SubHeading>
        <Para>
          We collect information when you visit or use third-party websites and apps that use our Services (like when they allow sharing to AWTG Service or AWTG Software). This includes information about the websites and apps you visit, your use of our Services on those websites and apps, as well as information the developer or publisher of the app or website provides to you or us.
        </Para>
        <SubHeading>Information from third-party partners</SubHeading>
        <Para>
          We receive information about you and your activities on and off AWTG from third-party partners, such as information from a partner when we jointly offer services.
        </Para>
        <SubHeading>Cookies and Log File Information</SubHeading>
        <Para>
          We use cookies and similar technologies to provide and support our Services. We may use cookies and log file information to: (a) remember information so that you will not have to re-enter it during your visit or the next time you use the AWTG Service; (b) provide custom, personalised content and information; (c) monitor individual and aggregate metrics such as total number of visitors, pages viewed, etc.; and (d) track your entries, submissions, views and such.
        </Para>
      </div>
    ),
  },
  {
    num: '09',
    title: 'Information We Collect Indirectly',
    content: (
      <div className="space-y-4">
        <Para>
          We indirectly collect a variety of information through your interaction with and use of our AWTG products, AWTG Software and other Services.
        </Para>
        <Para>
          This information may include, but is not limited to, anonymised browser and device information (both software and hardware), data collected through automated electronic interactions, application usage data, demographic information, geographic, geo-location information, statistical and aggregated information. Statistical or aggregated information does not directly identify a specific person, but it may be derived from Personal Data.
        </Para>
        <Para>We collect information from or about the devices where you install or access our Services, including:</Para>
        <Bullets items={[
          'Device information and identifiers such as the operating system, hardware version, device settings, application names, battery and signal strength.',
          'Device locations, including specific geographic locations, such as through GPS, or as provided through a network.',
          'Connection information such as the name of your mobile operator or ISP, browser type, language and time zone, mobile phone number and IP address.',
        ]} />
      </div>
    ),
  },
  {
    num: '10',
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-4">
        <Para>
          We need to process your Personal Data in order to perform the contract with you according to Article 6(1)(b) of the GDPR. As a user, we will use your Personal Data, unless otherwise prohibited by law, for the following purposes:
        </Para>
        <Bullets items={[
          'To provide you with the Services you request, i.e., to allow your installation of the AWTG product, operate the Services and verify and confirm your payments.',
          'To communicate with you about your Account or transactions with us and send you information about features on our Sites or changes to our policies.',
          'To conduct research, test features in development, and analyse the information we have to evaluate, develop and improve products, services or new features, and conduct audits and troubleshooting activities.',
          'To provide support including, but not limited to, product updates, product patches and fixes and other similar communications.',
          'To arrange receipt of gifts and awards to which you may be entitled as a result of winning an offline competition.',
          'To help verify accounts and activity, verify suspicious activities, check violation of our terms and services and to promote safety and security on and off our Services.',
        ]} />
      </div>
    ),
  },
  {
    num: '11',
    title: 'How We Share Your Information',
    content: (
      <div className="space-y-4">
        <Para>
          For the performance of a contract with you, compliance with a legal obligation to which we are subject, and based on our legitimate interests, we may share your personal data as set out below.
        </Para>
        <SubHeading>Sharing on Our Services</SubHeading>
        <Para>
          Users use our Services to connect and share with others such as sharing photos, videos, files and others. When you share and communicate using our Services, you choose the recipients who can see what you share.
        </Para>
        <SubHeading>Apps, websites and third-party integrations</SubHeading>
        <Para>
          When you use third-party apps, websites or other services that use, or are integrated with, our Services, they may receive information about what you post or share. In addition, when you download or use such third-party services, they can access your Public Profile, which includes your username or user ID, your age range and country/language, your list of friends, as well as any information that you share with them.
        </Para>
        <SubHeading>New owner</SubHeading>
        <Para>
          If the ownership or control of all or part of our Services or their assets changes, we may transfer your information to the new owner.
        </Para>
        <SubHeading>Vendors, service providers and other partners</SubHeading>
        <Para>
          We transfer limited information to vendors, service providers, and other partners who globally support our business, such as providing technical infrastructure services, analysing how our Services are used, measuring the effectiveness of proximity interests and services, providing customer service, facilitating payments, or conducting academic research and surveys. These partners must adhere to strict confidentiality obligations in a way that is consistent with this Privacy Policy and the agreements we enter into with them.
        </Para>
        <Para>
          When your personal data is shared with AWTG affiliates and subsidiaries, as well as third parties outside the European Union or the European Economic Area, AWTG guarantees an adequate level of personal data protection, including but not limited to, by entering into standard data protection clauses adopted by the European Commission.
        </Para>
      </div>
    ),
  },
  {
    num: '12',
    title: 'Your Rights',
    content: (
      <div className="space-y-4">
        <Para>
          You may, of course, decline to submit Personal Information through the AWTG Software or the AWTG Service, in which case AWTG may not be able to provide certain services to you. If you do not agree with our Privacy Policy or Terms of Service, please delete your account, uninstall the AWTG mobile application and discontinue use of the AWTG Service.
        </Para>
        <SubHeading>Information we retain</SubHeading>
        <Para>
          Upon expiry of the suspension period we will delete all Personal Data about you, except for the data that are required for our compliance with the requirements of applicable laws (e.g. tax and accounting requirements) or for our detection, investigation and prevention of cheating. We will also retain anonymous information after your Account has been closed. Information you have shared with others will remain visible after you closed your account or deleted the information from your own profile or mailbox, and we do not control data that other users copied out of our Services.
        </Para>
      </div>
    ),
  },
  {
    num: '13',
    title: 'Adherence to the Law',
    content: (
      <div className="space-y-4">
        <Para>
          We may collect and release Personal Data and/or non-personally-identifiable information if required to do so by law, or in the good-faith belief that such action is necessary to comply with national law, international law or respond to a court order, subpoena, or search warrant or equivalent, or where in our reasonable belief, an individual's physical safety may be at risk or threatened.
        </Para>
        <Para>
          AWTG also reserves the right to disclose Personally Identifiable Information and/or non-personally-identifiable information that AWTG believes, in good faith, is appropriate or necessary to enforce our Terms of Service, take precautions against liability, to investigate and defend itself against any third-party claims or allegations, to assist government enforcement agencies, to protect the security or integrity of AWTG Services or our servers, and to protect the rights, property, or personal safety of AWTG, our users or others.
        </Para>
      </div>
    ),
  },
  {
    num: '14',
    title: 'Our Commitment to Data Security',
    content: (
      <div className="space-y-4">
        <Para>
          AWTG uses commercially reasonable physical, managerial, and technical safeguards to preserve the integrity and security of your personal information. We cannot, however, ensure or warrant the security of any information you transmit to AWTG and you do so at your own risk. Using unsecured Wi-Fi or other unprotected networks to submit messages or share content through the AWTG Service is never recommended.
        </Para>
        <Para>
          Once we receive your transmission of information, AWTG makes commercially reasonable efforts to ensure the security of our systems. However, please note that this is not a guarantee that such information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards. If AWTG learns of a security systems breach, then we may attempt to notify you electronically so that you can take appropriate protective steps.
        </Para>
      </div>
    ),
  },
  {
    num: '15',
    title: 'Special Note to International Users',
    content: (
      <div className="space-y-4">
        <Para>
          AWTG is registered in the United Kingdom and is governed by the Law of England and Wales. The AWTG Service is hosted in the European Union. If you are a user accessing the AWTG Service from any other region with laws or regulations governing personal data collection, use, and disclosure that differ from the Laws of England and Wales, please be advised that through your continued use of the AWTG Service, which is governed by the Laws of England and Wales, this Privacy Policy, and our Terms of Service, you expressly consent to usage and data transfer and to be governed by the Laws of England and Wales for these purposes.
        </Para>
      </div>
    ),
  },
  {
    num: '16',
    title: 'In the Event of Merger, Sale or Bankruptcy',
    content: (
      <div className="space-y-4">
        <Para>
          In the event that AWTG is acquired by or merged with a third party entity, we reserve the right to transfer or assign the information we have collected from our users as part of such merger, acquisition, sale, or other change of control. In the unlikely event of our bankruptcy, insolvency, reorganisation, receivership, or assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors' rights generally, we may not be able to control how your personal information is treated, transferred, or used.
        </Para>
      </div>
    ),
  },
  {
    num: '17',
    title: 'We Can Change This Policy',
    content: (
      <div className="space-y-4">
        <Para>
          We may change this Policy from time to time for various reasons, such as legal and regulatory changes, changes in industry practices and technological developments that need to be reflected.
        </Para>
        <Para>
          Please revisit this page to stay aware of any changes. Your continued use of the AWTG Site and AWTG Service constitutes your agreement to this Privacy Policy and any amendments. For information about how to contact AWTG, please visit our contact page.
        </Para>
      </div>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] mb-4">Privacy Policy</h1>
          <p className="type-label text-[#0a1628]/45 mb-6">Effective April 2020</p>
          <p className="text-[#0a1628]/65 text-[17px] max-w-2xl font-normal leading-[1.75]">
            AWTG Limited recognises that you, its users, customers and visitors, want to know how we protect your privacy. This Privacy Policy helps you make an informed decision about whether to use or continue using the AWTG Service and/or AWTG Software.
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
                {s.num}
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
            <p className="type-label text-[#228DC1] mb-3">Privacy Enquiries</p>
            <h2 className="font-h2 text-[#0a1628]">Questions about your data?</h2>
            <p className="text-[#0a1628]/60 text-[15px] mt-3 max-w-xl leading-[1.75]">
              Contact AWTG at{' '}
              <a href="mailto:info@awtg.co.uk" className="text-[#228DC1] hover:underline">info@awtg.co.uk</a>{' '}
              or write to us at 8 Canham Mews, Canham Road, London, W3 7SR, United Kingdom.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold hover:bg-[#1a7fa8] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
