'use client'

import { useState } from 'react'
import HeaderNav from '@/components/HeaderNav'
import Pricing from '@/components/Pricing'

export default function PricingPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <main id="content">
      <section className="relative pb-8 overflow-y-hidden bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
        <div className="overflow-hidden">
          <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-2/5">
            <div className="relative h-full">
              <div className="absolute inset-0 opacity-20 bg-linear-to-br from-purple-400 to-purple-900 rounded-2xl blur-3xl" />
              <div className="pr-1 pb-1 border border-white border-opacity-20 h-full rounded-br-2xl">
                <img
                  className="relative object-cover w-full h-full border-r border-neutral-800 rounded-br-xl"
                  src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHx3b3JrfGVufDB8MXx8fDE3NTAwNjA4NTV8MA&ixlib=rb-4.1.0&q=80&w=960"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative container px-4 mx-auto">
            <div className="w-full lg:w-3/5 lg:pl-16 ml-auto mb-12">
              {/* <nav className="flex justify-between items-center py-8">
                <a href="/" className="lg:hidden">
                  <img
                    src="darkpro-assets/darkpro-logo.png"
                    alt=""
                    className="h-8"
                  />
                </a>
                <div className="lg:hidden ml-auto">
                  <button
                    type="button"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className="block hover:text-white text-neutral-300 focus:outline-none transition-colors duration-200"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Mobile menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
                <ul className="hidden lg:flex mr-auto items-center w-auto space-x-8">
                  <li>
                    <a
                      className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                      href="/"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                      href="/"
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                      href="/"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200"
                      href="/"
                    >
                      Company
                    </a>
                  </li>
                </ul>
                <a
                  className="hidden lg:block lg:ml-auto px-4 py-2 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg"
                  href="/"
                >
                  Get Started
                </a>
              </nav> */}
              <div className="mt-10 lg:mt-20 mb-16 lg:mb-20 max-w-xl">
                <div className="mb-6">
                  <span className="text-sm text-neutral-400 font-medium">
                    Frequent authentication
                  </span>
                </div>
                <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-medium leading-none text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
                  Build products that users will really love
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-neutral-300">
                  Transform your workflow with our intuitive platform designed
                  for high-performing teams. Ship faster, collaborate better,
                  and scale with confidence of a professional.
                </p>
                <div className="relative flex flex-col sm:flex-row gap-4">
                  <div className="lg:hidden absolute inset-0 opacity-20 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 rounded-2xl blur-3xl" />
                  <a
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg group"
                    href="/"
                  >
                    Get Started
                    <svg
                      className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <a
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white hover:text-white border border-neutral-700 hover:border-white hover:border-opacity-50 rounded-full transition-all duration-200"
                    href="/"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start -m-4 -mx-6">
                <div className="w-1/2 md:w-1/4 p-4 px-6">
                  <img
                    className="mx-auto sm:mx-0 h-8 brightness-0 invert"
                    src="darkpro-assets/logos/jiggle-color.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/4 p-4 px-6">
                  <img
                    className="mx-auto sm:mx-0 h-8 brightness-0 invert"
                    src="darkpro-assets/logos/symtric-color.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/4 p-4 px-6">
                  <img
                    className="mx-auto sm:mx-0 h-8 brightness-0 invert"
                    src="darkpro-assets/logos/wishelp-color.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/4 p-4 px-6">
                  <img
                    className="mx-auto sm:mx-0 h-8 brightness-0 invert"
                    src="darkpro-assets/logos/resecurb-color.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={`${
              mobileNavOpen ? 'block' : 'hidden'
            } fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
          >
            <div
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-75 blur-3xl"
            />
            <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-neutral-900 border-r border-neutral-800 overflow-y-auto">
              <div className="flex items-center mb-12">
                <a href="/" className="mr-auto">
                  <img
                    src="darkpro-assets/darkpro-logo.png"
                    alt=""
                    className="h-8"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <svg
                    className="h-6 w-6 cursor-pointer hover:text-white text-neutral-400 transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                      href="/"
                    >
                      Product
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                      href="/"
                    >
                      Solutions
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                      href="/"
                    >
                      Resources
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200"
                      href="/"
                    >
                      Company
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  <a
                    className="block px-6 py-3 text-sm text-center font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-200"
                    href="/"
                  >
                    Get Started
                  </a>
                </div>
                <p className="mt-6 mb-4 text-sm text-center text-neutral-500">
                  <span>© 2025 All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div> */}
        </div>
      </section>
    </main>
  )
}