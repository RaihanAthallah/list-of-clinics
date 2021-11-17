import React from "react";
import ReactDom from "react-dom";
import { clinics } from "./data";
import "../index.css";

const Cliniclist = () => {
  return (
    <section className="cliniclist">
      {clinics.map((clinic) => {
        const { id, img, nama, address, service_time, city, contact, province, postal_code } = clinic;
        return <Clinics clinic={clinic}></Clinics>;
      })}
    </section>
  );
};

const Clinics = (items) => {
  const { id, img, nama, address, service_time, city, contact, province, postal_code } = items.clinic;
  return (
    <article key={id} className="clinic">
      <img src={img} alt={nama} />
      <div className="addition ">
        <div class=" grid grid-rows-3 grid-flow-col">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="mt-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold mt-1 pl-1">{nama}</h1>
          </div>
          <div>
            <p className="pl-1">{address}</p>
          </div>
          <div>
            <h4 className="mt-3 pl-1">{service_time}</h4>
          </div>
        </div>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full cardbtn">Details</button>
    </article>
  );
};

// ReactDom.render(<Cliniclist />, document.getElementById("root"));

export default Cliniclist;
