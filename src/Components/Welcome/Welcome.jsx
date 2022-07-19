import React from "react";
import MainCarousel from './Carousel.jsx';

const Welcome = (props) => {

  return (
    <div>
      <MainCarousel state={props.state}/>
    </div>
  )
}

export default Welcome;