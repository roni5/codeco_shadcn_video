'use client'

import { useEffect } from 'react'
import './scrolling.css'

export default function AboutPage() {
  useEffect(() => {
    // plain old JS from your working demo — no packages needed
    const headings = document.querySelectorAll('[data-splitting]')
    headings.forEach(h => {
      const text = h.textContent || ''
      h.textContent = ''
      text.split('').forEach((char, i) => {
        const span = document.createElement('span')
        span.className = 'char'
        span.style.setProperty('--char-index', i.toString())
        span.textContent = char
        h.appendChild(span)
      })
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const state = entry.isIntersecting ? '' : 'out'
          entry.target.setAttribute('data-scroll', state)
        })
      },
      { threshold: 0.1 }
    )

    headings.forEach(h => observer.observe(h))
  }, [])

  return (
    <div className="page flex items-center">
      <div className="relative mx-auto pt-24 pb-8 px-6">
        <div className="flex w-full flex-col border-opacity-50 prose text-pretty dark:prose-invert mx-3 p-4 antialiased space-y-4">
          <h1
            data-splitting
            className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center text-codeco-blue mb-5 md:mb-10"
          >
            About Us
          </h1>

          <p className="max-w-9xl mx-auto text-left wrap-break-word  xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            At your-awesome-site.com, we are committed to protecting your
            privacy and providing a secure online experience. This privacy
            policy outlines the types of information we collect, how we use it,
            and the choices you have regarding your information. Please read
            this policy carefully to understand our practices regarding your
            personal data.{' '}
          </p>

          <h1
            data-splitting
            className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
          >
            What{' '} We Do
          </h1>
          <div className="max-w-9xl mx-auto">
            <p className="text-left wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
              At your-awesome-site.com, we are committed to protecting your
              privacy and providing a secure online experience. This privacy
              policy outlines the types of information we collect, how we use
              it, and the choices you have regarding your information. Please
              read this policy carefully to understand our practices regarding
              your personal data.{' '}
            </p>
          </div>
          <h1
            data-splitting
            className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
          >
            Our Expertise
          </h1>

          <p className="max-w-9xl text-left  mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            At your-awesome-site.com, we are committed to protecting your
            privacy and providing a secure online experience. This privacy
            policy outlines the types of information we collect, how we use it,
            and the choices you have regarding your information. Please read
            this policy carefully to understand our practices regarding your
            personal data.{' '}
          </p>

          <h1
            data-splitting
            className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
          >
            Solutions & Technology!
          </h1>
          <div className="max-w-9xl mx-auto">
            <p className="text-left wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
              At your-awesome-site.com, we are committed to protecting your
              privacy and providing a secure online experience. This privacy
              policy outlines the types of information we collect, how we use
              it, and the choices you have regarding your information. Please
              read this policy carefully to understand our practices regarding
              your personal data.{' '}
            </p>
          </div>
          <h1
            data-splitting
            className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
          >
            Expert support!
          </h1>

          <p className="max-w-9xl text-left wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            At your-awesome-site.com, we are committed to protecting your
            privacy and providing a secure online experience. This privacy
            policy outlines the types of information we collect, how we use it,
            and the choices you have regarding your information. Please read
            this policy carefully to understand our practices regarding your
            personal data.{' '}
          </p>
        </div>
      </div>
      <div className="my-12 md:my-24" />
    </div>
  )
}
