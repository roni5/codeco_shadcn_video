import React, { useState } from 'react'

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  fallbackSrc: string
  alt: string
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc)
        }
      }}
    />
  )
}

export default ImageWithFallback;

{/* <ImageWithFallback
  className="rounded-full border border-gray-950/5 dark:border-white/5"
  src="/img/fallback.png"
  fallbackSrc="/default-avatar.png"
  alt="B. Ng's avatar"
  width={28}
  height={28}
/> */}

