import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const PASTEL = [
  { bg: '#fff7ed', fg: '#d97706' },
  { bg: '#eff6ff', fg: '#2563eb' },
  { bg: '#f0fdf4', fg: '#16a34a' },
  { bg: '#fdf4ff', fg: '#9333ea' },
]

interface Props {
  icon: IconDefinition
  title: string
  desc: string
  index?: number
  accentTop?: string
  abbr?: string
  className?: string
}

export default function IndustryCard({
  icon,
  title,
  desc,
  index = 0,
  accentTop,
  abbr,
  className = '',
}: Props) {
  const tile = PASTEL[index % 4]

  return (
    <div
      className={`bg-white p-7 rounded-[18px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
      style={{
        border: '1px solid rgba(15,23,42,0.07)',
        boxShadow: '0 2px 10px rgba(15,23,42,0.05)',
        ...(accentTop ? { borderTop: `3px solid ${accentTop}` } : {}),
      }}
    >
      <div
        className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5"
        style={{ background: tile.bg }}
      >
        <FontAwesomeIcon icon={icon} style={{ fontSize: 20, color: tile.fg }} />
      </div>
      {abbr && <p className="type-label text-[#0a1628]/40 mb-2">{abbr}</p>}
      <h3 className="font-semibold text-[#0a1628] text-[15px] leading-snug mb-3">{title}</h3>
      <p className="text-[#0a1628]/52 text-[13px] leading-relaxed">{desc}</p>
    </div>
  )
}
