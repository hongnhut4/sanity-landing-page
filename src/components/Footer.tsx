import Link from 'next/link'

interface FooterProps {
  companyName?: string
  description?: string
  links?: Array<{
    title: string
    href: string
  }>
  socialLinks?: Array<{
    name: string
    href: string
    icon: string
  }>
}

export default function Footer({
  companyName = 'Company Name',
  description = 'Building amazing digital experiences with modern technology.',
  links = [],
  socialLinks = []
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {description}
            </p>
            
            {socialLinks?.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-6 h-6 text-white" dangerouslySetInnerHTML={{ __html: social.icon }} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: lethanhhongnhut@gmail.companyName</p>
              <p>Phone: +84 969 224 888</p>
              <p>Address: 43/3 Cuu Long, Tan Binh, Ho Chi Minh City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}