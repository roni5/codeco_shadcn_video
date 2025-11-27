"use client";

import { motion } from "framer-motion";
import {
	BanknoteArrowUp,
	BanknoteIcon,
	CalendarCheck,
	CalendarIcon,
	CheckCircleIcon,
	ClockIcon,
	CreditCardIcon,
	MessageCirclePlus,
	PlusCircleIcon,
	UserIcon,
} from "lucide-react";
import type { FC } from "react";

export const Onboarding: FC = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="bg-white max-w-4xl w-full mx-auto p-8 rounded-lg shadow-md"
		>
			<h1
				className="
        text-center
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-extrabold
        bg-linear-to-tr from-[#00ccde] via-pelorous-400 to-pelorous-300
        text-white
        py-3 px-6
        rounded-lg
        mb-6
        leading-tight
        tracking-tight
        flex items-center justify-center
      "
			>
				Post a Task. Get Offers. Get it done!
			</h1>
			<p className="text-gray-600 mb-8 text-center">
				Describe your task, pick the best Tasker, and pay securely when it’s
				done.
			</p>

			<div className="space-y-6">
				{steps.map((step) => (
					<div key={step.title} className="flex items-start space-x-4">
						<step.icon className="w-10 h-10 text-cyan-500 flex-shrink-0" />
						<div>
							<h3 className="text-xl font-semibold text-gray-800">
								{step.title}
							</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-10 p-6 bg-linear-to-tr from-[#00ccde] via-pelorous-400 to-pelorous-300 rounded-lg border-l-4 border-pelorous-500">
				<h4 className="text-lg font-semibold text-white mb-2">Key Benefits</h4>
				<div className="flex items-center space-x-3">
					<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-lg my-1">
						<UserIcon />
					</div>
					<span className="text-base font-medium text-white">
						Vetted Local Taskers
					</span>
				</div>
				<div className="flex items-center space-x-3">
					<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-lg my-1">
						<ClockIcon />
					</div>
					<span className="text-base font-medium text-white">
						Flexible, Same-Day Help
					</span>
				</div>
				<div className="flex items-center space-x-3">
					<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-lg my-1">
						<BanknoteIcon />
					</div>
					<span className="text-base font-medium text-white">
						Transparent Pricing
					</span>
				</div>
				<div className="flex items-center space-x-3">
					<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-lg my-1">
						<CalendarCheck />
					</div>
					<span className="text-base font-medium text-white">
						Easy Communication & Scheduling
					</span>
				</div>
			</div>
		</motion.section>
	);
};

const steps = [
	{
		title: "Post a Task",
		description: "Create your task. Select type and add clear details   ",
		icon: PlusCircleIcon,
	},
	{
		title: "Choose Tasker",
		description: "Get Offers, Compare profiles. Pick a Tasker, Get it done!.",
		icon: UserIcon,
	},
	{
		title: "Schedule",
		description: "Pick the best date and time that works for you.",
		icon: CalendarIcon,
	},
	{
		title: "Confirm & Book",
		description: "Review all details and secure your booking.",
		icon: CreditCardIcon,
	},
	{
		title: "Chat & Clarify",
		description: "Message your Tasker to finalize details easily.",
		icon: MessageCirclePlus,
	},
	{
		title: "Complete & Pay",
		description: "Tasker completes the job; pay, tip, and leave a review.",
		icon: CheckCircleIcon,
	},
];

// const steps = [
//   {
//     title: "Sign Ups",
//     description: "Create your Taskful.co.uk account and download the app.",
//     icon: PlusCircleIcon,
//   },
//   {
//     title: "Build Your Profile",
//     description: "Confirm your identity and submit verification.",
//     icon: UserIcon,
//   },
//   {
//     title: "Verify Eligibility",
//     description: "Confirm identity and submit required business verifications",
//     icon: CreditCardIcon,
//   },
//   {
//     title: "Set Schedule",
//     description: "Set availability and work area.",
//     icon: CalendarIcon,
//   },
//   {
//     title: "Start Getting Jobs",
//     description: "Browse and accept local tasks.",
//     icon: CheckCircleIcon,
//   },
//   {
//     title: "Get Paid",
//     description: "Secure Instant payment system.",
//     icon: BanknoteArrowUp,
//   },
// ];
