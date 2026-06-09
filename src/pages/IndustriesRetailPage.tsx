import CTASection from '@/components/CTASection'

const solutions = [
  { title: 'In-Store Private 5G and Wi-Fi', desc: 'Dedicated store connectivity delivering reliable coverage for staff devices, point-of-sale systems, inventory scanners and customer guest Wi-Fi.' },
  { title: 'Inventory Management IoT', desc: 'RFID and sensor-based inventory tracking platforms providing real-time stock visibility across warehouse, stockroom and shop floor environments.' },
  { title: 'Customer Analytics AI', desc: 'Footfall analysis, dwell-time measurement and customer journey AI tools enabling data-driven merchandising and store layout optimisation.' },
  { title: 'Digital Signage Networks', desc: 'Managed connectivity and content distribution infrastructure for dynamic digital signage across single-site and multi-store retail estates.' },
  { title: 'Click-and-Collect Automation', desc: 'IoT and wireless infrastructure supporting automated locker systems, curbside collection notifications and fulfilment workflow integration.' },
  { title: 'Loss Prevention Technology', desc: 'AI-powered video analytics, electronic article surveillance integration and network-connected alert systems to reduce shrinkage and improve store security.' },
]

export default function IndustriesRetailPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1
            className="font-serif-display text-[#0a1628] leading-tight mb-6"
           
          >
            Retail
          </h1>
          <p className="text-[#0a1628]/60 text-lg max-w-2xl font-normal leading-relaxed">
            Omnichannel connectivity and AI solutions for retailers, driving operational efficiency, customer insight and sales performance across physical and digital store environments.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2
            className="font-serif-display text-[#0a1628] mb-4"
           
          >
            Solutions for Retail
          </h2>
          <p className="text-[#0a1628]/75 mb-12 max-w-2xl font-normal">
            AWTG helps retailers compete in a connected world, deploying the wireless infrastructure and AI analytics that improve margins, customer experience and operational resilience.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(s => (
              <div key={s.title} className="p-6 border border-gray-100 hover:border-[#228DC1]/30 transition-colors">
                <h3 className="font-semibold text-[#0a1628] mb-2">{s.title}</h3>
                <p className="text-[#0a1628]/75 text-sm font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
