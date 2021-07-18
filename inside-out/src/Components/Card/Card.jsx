import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Box.css";

const Card = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="Card">
      <h1 className="title">User<span>Testimonials</span></h1>
      <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div  data-aos="fade-up" className="boxes">3</div>
        <div data-aos="fade-right" className="boxes">4</div>
        <div data-aos="fade-left" className="boxes">5</div>
      </div>
    </div>
  )
}

export default Card;