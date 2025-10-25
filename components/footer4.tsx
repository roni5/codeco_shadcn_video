'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Newsletter from './Newsletter'
import type { SVGProps } from 'react'
import { LinkIcon } from 'lucide-react'
export type IconProps = SVGProps<SVGSVGElement>

export default function Footer(props: IconProps) {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data: any) => {
    console.log('Newsletter data:', data)
    reset()
  }

  return (
    <footer className="flex flex-col w-full bg-white dark:bg-[#0B0B0B] text-[#125667] dark:text-gray-300 px-4 py-6 sm:px-12 md:px-20 lg:px-28 sm:py-8 border-cyan-200">
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center lg:items-start">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col gap-3 lg:w-1/2 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
            <img alt="Logo" src="/img/taskful-new-logo-2.svg" width="60" />
            <span className="text-3xl font-semibold text-[#088196]">
              Example.co.uk
            </span>
          </div>

          <div className="flex gap-4 mt-2">
            <Link
              href="/"
              className="hover:scale-110 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#088196] dLinkrk:text-cyan-400"
                aria-hidden="true"
                {...props}
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#088196] dark:text-cyan-400"
                aria-hidden="true"
                {...props}
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#088196] dark:text-cyan-400"
                aria-hidden="true"
                {...props}
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Links and Newsletter Section */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 lg:w-1/2 justify-end w-full">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 flex-shrink-0 text-center sm:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold uppercase text-[#053847] dark:text-gray-200">
                Company
              </h3>
              <Link
                href="/about"
                className="text-[#088196] hover:underline transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#088196] hover:underline transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/support"
                className="text-[#088196] hover:underline transition-colors"
              >
                Support
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold uppercase text-[#053847] dark:text-gray-200">
                Legal
              </h3>
              <Link
                href="/faqs"
                className="text-[#088196] hover:underline transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/privacy"
                className="text-[#088196] hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#088196] hover:underline transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Newsletter Component Placeholder */}
          <div className="flex flex-col gap-4 max-w-md text-center sm:text-left">
            <h3 className="font-bold uppercase text-[#053847] dark:text-gray-200">
              Newsletter
            </h3>
            <p className="text-sm text-[#088196]">Subscribe for updates.</p>
            {/* <Newsletter /> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

