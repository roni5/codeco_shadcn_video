import Bento from '@/components/Bento'
import Bento2 from '@/components/Bento2'
import ChatWidget from '@/components/ChatWidget'
import FrontChat from '@/components/FrontChat'

export default function page() {
  return (
    <div className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white max-md:relative max-md:bg-white/90 max-md:py-16">
      {/* Blurred gradient background */}
      <div
        className="absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/1078] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#facedd]via-stone-50 to-[#c1d0ff] opacity-20 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-36">
        {/* Hero section with trapezoid image and overlay text */}
        <div className="relative px-2  md:px-[30px]">
          {/* Trapezoid image */}
          <svg
            viewBox="0 0 100 30"
            className="w-full h-auto  max-h-[40vh] sm:max-h-[60vh] md:max-h-[38vh]"
          >
            <title>Trapezoid Clipped Image</title>
            <defs>
              <clipPath id="trapezoid-clip" clipPathUnits="objectBoundingBox">
                <polygon points="0.15 0, 0.85 0, 1 1, 0 1" />
              </clipPath>
            </defs>
            <image
              clipPath="url(#trapezoid-clip)"
              href="img/warmwind-wallpaper.webp"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>

          {/* Overlay text positioned absolutely over the trapezoid */}
          <div className="absolute inset-0 flex items-start justify-center pt-[3%] sm:pt-[6%] sm:-mt-8 md:pt-[5%]">
            <div className="w-full h-full flex items-start     justify-center">
              <h1
                className="max-w-[280px] sm:max-w-sm md:max-w-lg text-center text-2xl sm:text-xl md:text-4xl lg:text-5xl font-semibold  tracking-tight text-white drop-shadow-2xl px-4"
                style={{
                  transform: 'perspective(400px) rotateX(20deg)',
                  transformOrigin: 'center bottom',
                }}
              >
                Everything you need to deploy
                <br />
                your app
              </h1>
            </div>
          </div>
        </div>
        <FrontChat />

        {/* Start of your hero content */}
        <Bento2 />
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                {/* Add your logo, navigation, etc. here */}
              </div>
            </nav>
            {/* Add your headline, CTAs, and main content here */}
          </div>
        </header>
      </div>
    </div>
  )
}
// import Bento from '@/components/Bento'

// export default function page() {
//   return (
//     <div className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white max-md:relative max-md:bg-white/90 max-md:py-10">
//       {/* Blurred gradient background */}
//       <div
//         className="absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-[calc(50%-11rem)] aspect-[1155/1078] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c1d0ff] to-[#c1d0ff] opacity-20 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//         />
//       </div>

//       <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-36">
//         {/* Hero section with trapezoid image and overlay text */}
//         <div className="relative my-6 md:my-12">
//           {/* Trapezoid image */}
//           <svg viewBox="0 0 100 30" className="w-full h-auto max-h-[40vh]">
//             <title>Trapezoid Clipped Image</title>
//             <defs>
//               <clipPath id="trapezoid-clip" clipPathUnits="objectBoundingBox">
//                 <polygon points="0.15 0, 0.85 0, 1 1, 0 1" />
//               </clipPath>
//             </defs>
//             <image
//               clipPath="url(#trapezoid-clip)"
//               href="img/warmwind-wallpaper.webp"
//               width="100%"
//               height="100%"
//               preserveAspectRatio="xMidYMid slice"
//             />
//           </svg>

//           {/* Overlay text positioned absolutely over the trapezoid */}
//           <div className="absolute inset-0 flex items-start justify-center pt-4 sm:pt-6">
//             <h1 className="max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white drop-shadow-lg sm:text-5xl">
//               Everything you need to deploy your app
//             </h1>
//           </div>
//         </div>

//         {/* Start of your hero content */}
//         <header>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6">
//             <nav
//               className="relative flex items-center justify-between sm:h-10 md:justify-center"
//               aria-label="Global"
//             >
//               <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
//                 {/* Add your logo, navigation, etc. here */}
//               </div>
//             </nav>
//             {/* Add your headline, CTAs, and main content here */}
//             <Bento />
//           </div>
//         </header>
//       </div>
//     </div>
//   )
// }
// import Bento from '@/components/Bento'

// export default function page() {
//   return (
//     <div className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white max-md:relative max-md:bg-white/90 max-md:py-10">
//       {/* Blurred gradient background */}
//       <div
//         className="absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-[calc(50%-11rem)] aspect-[1155/1078] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c1d0ff] to-[#c1d0ff] opacity-20 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//         />
//       </div>

//       <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-36">
//         {/* Hero section with trapezoid image and overlay text */}
//         <div className="relative my-6 md:my-12">
//           {/* Trapezoid image */}
//           <svg viewBox="0 0 100 60" className="w-full h-auto">
//             <title>Trapezoid Clipped Image</title>
//             <defs>
//               <clipPath id="trapezoid-clip" clipPathUnits="objectBoundingBox">
//                 <polygon points="0.15 0, 0.85 0, 1 1, 0 1" />
//               </clipPath>
//             </defs>
//             <image
//               clipPath="url(#trapezoid-clip)"
//               href="img/warmwind-wallpaper.webp"
//               width="100%"
//               height="100%"
//               preserveAspectRatio="xMidYMid slice"
//             />
//           </svg>

//           {/* Overlay text positioned absolutely over the trapezoid */}
//           <div className="absolute inset-0 flex items-start justify-center pt-4 sm:pt-6">
//             <h1 className="max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white drop-shadow-lg sm:text-5xl">
//               Everything you need to deploy your app
//             </h1>
//           </div>
//         </div>

//         {/* Start of your hero content */}
//         <header>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6">
//             <nav
//               className="relative flex items-center justify-between sm:h-10 md:justify-center"
//               aria-label="Global"
//             >
//               <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
//                 {/* Add your logo, navigation, etc. here */}
//               </div>
//             </nav>
//             {/* Add your headline, CTAs, and main content here */}
//             <Bento />
//           </div>
//         </header>
//       </div>
//     </div>
//   )
// }
// import Bento from '@/components/Bento'

// export default function page() {
//   return (
//     <div className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white max-md:relative max-md:bg-white/90 max-md:py-10">
//       {/* Blurred gradient background */}
//       <div
//         className="absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-[calc(50%-11rem)] aspect-[1155/1078] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c1d0ff] to-[#c1d0ff] opacity-20 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//         />
//       </div>

//       <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-36">
//         {/* Hero section with trapezoid image and overlay text */}
//         <div className="relative my-6 md:my-12">
//           {/* Trapezoid image */}
//           <svg viewBox="0 0 100 60" className="w-full h-auto">
//             <title>Trapezoid Clipped Image</title>
//             <defs>
//               <clipPath id="trapezoid-clip" clipPathUnits="objectBoundingBox">
//                 <polygon points="0.15 0, 0.85 0, 1 1, 0 1" />
//               </clipPath>
//             </defs>
//             <image
//               clipPath="url(#trapezoid-clip)"
//               href="img/warmwind-wallpaper.webp"
//               width="100%"
//               height="100%"
//               preserveAspectRatio="xMidYMid slice"
//             />
//           </svg>

//           {/* Overlay text positioned absolutely over the trapezoid */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white drop-shadow-lg sm:text-5xl">
//               Everything you need to deploy your app
//             </h1>
//           </div>
//         </div>

//         {/* Start of your hero content */}
//         <header>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6">
//             <nav
//               className="relative flex items-center justify-between sm:h-10 md:justify-center"
//               aria-label="Global"
//             >
//               <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
//                 {/* Add your logo, navigation, etc. here */}
//               </div>
//             </nav>
//             {/* Add your headline, CTAs, and main content here */}
//             <Bento />
//           </div>
//         </header>
//       </div>
//     </div>
//   )
// }
// import Bento from "@/components/Bento";

// export default function page() {
//   return (
//     <div className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8  bg-white max-md:relative max-md2bg-white/90 max-md:py-10">
//       {/* Blurred gradient background */}
//       <div
//         className="absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-[calc(50%-11rem)] aspect-[1155/1078] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c1d0ff] to-[#c1d0ff] opacity-20 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//         />
//       </div>
//       <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-36">
//       <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
//         Everything you need to deploy your app
//       </h1>
//         <div className="my-6 md:my-12">
//           <svg viewBox="0 0 100 60" className="w-full h-auto">
//             <title>Trapezoid Clipped Image</title>
//             <defs>
//               <clipPath id="trapezoid-clip" clipPathUnits="objectBoundingBox">
//                 <polygon points="0.15 0, 0.85 0, 1 1, 0 1" />
//               </clipPath>
//             </defs>
//             <image
//               clipPath="url(#trapezoid-clip)"
//               href="img/warmwind-wallpaper.webp"
//               width="100%"
//               height="100%"
//               preserveAspectRatio="xMidYMid slice"
//             />
//           </svg>
//         </div>
//         {/* Start of your hero content */}
//         <header>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6">
//             <nav
//               className="relative flex items-center justify-between sm:h-10 md:justify-center"
//               aria-label="Global"
//             >
//               <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
//                 {/* Add your logo, navigation, etc. here */}
//               </div>
//             </nav>
//             {/* Add your headline, CTAs, and main content here */}
//             <Bento />
//           </div>
//         </header>
//       </div>
//     </div>
//   )
// }
