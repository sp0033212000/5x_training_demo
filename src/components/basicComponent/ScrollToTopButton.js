import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ScrollToTopButton = ({ scrollStepInPx, delayInMs }) => {
  const [intervalId, setIntervalId] = useState(0);
  const [times, setTimes] = useState(0);
  const [Totaltimes, setTotalTimes] = useState(0);

  useEffect(() => {
    if (Totaltimes === times) {
      clearInterval(intervalId);
    }
  }, [times]);

  const scrollStep = () => {
    setTimes(prevTimes => prevTimes + 1);
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    setTotalTimes(Math.floor(window.pageYOffset / scrollStepInPx) + 2);
    setIntervalId(setInterval(scrollStep, delayInMs));
  };

  return (
    <div>
      <button
        type="button"
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
        className="scrollup to-top text-center"
        id="scrTop"
      >
        <i
          style={{ transform: "translate(0px, -3px)" }}
          className="fa fa-angle-up"
          id="scrUp"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

ScrollToTopButton.propTypes = {
  scrollStepInPx: PropTypes.number.isRequired,
  delayInMs: PropTypes.number.isRequired
};

export default ScrollToTopButton;
