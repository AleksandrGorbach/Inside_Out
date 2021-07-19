import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Box.css";

const Card = (props) => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
      <div data-aos="fade-up" className="boxes Cards">
            <h1>{props?.name}</h1>
            <p>Problem: {props?.problem}</p>
            <h6>Goal: {props?.goal}</h6>
            <h6>Thorn: {props?.thorn}</h6>
            <h6>Rose: {props?.rose}</h6>
      </div>
  )
}

export default Card;