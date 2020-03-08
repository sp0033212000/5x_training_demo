import React from "react";
import PropTypes from "prop-types";
import imageLoaderHelper from "../../helper/imageLoaderHelper";

const AvatarItem = ({ intro, avatar, job, src }) => {
  return (
    <div className="avatar-partial">
      <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
          <img
            src={imageLoaderHelper[src]}
            className="d-block"
            alt={`程式課程推薦 | ${avatar} | 五倍紅寶石`}
          />
        </div>
        <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
          <p className="d-block statement">
            {intro}
            <br />
            <span className="d-block text-red large mt-3 mb-2">{avatar}</span>
            <span className="d-block text-grey">{job}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

AvatarItem.propTypes = {
  intro: PropTypes.string,
  avatar: PropTypes.string,
  job: PropTypes.string,
  src: PropTypes.string
};

AvatarItem.defaultProps = {
  intro: "",
  avatar: "",
  job: "",
  src: ""
};

export default AvatarItem;
