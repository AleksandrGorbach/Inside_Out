import React from 'react'
import axios from "axios";
import Footer from "./Footer"
import "./NewExperience.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from '../Services/index';

// eslint-disable-next-line
const defaultForm = {
  name: "",
  artistname: "",
  genre: "",
  coverArt: "",
  year: "",
  trackList: "",
};

export default function NewExperience() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id, value, input);

    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await axios.post(BASE_URL, { fields: input }, { headers });
  console.log(res);
  history.push("/");
  }

  return (
    <div className="form">
      <h2 className="head">New<span>Experience</span></h2>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          className ="input"
          id="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br />
        <br />
        <textarea
          className ="input-problem"
          id="problem"
          value={input.problem}
          onChange={handleChange}
          placeholder="The problem you are experiencing"
        />
        <br />
        <br />
        <input
          className="input"
          id="goal"
          value={input.goal}
          onChange={handleChange}
          placeholder="A short term goal you would like to set"
        />
        <br />
        <br />
        <input
          className="input"
          id="thorn"
          value={input.thorn}
          onChange={handleChange}
          placeholder="Thorn - An unpleasant experience you've had this week"
        />
        <br />
        <br />
        <input
          className="input"
          id="rose"
          value={input.rose}
          onChange={handleChange}
          placeholder="Rose - A pleasant experience you've had this week"
        />
        <br />
        <br />
        <button className="submit-btn">Submit</button>
      </form>
      <Footer />
    </div>
  )
}
