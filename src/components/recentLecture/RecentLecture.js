import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../basicComponent/SectionTitle";

import "../../css/recentLecture.css";
import LectureItem from "./LectureItem";

const RecentLecture = ({ data }) => {
  return (
    <div className="recent-lecture">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
            <SectionTitle title="熱門網頁設計課程推薦" />
            <div className="lecture-list d-flex flex-wrap pb-5">
              {data.map(({ id, src, topic, teacher, courseDate }) => {
                return (
                  <LectureItem
                    key={id}
                    src={src}
                    topic={topic}
                    teacher={teacher}
                    courseDate={courseDate}
                  />
                );
              })}
              <div className="col-12 text-center">
                <a className="btn btn-lg btn-red mt-4" href="/talks">
                  看更多網頁課程
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecentLecture.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RecentLecture;
