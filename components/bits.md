  <img
                  className="relative object-cover w-full h-full border-r border-neutral-800 rounded-br-xl"
                  src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHx3b3JrfGVufDB8MXx8fDE3NTAwNjA4NTV8MA&ixlib=rb-4.1.0&q=80&w=960"
                  alt=""
                />

  import { ArrowRight } from "lucide-react";



export default function FourSection() {
  return (
    <>
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50">
              <div className="w-56 h-48 mb-6 bg-linear-to-br from-emerald-500/20 to-teal-600/20 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-6xl">🎯</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Solve data problems with ease. Drag-and-drop interface and
                AI-guided data automation enables anyone to analyze, discover,
                and share insights.
              </p>
              <a
                href="/"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </a>
            </div>

            {/* Feature 2 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-orange-500/50">
              <div className="w-56 h-48 mb-6 bg-linear-to-br from-orange-500/20 to-red-600/20 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-6xl">⚡</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Automate Data at Scale
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Go from menial tasks to meaningful work. Eliminate repetitive
                work and manual errors with data automation and repeatable
                workflows.
              </p>
              <a
                href="/"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </a>
            </div>

            {/* Feature 3 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50">
              <div className="w-56 h-48 mb-6 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-6xl">📊</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Boost Data Analytics Productivity
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Prep less and deliver more. Self-service data prep and automated
                data analytics help analysts accelerate business impact.
              </p>
              <a
                href="/"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </a>
            </div>

            {/* Feature 4 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-green-500/50">
              <div className="w-56 h-48 mb-6 bg-linear-to-br from-green-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-6xl">🔒</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ensure Governance</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Multi-layered governance you can trust. Proven and robust
                security and governance features that support IT compliance.
              </p>
              <a
                href="/"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </a>
            </div>
          </div>

          <div className="text-center mt-16">
            <button type="button" className="px-8 py-4 bg-linear-to-r from-cyan-600 to-blue-700 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
              Learn More About the Platform
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
