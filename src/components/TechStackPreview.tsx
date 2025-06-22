'use client'

interface TechStackPreviewProps {
  document: {
    displayed: {
      techStack?: Array<{
        name: string
        category: string
        color: string
      }>
    }
  }
}

export default function TechStackPreview({ document }: TechStackPreviewProps) {
  const techStack = document?.displayed?.techStack || []
  
  const grouped = techStack.reduce((acc, tech) => {
    const category = tech.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(tech)
    return acc
  }, {} as Record<string, typeof techStack>)

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Tech Stack Preview</h2>
      {Object.entries(grouped).map(([category, techs]) => (
        <div key={category} className="mb-4">
          <h3 className="font-semibold capitalize">{category} ({techs.length})</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {techs.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded text-white text-sm"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
