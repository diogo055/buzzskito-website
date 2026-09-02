import Image from 'next/image'

/**
 * A captioned, schema-annotated figure for identification and comparison content.
 *
 * WHY THIS EXISTS
 * Visual-identification queries ("what does a spider bite look like", "mouse poop",
 * "tick vs bed bug") cannot be won without an image, and AI Overview sitelinks in
 * this niche carry image thumbnails. Until Sep 2026 not one of the 358 blog pages
 * contained a single image.
 *
 * LICENSING IS NOT OPTIONAL. Every asset must carry a licence recorded in
 * data/image-licenses.json. Original diagrams we author are `licence="original"`
 * and render no attribution line; third-party assets MUST pass `credit` and the
 * attribution renders visibly in the caption. Never use an image to depict a
 * condition it does not show.
 *
 * ImageObject schema is emitted per figure so the image is associated with the
 * page entity rather than inheriting the sitewide og-image.jpg that all 358 blog
 * posts currently declare.
 */

type Props = {
  /** Path under /public, e.g. "/diagrams/tick-vs-bed-bug-size.svg" */
  src: string
  /** Descriptive alt text containing the target entity. Required. */
  alt: string
  /** Visible caption below the figure. Required — it is the reader-facing context. */
  caption: string
  width: number
  height: number
  /**
   * Visible attribution for third-party assets, e.g. "CDC/PHIL #4407 (public domain)".
   * Omit ONLY for original diagrams authored for this site.
   */
  credit?: string
  /** Optional source URL for the credit line. */
  creditHref?: string
  /** Set true for the first figure above the fold so it is not lazy-loaded. */
  priority?: boolean
  /** Absolute site URL, used for ImageObject schema. */
  siteUrl?: string
}

export default function Figure({
  src, alt, caption, width, height, credit, creditHref, priority = false,
  siteUrl = 'https://buzzskito.ca',
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${siteUrl}${src}`,
    url: `${siteUrl}${src}`,
    caption,
    description: alt,
    width,
    height,
    ...(credit
      ? { creditText: credit, ...(creditHref && { license: creditHref }) }
      : { creator: { '@type': 'Organization', '@id': `${siteUrl}/#organization` } }),
  }

  return (
    <figure className="not-prose my-8">
      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full h-auto"
        />
      </div>
      <figcaption className="mt-2 text-sm text-gray-600 leading-relaxed">
        {caption}
        {credit && (
          <span className="block mt-1 text-xs text-gray-500">
            Image:{' '}
            {creditHref ? (
              <a href={creditHref} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gray-700">
                {credit}
              </a>
            ) : (
              credit
            )}
          </span>
        )}
      </figcaption>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </figure>
  )
}
