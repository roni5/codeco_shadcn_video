import BackButton from "@/components/BackButton ";
import BackButton2 from "@/components/BackButton2";
import Link from "next/link";
import { notFound } from "next/navigation";
// -----------------------------------------------------------------------------
// 1. REAL WORLD SIMULATION: The Data Layer
// -----------------------------------------------------------------------------
// In production, you will replace this object with:
// const post = await db.query.posts.findFirst({ where: eq(posts.slug, slug) });
// -----------------------------------------------------------------------------

const articlesData: Record<
	string,
	{
		title: string;
		subtitle: string;
		date: string;
		readTime: string;
		category: string;
		content: string;
		image: string;
	}
> = {
	// SLUG: 'nextjs-2025' (Must match the slug in your Main Page links)
	"nextjs-2025": {
		title: "The Future of Next.js in 2025",
		subtitle:
			"Why server components and partial prerendering are changing the game for full-stack developers.",
		date: "Nov 21, 2025",
		readTime: "5 min read",
		category: "Development",
		image:
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
		content:
			'Next.js 15 introduces a paradigm shift in how we handle caching. By default, fetch requests are no longer cached, giving developers granular control via the "use cache" directive. This article explores how to migrate your existing ECS containers to support these new Node.js runtime requirements...',
	},

	// SLUG: 'tailwind-tips'
	"tailwind-tips": {
		title: "Mastering Tailwind CSS Gradients",
		subtitle:
			'How to create "GOAT" level UI effects without writing a single line of custom CSS.',
		date: "Nov 20, 2025",
		readTime: "7 min read",
		category: "Design",
		image:
			"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
		content:
			'Gradients in 2025 are subtle. We moved away from harsh contrasts to "mesh" gradients. Using the utility "bg-gradient-to-br from-blue-50 via-white to-purple-50" creates an imperial, high-end aesthetic that works perfectly for SaaS pricing pages...',
	},

	// SLUG: 'postgres-optimization'
	"postgres-optimization": {
		title: "Postgres Optimization Techniques",
		subtitle:
			"Ensure your database queries are idempotent and lightning fast with these indexing strategies.",
		date: "Nov 18, 2025",
		readTime: "10 min read",
		category: "Backend",
		image:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
		content:
			'When using Drizzle ORM with Postgres, N+1 problems can silently kill your performance. In this guide, we look at how to use "db.query.findMany" with the "with" operator to fetch relations efficiently in a single query...',
	},
};

// -----------------------------------------------------------------------------
// 2. THE PAGE COMPONENT
// -----------------------------------------------------------------------------
export default async function ArticlePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	// Step A: Unwrap the params (Next.js 15 requirement)
	const { slug } = await params;

	// Step B: Fetch Data (Simulating DB Call)
	const post = articlesData[slug];

	// Step C: Handle 404 if slug is wrong
	if (!post) {
		notFound();
	}

	// Step D: Render Template
	return (
		<div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			{/* Article Container */}
			<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
				<div className="max-w-2xl mx-auto">
					{/* --- 1. Navigation & Meta --- */}
					<div className="flex justify-between items-center mb-8">
						<div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
							{/* Back Button */}
							<Link href="/blog" className="shrink-0 group mt-8">
								<div className="flex items-center gap-x-2 text-gray-600 hover:text-blue-600 transition-colors">
									<BackButton />
								</div>
							</Link>

							<div className="grow text-end sm:text-start sm:flex sm:items-center sm:gap-x-3">
								{/* Author Avatar */}
								<div className="hidden sm:block shrink-0 ml-auto sm:ml-0">
									<img
										className="size-10 rounded-full shadow-sm ring-2 ring-white"
										src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
										alt="Avatar"
									/>
								</div>

								{/* Meta Info */}
								<div className="hidden sm:block">
									<div className="flex items-center gap-x-2">
										<span className="font-bold text-gray-900 text-sm">
											Leyla Ludic
										</span>
										<span className="text-gray-300">|</span>
										<span className="text-xs text-gray-500">{post.date}</span>
										<span className="text-gray-300">|</span>
										<span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
											{post.category}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* --- 2. Title & Hero Image --- */}
					<div className="space-y-6 md:space-y-8">
						<div className="space-y-3">
							<h1 className="text-3xl font-bold md:text-4xl text-gray-900">
								{post.title}
							</h1>
							<p className="text-lg text-gray-800 leading-relaxed">
								{post.subtitle}
							</p>
						</div>

						<figure>
							<img
								className="w-full object-cover rounded-2xl shadow-lg transition-transform hover:scale-[1.01] duration-500"
								src={post.image}
								alt={post.title}
							/>
							<figcaption className="mt-3 text-sm text-center text-gray-500">
								Image source: Unsplash
							</figcaption>
						</figure>

						{/* --- 3. Main Content --- */}
						<div className="text-lg text-gray-800 leading-relaxed space-y-6">
							<p>{post.content}</p>

							<p>
								(This is where the rest of your MDX or HTML content would
								render. Since we are simulating, I am repeating the text to show
								layout volume.)
							</p>

							<p>{post.content}</p>

							<div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
								<h3 className="text-blue-900 font-bold mb-2">Key Takeaway</h3>
								<p className="text-blue-800 text-sm">
									Always ensure your folder structure follows the{" "}
									<code>app/blog/[slug]/page.tsx</code> convention for dynamic
									routing in Next.js.
								</p>
							</div>
						</div>

						{/* --- 4. Tags --- */}
						<div className="pt-8 flex flex-wrap gap-2 border-t border-gray-200 mt-8">
							<span className="py-2 px-4 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600">
								#Nextjs
							</span>
							<span className="py-2 px-4 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600">
								#WebDev
							</span>
							<span className="py-2 px-4 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600">
								#2025
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
