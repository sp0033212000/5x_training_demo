import React from "react";
import PropTypes from "prop-types";
import Carousel from "../carousel/Carousel";
import BannerImg from "./BannerImg";

const Banner = ({ data }) => {
  if (data.length === 0) {
    return null;
  }
  return (
    // <div style={{ height: "431px" }}>
    <Carousel
      data={data}
      repTime={5000}
      ItemComponent={BannerImg}
      indicatorClass="carousel-dot"
    />
    // </div>
  );
};

Banner.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Banner;
