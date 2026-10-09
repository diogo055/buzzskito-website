import type { Metadata } from 'next'
import GuidePage from '@/components/GuidePage'
import { guideMetadata, type Guide } from '@/lib/guides'
import data from '@/content/guides/where-do-cockroaches-come-from.json'

// North American guide (Oct 2026). The words live in content/guides/where-do-cockroaches-come-from.json: edit them there.
// This file only connects that content to the shared template (components/GuidePage.tsx).
const guide = data as unknown as Guide

export const metadata: Metadata = guideMetadata(guide)

export default function WhereDoCockroachesComeFromGuidePage() {
  return <GuidePage guide={guide} />
}
