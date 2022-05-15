import React from "react";
import { Carousel } from "react-bootstrap";

const Bennar = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 m-auto"
            src="https://i.ibb.co/80kSV64/banner4.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 m-auto"
            src="https://i.ibb.co/r4bJJTN/banner7.jpg"
            alt="Second slide"
          />          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 m-auto"
            src="https://i.ibb.co/c666v1T/banner6.jpg"
            alt="Second slide"
          />         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 m-auto"
            src="https://i.ibb.co/tmhDd49/banner5.jpg"
            alt="Third slide"
          />         
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Bennar;
