import type { ReactNode } from 'react'
import FigureZoom from './FigureZoom'
import { BUSINESS } from '@/lib/constants'

/** The licence for diagrams we author (owner, Oct 24, 2026); terms and how to credit at /image-use. */
export const ORIGINAL_LICENSE = 'https://creativecommons.org/licenses/by/4.0/'

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
  /**
   * The licence a third-party photo is used under, shown after the credit and linked when it
   * has a deed (CC BY asks for a link to the licence). In the schema it becomes `license`, and
   * creditHref becomes `acquireLicensePage`. Set by <Photo>; omit for original diagrams.
   */
  license?: { name: string; href?: string }
  /**
   * The ImageObject's rights fields (creditText, creator, copyrightNotice, license,
   * acquireLicensePage), built from the photo's ledger record by photoRights() in lib/photos.ts.
   * Set by <Photo>; replaces the fields worked out from `credit` / `license`. Schema only.
   */
  rights?: Record<string, unknown>
  /** Serve the file as it is (pre-sized WebP photos), skipping the image optimizer. */
  unoptimized?: boolean
  /** A caption that needs links or emphasis. Rendered instead of `caption`, which stays the schema text. */
  captionNode?: ReactNode
}

export default function Figure({
  src, alt, caption, width, height, credit, creditHref, priority = false,
  siteUrl = 'https://buzzskito.ca', license, rights, unoptimized = false, captionNode,
}: Props) {
  // A portrait photo at full column width is taller than a phone screen: keep it narrower.
  const portrait = height > width * 1.1
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${siteUrl}${src}`,
    url: `${siteUrl}${src}`,
    caption,
    description: alt,
    width,
    height,
    ...(rights ?? (credit
      ? license
        ? { creditText: credit, ...(license.href && { license: license.href }), ...(creditHref && { acquireLicensePage: creditHref }) }
        // a source page is where the licence is found, not the licence itself
        : { creditText: credit, ...(creditHref && { acquireLicensePage: creditHref }) }
      // an original diagram (data/image-licenses.json: licence "original", author BuzzSkito).
      // Owner, Oct 24, 2026: our diagrams are free to reuse with credit and a link (CC BY 4.0,
      // terms at /image-use).
      : {
          creator: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: BUSINESS.legalName },
          creditText: BUSINESS.name,
          copyrightNotice: `© ${BUSINESS.legalName}`,
          license: ORIGINAL_LICENSE,
          acquireLicensePage: `${siteUrl}/image-use`,
        })),
  }

  return (
    <figure className={portrait ? 'not-prose my-8 mx-auto max-w-sm' : 'not-prose my-8'}>
      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden">
        <FigureZoom src={src} alt={alt} width={width} height={height} priority={priority} unoptimized={unoptimized} />
      </div>
      <figcaption className="mt-2 text-sm text-gray-600 leading-relaxed">
        {captionNode ?? caption}
        {credit && (
          <span className="block mt-1 text-xs text-gray-500">
            {license ? 'Photo' : 'Image'}:{' '}
            {creditHref ? (
              <a href={creditHref} rel="nofollow noopener noreferrer" target="_blank" className="underline hover:text-gray-700">
                {credit}
              </a>
            ) : (
              credit
            )}
            {license && (license.href ? (
              <>, <a href={license.href} rel="license nofollow noopener noreferrer" target="_blank" className="underline hover:text-gray-700">{license.name}</a></>
            ) : (
              <>, {license.name}</>
            ))}
          </span>
        )}
        {!credit && !rights && (
          <span className="block mt-1 text-xs text-gray-500">
            Diagram: BuzzSkito &middot;{' '}
            <a href="/image-use" className="underline hover:text-gray-700">free to reuse with credit</a>
            {' '}(<a href={ORIGINAL_LICENSE} rel="license nofollow noopener noreferrer" target="_blank" className="underline hover:text-gray-700">CC BY 4.0</a>)
          </span>
        )}
      </figcaption>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </figure>
  )
}
