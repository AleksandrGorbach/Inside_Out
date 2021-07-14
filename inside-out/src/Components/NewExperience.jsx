import React from 'react'
import axios from "axios";
import { useState } from "react";
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
  // const history = useHistory();

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
  }

  return (
    <div>
      <h2>What's going on?</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          id="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br />
        <input type="textarea"
          id="problem"
          value={input.problem}
          onChange={handleChange}
          placerholder="Problem"
        />
        <br />
        <input
          id="goal"
          value={input.goal}
          onChange={handleChange}
          placeholder="Goal"
        />
        <br />
        <input
          id="thorn"
          value={input.thorn}
          onChange={handleChange}
          placerholde="Thorn"
        />
        <br />
        <input
          id="rose"
          value={input.rose}
          onChange={handleChange}
          placeholder="Rose"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
