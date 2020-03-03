import React from "react";
import SectionTitle from "../basicComponent/SectionTitle";
import Carousel from "../carousel/Carousel";
import AvatarItem from "./AvatarItem";

import "../../css/avatar.css";

const Avatar = ({ data }) => {
	return (
		<div className="avatar-carousel light-grey-bg pb-5">
			<SectionTitle subcl="section-title pt-5 " title="網頁課程推薦" />
			<div className="carousel-inner">
				<div style={{ height: "200px" }} className="container mt-2 mt-md-3">
					<Carousel
						data={data}
						repTime={5000}
						ItemComponent={AvatarItem}
						indicatorClass="avatar-dot"
					/>
				</div>
			</div>
		</div>
	);
};

export default Avatar;
