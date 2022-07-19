import React from 'react';
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {useState} from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MainCarousel = (props) => {

  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
  }

  return (
    <div className="carouselContainer">

      <Slider ref={setSliderRef} {...sliderSettings}>
        {props.state.images.map((card, index) => (
          <div  key={index}>
            <p className="imageCaption">{card.photoCaption}</p>
            <img className="carouselImage" src={card.photoURL} width="auto" height="auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainCarousel;

