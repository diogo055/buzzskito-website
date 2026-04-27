'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    google: any
    initGoogleMaps?: () => void
  }
}

export type ParsedAddress = {
  formatted: string
  street: string | null
  city: string | null
  neighbourhood: string | null
  province: string | null
  postalCode: string | null
  country: string | null
  lat: number | null
  lng: number | null
}

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

type Props = {
  id?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  onSelect?: (parsed: ParsedAddress) => void
  placeholder?: string
  className?: string
}

let scriptLoadPromise: Promise<void> | null = null

function loadGoogleMaps(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject('SSR')
  if (window.google?.maps?.places) return Promise.resolve()
  if (!GOOGLE_MAPS_KEY) return Promise.reject('No API key')
  if (scriptLoadPromise) return scriptLoadPromise

  scriptLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    // Note: not using `loading=async` because we use the legacy
    // google.maps.places.Autocomplete constructor which needs the full
    // library available synchronously after onload.
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places&v=weekly`
    script.async = true
    script.defer = true
    script.onload = () => {
      // Belt-and-suspenders: wait until places API is actually attached
      const start = Date.now()
      const check = () => {
        if (window.google?.maps?.places?.Autocomplete) return resolve()
        if (Date.now() - start > 5000) return reject('Places library timeout')
        setTimeout(check, 50)
      }
      check()
    }
    script.onerror = () => reject('Failed to load Google Maps')
    document.head.appendChild(script)
  })
  return scriptLoadPromise
}

function parsePlaceResult(place: any): ParsedAddress {
  const components = place.address_components || []
  const get = (type: string) => components.find((c: any) => c.types.includes(type))?.long_name || null
  const getShort = (type: string) => components.find((c: any) => c.types.includes(type))?.short_name || null

  const street_number = get('street_number') || ''
  const route = get('route') || ''
  const street = (street_number + ' ' + route).trim() || null

  // Google returns city info under various types depending on region
  const city = get('locality') || get('postal_town') || get('administrative_area_level_2') || null
  const neighbourhood = get('neighborhood') || get('sublocality') || get('sublocality_level_1') || null
  const province = getShort('administrative_area_level_1')
  const postalCode = get('postal_code')
  const country = getShort('country')

  const lat = place.geometry?.location?.lat?.() ?? null
  const lng = place.geometry?.location?.lng?.() ?? null

  return {
    formatted: place.formatted_address || '',
    street, city, neighbourhood, province, postalCode, country, lat, lng,
  }
}

export default function AddressAutocomplete({
  id,
  required,
  value,
  onChange,
  onSelect,
  placeholder = '123 Maple Street, Mississauga',
  className = '',
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<any>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!GOOGLE_MAPS_KEY) {
      setError(true)
      return
    }
    loadGoogleMaps()
      .then(() => setLoaded(true))
      .catch(() => setError(true))
  }, [])

  useEffect(() => {
    if (!loaded || !inputRef.current || autocompleteRef.current) return
    if (!window.google?.maps?.places) return

    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: 'ca' },
      fields: ['address_components', 'formatted_address', 'geometry'],
      types: ['address'],
    })

    ac.addListener('place_changed', () => {
      const place = ac.getPlace()
      if (!place || !place.address_components) return
      const parsed = parsePlaceResult(place)
      onChange(parsed.formatted || value)
      onSelect?.(parsed)
    })

    autocompleteRef.current = ac

    return () => {
      if (window.google?.maps?.event && autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded])

  return (
    <input
      ref={inputRef}
      id={id}
      type="text"
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete="street-address"
      className={className}
    />
  )
}
