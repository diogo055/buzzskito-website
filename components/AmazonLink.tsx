import { amazonUrl } from '@/lib/amazon'

/**
 * The ONLY component that renders an Amazon link. SERVER component (no 'use
 * client') — there is deliberately no client-side URL construction or rewriting,
 * so what Amazon's crawler sees in the static HTML is exactly what ships.
 *
 * FAIL-CLOSED: when no tag is configured, amazonUrl() returns null and this
 * renders the children as plain text — never a bare Amazon URL, never href="#"
 * pointing at Amazon, never a data-* attribute containing an Amazon URL.
 *
 *   <AmazonLink search="summit mosquito dunks">Mosquito Dunks</AmazonLink>
 *   <AmazonLink asin="B000BQXH2S">See it on Amazon</AmazonLink>
 */
export default function AmazonLink({
  asin,
  search,
  children,
  className = '',
  tag,
}: {
  asin?: string
  search?: string
  children: React.ReactNode
  className?: string
  /** Optional per-cluster tracking ID (lib/amazon-clusters.ts). Overrides the default tag. */
  tag?: string
}) {
  const href = amazonUrl({ asin, search, tag })
  if (!href) {
    return <span className={className}>{children}</span>
  }
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
