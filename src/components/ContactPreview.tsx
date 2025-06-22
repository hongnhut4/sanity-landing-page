'use client'

interface ContactPreviewProps {
  document: {
    displayed: {
      name?: string
      title?: string
      contact?: {
        email?: string
        phone?: string
        location?: string
      }
    }
  }
}

export default function ContactPreview({ document }: ContactPreviewProps) {
  const data = document?.displayed || {}
  const contact = data.contact || {}

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Contact Preview</h2>
      <div className="bg-blue-600 text-white p-4 rounded max-w-sm">
        <h3 className="font-bold">{data.name || 'Your Name'}</h3>
        <p className="text-blue-100">{data.title || 'Your Title'}</p>
        <div className="mt-2 space-y-1 text-sm">
          {contact.email && <div>📧 {contact.email}</div>}
          {contact.phone && <div>📱 {contact.phone}</div>}
          {contact.location && <div>📍 {contact.location}</div>}
        </div>
      </div>
    </div>
  )
}
