import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconDefinition
  accent: string
  chips?: string[]
  className?: string
}

const CORNER_POSITIONS = [
  'top-6 left-6',
  'top-6 right-6',
  'bottom-6 left-6',
  'bottom-6 right-6',
]

export default function IndustryIconVisual({ icon, accent, chips = [], className = '' }: Props) {
  const visibleChips = chips.slice(0, 4)

  return (
    <div
      className={`relative flex items-center justify-center rounded-[28px] overflow-hidden ${className}`}
      style={{
        minHeight: 440,
        background: `linear-gradient(140deg, ${accent}06 0%, ${accent}02 60%, transparent 100%)`,
        border: `1px solid ${accent}0e`,
      }}
    >
      {/* Dot-grid background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${accent}22 1.5px, transparent 1.5px)`,
          backgroundSize: '30px 30px',
          opacity: 0.55,
        }}
      />

      {/* Corner floating chips from bullet content */}
      {visibleChips.map((chip, i) => (
        <div
          key={i}
          className={`absolute ${CORNER_POSITIONS[i]} flex items-center gap-1.5 px-2.5 py-1.5 rounded-full z-20`}
          style={{
            background: 'rgba(255,255,255,0.82)',
            border: `1px solid ${accent}20`,
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: `0 2px 8px rgba(15,23,42,0.07)`,
            maxWidth: 190,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
          <span
            className="text-[11px] font-semibold leading-none text-[#0a1628]/65 truncate"
          >
            {chip}
          </span>
        </div>
      ))}

      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}14 0%, transparent 68%)`,
        }}
      />

      {/* Outer slow-spinning dashed ring */}
      <div
        aria-hidden="true"
        className="absolute rounded-full animate-spin"
        style={{
          width: 264,
          height: 264,
          border: `1.5px dashed ${accent}30`,
          animationDuration: '22s',
          animationTimingFunction: 'linear',
        }}
      />

      {/* Inner counter-spinning dashed ring */}
      <div
        aria-hidden="true"
        className="absolute rounded-full animate-spin"
        style={{
          width: 206,
          height: 206,
          border: `1px dashed ${accent}20`,
          animationDuration: '15s',
          animationTimingFunction: 'linear',
          animationDirection: 'reverse',
        }}
      />

      {/* Central icon */}
      <div
        className="relative z-10 flex items-center justify-center rounded-[26px]"
        style={{
          width: 128,
          height: 128,
          background: 'white',
          border: `1.5px solid ${accent}22`,
          boxShadow: `0 12px 52px ${accent}20, 0 2px 12px rgba(15,23,42,0.06)`,
        }}
      >
        <FontAwesomeIcon icon={icon} style={{ fontSize: 54, color: accent }} />
      </div>
    </div>
  )
}
