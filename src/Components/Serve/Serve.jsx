import React from "react";
import { Link } from "react-router-dom";
import "./Serve.scss";

const Serve = () => {
  return (
    <div>
      <div className="school">
        <div className="left">
          <h2 className="academy">ACADEMY</h2>
          <p className="generation">Home of Fashion’s Next Generation</p>
          <p className="theb">
            THELOOKBYMIS.B Fashion Academy is your quickest route to a career in
            the fashion industry.
          </p>

          <Link to="/services">
            <button className="theacademy">The Academy</button>
          </Link>
        </div>
        <img className="jacket" src="/jacket.jpg" />
      </div>
      {/* <div>
        <p className="appointment">Book an Appointment</p>
        <p className="details">
          Bridal consultations as well as bespoke consultations are strictly by
          appointment. Customers are welcome to walk in to browse through the
          Hudayya Woman ready to wear collection as well as House of Bakhoor
          incenses that we have stocked in store. For Academy related enquiries,
          prospective students are welcome to walk in and speak to customer
          care.
        </p>
      </div> */}
    </div>
  );
};

export default Serve;
