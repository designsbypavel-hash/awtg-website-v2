import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import InsightImage from './InsightImage'
import { getBlogImage } from '@/lib/insightImages'

const posts = [
  {
    category: 'Blog',
    title: 'From Wi-Fi to Private 5G: The Evolution of Tourism Connectivity',
    excerpt: 'How destinations can move from public Wi-Fi to secure, high-capacity private 5G experiences.',
    date: 'October 20, 2025',
    readTime: '5 min read',
    slug: 'wifi-to-private-5g-tourism-connectivity',
  },
  {
    category: 'Blog',
    title: 'Designing Invisible Infrastructure: How Cities Are Rethinking Connectivity',
    excerpt: 'How cities balance 5G infrastructure, urban aesthetics, heritage settings and public acceptance.',
    date: 'September 22, 2025',
    readTime: '6 min read',
    slug: 'designing-invisible-infrastructure-cities-connectivity',
  },
  {
    category: 'Blog',
    title: '5G-Connected Ports: The Gateway to Smarter Trade',
    excerpt: 'Why ports are becoming connected, data-driven environments powered by advanced 5G infrastructure.',
    date: 'September 15, 2025',
    readTime: '6 min read',
    slug: '5g-connected-ports-smarter-trade',
  },
]

const categoryColors: Record<string, string> = {
  'Case Study': 'bg-[#228DC1]/10 text-[#228DC1]',
  'Blog': 'bg-[#228DC1]/10 text-[#228DC1]',
  'White Paper': 'bg-purple-100 text-purple-700',
}

export default function InsightsSection() {
  return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <p className="text-[#228DC1] font-semibold text-[14px] uppercase tracking-widest mb-3">Latest Insights</p>
            <h2 className="font-heading text-[#0a1628]">News &amp; Thought Leadership</h2>
          </div>
          <Link
            to="/insights"
            className="text-[#228DC1] font-semibold hover:underline transition-all text-sm"
          >
            View all insights
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/insights/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <InsightImage src={getBlogImage(post.slug, post.category)} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <h3 className="font-semibold text-[#0a1628] leading-[1.3] mb-3 group-hover:text-[#228DC1] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#0a1628]/75 text-[14px] leading-[1.7] mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-[#0a1628]/60">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <FontAwesomeIcon icon={faClock} className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
