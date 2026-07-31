import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

type Props = {
  datePublished: string
  dateModified?: string
  /** Render the byline in French (for fr-CA pages). */
  fr?: boolean
}

const formatDate = (iso: string, fr = false) =>
  new Date(iso).toLocaleDateString(fr ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' })

export default function AuthorByline({ datePublished, dateModified, fr = false }: Props) {
  const updated = dateModified && dateModified !== datePublished
  return (
    <div className="flex items-center gap-3 py-4 border-y border-gray-200 my-6 text-sm text-gray-700">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white flex items-center justify-center font-bold flex-shrink-0" aria-hidden="true">
        A
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-brand-900">
          {fr ? 'Par ' : 'By '}
          <Link href={BUSINESS.author.url} className="hover:underline">
            {BUSINESS.author.name}
          </Link>
        </p>
        <p className="text-xs text-gray-600">
          {fr ? 'Fondateur et exploitant, BuzzSkito' : BUSINESS.author.role} ·{' '}
          {updated ? (
            <>
              {fr ? 'Publié le ' : 'Published '}{formatDate(datePublished, fr)} · {fr ? 'mis à jour le ' : 'Updated '}{formatDate(dateModified!, fr)}
            </>
          ) : (
            <>{fr ? 'Publié le ' : 'Published '}{formatDate(datePublished, fr)}</>
          )}
        </p>
      </div>
    </div>
  )
}
