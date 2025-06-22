import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'

interface NavigationData {
  title: string
  logo: string
  menuItems: Array<{ title: string; href: string }>
}

interface CarouselData {
  title: string
  slides: Array<{
    id: string
    image: string
    title?: string
    description?: string
    ctaText?: string
    ctaLink?: string
  }>
}

interface FooterData {
  companyName: string
  description: string
  links: Array<{ title: string; href: string }>
  socialLinks: Array<{ name: string; href: string; icon: string }>
}

interface ImageTextData {
  image: {
    src: string
    alt: string
  }
  title?: string
  content: string
  layout?: 'image-left' | 'image-right'
}

interface ImageData {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

interface TextData {
  title?: string
  content: string
  variant?: 'heading' | 'subheading' | 'body' | 'caption'
  alignment?: 'left' | 'center' | 'right'
}

interface PageSection {
  _type: string
  _key: string
  _ref?: string
  refData?: {
    _type: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
  title?: string
  content?: string
  variant?: 'heading' | 'subheading' | 'body' | 'caption'
  alignment?: 'left' | 'center' | 'right'
  image?: {
    url: string
    alt: string
  }
  layout?: 'image-left' | 'image-right'
}

interface PageData {
  title: string
  sections: PageSection[]
}

export function useNavigation() {
  return useQuery<NavigationData>({
    queryKey: ['navigation'],
    queryFn: async () => {
      const query = `*[_type == "navigation"][0] {
        title,
        "logo": logo.asset->url,
        menuItems[]
      }`
      return client.fetch(query)
    }
  })
}

export function useCarousel() {
  return useQuery<CarouselData>({
    queryKey: ['carousel'],
    queryFn: async () => {
      const query = `*[_type == "carousel"][0] {
        title,
        "slides": slides[] {
          "id": _key,
          "image": image.asset->url,
          title,
          description,
          ctaText,
          ctaLink
        }
      }`
      return client.fetch(query)
    }
  })
}

export function useFooter() {
  return useQuery<FooterData>({
    queryKey: ['footer'],
    queryFn: async () => {
      const query = `*[_type == "footer"][0]`
      return client.fetch(query)
    }
  })
}

export function useImageText(id: string) {
  return useQuery<ImageTextData>({
    queryKey: ['imageText', id],
    queryFn: async () => {
      const query = `*[_type == "imageTextComponent" && _id == $id][0] {
        "image": {
          "src": image.asset->url,
          "alt": image.alt
        },
        title,
        content,
        layout
      }`
      return client.fetch(query, { id })
    }
  })
}

export function useImage(id: string) {
  return useQuery<ImageData>({
    queryKey: ['image', id],
    queryFn: async () => {
      const query = `*[_type == "imageComponent" && _id == $id][0] {
        "src": image.asset->url,
        "alt": alt,
        width,
        height,
        priority
      }`
      return client.fetch(query, { id })
    }
  })
}

export function useText(id: string) {
  return useQuery<TextData>({
    queryKey: ['text', id],
    queryFn: async () => {
      const query = `*[_type == "textComponent" && _id == $id][0] {
        title,
        content,
        variant,
        alignment
      }`
      return client.fetch(query, { id })
    }
  })
}

export function usePage() {
  return useQuery<PageData>({
    queryKey: ['page'],
    queryFn: async () => {
      const query = `*[_type == "page" && slug.current == "home"][0] {
        title,
        "sections": sections[] {
          _type,
          _key,
          _ref,
          "refData": @-> {
            _type,
            // Navigation fields
            title,
            "logo": logo.asset->url,
            menuItems[],
            // Carousel fields
            "slides": slides[] {
              "id": _key,
              "image": image.asset->url,
              title,
              description,
              ctaText,
              ctaLink
            },
            // Footer fields
            companyName,
            description,
            links,
            socialLinks
          },
          // Inline components
          title,
          content,
          variant,
          alignment,
          "image": {
            "url": image.asset->url,
            "alt": alt
          },
          layout
        }
      }`
      
      return client.fetch(query, {}, { 
        perspective: 'published'
      })
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30,   // 30 minutes  
    retry: 2
  })
}
