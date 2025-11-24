import './node-webstorage-shim' // must be first to neutralize accidental Node WebStorage in SSR
import Navbar from '@/components/NavBar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

// const title = 'Codeco.tech Next.js + Postgres Auth contact form'
// const description =
//   'This is a Codeco.tech Next.js starter kit that uses NextAuth.js for simple social login and a Postgres database to persist the data.'



export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: { template: '%s | Your Brand', default: 'Your Brand' },
  description: 'Your default site description.',
  openGraph: {
    title: 'Your Brand',
    description: 'Your default site description.',
    url: 'https://your-domain.com',
    siteName: 'Your Brand',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Brand',
    description: 'Your default site description.',
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
  appleWebApp: { title: 'Your Brand' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

      <GoogleTagManager gtmId="GTM-P6CXJTBT" />
      <body
        className={`${interSans.variable} mx-auto antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6CXJTBT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        {/* Toaster relies on next-themes (client-only). Guard if next-themes is disabled. */}
       <Toaster />
        <Footer />
      </body>
    </html>
  )
}
