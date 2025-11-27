"use client";

import { useRouter } from "next/navigation";

export default function BackButton2() {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.back()}
			className="group inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors focus:outline-none"
		>
			{/* The arrow jiggles left on hover now */}
			<svg
				className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
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
				<title>back</title>
				<path d="m15 18-6-6 6-6" />
			</svg>
			Back
		</button>
	);
}
