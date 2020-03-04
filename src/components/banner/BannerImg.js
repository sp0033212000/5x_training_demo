import React from "react";

const BannerImg = ({ src, alt, src_lg, src_md, src_sm }) => {
	// return <img className="banner item img" src={src} alt={alt} />;
	return (
		<picture>
			<source srcSet={src_sm} media="(max-width: 400px)" />
			<source srcSet={src_md} media="(max-width: 768px)" />
			<source srcSet={src_lg} media="(min-width: 1920px)" />
			<img src={src} alt={alt} />
		</picture>
	);
};

export default BannerImg;
