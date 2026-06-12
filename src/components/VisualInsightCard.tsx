import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import type { CSSProperties } from 'react'

type VisualInsightCardProps = {
  eyebrow: string
  title: string
  description: string
  image: string
  points?: string[]
  dark?: boolean
  accent?: string
  style?: CSSProperties
}

export default function VisualInsightCard({
  eyebrow,
  title,
  description,
  image,
  points = [],
  dark = false,
  accent = '#228DC1',
  style,
}: VisualInsightCardProps) {
  const base = dark
    ? 'border-white/10 bg-[#0d1c31] text-white hover:bg-[#10243d]'
    : 'border-gray-200 bg-white text-[#0a1628] hover:bg-[#fbfdff]'

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-lg border shadow-[0_1px_8px_rgba(10,22,40,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,22,40,0.12)] ${base}`}
      style={style}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#e8f4fa]">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent' : 'bg-gradient-to-t from-[#0a1628]/20 via-transparent to-transparent'}`} />
        <div className="absolute bottom-0 left-0 h-1 w-16" style={{ backgroundColor: accent }} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
          {eyebrow}
        </p>
        <h3 className={`mb-3 text-[17px] font-semibold leading-[1.28] ${dark ? 'text-white' : 'text-[#0a1628]'}`}>
          {title}
        </h3>
        <p className={`text-[13px] font-normal leading-[1.72] ${dark ? 'text-white/56' : 'text-[#0a1628]/60'}`}>
          {description}
        </p>

        {points.length > 0 && (
          <div className={`mt-auto space-y-2.5 border-t pt-5 ${dark ? 'border-white/10' : 'border-gray-100'}`}>
            {points.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <FontAwesomeIcon icon={faCircleCheck} className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
                <p className={`text-[13px] leading-snug ${dark ? 'text-white/68' : 'text-[#0a1628]/72'}`}>{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
