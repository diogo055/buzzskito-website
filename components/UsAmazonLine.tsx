import AmazonLink from '@/components/AmazonLink'
import { AMAZON_US_ENABLED } from '@/lib/amazon'

/**
 * One fixed amazon.com line for American readers of a Canadian amazon.ca page (owner, Nov 4, 2026),
 * placed directly under the page's Amazon disclosure. Only on the pages listed in
 * lib/amazon-dual-store.json, where it repeats the page's own pick. Every visitor sees the same
 * two stores; nothing is switched by country (the July 2026 rejection). SERVER component,
 * fail-closed: renders nothing without the US tag. Analytics placement: "UsLine".
 */
export default function UsAmazonLine({ name, search }: { name: string; search: string }) {
  if (!AMAZON_US_ENABLED || !search.trim()) return null
  return (
    <p className="not-prose my-2 text-sm text-gray-600">
      Shopping in the US?{' '}
      <AmazonLink search={search} store="com" component="UsLine" className="font-semibold text-amber-800 underline hover:text-amber-900">
        {name} on Amazon.com →
      </AmazonLink>
    </p>
  )
}
