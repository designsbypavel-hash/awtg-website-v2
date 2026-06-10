import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface VisualBadge {
  icon: IconDefinition
  label: string
  color: string
}
export interface VisualItem {
  icon: IconDefinition
  label: string
  color?: string
}
export interface IndustryVisualPanelProps {
  accent: string
  headerIcon: IconDefinition
  title: string
  subtitle: string
  items: VisualItem[]
  badges: VisualBadge[]
}

const ITEM_COLORS = ['#228DC1', '#7c3aed', '#059669', '#d97706']

export default function IndustryVisualPanel({
  accent, headerIcon, title, subtitle, items, badges,
}: IndustryVisualPanelProps) {
  return (
    <div
      className="rounded-[20px] overflow-hidden bg-white select-none"
      style={{
        border: '1px solid rgba(15,23,42,0.08)',
        boxShadow: '0 16px 56px rgba(15,23,42,0.14), 0 2px 8px rgba(15,23,42,0.06)',
      }}
    >
      {/* ── Header ── */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{
          background: `linear-gradient(135deg, ${accent}0c 0%, ${accent}05 100%)`,
          borderBottom: `1px solid ${accent}1a`,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${accent}16`, border: `1px solid ${accent}2a` }}
          >
            <FontAwesomeIcon icon={headerIcon} style={{ fontSize: 15, color: accent }} />
          </div>
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] leading-none mb-0.5"
              style={{ color: accent }}
            >
              {title}
            </p>
            <p className="text-[10.5px] font-medium" style={{ color: 'rgba(10,22,40,0.45)' }}>
              {subtitle}
            </p>
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: '#05966910', border: '1px solid #05966922' }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#059669' }} />
          <span className="text-[10px] font-bold" style={{ color: '#059669' }}>
            Live
          </span>
        </div>
      </div>

      {/* ── Capability rows ── */}
      <div className="px-4 py-4 space-y-2">
        {items.map((item, i) => {
          const c = item.color ?? ITEM_COLORS[i % 4]
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5"
              style={{ background: 'rgba(15,23,42,0.02)', border: '1px solid rgba(15,23,42,0.06)' }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${c}10`, border: `1px solid ${c}20` }}
              >
                <FontAwesomeIcon icon={item.icon} style={{ fontSize: 11, color: c }} />
              </div>
              <span
                className="text-[12.5px] font-medium flex-1 leading-snug"
                style={{ color: 'rgba(10,22,40,0.65)' }}
              >
                {item.label}
              </span>
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                style={{ background: '#05966910' }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#059669' }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Compliance badges ── */}
      {badges.length > 0 && (
        <div
          className="px-4 pb-4 flex gap-2 pt-3"
          style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}
        >
          {badges.map(b => (
            <div
              key={b.label}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2.5"
              style={{ background: `${b.color}08`, border: `1px solid ${b.color}18` }}
            >
              <FontAwesomeIcon icon={b.icon} style={{ fontSize: 9, color: b.color }} />
              <span
                className="text-[9.5px] font-bold uppercase tracking-wide"
                style={{ color: b.color }}
              >
                {b.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
