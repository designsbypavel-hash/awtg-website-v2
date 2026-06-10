import CTASection from '@/components/CTASection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWifi, faMicrochip, faChartLine, faDesktop, faBox, faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'

const COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

const solutions = [
  { icon: faWifi, title: 'In-Store Private 5G and Wi-Fi', desc: 'Dedicated store connectivity delivering reliable coverage for staff devices, point-of-sale systems, inventory scanners and customer guest Wi-Fi.' },
  { icon: faMicrochip, title: 'Inventory Management IoT', desc: 'RFID and sensor-based inventory tracking platforms providing real-time stock visibility across warehouse, stockroom and shop floor environments.' },
  { icon: faChartLine, title: 'Customer Analytics AI', desc: 'Footfall analysis, dwell-time measurement and customer journey AI tools enabling data-driven merchandising and store layout optimisation.' },
  { icon: faDesktop, title: 'Digital Signage Networks', desc: 'Managed connectivity and content distribution infrastructure for dynamic digital signage across single-site and multi-store retail estates.' },
  { icon: faBox, title: 'Click-and-Collect Automation', desc: 'IoT and wireless infrastructure supporting automated locker systems, curbside collection notifications and fulfilment workflow integration.' },
  { icon: faShieldHalved, title: 'Loss Prevention Technology', desc: 'AI-powered video analytics, electronic article surveillance integration and network-connected alert systems to reduce shrinkage and improve store security.' },
]

export default function IndustriesRetailPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] leading-tight mb-6">
            Retail
          </h1>
          <p className="text-[#0a1628]/60 text-lg max-w-2xl font-normal leading-relaxed">
            Omnichannel connectivity and AI solutions for retailers, driving operational efficiency, customer insight and sales performance across physical and digital store environments.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-heading text-[#0a1628] mb-4">
            Solutions for Retail
          </h2>
          <p className="text-[#0a1628]/60 mb-14 max-w-2xl font-normal text-[16px] leading-[1.7]">
            AWTG helps retailers compete in a connected world, deploying the wireless infrastructure and AI analytics that improve margins, customer experience and operational resilience.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, i) => {
              const color = COLORS[i % 4]
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-[18px] p-7 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    border: '1px solid rgba(15,23,42,0.08)',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.05)',
                    borderTop: `3px solid ${color}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}10`, border: `1px solid ${color}22`, color }}
                  >
                    <FontAwesomeIcon icon={s.icon} style={{ fontSize: 16 }} />
                  </div>
                  <h3 className="font-semibold text-[#0a1628] text-sm mb-2">{s.title}</h3>
                  <p className="text-[#0a1628]/60 text-[13.5px] font-normal leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
