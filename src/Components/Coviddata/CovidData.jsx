import React from "react";

const CovidData = () => {
  //https://data.covid19india.org/v4/min/data.min.json this is api of covid

  const clickBtn = () => {
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
