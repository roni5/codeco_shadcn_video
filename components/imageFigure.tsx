export default function ImageFigure() {
	return (
		<figure className="max-w-lg">
			<img
				className="h-auto max-w-full rounded-lg"
				src="/img/image-figure.jpg"
				alt="foto "
			/>
			<figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
				Image caption
			</figcaption>
		</figure>
	);
}
