import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";

function App() {
	const [carData, setCarData] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await import("./staticData/carouselData.json");
			setCarData(res.default);
		})();
	}, []);

	return (
		<React.Fragment>
			<Header />
			<div className="main_content">
				<Carousel data={carData} />
			</div>
		</React.Fragment>
	);
}

export default App;
