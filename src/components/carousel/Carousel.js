import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import silentStateCore from "../../utils/silent.state";
import "../../css/carousel.css";
import CarouselIndicator from "./CarouselIndicator";

const silentState = new silentStateCore();

const Carousel = ({ data }) => {
	const [currIndex, setCurrIndex] = useState(0);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		clearInterval(timer);
		setTimer(setInterval(timerCounter, 5000));
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
		setTimer(setInterval(timerCounter, 5000));
	};

	const onDotClick = (index) => {
		setCurrIndex(index);
	};

	if (!data) {
		return null;
	}

	return (
		<div className="slides-home">
			{data.map(({ id, src, alt }) => {
				return (
					<CarouselItem
						onItemMouseEnter={onItemMouseEnter}
						onItemMouseLeave={onItemMouseLeave}
						key={id}
						id={id}
						src={src}
						alt={alt}
						active={currIndex === id - 1 ? true : false}
					/>
				);
			})}
			<div className="carouse-ind-con">
				{data.map(({ id, src, alt }) => {
					return (
						<CarouselIndicator
							onItemMouseEnter={onItemMouseEnter}
							onItemMouseLeave={onItemMouseLeave}
							onDotClick={onDotClick}
							key={id}
							id={id}
							active={currIndex === id - 1 ? true : false}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
