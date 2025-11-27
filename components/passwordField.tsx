import { Eye, EyeOff } from "lucide-react"; // Or any Icon
import { useState } from "react";

export default function PasswordField() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="relative">
			<input
				id="password"
				type={isVisible ? "text" : "password"}
				className="w-full text-sm  rounded-md ps-3.5 pe-10 py-3.5 outline-none focus:bg-white/40 pointer-events-auto  bg-white/40 text-black border-1 border-fuchsia-200 focus:ring-1 focus:ring-fuchsia-400"
				placeholder="Enter your password..."
				aria-label="Password"
				required
			/>
			<button
				className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-pink-300 rounded-e-md focus:outline-none hover:text-gray-400 transition-colors"
				type="button"
				onClick={() => setIsVisible((v) => !v)}
				aria-label={isVisible ? "Hide password" : "Show password"}
				aria-pressed={isVisible}
				aria-controls="password"
			>
				{isVisible ? (
					<EyeOff size={21} aria-hidden="true" />
				) : (
					<Eye size={21} aria-hidden="true" />
				)}
			</button>
		</div>
	);
}
