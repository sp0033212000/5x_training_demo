import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title, subcl }) => {
  return (
    <h3 className={`${subcl || ""}text-center mb-5 mt-5 pb-4`}>
      <span>{title}</span>
    </h3>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subcl: PropTypes.string
};

SectionTitle.defaultProps = {
  title: "",
  subcl: ""
};

export default SectionTitle;
