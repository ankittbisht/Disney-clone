import React from 'react';
import "../App.css"

const ShimmerSlider = () => {
  return (
    <div className="slider">
      <div className="sliderBG media"></div>
      <div className="p-20">
        <div className="sliderBG title-line"></div>
        <div className="sliderBG title-line end"></div>
      </div>
    </div>
  );
};

export default ShimmerSlider;
