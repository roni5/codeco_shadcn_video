export default function TailForm() {
	return (
		<div className="isolate bg-white py-12 sm:py-24">
			{/* Header with adjusted padding */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Contact sales
					</h2>
					<p className="mt-3 text-base text-gray-600 sm:text-lg">
						Aute magna irure deserunt veniam aliqua magna enim voluptate.
					</p>
				</div>
			</div>

			{/* Gradient background - hidden on mobile */}
			<div className="hidden sm:block" aria-hidden="true">
				<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
					<div
						className="relative left-1/2 aspect-[1155/678] w-full max-w-screen-2xl -translate-x-1/2 rotate-30 bg-linear-to-tr from-[/ff80b5] to-[/9089fc] opacity-30"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>

			{/* Form with responsive layout */}
			<form
				action="/"
				method="POST"
				className="mx-auto mt-10 max-w-xl px-4 sm:px-6 sm:mt-12"
			>
				<fieldset aria-label="Choose a memory option">
					<div className="flex items-center justify-between mb-4">
						<div className="text-sm font-medium">RAM</div>
						<a href="/" className="text-sm text-blue-600 hover:text-blue-800">
							See performance specs
						</a>
					</div>

					{/* Responsive RAM options */}
					<div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-2">
						{["4 GB", "8 GB", "16 GB", "32 GB", "64 GB", "128 GB"].map(
							(size, index) => (
								<label
									key={size}
									className="p-2 border border-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-50 has-checked:bg-blue-600 has-checked:text-white has-checked:border-transparent transition"
								>
									<input
										type="radio"
										name="memory-option"
										value={size}
										className="sr-only"
										defaultChecked={size === "128 GB"}
									/>
									<span className="text-sm sm:text-base">{size}</span>
								</label>
							),
						)}
					</div>
				</fieldset>

				{/* Responsive form grid */}
				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
					{/* First Name */}
					<div className="sm:col-span-1">
						<label
							htmlFor="first-name"
							className="block text-sm font-medium text-gray-700"
						>
							<span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
								First name
							</span>
						</label>
						<div className="mt-1">
							<input
								id="first-name"
								type="text"
								name="first-name"
								autoComplete="given-name"
								required
								minLength={2}
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
							/>
						</div>
					</div>

					{/* Last Name */}
					<div className="sm:col-span-1">
						<label
							htmlFor="last-name"
							className="block text-sm font-medium text-gray-700"
						>
							Last name
						</label>
						<div className="mt-1">
							<input
								id="last-name"
								type="text"
								name="last-name"
								autoComplete="family-name"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
							/>
						</div>
					</div>

					{/* Company */}
					<div className="sm:col-span-2">
						<label
							htmlFor="company"
							className="block text-sm font-medium text-gray-700"
						>
							Company
						</label>
						<div className="mt-1">
							<input
								id="company"
								type="text"
								name="company"
								autoComplete="organization"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
							/>
						</div>
					</div>

					{/* File Upload */}
					<div className="sm:col-span-2">
						<label
							htmlFor="file"
							className="block text-sm font-medium text-gray-700"
						>
							Upload
						</label>
						<div className="mt-1">
							<input
								type="file"
								className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
							/>
						</div>
					</div>

					{/* Email */}
					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							<span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
								Email
							</span>
						</label>
						<div className="mt-1">
							<input
								id="email"
								type="email"
								name="email"
								autoComplete="email"
								required
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
							/>
						</div>
					</div>

					{/* Phone */}
					<div className="sm:col-span-2">
						<label
							htmlFor="phone"
							className="block text-sm font-medium text-gray-700"
						>
							<span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
								Phone
							</span>
						</label>
						<div className="mt-1">
							<input
								id="phone"
								type="tel"
								name="phone"
								required
								pattern="^\+?[0-9]{10,15}$"
								placeholder="077-7749-7045"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
							/>
						</div>
					</div>

					{/* Message */}
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700"
						>
							<span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
								Message
							</span>
						</label>
						<div className="mt-1">
							<textarea
								id="message"
								name="message"
								rows={4}
								required
								minLength={12}
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
							/>
						</div>
					</div>

					{/* Privacy Policy */}
					<div className="sm:col-span-2 flex items-start">
						<div className="flex h-5 items-center">
							<input
								id="agree-to-policies"
								type="checkbox"
								name="agree-to-policies"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
							/>
						</div>
						<div className="ml-3 text-sm">
							<label htmlFor="agree-to-policies" className="text-gray-700">
								By selecting this, you agree to our{" "}
								<a
									href="/privacy"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									privacy policy
								</a>
								.
							</label>
						</div>
					</div>
				</div>

				{/* Submit Button */}
				<div className="mt-8">
					<button
						type="submit"
						className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Let's talk
					</button>
				</div>
			</form>
		</div>
	);
}
