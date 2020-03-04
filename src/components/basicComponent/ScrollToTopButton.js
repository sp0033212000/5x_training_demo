import React, { useState, useEffect } from "react";

const ScrollToTopButton = ({ scrollStepInPx, delayInMs }) => {
	const [intervalId, setIntervalId] = useState(0);
	const [times, setTimes] = useState(0);
	const [Totaltimes, setTotalTimes] = useState(0);

	useEffect(() => {
		if (Totaltimes === times) {
			console.log("done!");
			clearInterval(intervalId);
		} else {
			console.log("not yet");
		}
	}, [times]);

	const scrollStep = () => {
		setTimes((prevTimes) => prevTimes + 1);
		window.scroll(0, window.pageYOffset - scrollStepInPx);
	};

	const scrollToTop = () => {
		setTotalTimes(Math.floor(window.pageYOffset / scrollStepInPx) + 2);
		setIntervalId(setInterval(scrollStep, delayInMs));
	};

	return (
		<div>
			<div
				onClick={scrollToTop}
				className="scrollup to-top text-center"
				id="scrTop"
			>
				<i className="fa fa-angle-up" id="scrUp" aria-hidden="true"></i>
			</div>
		</div>
	);
};

export default ScrollToTopButton;
