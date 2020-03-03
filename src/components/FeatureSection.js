import React from "react";

import SectionTitle from "./basicComponent/SectionTitle";
import "../css/featureSection.css";

const FeatureSection = () => {
	return (
		<div className="feature-section light-grey-bg pb-4">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
						<SectionTitle title="關於五倍紅寶石 About 5xRuby " />
						<div className="feature-list d-flex text-center flex-wrap">
							<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
								<img
									src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img1-0d20ab19.png"
									alt="網頁設計前後端課程教學 | 五倍紅寶石"
								/>
								<h3 className="pt-3">
									網頁設計
									<br />
									前後端課程教學
								</h3>
								<p className="pt-3 pb-3 text-center">
									帶你掌握<strong>程式技能轉職工程師</strong>，
									<strong>程式課程</strong>
									從入門到進階讓你快速上手，學員好評推薦
									<strong>轉職課程</strong>！
								</p>
							</div>
							<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
								<img
									src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img2-26e4ca80.png"
									alt="頂尖技術網頁製作、專案開發 | 五倍紅寶石"
								/>
								<h3 className="pt-3">
									頂尖技術
									<br />
									網頁製作、專案開發
								</h3>
								<p className="pt-3 pb-3 text-center">
									<strong>網站開發</strong>到行動裝置 App
									工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。
								</p>
							</div>
							<div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
								<img
									src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img3-d0a4089e.png"
									alt="資訊軟體技術顧問 | 五倍紅寶石"
								/>
								<h3 className="pt-3">
									資訊軟體開發
									<br />
									技術顧問
								</h3>
								<p className="pt-3 pb-3 text-center">
									協助您將現有人力快速打造為 Ruby/Rails
									團隊，無須經歷繁瑣的人才招募就有即戰力！
								</p>
							</div>
							<div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
								<img
									src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img4-13321bf0.png"
									alt="前後端工程師社群經營問 | 默默會 | 五倍紅寶石"
								/>
								<h3 className="pt-3">
									前後端工程師
									<br />
									社群經營
								</h3>
								<p className="pt-3 pb-3 text-center">
									Ruby 社群經營、舉辦各類活動，促進 Ruby
									社群發展，歡迎前後端工程師分享交流。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureSection;
