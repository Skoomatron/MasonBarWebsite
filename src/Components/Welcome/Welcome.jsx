import React from "react";
import MainCarousel from './Carousel.jsx';

const Welcome = (props) => {

  return (
    <div>
      <MainCarousel/>
      <button
        onClick={() => {
          props.clickHandler();
        }}
      >
        Test Button
      </button>
    </div>
  )
}

export default Welcome;