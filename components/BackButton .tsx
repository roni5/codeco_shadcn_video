"use client";
import { useRouter } from "next/navigation";

const BackButton = (): React.ReactNode => {
	const router = useRouter();
	const goBack = () => router.back();

	return (
		<button
			type="button"
			onClick={goBack}
			className="fixed md:absolute left-4 md:left-42 top-4 md:top-14 md:mt-12 py-2 px-3 md:px-4 rounded-md no-underline text-foreground bg-zinc-100 hover:bg-zinc-400 flex items-center group text-xs md:text-sm z-50 shadow-md md:shadow-none"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="mr-1 md:mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
			>
				<title>back button</title>
				<polyline points="15 18 9 12 15 6" />
			</svg>
			<span className="hidden sm:inline">Back</span>
		</button>
	);
};

export default BackButton;

// 'use client'
// import { useRouter } from 'next/navigation'

// const BackButton = (): React.ReactNode => {
//   const router = useRouter()
//   const goBack = () => router.back()

//   return (
//     <button
//       type="button"
//       onClick={goBack}
//       className="absolute left-42 top-14 mt-12 py-2 px-4 rounded-md no-underline text-foreground bg-zinc-100 hover:bg-zinc-400   flex items-center group text-xs md:text-sm"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
//       >
//         <title>back button</title>
//         <polyline points="15 18 9 12 15 6" />
//       </svg>
//       <span>Back</span>
//     </button>
//   )
// }

// export default BackButton
