import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faBolt, faShield, faChartBar } from '@fortawesome/free-solid-svg-icons'
import kaiMockup from '../assets/Mockup/KAi_Mockup.png'
import idamsMockup from '../assets/Mockup/Conecctivity_iDAMS mockup.png'

// --- BRAND SVG LOGOS --------------------------------------------------------

function LogoBT() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="19" fill="#5514B4"/>
      <text x="19" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Arial,sans-serif">bt</text>
    </svg>
  )
}

function LogoVodafone() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="19" fill="#E60000"/>
      <path d="M19 8C14 8 10 12 10 18C10 24 14 27.5 19 28C20.5 25 21 23 21 20.5C21 18 20 16.5 19 15.5C20.5 15.5 23 17 23 20.5C23 25 20.5 28 19 28C23.5 28 27.5 24 27.5 19C27.5 13 23.5 8 19 8Z" fill="white"/>
    </svg>
  )
}

function LogoEricsson() {
  return (
    <svg width="136" height="20" viewBox="0 0 136 20" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <text x="0" y="17" fill="#0082F0" fontSize="17" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing="1.5">ERICSSON</text>
    </svg>
  )
}

function LogoNokia() {
  return (
    <svg width="100" height="24" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <text x="0" y="21" fill="#005AFF" fontSize="22" fontWeight="900" fontFamily="Arial,sans-serif">NOKIA</text>
    </svg>
  )
}

function LogoNHS() {
  return (
    <svg width="62" height="28" viewBox="0 0 62 28" xmlns="http://www.w3.org/2000/svg">
      <rect width="62" height="28" rx="2" fill="#005EB8"/>
      <text x="31" y="20" textAnchor="middle" fill="white" fontSize="15" fontWeight="800" fontFamily="Arial,sans-serif">NHS</text>
    </svg>
  )
}

function LogoO2() {
  return (
    <svg width="26" height="14" viewBox="0 0 52 28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fill="#0019A5" fontSize="24" fontWeight="700" fontFamily="Arial,sans-serif">O</text>
      <text x="28" y="27" fill="#0019A5" fontSize="12" fontWeight="700" fontFamily="Arial,sans-serif">2</text>
    </svg>
  )
}

function Logo3() {
  return (
    <svg width="22" height="30" viewBox="0 0 22 30" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <text x="0" y="26" fill="#85004B" fontSize="28" fontWeight="800" fontFamily="Arial,sans-serif">3</text>
    </svg>
  )
}

function LogoLime() {
  return (
    <svg width="86" height="26" viewBox="0 0 86 26" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="13" r="11" fill="#00C800"/>
      <circle cx="11" cy="13" r="7" fill="#004f00"/>
      <circle cx="11" cy="13" r="3.5" fill="#00C800"/>
      <text x="28" y="19" fill="#00C800" fontSize="18" fontWeight="700" fontFamily="Arial,sans-serif">lime</text>
    </svg>
  )
}

function LogoGSMA() {
  return (
    <svg width="82" height="22" viewBox="0 0 82 22" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <text x="0" y="19" fill="#1B3A6B" fontSize="20" fontWeight="800" fontFamily="Arial,sans-serif" letterSpacing="0.5">GSMA</text>
    </svg>
  )
}

function LogoEE() {
  return (
    <svg width="46" height="28" viewBox="0 0 46 28" xmlns="http://www.w3.org/2000/svg">
      <rect width="46" height="28" rx="3" fill="#00B000"/>
      <text x="23" y="20" textAnchor="middle" fill="white" fontSize="15" fontWeight="800" fontFamily="Arial,sans-serif">EE</text>
    </svg>
  )
}

function LogoSamsung() {
  return (
    <svg width="148" height="20" viewBox="0 0 148 20" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <text x="0" y="17" fill="#1428A0" fontSize="17" fontWeight="600" fontFamily="Arial,sans-serif" letterSpacing="2">SAMSUNG</text>
    </svg>
  )
}

const tickerLogos = [
  { id: 'esa',         src: '/logos/partners/ESA.svg',                    alt: 'ESA' },
  { id: 'barnsley',    src: '/logos/partners/Barnsley.png',                alt: 'Barnsley Metropolitan Borough Council' },
  { id: 'boldyn',      src: '/logos/partners/Boldyn.png',                  alt: 'Boldyn Networks' },
  { id: 'cambridge',   src: '/logos/partners/Cambridgershire.png',         alt: 'Cambridgeshire County Council' },
  { id: 'catapult',    src: '/logos/partners/Catapult.png',                alt: 'Digital Catapult' },
  { id: 'commonwealth',src: '/logos/partners/Commonwealth.png',            alt: 'The Commonwealth' },
  { id: 'commscope',   src: '/logos/partners/Commscope.png',               alt: 'CommScope' },
  { id: 'crown',       src: '/logos/partners/Crown Commercial Sercice.png',alt: 'Crown Commercial Service' },
  { id: 'culham',      src: '/logos/partners/Culham.png',                  alt: 'Culham Science Centre' },
  { id: 'cyber',       src: '/logos/partners/Cyber.png',                   alt: 'Cyber Essentials' },
  { id: 'de',          src: '/logos/partners/DE.png',                      alt: 'Department for the Economy' },
  { id: 'dundee',      src: '/logos/partners/Dundee.png',                  alt: 'Dundee City Council' },
  { id: 'ealing',      src: '/logos/partners/Ealing.png',                  alt: 'Ealing Council',   h: 72 },
  { id: 'fresh',       src: '/logos/partners/Fresh.png',                   alt: 'FreshWave' },
  { id: 'gamma',       src: '/logos/partners/Gamma.png',                   alt: 'Gamma' },
  { id: 'homeoffice',  src: '/logos/partners/Home Office.png',             alt: 'Home Office',      h: 72 },
  { id: 'huawei',      src: '/logos/partners/Huwawei.png',                 alt: 'Huawei',           h: 72 },
  { id: 'kings',       src: '/logos/partners/Kings COllege.png',           alt: "King's College London" },
  { id: 'liverpool',   src: '/logos/partners/Liverpool.png',               alt: 'Liverpool City Region' },
  { id: 'mobily',      src: '/logos/partners/Mobily.png',                  alt: 'Mobily' },
  { id: 'nao',         src: '/logos/partners/NAO.png',                     alt: 'National Audit Office' },
  { id: 'nokia',       src: '/logos/partners/Nokia.png',                   alt: 'Nokia' },
  { id: 'o2',          src: '/logos/partners/O2.png',                      alt: 'O2',           h: 36 },
  { id: 'oracle',      src: '/logos/partners/Oracle.png',                  alt: 'Oracle' },
  { id: 'qinetiq',     src: '/logos/partners/Qinetic.png',                 alt: 'QinetiQ' },
  { id: 'quickline',   src: '/logos/partners/Quickline Broadband.png',     alt: 'Quickline Broadband' },
  { id: 'renesas',     src: '/logos/partners/Renesas.png',                 alt: 'Renesas' },
  { id: 'kingston',    src: '/logos/partners/Royal Thames.png',            alt: 'Royal Borough of Kingston upon Thames' },
  { id: 'ruckus',      src: '/logos/partners/Ruckus.png',                  alt: 'Ruckus' },
  { id: 'scotland5g',  src: '/logos/partners/Scotland 5G.png',             alt: 'The Scotland 5G Centre' },
  { id: 'stc',         src: '/logos/partners/STC.png',                     alt: 'STC',              h: 142 },
  { id: 'strathclyde', src: '/logos/partners/Straighclyde.png',            alt: 'University of Strathclyde' },
  { id: 'surrey',      src: '/logos/partners/Surrey.png',                  alt: 'University of Surrey' },
  { id: 'tot',         src: '/logos/partners/TOT.png',                     alt: 'TOT' },
  { id: 'uktin',       src: '/logos/partners/UK Tel.png',                  alt: 'UK Telecoms Innovation Network' },
  { id: 'virginO2',    src: '/logos/partners/Virgin 02.png',               alt: 'Virgin Media O2' },
  { id: 'vodafone',    src: '/logos/partners/Vodafone.png',                alt: 'Vodafone' },
  { id: 'vodxone',     src: '/logos/partners/VOdafonexone.png',            alt: 'Vodafone Xone' },
  { id: 'westlondon',  src: '/logos/partners/West London.png',             alt: 'West London Alliance',  h: 150 },
  { id: 'wifi',        src: '/logos/partners/Wifi.png',                    alt: 'Wi-Fi Powered by The Cloud' },
  { id: 'ww5g',        src: '/logos/partners/WW 5G.png',                   alt: 'WM 5G' },
  { id: 'cisco',       src: '/logos/partners/Communication.png',           alt: 'Cisco' },
  { id: 'cpi',         src: '/logos/partners/CPI.png',                     alt: 'CPI' },
  { id: 'glasgow',     src: '/logos/partners/Frame 565.png',               alt: 'University of Glasgow' },
  { id: 'symca',       src: '/logos/partners/Frame 566.png',               alt: 'South Yorkshire MCA' },
  { id: 'cityguilds',  src: '/logos/partners/Frame 567.png',               alt: 'City & Guilds' },
  { id: 'limerick',    src: '/logos/partners/Frame 568.png',               alt: 'Limerick Youth Service' },
  { id: 'youthwork',   src: '/logos/partners/Youth Work.png',              alt: 'Youth Work Ireland' },
]

// --- HERO (Harvey-inspired) --------------------------------------------------

function Hero() {
  return (
    <section className="home-hero relative h-screen min-h-[700px] flex flex-col overflow-hidden">

      {/* -- Cinematic background (decorative, aria-hidden) -- */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="home-hero-media w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient: darkest bottom-left (where copy lives), lighter top-right */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/55 to-black/30" />
      </div>

      {/* -- Content, Harvey layout: bottom-left, minimal copy -- */}
      <div className="relative flex-1 flex flex-col justify-end pb-16 max-w-7xl mx-auto w-full px-8 lg:px-12">

        {/* Headline */}
        <h1
          className="home-hero-reveal font-serif-display text-white mb-6"
        >
          Helping organisations thrive<br />
          through AI and connectivity.
        </h1>

        {/* One-liner, StoryBrand: customer is the hero, AWTG is the guide */}
        <p className="home-hero-reveal text-white/70 text-[16px] leading-[1.7] max-w-sm mb-10 font-normal" style={{ animationDelay: '160ms' }}>
          AWTG delivers AI, 5G, private networks and software solutions
          for UK enterprises and public sector, end-to-end,
          accountable, built to perform.
        </p>

        {/* CTA */}
        <div className="home-hero-reveal" style={{ animationDelay: '300ms' }}>
          <Link
            to="/contact"
            className="inline-block px-7 py-3.5 border border-white text-white text-[14px] font-normal tracking-wide hover:bg-white hover:text-[#0a1628] transition-all duration-200"
          >
            Request a Demo
          </Link>
        </div>

      </div>

      {/* -- Logo ticker bar, client logos do the talking (Harvey principle) -- */}
      <div className="relative border-t border-gray-100 bg-white overflow-hidden">
        <div className="flex items-center">
          <div className="shrink-0 px-8 py-4 border-r border-black/10">
            <span className="text-[#0a1628]/60 text-[14px] font-semibold tracking-[0.22em] uppercase whitespace-nowrap">
              Trusted by
            </span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="ticker-track" aria-hidden="true" style={{ animationDuration: '160s' }}>
              {[...tickerLogos, ...tickerLogos].map((logo, i) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="flex items-center justify-center px-[42px] py-4 shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    style={{ height: `${logo.h ?? 120}px`, maxWidth: '240px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- SHARED SECTION HEADER ---------------------------------------------------

function SectionHeader({
  title,
  description,
  className = '',
}: {
  title: React.ReactNode
  description?: string
  className?: string
}) {
  return (
    <div className={className}>
      <h2 className="font-heading text-[#0a1628] mb-5">{title}</h2>
      {description && (
        <p className="text-[#0a1628]/60 text-base font-normal leading-[1.7] max-w-2xl">{description}</p>
      )}
    </div>
  )
}

// --- WHAT WE DO -------------------------------------------------------------

const whatWeDoItems = [
  {
    label: 'AI Products & Software',
    description: [
      'AI is changing how organisations compete. AWTG helps clients lead that change.',
      'We design and build intelligent software products that solve real operational challenges, improve decision making, and create new opportunities for growth. Our AI solutions are built with security, reliability, and usability at the core, so clients can adopt innovation with confidence.',
      'From strategy to deployment, AWTG gives organisations the tools, technology, and expertise to win in an increasingly AI-driven world.',
    ],
    href: '/products/kai',
    accent: '#228DC1',
    tag: 'Generative AI',
    image: kaiMockup,
    imageFit: 'cover',
  },
  {
    label: 'Connectivity',
    description: [
      'Connectivity is the foundation of every modern organisation. AWTG helps clients build it with confidence.',
      'We design and deliver telecoms and connectivity solutions that improve performance, expand coverage, and enable smarter operations. Whether supporting public sector transformation, enterprise networks, smart cities, transport, or critical infrastructure, our focus is on reliable technology that works in real environments.',
      'With AWTG, clients gain a trusted partner for building stronger, faster, and more intelligent networks.',
    ],
    href: '/contact',
    accent: '#0ea472',
    tag: 'Connectivity',
    image: idamsMockup,
    imageFit: 'cover',
  },
]

function WhatWeDo() {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="mb-16 max-w-[760px] lg:mb-20">
            <h2 className="font-heading text-[#0a1628]">
              Three capabilities.<br />
              <span className="text-[#1a7aab]">One partner.</span>
            </h2>
          <p className="mt-5 max-w-[620px] text-[#0a1628]/60 text-[16px] leading-[1.8]">
            End-to-end delivery across AI, private networks and engineering — under one accountable partner.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-0">
          {whatWeDoItems.map((item, index) => {
            const imageFirst = index % 2 === 1
            const image = (
              <div className="group relative min-h-[320px] overflow-hidden bg-[#f6f8fb] shadow-[0_18px_48px_rgba(10,22,40,0.08)] lg:min-h-[386px]">
                <img
                  src={item.image}
                  alt={item.label}
                  className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.025] ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/16 via-transparent to-transparent" />
              </div>
            )
            const copy = (
              <div className="flex min-h-[320px] flex-col justify-center py-4 lg:min-h-[386px]">
                <h3 className="mb-4 text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0a1628] lg:text-[34px]">
                  {item.label}
                </h3>
                <div className="max-w-[600px] space-y-4 text-[16px] font-normal leading-[1.72] text-[#0a1628]/72">
                  {item.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )

            return (
              <article
                key={item.label}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-0 ${index > 0 ? 'lg:-mt-1' : ''}`}
              >
                <div className={`${imageFirst ? 'lg:order-1' : 'lg:order-2'} ${imageFirst ? '' : 'lg:pl-16 xl:pl-24'}`}>
                  {image}
                </div>
                <div className={`${imageFirst ? 'lg:order-2 lg:pl-16 xl:pl-24' : 'lg:order-1 lg:pr-16 xl:pr-24'}`}>
                  {copy}
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

// --- OUR SOLUTIONS -----------------------------------------------------------

const solutionPanels = [
  {
    title: 'Enabling the AI supercycle in wireless networks',
    desc: 'AWTG provides MNO-grade testing, RF optimisation, and AI-powered network intelligence to help operators and vendors deploy, validate, and scale 4G/5G networks with confidence.',
    link: 'Discover telecoms solutions',
    href: '/products/kai',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop',
    flip: false,
  },
  {
    title: 'Scale faster with private wireless and AI',
    desc: "Deliver enterprise-grade connectivity and intelligence without the infrastructure burden. AWTG's PNaaS and Generative AI platforms give your business a decisive operational edge.",
    link: 'Explore enterprise platforms',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop',
    flip: true,
  },
  {
    title: 'Intelligent infrastructure for the communities of tomorrow',
    desc: 'From NHS connectivity to iRegen urban platforms and smart education, AWTG delivers AI-driven public services that improve outcomes for citizens and communities.',
    link: 'Discover smart cities solutions',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop',
    flip: false,
  },
]


export function OurSolutions() {
  return (
    <section className="bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-16">
        <SectionHeader
          className="mb-16"
          title={<>Advancing connectivity for the{' '}<span className="text-[#1a7aab]">technology supercycle.</span></>}
          description="Whether you're a mobile operator, enterprise CIO, or public sector leader, AWTG delivers the connectivity, intelligence, and software your organisation needs to lead."
        />
      </div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-28 space-y-4">
        {solutionPanels.map((panel) => (
          <div key={panel.title} className={`grid lg:grid-cols-2 gap-0 overflow-hidden bg-white border border-gray-100`}>
            {panel.flip ? (
              <>
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <h3 className="font-h3 text-[#0a1628] mb-4">{panel.title}</h3>
                  <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] mb-6 font-normal">{panel.desc}</p>
                  <Link to={panel.href} className="text-sm font-medium text-[#1a7aab] hover:underline transition-all">
                    {panel.link}
                  </Link>
                </div>
                <div className="h-64 lg:h-auto min-h-[300px] bg-gray-100">
                  <img src={panel.img} alt={panel.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </>
            ) : (
              <>
                <div className="h-64 lg:h-auto min-h-[300px] bg-gray-100">
                  <img src={panel.img} alt={panel.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <h3 className="font-h3 text-[#0a1628] mb-4">{panel.title}</h3>
                  <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] mb-6 font-normal">{panel.desc}</p>
                  <Link to={panel.href} className="text-sm font-medium text-[#1a7aab] hover:underline transition-all">
                    {panel.link}
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// --- AWTG VISION -------------------------------------------------------------

export function Vision() {
  return (
    <section className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center">
        <h2 className="font-serif-display text-[#0a1628] leading-[1.1]">
          The next wave of connectivity will{' '}
          <span className="text-[#1a7aab]">transform businesses</span>
          {', '}unlock new network value, and{' '}
          <span className="text-[#1a7aab]">empower communities</span>{' '}
          worldwide.
        </h2>
        <div className="mt-10 w-10 h-0.5 bg-[#228DC1] mx-auto" />
      </div>
    </section>
  )
}

// --- YOUR INDUSTRY -----------------------------------------------------------

const industryCards = [
  {
    tag: 'Health & Life Sciences',
    title: 'Health Tech',
    desc: 'NHS-grade connectivity, clinical AI and digital health infrastructure built around patient outcomes and care delivery.',
    cta: 'Explore health tech',
    href: '/industries/health-tech',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85&auto=format&fit=crop',
  },
  {
    tag: 'Public Sector',
    title: 'Connectivity for the Public Sector',
    desc: 'PSN-aligned network infrastructure, secure remote access and managed services for central and local government.',
    cta: 'Explore connectivity',
    href: '/connectivity/public-sector',
    img: '/images/insights/public-sector.jpg',
  },
  {
    tag: 'Education',
    title: 'Education',
    desc: 'Campus-wide Wi-Fi, 5G and safeguarding-compliant networks supporting universities, schools and research institutions.',
    cta: 'Explore education',
    href: '/industries/education',
    img: '/images/insights/education.jpg',
  },
]

function Industries() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="font-heading text-[#0a1628] mb-4">
            Powering transformation<br />
            <span className="text-[#1a7aab]">across every sector.</span>
          </h2>
          <p className="text-[#0a1628]/60 text-[16px] leading-[1.8]">
            From enterprise campuses to NHS trusts and government bodies, AWTG delivers technology built specifically for your world.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">

          {/* Large featured card — first industry */}
          {(() => {
            const card = industryCards[0]
            return (
              <Link
                key={card.title}
                to={card.href}
                className="group flex flex-col overflow-hidden bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(10,22,40,0.11)]"
              >
                <div className="overflow-hidden" style={{ height: 420 }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col px-8 pt-8 pb-9">
                  <h3 className="text-[#0a1628] font-semibold leading-snug mb-4" style={{ fontSize: 21 }}>
                    {card.title}
                  </h3>
                  <p className="text-[#0a1628]/62 text-[15px] leading-[1.75]">
                    {card.desc}
                  </p>
                </div>
              </Link>
            )
          })()}

          {/* Stacked smaller cards — remaining industries */}
          <div className="flex flex-col gap-8">
            {industryCards.slice(1).map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="group flex flex-1 flex-col overflow-hidden bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(10,22,40,0.11)]"
              >
                <div className="overflow-hidden" style={{ height: 168 }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col px-7 pt-6 pb-7">
                  <h3 className="text-[#0a1628] font-semibold leading-snug mb-3" style={{ fontSize: 19 }}>
                    {card.title}
                  </h3>
                  <p className="text-[#0a1628]/62 text-[14px] leading-[1.7]">
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// --- AI-POWERED TECHNOLOGY SOLUTIONS -----------------------------------------

const tabs = [
  {
    label: 'Telecoms AI',
    title: 'AI-Powered Telecoms Solutions',
    desc: 'AWTG combines advanced connectivity with AI and software to create intelligent telecoms solutions. Our Telecoms AI platform gives operators real-time network intelligence, predictive analytics, and autonomous optimisation capabilities.',
    features: [
      'Real-time network performance monitoring and anomaly detection',
      'Predictive failure detection and proactive remediation',
      'AI-driven KPI optimisation across 4G/5G estates',
      'Partnership with Lime Microsystems for AI/ML radio technology',
    ],
    href: '/products/kai',
    img: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=700&q=80&auto=format&fit=crop',
    imgBg: '#1e1b4b',
  },
  {
    label: 'PNaaS',
    title: 'Private Network as a Service',
    desc: "AWTG's fully managed PNaaS delivers enterprise-grade 4G/5G connectivity, designed, deployed and monitored end-to-end. From manufacturing floors to logistics hubs, we deliver connectivity that works.",
    features: [
      'Rapid deployment, live in weeks, not months',
      'Fully managed with 24/7 NOC monitoring',
      '99.99% uptime SLA guaranteed',
      'Scales seamlessly as your operations grow',
    ],
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80&auto=format&fit=crop',
    imgBg: '#0c2340',
  },
  {
    label: 'Generative AI',
    title: 'Generative AI for Enterprise',
    desc: 'Deploy production-ready generative AI within your organisation. From intelligent document processing to conversational systems and automated workflows, AWTG builds solutions that integrate securely with your existing infrastructure.',
    features: [
      'Custom LLM integration and fine-tuning',
      'Secure, on-premises or cloud deployment',
      'Enterprise knowledge base and RAG pipelines',
      'Workflow automation and intelligent agents',
    ],
    href: '/products/kai',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80&auto=format&fit=crop',
    imgBg: '#1a0030',
  },
  {
    label: 'Smart Cities',
    title: 'Smart Cities & IoT Platforms',
    desc: "AWTG's iRegen platform connects urban infrastructure, from smart lighting and traffic management to community Wi-Fi and environmental monitoring, to create cities that work better for everyone.",
    features: [
      'IoT sensor integration and real-time analytics',
      'Smart street furniture and urban mobility',
      'NHS and public sector connectivity solutions',
      'Community digital inclusion programmes',
    ],
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80&auto=format&fit=crop',
    imgBg: '#001a10',
  },
]

export function TechSolutions() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = tabs[activeTab]
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/60 mb-5">
            Technology Solutions
          </span>
          <h2 className="font-heading text-[#0a1628]">
            AI-Powered Technology{' '}
            <span className="text-[#1a7aab]">Solutions</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                activeTab === i
                  ? 'bg-[#228DC1] text-white border-[#228DC1]'
                  : 'bg-white text-[#0a1628]/60 border-gray-200 hover:border-[#228DC1] hover:text-[#1a7aab]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden border border-gray-100">
          <div className="h-72 lg:h-auto min-h-[380px] relative" style={{ background: tab.imgBg }}>
            <img src={tab.img} alt={tab.title} className="w-full h-full object-cover opacity-50 mix-blend-luminosity" loading="lazy" />
          </div>
          <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="font-h3 text-[#0a1628] mb-4">{tab.title}</h3>
            <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] mb-7 font-normal">{tab.desc}</p>
            <ul className="space-y-3 mb-8">
              {tab.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#0a1628]/75">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-[#1a7aab] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to={tab.href} className="inline-flex items-center gap-2 px-6 py-3 bg-[#228DC1] hover:bg-[#1a6e99] text-white text-sm font-medium transition-colors w-fit">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- PNAAS --------------------------------------------------------------------

const pnaasFeatures = [
  { icon: faBolt, title: 'Live in weeks', desc: 'From scoping to live network, faster than any alternative' },
  { icon: faShield, title: '99.99% uptime SLA', desc: 'Enterprise-grade reliability, AWTG NOC monitoring 24/7' },
  { icon: faChartBar, title: 'Fully managed', desc: 'Continuous optimisation, proactive support included' },
]

export function PNaaS() {
  return (
    <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute right-0 top-0 w-2/3 h-full"
        style={{ background: 'radial-gradient(ellipse at right center, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
      <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]/60 mb-8">
              PNaaS, Private Network as a Service
            </span>
            <h2 className="font-heading text-[#0a1628] mb-6">
              Transforming the future of connectivity{' '}
              <span className="text-[#1a7aab]">and beyond.</span>
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] mb-10 font-normal">
              AWTG's Private Network as a Service delivers enterprise-grade 4G/5G connectivity, fully managed, infinitely scalable, built around your operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-[#228DC1] hover:bg-[#228DC1]/5 text-[#0a1628]/70 text-sm font-medium transition-all">
                Explore PNaaS
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[#0a1628]/60 hover:text-white text-sm font-medium transition-colors">
                Talk to an Engineer
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            {pnaasFeatures.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 bg-white/[0.04] hover:bg-white/[0.07] p-6 border border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-[#228DC1]/15 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={icon} className="w-5 h-5 text-[#1a7aab]" />
                </div>
                <div>
                  <p className="text-[#0a1628] font-semibold mb-1">{title}</p>
                  <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.3]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- PARTNERS -----------------------------------------------------------------

const partnerLogos = [
  { id: 'bt', component: <LogoBT /> },
  { id: 'vodafone', component: <LogoVodafone /> },
  { id: 'ericsson', component: <LogoEricsson /> },
  { id: 'nokia', component: <LogoNokia /> },
  { id: 'nhs', component: <LogoNHS /> },
  { id: 'o2', component: <LogoO2 /> },
  { id: '3', component: <Logo3 /> },
  { id: 'lime', component: <LogoLime /> },
  { id: 'gsma', component: <LogoGSMA /> },
  { id: 'ee', component: <LogoEE /> },
  { id: 'samsung', component: <LogoSamsung /> },
]

export function Partners() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <p className="text-center text-[14px] font-semibold uppercase tracking-[0.22em] text-[#0a1628]/60 mb-12">
          Trusted by Industry Leaders & Public Sector Bodies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {partnerLogos.map((p) => (
            <div key={p.id}>
              {p.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- INSIGHTS -----------------------------------------------------------------

const articles = [
  {
    tag: 'Generative AI',
    tagPill: 'bg-[#228DC1]/10 text-[#1a7aab]',
    accent: 'bg-[#228DC1]',
    date: 'Jun 2026',
    readTime: '5 min read',
    title: 'KAI: How AI Agents Are Transforming Customer Engagement in Telecoms',
    excerpt: 'How AWTG\'s KAI platform deploys conversational AI at scale — reducing escalations, improving CSAT and handling complex queries end-to-end.',
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80&auto=format&fit=crop',
    href: '/products/kai',
  },
  {
    tag: 'AI for Education',
    tagPill: 'bg-[#7c3aed]/10 text-[#7c3aed]',
    accent: 'bg-[#7c3aed]',
    date: 'Jun 2026',
    readTime: '6 min read',
    title: 'Aruva: Bringing Multimodal AI Tutoring to Universities and Colleges',
    excerpt: 'How higher education institutions are using Aruva to deliver personalised voice, text, image and graph-based learning at scale.',
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80&auto=format&fit=crop',
    href: '/products/aruva',
  },
  {
    tag: 'Smart Cities',
    tagPill: 'bg-[#0ea472]/10 text-[#0ea472]',
    accent: 'bg-[#0ea472]',
    date: 'May 2026',
    readTime: '6 min read',
    title: 'IDAMS: Unlocking Street Asset Value for Mobile Network Operators',
    excerpt: 'How AWTG\'s asset discovery platform helps MNOs and asset owners identify, acquire and monetise street infrastructure for small cell deployment.',
    img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80&auto=format&fit=crop',
    href: '/contact',
  },
  {
    tag: 'Telecoms AI',
    tagPill: 'bg-[#f59e0b]/10 text-[#d97706]',
    accent: 'bg-[#f59e0b]',
    date: 'May 2026',
    readTime: '7 min read',
    title: 'SCAP: AI-Driven RAN Management Across Multi-Vendor Networks',
    excerpt: 'How AWTG\'s Service Correlation Assurance Platform gives operators unified performance management, fault detection and configuration control.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop',
    href: '/contact',
  },
]

function Insights() {
  return (
    <section className="py-28 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <SectionHeader
          className="mb-14"
          title={<>Explore the latest<br /><span className="text-[#1a7aab]">from AWTG.</span></>}
          description="Insight, analysis and perspectives from AWTG's engineers and sector specialists."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a) => (
            <Link
              key={a.title}
              to={a.href}
              className="group bg-white border border-gray-100 hover:border-[#228DC1] hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className={`h-[3px] w-full ${a.accent}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 ${a.tagPill}`}>{a.tag}</span>
                  <span className="text-[#0a1628]/60 text-[11px]">{a.date}</span>
                </div>
                <h3 className="font-h5 text-[#0a1628] mb-3 group-hover:text-[#1a7aab] transition-colors leading-[1.4]">{a.title}</h3>
                <p className="text-[#0a1628]/60 text-[13px] font-normal leading-[1.7] mb-5 line-clamp-2 flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[#0a1628]/60 text-[11px]">{a.readTime}</span>
                  <span className="text-[#1a7aab] text-[12px] font-semibold inline-flex items-center gap-1">
                    Read more
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#0a1628]/20 text-[#0a1628]/70 text-sm font-medium hover:border-[#228DC1] hover:text-[#1a7aab] transition-all duration-200"
          >
            View all insights
          </Link>
        </div>
      </div>
    </section>
  )
}

// --- CONTACT CTA --------------------------------------------------------------

function ContactCTA() {
  return (
    <section className="py-28 bg-[#f7f9fc] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif-display text-[#0a1628] leading-[1.1] mb-4">
              Ready to build<br />
              <span className="text-[#1a7aab]">something that matters?</span>
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mb-10">
              No pitch. No jargon. Just honest advice from engineers who've done it before.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-t border-gray-200 pt-6">
              <p className="form-label mb-2">Email</p>
              <a href="mailto:info@awtg.co.uk" className="text-[#0a1628] hover:text-[#1a7aab] transition-colors font-medium text-sm">info@awtg.co.uk</a>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="form-label mb-2">Phone</p>
              <a href="tel:+442035155151" className="text-[#0a1628] hover:text-[#1a7aab] transition-colors font-medium text-sm">+44 (0) 20 3515 5151</a>
              <p className="text-xs text-[#0a1628]/60 mt-1 font-normal">Mon–Fri, 9am–6pm GMT</p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="form-label mb-2">Offices</p>
              <p className="text-[#0a1628] font-medium text-sm">London</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- PAGE ---------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#228DC1] focus:text-white focus:text-sm">Skip to main content</a>
      <main id="main-content">
        <Hero />
        <WhatWeDo />
        <Industries />
        <Insights />
        <ContactCTA />
      </main>
    </>
  )
}
