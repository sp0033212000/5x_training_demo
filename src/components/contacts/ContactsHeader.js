import React from "react";

const ContactsHeader = () => {
	return (
		<div className="top-banner red-bg pt-3 pb-3 contacts">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 text-right">
						<div
							className="fb-like fb_iframe_widget"
							data-href="https://5xruby.tw/press"
							data-layout="button_count"
							data-size="large"
							data-action="like"
							data-share="true"
							fb-xfbml-state="rendered"
							fb-iframe-plugin-query="action=like&amp;app_id=511040962329986&amp;container_width=0&amp;href=https%3A%2F%2F5xruby.tw%2Fpress&amp;layout=button_count&amp;locale=zh_TW&amp;sdk=joey&amp;share=true&amp;size=large"
						>
							<span
								style={{
									verticalAlign: "bottom",
									width: "128px",
									height: "28px"
								}}
							>
								<iframe
									name="f3a661fbd210ac"
									width="1000px"
									height="1000px"
									title="fb:like Facebook Social Plugin"
									frameBorder="0"
									allowtransparency="true"
									allowFullScreen
									scrolling="no"
									allow="encrypted-media"
									src="https://www.facebook.com/v2.0/plugins/like.php?action=like&amp;app_id=511040962329986&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D45%23cb%3Df20c5ea5bbfc34c%26domain%3D5xruby.tw%26origin%3Dhttps%253A%252F%252F5xruby.tw%252Ff22f3ac480e4d48%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2F5xruby.tw%2Fpress&amp;layout=button_count&amp;locale=zh_TW&amp;sdk=joey&amp;share=true&amp;size=large"
									style={{
										border: "none",
										visibility: "visible",
										width: "128px",
										height: "28px"
									}}
									className=""
								></iframe>
							</span>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center text-white">
						<ol
							className="breadcrumb"
							itemScope="itemscope"
							itemType="https://schema.org/BreadcrumbList"
						>
							<li
								itemProp="itemListElement"
								itemScope="itemscope"
								itemType="https://schema.org/ListItem"
							>
								<a
									itemScope="itemscope"
									itemType="https://schema.org/Thing"
									itemProp="item"
									href="/"
								>
									<span itemProp="name">首頁&nbsp;</span>
								</a>
							</li>
							<li
								itemProp="itemListElement"
								itemScope="itemscope"
								itemType="https://schema.org/ListItem"
							>
								<h5>
									<a
										itemScope="itemscope"
										itemType="https://schema.org/Thing"
										itemProp="item"
										href="/press"
									>
										<span itemProp="name">&nbsp;聯絡我們</span>
									</a>
								</h5>
							</li>
						</ol>
						<h1 className="title mt-4 mb-3">有任何問題嗎？馬上聯絡我們！</h1>
						<h3 className="text-center mb-2"></h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactsHeader;
