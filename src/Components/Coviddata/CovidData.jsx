import React from "react";
import axios from "axios";

const CovidData = () => {
  //https://data.covid19india.org/v4/min/data.min.json this is api of covid

  const clickBtn = () => {
    //const url = "https://data.covid19india.org/v4/min/data.min.json";
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((response) => {
        const test = response.data;
        console.log(test);
      })
      .catch((error) => {});
    console.log("testing btn ");
  };

  return (
    <>
      <h2>Welcome to find the detail of Covid</h2>
      <button onClick={clickBtn}>Get Data</button>
    </>
  );
};

export default CovidData;
