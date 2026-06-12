import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import InsightImage from '@/components/InsightImage'
import InsightsResourceNav from '@/components/InsightsResourceNav'
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
  const rest = filtered.filter(p => p.slug !== featured?.slug)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h1
            className="font-serif-display text-[#0a1628] leading-[1.1] mb-6"
           
          >
            Blog
          </h1>
          <p className="text-[#0a1628]/60 text-[18px] font-normal max-w-xl leading-[1.7]">
            Expert perspectives on telecoms, AI, private networks, and the infrastructure decisions that define the next decade.
          </p>
        </div>
      </section>

      <InsightsResourceNav
        activeResource="blog"
        activeTopic={activeTag}
        topics={tags}
        onTopicChange={setActiveTag}
      />

      {/* Featured post */}
      {featured && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <Link
              to={`/insights/blog/${featured.slug}`}
              className="group grid lg:grid-cols-5 gap-0 border border-gray-100 hover:border-[#228DC1] transition-all overflow-hidden"
            >
              <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[14px] font-semibold uppercase tracking-[0.15em] text-[#0a1628]/60">Featured</span>
                    <span className="w-8 h-px bg-gray-200" />
                    <span className={`text-[14px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 ${tagColour[featured.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                      {featured.tag}
                    </span>
                  </div>
                  <h2 className="font-h2 text-[#0a1628] mb-5 group-hover:text-[#228DC1] transition-colors">
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
                    Read article                  </span>
                </div>
              </div>
              <div className="lg:col-span-2 relative overflow-hidden min-h-[320px]">
                <InsightImage src={getBlogImage(featured.slug, featured.tag)} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/40 to-transparent" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post, i) => {
                const isWide = i === 0
                const isAccent = i === 3
                if (isWide) {
                  return (
                    <Link
                      key={post.slug}
                      to={`/insights/blog/${post.slug}`}
                      className="group lg:col-span-2 md:col-span-2 relative overflow-hidden min-h-[380px] flex flex-col justify-end"
                    >
                      <InsightImage src={getBlogImage(post.slug, post.tag)} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                      <div className="relative p-8">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 mb-4 inline-block bg-white/15 text-white border border-white/25">
                          {post.tag}
                        </span>
                        <h3 className="font-h4 text-white mb-3 group-hover:text-[#7ac4e0] transition-colors">{post.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-lg">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-white/50 text-xs">
                          <span>{post.date}</span>
                          <span>·</span>
                          <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                          <span>{post.readTime} read</span>
                        </div>
                      </div>
                    </Link>
                  )
                }

                if (isAccent) {
                  return (
                    <Link
                      key={post.slug}
                      to={`/insights/blog/${post.slug}`}
                      className="group bg-[#0a1628] flex flex-col p-8 min-h-[320px]"
                    >
                      <span className="text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 mb-auto inline-block bg-white/10 text-white/80 self-start">
                        {post.tag}
                      </span>
                      <div className="mt-12">
                        <h3 className="font-h5 text-white mb-4 group-hover:text-[#7ac4e0] transition-colors">{post.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-white/40 text-xs pt-4 border-t border-white/10">
                          <span>{post.date}</span>
                          <span>·</span>
                          <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                          <span>{post.readTime} read</span>
                        </div>
                      </div>
                    </Link>
                  )
                }

                return (
                  <Link
                    key={post.slug}
                    to={`/insights/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 hover:border-[#228DC1] flex flex-col overflow-hidden transition-all hover:shadow-md"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <InsightImage src={getBlogImage(post.slug, post.tag)} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 mb-4 inline-block self-start ${tagColour[post.tag] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                        {post.tag}
                      </span>
                      <h3 className="font-h5 text-[#0a1628] mb-3 group-hover:text-[#228DC1] transition-colors flex-1">{post.title}</h3>
                      <p className="text-[#0a1628]/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-[#0a1628]/50 text-xs pt-4 border-t border-gray-100">
                        <span>{post.date}</span>
                        <span>·</span>
                        <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                        <span>{post.readTime} read</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
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
            <p className="type-label text-[#228DC1] mb-3">Work with AWTG</p>
            <h2 className="font-h3 text-[#0a1628]">
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
