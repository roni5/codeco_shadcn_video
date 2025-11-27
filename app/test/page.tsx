import Bento from "@/components/Bento";
import ChatTrigger from "@/components/ChatTrigger";
import GradientCard from "@/components/GradientCard";
import LeftZig from "@/components/LeftZig";
import Pricing from "@/components/Pricing";
import RightZag from "@/components/RightZag";
import TeamMembers from "@/components/TeamMembers";
import ProductCard from "@/components/product-card";

import Teams from "@/components/Teams";
import Link from "next/link";

export default function Hero() {
	// const handleProductClick = () => {
	//   console.log('Product clicked!')
	// }
	return (
		<div className="relative bg-linear-to-br from-slate-900 to-indigo-950 overflow-hidden">
			{/* Background pattern */}
			<div className="hidden lg:block absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-[url('/img/grid.webp')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>
			{/* Hero content */}
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="pt-20 pb-24 md:pt-28 md:pb-32 lg:flex lg:items-center lg:gap-12">
					<div className="lg:w-1/2">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
							<span className="block">Build faster with</span>
							<span className="block mt-2 bg-clip-text bg-linear-to-r from-violet-600 to-fuchsia-700 text-transparent">
								Next.js 15 & Tailwind 4
							</span>
						</h1>
						<p className="mt-6 text-lg text-slate-300 max-w-xl">
							Create beautiful, responsive web applications with the latest web
							technologies. Leverage the power of Next.js 15 and Tailwind CSS 4
							for unprecedented developer experience.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row gap-4">
							<Link
								href="/get-started"
								className="rounded-md bg-violet-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors  duration-300 ease-in-out scale-100 hover:scale-107"
							>
								Get Started
							</Link>
							<Link
								href="/documentation"
								className="rounded-md bg-slate-800 px-6 py-3 text-base font-medium text-slate-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
							>
								Documentation
							</Link>
						</div>

						{/* Stats section */}
						<div className="mt-12 grid grid-cols-3 gap-6">
							<div>
								<p className="text-3xl font-bold text-white">40%</p>
								<p className="mt-1 text-sm text-slate-400">Faster loading</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-white">50k+</p>
								<p className="mt-1 text-sm text-slate-400">Developers</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-white">99%</p>
								<p className="mt-1 text-sm text-slate-400">Satisfaction</p>
							</div>
						</div>
					</div>

					{/* Image/illustration section */}
					<div className="mt-16 lg:mt-0 lg:w-1/2">
						<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
							<GradientCard
								title="Website Analytics"
								value="17,479"
								percentage="+48%"
								subtitle="Monthly visits"
								imageUrl="https://cruip-tutorials.vercel.app/animated-gradient-border/card-01.png"
								duration={6}
								colors={{
									start: "#172033",
									mid: "#1e293b",
									end: "#172033",
									accent: "#8b5cf6", // violet-500
								}}
							/>

							{/* Example with custom child content */}
							<GradientCard
								title="Custom Content"
								value="Pro"
								subtitle="Subscription Tier"
							>
								<div className="text-slate-400 text-sm">
									Includes API access and premium support.
								</div>
							</GradientCard>

							{/* Decorative elements */}
							<div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
							<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000" />
						</div>
					</div>
				</div>
			</div>
			<div className="relative w-full  h-auto scale-x-[-1]">
				<svg
					viewBox="0 0 1440 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>icon3</title>
					<defs>
						<linearGradient
							id="purpleGradient"
							x1="0%"
							y1="0%"
							x2="0%"
							y2="100%"
						>
							<stop offset="0%" stopColor="#d8b4fe" />
							<stop offset="50%" stopColor="#9333ea" />
							<stop offset="100%" stopColor="#581c87" />
						</linearGradient>
					</defs>
					<path
						d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 82.5C840 90 960 105 1080 105C1200 105 1320 90 1380 82.5L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
						fill="url(#purpleGradient)"
					/>
				</svg>
				{/* <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icon3</title>
          <path
            d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 82.5C840 90 960 105 1080 105C1200 105 1320 90 1380 82.5L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f9fafb"
          />
        </svg> */}
			</div>
			<section className="mb-16 md:mb-32">
				<Bento />
			</section>
			<section className="mb-14 md:mb-28">
				<LeftZig />
			</section>
			<section className="mb-12 md:mb-28">
				<RightZag />
			</section>

			<section className=" mb-10 md:mb-18 bg-[url('/img/bg-cta-dark.webp')] bg-center  bg-no-repeat overflow-hidden px-4 ">
				<div className="max-w-7xl mx-auto mt-4 md:mt-8 pb-4 md:pb-8">
					<h2 className="text-4xl font-extrabold text-white text-center mb-12 tracking-tight">
						Featured Articles
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
						{/* Card repetition for demo */}
						<ProductCard
							title="Premium Headphones"
							description="Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals alike."
							imageSrc="/img/cardImg.webp"
							imageAlt="Premium wireless headphones"
							buttonText="Learn More"
							//onButtonClick={handleProductClick}
						/>

						<ProductCard
							title="Smart Watch"
							description="Stay connected and track your fitness goals with our advanced smartwatch featuring heart rate monitoring and GPS."
							imageSrc="/img/cardImg.webp"
							imageAlt="Modern smartwatch"
						/>

						<ProductCard
							title="Laptop Stand"
							description="Ergonomic aluminum laptop stand designed to improve posture and increase productivity during long work sessions."
							imageSrc="/img/cardImg.webp"
							imageAlt="Adjustable laptop stand"
							buttonText="Buy Now"
							//onButtonClick={() => alert('Adding to cart...')}
						/>
						<ProductCard
							title="Premium Earbuds"
							description="Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals alike."
							imageSrc="/img/cardImg.webp"
							imageAlt="Premium wireless headphones"
							buttonText="Learn More"
							//onButtonClick={handleProductClick}
						/>
					</div>
				</div>
			</section>
			<section className="mb-12 md:mb-20">
				<Teams />

				<section className="mb-12 md:mb-20">
					<Pricing />
				</section>
			</section>
			<section className="mb-12 md:mb-20">
				<TeamMembers />
			</section>

			<ChatTrigger />
			{/* Wave effect */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg
					viewBox="0 0 1440 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>icon</title>
					<path
						d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 82.5C840 90 960 105 1080 105C1200 105 1320 90 1380 82.5L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
						fill="white"
					/>
				</svg>
			</div>
		</div>
	);
}
