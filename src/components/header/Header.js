import React from "react";
import newIcon from "../../assets/imgs/navbar/new-301d86be.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import "../../css/header.css";

const Header = () => {
	return (
		<header className="nav-space">
			<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-light overwrite-nav">
				<div className="container-fluid nav-border pl-3 pr-3">
					<div href="/" className="navbar-brand logo-link">
						<img
							src={require("../../assets/imgs/navbar/logo.png")}
							alt="網頁設計前後端課程 | 五倍紅寶石"
						/>
					</div>
					<div
						className="collapse navbar-collapse flex-row-reverse "
						id="mobile-dropdown"
					>
						<ul className="navbar-nav">
							<li className="nav-item text-center">
								<a
									className="nav-link is-event"
									href="https://iamcoding.tw/"
									target="_blank"
								>
									<span style={{ fontSize: "1em" }}>
										<FontAwesomeIcon icon={far.faGem} />
									</span>
									線上課程
								</a>
							</li>
							<li className="nav-item text-center">
								<a
									className="nav-link is-event"
									href="https://astro.5xruby.tw/"
									target="_blank"
								>
									<span style={{ fontSize: "0.9em" }}>
										<FontAwesomeIcon icon={far.faCompass} />
									</span>
									ASTRO Camp
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link is-event" href="/fullstack-landing">
									<svg
										className="icon-bolt"
										xmlns="http://www.w3.org/2000/svg"
										width="12.59"
										height="19.215"
										viewBox="0 0 12.59 19.215"
									>
										<path
											id="bolt"
											d="M10.231,5.536H6.239L7.713,1.045A.834.834,0,0,0,6.91,0H1.927A.832.832,0,0,0,1.1.72L0,9.024a.832.832,0,0,0,.823.941H4.927l-1.6,6.73a.83.83,0,0,0,1.526.606l6.09-10.519A.829.829,0,0,0,10.231,5.536Z"
											transform="translate(0.762 0.75)"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.5"
										></path>
									</svg>
									全方位課程
									<span className="tag-new">
										<img
											src={newIcon}
											alt="全方位網頁設計前後端實戰 - 假日班 | 五倍紅寶石"
										/>
									</span>
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link" href="/talks">
									短期課程
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link" href="https://dev.5xruby.tw">
									專案開發
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link" href="/training">
									企業代訓
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link " href="/space">
									空間租借
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link " href="/posts">
									最新消息
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
