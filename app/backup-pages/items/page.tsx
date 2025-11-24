import Link from 'next/link'

// 1. Define your data outside the component (or fetch from DB/CMS)
const products = [
  {
    id: 1,
    name: 'Beija Flor',
    price: '$5.50',
    image: '/assets/img/pro/coffee-shop/img1.png', // Ensure these paths are correct in your public folder
    tastingNotes: 'Hazelnut, Grape, Milk Chocolate',
    origin: 'Brazil',
    region: 'San Paulo',
  },
  {
    id: 2,
    name: 'El Mirador',
    price: '$7.50',
    image: '/assets/img/pro/coffee-shop/img2.png',
    tastingNotes: 'Red Apple, Caramel, Almond',
    origin: 'Colombia',
    region: 'Manizales',
  },
  {
    id: 3,
    name: 'Pedra Branca',
    price: '$2.10',
    image: '/assets/img/pro/coffee-shop/img5.png',
    tastingNotes: 'Red Apple, Walnut, Milk Chocolate',
    origin: 'Brazil',
    region: 'San Paulo',
  },
  {
    id: 4,
    name: 'Beija Flor',
    price: '$5.50',
    image: '/assets/img/pro/coffee-shop/img1.png', // Ensure these paths are correct in your public folder
    tastingNotes: 'Hazelnut, Grape, Milk Chocolate',
    origin: 'Brazil',
    region: 'San Paulo',
  },
  {
    id: 5,
    name: 'El Mirador',
    price: '$7.50',
    image: '/assets/img/pro/coffee-shop/img2.png',
    tastingNotes: 'Red Apple, Caramel, Almond',
    origin: 'Colombia',
    region: 'Manizales',
  },
  {
    id: 6,
    name: 'Pedra Branca',
    price: '$2.10',
    image: '/assets/img/pro/coffee-shop/img5.png',
    tastingNotes: 'Red Apple, Walnut, Milk Chocolate',
    origin: 'Brazil',
    region: 'San Paulo',
  },
  
]

export default function ProductGrid() {
  return (
    <section className="w-full bg-white dark:bg-neutral-900">
      {/* Container fixed: Standard responsive max-width */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:rotate-1"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative overflow-hidden rounded-t-xl h-64 w-full">
                <img
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={product.image}
                  alt={product.name}
                />
                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">
                      {product.region}, {product.origin}
                    </p>
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                    {product.price}
                  </span>
                </div>

                {/* Tasting Notes Data */}
                <div className="mt-auto space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-x-4 border-t border-gray-200 py-3 dark:border-neutral-700">
                    <span className="font-medium text-gray-800 dark:text-neutral-200">
                      Tasting Notes:
                    </span>
                    <span className="text-end text-gray-500 dark:text-neutral-400">
                      {product.tastingNotes}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Link
                    href={`/product/${product.id}`}
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    Details
                  </Link>
                  <Link
                    href="/cart"
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}