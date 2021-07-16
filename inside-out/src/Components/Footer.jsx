import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      {/* <h1>Footer</h1> */}
      <p>Created @Aleksandr Gorbach</p>
      <a href="https://github.com/AleksandrGorbach" target="_blank">
        <FontAwesomeIcon icon={faGithub} id="git" />
      </a>
      <a href="https://www.linkedin.com/in/aleksandr-gorbach/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} id="link" />
      </a>
    </div>
  )
}
