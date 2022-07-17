import React from 'react';
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {useState} from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MainCarousel = (props) => {

  const [sliderRef, setSliderRef] = useState(null)


  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  }

  const hotelCards = [
    {
      title: 'card one',
      imageSrc: "https://drive.google.com/uc?export=view&id=1Ezb8eZ4yiH_c_P_wf6e-m2uYUyNZpRfr",
      description: 'poopy pants',
    },
    {
      title: 'card one',
      imageSrc: "https://drive.google.com/uc?export=view&id=1-G39xZwoKkIEYw28t0DYyefJEkYPHBNr",
      description: 'poopy pants',
    },
    {
      title: 'card one',
      imageSrc: "https://drive.google.com/uc?export=view&id=1edmqcUSAqGmL19hhtI09-Lpde__ZwjOg",
      description: 'poopy pants',
    }
  ]

  return (
    <div className='content'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index}>
            <h2>{card.title}</h2>
            <img alt={card.title} src={card.imageSrc} width="100" height="100" />
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainCarousel;

