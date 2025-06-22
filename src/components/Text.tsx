'use client'

interface TextSectionProps {
  _type: 'textSection'
  _key: string
    title?: string
    content: string
    variant?: 'heading' | 'subheading' | 'body' | 'caption'
    alignment?: 'left' | 'center' | 'right'
    className?: string
  }
  
export default function TextSection({
    title,
    content,
    variant = 'body',
    alignment = 'left',
    className = ''
}: TextSectionProps) {
    const getVariantStyles = () => {
      switch (variant) {
        case 'heading':
          return 'text-4xl md:text-5xl font-bold text-gray-900'
        case 'subheading':
          return 'text-2xl md:text-3xl font-semibold text-gray-800'
        case 'body':
          return 'text-lg text-gray-700 leading-relaxed'
        case 'caption':
          return 'text-sm text-gray-600'
        default:
          return 'text-lg text-gray-700'
      }
    }
  
    const getAlignmentStyles = () => {
      switch (alignment) {
        case 'center':
          return 'text-center'
        case 'right':
          return 'text-right'
        default:
          return 'text-left'
      }
    }
  
    return (
    <section className={`py-12 ${getAlignmentStyles()} ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className={`${getVariantStyles()} mb-4`}>
            {title}
          </h2>
        )}
        <div className={`${variant === 'body' ? 'text-lg text-gray-700 leading-relaxed' : getVariantStyles()}`}>
          {content}
        </div>
      </div>
    </section>
    )
  }