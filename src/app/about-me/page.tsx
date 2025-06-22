import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import AboutMeContent from '@/components/AboutMeContent'

// Pre-fetch data for SSR performance
async function prefetchAboutMe() {
  await queryClient.prefetchQuery({
    queryKey: ['aboutMe'],
    queryFn: async () => {
      const query = `*[_type == "aboutMe"][0] {
        name,
        title,
        "profileImage": profileImage.asset->url,
        bio,
        linkedinUrl,
        experienceYears,
        experienceDescription,
        "techStack": techStack[] {
          name,
          "icon": icon.asset->url,
          color,
          category
        },
        contact,
        seo
      }`
      
      return client.fetch(query, {}, { perspective: 'published' })
    }
  })

  return dehydrate(queryClient)
}

// Generate metadata for SEO with responsive viewport
export async function generateMetadata(): Promise<Metadata> {
  const query = `*[_type == "aboutMe"][0] {
    name,
    title,
    seo
  }`
  
  const data = await client.fetch(query, {}, { perspective: 'published' })
  
  return {
    title: data?.seo?.metaTitle || `About ${data?.name}` || 'About Me',
    description: data?.seo?.metaDescription || `Learn more about ${data?.name}, ${data?.title}` || 'Professional software developer',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
      title: data?.seo?.metaTitle || `About ${data?.name}`,
      description: data?.seo?.metaDescription || `Learn more about ${data?.name}`,
      type: 'profile',
      images: data?.profileImage ? [data.profileImage] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.seo?.metaTitle || `About ${data?.name}`,
      description: data?.seo?.metaDescription || `Learn more about ${data?.name}`
    }
  }
}

export default async function AboutMePage() {
  const dehydratedState = await prefetchAboutMe()

  return (
    <HydrationBoundary state={dehydratedState}>
      <AboutMeContent />
    </HydrationBoundary>
  )
}
