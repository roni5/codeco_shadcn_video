

export default function ParallaxFeature() {
  return (
    <div className="relative w-full overflow-hidden">
      {[...Array(6)].map((_, i) => {
        const n = i + 1
        return (
          // 📌 Section Div NUMBER: {n}
          // This div wraps each parallax image + heading.
          // Vertical spacing between sections is controlled by `h-[60vh]` below.
          <div
            key={n}
            className="w-full h-[60vh] relative overflow-hidden grid place-content-center snap-end"
          >
            {/* 📌 Image inside Section {n} */}
            <img
              src={`https://unsplash.it/1920/1920/?v=${n}`}
              alt={`Parallax ${n}`}
              className="w-full h-full object-cover absolute animate-parallax"
            />

            {/* 📌 Heading inside Section {n} */}
            <h2 className="text-[8vw] text-white mix-blend-exclusion font-bold z-10">
              Parallax {n}
            </h2>
          </div>
        )
      })}
    </div>
  )
}

// import React from 'react'

// export default function ParallaxFeature() {
//   return (
//     <div className="relative w-full overflow-hidden">
//       {[...Array(6)].map((_, i) => {
//         const n = i + 1
//         return (
//           <div
//             key={n}
//             className="w-full h-[80vh] relative overflow-hidden grid place-content-center snap-end"
//           >
//             <img
//               src={`https://unsplash.it/1920/1920/?v=${n}`}
//               alt={`Parallax ${n}`}
//               className="w-full h-full object-cover absolute animate-parallax"
//             />
//             <h2 className="text-[8vw] text-white mix-blend-exclusion font-bold z-10">
//               Parallax {n}
//             </h2>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// import React from 'react'

// export default function ParallaxFeature() {
//   return (
//     <div className="relative w-full min-h-screen overflow-y-scroll snap-y">
//       {[...Array(6)].map((_, i) => {
//         const n = i + 1
//         return (
//           <div
//             key={n}
//             className={`w-full h-screen relative overflow-hidden [view-timeline-name:--section${n}] [view-timeline-axis:block] snap-end grid place-content-center`}
//           >
//             <img
//               src={`https://unsplash.it/1920/1920/?v=${n}`}
//               alt={`Parallax ${n}`}
//               className={`w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section${n}] [animation-range:entry_exit]`}
//             />
//             <h2 className="text-[10vw] text-white mix-blend-exclusion font-bold">
//               Parallax {n}
//             </h2>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// import React from 'react'

// interface ParallaxSectionProps {
//   startIndex?: number // allows numbering images from a specific index
//   count?: number // how many sections to render
// }

// export default function ParallaxSection({
//   startIndex = 1,
//   count = 6,
// }: ParallaxSectionProps) {
//   return (
//     <div className="relative w-full min-h-screen overflow-y-scroll snap-y">
//       <div className="relative w-full">
//         {Array.from({ length: count }, (_, i) => {
//           const n = startIndex + i
//           return (
//             <div
//               key={n}
//               className={`w-full h-[80vh] relative overflow-hidden [view-timeline-name:--section${n}] [view-timeline-axis:block] snap-end grid place-content-center`}
//             >
//               <img
//                 src={`https://unsplash.it/1920/1920/?v=${n}`}
//                 alt={`Parallax ${n}`}
//                 className={`w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section${n}] [animation-range:entry_exit]`}
//               />
//               <h2 className="text-[6vw] md:text-[5vw] text-white mix-blend-exclusion font-bold">
//                 Parallax {n}
//               </h2>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
