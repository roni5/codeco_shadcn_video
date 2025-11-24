export default function ParallaxPage() {
  return (
    <div className="snap-y absolute inset-0 overflow-y-scroll scroll-smooth sepia-20 contrast-[1.15] [font-family:Halisa_VF] tracking-tighter [--parallax:parallax_linear]">
      {[...Array(12)].map((_, i) => {
        const n = i + 1
        return (
          <div
            key={n}
            className={`w-full h-screen relative overflow-hidden [view-timeline-name:--section${n}] [view-timeline-axis:block] snap-end grid place-content-center`}
          >
            <img
              src={`https://unsplash.it/1920/1920/?v=${n}`}
              alt={`Parallax ${n}`}
              className={`w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section${n}] [animation-range:entry_exit]`}
            />
            <h2 className="text-[10vw] text-white mix-blend-exclusion">
              Parallax {n}
            </h2>
          </div>
        )
      })}
    </div>
  )
}


// export default function ParallaxPage() {
//   return (
//     <div className="snap-y absolute inset-0 overflow-y-scroll scroll-smooth sepia-20 contrast-[1.15] font-[Halisa_VF] tracking-tighter [--parallax:parallax_linear]">
//       {Array.from({ length: 12 }, (_, i) => {
//         const n = i + 1
//         return (
//           <div
//             key={n}
//             className={`w-full h-screen relative overflow-hidden [view-timeline-name:--section${n}] [view-timeline-axis:block] snap-end grid place-content-center`}
//           >
//             <img
//               src={`https://unsplash.it/1920/1920/?v=${n}`}
//               alt={`Parallax ${n}`}
//               className="w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--section${n}] [animation-range:entry_exit]"
//             />
//             <h2 className="text-[10vw] text-white mix-blend-exclusion">
//               Parallax {n}
//             </h2>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default function ParallaxPage() {
//   return (
//     <div className="snap-y absolute inset-0 overflow-y-scroll scroll-smooth sepia-20 contrast-[1.15] tracking-tighter [--parallax:parallax_linear] [font-family:Halisa_VF]">
//       {[1, 2, 3, 4, 5].map(v => (
//         <div
//           key={v}
//           className={`w-full h-screen relative overflow-hidden grid place-content-center snap-end [view-timeline-name:--section${v}] [view-timeline-axis:block]`}
//         >
//           <img
//             src={`https://unsplash.it/1920/1920/?v=${v}`}
//             alt={`real estate business ${v}`}
//             className={`w-full h-full object-cover -z-10 absolute animate-parallax [animation-timeline:--section${v}] [animation-range:entry_exit]`}
//           />
//           <h2 className="text-[10vw] text-white mix-blend-exclusion">
//             Parallax {v}
//           </h2>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default function ParallaxPage() {
//   return (
//     <div className="snap-y absolute inset-0 overflow-y-scroll scroll-smooth sepia-20 contrast-[1.15] tracking-tighter [font-family:Halisa_VF]">
//       {/* Section 1 */}
//       <div className="w-full h-screen relative overflow-hidden grid place-content-center [view-timeline-name:--section1] [view-timeline-axis:block]">
//         <img
//           src="https://unsplash.it/1920/1920/?v=1"
//           alt="real estate business."
//           className="w-full h-full object-cover -z-10 absolute animate-parallax [animation-timeline:--section1] [animation-range:entry_exit]"
//         />
//         <h2 className="text-[10vw] text-white mix-blend-exclusion">Parallax 1</h2>
//       </div>

//       {/* Section 2 */}
//       <div className="w-full h-screen relative overflow-hidden grid place-content-center [view-timeline-name:--section2] [view-timeline-axis:block] snap-end">
//         <img
//           src="https://unsplash.it/1920/1920/?v=2"
//           alt="real estate business."
//           className="w-full h-full object-cover -z-10 absolute animate-parallax [animation-timeline:--section2] [animation-range:entry_exit]"
//         />
//         <h2 className="text-[10vw] text-white mix-blend-exclusion">Parallax 2</h2>
//       </div>

//       {/* Section 3 */}
//       <div className="w-full h-screen relative overflow-hidden grid place-content-center [view-timeline-name:--section3] [view-timeline-axis:block] snap-end">
//         <img
//           src="https://unsplash.it/1920/1920/?v=3"
//           alt="real estate business."
//           className="w-full h-full object-cover -z-10 absolute animate-parallax [animation-timeline:--section3] [animation-range:entry_exit]"
//         />
//         <h2 className="text-[10vw] text-white mix-blend-exclusion">Parallax 3</h2>
//       </div>

//       {/* Section 4 */}
//       <div className="w-full h-screen relative overflow-hidden grid place-content-center [view-timeline-name:--section4] [view-timeline-axis:block] snap-end">
//         <img
//           src="https://unsplash.it/1920/1920/?v=4"
//           alt="real estate business."
//           className="w-full h-full object-cover -z-10 absolute animate-parallax [animation-timeline:--section4] [animation-range:entry_exit]"
//         />
//         <h2 className="text-[10vw] text-white mix-blend-exclusion">Parallax 4</h2>
//       </div>

//       {/* Section 5 */}
//       <div className="w-full h-screen relative overflow-hidden grid place-content-center [view-timeline-name:--section5] [view-timeline-axis:block] snap-end">
//         <img
//           src="https://unsplash.it/1920/1920/?v=5"
//           alt="real estate business."
//           className="w-full h-full object-cover -z-10 absolute animate-parallax [animation-timeline:--section5] [animation-range:entry_exit]"
//         />
//         <h2 className="text-[10vw] text-white mix-blend-exclusion">Parallax 5</h2>
//       </div>
//     </div>
//   );
// }
