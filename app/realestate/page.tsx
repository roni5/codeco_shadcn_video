import React from 'react'
import styles from './realEstate.module.css'
import {
  Home,
  Crown,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  AlertTriangle,
  User,
  TrendingUp,
  Landmark,
  Mountain,
  Building2,
  Sun,
  Download,
  Lightbulb,
  Database,
} from 'lucide-react'

import ParallaxSection from '@/components/ParallaxSection' // adjust path as needed
//import ParallaxFeature from '@/components/ParallaxFeature'

export default function RealEstateAnalysis() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className={`${styles.textPastelPrimary} mr-3`} size={28} />
              <span
                className={`${styles.serifFont} text-xl font-semibold text-gray-800`}
              >
                Real Estate Analysis
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                'Overview',
                'Prices',
                'Growth',
                'Affordability',
                'Insights',
              ].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-purple-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`${styles.heroSection} flex items-center justify-center text-white`}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1
            className={`${styles.serifFont} text-5xl md:text-6xl font-bold mb-6 leading-tight`}
          >
            U.S. Real Estate Market Analysis
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Comprehensive insights into housing prices, growth trends, and
            affordability across 36 major metropolitan areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#overview"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Analysis
            </a>
            <a href="#download" className={styles.downloadBtn}>
              <Download size={20} />
              Download Data
            </a>
          </div>
        </div>
      </section>

      {/* Parallax Section under Hero */}
      <ParallaxSection />

      {/* Other content, e.g., Download section */}
      <section id="download" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3
            className={`${styles.serifFont} text-2xl font-semibold mb-4 text-gray-800`}
          >
            Access the Complete Dataset
          </h3>
          <p className="text-gray-600 mb-6">
            Download the raw data used in this analysis for your own research
            and insights.
          </p>
          <button type="button" className={`${styles.downloadBtn} text-lg`}>
            <Download size={24} />
            Download CSV Data
          </button>
        </div>
      </section>
    </div>
  )
}


// export default function RealEstateAnalysis() {
//   return (
//     <div className="min-h-screen bg-[#FAFAFA]">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Home className={`${styles.textPastelPrimary} mr-3`} size={28} />
//               <span
//                 className={`${styles.serifFont} text-xl font-semibold text-gray-800`}
//               >
//                 Real Estate Analysis
//               </span>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {[
//                 'Overview',
//                 'Prices',
//                 'Growth',
//                 'Affordability',
//                 'Insights',
//               ].map(link => (
//                 <a
//                   key={link}
//                   href={`#${link.toLowerCase()}`}
//                   className="text-gray-600 hover:text-purple-400 transition-colors"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         className={`${styles.heroSection} flex items-center justify-center text-white`}
//       >
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h1
//             className={`${styles.serifFont} text-5xl md:text-6xl font-bold mb-6 leading-tight`}
//           >
//             U.S. Real Estate Market Analysis
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
//             Comprehensive insights into housing prices, growth trends, and
//             affordability across 36 major metropolitan areas
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="#overview"
//               className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//             >
//               Explore Analysis
//             </a>
//             <a href="#download" className={styles.downloadBtn}>
//               <Download size={20} />
//               Download Data
//             </a>
//           </div>
//         </div>
//       </section>


//       {/* ... keep all other sections the same ... */}



//   <section id="download" className="py-12 bg-gray-50">
//     <div className="max-w-4xl mx-auto text-center px-4">
//       <h3
//         className={`${styles.serifFont} text-2xl font-semibold mb-4 text-gray-800`}
//       >
//         Access the Complete Dataset
//       </h3>
//       <p className="text-gray-600 mb-6">
//         Download the raw data used in this analysis for your own research and
//         insights.
//       </p>
//       <button type="button" className={`${styles.downloadBtn} text-lg`}>
//         <Download size={24} />
//         Download CSV Data
//       </button>
//     </div>
//   </section>
//   </div>
//   )
// }


