import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCalendarDays, faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons'
import {
  categoryColours,
  cleanText,
  createNewsSlug,
  getNewsHref,
  newsItems,
} from './InsightsNewsPage'

const getArticleBody = (item: (typeof newsItems)[number]) => {
  const category = item.category === 'News' ? 'company news' : item.category.toLowerCase()

  return [
    cleanText(item.excerpt),
    `This update is part of AWTG's wider ${category} activity, covering the programmes, partnerships, product developments and public-sector work that shape the company's technology portfolio.`,
    `AWTG continues to bring together telecoms engineering, AI, software delivery and systems integration expertise across projects involving 5G, Open RAN, private networks, digital infrastructure and intelligent platforms.`,
  ]
}

const getYouTubeWatchUrl = (embedUrl: string) => {
  const match = embedUrl.match(/\/embed\/([^?]+)/)
  return match ? `https://www.youtube.com/watch?v=${match[1]}` : embedUrl
}

export default function InsightsNewsDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const item = newsItems.find((newsItem) => createNewsSlug(newsItem.title) === slug)
  const related = newsItems
    .filter((newsItem) => newsItem.category === item?.category && createNewsSlug(newsItem.title) !== slug)
    .slice(0, 3)

  if (!item) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#228DC1] mb-4">404</p>
        <h1 className="text-[32px] font-bold text-[#0a1628] mb-4">News Story Not Found</h1>
        <p className="text-[#0a1628]/60 mb-8 font-normal">This news story does not exist or may have been moved.</p>
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-[#228DC1] border border-[#228DC1] px-5 py-2.5 hover:bg-[#228DC1] hover:text-white transition-all">
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" /> Back to Newsroom
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="pt-28 pb-16 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[#0a1628]/60 hover:text-[#228DC1] text-xs font-medium uppercase tracking-[0.12em] transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" /> Newsroom
            </Link>
            <span className="text-[#0a1628]/30">/</span>
            <span className={`text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 ${categoryColours[item.category] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
              {item.category}
            </span>
          </div>

          <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
            {cleanText(item.title)}
          </h1>

          <p className="text-[#0a1628]/60 text-[18px] font-normal leading-[1.7] mb-10 max-w-2xl">
            {cleanText(item.excerpt)}
          </p>

          <div className="flex items-center gap-4 text-[#0a1628]/60 text-xs pt-8 border-t border-gray-100">
            <span className="inline-flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3" /> {item.date}
            </span>
            <span>AWTG News</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          {item.youtubeEmbedUrl && (
            <div className="mb-12">
              <div className="aspect-video bg-[#0a1628] border border-gray-100">
                <iframe
                  className="h-full w-full"
                  src={item.youtubeEmbedUrl}
                  title={cleanText(item.title)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={getYouTubeWatchUrl(item.youtubeEmbedUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-all"
                >
                  <FontAwesomeIcon icon={faPlay} className="w-3.5 h-3.5" /> Watch on YouTube
                </a>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-[#0a1628] text-sm font-medium hover:border-[#228DC1] hover:text-[#228DC1] transition-all"
                  >
                    Original AWTG story <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}

          {getArticleBody(item).map((paragraph) => (
            <p key={paragraph} className="text-[#0a1628]/70 leading-[1.85] text-[16px] font-normal mb-7">
              {paragraph}
            </p>
          ))}

          {!item.youtubeEmbedUrl && item.sourceUrl && (
            <div className="mb-12">
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#228DC1] text-[#228DC1] text-sm font-medium hover:bg-[#228DC1] hover:text-white transition-all"
              >
                View original AWTG story <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          <div className="my-12 border-l-2 border-[#228DC1] pl-8 py-1">
            <p className="font-serif-display text-[#0a1628] leading-snug italic" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              AWTG's newsroom brings together project updates, technology milestones and partnership announcements from across its AI, connectivity and digital infrastructure work.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <Link to="/insights" className="inline-flex items-center gap-2 text-[#228DC1] text-sm font-semibold hover:text-[#0a1628] transition-colors">
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" /> Back to all news
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-[#f7f8fa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#0a1628]/60 mb-10">Related News</p>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((newsItem) => (
                <Link key={newsItem.title} to={getNewsHref(newsItem)} className="group bg-white border border-gray-100 p-6 hover:border-[#228DC1] transition-all">
                  <span className={`text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 mb-4 inline-block ${categoryColours[newsItem.category] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                    {newsItem.category}
                  </span>
                  <h3 className="text-[#0a1628] text-[14px] font-semibold leading-[1.3] mb-3 group-hover:text-[#228DC1] transition-colors">
                    {cleanText(newsItem.title)}
                  </h3>
                  <p className="text-[#0a1628]/60 text-xs mb-5">{newsItem.date}</p>
                  <span className="inline-flex items-center gap-2 text-[#228DC1] text-xs font-semibold uppercase tracking-[0.12em]">
                    Read <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
