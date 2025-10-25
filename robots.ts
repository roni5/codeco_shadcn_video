/** @see https://robotstxt.org/robotstxt.html */

import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const DISALLOW = (process.env.NEXT_PUBLIC_ROBOTS_DISALLOW ?? '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: DISALLOW.length ? DISALLOW : ['/admin/', '/private/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
