'use client'
import { usePage } from '@/hooks/useContent'
import Navigation from '@/components/Navigation'
import CarouselSection from '@/components/CarouselSection'
import TextSection from '@/components/Text'
import ImageSection from '@/components/Image'
import ImageTextSection from '@/components/ImageText'
import Footer from '@/components/Footer'
import { memo } from 'react'

const PageSections = memo(function PageSections() {
  const { data, isLoading } = usePage()
  
  if (isLoading) return <div className="min-h-screen" />
  if (!data?.sections) return null

  return (
    <>
      {data.sections.map((section) => {
        const key = section._key || Math.random().toString()
        
        switch (section._type) {
          case 'navigation':
            return section.refData ? (
              <Navigation 
                key={key}
                {...section.refData} 
              />
            ) : null

          case 'carousel':
            return section.refData ? (
              <CarouselSection 
                key={key}
                {...section.refData} 
              />
            ) : null

          case 'textSection':
            return (
              <TextSection
                key={key}
                _type={section._type}
                _key={key}
                title={section.title || ''}
                content={section.content || ''}
                variant={section.variant || 'body'}
                alignment={section.alignment || 'left'}
              />
            )

          case 'imageSection':
            return (
              <ImageSection
                key={key}
                _type={section._type}
                _key={key}
                image={{
                  url: section.image?.url || '',
                  alt: section.image?.alt || ''
                }}
              />
            )

          case 'imageTextSection':
            return (
              <ImageTextSection
                key={key}
                _type={section._type}
                _key={key}
                image={{
                  url: section.image?.url || '',
                  alt: section.image?.alt || ''
                }}
                title={section.title || ''}
                content={section.content || ''}
                layout={section.layout || 'image-left'}
              />
            )

          case 'footer':
            return section.refData ? (
              <Footer 
                key={key}
                {...section.refData} 
              />
            ) : null

          default:
            return null
        }
      })}
    </>
  )
})

export default PageSections
