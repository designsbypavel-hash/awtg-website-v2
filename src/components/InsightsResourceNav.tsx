import { Link } from 'react-router-dom'

type ResourceKey = 'newsroom' | 'blog' | 'case-studies' | 'whitepapers'

type InsightsResourceNavProps = {
  activeResource: ResourceKey
  activeTopic?: string
  topics?: string[]
  topicLabel?: string
  onTopicChange?: (topic: string) => void
}

const resourceLinks: { key: ResourceKey; label: string; href: string }[] = [
  { key: 'newsroom', label: 'Newsroom', href: '/insights' },
  { key: 'blog', label: 'Blog', href: '/insights/blog' },
  { key: 'case-studies', label: 'Case Studies', href: '/insights/case-studies' },
  { key: 'whitepapers', label: 'Whitepapers', href: '/insights/white-papers' },
]

export default function InsightsResourceNav({
  activeResource,
  activeTopic = 'All',
  topics = [],
  topicLabel = 'Topics',
  onTopicChange,
}: InsightsResourceNavProps) {
  const hasTopics = topics.length > 0 && onTopicChange

  return (
    <section className="border-y border-gray-100 bg-[#f8fafc] shadow-[0_12px_32px_rgba(10,22,40,0.05)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="border border-gray-100 bg-white p-3 sm:p-4">
          <div className="grid gap-4">
            <div className="grid lg:grid-cols-[112px_minmax(0,1fr)] gap-3 lg:items-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0a1628]/45">Resources</p>
              <nav className="flex flex-wrap items-center gap-2" aria-label="Insight resource navigation">
                {resourceLinks.map((item) => {
                  const active = item.key === activeResource
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`inline-flex min-h-[38px] items-center justify-center rounded-[8px] border px-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#228DC1] ${
                        active
                          ? 'border-[#0a1628] bg-[#0a1628] text-white shadow-[0_14px_30px_rgba(10,22,40,0.18)]'
                          : 'border-gray-200 bg-white text-[#0a1628]/65 hover:-translate-y-0.5 hover:border-[#228DC1] hover:text-[#228DC1] hover:shadow-[0_10px_22px_rgba(34,141,193,0.10)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {hasTopics && (
              <>
                <div className="h-px bg-gray-100" />
                <div className="grid lg:grid-cols-[112px_minmax(0,1fr)] gap-3 lg:items-start">
                  <div className="flex items-center gap-3 pt-2">
                    <span className="h-px w-8 bg-[#228DC1]" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0a1628]/45">{topicLabel}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2" role="toolbar" aria-label={`${activeResource} topic filters`}>
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => onTopicChange(topic)}
                        aria-pressed={activeTopic === topic}
                        className={`inline-flex min-h-[38px] cursor-pointer items-center justify-center rounded-[8px] border px-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#228DC1] ${
                          activeTopic === topic
                            ? 'border-[#228DC1] bg-[#228DC1] text-white shadow-[0_14px_28px_rgba(34,141,193,0.22)]'
                            : 'border-gray-200 bg-white text-[#0a1628]/65 hover:-translate-y-0.5 hover:border-[#228DC1] hover:bg-[#f7fbfd] hover:text-[#228DC1] hover:shadow-[0_10px_22px_rgba(34,141,193,0.10)]'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
