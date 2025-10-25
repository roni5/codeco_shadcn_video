import Image from "next/image"

export default function ProductCard() {
  return (
    <div className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
      <div className="aspect-[3/2]">
        <Image
          src="/img/cardImg.webp"
          className="w-full h-full object-cover rounded-lg"
          alt="Abstract card visual"
          width={1000}
          height={668}
          priority
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">Heading</h3>
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          auctor arcu, at fermentum dui. Maecenas
        </p>
        <button
          type="button"
          className="mt-6 px-4 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer"
        >
          View
        </button>
      </div>
    </div>
  )
}