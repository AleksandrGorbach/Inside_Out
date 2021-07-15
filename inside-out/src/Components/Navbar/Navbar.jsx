import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Inside Out</h1>
      </Link>
      <Link to="/Pen to paper">
        <h3>Pen to Paper</h3>
      </Link>
      <Link to="/About">
        <h3>About</h3>
      </Link>
    </div>
  )
}
