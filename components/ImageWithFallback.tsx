'use client'
import React, { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

export function ImageWithFallback(props: ImageProps) {
  const [didError, setDidError] = useState(false)

  const { src, alt, className, ...rest } = props

  if (didError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center text-gray-400 ${className ?? ''}`}
        {...rest}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...rest}
      onError={() => setDidError(true)}
    />
  )
}
// 'use client'
// import React, { useState } from 'react'
// import Image, { type ImageProps } from 'next/image'

// const ERROR_IMG_SRC =
//   'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// export function ImageWithFallback(props: ImageProps) {
//   const [didError, setDidError] = useState(false)

//   const handleError = () => {
//     setDidError(true)
//   }

//   const { src, alt, style, className, ...rest } = props

//   return didError ? (
//     <div
//       className={`inline-block bg-gray-100 text-center align-middle ${
//         className ?? ''
//       }`}
//       style={style}
//     >
//       <div className="flex items-center justify-center w-full h-full">
//         <Image
//           src={ERROR_IMG_SRC}
//           alt={`Error loading: ${alt}`}
//           {...rest}
//           data-original-url={src}
//         />
//       </div>
//     </div>
//   ) : (
//     <Image
//       src={src}
//       alt={alt}
//       className={className}
//       style={style}
//       {...rest}
//       onError={handleError}
//     />
//   )
// }
