'use client'
import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAboutMe } from '@/hooks/useAboutMe'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { blurDataURL } from '@/constants/image'

const AboutMeSkeleton = memo(function AboutMeSkeleton() {
  return (
    <div className="animate-pulse max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex-shrink-0 mx-auto md:mx-0"></div>
        <div className="flex-1 space-y-4 w-full">
          <div className="h-6 md:h-8 bg-gray-200 rounded w-3/4 mx-auto md:mx-0"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto md:mx-0"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto md:mx-0"></div>
        </div>
      </div>
    </div>
  )
})

const ProfileSection = memo(function ProfileSection({
  name,
  title,
  profileImage,
  bio,
  linkedinUrl,
  experienceYears,
  experienceDescription
}: {
  name: string
  title: string
  profileImage: string
  bio: string
  linkedinUrl?: string
  experienceYears: string
  experienceDescription?: string
}) {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 96px, 128px"
              placeholder="blur"
              blurDataURL={blurDataURL.generic}
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            {name}
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            {title}
          </p>
          
          {linkedinUrl && (
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn Profile
            </Link>
          )}
        </div>
      </div>

      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center md:text-left">
          Experience
        </h2>
        
        <div className="bg-gray-50 rounded-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3 md:mb-4">
            <div className="text-xl md:text-2xl font-bold text-blue-600 text-center md:text-left">
              {experienceYears}
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
            {experienceDescription || bio}
          </p>
        </div>
      </div>
    </div>
  )
})

const TechStackGrid = memo(function TechStackGrid({ 
  techStack 
}: { 
  techStack: Array<{
    name: string
    icon?: string
    color: string
    category: string
  }> 
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 pb-8 md:pb-12">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">
        Tech Stack
      </h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group relative bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex-shrink-0">
                {tech.icon ? (
                  <div className="relative w-12 h-12 md:w-16 md:h-16">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 48px, 64px"
                    />
                  </div>
                ) : (
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
                  {tech.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

const AboutMeContent = memo(function AboutMeContent() {
  const { data, isLoading, error } = useAboutMe()

  if (isLoading) return <AboutMeSkeleton />
  if (error) return (
    <div className="p-4 md:p-8 text-center text-red-600">
      Error loading about me data
    </div>
  )
  if (!data) return (
    <div className="p-4 md:p-8 text-center text-gray-600">
      No data found
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16 md:pt-20">
        <ProfileSection
          name={data.name}
          title={data.title}
          profileImage={data.profileImage}
          bio={data.bio}
          linkedinUrl={data.linkedinUrl}
          experienceYears={data.experienceYears}
          experienceDescription={data.experienceDescription}
        />

        <TechStackGrid techStack={data.techStack} />
      </main>

      <Footer />
    </div>
  )
})

export default AboutMeContent
