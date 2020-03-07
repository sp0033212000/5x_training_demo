import React from "react";
import PropTypes from "prop-types";

const LectureItem = ({ src, topic, teacher, courseDate }) => {
  return (
    <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5">
      <a href="/talks/rwd">
        <div className="lecture-wrap">
          <div className="lecture-cover">
            <img src={src} alt="客製化進階 RWD 手機版網頁設計班 - 假日班" />
          </div>
          <div className="lecture-content rl-padding py-2">
            <span className="badge badge-apply-course">開放報名中</span>
            <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">{topic}</h4>
            <small>
              講師：
              {teacher}
            </small>
            <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
              <small>開課時間</small>
              <div className="lecture-time-item">
                <span className="badge badge-course-time mb-1">
                  {courseDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

LectureItem.propTypes = {
  src: PropTypes.string,
  topic: PropTypes.string,
  teacher: PropTypes.string,
  courseDate: PropTypes.string
};

LectureItem.defaultProps = {
  src: "",
  topic: "",
  teacher: "",
  courseDate: ""
};

export default LectureItem;
