type InsightVisualProps = {
  title: string
  topic?: string
  index?: number
  className?: string
}

const palettes = [
  { base: '#0a1628', mid: '#228DC1', glow: '#7ac4e0', accent: '#f4b942' },
  { base: '#102f45', mid: '#2b8a7e', glow: '#a7f3d0', accent: '#60a5fa' },
  { base: '#172033', mid: '#6d5bd0', glow: '#c4b5fd', accent: '#38bdf8' },
  { base: '#13251f', mid: '#22a06b', glow: '#86efac', accent: '#f59e0b' },
  { base: '#261a2f', mid: '#b45379', glow: '#f9a8d4', accent: '#7dd3fc' },
]

function hashValue(value: string) {
  return Array.from(value).reduce((acc, char) => acc + char.charCodeAt(0), 0)
}

export default function InsightVisual({ title, topic = 'AWTG Insight', index = 0, className = '' }: InsightVisualProps) {
  const palette = palettes[(hashValue(title) + index) % palettes.length]
  const shortTopic = topic.length > 22 ? `${topic.slice(0, 20)}...` : topic
  const nodes = Array.from({ length: 7 }, (_, i) => ({
    left: 12 + ((hashValue(title) + i * 17) % 76),
    top: 18 + ((hashValue(topic) + i * 23) % 60),
    size: i % 3 === 0 ? 10 : 7,
  }))

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background:
          `radial-gradient(circle at 24% 22%, ${palette.glow}66 0, transparent 28%), ` +
          `radial-gradient(circle at 80% 18%, ${palette.accent}44 0, transparent 24%), ` +
          `linear-gradient(135deg, ${palette.base} 0%, ${palette.mid} 56%, #eef8fc 130%)`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.62) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.62) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/35" />
      <div className="absolute -right-8 top-10 h-40 w-40 rounded-full border border-white/25" />
      <div className="absolute -left-16 bottom-[-72px] h-60 w-60 rounded-full border border-white/25" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 260" preserveAspectRatio="none">
        <path d="M-20 195 C70 120 132 232 212 136 S332 58 426 104" fill="none" stroke="rgba(255,255,255,.42)" strokeWidth="1.6" />
        <path d="M-18 78 C72 42 132 122 204 84 S318 25 418 52" fill="none" stroke="rgba(255,255,255,.24)" strokeWidth="1" />
        <path d="M72 264 C118 158 172 152 222 96 S312 28 390 -12" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1.2" />
      </svg>

      {nodes.map((node, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.75)]"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            width: node.size,
            height: node.size,
            opacity: 0.68 + (i % 3) * 0.1,
          }}
        />
      ))}

      <div className="absolute left-6 top-6 right-6 flex items-center justify-between gap-3">
        <span className="inline-flex max-w-[72%] items-center bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0a1628] shadow-sm">
          {shortTopic}
        </span>
        <span className="h-9 w-9 border border-white/50 bg-white/15 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="mb-4 flex items-end gap-1.5">
          {[42, 58, 34, 72, 50].map((height, i) => (
            <span key={i} className="w-2 bg-white/70" style={{ height }} />
          ))}
        </div>
        <div className="h-px w-full bg-white/35" />
        <div className="mt-3 h-1.5 w-24 bg-white/65" />
      </div>
    </div>
  )
}
