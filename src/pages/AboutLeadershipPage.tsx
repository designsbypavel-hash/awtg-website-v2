import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
  { name: 'Taras Motulski', role: 'Operations Manager - Software Department' },
  { name: 'Dr. Sanaz Soltani', role: 'Operations and Security Technical Lead', photo: '/team/person-8.png' },
  { name: 'Sering Harding', role: 'Radio Network Planning and Optimisation Manager', photo: '/team/person-12.png' },
  { name: 'Maria Berezkina', role: 'Project Manager' },
  { name: 'Erkan Berk', role: 'Software Development Manager' },
  { name: 'Desmond Nwanugo', role: 'Scrum Master and Senior Business Analyst' },
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
    <article className="group bg-white hover:bg-[#f7f8fa] transition-colors">
      <div className={large ? 'aspect-[4/5] bg-[#eef5f9] overflow-hidden' : 'aspect-square bg-[#eef5f9] overflow-hidden'}>
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="h-full w-full object-cover object-top" loading="lazy" />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#0a1628] text-white">
            <span className="font-serif-display text-[42px]">{initials(person.name)}</span>
          </div>
        )}
      </div>
      <div className={large ? 'p-6' : 'p-5'}>
        <h2 className="text-[#0a1628] text-[16px] font-semibold leading-[1.3] mb-2 group-hover:text-[#228DC1] transition-colors">
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
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-xs text-[#0a1628]/60 mb-8 font-normal">
            <Link to="/" className="hover:text-[#228DC1] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-[#228DC1] transition-colors">About</Link>
            <span>/</span>
            <span>Management</span>
          </nav>
          <p className="type-label text-[#228DC1] mb-4">Management</p>
          <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
            The AWTG team is committed to cultivating a successful culture.
          </h1>
          <p className="text-[#0a1628]/65 text-[18px] leading-[1.7] max-w-3xl font-normal">
            The AWTG team is committed to cultivating a successful culture that drives our transformation and sustains our global growth. Get to know the some of the brilliant minds behind our strides towards sustainability and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="type-label text-[#228DC1] mb-3">Leadership</p>
              <h2 className="font-heading text-[#0a1628]">Executive and advisory team.</h2>
            </div>
            <p className="text-[#0a1628]/60 text-sm">{featured.length} leaders</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-100 border border-gray-100">
            {featured.map((person) => (
              <PersonCard key={person.name} person={person} large />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f8fa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="type-label text-[#228DC1] mb-3">Management Team</p>
              <h2 className="font-heading text-[#0a1628]">Delivery, operations and product leadership.</h2>
            </div>
            <p className="text-[#0a1628]/60 text-sm">{widerTeam.length} team members</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
            {widerTeam.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="type-label text-[#228DC1] mb-4">Talk to AWTG</p>
            <h2 className="font-serif-display text-[#0a1628] leading-tight">Ready to explore what AWTG can do for you?</h2>
          </div>
          <Link to="/contact" className="shrink-0 px-7 py-3.5 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-all inline-flex items-center gap-2">
            Contact Us <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
