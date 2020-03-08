import React from "react";
import PropTypes from "prop-types";

const PostItem = ({ title, body, src }) => {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default PostItem;
