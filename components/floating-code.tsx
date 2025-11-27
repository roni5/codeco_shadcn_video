"use client";

import { useEffect, useMemo, useState } from "react";

const CODE_SNIPPETS = [
	"const",
	"function",
	"return",
	"import",
	"export",
	"async",
	"await",
	"map",
	"filter",
	"reduce",
	"useState",
	"useEffect",
	"props",
	"state",
	"component",
	"React",
	"Next.js",
	"TypeScript",
	"Tailwind",
	"API",
];

export default function FloatingCode() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);



	const floatingItems = useMemo(
		() =>
			Array.from({ length: 30 }).map((_, i) => ({
				id: `floating-${i}`,
				left: Math.random() * 100,
				top: Math.random() * 100,
				delay: Math.random() * 5,
				duration: 15 + Math.random() * 10,
				snippet:
					CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
				idx: i,
			})),
		[],
	);

	if (!mounted) return null;

	return (
		<div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
			{floatingItems.map((item) => (
				<div
					key={item.id}
					className="absolute text-white/20 font-mono text-xs md:text-sm animate-float"
					style={{
						left: `${item.left}%`,
						top: `${item.top}%`,
						animationDelay: `${item.delay}s`,
						animationDuration: `${item.duration}s`,
					}}
				>
					{item.snippet}
				</div>
			))}
		</div>
	);
}
