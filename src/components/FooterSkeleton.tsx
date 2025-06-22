export default function FooterSkeleton() {
  return (
    <div className="bg-gray-900 text-white animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="h-8 bg-gray-700 rounded w-48 mb-4"></div>
            <div className="h-20 bg-gray-700 rounded max-w-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
