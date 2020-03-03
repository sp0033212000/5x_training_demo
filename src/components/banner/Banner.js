import React from "react";
import Carousel from "../carousel/Carousel";
import BannerImg from "./BannerImg";

const Banner = ({ data }) => {
	return (
		<div style={{ height: "431px" }}>
			<Carousel
				data={data}
				repTime={5000}
				ItemComponent={BannerImg}
				indicatorClass="carousel-dot"
			/>
		</div>
	);
};

export default Banner;
