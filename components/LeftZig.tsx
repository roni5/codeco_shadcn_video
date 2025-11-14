// from - slate - 900
// to - indigo - 950
// bg-[url('/img/bg-cta-dark.webp')]  bg-repeat-y overflow-hidden

export default function LeftZig() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
      {/* Animated Gradient Border Wrapper */}
      <div className="[background:linear-gradient(45deg,#172033,--theme(--color-slate-800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),--theme(--color-slate-600/.48)_80%,--theme(--color-indigo-500)_86%,--theme(--color-indigo-300)_90%,--theme(--color-indigo-500)_94%,--theme(--color-slate-600/.48))_border-box] rounded-2xl border border-transparent animate-border w-full max-w-5xl">
        {/* Card Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8 p-8 bg-slate-900 rounded-2xl">
          {/* Left side image */}
          <div className="shrink-0 w-full md:w-1/2">
            <img
              className="rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80"
              alt="Avatar"
            />
          </div>

          {/* Right side text */}
          <blockquote className="flex-1 text-center md:text-left space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-900 mx-auto md:mx-0"
            >
              <title>icon</title>
              <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
              <path d="M12 17v4" />
              <path d="M8 21h8" />
              <rect x="2" y="3" width="20" height="14" rx="2" />
            </svg>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-white">
              To say that switching to Codeco.tech has been life-changing is an
              understatement. My business has tripled and I got my life back.
            </p>

            <footer className="pt-2">
              <p className="font-semibold text-neutral-200">Nicole Grazioso</p>
              <p className="text-sm text-neutral-400">Head of Finance</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}


// export default function LeftZig() {
//   return (
//     <section className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full gap-8">
//         {/* Left side image */}
//         <div className="shrink-0 w-full md:w-1/2">
//           <img
//             className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
//             src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=640&h=640&q=80"
//             alt="Avatar"
//           />
//         </div>

//         {/* Right side text */}
//         <blockquote className="flex-1 text-center md:text-left space-y-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="48"
//             height="48"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-purple-900 mx-auto md:mx-0"
//           >
//             <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
//             <path d="M12 17v4" />
//             <path d="M8 21h8" />
//             <rect x="2" y="3" width="20" height="14" rx="2" />
//           </svg>

//           <p className="text-lg sm:text-xl lg:text-2xl font-medium  leading-relaxed text-white">
//             To say that switching to Codeco.tech has been life-changing is an
//             understatement. My business has tripled and I got my life back.
//           </p>

//           <footer className="pt-2">
//             <p className="font-semibold text-neutral-200">
//               Nicole Grazioso
//             </p>
//             <p className="text-sm text-neutral-400">
//               Head of Finance
//             </p>
//           </footer>
//         </blockquote>
//       </div>
//     </section>
//   )
// }
