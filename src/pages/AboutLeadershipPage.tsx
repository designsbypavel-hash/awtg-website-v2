import { Link } from 'react-router-dom'

type Person = {
  name: string
  role: string
  photo?: string
}

const management: Person[] = [
  { name: 'Abbey Alidoosti', role: 'Co-founder and Chief Executive Officer', photo: '/team/person-0.png' },
  { name: 'Prof. Mike Short CBE', role: 'Chairman', photo: '/team/person-1.png' },
  { name: 'Siavash Alamouti', role: 'Executive Advisor', photo: '/team/person-4.png' },
  { name: 'Ian Vernon', role: 'Chief Operating Officer', photo: '/team/person-2.png' },
  { name: 'Prof. Hamid Aghvami', role: 'Advisory Board Member', photo: '/team/person-3.png' },
  { name: 'Matt Moayedi', role: 'Director of Engineering', photo: '/team/person-5.png' },
  { name: 'David Mintah', role: 'Director of Consultancy for MPN and Service Innovation', photo: '/team/person-6.png' },
  { name: 'Zeerak Akbar', role: 'Director for Operations', photo: '/team/person-7.png' },
  { name: 'Peter Najm', role: 'Product Manager', photo: '/team/person-10.png' },
  { name: 'Taras Motulski', role: 'Operations Manager, Software Department', photo: '/team/taras.jpg' },
  { name: 'Dr. Sanaz Soltani', role: 'Operations and Security Technical Lead', photo: '/team/person-8.png' },
  { name: 'Sering Harding', role: 'Radio Network Planning and Optimisation Manager', photo: '/team/person-12.png' },
  { name: 'Maria Berezkina', role: 'Project Manager', photo: '/team/maria.jpg' },
  { name: 'Erkan Berk', role: 'Software Development Manager', photo: '/team/erkan.jpg' },
  { name: 'Desmond Nwanugo', role: 'Scrum Master and Senior Business Analyst', photo: '/team/desmond.png' },
]

const featured = management.slice(0, 5)
const widerTeam = management.slice(5)

function initials(name: string) {
  return name
    .replace('Prof. ', '')
    .replace('Dr. ', '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function PersonCard({ person, large = false }: { person: Person; large?: boolean }) {
  return (
    <article className="group bg-white">
      <div className={large ? 'aspect-[4/5] overflow-hidden rounded-2xl bg-[#eef5f9]' : 'aspect-square overflow-hidden rounded-2xl bg-[#eef5f9]'}>
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#0a1628] text-white">
            <span className="font-h2">{initials(person.name)}</span>
          </div>
        )}
      </div>
      <div className={large ? 'p-6' : 'p-5'}>
        <h2 className="font-h5 text-[#0a1628] mb-2">
          {person.name}
        </h2>
        <p className="text-[#0a1628]/62 text-[13px] font-semibold uppercase tracking-[0.12em] leading-[1.5]">
          {person.role}
        </p>
      </div>
    </article>
  )
}

export default function AboutLeadershipPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

        {/* Diagonal dot-grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="leaderGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaderGrid)" />
          </svg>
        </div>

        {/* Diagonal connecting lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="leaderLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaderLines)" />
          </svg>
        </div>

        {/* Decorative + crosses */}
        {[
          { top: '18%', left: '6%' }, { top: '52%', left: '3%' },
          { top: '72%', left: '9%' }, { top: '30%', left: '55%' },
          { top: '62%', left: '48%' },
        ].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none select-none text-[#228DC1]"
            style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.35, fontWeight: 300, lineHeight: 1 }}>+</div>
        ))}

        {/* Decorative diamond */}
        <div className="absolute pointer-events-none" style={{ top: '42%', left: '4.5%', opacity: 0.25 }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="2" width="10" height="10" transform="rotate(45 7 7)" fill="none" stroke="#228DC1" strokeWidth="1.5"/></svg>
        </div>

        {/* Decorative dots */}
        <div className="absolute rounded-full pointer-events-none" style={{ top: '12%', left: '7%', width: 5, height: 5, background: 'rgba(34,141,193,0.3)' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ top: '68%', left: '5%', width: 6, height: 6, background: 'rgba(34,141,193,0.35)' }} />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 35%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
            The AWTG team is committed to cultivating a successful culture.
          </h1>
          <p className="text-[#0a1628]/60 text-[18px] leading-[1.7] max-w-3xl font-normal">
            The AWTG team is committed to cultivating a successful culture that drives our transformation and sustains our global growth. Get to know the some of the brilliant minds behind our strides towards sustainability and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-heading text-[#0a1628]">Executive and advisory team.</h2>
            </div>
            <p className="text-[#0a1628]/60 text-sm">{featured.length} leaders</p>
          </div>
          <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-100 border border-gray-100">
            {featured.map((person) => (
              <PersonCard key={person.name} person={person} large />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-heading text-[#0a1628]">Delivery, operations and product leadership.</h2>
            </div>
            <p className="text-[#0a1628]/60 text-sm">{widerTeam.length} team members</p>
          </div>
          <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
            {widerTeam.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="type-label text-[#1a7aab] mb-4">Talk to AWTG</p>
            <h2 className="font-h2 text-[#0a1628]">Ready to explore what AWTG can do for you?</h2>
          </div>
          <Link to="/contact" className="shrink-0 px-7 py-3.5 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-all inline-flex items-center gap-2">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
