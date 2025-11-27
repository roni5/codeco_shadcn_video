import type React from "react";
import { useState } from "react";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
	src: string;
	fallbackSrc: string;
	alt: string;
};

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
	src,
	fallbackSrc,
	alt,
	...props
}) => {
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<img
			{...props}
			src={imgSrc}
			alt={alt}
			onError={() => {
				if (imgSrc !== fallbackSrc) {
					setImgSrc(fallbackSrc);
				}
			}}
		/>
	);
};

export default ImageWithFallback;
