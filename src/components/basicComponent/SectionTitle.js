import React from "react";

const SectionTitle = ({ title, subcl }) => {
	return (
		<h3 className={`${subcl || ""}text-center mb-5 mt-5 pb-4`}>
			<span>{title}</span>
		</h3>
	);
};

export default SectionTitle;
