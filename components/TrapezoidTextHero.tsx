export default function TrapezoidTextHero() {
	return (
		<section className="relative mx-auto w-full h-[35vh] sm:h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 to-indigo-200 rounded-3xl p-4">
			<h1
				className="text-center break-words text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
				style={{
					transform:
						"perspective(500px) rotateX(18deg) scaleY(1.15) skewX(-4deg)",
					transformOrigin: "bottom",
					textShadow: "0 6px 18px rgba(0,0,0,0.2)",
				}}
			>
				Everything you need to deploy your apps
			</h1>
		</section>
	);
}

// export default function TrapezoidTextHero() {
//   return (
//     <section className="relative mx-auto w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 to-indigo-200 rounded-3xl">
//       <h1
//         className="text-5xl sm:text-7xl font-bold text-gray-900 tracking-tight"
//         style={{
//           transform:
//             'perspective(600px) rotateX(25deg) scaleY(1.2) skewX(-5deg)',
//           transformOrigin: 'bottom',
//           textShadow: '0 8px 20px rgba(0,0,0,0.2)',
//         }}
//       >
//         Everything you need to deploy your apps
//       </h1>
//     </section>
//   )
// }
