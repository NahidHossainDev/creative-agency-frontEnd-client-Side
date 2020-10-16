import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { useEffect } from "react";
import loadingGif from '../../images/images/01-progress.gif'
const Service = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getServices")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <section className="container text-center">
      <h2 className="mt-4 mb-5">
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>
      </h2>
      <div className="row d-flex justify-content-center">
        {servicesData.length === 0 && (
          <img src={loadingGif} style={{ width: "300px",textAlign:"center" }} alt="" />
        )}
        {servicesData.map((d, i) => (
          <ServiceCard
            title={d.title}
            image={d.image}
            text={d.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
