import "./App.css";
import React, { useState } from "react";
import { MoonLoader } from "react-spinners";

const TimeDisplay = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch("http://worldtimeapi.org/api/ip");
    const data = await response.json();
    const datetime = new Date(data.datetime);
    setTime(datetime.toLocaleTimeString());
    setDate(datetime.toLocaleDateString());
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="content">
        {!loading && (
          <div>
            <p>Time: {time}</p>
            <p>Date: {date}</p>
          </div>
        )}
        {loading && (
          <div className="spinner">
            <MoonLoader loading={loading} size={70} />
          </div>
        )}
        <button className="btn" onClick={fetchData}>
          Current Time
        </button>
      </div>
    </div>
  );
};

export default TimeDisplay;
