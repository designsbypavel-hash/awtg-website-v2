import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import InsightImage from '@/components/InsightImage'
import { getBlogImage } from '@/lib/insightImages'

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

const tags = ['All', '5G', 'Private 5G', 'Private Networks', 'Smart Cities', 'Rail', 'Transport', 'AI', 'Infrastructure', 'Education']

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
  const grid = filtered.filter(p => p.slug !== featured?.slug).slice(0, 3)
  const list = filtered.filter(p => p.slug !== featured?.slug).slice(3)

  return (
    <>
      {/* Editorial header */}
      <section className="bg-white border-b border-gray-100" style={{ paddingTop: 100 }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-14">
          <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#228DC1] mb-5">Insights</p>
          <h1
            className="font-heading text-[#0a1628] leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', maxWidth: 640 }}
          >
            The latest from AWTG
          </h1>
        </div>

        {/* Featured article */}
        {featured && (
          <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-16">
            <Link
              to={`/insights/blog/${featured.slug}`}
              className="group grid lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch"
            >
              {/* Left: content */}
              <div className="flex flex-col justify-between py-4 pr-0 lg:pr-16">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[11px] font-black uppercase tracking-[0.26em] text-[#0a1628]/40">Featured</span>
                    <span className="w-6 h-px bg-gray-200" />
                    <span className={`text-[11px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 ${tagColour[featured.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                      {featured.tag}
                    </span>
                  </div>
                  <h2
                    className="font-heading text-[#0a1628] group-hover:text-[#228DC1] transition-colors leading-[1.1] mb-6"
                    style={{ fontSize: 'clamp(26px, 2.6vw, 38px)' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.8]" style={{ maxWidth: 480 }}>
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[#0a1628]/45 text-[12px] mt-10 pt-8 border-t border-gray-100">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                    {featured.readTime} read
                  </span>
                  <span className="ml-auto text-[#228DC1] font-semibold tracking-[0.06em] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read article
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative overflow-hidden bg-gray-100" style={{ minHeight: 380 }}>
                <InsightImage
                  src={getBlogImage(featured.slug, featured.tag)}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </Link>
          </div>
        )}
      </section>

      {/* Filter tabs — minimal underline style */}
      <div className="sticky top-[64px] z-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`shrink-0 px-4 py-4 text-[13px] font-medium transition-colors border-b-2 ${
                  activeTag === tag
                    ? 'border-[#0a1628] text-[#0a1628]'
                    : 'border-transparent text-[#0a1628]/50 hover:text-[#0a1628] hover:border-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3-column uniform card grid */}
      {grid.length > 0 && (
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grid.map(post => (
                <Link
                  key={post.slug}
                  to={`/insights/blog/${post.slug}`}
                  className="group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-100 mb-5" style={{ height: 220 }}>
                    <InsightImage
                      src={getBlogImage(post.slug, post.tag)}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600"
                    />
                  </div>
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 ${tagColour[post.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                      {post.tag}
                    </span>
                    <span className="text-[#0a1628]/35 text-[11px]">{post.date}</span>
                  </div>
                  {/* Title */}
                  <h3
                    className="text-[#0a1628] font-semibold leading-snug group-hover:text-[#228DC1] transition-colors mb-2"
                    style={{ fontSize: 17 }}
                  >
                    {post.title}
                  </h3>
                  {/* Excerpt */}
                  <p className="text-[#0a1628]/55 text-[13px] leading-[1.75] flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  {/* Read time */}
                  <span className="flex items-center gap-1.5 text-[#0a1628]/40 text-[12px]">
                    <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                    {post.readTime} read
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Side-by-side list rows */}
      {list.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#0a1628]/35 mb-10">More articles</p>
            <div className="divide-y divide-gray-100">
              {list.map(post => (
                <Link
                  key={post.slug}
                  to={`/insights/blog/${post.slug}`}
                  className="group grid grid-cols-[1fr_140px] gap-8 py-8 items-center hover:bg-[#fafbfd] -mx-4 px-4 transition-colors"
                >
                  {/* Text */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 ${tagColour[post.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                        {post.tag}
                      </span>
                      <span className="text-[#0a1628]/35 text-[11px]">{post.date}</span>
                    </div>
                    <h3
                      className="text-[#0a1628] font-semibold leading-snug group-hover:text-[#228DC1] transition-colors mb-2"
                      style={{ fontSize: 16 }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-[#0a1628]/55 text-[13px] leading-[1.7] line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden bg-gray-100 shrink-0" style={{ height: 90, width: 140 }}>
                    <InsightImage
                      src={getBlogImage(post.slug, post.tag)}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <p className="text-[#0a1628]/50 text-[15px]">No articles in this category yet.</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#228DC1] mb-4">Work with AWTG</p>
            <h2 className="text-white font-heading leading-snug" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
              Ready to talk about<br />your network?
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-8 py-4 border border-white/30 text-white text-[14px] font-medium hover:bg-white hover:text-[#0a1628] transition-all"
          >
            Request a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
