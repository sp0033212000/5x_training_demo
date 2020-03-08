import React from "react";
import PropTypes from "prop-types";

const CarouselItem = props => {
  const { ItemComponent, id, active } = props;
  return (
    <div id={id} className={`slider-item${active ? " active" : ""}`}>
      <ItemComponent {...props} />
    </div>
  );
};

CarouselItem.propTypes = {
  ItemComponent: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};

export default CarouselItem;
