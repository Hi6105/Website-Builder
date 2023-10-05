import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import image from "./sc.jpg";
import Image from "next/image";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={image} width="25px" height="380" quality={100} />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={image} width="25px" height="380" quality={100} />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={image} width="25px" height="380" quality={100} />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
