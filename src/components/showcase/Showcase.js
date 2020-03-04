import React from "react";

import "../../css/showcase.css";

const Showcase = () => {
	return (
		<div className="showcases pb-4">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-lg-12 col-md-12 center-block mt-5">
						<h3 className="text-center mt-5 pb-4">案例作品 Showcase</h3>
						<div className="d-flex flex-wrap">
							<div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case">
								<a
									href="https://spacenextdoor.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									<div className="lecture-wrap">
										<img
											src="https://5xruby.tw/assets/images/showcases/space_next_door-4dfdfeb6.png"
											alt="SpaceNextDoor"
										/>
										<h4 className="rl-padding mt-3 mb-3">SpaceNextDoor</h4>
										<div className="rl-padding">
											<p className="descri mb-5 text-left">
												Space Next Door is inspired by the sharing economy in
												which we hope to encourage people to put up their unused
												space so that users looking for personal or business
												storage space have better options, closer to where they
												need it. We are striving to build a trusted community
												marketplace for you to list, discover and book the
												nearest and best space at affordable prices.
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case">
								<a
									href="https://itunes.apple.com/in/app/shopmatic-go/id1174712646?mt=8"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									<div className="lecture-wrap">
										<img
											src="https://5xruby.tw/assets/images/showcases/shopmatic_go-f7b86d46.png"
											alt="Shopmatic Go app"
										/>
										<h4 className="rl-padding mt-3 mb-3">Shopmatic Go app</h4>
										<div className="rl-padding">
											<p className="descri mb-5 text-left">
												Shopmatic Go is an exciting online platform where you
												can create a unique and comprehensive online store for
												your business, in a matter of minutes.
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case">
								<a
									href="https://goshopmatic.com/in/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									<div className="lecture-wrap">
										<img
											src="https://5xruby.tw/assets/images/showcases/shopmatic-92ff9dcf.jpg"
											alt="跨境電子商務 Shopmatic"
										/>
										<h4 className="rl-padding mt-3 mb-3">
											跨境電子商務 Shopmatic
										</h4>
										<div className="rl-padding">
											<p className="descri mb-5 text-left">
												Shopmatic manages the entire ecosystem for anyone
												wanting to sell online. We go the extra mile to ensure
												that we help you in every step of the process to grow
												your business online - from developing your own unique
												webstore, to listing you on marketplaces and social
												channels, to providing you insights on how to sell
												online.
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right mt-3">
								<a className="text-red" href="./showcases">
									...更多案例
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
