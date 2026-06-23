import { Link } from 'react-router-dom'

export default function DigitalPlatformsIBecomePage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

      {/* Diagonal dot-grid background pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ibecomeGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ibecomeGrid)" />
        </svg>
      </div>

      {/* Diagonal connecting lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.10 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ibecomeLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ibecomeLines)" />
        </svg>
      </div>

      {/* Decorative + crosses */}
      {[{ top: '18%', left: '5%' }, { top: '55%', left: '3%' }, { top: '75%', left: '8%' }, { top: '32%', left: '44%' }].map((pos, i) => (
        <div key={i} className="absolute pointer-events-none select-none text-[#228DC1]"
          style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.30, fontWeight: 300, lineHeight: 1 }}>+</div>
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 72% 35%, rgba(34,141,193,0.14) 0, transparent 55%)' }} />

      <div className="relative mx-auto max-w-[1320px] px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="font-serif-display mb-3 leading-[1.02] text-[#0a1628]" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              iBecome
            </h1>
            <p className="mb-10 max-w-xl text-[16px] font-normal leading-[1.7] text-[#0a1628]/60">
              A platform for jobs, apprenticeships and local opportunity. Full page content is coming soon.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1a6e99]"
              >
                Talk to us
              </Link>
              <Link
                to="/digital-platforms"
                className="inline-flex items-center gap-2 rounded-lg border border-[#228DC1] px-7 py-3.5 text-[14px] font-semibold text-[#1a7aab] transition-colors hover:bg-[#228DC1] hover:text-white"
              >
                Back to Digital Platforms
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[760px] overflow-hidden rounded-2xl border border-gray-200 bg-white"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(10,22,40,0.20)) drop-shadow(0 8px 20px rgba(10,22,40,0.10))' }}
            >
              <img
                src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80"
                alt="iBecome"
                className="w-full h-auto block"
                style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
