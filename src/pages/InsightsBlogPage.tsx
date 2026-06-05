import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const posts = [
  {
    title: 'From Wi-Fi to Private 5G: The Evolution of Tourism Connectivity',
    excerpt: 'How destinations can move from convenient public Wi-Fi to secure, high-capacity private 5G experiences for visitors, venues and operators.',
    date: 'October 20, 2025',
    readTime: '5 min',
    slug: 'wifi-to-private-5g-tourism-connectivity',
    tag: 'Private 5G',
    featured: true,
  },
  {
    title: 'Designing Invisible Infrastructure: How Cities Are Rethinking Connectivity',
    excerpt: 'A look at how cities are balancing 5G infrastructure, urban aesthetics, heritage settings and public acceptance.',
    date: 'September 22, 2025',
    readTime: '6 min',
    slug: 'designing-invisible-infrastructure-cities-connectivity',
    tag: 'Smart Cities',
    featured: false,
  },
  {
    title: '5G-Connected Ports: The Gateway to Smarter Trade',
    excerpt: 'Ports are becoming connected, data-driven environments where 5G can support safer, faster and more efficient operations.',
    date: 'September 15, 2025',
    readTime: '6 min',
    slug: '5g-connected-ports-smarter-trade',
    tag: '5G',
    featured: false,
  },
  {
    title: 'Public-Private Partnerships: Accelerating Rural Rail Digital Transformation',
    excerpt: 'How public-sector coordination, national funding and private-sector delivery can close connectivity gaps across rural rail corridors.',
    date: 'September 9, 2025',
    readTime: '7 min',
    slug: 'public-private-partnerships-rural-rail-digital-transformation',
    tag: 'Rail',
    featured: false,
  },
  {
    title: 'The Rise of Private Networks in Defense: A Secure, Reliable, and Future-Proof Solution',
    excerpt: 'Why defence organisations need resilient private network infrastructure for mobile, connected and data-intensive operations.',
    date: 'June 27, 2025',
    readTime: '6 min',
    slug: 'private-networks-defense-secure-reliable-future-proof',
    tag: 'Private Networks',
    featured: false,
  },
  {
    title: 'The Future of Tourism: How 5G Connectivity on Trains will Benefit Travellers',
    excerpt: '5G on rail can support richer passenger services, safer journeys and better digital experiences for tourists on the move.',
    date: 'June 9, 2025',
    readTime: '5 min',
    slug: 'future-tourism-5g-connectivity-trains-travellers',
    tag: 'Transport',
    featured: false,
  },
  {
    title: 'Data Centres and the Future of Connectivity: How AWTG is Leading the Way in 5G Innovation',
    excerpt: 'As organisations adopt more data-intensive applications, data centres are becoming a critical part of private 5G deployment strategy.',
    date: 'May 30, 2025',
    readTime: '6 min',
    slug: 'data-centres-future-connectivity-5g-innovation',
    tag: 'Infrastructure',
    featured: false,
  },
  {
    title: 'AWTG: Pioneering Innovation with AI while Upholding the Value of Human Expertise',
    excerpt: 'How AWTG approaches AI as a practical innovation tool while keeping human expertise central to technology delivery.',
    date: 'April 16, 2025',
    readTime: '5 min',
    slug: 'awtg-ai-innovation-human-expertise',
    tag: 'AI',
    featured: false,
  },
  {
    title: 'The Future of Education on the Move: How 5G Connectivity on Trains will Benefit Universities',
    excerpt: 'How private 5G, Wi-Fi and IoT across rail corridors can support connected learning and education beyond the campus.',
    date: 'April 7, 2025',
    readTime: '6 min',
    slug: 'future-education-on-the-move-5g-trains-universities',
    tag: 'Education',
    featured: false,
  },
]

const tags = ['All', '5G', 'Private 5G', 'Private Networks', 'Smart Cities', 'Rail', 'Transport', 'AI']

const tagColour: Record<string, string> = {
  'AI': 'bg-[#228DC1]/10 text-[#228DC1]',
  '5G': 'bg-[#0a1628]/8 text-[#0a1628]',
  'Private 5G': 'bg-emerald-50 text-emerald-700',
  'Private Networks': 'bg-violet-50 text-violet-700',
  'Smart Cities': 'bg-sky-50 text-sky-700',
  'Rail': 'bg-amber-50 text-amber-700',
  'Transport': 'bg-orange-50 text-orange-700',
  'Infrastructure': 'bg-slate-100 text-slate-700',
  'Education': 'bg-indigo-50 text-indigo-700',
}

export default function InsightsBlogPage() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All' ? posts : posts.filter(p => p.tag === activeTag)
  const featured = filtered.find(p => p.featured) ?? filtered[0]
  const rest = filtered.filter(p => p.slug !== featured?.slug)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#228DC1] mb-4">Insights</p>
          <h1
            className="font-serif-display text-[#0a1628] leading-[1.1] mb-6"
           
          >
            Blog
          </h1>
          <p className="text-[#0a1628]/65 text-[18px] font-normal max-w-xl leading-[1.7]">
            Expert perspectives on telecoms, AI, private networks, and the infrastructure decisions that define the next decade.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`shrink-0 px-4 py-1.5 text-[14px] font-semibold uppercase tracking-[0.1em] transition-all ${
                  activeTag === tag
                    ? 'bg-[#228DC1] text-white'
                    : 'text-[#0a1628]/65 hover:text-[#228DC1] hover:bg-gray-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured post */}
      {featured && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <Link
              to={`/insights/blog/${featured.slug}`}
              className="group grid lg:grid-cols-5 gap-0 border border-gray-100 hover:border-[#228DC1] transition-all"
            >
              <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[14px] font-semibold uppercase tracking-[0.15em] text-[#0a1628]/65">Featured</span>
                    <span className="w-8 h-px bg-gray-200" />
                    <span className={`text-[14px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 ${tagColour[featured.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                      {featured.tag}
                    </span>
                  </div>
                  <h2
                    className="font-serif-display text-[#0a1628] leading-[1.1] mb-5 group-hover:text-[#228DC1] transition-colors"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[#0a1628]/75 text-[16px] font-normal leading-[1.7] max-w-lg">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-[#0a1628]/60 text-xs">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><FontAwesomeIcon icon={faClock} className="w-3 h-3" /> {featured.readTime} read</span>
                  </div>
                  <span className="text-[#228DC1] text-xs font-semibold uppercase tracking-[0.1em] flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Read article <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2 bg-[#f8fafc] min-h-[280px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #228DC1 0%, transparent 60%)' }}
                />
                <p className="font-serif-display text-[#0a1628]/60 text-center px-8 italic" style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}>
                  "{featured.excerpt.split('.')[0]}."
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {rest.length > 0 && (
            <ul role="list" className="space-y-0">
              {rest.map((post, i) => (
                <li key={post.slug} role="listitem">
                <Link
                  to={`/insights/blog/${post.slug}`}
                  className={`group grid lg:grid-cols-4 gap-8 py-8 items-center border-t border-gray-200 hover:bg-white transition-all px-4 -mx-4 ${i === rest.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="lg:col-span-3 flex items-start gap-8">
                    <div className="shrink-0 pt-1">
                      <p className="text-[14px] font-semibold text-[#0a1628]/20 font-mono">
                        {String(i + 2).padStart(2, '0')}
                      </p>
                    </div>
                    <div>
                      <span className={`text-[14px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 mb-3 inline-block ${tagColour[post.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                        {post.tag}
                      </span>
                      <h2 className="text-[#0a1628] font-semibold leading-[1.3] mb-2 group-hover:text-[#228DC1] transition-colors" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}>
                        {post.title}
                      </h2>
                      <p className="text-[#0a1628]/65 text-[14px] font-normal leading-[1.7]">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-col lg:items-end gap-4 lg:gap-2">
                    <span className="text-[#0a1628]/65 text-xs">{post.date}</span>
                    <span className="text-[#0a1628]/65 text-xs flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faClock} className="w-3 h-3" /> {post.readTime} read
                    </span>
                    <span className="text-[#228DC1] text-xs font-semibold uppercase tracking-[0.1em] flex items-center gap-1 group-hover:gap-2 transition-all ml-auto">
                      Read <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
                </li>
              ))}
            </ul>
          )}

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-[#0a1628]/60 font-normal">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#228DC1] mb-3">Work with AWTG</p>
            <h2 className="font-serif-display text-[#0a1628]" style={{ fontSize: '24px', lineHeight: 1.1 }}>
              Ready to talk about<br />your network?
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-8 py-4 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-all"
          >
            Request a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
