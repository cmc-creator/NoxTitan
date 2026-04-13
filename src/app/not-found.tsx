import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-stone-900 to-gray-900">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-6">Page Not Found</h2>
        <p className="text-stone-300 mb-8 max-w-md mx-auto">
          Some features of NyxTitan require a server environment and cannot be accessed in this static deployment.
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
          >
            Return Home
          </Link>
          <div className="text-stone-400 text-sm mt-6">
            <p>For the full NyxTitan experience with all features,</p>
            <p>deploy to a platform that supports Next.js server features (Vercel, Netlify, etc.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}


