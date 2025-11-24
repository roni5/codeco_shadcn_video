import React from 'react'

export default function DarkNewsLetter() {
  return (
    <div className="w-full bg-neutral-950  overflow-hidden">
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-neutral-50">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center text-neutral-50">
          Find out about events and other news
        </p>
        <div className="flex flex-row rounded-sm border text-neutral-50">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-sm sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-sm sm:w-1/3 bg-linear-to-r from-gray-100 via-gray-200 to-gray-200 text-neutral-900 hover:opacity-40 hover:text-gray-500 tracking-tight"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
