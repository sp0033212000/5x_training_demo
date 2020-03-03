import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import silentStateCore from "../../utils/silent.state";
import "../../css/carousel.css";
import CarouselIndicator from "./CarouselIndicator";

const Carousel = ({ data, repTime, ItemComponent, indicatorClass }) => {
	const [currIndex, setCurrIndex] = useState(0);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		clearInterval(timer);
		setTimer(setInterval(timerCounter, repTime));
		return () => {
			clearInterval(timer);
		};
	}, [data]);

	const timerCounter = () => {
		setCurrIndex((prevCurrIndex) => {
			let newIndex = prevCurrIndex + 1;
			if (newIndex === data.length) {
				newIndex = 0;
			}
			return newIndex;
		});
	};

	const onItemMouseEnter = () => {
		clearInterval(timer);
	};

	const onItemMouseLeave = () => {
		setTimer(setInterval(timerCounter, repTime));
	};

	const onDotClick = (index) => {
		setCurrIndex(index);
	};

	if (!data) {
		return null;
	}

	return (
		<div className="slides-home">
			{data.map((item) => {
				return (
					<CarouselItem
						onItemMouseEnter={onItemMouseEnter}
						onItemMouseLeave={onItemMouseLeave}
						key={item.id}
						{...item}
						active={currIndex === item.id - 1 ? true : false}
						ItemComponent={ItemComponent}
					/>
				);
			})}
			<div className={`${indicatorClass}-container`}>
				{data.map(({ id, src, alt }) => {
					return (
						<CarouselIndicator
							onItemMouseEnter={onItemMouseEnter}
							onItemMouseLeave={onItemMouseLeave}
							onDotClick={onDotClick}
							key={id}
							id={id}
							active={currIndex === id - 1 ? true : false}
							indicatorClass={indicatorClass}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
