import React from "react";

const CarouselIndicator = ({
	id,
	active,
	onDotClick,
	onItemMouseEnter,
	onItemMouseLeave
}) => {
	const onDotClickHandler = (e) => {
		const index = e.target.id - 1;
		onDotClick(index);
	};
	return (
		<div
			id={id}
			onClick={(e) => {
				onDotClickHandler(e);
			}}
			onMouseEnter={onItemMouseEnter}
			onMouseLeave={onItemMouseLeave}
			className={`carousel-dot${active ? " active" : ""}`}
		></div>
	);
};

export default CarouselIndicator;
