import React, { useState } from "react";
import carousel1 from "../../images/images/carousel-1.png";
import carousel2 from "../../images/images/carousel-2.png";
import carousel3 from "../../images/images/carousel-3.png";
import carousel4 from "../../images/images/carousel-4.png";
import carousel5 from "../../images/images/carousel-5.png";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className=" carousel-container">
      <div className="container">
        <h2 className="pb-5 text-center" style={{color:"white"}}>
          Here are some of <span style={{ color: "#7AB259", }}>our works</span>
        </h2>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="First slide"
                />
              </div>
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={carousel2}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={carousel3}
                  alt="First slide"
                />
              </div>
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={carousel4}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={carousel5}
                  alt="First slide"
                />
              </div>
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
