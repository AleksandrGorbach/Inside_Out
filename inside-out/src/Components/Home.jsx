import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../Services';
import axios from "axios";
import Data from "./Data";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(BASE_URL, {
        headers,
      });
      console.log(res.data.records)
      setData(res.data.records);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(card => {
        return (<div>
          <h1>name: {card.fields.name}</h1>
        </div>)
      })}
    </div>
  )
}
