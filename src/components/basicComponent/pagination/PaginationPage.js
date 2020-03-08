import React from "react";
import PropTypes from "prop-types";
import PaginationPageNavi from "./PaginationPageNavi";

const PaginationPage = ({
  currentData,
  PageComponent,
  onNaviButtonClick,
  currentPage,
  totalPage
}) => {
  return (
    <fragment>
      <PageComponent currentData={currentData} />
      <PaginationPageNavi
        onNaviButtonClick={onNaviButtonClick}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </fragment>
  );
};

PaginationPage.propTypes = {
  currentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  PageComponent: PropTypes.func.isRequired,
  onNaviButtonClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired
};

export default PaginationPage;
