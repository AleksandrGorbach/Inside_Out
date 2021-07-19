import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div onClick={toggleModal} className="about">
        About
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>About Inside Out</h2>
            <p>
              Inside Out is a web-based app that centers around being heard. Many people struggle with mental health issues and are afraid to speak up.
              <br />
              <br />
              "Pen to Paper" will bring you to a form where you will fill out a struggle you are currently facing.
              <br />
              <br />
              The homepage will showcase everyones experiences to show that you are not alone.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
