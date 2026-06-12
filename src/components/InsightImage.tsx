import { insightFallbackImage } from '@/lib/insightImages'

type InsightImageProps = {
  src: string
  alt: string
  className?: string
}

export default function InsightImage({ src, alt, className = '' }: InsightImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(event) => {
        const image = event.currentTarget
        if (image.src.endsWith(insightFallbackImage)) return
        image.src = insightFallbackImage
      }}
    />
  )
}
