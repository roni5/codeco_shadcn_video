import { CardWithForm } from '@/components/card-project'
import { NameTransition } from '@/components/name'
import Image from 'next/image'

export default async function HowitWorksPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center text-center justify-center gap-2">
        <h1 className="font-semibold antialiased md:subpixel-antialiased text-lg md:text-2xl">
          Our Mission and Values
        </h1>
        <div className="flex items-center text-center justify-center gap-2">
          <section className="flex items-center text-center justify-center gap-2">
            <p className=" antialiased md:subpixel-antialiased text-md md:text-1xl">
              At Task Rabbit, we strive to connect individuals in need of
              assistance with those willing to help. Our core values include
              Community Support, Efficiency, and Collaboration, ensuring a
              user-friendly experience for all.
            </p>
            <svg
              fill="#000000"
              viewBox="0 -64 640 640"
              aria-label="taskful logo"
            >
              <title>taskful logo</title>
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z" />
              </g>
            </svg>
            <p className=" antialiased md:subpixel-antialiased text-md md:text-1xl">
              Become a Task Doer Offer your skills and services to people in
              your community. Set your own rates and work when it's convenient
              for you. Get paid for helping others and build a flexible income
              stream.
            </p>
          </section>
        </div>
        <h1 className="font-semibold antialiased md:subpixel-antialiased text-lg text-sky-500 md:text-2xl">
          Settings
        </h1>
      </div>
      <div className="flex items-center text-center justify-center gap-2">
        <CardWithForm />
        <NameTransition />
        <div className="relative w-96 h-56">
          <Image
              src="./img/sky-pro.svg"
              alt="Codeco Logo"
              className="hidden lg:block rounded  drop-shadow-lg dark:invert px-1 rounded-b-md"
              // style={{ boxShadow: 'rgba(0, 150, 105, 0.4) 0px 4px 8px 0px' }}
              width={100}
              height={24}
              priority
            />
          <img
            src="img/bokeh-overlay.jpg"
            alt="Nature"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md backdrop-hue-rotate-180 rounded-xl">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Visit Homes
              </h2>
              <p className="mt-2 clip-trapezoid  px-7 text-center text-gray-700 ">
                Huge of the background card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
