const CODECO_LETTERS = Array.from("Codeco").map((ch, i) => ({
	id: `codeco-${i}-${ch}`,
	char: ch === " " ? "\u00A0" : ch,
	idx: i,
}));
const TECH_LETTERS = Array.from("Tech").map((ch, i) => ({
	id: `tech-${i}-${ch}`,
	char: ch,
	idx: i,
}));

export function NameTransition() {
	return (
		<h1 className="font-medium pt-12 transition-element">
			<span className="sr-only">Codeco.tech</span>
			<span aria-hidden="true" className="block overflow-hidden group relative">
				<span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap text-white bg-linear-to-b from-sky-300 to-pink-400 font-semibold rounded-sm px-1.5">
					{CODECO_LETTERS.map(({ id, char, idx }) => (
						<span
							key={id}
							className="inline-block"
							style={{ transitionDelay: `${idx * 25}ms` }}
						>
							{char}
						</span>
					))}
				</span>
				<span className="inline-block absolute left-0 text-gradient-indigo-to-rose border-2 border-solid rounded-sm px-2.5 font-semibold top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
					{TECH_LETTERS.map(({ id, char, idx }) => (
						<span
							key={id}
							className="inline-block"
							style={{ transitionDelay: `${idx * 25}ms` }}
						>
							{char}
						</span>
					))}
				</span>
			</span>
		</h1>
	);
}
