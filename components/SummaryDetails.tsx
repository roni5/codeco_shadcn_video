export default function SummaryDetails() {
  return (
    <details className="group w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
      <summary
        className="
        flex justify-between items-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 cursor-pointer
        text-gray-800 font-semibold text-base sm:text-lg
        hover:bg-gray-100 transition-colors duration-200
        relative
        after:content-[''] after:absolute after:inset-0 after:border-b after:border-gray-200
        group-open:after:border-transparent bg-[linear-gradient(120deg,var(--indigo-6),var(--crimson-5))]
      "
      >
        MODERN WEB
        <svg
          className="size-4 sm:size-5 text-gray-600 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <title>chevron</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700 leading-relaxed border-t border-gray-200 group-open:border-transparent">
        <p className="mx-auto my-1 md:my-3 px-2 sm:px-3 md:px-4 bg-pink-200 font-semibold text-balance rounded-md text-sm sm:text-base">
          Save Yourself 100s of hours.
        </p>

        <p className="text-center font-semibold my-3 md:my-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] text-base  md:text-2xl">
          READY TO DEPLOY LIKE A PRO
        </p>

        <p className="mx-auto my-1 md:my-3 px-2 sm:px-3 md:px-4 bg-pink-200 font-semibold text-balance rounded-md text-sm sm:text-base">
          Embrace a new era of efficiency.
        </p>

        <ins cite="http://codeco.tech" dateTime="2025-05-31">
          <p className="font-mono mx-auto px-2 sm:px-3 md:px-4 text-rose-300 text-center text-sm sm:text-base">
            Codeco.tech
          </p>
        </ins>
      </div>
    </details>
  )
}
// import React from 'react'

// export default function SummaryDetails() {
//   return (
//     <details className="group w-full max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
//       <summary  className="
//       flex justify-between items-center px-6 py-4 cursor-pointer
//        text-gray-800 font-semibold text-lg
//       hover:bg-gray-100 transition-colors duration-200
//       relative
//       after:content-[''] after:absolute after:inset-0 after:border-b after:border-gray-200
//       group-open:after:border-transparent bg-[linear-gradient(120deg,var(--indigo-6),var(--crimson-5))]
//     " >
//         MODERN WEB
//         {/* Chevron Icon for open/close state */}
//         <svg
//           className="size-5 text-gray-600 group-open:rotate-180 transition-transform duration-200"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//         </svg>

//       </summary>
//       <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-200 group-open:border-transparent">
//         <p className='mx-auto my-1 md:my-3 px-3 md:px-4 bg-pink-200 font-semibold text-balance rounded-md'>
//           Say goodbye to outdated cPanel & Doing It Yourself.
//         </p>

//         <p className="text-center font-semibold my-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
//           READY TO DEPLOY LIKE A PRO
//         </p>

//         <p className='mx-auto my-1 md:my-3 px-3 md:px-4 bg-pink-200 font-semibold text-balance rounded-md '>
//           Embrace a new era of efficiency and effectiveness.
//         </p>

//         <ins cite="http://codeco.tech" dateTime="2025-05-31">
//           <p className='font-mono mx-auto px-3 md:px-4 text-rose-300 text-center'>
//             Codeco.tech
//           </p>
//         </ins>
//       </div>
//     </details>
//   )
// }
