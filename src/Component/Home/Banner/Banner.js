import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mydoglikes.com/wp-content/uploads/2015/05/Scoop-of-Veg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Healthy Food</h3>
          <p>Eat healthy Stay healthy.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mydoglikes.com/wp-content/uploads/2015/05/Scoop-of-Veg.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tasty Food</h3>
          <p>Taste like your hoom.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mydoglikes.com/wp-content/uploads/2015/05/Scoop-of-Veg.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Halal Food</h3>
          <p>
            Eat Halal Stay Halal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;