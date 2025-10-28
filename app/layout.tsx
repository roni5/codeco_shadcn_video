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
  // Sets the base URL for resolving all relative URLs.
  // This is the clean, correct Next.js 15 pattern.
  metadataBase: new URL('https://your-awesome-site.com'),

  // Default title and description for the entire site
  title: {
    template: '%s | Your Awesome Site', // Page titles will be "Page | Your Awesome Site"
    default: 'Your Awesome Site', // Fallback title
  },
  description: 'The default description for Your Awesome Site.',

  // Default Open Graph metadata
  openGraph: {
    title: 'Your Awesome Site',
    description: 'The default description for Your Awesome Site.',
    url: '[https://www.your-awesome-site.com](https://www.your-awesome-site.com)', // Use the full URL for the root OpenGraph
    siteName: 'Your Awesome Site',
    // Add your default social sharing image
    // images: [
    //   {
    //     url: '/default-og-image.png',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_GB',
    type: 'website',
  },

  // Default Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Your Awesome Site',
    description: 'The default description for Your Awesome Site.',
    // images: ['/default-og-image.png'],
    // creator: '@yourTwitterHandle',
  },
}

// export const metadata: Metadata = {
//   title,
//   description,
//   twitter: {
//     card: 'summary_large_image',
//     title,
//     description,
//   },
//   metadataBase: new URL('https://your-awesome-site.com'),
//   icons: {
//     icon: '/favicon.ico',
//     apple: '/apple-touch-icon.png',
//   },
//   manifest: '/site.webmanifest',
//   appleWebApp: {
//     title: 'codeco',
//   },
// }

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
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
