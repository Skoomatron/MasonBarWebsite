import React from "react";
import MainCarousel from './Carousel.jsx';

const Welcome = (props) => {

  return (
    <div className="mainWelcomeBackground">
      <h2 className="welcomeMessage">{props.state.welcome}</h2>
      <MainCarousel state={props.state}/>
    </div>
  )
}

export default Welcome;