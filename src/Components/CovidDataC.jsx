import React, { Component } from "react";

class CovidDataC extends Component {
  render() {
    const btnFunc = () => {
      console.log("chek THAT");
    };
    return (
      <>
        <h4>this is a class base component</h4>
        <button onClick={btnFunc}>Get Data</button>
      </>
    );
  }
}

export default CovidDataC;
