import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function Form({ options, setter }) {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();

  return (
    <div className="myform  w-2/3 md:w-1/3 mx-auto">
      <Select className="border-4 border-blue-700 rounded-md" options={options} placeholder="Pilih dong" onChange={setFormdata} />
      <button
        className="animate-pulse my-2 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-700 text-white font-bold py-2 px-8 w-full uppercase rounded-lg mx-auto subpixel-antialiased"
        onClick={() => {
          setter(formdata.label);
          navigate(`/${formdata.label}`);
        }}
      >
        Cari
      </button>
    </div>
  );
}

export default Form;
