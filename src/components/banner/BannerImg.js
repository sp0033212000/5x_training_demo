import React from "react";
import PropTypes from "prop-types";
import imageLoaderHelper from "../../helper/imageLoaderHelper";

const BannerImg = ({ src, alt, srcLg, srcMd, srcSm }) => {
  return (
    <picture>
      <source srcSet={imageLoaderHelper[srcSm]} media="(max-width: 400px)" />
      <source srcSet={imageLoaderHelper[srcMd]} media="(max-width: 768px)" />
      <source srcSet={imageLoaderHelper[srcLg]} media="(min-width: 1920px)" />
      <img src={imageLoaderHelper[src]} alt={alt} />
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
