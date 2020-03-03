import React from "react";

const CarouselItem = ({
	id,
	src,
	alt,
	active,
	onItemMouseEnter,
	onItemMouseLeave
}) => {
	if (!src) {
		return null;
	}

	return (
		<div id={id} className={`slider-item${active ? " active" : ""}`}>
			<img
				onMouseEnter={onItemMouseEnter}
				onMouseLeave={onItemMouseLeave}
				src={src}
				alt={alt}
			/>
		</div>
	);
};

export default CarouselItem;
