import React from "react";
import ReactDom from "react-dom";
import { clinics } from "./data";
import "../index.css";

const Cliniclist = () => {
  return (
    <section className="cliniclist grid grid-cols-1 gap-6 md:grid-cols-3 mt-40 mx-auto max-w-7xl">
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
    <article key={id} className="clinic block shadow-lg rounded-lg bg-white transition duration-500 transform hover:-translate-y-2">
      <img src={img} className="rounded-lg max-h-52 w-full" alt={nama} />
      <div className="addition px-8 py-4">
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
            <h1 className="font-bold mt-1 pl-1 subpixel-antialiased">{nama}</h1>
          </div>
          <div>
            <p className="pl-1 subpixel-antialiased">{address}</p>
          </div>
          <div>
            <h4 className="mt-3 pl-1 subpixel-antialiased text-gray-400 text-sm">{service_time}</h4>
          </div>
        </div>
      </div>
      <button class="relative cardbtn ml-8 mb-2 w-36 h-8 rounded-full">
        <span class="absolute -top-3 -right-2 h-3 w-3">
          {" "}
          <span class="animate-ping absolute -right-1 -top-0 inline-flex h-5 w-5 rounded-full bg-indigo-700"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-700"></span>{" "}
        </span>{" "}
        <span class=" text-white font-bold subpixel-antialiased">Details</span>
      </button>
    </article>
  );
};

// ReactDom.render(<Cliniclist />, document.getElementById("root"));

export default Cliniclist;
