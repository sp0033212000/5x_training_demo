import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem";
import "../../css/carousel.css";
import CarouselIndicator from "./CarouselIndicator";

const Carousel = ({ data, repTime, ItemComponent, indicatorClass }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const isCanceled = useRef(false);

  const timerCounter = () => {
    if (!isCanceled.current) {
      setCurrIndex(prevCurrIndex => {
        let newIndex = prevCurrIndex + 1;
        if (newIndex === data.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    }
  };

  useEffect(() => {
    clearInterval(timer);
    setTimer(setInterval(timerCounter, repTime));
    return () => {
      clearInterval(timer);
      isCanceled.current = true;
    };
  }, [data]);

  const onItemMouseEnter = () => {
    clearInterval(timer);
  };

  const onItemMouseLeave = () => {
    setTimer(setInterval(timerCounter, repTime));
  };

  const onDotClick = index => {
    clearInterval(timer);
    setCurrIndex(index);
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="slides-home">
        {data.map(item => {
          return (
            <CarouselItem
              onItemMouseEnter={onItemMouseEnter}
              onItemMouseLeave={onItemMouseLeave}
              key={item.id}
              {...item}
              active={currIndex === item.id - 1}
              ItemComponent={ItemComponent}
            />
          );
        })}
        <div className="float-cleaner" />
      </div>
      <div className={`${indicatorClass}-container`}>
        {data.map(({ id }) => {
          return (
            <CarouselIndicator
              onItemMouseEnter={onItemMouseEnter}
              onItemMouseLeave={onItemMouseLeave}
              onDotClick={onDotClick}
              key={id}
              id={id}
              active={currIndex === id - 1}
              indicatorClass={indicatorClass}
            />
          );
        })}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  repTime: PropTypes.number.isRequired,
  ItemComponent: PropTypes.func.isRequired,
  indicatorClass: PropTypes.string
};

Carousel.defaultProps = {
  indicatorClass: ""
};

export default Carousel;
