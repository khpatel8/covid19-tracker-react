import React, { useState, useEffect } from "react";
import fetchTotalData, { fetchUSDailyData, fetchDailyData } from "../api";
import Dropdown from "./Dropdown";
import Card from "./Card";
import Chart from "./Chart";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import { getCord, getStateDataAll } from "./util";

function Main() {
  const [dailyData, setDailyData] = useState(null);
  const [stateDataAll, setStateDataAll] = useState({});
  const [totalData, setTotalData] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  });
  const [stateCode, setStateCode] = useState("US");

  useEffect(() => {
    const fetchAPI = async () => {
      if (stateCode === "US") {
        const data = await fetchUSDailyData();

        if (!data) return;

        const confirmed = data[data.length - 1].confirmed;
        const recovered = data[data.length - 1].recovered;
        const deaths = data[data.length - 1].deaths;

        setTotalData({
          confirmed,
          recovered,
          deaths,
        });

        setDailyData(data);
        setStateDataAll(getStateDataAll());
      } else {
        let data = await fetchTotalData(stateCode);

        let confirmed = data.confirmed;
        let recovered = 0;
        let deaths = data.deaths;

        setTotalData({
          confirmed,
          recovered,
          deaths,
        });

        data = await fetchDailyData(stateCode);
        setDailyData(data);
      }
    };
    fetchAPI();
  }, [stateCode]);

  function handleChange(event) {
    const value = event.target.value;
    setStateCode(value);
  }

  return (
    <div>
      <Dropdown stateCode={stateCode} onChange={handleChange} />
      <div className="visual-div">
        <Card data={totalData} />
        {dailyData && <Chart data={dailyData} />}
      </div>
      <Map
        center={
          stateCode === "US"
            ? { lat: 39.89781, lng: -102.079405 }
            : getCord(stateCode)
        }
        zoom={5}
        data={stateCode === "US" ? totalData : stateDataAll}
        state={stateCode}
      ></Map>
    </div>
  );
}

export default Main;
