import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../Services';
import Card from "./Card/Card";
import axios from "axios";
import "./Card/Card.css"

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
    <div className = "card-container">
      {data.map(card => {
        return (
          <div className="card" key={card.id}>
            <div className="card-inner">              
            <h1>Name:{card.fields.name}</h1>
            <p>Problem:{card.fields.problem}</p>
            <h6>Goal:{card.fields.goal}</h6>
            <h6>Thorn:{card.fields.thorn}</h6>
            <h6>Rose:{card.fields.rose}</h6>
            </div>
            </div>
        )
      })}
    </div>
  )
}
