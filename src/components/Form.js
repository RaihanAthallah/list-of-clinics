import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function Form({ options, setter }) {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();

  return (
    <div className="myform">
      <Select options={options} placeholder="Pilih dong" onChange={setFormdata} />
      <div className="mybtn">
        <button
          className="btn"
          onClick={() => {
            setter(formdata.label);
            navigate(`/${formdata.label}`);
          }}
        >
          Cari
        </button>
      </div>
    </div>
  );
}

export default Form;
