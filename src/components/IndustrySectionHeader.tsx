interface Props {
  heading: string
  intro: string
  className?: string
}

export default function IndustrySectionHeader({ heading, intro, className = '' }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="font-heading text-[#0a1628] mb-4">{heading}</h2>
      <p className="text-[#0a1628]/55 text-[15px] leading-[1.75]">{intro}</p>
    </div>
  )
}
