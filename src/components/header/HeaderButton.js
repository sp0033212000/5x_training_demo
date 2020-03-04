import React from "react";

const HeaderButton = () => {
	return (
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#mobile-dropdown"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<div className="icon-bar"></div>
			<div className="icon-bar"></div>
			<div className="icon-bar"></div>
		</button>
	);
};

export default HeaderButton;
