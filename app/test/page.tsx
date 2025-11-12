import Bento from '@/components/Bento'
import ChatTrigger from '@/components/ChatTrigger'
import LeftZig from '@/components/LeftZig'
import Pricing from '@/components/Pricing'
import ProductCard from '@/components/product-card'
import RightZag from '@/components/RightZag'
import TeamMembers from '@/components/TeamMembers'

import Teams from '@/components/Teams'
import Link from 'next/link'



export default function Hero() {
  // const handleProductClick = () => {
  //   console.log('Product clicked!')
  // }
  return (
    <div className="relative bg-linear-to-br from-slate-900 to-indigo-950 overflow-hidden">
      {/* Background pattern */}
      <div className="hidden lg:block absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/img/grid.webp')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24 md:pt-28 md:pb-32 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Build faster with</span>
              <span className="block mt-2 bg-clip-text bg-linear-to-r from-violet-600 to-fuchsia-700 text-transparent">
                Next.js 15 & Tailwind 4
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Create beautiful, responsive web applications with the latest web
              technologies. Leverage the power of Next.js 15 and Tailwind CSS 4
              for unprecedented developer experience.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started"
                className="rounded-md bg-violet-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors  duration-300 ease-in-out scale-100 hover:scale-107"
              >
                Get Started
              </Link>
              <Link
                href="/documentation"
                className="rounded-md bg-slate-800 px-6 py-3 text-base font-medium text-slate-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
              >
                Documentation
              </Link>
            </div>

            {/* Stats section */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-white">40%</p>
                <p className="mt-1 text-sm text-slate-400">Faster loading</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">50k+</p>
                <p className="mt-1 text-sm text-slate-400">Developers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">99%</p>
                <p className="mt-1 text-sm text-slate-400">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image/illustration section */}
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-4/3 bg-linear-to-tr from-violet-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-3/4 h-3/4 text-white opacity-80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <title>icon2</title>
                    <path d="M12 2L2 19h20L12 2zm0 4l6.5 10h-13L12 6z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <div className="h-2 w-3/4 bg-white/50 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-white/30 rounded" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full  h-auto scale-x-[-1]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icon3</title>
          <path
            d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 82.5C840 90 960 105 1080 105C1200 105 1320 90 1380 82.5L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
      <section className="mb-16 md:mb-32">
        <Bento />
      </section>
      <section className="mb-14 md:mb-28">
        <LeftZig />
      </section>
      <section className="mb-12 md:mb-28">
        <RightZag />
      </section>

      <section className="mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {/* Card repetition for demo */}
            <ProductCard
              title="Premium Headphones"
              description="Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals alike."
              imageSrc="/img/cardImg.webp"
              imageAlt="Premium wireless headphones"
              buttonText="Learn More"
              //onButtonClick={handleProductClick}
            />

            <ProductCard
              title="Smart Watch"
              description="Stay connected and track your fitness goals with our advanced smartwatch featuring heart rate monitoring and GPS."
              imageSrc="/img/cardImg.webp"
              imageAlt="Modern smartwatch"
            />

            <ProductCard
              title="Laptop Stand"
              description="Ergonomic aluminum laptop stand designed to improve posture and increase productivity during long work sessions."
              imageSrc="/img/cardImg.webp"
              imageAlt="Adjustable laptop stand"
              buttonText="Buy Now"
              //onButtonClick={() => alert('Adding to cart...')}
            />
            <ProductCard
              title="Premium Earbuds"
              description="Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals alike."
              imageSrc="/img/cardImg.webp"
              imageAlt="Premium wireless headphones"
              buttonText="Learn More"
              //onButtonClick={handleProductClick}
            />
          </div>
        </div>
      </section>
      <section className="mb-12 md:mb-20">
        <Pricing />
        <section className="mb-12 md:mb-20">
          <TeamMembers />
        </section>
      </section>
      <section className="mb-12 md:mb-20">
        <Teams />
      </section>

      <ChatTrigger />
      {/* Wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icon</title>
          <path
            d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 82.5C840 90 960 105 1080 105C1200 105 1320 90 1380 82.5L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
