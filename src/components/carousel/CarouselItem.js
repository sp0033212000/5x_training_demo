import React from "react";
import PropTypes from "prop-types";

const CarouselItem = props => {
  const {
    ItemComponent,
    id,
    onItemMouseEnter,
    onItemMouseLeave,
    active
  } = props;
  return (
    <div
      id={id}
      onMouseEnter={onItemMouseEnter}
      onMouseLeave={onItemMouseLeave}
      className={`slider-item${active ? " active" : ""}`}
    >
      <ItemComponent {...props} />
    </div>
  );
};

CarouselItem.propTypes = {
  ItemComponent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onItemMouseEnter: PropTypes.func.isRequired,
  onItemMouseLeave: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default CarouselItem;
