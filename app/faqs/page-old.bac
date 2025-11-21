// app/onboarding/page.tsx
//import { FaqsContent } from '@/app/components/Faqs'
//import { Onboarding } from '@/components/Onboarding'
import BackButton from '@/components/BackButton '
import SEO from '@/components/seo'
import Image from 'next/image'
import Link from 'next/link'

export default function FaqsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16 md:py-24  sm:px-6 lg:px-8">
      <SEO
        pageTitle="Faqspage"
        pageDescription="Any unanswered question you find here"
      />
      <BackButton />
      <h1 className="z-auto mb-1 text-center text-3xl font-bold text-primary  antialiased md:text-5xl lg:text-6xl ">
        Faqs
      </h1>
      <Image
        alt="Taskful.co.uk"
        sizes="100%"
        width={90}
        height={90}
        src="/img/icons/taskful-logo-small.svg"
        className="w-full max-w-[170px] aspect-video h-auto object-contain mx-auto mb-3 mt-3 md:mb-5 md:mt-5"
      />
      <div className="flex items-center space-x-3 py-4 md:py-8 ">
        <Link
          href="/help"
          className="subpixel-antialiased font-medium mt-4 py-2 px-4 rounded-md no-underline text-white bg-cyan-500  hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-1 transition-colors duration-200"
        >
          Help Docs
        </Link>
        <Link
          href="/guidelines"
          className="subpixel-antialiased font-medium mt-4 py-2 prose font-semiBold px-4 rounded-md no-underline text-whit bg-cyan-500 text-white hover:bg-cyan-700  focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-1 transition-colors duration-200"
        >
          Guidelines
        </Link>
        {/* <div className="flex items-center space-x-3 py-4 md:py-8">
          <button className="inline-flex items-center justify-center px-7 py-3 min-h-[36px] bg-cyan-500 hover:bg-cyan-700 text-white text-sm font-semibold rounded border-0 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-105">
            Release payment
          </button>
        </div> */}
      </div>
      <FaqsContent />
      <div className="h-20 md:h-32 lg:h-40"/>
    </div>
  )
}