import type { Metadata } from 'next'
import Link from 'next/link'
import { CITIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Page Not Found | BuzzSkito',
  robots: { index: false, follow: true },
}

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-7xl mb-6" aria-hidden="true">🦟</div>
        <h1 className="text-4xl font-extrabold text-brand-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8 text-lg">
          This page doesn't exist or may have moved. Here are some helpful links:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/" className="inline-block bg-brand-700 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
            Go to Homepage
          </Link>
          <Link href="/mosquito-control" className="inline-block border border-brand-300 text-brand-700 hover:bg-brand-50 font-bold px-6 py-3 rounded-full transition-colors">
            Mosquito Control
          </Link>
          <Link href="/tick-control" className="inline-block border border-amber-300 text-amber-700 hover:bg-amber-50 font-bold px-6 py-3 rounded-full transition-colors">
            Tick Control
          </Link>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide font-semibold">Service areas</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {CITIES.map((c) => (
              <Link key={c.name} href={c.mosquitoSlug} className="text-sm text-brand-700 hover:underline bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
