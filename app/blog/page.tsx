import Link from "next/link";

// 1. DATA STRUCTURE: Matches the "Database" keys we created in the article page
const blogPosts = [
	{
		id: 1,
		slug: "nextjs-2025", // <--- THIS MATCHES YOUR [slug] FILE KEYS
		title: "The Future of Next.js in 2025",
		excerpt:
			"Why server components and partial prerendering are changing the game for full-stack developers.",
		date: "Nov 21, 2025",
		category: "Development",
		image:
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
		readTime: "5 min read",
	},
	{
		id: 2,
		slug: "tailwind-tips", // <--- THIS MATCHES YOUR [slug] FILE KEYS
		title: "Mastering Tailwind CSS Gradients",
		excerpt:
			'How to create "GOAT" level UI effects without writing a single line of custom CSS.',
		date: "Nov 20, 2025",
		category: "Design",
		image:
			"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
		readTime: "7 min read",
	},
	{
		id: 3,
		slug: "postgres-optimization",
		title: "Postgres Optimization Techniques",
		excerpt:
			"Ensure your database queries are idempotent and lightning fast with these indexing strategies.",
		date: "Nov 18, 2025",
		category: "Backend",
		image:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
		readTime: "10 min read",
	},
];

const categories = [
	"Development",
	"Design",
	"Backend",
	"DevOps",
	"Cloud Architecture",
];

export default function BlogPage() {
	return (
		<section className="min-h-screen w-full bg-linear-to-br from-blue-50 via-white to-purple-50 py-12 lg:py-24">
			<div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* --- LEFT COLUMN: Blog Feed --- */}
					<div className="lg:col-span-2 space-y-10">
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-gray-900">
								Latest Articles
							</h2>
							<p className="mt-2 text-gray-600">
								Insights from the engineering team.
							</p>
						</div>

						<div className="grid gap-10">
							{blogPosts.map((post) => (
								// 2. LINKING: We use the 'slug' here to route correctly
								<Link
									key={post.id}
									href={`/blog/${post.slug}`}
									className="group block"
								>
									<div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:rotate-[0.5deg]">
										<div className="flex flex-col sm:flex-row h-full">
											{/* Image */}
											<div className="sm:w-48 md:w-64 h-48 sm:h-auto relative overflow-hidden shrink-0">
												<img
													className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
													src={post.image}
													alt={post.title}
												/>
											</div>

											{/* Content */}
											<div className="p-6 flex flex-col justify-between grow">
												<div>
													<div className="flex items-center gap-x-3 text-xs font-semibold text-blue-600 uppercase tracking-wide">
														{post.category}
														<span className="text-gray-300">•</span>
														<span className="text-gray-500 font-normal normal-case">
															{post.date}
														</span>
													</div>

													<h3 className="mt-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
														{post.title}
													</h3>

													<p className="mt-2 text-gray-600 line-clamp-2">
														{post.excerpt}
													</p>
												</div>

												<div className="mt-5 flex items-center justify-between">
													<span className="text-sm text-gray-500">
														{post.readTime}
													</span>
													<span className="text-blue-600 text-sm font-medium group-hover:underline">
														Read Article &rarr;
													</span>
												</div>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>

						{/* Load More */}
						<div className="mt-12 text-center">
							<button
								type="button"
								className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 hover:text-blue-600 transition-all"
							>
								Load more articles
							</button>
						</div>
					</div>

					{/* --- RIGHT COLUMN: Sidebar --- */}
					<div className="lg:col-span-1">
						<div className="flex flex-col gap-8 sticky top-10">
							{/* Search */}
							<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg shadow-blue-900/5">
								<h3 className="text-lg font-bold text-gray-800 mb-4">Search</h3>
								<div className="relative">
									<input
										type="text"
										className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
										placeholder="Search articles..."
									/>
									<div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-4">
										<svg
											role="img"
											aria-hidden="false"
											className="size-4 text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<title>Search</title>
											<circle cx="11" cy="11" r="8" />
											<path d="m21 21-4.3-4.3" />
										</svg>
									</div>
								</div>
							</div>

							{/* Categories */}
							<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg shadow-purple-900/5">
								<h3 className="text-lg font-bold text-gray-800 mb-4">
									Categories
								</h3>
								<div className="flex flex-wrap gap-2">
									{categories.map((cat) => (
										<Link
											key={cat}
											href={`/category/${cat.toLowerCase()}`}
											className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg border border-transparent bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
										>
											{cat}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
