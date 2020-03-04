import React, { useState, useEffect } from "react";

import Banner from "../banner/Banner";
import FeatureSection from "./FeatureSection";
import RecentLecture from "../recentLecture/RecentLecture";
import Avatar from "../avatar/Avatar";
import Showcase from "../showcase/Showcase";
import KnowAboutUs from "../main/KnowAboutUs";

const Main = () => {
	const [caroData, setCaroData] = useState([]);
	const [lectureData, setLectureData] = useState([]);
	const [avatarData, setAvatarData] = useState([]);

	useEffect(() => {
		(async () => {
			const caroRes = await import("../../staticData/carouselData.json");
			const lecRes = await import("../../staticData/lectureData.json");
			const avaRes = await import("../../staticData/avatarData.json");
			setCaroData(caroRes.default);
			setLectureData(lecRes.default);
			setAvatarData(avaRes.default);
		})();
	}, []);

	return (
		<React.Fragment>
			<div className="overwrite-index">
				<Banner data={caroData} />
				<FeatureSection />
				<RecentLecture data={lectureData} />
				<Avatar data={avatarData} />
				<Showcase />
				<KnowAboutUs />
			</div>
		</React.Fragment>
	);
};

export default Main;
