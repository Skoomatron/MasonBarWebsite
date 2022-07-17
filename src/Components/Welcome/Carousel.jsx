import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const MainCarousel = (props) => {

  return (
    <Carousel fade>
      <p>At the Mason Bar there is nothing but good times!</p>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1Ezb8eZ4yiH_c_P_wf6e-m2uYUyNZpRfr"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Live Music!</h3>
          <p>Text Placeholder</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1-G39xZwoKkIEYw28t0DYyefJEkYPHBNr"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Great People!</h3>
          <p>Text Placeholder</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1edmqcUSAqGmL19hhtI09-Lpde__ZwjOg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Great Drinks!</h3>
          <p>Text Placeholder</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;

