// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';

const FoodSelection = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-content">
        <div className="carousel-item">{items[activeIndex]}</div>
      </div>
      <button className="carousel-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default FoodSelection;
