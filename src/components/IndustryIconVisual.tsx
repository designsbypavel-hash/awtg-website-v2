import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconDefinition
  accent: string
  className?: string
}

export default function IndustryIconVisual({ icon, accent, className = '' }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ minHeight: 420 }}
    >
      {/* Broad ambient glow filling the column */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}0d 0%, transparent 68%)`,
        }}
      />

      {/* Outer slow-spinning dashed ring */}
      <div
        className="absolute rounded-full animate-spin"
        style={{
          width: 264,
          height: 264,
          border: `1px dashed ${accent}22`,
          animationDuration: '22s',
          animationTimingFunction: 'linear',
        }}
      />

      {/* Inner counter-spinning dashed ring */}
      <div
        className="absolute rounded-full animate-spin"
        style={{
          width: 206,
          height: 206,
          border: `1px dashed ${accent}15`,
          animationDuration: '15s',
          animationTimingFunction: 'linear',
          animationDirection: 'reverse',
        }}
      />

      {/* Icon — larger rounded square */}
      <div
        className="relative z-10 flex items-center justify-center rounded-[26px]"
        style={{
          width: 128,
          height: 128,
          background: 'white',
          border: `1.5px solid ${accent}20`,
          boxShadow: `0 10px 48px ${accent}1c, 0 2px 12px rgba(15,23,42,0.06)`,
        }}
      >
        <FontAwesomeIcon icon={icon} style={{ fontSize: 54, color: accent }} />
      </div>
    </div>
  )
}
