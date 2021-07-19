import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../Services';
import Card from "./Card/Card";
import Footer from "./Footer";
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
    <div>
    <div>
      <h1 className="title">User<span>Testimonials</span></h1>
    </div>
    <div className="card-container">
      {data?.map(card => {
        return (
          // <div className="card" key={card.id}>
            <Card key={card.id} name={card.fields.name} problem={card.fields.problem} goal={card.fields.goal} thorn={card.fields.thorn} rose={card.fields.rose}/>
            // </div>
        )
      })}
      </div>
      <Footer />
      </div>
  )
}
