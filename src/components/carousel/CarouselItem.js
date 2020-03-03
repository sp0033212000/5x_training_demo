import React from "react";

const CarouselItem = (props) => {
	const ItemComponent = props.ItemComponent;
	return (
		<div
			id={props.id}
			onMouseEnter={props.onItemMouseEnter}
			onMouseLeave={props.onItemMouseLeave}
			className={`slider-item${props.active ? " active" : ""}`}
		>
			<ItemComponent {...props} />
		</div>
	);
};

export default CarouselItem;
