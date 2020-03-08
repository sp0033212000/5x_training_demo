/* eslint-disable no-param-reassign */
import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import PostItem from "./PostItem";

const PostPage = ({ currentData }) => {
  return (
    <div
      style={{ padding: "20px", marginBottom: "20px" }}
      className="card-group"
    >
      {currentData.map(item => {
        const fakeData = faker.image.avatar();
        item.src = fakeData;
        return <PostItem key={item.id} {...item} />;
      })}
    </div>
  );
};

PostPage.propTypes = {
  currentData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostPage;
