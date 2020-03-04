import React from "react";

const KnowAboutUs = () => {
	return (
		<div className="know-about-us">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<h3 className="text-center mt-3 mb-2">想更瞭解我們嗎？</h3>
						<p className="text text-center mb-4 mt-4">
							您可以看看
							<a className="text-red" href="/">
								常見問題
							</a>
							或者直接
							<a className="text-red" href="/">
								線上洽詢
							</a>
							，會有親切的客服人員回答您的問題，
							<br /> 也可以透過社群網站隨時關注我們的動態。
						</p>
					</div>
					<div className="social-btn bottom-spacing-lg mx-auto mb-5">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="rl-spacing mr-4"
							href="https://www.facebook.com/5xruby"
						>
							<img
								src="https://5xruby.tw//assets/images/index/icon/icon-fb-2f24e7a0.png"
								alt="facebook icon"
							/>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="rl-spacing ml-3"
							href="https://twitter.com/5xruby"
						>
							<img
								src="https://5xruby.tw//assets/images/index/icon/icon-twitter-89f8d087.png"
								alt="twitter icon"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KnowAboutUs;
