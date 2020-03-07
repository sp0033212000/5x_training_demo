import React from "react";
import PropTypes from "prop-types";

const CarouselIndicator = props => {
  const {
    id,
    active,
    onDotClick,
    onItemMouseEnter,
    onItemMouseLeave,
    indicatorClass
  } = props;
  const onDotClickHandler = e => {
    const index = e.target.id - 1;
    onDotClick(index);
  };
  return (
    <div onMouseEnter={onItemMouseEnter} onMouseLeave={onItemMouseLeave}>
      <button
        type="button"
        id={id}
        onClick={onDotClickHandler}
        style={{ display: "contents" }}
      >
        <div
          id={id}
          className={`${indicatorClass}${active ? " active" : ""}`}
        />
      </button>
    </div>
  );
};

CarouselIndicator.propTypes = {
  id: PropTypes.number.isRequired,
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
