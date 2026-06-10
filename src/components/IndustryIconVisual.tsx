import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconDefinition
  accent: string
  chips?: string[]
  className?: string
}

export default function IndustryIconVisual({ icon, accent, className = '' }: Props) {
  const uid = useId().replace(/:/g, '')

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[28px] ${className}`}
      style={{
        minHeight: 440,
        background: `linear-gradient(150deg, ${accent}07 0%, ${accent}02 55%, transparent 100%)`,
        border: `1px solid ${accent}10`,
      }}
    >
      {/* ── Flowing arc illustration — no text, fully abstract ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Arc 1: left→right sweep */}
          <linearGradient id={`${uid}a`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={accent} stopOpacity="0"    />
            <stop offset="30%"  stopColor={accent} stopOpacity="0.28" />
            <stop offset="70%"  stopColor={accent} stopOpacity="0.20" />
            <stop offset="100%" stopColor={accent} stopOpacity="0"    />
          </linearGradient>
          {/* Arc 2: diagonal */}
          <linearGradient id={`${uid}b`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor={accent} stopOpacity="0.22" />
            <stop offset="50%"  stopColor={accent} stopOpacity="0.14" />
            <stop offset="100%" stopColor={accent} stopOpacity="0"    />
          </linearGradient>
          {/* Arc 3: counter-diagonal */}
          <linearGradient id={`${uid}c`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor={accent} stopOpacity="0.18" />
            <stop offset="60%"  stopColor={accent} stopOpacity="0.10" />
            <stop offset="100%" stopColor={accent} stopOpacity="0"    />
          </linearGradient>
          {/* Arc 4: vertical sweep */}
          <linearGradient id={`${uid}d`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor={accent} stopOpacity="0.16" />
            <stop offset="100%" stopColor={accent} stopOpacity="0"    />
          </linearGradient>
        </defs>

        {/* Arc 1 — wide horizontal sweep below icon */}
        <path
          d="M -20,230 C 80,180 160,110 280,130 C 340,138 380,170 420,160"
          fill="none"
          stroke={`url(#${uid}a)`}
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Arc 2 — diagonal from top-left curving to bottom-right */}
        <path
          d="M 10,-10 C 60,60 120,100 180,130 C 250,165 320,190 420,260"
          fill="none"
          stroke={`url(#${uid}b)`}
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Arc 3 — sweeping from top-right down to bottom-left */}
        <path
          d="M 420,20 C 360,60 300,80 240,120 C 180,158 120,200 -10,270"
          fill="none"
          stroke={`url(#${uid}c)`}
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Arc 4 — tall vertical sweep from top through left side */}
        <path
          d="M 55,-10 C 40,60 30,120 55,170 C 75,210 90,240 70,290"
          fill="none"
          stroke={`url(#${uid}d)`}
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Arc 5 — mirror vertical on right */}
        <path
          d="M 345,-10 C 360,60 370,120 345,170 C 325,210 310,240 330,290"
          fill="none"
          stroke={`url(#${uid}d)`}
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* ── Elegant accent nodes — sparse, non-uniform ── */}
        {/* Top-left */}
        <circle cx="58"  cy="44"  r="4.5" fill={accent} opacity="0.30" />
        <circle cx="58"  cy="44"  r="9"   fill="none" stroke={accent} strokeWidth="0.7" opacity="0.12" />

        {/* Top-right */}
        <circle cx="342" cy="38"  r="3.5" fill={accent} opacity="0.25" />
        <circle cx="342" cy="38"  r="7"   fill="none" stroke={accent} strokeWidth="0.6" opacity="0.10" />

        {/* Bottom-right */}
        <circle cx="352" cy="242" r="5"   fill={accent} opacity="0.28" />
        <circle cx="352" cy="242" r="10"  fill="none" stroke={accent} strokeWidth="0.7" opacity="0.11" />

        {/* Bottom-left */}
        <circle cx="50"  cy="236" r="3.5" fill={accent} opacity="0.22" />

        {/* Small accent dots along arcs */}
        <circle cx="160" cy="24"  r="2"   fill={accent} opacity="0.20" />
        <circle cx="280" cy="258" r="2.5" fill={accent} opacity="0.18" />
        <circle cx="378" cy="110" r="2"   fill={accent} opacity="0.18" />
        <circle cx="22"  cy="150" r="2"   fill={accent} opacity="0.18" />

        {/* Subtle short line accents */}
        <line x1="80"  y1="20"  x2="108" y2="20"  stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.18" />
        <line x1="292" y1="260" x2="320" y2="260" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.15" />
        <line x1="20"  y1="80"  x2="20"  y2="108" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.18" />
        <line x1="380" y1="172" x2="380" y2="200" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.15" />
      </svg>

      {/* ── Single slow-rotating ring ── */}
      <div
        aria-hidden="true"
        className="absolute rounded-full animate-spin"
        style={{
          width: 250,
          height: 250,
          border: `1px solid ${accent}22`,
          animationDuration: '28s',
          animationTimingFunction: 'linear',
        }}
      />

      {/* ── Soft radial glow behind icon ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}12 0%, transparent 65%)`,
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
          boxShadow: `0 12px 52px ${accent}1e, 0 2px 12px rgba(15,23,42,0.06)`,
        }}
      >
        <FontAwesomeIcon icon={icon} style={{ fontSize: 54, color: accent }} />
      </div>
    </div>
  )
}
