import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import dataku from "./data/dropdowndata";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cliniclist from "./components/Card";
import Vee from "./Vee.png";

function App() {
  const [options, setOptions] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    dataku({ setOptions });
  }, []);

  return (
    <div className="flex flex-col w-full h-full my-16 ">
      <BrowserRouter>
        <div className="left-side w-full">
          <h1 className="font-bold text-center text-5xl">hayVee's List of Clinic</h1>
          <img className="mx-auto w-full md:w-2/6" src={Vee} alt="" />
          <Form options={options} setter={setData}></Form>
          {/* <div className="mybtn">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full " onClick={() => console.log(data)}>
              Tes
            </button>
          </div> */}
        </div>
        <a href="#cliniclist" className="mx-auto mt-20 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-down"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
          </svg>
        </a>
        <div className=" flex right-side p-16" id="cliniclist">
          <Cliniclist></Cliniclist>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
