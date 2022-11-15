import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import image1 from '../images/kallay-4000.jpg';
import image2 from '../images/tirante1.jpg';
import image3 from '../images/corredizo-curvo.webp';
import './Carousel.css';
const Carousel = () => {
    return (
            <ReactBootStrap.Carousel className='carousel'>
              <ReactBootStrap.Carousel.Item>
                <img
                className="d-block"
               
                height={"500vh"}
                src={image1}
                alt="First slide"
                />
              </ReactBootStrap.Carousel.Item>

            <ReactBootStrap.Carousel.Item>
                <img
                className="d-block w-80"
                
                height={"500vh"}
                src={image2}
                alt="Second slide"
                />
            </ReactBootStrap.Carousel.Item>

            <ReactBootStrap.Carousel.Item>
              <img
              className="d-block w-80"
              
              height={"500vh"}
              src={image3}
              alt="Third slide"
              />
            </ReactBootStrap.Carousel.Item>

           </ReactBootStrap.Carousel>
    );
}

export default Carousel;
