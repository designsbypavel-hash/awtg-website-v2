import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faChevronLeft, faChevronRight, faBolt, faShield, faChartBar } from '@fortawesome/free-solid-svg-icons'

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
    <svg width="52" height="28" viewBox="0 0 52 28" xmlns="http://www.w3.org/2000/svg">
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
  { id: 'ealing',      src: '/logos/partners/Ealing.png',                  alt: 'Ealing Council' },
  { id: 'fresh',       src: '/logos/partners/Fresh.png',                   alt: 'FreshWave' },
  { id: 'gamma',       src: '/logos/partners/Gamma.png',                   alt: 'Gamma' },
  { id: 'homeoffice',  src: '/logos/partners/Home Office.png',             alt: 'Home Office' },
  { id: 'huawei',      src: '/logos/partners/Huwawei.png',                 alt: 'Huawei' },
  { id: 'kings',       src: '/logos/partners/Kings COllege.png',           alt: "King's College London" },
  { id: 'liverpool',   src: '/logos/partners/Liverpool.png',               alt: 'Liverpool City Region' },
  { id: 'mobily',      src: '/logos/partners/Mobily.png',                  alt: 'Mobily' },
  { id: 'nao',         src: '/logos/partners/NAO.png',                     alt: 'National Audit Office' },
  { id: 'nokia',       src: '/logos/partners/Nokia.png',                   alt: 'Nokia' },
  { id: 'o2',          src: '/logos/partners/O2.png',                      alt: 'O2', height: '112px' },
  { id: 'oracle',      src: '/logos/partners/Oracle.png',                  alt: 'Oracle' },
  { id: 'qinetiq',     src: '/logos/partners/Qinetic.png',                 alt: 'QinetiQ' },
  { id: 'quickline',   src: '/logos/partners/Quickline Broadband.png',     alt: 'Quickline Broadband' },
  { id: 'renesas',     src: '/logos/partners/Renesas.png',                 alt: 'Renesas' },
  { id: 'kingston',    src: '/logos/partners/Royal Thames.png',            alt: 'Royal Borough of Kingston upon Thames' },
  { id: 'ruckus',      src: '/logos/partners/Ruckus.png',                  alt: 'Ruckus' },
  { id: 'scotland5g',  src: '/logos/partners/Scotland 5G.png',             alt: 'The Scotland 5G Centre' },
  { id: 'stc',         src: '/logos/partners/STC.png',                     alt: 'STC' },
  { id: 'strathclyde', src: '/logos/partners/Straighclyde.png',            alt: 'University of Strathclyde' },
  { id: 'surrey',      src: '/logos/partners/Surrey.png',                  alt: 'University of Surrey' },
  { id: 'tot',         src: '/logos/partners/TOT.png',                     alt: 'TOT' },
  { id: 'uktin',       src: '/logos/partners/UK Tel.png',                  alt: 'UK Telecoms Innovation Network' },
  { id: 'virginO2',    src: '/logos/partners/Virgin 02.png',               alt: 'Virgin Media O2' },
  { id: 'vodafone',    src: '/logos/partners/Vodafone.png',                alt: 'Vodafone' },
  { id: 'vodxone',     src: '/logos/partners/VOdafonexone.png',            alt: 'Vodafone Xone' },
  { id: 'westlondon',  src: '/logos/partners/West London.png',             alt: 'West London Alliance' },
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
          Helping organisations<br />
          put AI to work.
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
            <div className="ticker-track" aria-hidden="true">
              {[...tickerLogos, ...tickerLogos].map((logo, i) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="flex items-center justify-center px-8 py-5 shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: logo.height ?? '172px', width: '220px', objectFit: 'contain', objectPosition: 'center' }}
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

function WhatWeDo() {
  const cards = [
    {
      num: '01',
      label: 'AI Products & Software',
      line: 'Kai, Aruva and bespoke AI — built for production, not proof of concept.',
      href: '/solutions/generative-ai',
      accent: '#228DC1',
      bg: 'rgba(34,141,193,0.05)',
      tag: 'Generative AI',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="8" fill="rgba(34,141,193,0.12)"/>
          <path d="M14 7v7l4 2" stroke="#228DC1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="14" cy="14" r="6.5" stroke="#228DC1" strokeWidth="1.5"/>
          <circle cx="14" cy="14" r="2" fill="#228DC1"/>
        </svg>
      ),
    },
    {
      num: '02',
      label: 'Private Networks',
      line: 'Managed 4G/5G designed, deployed and monitored end-to-end. Live in weeks.',
      href: '/solutions/mobile-private-networks',
      accent: '#0ea472',
      bg: 'rgba(14,164,114,0.05)',
      tag: '4G / 5G',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="8" fill="rgba(14,164,114,0.12)"/>
          <path d="M7 19c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="#0ea472" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M4 19c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#0ea472" strokeWidth="1.4" strokeLinecap="round" opacity="0.45"/>
          <circle cx="14" cy="19" r="1.8" fill="#0ea472"/>
        </svg>
      ),
    },
    {
      num: '03',
      label: 'Engineering & Consultancy',
      line: '5G RF design, network testing and transformation strategy across 20+ countries.',
      href: '/services/engineering',
      accent: '#7c3aed',
      bg: 'rgba(124,58,237,0.05)',
      tag: 'Global Delivery',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="8" fill="rgba(124,58,237,0.12)"/>
          <path d="M8 20l4-8 4 5 2-3 2 6" stroke="#7c3aed" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8" cy="20" r="1.2" fill="#7c3aed"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14">
          <h2 className="font-heading text-[#0a1628] max-w-lg">
            Three capabilities.<br/>
            <span className="text-[#228DC1]">One partner.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.num}
              className="relative flex flex-col rounded-2xl border border-gray-100 overflow-hidden"
              style={{ background: '#fff' }}
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full" style={{ background: c.accent }} />

              <div className="flex flex-col flex-1 p-7">
                {/* Icon + tag row */}
                <div className="flex items-center justify-between mb-6">
                  {c.icon}
                  <span className="text-[11px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                    style={{ color: c.accent, borderColor: c.accent + '33', background: c.bg }}>
                    {c.tag}
                  </span>
                </div>

                {/* Text */}
                <h3 className="font-card-heading text-[#0a1628] mb-3">
                  {c.label}
                </h3>
                <p className="text-[#0a1628]/55 text-[14px] font-normal leading-[1.75] flex-1">
                  {c.line}
                </p>
              </div>

              {/* Large background number */}
              <span className="absolute bottom-4 right-5 text-[72px] font-black leading-none select-none pointer-events-none opacity-[0.035]"
                style={{ color: c.accent }}>
                {c.num}
              </span>
            </div>
          ))}
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
    href: '/solutions/telecoms-ai',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop',
    flip: false,
  },
  {
    title: 'Scale faster with private wireless and AI',
    desc: "Deliver enterprise-grade connectivity and intelligence without the infrastructure burden. AWTG's PNaaS and Generative AI platforms give your business a decisive operational edge.",
    link: 'Explore enterprise platforms',
    href: '/solutions/mobile-private-networks',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop',
    flip: true,
  },
  {
    title: 'Intelligent infrastructure for the communities of tomorrow',
    desc: 'From NHS connectivity to iRegen urban platforms and smart education, AWTG delivers AI-driven public services that improve outcomes for citizens and communities.',
    link: 'Discover smart cities solutions',
    href: '/solutions/smart-cities',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop',
    flip: false,
  },
]

// --- AI PROOF POINTS ---------------------------------------------------------

function AIProofPoints() {
  const stats = [
    { stat: '2016', label: 'AI in production since', accent: '#228DC1' },
    { stat: 'Live', label: 'Not a pilot', accent: '#0ea472' },
    { stat: '3', label: 'AI products shipped', accent: '#f59e0b' },
    { stat: 'Enterprise', label: 'Grade governance', accent: '#a78bfa' },
  ]
  return (
    <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

          {/* Left */}
          <div>
            <h2 className="font-heading text-[#0a1628] mb-6">
              British Council.<br />
              <span className="text-[#228DC1]">AI handling learner<br />support at scale.</span>
            </h2>

            {/* Quote */}
            <div className="relative pl-5 mb-8" style={{ borderLeft: '3px solid #228DC1' }}>
              <p className="text-[16px] font-normal leading-[1.75] text-[#0a1628]/60">
                We deployed Kai directly into British Council English Online. Customer satisfaction is up. Escalations are down. It's live, not a demo.
              </p>
            </div>

            <Link to="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold transition-all hover:gap-3"
              style={{ color: '#228DC1' }}>
              Discuss a similar project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-6 flex flex-col gap-2 bg-white border border-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-8 h-1 rounded-full mb-1" style={{ background: s.accent }} />
                <p className="text-[28px] font-black leading-none text-[#0a1628]">{s.stat}</p>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#0a1628]/45">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export function OurSolutions() {
  return (
    <section className="bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-16">
        <SectionHeader
          className="mb-16"
          title={<>Advancing connectivity for the{' '}<span className="text-[#228DC1]">technology supercycle.</span></>}
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
                  <Link to={panel.href} className="text-sm font-medium text-[#228DC1] hover:underline transition-all">
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
                  <Link to={panel.href} className="text-sm font-medium text-[#228DC1] hover:underline transition-all">
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
          <span className="text-[#228DC1]">transform businesses</span>
          {', '}unlock new network value, and{' '}
          <span className="text-[#228DC1]">empower communities</span>{' '}
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
    tag: 'Enterprise',
    title: 'Enterprise & Connected Industries',
    desc: 'Private 5G, IoT and AI-powered operations for manufacturing, logistics and enterprise campuses.',
    cta: 'Explore enterprise',
    href: '/industries/enterprise',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85&auto=format&fit=crop',
  },
  {
    tag: 'Health & Life Sciences',
    title: 'Health & Life Sciences',
    desc: 'NHS-grade connectivity, clinical AI and digital infrastructure built around patient outcomes and care delivery.',
    cta: 'Explore health tech',
    href: '/industries/health-tech',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=85&auto=format&fit=crop',
  },
  {
    tag: 'Government',
    title: 'Public Sector & Government',
    desc: 'Smart cities, citizen-facing AI and secure connectivity for central and local government bodies.',
    cta: 'Explore public sector',
    href: '/industries/public-sector',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=85&auto=format&fit=crop',
  },
]

function Industries() {
  return (
    <section className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 mb-14">
        <SectionHeader
          title={<>Powering transformation<br /><span className="text-[#228DC1]">across every sector.</span></>}
          description="From enterprise campuses to NHS trusts and government bodies, AWTG delivers technology built specifically for your world."
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {industryCards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className="relative group overflow-hidden h-[500px] flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#228DC1]"
            aria-label={card.cta}
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/95 via-[#050a12]/45 to-[#050a12]/10 transition-opacity duration-300" />
            <div className="relative z-10 mt-auto p-8 lg:p-10">
              <h3 className="font-h4 text-white mb-3 leading-snug">{card.title}</h3>
              <p className="text-white/55 text-sm leading-[1.7] font-normal mb-6 max-w-[280px]">
                {card.desc}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#228DC1] group-hover:gap-3.5 transition-all duration-300">
                {card.cta}
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
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
    href: '/solutions/telecoms-ai',
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
    href: '/solutions/mobile-private-networks',
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
    href: '/solutions/generative-ai',
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
    href: '/solutions/smart-cities',
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
            <span className="text-[#228DC1]">Solutions</span>
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
                  : 'bg-white text-[#0a1628]/60 border-gray-200 hover:border-[#228DC1] hover:text-[#228DC1]'
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
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-[#228DC1] mt-0.5 shrink-0" />
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

// --- WHY AWTG ----------------------------------------------------------------

function WhyAWTG() {
  const stats = [
    { value: '19+', label: 'Years', sub: 'Engineering since 2006', accent: '#228DC1' },
    { value: '1,000+', label: 'Sites', sub: 'Deployed globally', accent: '#0ea472' },
    { value: '100+', label: 'Experts', sub: 'Engineers & specialists', accent: '#f59e0b' },
    { value: '8', label: 'Sectors', sub: 'Public & private', accent: '#a78bfa' },
  ]
  const certs = ['ISO 9001', 'ISO 27001', 'ISO 14001', 'ISO 45001', 'ISO 42001', 'Cyber Essentials+', 'CCS Approved']
  return (
    <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-[#0a1628] mb-4">
            The experience to deliver, and the{' '}
            <span className="text-[#228DC1]">team to stay with you.</span>
          </h2>
          <p className="text-[#0a1628]/55 text-[16px] font-normal leading-[1.75]">
            Crown Commercial Service approved. SC and DV cleared engineers. Built for the most demanding environments.
          </p>
        </div>

        {/* Cert pills row */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {certs.map(c => (
            <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide border bg-white"
              style={{ color: '#228DC1', borderColor: 'rgba(34,141,193,0.25)' }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="3.5" stroke="#228DC1" strokeWidth="1"/>
                <path d="M2.5 4l1 1 2-2" stroke="#228DC1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {c}
            </span>
          ))}
          <Link to="/about/certifications"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide border border-gray-200 bg-white text-[#0a1628]/50 hover:text-[#228DC1] transition-colors">
            View all →
          </Link>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="relative rounded-2xl bg-white border border-gray-100 shadow-sm p-7 overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: s.accent }} />
              <div className="absolute -bottom-3 -right-2 text-[80px] font-black leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                style={{ color: s.accent }}>{s.value}</div>
              <p className="text-[40px] font-black leading-none text-[#0a1628] mb-2">{s.value}</p>
              <p className="text-[11px] font-extrabold uppercase tracking-widest mb-1" style={{ color: s.accent }}>{s.label}</p>
              <p className="text-[13px] text-[#0a1628]/50 font-normal">{s.sub}</p>
            </div>
          ))}
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
              <span className="text-[#228DC1]">and beyond.</span>
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] leading-[1.7] mb-10 font-normal">
              AWTG's Private Network as a Service delivers enterprise-grade 4G/5G connectivity, fully managed, infinitely scalable, built around your operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/solutions/mobile-private-networks"
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
                  <FontAwesomeIcon icon={icon} className="w-5 h-5 text-[#228DC1]" />
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


// --- CLIENT VOICES ------------------------------------------------------------

const testimonials = [
  {
    company: 'UK Public Sector',
    name: 'Head of Digital Transformation',
    org: 'Leading UK Public Sector Organisation',
    quote: "AWTG's technology team brought a level of innovation and commercial pragmatism that we hadn't found elsewhere. Their AI solutions delivered tangible ROI well ahead of schedule.",
  },
  {
    company: 'UK Telecoms Operator',
    name: 'Chief Technology Officer',
    org: 'UK Telecoms Operator',
    quote: 'The private 5G network AWTG deployed for us transformed our operations completely. From deployment speed to ongoing support, they exceeded every expectation.',
  },
  {
    company: 'NHS Foundation Trust',
    name: 'Director of Innovation',
    org: 'NHS Foundation Trust',
    quote: 'Bringing AWTG in to design our connectivity infrastructure was one of the best decisions we made. Their understanding of public sector requirements is unmatched.',
  },
]

const CARDS_PER_PAGE = 3

function ClientVoices() {
  const [offset, setOffset] = useState(0)
  const canPrev = offset > 0
  const canNext = offset + CARDS_PER_PAGE < testimonials.length
  const visible = testimonials.slice(offset, offset + CARDS_PER_PAGE)
  return (
    <section className="py-28 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header row */}
        <div className="flex items-start justify-between gap-8 mb-12">
          <div>
            <h2 className="font-serif-display text-[#0a1628] leading-tight">Customer <span className="text-[#228DC1]">testimonials</span></h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.7] mt-3 max-w-lg">
              Discover how organisations across telecoms, health and public sector deliver outcomes with AWTG.
            </p>
          </div>
          <div className="flex gap-2 shrink-0 mt-1">
            <button
              onClick={() => setOffset((o) => o - 1)}
              disabled={!canPrev}
              aria-label="Previous testimonials"
              className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#0a1628]/50 hover:border-[#228DC1] hover:text-[#228DC1] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150 rounded-full"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
            </button>
            <button
              onClick={() => setOffset((o) => o + 1)}
              disabled={!canNext}
              aria-label="Next testimonials"
              className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#0a1628]/50 hover:border-[#228DC1] hover:text-[#228DC1] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150 rounded-full"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <div key={offset + i} className="bg-white border border-gray-100 p-8 flex flex-col min-h-[320px]">
              <p className="font-h4 text-[#0a1628] mb-10">{t.company}</p>
              <blockquote className="text-[#0a1628]/70 text-sm leading-[1.85] font-normal flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-[#0a1628] font-semibold text-[13px]">{t.name}</p>
                <p className="text-[#0a1628]/50 text-[12px] font-normal mt-0.5">{t.org}</p>
              </div>
            </div>
          ))}
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
    tagPill: 'bg-[#228DC1]/10 text-[#228DC1]',
    accent: 'bg-[#228DC1]',
    date: 'Jun 2026',
    readTime: '5 min read',
    title: 'KAI: How AI Agents Are Transforming Customer Engagement in Telecoms',
    excerpt: 'How AWTG\'s KAI platform deploys conversational AI at scale — reducing escalations, improving CSAT and handling complex queries end-to-end.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format&fit=crop',
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
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format&fit=crop',
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
    img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80&auto=format&fit=crop',
    href: '/services/iot',
  },
  {
    tag: 'Telecoms AI',
    tagPill: 'bg-[#f59e0b]/10 text-[#d97706]',
    accent: 'bg-[#f59e0b]',
    date: 'May 2026',
    readTime: '7 min read',
    title: 'SCAP: AI-Driven RAN Management Across Multi-Vendor Networks',
    excerpt: 'How AWTG\'s Service Correlation Assurance Platform gives operators unified performance management, fault detection and configuration control.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    href: '/services/engineering',
  },
]

function Insights() {
  return (
    <section className="py-28 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <SectionHeader
          className="mb-14"
          title={<>Explore the latest<br /><span className="text-[#228DC1]">from AWTG.</span></>}
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
                  <span className="text-[#0a1628]/40 text-[11px]">{a.date}</span>
                </div>
                <h3 className="font-h5 text-[#0a1628] mb-3 group-hover:text-[#228DC1] transition-colors leading-[1.4]">{a.title}</h3>
                <p className="text-[#0a1628]/55 text-[13px] font-normal leading-[1.7] mb-5 line-clamp-2 flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[#0a1628]/40 text-[11px]">{a.readTime}</span>
                  <span className="text-[#228DC1] text-[12px] font-semibold inline-flex items-center gap-1">
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
            to="/insights"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#0a1628]/20 text-[#0a1628]/70 text-sm font-medium hover:border-[#228DC1] hover:text-[#228DC1] transition-all duration-200"
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
              <span className="text-[#228DC1]">something that matters?</span>
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
              <a href="mailto:info@awtg.co.uk" className="text-[#0a1628] hover:text-[#228DC1] transition-colors font-medium text-sm">info@awtg.co.uk</a>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="form-label mb-2">Phone</p>
              <a href="tel:+442035155151" className="text-[#0a1628] hover:text-[#228DC1] transition-colors font-medium text-sm">+44 (0) 20 3515 5151</a>
              <p className="text-xs text-[#0a1628]/45 mt-1 font-normal">Mon–Fri, 9am–6pm GMT</p>
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
        <AIProofPoints />
        <Industries />
        <WhyAWTG />
        <ClientVoices />
        <Insights />
        <ContactCTA />
      </main>
    </>
  )
}

