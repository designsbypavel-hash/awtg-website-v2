interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
  theme?: 'light' | 'dark'
  className?: string
}

export default function SectionHeader({
  eyebrow: _eyebrow,
  title,
  description,
  center = false,
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#0a1628]'
  const descColor  = theme === 'dark' ? 'text-white/60' : 'text-[#0a1628]/60'
  const align      = center ? 'text-center' : ''

  return (
    <div className={`${align} ${className}`}>
      <h2 className={`font-heading ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`${descColor} text-[16px] font-normal leading-[1.75] mt-4 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
