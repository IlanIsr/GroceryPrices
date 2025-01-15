import Link from "next/link";

export default function AppPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Receipt Entry Card */}
            <Link 
              href="/app/receipt"
              className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-md">
                  <svg 
                    className="h-6 w-6 text-indigo-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">New Receipt</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Enter a new receipt with items and prices from your shopping trip.
                </p>
              </div>
              <span 
                className="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-indigo-500 transition-all duration-200" 
                aria-hidden="true"
              />
            </Link>

            {/* Additional feature cards can be added here */}
          </div>
        </div>
      </main>
    </div>
  );
}
