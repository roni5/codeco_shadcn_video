import LandingNavbar from '@/components/navbars/LandingNavbar'
import LandingFooter from '@/components/footers/LandingFooter'
import SaasNavbar from '@/components/navbars/SaasNavbar'
import SaasFooter from '@/components/footers/SaasFooter'
import PortfolioNavbar from '@/components/navbars/PortfolioNavbar'
import PortfolioFooter from '@/components/footers/PortfolioFooter'

export const demoRegistry = {
  landing: { nav: LandingNavbar, footer: LandingFooter, title: 'Landing' },
  saas: { nav: SaasNavbar, footer: SaasFooter, title: 'SaaS' },
  portfolio: { nav: PortfolioNavbar, footer: PortfolioFooter, title: 'Portfolio' },
} as const

export type DemoKey = keyof typeof demoRegistry
