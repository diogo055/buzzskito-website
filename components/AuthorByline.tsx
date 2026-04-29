import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

type Props = {
  datePublished: string
  dateModified?: string
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })

export default function AuthorByline({ datePublished, dateModified }: Props) {
  const updated = dateModified && dateModified !== datePublished
  return (
    <div className="flex items-center gap-3 py-4 border-y border-gray-200 my-6 text-sm text-gray-700">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white flex items-center justify-center font-bold flex-shrink-0" aria-hidden="true">
        A
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-brand-900">
          By{' '}
          <Link href={BUSINESS.author.url} className="hover:underline">
            {BUSINESS.author.name}
          </Link>
        </p>
        <p className="text-xs text-gray-600">
          {BUSINESS.author.role} ·{' '}
          {updated ? (
            <>
              Published {formatDate(datePublished)} · Updated {formatDate(dateModified!)}
            </>
          ) : (
            <>Published {formatDate(datePublished)}</>
          )}
        </p>
      </div>
    </div>
  )
}
