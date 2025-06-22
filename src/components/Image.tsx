'use client'
import Image from 'next/image'
import { memo } from 'react'
import { blurDataURL } from '@/constants/image'

interface ImageSectionProps {
  _type: 'imageSection'
  _key: string
  image: {
    url: string
    alt: string
  }
  width?: number
  height?: number
  priority?: boolean
  className?: string
}


const ImageSection = memo(function ImageSection({
  image,
  width = 800,
  height = 600,
  priority = false,
  className = ''
}: ImageSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={image.url}
            alt={image.alt}
            width={width}
            height={height}
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            priority={priority}
            quality={85}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            blurDataURL={blurDataURL.generic}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
})

export default ImageSection