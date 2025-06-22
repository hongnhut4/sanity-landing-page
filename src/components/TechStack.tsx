'use client'
import { memo } from 'react'
import Image from 'next/image'
import { blurDataURL } from '@/constants/image'

interface TechItem {
  name: string
  icon?: string
  color: string
  category: string
}

interface TechStackProps {
  techStack: TechItem[]
}

const TechItem = memo(function TechItem({ 
  tech, 
  index 
}: { 
  tech: TechItem
  index: number 
}) {
  return (
    <div 
      className="group relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center space-y-3">
        {tech.icon ? (
          <div className="relative w-12 h-12">
            <Image
              src={tech.icon}
              alt={`${tech.name} icon`}
              fill
              className="object-contain"
              sizes="48px"
              loading="lazy"
              placeholder="blur"
              blurDataURL={blurDataURL.generic}
            />
          </div>
        ) : (
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: tech.color }}
          >
            {tech.name.charAt(0)}
          </div>
        )}
        
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 text-sm">{tech.name}</h3>
          <span 
            className="text-xs px-2 py-1 rounded-full text-white mt-1 inline-block"
            style={{ backgroundColor: tech.color }}
          >
            {tech.category}
          </span>
        </div>
      </div>
    </div>
  )
})

const TechStack = memo(function TechStack({ techStack }: TechStackProps) {
  const groupedTech = techStack.reduce((acc, tech) => {
    const category = tech.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(tech)
    return acc
  }, {} as Record<string, TechItem[]>)

  const categoryOrder = ['frontend', 'backend', 'database', 'cloud', 'testing', 'mobile']
  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend', 
    database: 'Database',
    cloud: 'Cloud/DevOps',
    testing: 'Testing',
    mobile: 'Mobile'
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        <div className="space-y-12">
          {categoryOrder.map(category => {
            const techs = groupedTech[category]
            if (!techs?.length) return null

            return (
              <div key={category} className="animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {techs.map((tech, index) => (
                    <TechItem 
                      key={tech.name} 
                      tech={tech} 
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default TechStack
