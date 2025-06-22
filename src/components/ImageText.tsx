'use client'
import Image from 'next/image'
import { blurDataURL } from '@/constants/image'
import { useState } from 'react'

interface ImageTextSectionProps {
  _type: 'imageTextSection'
  _key: string
  image: {
    url: string
    alt: string
  }
  title?: string
  content: string
  layout?: 'image-left' | 'image-right'
  className?: string
}

export default function ImageTextSection({
  image,
  title,
  content,
  layout = 'image-left',
  className = ''
}: ImageTextSectionProps) {
  const isImageLeft = layout === 'image-left'
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className={`w-full lg:w-1/2 ${isImageLeft ? 'order-1' : 'order-2'}`}>
        <div 
          className="relative overflow-hidden rounded-lg shadow-lg 
                     cursor-pointer touch-manipulation"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={600}
            height={400}
            className={`w-full h-auto object-cover transition-transform duration-300 
                        ${isZoomed ? 'scale-110' : 'hover:scale-105'}`}
            placeholder="blur"
            blurDataURL={blurDataURL.generic}
          />
        </div>
      </div>

      <div className={`w-full lg:w-1/2 ${isImageLeft ? 'order-2' : 'order-1'}`}>
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        )}
        <p className="text-lg text-gray-700 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
      </div>
    </section>
  )
}
