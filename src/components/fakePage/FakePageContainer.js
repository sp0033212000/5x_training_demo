import React from "react";
import PropTypes from "prop-types";

const FakePageContainer = ({ text }) => {
  return <div className="fake-page">{text}</div>;
};

FakePageContainer.propTypes = {
  text: PropTypes.string.isRequired
};

export default FakePageContainer;
