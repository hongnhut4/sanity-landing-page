'use client'

import { useCarousel } from '@/hooks/useContent'
import Carousel from './Carousel'
import { memo } from 'react'
import { blurDataURL } from '@/constants/image'

const CarouselSkeleton = memo(function CarouselSkeleton() {
  return (
    <div className="relative w-full h-[800px]">
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-gray-200"
          style={{
            backgroundImage: `url('${blurDataURL}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
          }}
        />
        
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent pt-20 pb-10">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="h-12 md:h-16 bg-white/20 rounded-lg mb-4 mx-auto max-w-md animate-pulse" />
              <div className="h-6 bg-white/20 rounded-lg mb-6 mx-auto max-w-2xl animate-pulse" />
              <div className="h-12 w-32 bg-white/20 rounded-lg mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 rounded-full animate-pulse" />
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="w-2.5 h-2.5 bg-white/30 rounded-full animate-pulse" />
        ))}
      </div>
    </div>
  )
})

const CarouselSection = memo(function CarouselSection() {
  const { data, isLoading } = useCarousel()

  if (isLoading) return <CarouselSkeleton />
  if (!data?.slides?.length) return null

  return <Carousel slides={data.slides} />
})

export default CarouselSection
