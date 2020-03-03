import React from "react";

const CarouselIndicator = ({
	id,
	active,
	onDotClick,
	onItemMouseEnter,
	onItemMouseLeave,
	indicatorClass
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
			className={`${indicatorClass}${active ? " active" : ""}`}
		></div>
	);
};

export default CarouselIndicator;
