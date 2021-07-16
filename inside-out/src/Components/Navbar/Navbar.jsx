import React from 'react';
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="NavContainer">
      <div className="Links">
      <Link to="/">
        <h1 className="Middle">Inside Out</h1>
      </Link>
      <Link to="/Pen to paper">
        <h3 className="Right">Pen to Paper</h3>
      </Link>
      {/* <Link to="/About">
        <h3 className="Left">About</h3>
      </Link> */}
      <div className = "Left">
          <Modal />
      </div>
      </div>
    </div>
  )
}
