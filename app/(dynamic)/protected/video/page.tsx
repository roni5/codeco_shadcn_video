"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavItem {
	id: string;
	label: string;
	href?: string;
	dropdown?: Array<{ id: string; label: string; href: string }>;
}

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const navItems: NavItem[] = [
		{
			id: "tutorials",
			label: "Tutorials",
			dropdown: [
				{ id: "basics", label: "Basics", href: "/tutorials/basics" },
				{ id: "database", label: "Database", href: "/tutorials/database" },
				{
					id: "photo-effects",
					label: "Photo Effects",
					href: "/tutorials/photo-effects",
				},
				{
					id: "hosting",
					label: "Hosting",
					href: "/tutorials/hosting",
				},
			],
		},
		{
			id: "resources",
			label: "Resources",
			dropdown: [
				{ id: "templates", label: "Templates", href: "/resources/templates" },
				{ id: "commands", label: "Commands", href: "/resources/commands" },
				{ id: "blocks", label: "Blocks", href: "/resources/blocks" },
				{ id: "icons", label: "Icons", href: "/resources/icons" },
			],
		},
		{ id: "features", label: "Features", href: "/features" },
		{ id: "support", label: "Support", href: "/support" },
		{ id: "contact", label: "Contact", href: "/contact" },
	];

	return (
		<nav className="bg-gradient-to-r from-purple-600 to-pink-400 text-white rounded-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 antialiased">
				<div className="flex items-center justify-between h-16 antialiased">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a
							href="/"
							className="text-2xl font-bold tracking-md text-pretty antialiased"
						>
							Codeco.tech
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1 text-pretty antialiased">
						{navItems.map((item) => (
							<div key={item.id} className="relative group">
								{item.dropdown ? (
									<>
										<button
											type="button"
											className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-1 text-pretty"
										>
											{item.label}
											<ChevronDown size={16} />
										</button>
										<div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg text-pretty opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
											{item.dropdown.map((subItem) => (
												<a
													key={subItem.id}
													href={subItem.href}
													className="block px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
												>
													{subItem.label}
												</a>
											))}
										</div>
									</>
								) : (
									<a
										href={item.href || "#"}
										className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
									>
										{item.label}
									</a>
								)}
							</div>
						))}
					</div>

					{/* Auth Links */}
					<div className="hidden md:flex items-center space-x-4">
						<a href="/login" className="text-sm hover:underline">
							Log in
						</a>
						<a href="/register" className="text-sm hover:underline">
							Register
						</a>
					</div>

					{/* Mobile menu button */}
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="md:hidden bg-white/10 backdrop-blur-sm text-pretty">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navItems.map((item) => (
							<div key={item.id}>
								{item.dropdown ? (
									<>
										<button
											type="button"
											onClick={() =>
												setOpenDropdown(
													openDropdown === item.id ? null : item.id,
												)
											}
											className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors flex items-center justify-between"
										>
											{item.label}
											<ChevronDown
												size={16}
												className={`transition-transform ${openDropdown === item.id ? "rotate-180" : ""}`}
											/>
										</button>
										{openDropdown === item.id && (
											<div className="pl-4 space-y-1">
												{item.dropdown.map((subItem) => (
													<a
														key={subItem.id}
														href={subItem.href}
														className="block px-3 py-2 rounded-md text-sm hover:bg-white/10"
													>
														{subItem.label}
													</a>
												))}
											</div>
										)}
									</>
								) : (
									<a
										href={item.href || "#"}
										className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
									>
										{item.label}
									</a>
								)}
							</div>
						))}
						<div className="border-t border-white/20 pt-3 mt-3 space-y-1">
							<a
								href="/login"
								className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
							>
								Log in
							</a>
							<a
								href="/register"
								className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
							>
								Register
							</a>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

const VideoPlayer = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="bg-black rounded-lg overflow-hidden shadow-2xl">
				<div className="relative" style={{ paddingTop: "56.25%" }}>
					<video
						className="absolute top-0 left-0 w-full h-full"
						controls
						preload="metadata"
						poster="/img/codeco-fib.png"
					>
						<source src="video/code-fib-func.mp4" />
						<track
							kind="captions"
							src="/captions/video-captions.vtt"
							srcLang="en"
							label="English"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	);
};

export default function VideoPage() {
	return (
		<div className="min-h-screen full-width bg-white  mt-8 p-8">
			<main>
				<VideoPlayer />
			</main>
			<section className="flex-1">
				<Navigation />
			</section>
		</div>
	);
}
