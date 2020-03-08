import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PaginationPage from "./PaginationPage";
import "../../../css/pagination.css";

const Pagination = ({ data, PageComponent }) => {
  const [showData, setShowData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setShowData([...data.indexOf(index)]);
  }, [data, index]);

  if (showData.length === 0) {
    return null;
  }

  return (
    <PaginationPage
      currentData={showData}
      PageComponent={PageComponent}
      onNaviButtonClick={ind => setIndex(ind)}
      currentPage={index}
      totalPage={data.length}
    />
  );
};

Pagination.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
  PageComponent: PropTypes.func.isRequired
};

export default Pagination;
