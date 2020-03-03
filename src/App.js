import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import FeatureSection from "./components/FeatureSection";
import "./css/app.css";
import RecentLecture from "./components/recentLecture/RecentLecture";
import Avatar from "./components/avatar/Avatar";
import Banner from "./components/banner/Banner";
import Showcase from "./components/showcase/Showcase";
import KnowAboutUs from "./components/KnowAboutUs";
import Footer from "./components/Footer";

function App() {
	const [caroData, setCaroData] = useState([]);
	const [lectureData, setLectureData] = useState([]);
	const [avatarData, setAvatarData] = useState([]);

	useEffect(() => {
		(async () => {
			const caroRes = await import("./staticData/carouselData.json");
			const lecRes = await import("./staticData/lectureData.json");
			const avaRes = await import("./staticData/avatarData.json");
			setCaroData(caroRes.default);
			setLectureData(lecRes.default);
			setAvatarData(avaRes.default);
		})();
	}, []);

	return (
		<React.Fragment>
			<Header />
			<div className="main_content">
				<div className="overwrite-index">
					<Banner data={caroData} />
					<FeatureSection />
					<RecentLecture data={lectureData} />
					<Avatar data={avatarData} />
					<Showcase />
					<KnowAboutUs />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
