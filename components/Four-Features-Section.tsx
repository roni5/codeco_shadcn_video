import { ArrowRight } from "lucide-react";

export default function FourSection() {
	return (
		<>
			<section
				id="features"
				className="py-24  md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-neutral-900 to-slate-950"
			>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Feature 1 */}
						<div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50">
							<div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
								<div className="text-6xl">⌖</div>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">
								Easy to Use
							</h3>
							<p className="text-slate-300 mb-6 leading-relaxed">
								Solve data problems with ease. Drag-and-drop interface and
								AI-guided data automation enables anyone to analyze, discover,
								and share insights.
							</p>
							<a
								href="/"
								className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
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
							<div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
								<div className="text-6xl">&#x26AB;</div>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">
								Automate Data at Scale
							</h3>
							<p className="text-slate-300 mb-6 leading-relaxed">
								Go from menial tasks to meaningful work. Eliminate repetitive
								work and manual errors with data automation and repeatable
								workflows.
							</p>
							<a
								href="/"
								className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
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
							<div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
								<div className="text-6xl">&#x2318;</div>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">
								Boost Data Analytics Productivity
							</h3>
							<p className="text-slate-300 mb-6 leading-relaxed">
								Prep less and deliver more. Self-service data prep and automated
								data analytics help analysts accelerate business impact.
							</p>
							<a
								href="/"
								className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
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
							<div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
								<div className="text-6xl">⨀</div>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">
								Ensure Governance
							</h3>
							<p className="text-slate-300 mb-6 leading-relaxed">
								Multi-layered governance you can trust. Proven and robust
								security and governance features that support IT compliance.
							</p>
							<a
								href="/"
								className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
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
						<button
							type="button"
							className="px-8 py-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
						>
							Learn More About the Platform
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
