'use client'

import { useState, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useNavigation } from '@/hooks/useContent'
import { blurDataURL } from '@/constants/image'

const NavigationSkeleton = memo(function NavigationSkeleton() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="h-8 w-28 bg-gray-200 rounded"></div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
})

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { data, isLoading } = useNavigation()

  if (isLoading) return <NavigationSkeleton />
  if (!data) return null

  const { logo, menuItems = [] } = data


  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {logo && (
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL.generic}
                />
              </Link>
            )}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

export default Navigation