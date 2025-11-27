import Image from "next/image";

interface ProductCardProps {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	buttonText?: string;
	onButtonClick?: () => void;
}

export default function ProductCard({
	title,
	description,
	imageSrc,
	imageAlt,
	buttonText = "View",
	onButtonClick,
}: ProductCardProps) {
	return (
		<div className="[background:linear-gradient(45deg,#0f172a,var(--color-slate-900)_50%,#0f172a)_padding-box,conic-gradient(from_var(--border-angle),var(--color-amber-400)_80%,var(--color-orange-500)_86%,var(--color-yellow-400)_90%,var(--color-orange-500)_94%,var(--color-amber-400)_100%)_border-box] border border-transparent animate-border rounded-2xl overflow-hidden">
			{/* CONTENT WRAPPER — flush inside the gradient border */}
			<div className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-2xl overflow-hidden mx-auto">
				<div className="aspect-3/2">
					<Image
						src={imageSrc}
						className="w-full h-full object-cover rounded-xl"
						alt={imageAlt}
						width={1000}
						height={668}
						priority
					/>
				</div>

				<div className="p-4 text-center">
					<h3 className="text-xl font-bold">{title}</h3>

					<p className="mt-3 text-sm text-slate-500 leading-relaxed">
						{description}
					</p>

					<button
						type="button"
						onClick={onButtonClick}
						className="mt-6 px-4 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-medium shadow-2xl
              bg-violet-600 
              hover:bg-violet-700 
              disabled:pointer-events-none transform transition duration-300 ease-in-out
                    scale-100
                    hover:scale-110
              focus:outline-none focus:ring-4 focus:ring-violet-500/50"
					>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}

// import Image from 'next/image'

// interface ProductCardProps {
//   title: string
//   description: string
//   imageSrc: string
//   imageAlt: string
//   buttonText?: string
//   onButtonClick?: () => void
// }

// export default function ProductCard({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
//   buttonText = 'View',
//   onButtonClick,
// }: ProductCardProps) {
//   return (
//     <div className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
//       <div className="[background:linear-gradient(45deg,#0f172a,var(--color-slate-900)_50%,#0f172a)_padding-box,conic-gradient(from_var(--border-angle),var(--color-amber-400)_80%,var(--color-orange-500)_86%,var(--color-yellow-400)_90%,var(--color-orange-500)_94%,var(--color-amber-400)_100%)_border-box] border border-transparent animate-border rounded-2xl flex flex-col overflow-hidden">
//         <div className="aspect-3/2">
//           <Image
//             src={imageSrc}
//             className="w-full h-full object-cover rounded-lg"
//             alt={imageAlt}
//             width={1000}
//             height={668}
//             priority
//           />
//         </div>
//         <div className="p-4 text-center">
//           <h3 className="text-xl font-bold">{title}</h3>
//           <p className="mt-3 text-sm text-slate-500 leading-relaxed">
//             {description}
//           </p>
//           <button
//             type="button"
//             onClick={onButtonClick}
//             className="mt-6 px-4 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-medium border-none outline-nonerounded-xl shadow-2xl
//                     bg-violet-600
//                     hover:bg-violet-700 focus:
//                     transform
//                     transition duration-300 ease-in-out
//                     scale-100
//                     hover:scale-110
//                     focus:outline-none focus:ring-4 focus:ring-violet-500/50 cursor-pointer"
//           >
//             {buttonText}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
