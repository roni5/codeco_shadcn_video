export default function PortfolioNavbar() {
	return (
		<header className="w-full border-b border-gray-200 py-3">
			<div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
				<div className="font-semibold">Portfolio Demo</div>
				<nav className="flex gap-4 text-sm">
					<a href="/demo/portfolio" className="hover:underline">
						Home
					</a>
					<a href="/" className="hover:underline">
						Main
					</a>
				</nav>
			</div>
		</header>
	);
}
