import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconDefinition
  accent: string
  chips?: string[]   // kept for API compat — not rendered
  className?: string
}

export default function IndustryIconVisual({ icon, accent, className = '' }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[28px] ${className}`}
      style={{
        minHeight: 440,
        background: `linear-gradient(140deg, ${accent}06 0%, ${accent}02 60%, transparent 100%)`,
        border: `1px solid ${accent}0e`,
      }}
    >
      {/* ── Network / node SVG — fills the full panel, no text ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Spoke lines from hub (200,140) to outer nodes ── */}
        {[
          [46, 34],  [200, 18], [354, 34],
          [370,140], [354,246], [200,262],
          [46, 246], [30, 140],
          [96, 72],  [304, 72], [96, 208], [304, 208],
        ].map(([x, y], i) => (
          <line
            key={`spoke-${i}`}
            x1="200" y1="140"
            x2={x} y2={y}
            stroke={accent}
            strokeWidth="0.6"
            opacity="0.18"
            strokeDasharray="4 6"
          />
        ))}

        {/* ── Cross-connections between outer nodes ── */}
        {[
          [46,34,  200,18], [200,18, 354,34],
          [354,34, 370,140],[370,140,354,246],
          [354,246,200,262],[200,262,46,246],
          [46,246, 30,140], [30,140, 46,34],
          [96,72,  304,72], [96,208, 304,208],
          [46,34,  96,72],  [354,34, 304,72],
          [46,246, 96,208], [354,246,304,208],
        ].map(([x1,y1,x2,y2], i) => (
          <line
            key={`edge-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={accent}
            strokeWidth="0.5"
            opacity="0.10"
          />
        ))}

        {/* ── Outer ring nodes ── */}
        {[
          { cx: 46,  cy: 34,  r: 5,   op: 0.45, pulse: true  },
          { cx: 200, cy: 18,  r: 3.5, op: 0.35, pulse: false },
          { cx: 354, cy: 34,  r: 5,   op: 0.45, pulse: false },
          { cx: 370, cy: 140, r: 4,   op: 0.40, pulse: true  },
          { cx: 354, cy: 246, r: 5,   op: 0.45, pulse: false },
          { cx: 200, cy: 262, r: 3.5, op: 0.35, pulse: false },
          { cx: 46,  cy: 246, r: 5,   op: 0.45, pulse: true  },
          { cx: 30,  cy: 140, r: 4,   op: 0.40, pulse: false },
        ].map(({ cx, cy, r, op, pulse }) => (
          <g key={`outer-${cx}-${cy}`}>
            {/* Outer halo ring */}
            <circle cx={cx} cy={cy} r={r + 5} fill="none" stroke={accent} strokeWidth="0.6" opacity={op * 0.35} />
            {/* Filled node */}
            <circle cx={cx} cy={cy} r={r} fill={accent} opacity={pulse ? undefined : op}>
              {pulse && (
                <animate attributeName="opacity" values={`${op};${op * 1.8};${op}`} dur="2.8s" repeatCount="indefinite" />
              )}
            </circle>
          </g>
        ))}

        {/* ── Mid-tier nodes ── */}
        {[
          { cx: 96,  cy: 72,  r: 3.5, op: 0.30 },
          { cx: 304, cy: 72,  r: 3.5, op: 0.30 },
          { cx: 96,  cy: 208, r: 3.5, op: 0.30 },
          { cx: 304, cy: 208, r: 3.5, op: 0.30 },
        ].map(({ cx, cy, r, op }) => (
          <g key={`mid-${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r={r + 4} fill="none" stroke={accent} strokeWidth="0.5" opacity={op * 0.4} />
            <circle cx={cx} cy={cy} r={r} fill={accent} opacity={op} />
          </g>
        ))}

        {/* ── Small decorative scatter dots ── */}
        {[
          [130, 44, 2], [270, 44, 1.5], [340, 105, 1.5],
          [340, 178, 2], [270, 238, 1.5], [130, 238, 2],
          [60, 178, 1.5], [60, 105, 2],
          [160, 88, 1.5], [240, 88, 1.5],
          [160, 196, 1.5], [240, 196, 1.5],
        ].map(([cx, cy, r], i) => (
          <circle key={`dot-${i}`} cx={cx} cy={cy} r={r} fill={accent} opacity="0.18" />
        ))}
      </svg>

      {/* ── Spinning dashed rings ── */}
      <div
        aria-hidden="true"
        className="absolute rounded-full animate-spin"
        style={{
          width: 258,
          height: 258,
          border: `1.5px dashed ${accent}30`,
          animationDuration: '22s',
          animationTimingFunction: 'linear',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full animate-spin"
        style={{
          width: 200,
          height: 200,
          border: `1px dashed ${accent}20`,
          animationDuration: '15s',
          animationTimingFunction: 'linear',
          animationDirection: 'reverse',
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}12 0%, transparent 68%)`,
        }}
      />

      {/* ── Central icon ── */}
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
