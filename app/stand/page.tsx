
//import type { SVGProps } from 'react'

import { PawPrint } from "lucide-react"



export default function Stand() {
  const features = [
    {
      img: '/img/mobile-dev.png',
      title: 'Build Intelligent Workflows',
      desc: 'We integrate AI agents directly into your business — automating lead qualification, reporting, and customer support while maintaining full human oversight.',
      reverse: false,
    },
    {
      img: '/img/overlap_image.png',
      title: 'Develop & Deploy at Lightning Speed',
      desc: 'Using containerized infrastructure and continuous deployment pipelines, we deliver production-ready apps that evolve as your business grows.',
      reverse: true,
    },
    {
      img: '/img/BotBonnie.webp ',
      title: 'Data at the Core',
      desc: 'We connect APIs, databases, and machine learning pipelines to create systems that learn, adapt, and scale with every transaction.',
      reverse: false,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Core Features{' '}
          <PawPrint className="inline-block ml-3 h-8 w-8 text-pink-400" />
        </h2>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center my-16  gap-12 ${
              feature.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden shadow-lg">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-xl text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </section>
      <form>
      <div className="m-4 p-1 rounded-full max-w-sm hover:bg-linear-to-r focus-within:bg-linear-to-r focus from-rose-400 via-fuchsia-500 to-indigo-500">
  <label htmlFor="name" className="sr-only">Name</label>
  <input className="p-3 w-full rounded-full border border-fuchsia-500 focus:outline-none focus:border-transparent hover:border-transparent" type="text" id="name" placeholder="Enter Your Name"/>
</div>
  </form>
    </main>
  )
}
//full thing in kimi.com