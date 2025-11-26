'use client'

import { useEffect } from 'react'
import './scrolling.css'
//import BackButton from '@/components/BackButton'
import Link from 'next/link'

export default function AboutPage() {
  useEffect(() => {
    // Plain old JS for text splitting animation
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

  const sections = [
    {
      id: 'about-us',
      title: 'About Us',
      content:
        "We're not just another company. We're innovators, problem-solvers, and dream-makers who believe in pushing boundaries and delivering excellence. Our mission is to transform industries through cutting-edge solutions and unwavering commitment to quality.",
    },
    {
      id: 'what-we-do',
      title: 'What We Do',
      content:
        "We craft digital experiences that don't just meet expectations—they exceed them. From AI-powered solutions to seamless integrations, we build technology that empowers businesses to thrive in the modern era. Every project is a masterpiece in the making.",
    },
    {
      id: 'expertise',
      title: 'Our Expertise',
      content:
        "With decades of combined experience, our team brings world-class expertise in software development, AI/ML, cloud architecture, and digital transformation. We don't just follow trends—we set them. Our track record speaks for itself: 500+ successful projects, 98% client satisfaction, and counting.",
    },
    {
      id: 'solutions-technology',
      title: 'Solutions & Technology',
      content:
        "We harness the latest technologies—Next.js, React, AI models, cloud infrastructure—to build scalable, secure, and stunning applications. Our solutions are built for the future, designed to grow with your business and adapt to tomorrow's challenges today.",
    },
    {
      id: 'expert-support',
      title: 'Expert Support',
      content:
        "Our commitment doesn't end at deployment. We provide 24/7 AI-powered support backed by human expertise when you need it. Fast response times, comprehensive documentation, and a team that genuinely cares about your success. That's the difference.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,163,211,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(164,196,205,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-semibold text-primary">
                Innovating Since Day One
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-foreground">We Are</span>
              <span className="block bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                The Future
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Building tomorrow's technology today. One breakthrough at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {sections.map(section => (
            <div key={section.id ?? section.title} className="relative">
              {/* Section Number */}
              <div className="absolute -left-4 md:-left-12 top-0 text-8xl md:text-9xl font-black text-primary/5 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Animated Heading */}
              <h2
                data-splitting
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-8 md:mb-12 bg-linear-to-r from-primary via-foreground to-accent bg-clip-text text-transparent"
              >
                {section.title}
              </h2>

              {/* Content Card with Animated Border */}
              <div className="relative group">
                <div
                  className="absolute inset-0 rounded-3xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                    backgroundSize: '300% 100%',
                    animation: 'rotate-border 4s linear infinite',
                  }}
                />

                <div className="relative bg-linear-to-br from-background to-muted/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border group-hover:border-transparent transition-colors duration-500">
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed md:leading-loose text-center max-w-4xl mx-auto">
                    {section.content}
                  </p>

                  {/* Decorative gradient line */}
                  <div className="mt-8 h-1 w-24 mx-auto bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 md:mt-32 lg:mt-40">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10" />

            <div className="relative px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-12 md:mb-16">
                By The{' '}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  Numbers
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {[
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                ].map(stat => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-linear-to-br from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-base sm:text-lg text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 md:mt-32 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-50 animate-pulse" />
            <div
              className="relative p-0.5 rounded-2xl"
              style={{
                backgroundImage:
                  'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                backgroundSize: '300% 100%',
                animation: 'rotate-border 4s linear infinite',
              }}
            >
              <div className="bg-background rounded-2xl px-8 py-6 md:px-12 md:py-8">
                <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Ready to start something amazing?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Let's Talk
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @property --border-angle {
          inherits: false;
          initial-value: 0deg;
          syntax: '<angle>';
        }

        @keyframes rotate-border {
          to {
            --border-angle: 360deg;
          }
        }
      `}</style>
    </div>
  )
}

// 'use client'

// import { useEffect } from 'react'
// import './scrolling.css'
// import BackButton from '@/components/BackButton '
// import Link from 'next/link'

// export default function AboutPage() {
//   useEffect(() => {
//     // plain old JS from your working demo — no packages needed
//     const headings = document.querySelectorAll('[data-splitting]')
//     headings.forEach(h => {
//       const text = h.textContent || ''
//       h.textContent = ''
//       text.split('').forEach((char, i) => {
//         const span = document.createElement('span')
//         span.className = 'char'
//         span.style.setProperty('--char-index', i.toString())
//         span.textContent = char
//         h.appendChild(span)
//       })
//     })

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           const state = entry.isIntersecting ? '' : 'out'
//           entry.target.setAttribute('data-scroll', state)
//         })
//       },
//       { threshold: 0.1 }
//     )

//     headings.forEach(h => observer.observe(h))
//   }, [])

//   return (
//     <div className="page flex items-center">
//       <div className="relative mx-auto pt-24 pb-8 px-6">
//         <div className="flex w-full flex-col border-opacity-50 prose text-pretty dark:prose-invert mx-3 p-4 antialiased space-y-4">
//           <h1
//             data-splitting
//             className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center text-codeco-blue mb-5 md:mb-10"
//           >
//             About Us
//           </h1>

//           <p className="max-w-9xl mx-auto text-left wrap-break-word  xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
//             At your-awesome-site.com, we are committed to protecting your
//             privacy and providing a secure online experience. This privacy
//             policy outlines the types of information we collect, how we use it,
//             and the choices you have regarding your information. Please read
//             this policy carefully to understand our practices regarding your
//             personal data.{' '}
//           </p>

//           <h1
//             data-splitting
//             className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
//           >
//             What We Do
//           </h1>
//           <div className="max-w-9xl mx-auto">
//             <p className="text-left wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
//               At your-awesome-site.com, we are committed to protecting your
//               privacy and providing a secure online experience. This privacy
//               policy outlines the types of information we collect, how we use
//               it, and the choices you have regarding your information. Please
//               read this policy carefully to understand our practices regarding
//               your personal data.{' '}
//             </p>
//           </div>
//           <h1
//             data-splitting
//             className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
//           >
//             Our Expertise
//           </h1>

//           <p className="max-w-9xl text-left  mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
//             At your-awesome-site.com, we are committed to protecting your
//             privacy and providing a secure online experience. This privacy
//             policy outlines the types of information we collect, how we use it,
//             and the choices you have regarding your information. Please read
//             this policy carefully to understand our practices regarding your
//             personal data.{' '}
//           </p>

//           <h1
//             data-splitting
//             className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
//           >
//             Solutions & Technology!
//           </h1>
//           <div className="max-w-9xl mx-auto">
//             <p className="text-left wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
//               At your-awesome-site.com, we are committed to protecting your
//               privacy and providing a secure online experience. This privacy
//               policy outlines the types of information we collect, how we use
//               it, and the choices you have regarding your information. Please
//               read this policy carefully to understand our practices regarding
//               your personal data.{' '}
//             </p>
//           </div>
//           <h1
//             data-splitting
//             className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center  mb-5 md:mb-10"
//           >
//             Expert support!
//           </h1>

//           <p className="max-w-9xl text-left wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
//             At your-awesome-site.com, we are committed to protecting your
//             privacy and providing a secure online experience. This privacy
//             policy outlines the types of information we collect, how we use it,
//             and the choices you have regarding your information. Please read
//             this policy carefully to understand our practices regarding your
//             personal data.{' '}
//           </p>
//         </div>
//       </div>
//       <div className="my-12 md:my-24" />
//     </div>
//   )
// }
