const FourCardSlim: React.FC = () => {
	return (
		<div className="p-8">
			<div
				className="grid gap-8"
				style={{
					// For a true approximation of 'grid-template: "1fr 1fr";' which is a non-standard grid-template value,
					// we use 'grid-cols-2' on medium screens and up.
					gridTemplateAreas: "unset",
				}}
			>
				{/* Card 1: Location */}
				<div
					className="m-4 p-4 rounded-xl shadow-lg"
					style={{
						background:
							"linear-gradient(124.28deg, #F9EBC4 59.55%, #A7CF5D 91.58%)",
					}}
				>
					<h2 className="text-xl font-bold mb-2">Location</h2>
					<p className="text-gray-700">
						Located at the best of places the nature can offer and it is a ideal
						place to do agriculture with plenty of water sources nearby
					</p>
				</div>

				{/* Card 2: Method */}
				<div
					className="m-4 p-4 rounded-xl shadow-lg"
					style={{
						background:
							"linear-gradient(124.28deg, #F9EBC4 59.55%, #A7CF5D 91.58%)",
					}}
				>
					<h2 className="text-xl font-bold mb-2">Method</h2>
					<p className="text-gray-700">
						We are using natural methods for the planting trees and agricultural
						techniques which combine both modern and traditional
					</p>
				</div>

				{/* Card 3: Technology */}
				<div
					className="m-4 p-4 rounded-xl shadow-lg"
					style={{
						background:
							"linear-gradient(124.28deg, #F9EBC4 59.55%, #A7CF5D 91.58%)",
					}}
				>
					<h2 className="text-xl font-bold mb-2">Technology</h2>
					<p className="text-gray-700">
						Integrating technology into the agriculture mix will let you examine
						each and every tree whereever you are located
					</p>
				</div>

				{/* Card 4: Weekend Resort */}
				<div
					className="m-4 p-4 rounded-xl shadow-lg"
					style={{
						background:
							"linear-gradient(124.28deg, #F9EBC4 59.55%, #A7CF5D 91.58%)",
					}}
				>
					<h2 className="text-xl font-bold mb-2">Weekend Resort</h2>
					<p className="text-gray-700">
						You can enjoy our resort with your family with free credit for our
						land owners
					</p>
				</div>
			</div>
		</div>
	);
};

export default FourCardSlim;
