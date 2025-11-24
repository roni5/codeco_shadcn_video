

export default function ZigzagSection() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Build{' '}
            <span
              className="inline-block px-2 py-1  relative text-white bg-primary"
              style={{ borderRadius: '91% 9% 90% 10% / 29% 82% 18% 71%' }}
            >
              stunning
            </span>
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            layouts quickly
          </h1>
          <p className="text-gray-500 text-lg">
            Speed up your workflow in a few simple steps.
          </p>
        </div>

        {/* Section 1 - TEXT LEFT, IMAGE RIGHT */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-40 relative">
          {/* LEFT SIDE - TEXT */}
          <div className="relative z-10">
            <p className="text-sm text-gray-500 mb-3 font-medium">
              Step 1 of 3
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Select Tailwind UI library
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Shuffle offloads your company's design team. Included UI libraries
              give you free rein to create any template. Change the basics and
              create something unique!
            </p>
            <button type="button" className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg">
              Try Demo
            </button>
          </div>

          {/* RIGHT SIDE - IMAGE with BORDER CORNER EFFECT */}
          <div className="relative">
            {/* Decorative dots on the LEFT of image */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gray-300 rounded-full"
                 />
                ))}
              </div>
            </div>

            {/* Large cyan circle background - TOP RIGHT */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-400 rounded-full"/>

            {/* Image container with THICK GRAY BORDER and ROUNDED CORNERS */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gray-300 p-3">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
                  alt="UI Library Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative dots on the BOTTOM RIGHT of image */}
            <div className="absolute -bottom-16 -right-20 hidden lg:block z-20">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gray-300 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - IMAGE LEFT, TEXT RIGHT (ZIGZAG!) */}
        <div className="grid md:grid-cols-2 gap-16 items-center relative">
          {/* LEFT SIDE - IMAGE with BORDER CORNER EFFECT */}
          <div className="relative">
            {/* Large cyan circle background - BOTTOM LEFT */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400 rounded-full">
              <img className="md:hidden xl:block absolute right-0 xl:left-0 bottom-0 mr-2 md:mr-4 xl:-ml-12 -mb-4 md:-mb-8 xl:-mb-20 w-12 h-12 md:w-24 md:h-24 xl:w-56 xl:h-56" src="/img/corner-piece.svg?v=2" alt="icon">
            </img>
            </div>

            {/* Image container with THICK GRAY BORDER and ROUNDED CORNERS */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gray-300 p-3">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                  alt="UI Components"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative dots on the BOTTOM RIGHT of image */}
            <div className="absolute -bottom-16 -right-20 hidden lg:block z-20">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gray-300 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - TEXT */}
          <div className="relative z-10">
            <p className="text-sm text-gray-500 mb-3 font-medium">
              Step 2 of 3
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Choose UI components
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Browse through hundreds of professionally designed components and
              sections. Mix and match to create your perfect layout in minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}