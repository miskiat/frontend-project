import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="segment">
        <h1>BESPOKE</h1>
        <img src="/blouse.jpg" className="img-service" />
      </div>
      <div className="segment">
        <h1>BRIDAL</h1>
        <img src="/bluelace.jpg" className="img-service" />
      </div>
      <div className="segment">
        <h1>ALIKIMBA</h1>
        <img src="/royal.jpg" className="img-service" alt="misky" />
      </div>
      <div className="segment">
        <h1>FASHION ACADEMY</h1>
        <img src="/machine.jpg" className="img-service" />
      </div>
    </div>
  );
};

export default Services;
