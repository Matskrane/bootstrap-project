import React from "react";
import { Carousel } from 'react-bootstrap';


const ImageSlider = () => {
    return (

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="../images/carousel-1.jpg" alt="stuff"/>  
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="../images/carousel-2.jpg" alt="stuff"/>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="../images/carousel-3.jpg" alt="stuff"/>
        </Carousel.Item>
      </Carousel>

    )
}



export default ImageSlider;