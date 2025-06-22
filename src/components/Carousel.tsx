'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import Image from 'next/image'
import { blurDataURL } from '@/constants/image'

interface CarouselSlide {
  id: string
  image: string
  title?: string | null
  description?: string | null
  ctaText?: string | null
  ctaLink?: string | null
}

interface CarouselProps {
  slides: CarouselSlide[]
  autoPlay?: boolean
  interval?: number
}

const CarouselSlide = memo(function CarouselSlide({
  slide,
  isActive,
  priority
}: {
  slide: CarouselSlide
  isActive: boolean
  priority: boolean
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-all duration-500 ${
        isActive ? 'opacity-100 z-20' : 'opacity-0 z-10'
      }`}
    >
      <div className="relative w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${blurDataURL}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            opacity: imageLoaded ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
        
        <Image
          src={slide.image}
          alt={slide.title || 'Slide image'}
          fill
          sizes="100vw"
          priority={priority}
          className={`object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          quality={90}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
      </div>
      
      {imageLoaded && (slide.title || slide.description || (slide.ctaText && slide.ctaLink)) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent pt-20 pb-10 animate-fadeIn">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              {slide.title && (
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
              )}
              {slide.description && (
                <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto drop-shadow">
                  {slide.description}
                </p>
              )}
              {slide.ctaText && slide.ctaLink && (
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  {slide.ctaText}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

const Carousel = memo(function Carousel({ slides, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  if (!slides?.length) return null

  return (
    <div className="relative w-full h-[800px]">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
            priority={index === 0}
          />
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
})

export default Carousel