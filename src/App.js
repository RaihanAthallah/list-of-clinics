import React, { useState, useEffect } from "react";
import Form from "./components/Form";
// import dataku from "./data/dropdowndata";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cliniclist from "./components/Card";
import "./index.css";

function App() {
  const [options, setOptions] = useState({});
  const [data, setData] = useState({});

  // useEffect(() => {
  //   dataku({ setOptions });
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="left-side">
          <h1>hayVee's List of Clinic</h1>
          <Form options={options} setter={setData}></Form>
          <div className="mybtn">
            <button className="btn" onClick={() => console.log(data)}>
              Tes
            </button>
          </div>
        </div>
        <div className="right-side">
          <Cliniclist></Cliniclist>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
