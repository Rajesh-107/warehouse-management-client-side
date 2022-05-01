import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../images/banner/banner1.jpg'
import banner2 from '../images/banner/banner2.jpg'
import banner3 from '../images/banner/banner3.jpg'

const BestCarStyle = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <div className='mb-5 mt-5'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-muted'>Our Car Shop</h3>
          <p className='text-muted'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-muted'>Our Car Shop</h3>
          <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-muted'>Our Car Shop</h3>
          <p className='text-muted'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default BestCarStyle;