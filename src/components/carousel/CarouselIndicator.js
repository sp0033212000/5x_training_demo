import React from "react";
import PropTypes from "prop-types";

const CarouselIndicator = ({
  id,
  active,
  onDotClick,
  onItemMouseEnter,
  onItemMouseLeave,
  indicatorClass
}) => {
  const onDotClickHandler = e => {
    const index = e.target.id - 1;
    onDotClick(index);
  };
  return (
    <button
      type="button"
      id={id}
      onClick={e => {
        onDotClickHandler(e);
      }}
      onMouseEnter={onItemMouseEnter}
      onMouseLeave={onItemMouseLeave}
      style={{ display: "contents" }}
    >
      <div className={`${indicatorClass}${active ? " active" : ""}`} />
    </button>
  );
};

CarouselIndicator.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onDotClick: PropTypes.func.isRequired,
  onItemMouseEnter: PropTypes.func.isRequired,
  onItemMouseLeave: PropTypes.func.isRequired,
  indicatorClass: PropTypes.string
};

CarouselIndicator.defaultProps = {
  indicatorClass: ""
};

export default CarouselIndicator;
