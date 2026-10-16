import type { Metadata } from 'next'
import GuidePage from '@/components/GuidePage'
import { guideMetadata, type Guide } from '@/lib/guides'
import data from '@/content/guides/asian-lady-beetles.json'

// North American guide (Oct 2026). The words live in content/guides/asian-lady-beetles.json: edit them there.
// This file only connects that content to the shared template (components/GuidePage.tsx).
const guide = data as unknown as Guide

export const metadata: Metadata = guideMetadata(guide)

export default function AsianLadyBeetlesGuidePage() {
  return <GuidePage guide={guide} />
}
