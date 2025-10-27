'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Newsletter from './Newsletter'
import SocialLinks from './SocialLinks'
import type { SVGProps } from 'react'
export type IconProps = SVGProps<SVGSVGElement>

export default function Footer(props: IconProps) {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data: any) => {
    console.log('Newsletter data:', data)
    reset()
  }

  return (
    <footer className="flex flex-col w-full bg-white text-primary px-4 py-6 sm:px-12 md:px-20 lg:px-28 sm:py-8 border-t border-primary/10">
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center lg:items-start">
        {/* Logo and Social Media */}
        <div className="flex flex-col gap-3 lg:w-1/2 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
            <img alt="Logo" src="/img/elephant-alone.svg" width="40" />
            <a
              href="https://codeco.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 hover:underline underline-offset-4"
            >
              Codeco.tech
            </a>
          </div>
          <SocialLinks />
        </div>

        {/* Links + Newsletter */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 lg:w-1/2 justify-end w-full">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 flex-shrink-0 text-center sm:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Company
              </h3>
              <Link
                href="/about"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 hover:underline underline-offset-4"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 hover:underline underline-offset-4"
              >
                Contact
              </Link>
              <Link
                href="/support"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 hover:underline underline-offset-4"
              >
                Support
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Legal
              </h3>
              <Link
                href="/faqs"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 hover:underline underline-offset-4"
              >
                FAQs
              </Link>
              <Link
                href="/privacy"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 hover:underline underline-offset-4"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 max-w-md text-center sm:text-left">
            <h3 className="font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Newsletter
            </h3>
            <p className="text-sm text-primary/80">Subscribe for updates.</p>
            <Newsletter />
          </div>
        </div>
      </div>
    </footer>
  )
}