export default function Macontact() {
	return (
		<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg overflow-hidden  bg-center   border border-crimson  pb-6 pt-8 backdrop-blur-2xl md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 drop-shadow-lg dark:bg-gray-100 dark:text-gray-800">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">
						Let's talk!
					</h2>
					<div className="dark:text-gray-600">Book a Walkthrough</div>
				</div>
				<img src="img/elephant-alone.svg" alt="" className="p-6 h-52 md:h-64" />
			</div>
			<form className="space-y-6">
				<div>
					<label htmlFor="name" className="text-sm">
						Name
					</label>
					<input
						id="name"
						type="text"
						placeholder=""
						className="w-full p-2.5 bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-crimson block dark:bg-gray-700 dark:border-codeco-turquoise "
					/>
				</div>
				<div>
					<label htmlFor="email" className="text-sm">
						Email
					</label>
					<input
						id="email"
						type="email"
						className="w-full p-2.5 bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-crimson block dark:bg-gray-700 dark:border-codeco-turquoise "
					/>
				</div>
				<div>
					<label htmlFor="message" className="text-sm">
						Message
					</label>
					<textarea
						id="message"
						rows={3}
						className="w-full p-2.5 bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-crimson block dark:bg-gray-700 dark:border-codeco-turquoise "
					/>
				</div>
				<button
					type="submit"
					className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-gradient-to-br from-indigo-400 to-rose-500 shadow-xl hover:opacity-70 dark:bg-sky-600 dark:text-gray-50"
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
