export default function GlassmorphNavbar() {
	return (
		<nav className="bg-gradient-to-r from-slate-900 to-slate-800 bg-opacity-50 backdrop-blur-lg border border-slate-200 rounded-lg shadow-lg p-4 flex items-center justify-between">
			<div className="flex items-center space-x-4">
				<a href="/" className="text-white text-lg font-semibold">
					Logo
				</a>
				<a href="/about" className="text-white hover:text-gray-300">
					About
				</a>
				<a href="/services" className="text-white hover:text-gray-300">
					Services
				</a>
				<a href="/contact" className="text-white hover:text-gray-300">
					Contact
				</a>
			</div>
			<div className="flex items-center space-x-4">
				<a href="/login" className="text-white hover:text-gray-300">
					Login
				</a>
				<a href="/signup" className="text-white hover:text-gray-300">
					Sign Up
				</a>
				<button
					type="button"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Get Started
				</button>
			</div>
			glassmorph-navbar
		</nav>
	);
}
