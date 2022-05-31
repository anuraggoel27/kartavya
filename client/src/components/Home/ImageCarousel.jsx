import React from "react";
import { Carousel, Card, Form, Col } from "react-bootstrap";
function ImageCarousel(){
    return (
        <div className="Carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="/images/ImageCarousel/image1.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="/images/ImageCarousel/image2.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="/images/ImageCarousel/image3.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block w-100"
                src="/images/ImageCarousel/image4.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
    );
}
export default ImageCarousel;