export function NameTransition() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Codeco.tech</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap text-white bg-linear-to-b from-sky-300 to-pink-400 font-semibold rounded-sm px-1.5">
          {'Codeco'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 text-gradient-indigo-to-rose border-2 border-solid rounded-sm px-2.5 font-semibold top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {'Tech'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  )
}
