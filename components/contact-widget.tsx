"use client";

import { Bot, Ellipsis, MessageCircleWarning, Send, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

interface Message {
	role: "user" | "assistant" | "system";
	content: string;
	timestamp?: Date;
}

const ContactWidget = () => {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{
			role: "system",
			content:
				"👋 Hi! I'm Codeco, your AI assistant. How can I help you today?",
			timestamp: new Date(),
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const chatContainerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const el = chatContainerRef.current;
		if (!el) return;
		el.scrollTop = el.scrollHeight;
	}, [messages.length, open]);

	const sendMessage = async () => {
		if (!input.trim()) return;

		const newMessage: Message = {
			role: "user",
			content: input,
			timestamp: new Date(),
		};

		const newMessages = [...messages, newMessage];
		setMessages(newMessages);
		setInput("");
		setIsLoading(true);

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: newMessages }),
			});

			if (!res.ok) throw new Error("Failed to get response");

			const data = await res.json();
			setMessages([...newMessages, { ...data.reply, timestamp: new Date() }]);
		} catch (err) {
			console.error(err);
			setMessages((prev) => [
				...prev,
				{
					role: "assistant",
					content: "⚠️ Sorry, there was an error. Please try again!",
					timestamp: new Date(),
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	};

	return (
		<div className="fixed z-50">
			{/* Modal */}
			{open && (
				<>
					{/* Backdrop - clicks here will close modal */}
					<div 
						className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm" 
						onClick={() => setOpen(false)}
					/>
					
					{/* Modal Container */}
					<div className="fixed bottom-[100px] right-5 z-[60] w-[calc(100vw-2.5rem)] max-w-sm sm:max-w-md bg-white rounded-2xl shadow-[0_24px_80px_rgba(2,8,23,0.35)] flex flex-col overflow-hidden border border-slate-200">
						{/* Header with Close Button */}
						<div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 flex items-center justify-between gap-2">
							<div className="flex items-center gap-2">
								<Bot className="w-5 h-5" />
								<h2 className="font-semibold text-sm">Codeco Chat</h2>
								<MessageCircleWarning className="w-5 h-5" />
							</div>
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="p-1 hover:bg-white/20 rounded-lg transition-colors"
								aria-label="Close chat"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						{/* Chat area */}
						<div
							ref={chatContainerRef}
							className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
							style={{ maxHeight: "500px" }}
						>
							{messages.map((msg, i) => (
								<div
									key={msg.timestamp ? msg.timestamp.getTime() : i}
									className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
								>
									<div
										className={`px-4 py-2 rounded-2xl max-w-xs ${
											msg.role === "user"
												? "bg-sky-600 text-white"
												: msg.role === "assistant"
													? "bg-white border border-slate-200"
													: "bg-sky-50 border border-sky-200 text-sky-700"
										}`}
									>
										<p className="whitespace-pre-wrap text-sm">{msg.content}</p>
										{msg.timestamp && (
											<p className="text-[10px] opacity-50 mt-1">
												{msg.timestamp.toLocaleTimeString()}
											</p>
										)}
									</div>
								</div>
							))}

							{isLoading && (
								<div className="flex justify-start">
									<div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl">
										<div className="flex space-x-1">
											<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
											<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
											<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Input */}
						<div className="border-t border-slate-200 p-3 bg-white flex gap-2 items-end">
							<textarea
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyPress}
								placeholder="Type your message..."
								className="flex-1 resize-none border border-slate-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
								rows={1}
								onInput={(e) => {
									e.currentTarget.style.height = "auto";
									e.currentTarget.style.height = `${Math.min(
										e.currentTarget.scrollHeight,
										128,
									)}px`;
								}}
							/>

							<button
								type="button"
								onClick={sendMessage}
								disabled={isLoading || !input.trim()}
								className="shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
							>
								<Send className="w-4 h-4" />
							</button>
						</div>
					</div>
				</>
			)}

			{/* Toggle Button - Fixed z-index */}
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="fixed z-[70] right-5 bottom-5 flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-[0_16px_48px_rgba(2,8,23,0.30)] hover:shadow-[0_28px_72px_rgba(2,8,23,0.38)] transition-all duration-300 hover:scale-110 focus:outline-none"
				aria-label={open ? "Close chat" : "Open chat"}
			>
				{open ? (
					<X className="w-6 h-6 text-white" />
				) : (
					<Bot className="w-6 h-6 text-white" />
				)}
			</button>
		</div>
	);
};

export default ContactWidget;
