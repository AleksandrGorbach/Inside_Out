import React from 'react'
import axios from "axios";
use { useState } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from '../Services/index';

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



  return (
    <div>
      <h2>What's going on?</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          id="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input type="textarea"
          id="problem"
          value="{input.problem}"
          onChange={handleChange}
          placerholder="Problem"
        />
        <br />
      </form>
    </div>
  )
}
