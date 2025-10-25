import { demoRegistry } from '@/lib/demoRegistry'
import { notFound } from 'next/navigation'

export default async function DemoLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ demo: string }>
}) {
  const { demo } = await params
  const entry = demoRegistry[demo as keyof typeof demoRegistry]
  if (!entry) return notFound()
  const Navbar = entry.nav
  const Footer = entry.footer
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
