import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconDefinition
  accent: string
  className?: string
}

export default function IndustryIconVisual({ icon, accent, className = '' }: Props) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ minHeight: 320 }}>
      <div className="relative flex items-center justify-center">

        {/* Soft radial background glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}10 0%, transparent 68%)`,
          }}
        />

        {/* Outer slow-spinning dashed ring */}
        <div
          className="absolute rounded-full animate-spin"
          style={{
            width: 172,
            height: 172,
            border: `1px dashed ${accent}20`,
            animationDuration: '20s',
            animationTimingFunction: 'linear',
          }}
        />

        {/* Inner counter-spinning dashed ring */}
        <div
          className="absolute rounded-full animate-spin"
          style={{
            width: 134,
            height: 134,
            border: `1px dashed ${accent}14`,
            animationDuration: '14s',
            animationTimingFunction: 'linear',
            animationDirection: 'reverse',
          }}
        />

        {/* Icon — clean rounded square */}
        <div
          className="relative z-10 flex items-center justify-center rounded-[22px]"
          style={{
            width: 92,
            height: 92,
            background: 'white',
            border: `1.5px solid ${accent}1e`,
            boxShadow: `0 6px 28px ${accent}16, 0 2px 8px rgba(15,23,42,0.05)`,
          }}
        >
          <FontAwesomeIcon icon={icon} style={{ fontSize: 38, color: accent }} />
        </div>

      </div>
    </div>
  )
}
