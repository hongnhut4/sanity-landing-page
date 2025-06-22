// page.tsx
import { client } from '@/sanity/lib/client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import PageSections from '@/components/PageSections'

async function prefetchData() {
  await queryClient.prefetchQuery({
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
      return client.fetch(query, {}, { perspective: 'published' })
    }
  })

  return dehydrate(queryClient)
}

export default async function Home() {
  const dehydratedState = await prefetchData()

  return (
    <HydrationBoundary state={dehydratedState}>
      <PageSections />
    </HydrationBoundary>
  )
}