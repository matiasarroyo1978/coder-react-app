import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import image1 from '../../assets/kallay-4000.jpg';
import image2 from '../../assets/tirante1.jpg';
import image3 from '../../assets/corredizo-curvo.webp';
import './Carousel.css';
const Carousel = () => {
    return (
        // <div style={{position:"center" , bottom:"-20rem"}}>
            <ReactBootStrap.Carousel className='carousel'>
              <ReactBootStrap.Carousel.Item>
                <img
                className="d-block"
               
                height={"500vh"}
                src={image1}
                alt="First slide"
                />
                <ReactBootStrap.Carousel.Caption>
                  {/* <h3>First slide label</h3> */}
                  {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </ReactBootStrap.Carousel.Caption>
              </ReactBootStrap.Carousel.Item>

            <ReactBootStrap.Carousel.Item>
                <img
                className="d-block w-80"
                
                height={"500vh"}
                src={image2}
                alt="Second slide"
                />
                <ReactBootStrap.Carousel.Caption>
                  {/* <h3>Second slide label</h3> */}
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>

            <ReactBootStrap.Carousel.Item>
              <img
              className="d-block w-80"
              
              height={"500vh"}
              src={image3}
              alt="Third slide"
              />
              <ReactBootStrap.Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </ReactBootStrap.Carousel.Caption>
            </ReactBootStrap.Carousel.Item>

           </ReactBootStrap.Carousel>


        // </div>
    );
}

export default Carousel;
