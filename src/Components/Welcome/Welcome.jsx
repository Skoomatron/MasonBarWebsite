import React from "react";
import MainCarousel from './Carousel.jsx';

const Welcome = (props) => {

  return (
    <div>
      {/* <h2>{props.state</h2> */}
      <MainCarousel state={props.state}/>
    </div>
  )
}

export default Welcome;