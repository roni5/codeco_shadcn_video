// import React from 'react'
// import styles from './realEstate.module.css'

// export default function RealEstateAnalysis() {
//   return (
//     <div className="min-h-screen">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <i className="fas fa-home text-2xl text-pastel-primary mr-3"></i>
//               <span className="serif-font text-xl font-semibold text-gray-800">
//                 Real Estate Analysis
//               </span>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               <a
//                 href="#overview"
//                 className="text-gray-600 hover:text-pastel-primary transition-colors"
//               >
//                 Overview
//               </a>
//               <a
//                 href="#prices"
//                 className="text-gray-600 hover:text-pastel-primary transition-colors"
//               >
//                 Prices
//               </a>
//               <a
//                 href="#growth"
//                 className="text-gray-600 hover:text-pastel-primary transition-colors"
//               >
//                 Growth
//               </a>
//               <a
//                 href="#affordability"
//                 className="text-gray-600 hover:text-pastel-primary transition-colors"
//               >
//                 Affordability
//               </a>
//               <a
//                 href="#insights"
//                 className="text-gray-600 hover:text-pastel-primary transition-colors"
//               >
//                 Insights
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section flex items-center justify-center text-white">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h1 className="serif-font text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
//             <a href="real_estate_data.csv" className="download-btn">
//               <i className="fas fa-download"></i>
//               Download Data
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Executive Summary */}
//       <section id="overview" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="serif-font text-4xl font-bold text-gray-800 mb-4">
//               Executive Summary
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our comprehensive analysis reveals a U.S. housing market in
//               transition, with significant affordability challenges and regional
//               disparities shaping the current landscape.
//             </p>
//           </div>

//           {/* Key Metrics */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             <div className="metric-card card p-6 text-center">
//               <div className="text-3xl font-bold text-pastel-primary mb-2">
//                 36
//               </div>
//               <div className="text-gray-600 font-medium">Cities Analyzed</div>
//             </div>
//             <div className="metric-card card p-6 text-center">
//               <div className="text-3xl font-bold text-pastel-secondary mb-2">
//                 $489K
//               </div>
//               <div className="text-gray-600 font-medium">Average Price</div>
//             </div>
//             <div className="metric-card card p-6 text-center">
//               <div className="text-3xl font-bold text-pastel-highlight mb-2">
//                 5.7
//               </div>
//               <div className="text-gray-600 font-medium">
//                 Avg Price-to-Income
//               </div>
//             </div>
//             <div className="metric-card card p-6 text-center">
//               <div className="text-3xl font-bold text-pastel-accent mb-2">
//                 -0.5%
//               </div>
//               <div className="text-gray-600 font-medium">Price Growth</div>
//             </div>
//           </div>

//           {/* Key Findings */}
//           <div className="insight-box">
//             <h3 className="serif-font text-xl font-semibold mb-3 text-gray-800">
//               <i className="fas fa-lightbulb text-pastel-primary mr-2"></i>
//               Key Findings
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>
//                 <strong>Market Correction:</strong> Average price decline of
//                 -0.49% indicates market stabilization after pandemic surge
//               </li>
//               <li>
//                 <strong>Affordability Crisis:</strong> Average price-to-income
//                 ratio of 5.7 is 90% above recommended levels
//               </li>
//               <li>
//                 <strong>Geographic Disparity:</strong> Clear divide between
//                 premium coastal markets and affordable inland cities
//               </li>
//               <li>
//                 <strong>Income Growth:</strong> Average income growth of 4.13%
//                 provides partial relief despite price corrections
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <div className="section-divider"></div>

//       {/* Housing Price Statistics */}
//       <section id="prices" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="serif-font text-4xl font-bold text-gray-800 mb-4">
//               Housing Price Statistics
//             </h2>
//             <p className="text-lg text-gray-600">
//               Analysis of median home prices across major U.S. metropolitan
//               areas
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             {/* Most Expensive Cities */}
//             <div className="card p-6">
//               <h3 className="serif-font text-2xl font-semibold mb-4 text-pastel-primary">
//                 <i className="fas fa-crown mr-2"></i>Most Expensive Cities
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">San Jose, CA</span>
//                   <span className="text-pastel-primary font-bold">$1.58M</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">San Francisco, CA</span>
//                   <span className="text-pastel-primary font-bold">$1.13M</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Los Angeles, CA</span>
//                   <span className="text-pastel-primary font-bold">$959K</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">San Diego, CA</span>
//                   <span className="text-pastel-primary font-bold">$926K</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="font-medium">Seattle, WA</span>
//                   <span className="text-pastel-primary font-bold">$751K</span>
//                 </div>
//               </div>
//             </div>

//             {/* Most Affordable Cities */}
//             <div className="card p-6">
//               <h3 className="serif-font text-2xl font-semibold mb-4 text-pastel-secondary">
//                 <i className="fas fa-home mr-2"></i>Most Affordable Cities
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Pittsburgh, PA</span>
//                   <span className="text-pastel-secondary font-bold">$233K</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Oklahoma City, OK</span>
//                   <span className="text-pastel-secondary font-bold">$243K</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Memphis, TN</span>
//                   <span className="text-pastel-secondary font-bold">$244K</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Cleveland, OH</span>
//                   <span className="text-pastel-secondary font-bold">$248K</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="font-medium">Birmingham, AL</span>
//                   <span className="text-pastel-secondary font-bold">$257K</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Price Analysis Chart */}
//           <div className="chart-container">
//             <h3 className="serif-font text-2xl font-semibold mb-6 text-gray-800">
//               Housing Price Distribution
//             </h3>
//             <div id="priceChart" style={{ height: '400px' }}></div>
//           </div>
//         </div>
//       </section>

//       <div className="section-divider"></div>

//       {/* Housing Growth Trends */}
//       <section id="growth" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="serif-font text-4xl font-bold text-gray-800 mb-4">
//               Housing Price Growth Trends
//             </h2>
//             <p className="text-lg text-gray-600">
//               Year-over-year price changes reveal market momentum and regional
//               dynamics
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             {/* Fastest Growing */}
//             <div className="card p-6">
//               <h3 className="serif-font text-2xl font-semibold mb-4 text-pastel-secondary">
//                 <i className="fas fa-arrow-up mr-2"></i>Fastest Growing Cities
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Cleveland, OH</span>
//                   <span className="text-pastel-secondary font-bold">
//                     +4.66%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Louisville, KY</span>
//                   <span className="text-pastel-secondary font-bold">
//                     +3.99%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Detroit, MI</span>
//                   <span className="text-pastel-secondary font-bold">
//                     +3.92%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">New York, NY</span>
//                   <span className="text-pastel-secondary font-bold">
//                     +3.72%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="font-medium">Chicago, IL</span>
//                   <span className="text-pastel-secondary font-bold">
//                     +3.61%
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Declining Markets */}
//             <div className="card p-6">
//               <h3 className="serif-font text-2xl font-semibold mb-4 text-pastel-highlight">
//                 <i className="fas fa-arrow-down mr-2"></i>Declining Markets
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Tampa, FL</span>
//                   <span className="text-pastel-highlight font-bold">
//                     -6.20%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Austin, TX</span>
//                   <span className="text-pastel-highlight font-bold">
//                     -6.13%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Miami, FL</span>
//                   <span className="text-pastel-highlight font-bold">
//                     -4.67%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Orlando, FL</span>
//                   <span className="text-pastel-highlight font-bold">
//                     -4.35%
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="font-medium">Dallas, TX</span>
//                   <span className="text-pastel-highlight font-bold">
//                     -3.88%
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Growth Analysis Chart */}
//           <div className="chart-container">
//             <h3 className="serif-font text-2xl font-semibold mb-6 text-gray-800">
//               Price Growth Analysis
//             </h3>
//             <div id="growthChart" style={{ height: '400px' }}></div>
//           </div>

//           <div className="insight-box mt-8">
//             <h4 className="serif-font text-lg font-semibold mb-2 text-gray-800">
//               Growth Trend Insights
//             </h4>
//             <p className="text-gray-700">
//               The data reveals a market correction after the pandemic-driven
//               surge. Midwestern cities like Cleveland and Louisville are showing
//               resilience with positive growth, while previously overheated
//               markets in Florida and Texas are experiencing necessary
//               corrections. This suggests a healthier, more balanced market
//               emerging.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="section-divider"></div>

//       {/* Housing Affordability */}
//       <section id="affordability" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="serif-font text-4xl font-bold text-gray-800 mb-4">
//               Housing Affordability Analysis
//             </h2>
//             <p className="text-lg text-gray-600">
//               Price-to-income ratios reveal the affordability crisis across U.S.
//               markets
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             {/* Most Affordable */}
//             <div className="card p-6">
//               <h3 className="serif-font text-2xl font-semibold mb-4 text-pastel-secondary">
//                 <i className="fas fa-check-circle mr-2"></i>Most Affordable
//                 Cities
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Oklahoma City, OK</span>
//                   <span className="text-pastel-secondary font-bold">3.5</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Pittsburgh, PA</span>
//                   <span className="text-pastel-secondary font-bold">3.6</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Louisville, KY</span>
//                   <span className="text-pastel-secondary font-bold">4.0</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Tampa, FL</span>
//                   <span className="text-pastel-secondary font-bold">4.3</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="font-medium">Chicago, IL</span>
//                   <span className="text-pastel-secondary font-bold">4.3</span>
//                 </div>
//               </div>
//             </div>

//             {/* Least Affordable */}
//             <div className="card p-6">
//               <h3 className="serif-font text-2xl font-semibold mb-4 text-pastel-highlight">
//                 <i className="fas fa-exclamation-triangle mr-2"></i>Least
//                 Affordable Cities
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">Los Angeles, CA</span>
//                   <span className="text-pastel-highlight font-bold">11.7</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">San Jose, CA</span>
//                   <span className="text-pastel-highlight font-bold">10.7</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">New York, NY</span>
//                   <span className="text-pastel-highlight font-bold">8.8</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                   <span className="font-medium">San Diego, CA</span>
//                   <span className="text-pastel-highlight font-bold">8.3</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="font-medium">San Francisco, CA</span>
//                   <span className="text-pastel-highlight font-bold">8.1</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Affordability Crisis Alert */}
//           <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
//             <div className="flex items-center">
//               <i className="fas fa-exclamation-triangle text-red-400 text-2xl mr-4"></i>
//               <div>
//                 <h4 className="font-semibold text-red-800 mb-2">
//                   Affordability Crisis Alert
//                 </h4>
//                 <p className="text-red-700">
//                   Only 2 out of 36 cities analyzed meet the recommended
//                   affordability standard of 3.0 or lower. The average
//                   price-to-income ratio of 5.7 indicates a severe affordability
//                   crisis across major U.S. markets.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Affordability Chart */}
//           <div className="chart-container">
//             <h3 className="serif-font text-2xl font-semibold mb-6 text-gray-800">
//               Affordability Analysis
//             </h3>
//             <div id="affordabilityChart" style={{ height: '400px' }}></div>
//           </div>
//         </div>
//       </section>

//       <div className="section-divider"></div>

//       {/* Market Insights */}
//       <section id="insights" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="serif-font text-4xl font-bold text-gray-800 mb-4">
//               Market Insights &amp; Recommendations
//             </h2>
//             <p className="text-lg text-gray-600">
//               Strategic implications for buyers, investors, and policymakers
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {/* For Buyers */}
//             <div className="card p-6">
//               <div className="text-center mb-4">
//                 <i className="fas fa-user text-4xl text-pastel-primary mb-3"></i>
//                 <h3 className="serif-font text-xl font-semibold">
//                   For Home Buyers
//                 </h3>
//               </div>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>
//                   • Consider Midwestern growth markets for better affordability
//                 </li>
//                 <li>
//                   • Oklahoma City and Pittsburgh offer ratios near recommended
//                   levels
//                 </li>
//                 <li>
//                   • Avoid overheated coastal markets unless financially secure
//                 </li>
//                 <li>• Monitor interest rate impacts on purchasing power</li>
//               </ul>
//             </div>

//             {/* For Investors */}
//             <div className="card p-6">
//               <div className="text-center mb-4">
//                 <i className="fas fa-chart-line text-4xl text-pastel-secondary mb-3"></i>
//                 <h3 className="serif-font text-xl font-semibold">
//                   For Investors
//                 </h3>
//               </div>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>
//                   • Focus on cities with positive growth and reasonable ratios
//                 </li>
//                 <li>• Cleveland, Louisville showing strong growth potential</li>
//                 <li>• Avoid Florida markets during current correction phase</li>
//                 <li>• Consider rental markets in high-ratio cities</li>
//               </ul>
//             </div>

//             {/* For Policymakers */}
//             <div className="card p-6">
//               <div className="text-center mb-4">
//                 <i className="fas fa-landmark text-4xl text-pastel-accent mb-3"></i>
//                 <h3 className="serif-font text-xl font-semibold">
//                   For Policymakers
//                 </h3>
//               </div>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>
//                   • Address severe affordability crisis in coastal markets
//                 </li>
//                 <li>• Implement zoning reforms to increase housing supply</li>
//                 <li>• Support affordable housing initiatives</li>
//                 <li>
//                   • Consider tax incentives for development in underserved areas
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Regional Analysis */}
//           <div className="card p-8 mb-8">
//             <h3 className="serif-font text-2xl font-semibold mb-6 text-gray-800">
//               Regional Market Analysis
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-pastel-primary rounded-full flex items-center justify-center mx-auto mb-3">
//                   <i className="fas fa-mountain text-white text-xl"></i>
//                 </div>
//                 <h4 className="font-semibold mb-2">West Coast</h4>
//                 <p className="text-sm text-gray-600">
//                   Highest prices, moderate growth, severe affordability
//                   challenges
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-pastel-secondary rounded-full flex items-center justify-center mx-auto mb-3">
//                   <i className="fas fa-city text-white text-xl"></i>
//                 </div>
//                 <h4 className="font-semibold mb-2">Midwest</h4>
//                 <p className="text-sm text-gray-600">
//                   Moderate prices, positive growth, better affordability
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-pastel-highlight rounded-full flex items-center justify-center mx-auto mb-3">
//                   <i className="fas fa-sun text-white text-xl"></i>
//                 </div>
//                 <h4 className="font-semibold mb-2">South</h4>
//                 <p className="text-sm text-gray-600">
//                   Mixed performance, Florida correction, Texas cooling
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-pastel-accent rounded-full flex items-center justify-center mx-auto mb-3">
//                   <i className="fas fa-building text-white text-xl"></i>
//                 </div>
//                 <h4 className="font-semibold mb-2">Northeast</h4>
//                 <p className="text-sm text-gray-600">
//                   Stable premium markets, limited affordability
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Data Sources */}
//           <div className="card p-6">
//             <h3 className="serif-font text-xl font-semibold mb-4 text-gray-800">
//               <i className="fas fa-database text-pastel-primary mr-2"></i>
//               Data Sources &amp; Methodology
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-semibold mb-2">Data Sources</h4>
//                 <ul className="text-sm text-gray-600 space-y-1">
//                   <li>• Zillow Home Value Index (ZHVI)</li>
//                   <li>• U.S. Census Bureau American Community Survey</li>
//                   <li>• SmartAsset Income Analysis</li>
//                   <li>• Redfin Market Data</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-2">Analysis Methods</h4>
//                 <ul className="text-sm text-gray-600 space-y-1">
//                   <li>• Year-over-year percentage calculations</li>
//                   <li>• Price-to-income ratio analysis</li>
//                   <li>• Statistical significance testing</li>
//                   <li>• Geographic clustering analysis</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Download Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h3 className="serif-font text-2xl font-semibold mb-4 text-gray-800">
//             Access the Complete Dataset
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Download the raw data used in this analysis for your own research
//             and insights.
//           </p>
//           <a href="real_estate_data.csv" className="download-btn text-lg">
//             <i className="fas fa-download"></i>
//             Download CSV Data
//           </a>
//         </div>
//       </section>
//     </div>
//   )
// }