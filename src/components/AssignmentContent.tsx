'use client'
import { memo } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const CheckIcon = memo(function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
})

const Section = memo(function Section({ 
  title, 
  children, 
  icon 
}: { 
  title: string
  children: React.ReactNode
  icon: string
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  )
})

const RequirementItem = memo(function RequirementItem({ 
  title, 
  description,
  details 
}: { 
  title: string
  description: string
  details?: string[]
}) {
  return (
    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
      <CheckIcon />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        {details && (
          <ul className="space-y-1">
            {details.map((detail, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
})

const PerformanceMetric = memo(function PerformanceMetric({
  metric,
  value,
  target,
  status
}: {
  metric: string
  value: string
  target: string
  status: 'good' | 'warning' | 'excellent'
}) {
  const statusColors = {
    excellent: 'text-green-600 bg-green-50',
    good: 'text-blue-600 bg-blue-50',
    warning: 'text-yellow-600 bg-yellow-50'
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <h4 className="font-medium text-gray-900">{metric}</h4>
        <p className="text-sm text-gray-600">Target: {target}</p>
      </div>
      <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
        {value}
      </div>
    </div>
  )
})

const TechStackItem = memo(function TechStackItem({
  name,
  purpose,
  color
}: {
  name: string
  purpose: string
  color: string
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: color }}
      >
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{purpose}</p>
      </div>
    </div>
  )
})

const AssignmentContent = memo(function AssignmentContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Landing Page Project with Next.js, Sanity CMS, and Performance Optimizations
            </p>
          </div>

          <div className="space-y-8">
            <Section title="Project Requirements" icon="📋">
              <div className="space-y-4">
                <RequirementItem
                  title="Landing Page Components"
                  description="Build 6 essential components for a modern landing page"
                  details={[
                    "Navigation - Responsive navigation with mobile menu",
                    "Carousel - Auto-playing image slider with controls",
                    "Image Component - Optimized image display with hover effects",
                    "Text Component - Flexible text with multiple variants",
                    "Image & Text Component - Combined layouts with positioning",
                    "Footer - Complete footer with links and social media"
                  ]}
                />
                
                <RequirementItem
                  title="Technology Stack"
                  description="Use modern web technologies for optimal performance"
                  details={[
                    "Next.js 15 with App Router",
                    "Sanity CMS for content management",
                    "Tailwind CSS for styling",
                    "TypeScript for type safety",
                    "Vercel for deployment"
                  ]}
                />

                <RequirementItem
                  title="Content Management"
                  description="Implement dynamic content management system"
                  details={[
                    "Sanity Studio integration",
                    "Dynamic page structure",
                    "Image optimization",
                    "Real-time content updates"
                  ]}
                />
              </div>
            </Section>

            <Section title="Performance Optimizations" icon="⚡">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <PerformanceMetric
                  metric="Lighthouse Performance"
                  value="90-95"
                  target="> 85"
                  status="excellent"
                />
                <PerformanceMetric
                  metric="First Contentful Paint"
                  value="< 1.5s"
                  target="< 2.0s"
                  status="excellent"
                />
                <PerformanceMetric
                  metric="Largest Contentful Paint"
                  value="< 2.5s"
                  target="< 3.0s"
                  status="good"
                />
                <PerformanceMetric
                  metric="Time to Interactive"
                  value="< 3.0s"
                  target="< 4.0s"
                  status="good"
                />
              </div>

              <div className="space-y-4">
                <RequirementItem
                  title="React Query Optimization"
                  description="Intelligent caching and data fetching strategies"
                  details={[
                    "5-minute stale time for content caching",
                    "30-minute garbage collection time",
                    "Disabled window focus refetching",
                    "Smart retry mechanisms"
                  ]}
                />

                <RequirementItem
                  title="Image Optimization"
                  description="Next.js Image component with advanced optimizations"
                  details={[
                    "WebP and AVIF format support",
                    "Responsive image sizing",
                    "Lazy loading with priority flags",
                    "Blur placeholder for smooth loading"
                  ]}
                />

                <RequirementItem
                  title="Component Memoization"
                  description="React.memo and useCallback for render optimization"
                  details={[
                    "Memoized functional components",
                    "Optimized re-render prevention",
                    "Callback function memoization",
                    "Efficient prop comparison"
                  ]}
                />

                <RequirementItem
                  title="Server-Side Rendering"
                  description="SSR with data prefetching for faster initial loads"
                  details={[
                    "Pre-fetched data on server",
                    "Hydration boundary optimization",
                    "SEO-friendly metadata generation",
                    "Reduced client-side API calls"
                  ]}
                />
              </div>
            </Section>

            {/* Architecture Section */}
            <Section title="Project Architecture" icon="🏗️">
              <div className="space-y-4">
                <RequirementItem
                  title="Modular Component Structure"
                  description="Clean, reusable component architecture"
                  details={[
                    "Atomic design principles",
                    "Shared component library",
                    "TypeScript interfaces",
                    "Consistent prop patterns"
                  ]}
                />

                <RequirementItem
                  title="State Management"
                  description="React Query for server state and local state management"
                  details={[
                    "Centralized data fetching",
                    "Automatic background updates",
                    "Error boundary handling",
                    "Loading state management"
                  ]}
                />
              </div>
            </Section>

            <Section title="Technology Stack" icon="🛠️">
              <div className="grid md:grid-cols-2 gap-4">
                <TechStackItem
                  name="Next.js 15"
                  purpose="React framework with App Router"
                  color="#000000"
                />
                <TechStackItem
                  name="Sanity CMS"
                  purpose="Headless content management"
                  color="#F03E2F"
                />
                <TechStackItem
                  name="Tailwind CSS"
                  purpose="Utility-first CSS framework"
                  color="#06B6D4"
                />
                <TechStackItem
                  name="TypeScript"
                  purpose="Type-safe JavaScript"
                  color="#3178C6"
                />
                <TechStackItem
                  name="React Query"
                  purpose="Server state management"
                  color="#FF4154"
                />
                <TechStackItem
                  name="Vercel"
                  purpose="Deployment and hosting"
                  color="#000000"
                />
              </div>
            </Section>

            <Section title="Additional Features" icon="✨">
              <div className="space-y-4">
                <RequirementItem
                  title="About Me Page"
                  description="Personal profile page with tech stack showcase"
                  details={[
                    "Responsive profile layout",
                    "Interactive tech stack grid",
                    "LinkedIn integration",
                    "Professional experience display"
                  ]}
                />

                <RequirementItem
                  title="SEO Optimization"
                  description="Search engine optimization and social media integration"
                  details={[
                    "Dynamic metadata generation",
                    "Open Graph tags",
                    "Twitter Card support",
                    "Structured data markup"
                  ]}
                />

                <RequirementItem
                  title="Responsive Design"
                  description="Mobile-first design approach"
                  details={[
                    "Breakpoint-specific layouts",
                    "Touch-friendly interactions",
                    "Optimized mobile navigation",
                    "Flexible grid systems"
                  ]}
                />
              </div>
            </Section>

            <Section title="Deployment Status" icon="🚀">
              <div className="space-y-4">
                <RequirementItem
                  title="Vercel Deployment"
                  description="Production-ready deployment with CI/CD"
                  details={[
                    "Automatic deployments from Git",
                    "Preview deployments for PRs",
                    "Environment variable management",
                    "Custom domain support"
                  ]}
                />

                <RequirementItem
                  title="Performance Monitoring"
                  description="Real-time performance tracking"
                  details={[
                    "Vercel Analytics integration",
                    "Core Web Vitals monitoring",
                    "Error tracking and reporting",
                    "Performance budgets"
                  ]}
                />
              </div>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
})

export default AssignmentContent
