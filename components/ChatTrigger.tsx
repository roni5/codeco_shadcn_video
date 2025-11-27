import { Bot } from "lucide-react";
import Link from "next/link";

export default function ChatTrigger() {
	return (
		<button
			type="button"
			className="fixed bottom-4 right-4 z-50 bg-sky-600 text-white p-4 rounded-full shadow-xl hover:bg-sky-700 transition"
			aria-label="Open Chat"
		>
			<Bot className="w-5 h-5" />
		</button>
	);
}
