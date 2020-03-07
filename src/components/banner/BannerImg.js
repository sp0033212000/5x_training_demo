import React from "react";
import PropTypes from "prop-types";

const BannerImg = ({ src, alt, srcLg, srcMd, srcSm }) => {
  // return <img className="banner item img" src={src} alt={alt} />;
  return (
    <picture>
      <source srcSet={srcSm} media="(max-width: 400px)" />
      <source srcSet={srcMd} media="(max-width: 768px)" />
      <source srcSet={srcLg} media="(min-width: 1920px)" />
      <img src={src} alt={alt} />
    </picture>
  );
};

BannerImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  srcLg: PropTypes.string,
  srcMd: PropTypes.string,
  srcSm: PropTypes.string
};

BannerImg.defaultProps = {
  src: "",
  alt: "",
  srcLg: "",
  srcMd: "",
  srcSm: ""
};
export default BannerImg;
