import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'

interface TechStack {
  name: string
  icon?: string
  color: string
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'testing' | 'mobile'
}

interface ContactInfo {
  email?: string
  phone?: string
  location?: string
}

interface SEO {
  metaTitle?: string
  metaDescription?: string
}

export interface AboutMeData {
  name: string
  title: string
  profileImage: string
  bio: string
  linkedinUrl?: string
  experienceYears: string
  experienceDescription?: string
  techStack: TechStack[]
  contact?: ContactInfo
  seo?: SEO
}

export function useAboutMe() {
  return useQuery<AboutMeData>({
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
      
      const data = await client.fetch(query, {}, { 
        perspective: 'published',
        next: { revalidate: 3600 } // 1 hour
      })
      
      return data
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
    gcTime: 1000 * 60 * 60,    // 1 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2
  })
}
