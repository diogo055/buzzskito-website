import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const INDEXNOW_KEY = '855fb831a76f01df649d905dd72478b0'
const HOST = 'buzzskito.ca'

export async function GET() {
  try {
    // Collect all page URLs by scanning the app directory
    const appDir = path.join(process.cwd(), 'app')
    const urls: string[] = [`https://${HOST}/`]

    const scanDir = (dir: string, prefix: string = ''): void => {
      const entries = fs.readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        if (!entry.isDirectory()) continue
        if (entry.name.startsWith('_') || entry.name.startsWith('(') || entry.name === 'api') continue

        const fullPath = path.join(dir, entry.name)
        const urlPath = `${prefix}/${entry.name}`

        if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
          urls.push(`https://${HOST}${urlPath}`)
        }

        scanDir(fullPath, urlPath)
      }
    }

    scanDir(appDir)

    // Submit to IndexNow
    const response = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.slice(0, 10000), // Max 10K per request
      }),
    })

    return NextResponse.json({
      submitted: urls.length,
      status: response.status,
      statusText: response.statusText,
      urls: urls.slice(0, 20), // Show first 20 for verification
    })
  } catch (error) {
    console.error('IndexNow error:', error)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
