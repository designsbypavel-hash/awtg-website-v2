import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faExternalLinkAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { getWhitePaperHref, whitePapers } from './InsightsWhitePapersPage'

export default function InsightsWhitePaperDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const paper = whitePapers.find((item) => item.slug === slug)
  const related = whitePapers
    .filter((item) => item.topic === paper?.topic && item.slug !== slug)
    .slice(0, 3)

  if (!paper) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#228DC1] mb-4">404</p>
        <h1 className="text-4xl font-bold text-[#0a1628] mb-4">Whitepaper Not Found</h1>
        <p className="text-[#0a1628]/60 mb-8 font-normal">This whitepaper does not exist or may have been moved.</p>
        <Link to="/insights/white-papers" className="inline-flex items-center gap-2 text-sm font-medium text-[#228DC1] border border-[#228DC1] px-5 py-2.5 hover:bg-[#228DC1] hover:text-white transition-all">
          Back to Whitepapers
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="pt-28 pb-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/insights/white-papers"
                className="inline-flex items-center gap-2 text-[#0a1628]/60 hover:text-[#228DC1] text-xs font-medium uppercase tracking-[0.12em] transition-colors"
              >
                Whitepapers
              </Link>
              <span className="text-[#0a1628]/30">/</span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 bg-[#228DC1]/10 text-[#228DC1]">
                {paper.topic}
              </span>
            </div>

            <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
              {paper.title}
            </h1>

            <p className="text-[#0a1628]/60 text-[18px] font-normal leading-[1.7] mb-10 max-w-2xl">
              {paper.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[#0a1628]/60 text-xs pt-8 border-t border-gray-100">
              <span>{paper.date}</span>
              <span>AWTG Whitepaper</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
            <div>
              <p className="type-label text-[#228DC1] mb-2">PDF Viewer</p>
              <h2 className="font-card-heading text-[#0a1628] text-[20px]">Read the full whitepaper.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={paper.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-all"
              >
                Open PDF <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5" />
              </a>
              <a
                href={paper.pdf}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#228DC1] text-[#228DC1] text-sm font-medium hover:bg-[#228DC1] hover:text-white transition-all"
              >
                Download <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="border border-gray-100 bg-[#f8fafc]">
            <object data={paper.pdf} type="application/pdf" className="h-[80vh] min-h-[640px] w-full">
              <div className="p-8 text-center">
                <FontAwesomeIcon icon={faFilePdf} className="w-10 h-10 text-[#228DC1] mb-5" />
                <p className="text-[#0a1628]/70 text-sm leading-[1.7] mb-5">
                  Your browser cannot display this PDF inline.
                </p>
                <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#228DC1] text-white text-sm font-medium">
                  Open PDF <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5" />
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-[#f7f8fa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#0a1628]/60 mb-10">Related Whitepapers</p>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link key={item.slug} to={getWhitePaperHref(item)} className="group bg-white border border-gray-100 p-6 hover:border-[#228DC1] transition-all">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 mb-4 inline-block bg-[#228DC1]/10 text-[#228DC1]">
                    {item.topic}
                  </span>
                  <h3 className="text-[#0a1628] text-[14px] font-semibold leading-[1.3] mb-3 group-hover:text-[#228DC1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#0a1628]/60 text-xs mb-5">{item.date}</p>
                  <span className="inline-flex items-center gap-2 text-[#228DC1] text-xs font-semibold uppercase tracking-[0.12em]">
                    Open                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
