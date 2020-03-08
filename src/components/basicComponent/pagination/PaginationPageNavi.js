import React, { useMemo } from "react";
import PropTypes from "prop-types";

const TYPE = {
  FIRST: "FIRST",
  PREV: "PREV",
  CURR: "CURR",
  NEXT: "NEXT",
  LAST: "LAST"
};

const PaginationPageNavi = ({ onNaviButtonClick, currentPage, totalPage }) => {
  const isFirst = useMemo(() => currentPage === 1, [currentPage]);
  const isFinal = useMemo(() => currentPage === totalPage, [currentPage]);
  const RenderPageIndexHelp = type => {
    let resIndex = 0;
    if (type === TYPE.PREV) {
      if (isFirst) {
        resIndex = currentPage;
      } else if (isFinal) {
        resIndex = currentPage - 2;
      } else {
        resIndex = currentPage - 1;
      }
    }

    if (type === TYPE.CURR) {
      if (isFirst) {
        resIndex = currentPage + 1;
      } else if (isFinal) {
        resIndex = currentPage - 1;
      } else {
        resIndex = currentPage;
      }
    }

    if (type === TYPE.NEXT) {
      if (isFirst) {
        resIndex = currentPage + 2;
      } else if (isFinal) {
        resIndex = currentPage;
      } else {
        resIndex = currentPage + 1;
      }
    }

    return resIndex;
  };

  const onNaviClick = type => {
    if (type === TYPE.FIRST) {
      onNaviButtonClick(1);
    }

    if (type === TYPE.PREV) {
      if (isFirst) {
        onNaviButtonClick(1);
      } else if (isFinal) {
        onNaviButtonClick(currentPage - 2);
      } else {
        onNaviButtonClick(currentPage - 1);
      }
    }

    if (type === TYPE.CURR) {
      if (isFirst) {
        onNaviButtonClick(currentPage + 1);
      } else if (isFinal) {
        onNaviButtonClick(currentPage - 1);
      } else {
        onNaviButtonClick(currentPage);
      }
    }

    if (type === TYPE.NEXT) {
      if (isFirst) {
        onNaviButtonClick(currentPage + 2);
      } else if (isFinal) {
        onNaviButtonClick(currentPage);
      } else {
        onNaviButtonClick(currentPage + 1);
      }
    }

    if (type === TYPE.LAST) {
      onNaviButtonClick(totalPage);
    }
  };

  return (
    <nav className="align-middle" aria-label="...">
      <ul className="pagination">
        {/* If page one disabled onClick event */}
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <button
            type="button"
            className="page-link"
            onClick={() => onNaviClick(TYPE.FIRST)}
            // style={{ display: "contents" }}
          >
            第一頁
          </button>
        </li>
        <li className="page-item">
          <button
            type="button"
            className={`page-link${isFirst ? " active" : ""}`}
            onClick={() => onNaviClick(TYPE.PREV)}
            // style={{ display: "contents" }}
          >
            {RenderPageIndexHelp(TYPE.PREV)}
          </button>
        </li>
        <li className="page-item">
          <button
            type="button"
            className={`page-link${!isFinal && !isFirst ? " active" : ""}`}
            onClick={() => onNaviClick(TYPE.CURR)}
            // style={{ display: "contents" }}
          >
            {RenderPageIndexHelp(TYPE.CURR)}
          </button>
        </li>
        <li className="page-item">
          <button
            type="button"
            className={`page-link${isFinal ? " active" : ""}`}
            onClick={() => onNaviClick(TYPE.NEXT)}
            // style={{ display: "contents" }}
          >
            {RenderPageIndexHelp(TYPE.NEXT)}
          </button>
        </li>
        <li className="page-item">
          <button
            type="button"
            className={`page-link${isFinal ? " disabled" : ""}`}
            onClick={() => onNaviClick(TYPE.LAST)}
            // style={{ display: "contents" }}
          >
            最後一頁
          </button>
        </li>
      </ul>
    </nav>
  );
};

PaginationPageNavi.propTypes = {
  onNaviButtonClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired
};

export default PaginationPageNavi;
