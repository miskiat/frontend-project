import React from "react";
import { Link } from "react-router-dom";
import "./Shopping.scss";

function Shopping() {
  return (
    <div>
      <div className="ankara">
        <img src="/black and white fab.jpg" />
        <img src="/black and white.jpg" />
      </div>

      <div className="shoppp">
        {
          <Link to="/shop">
            <button className="shopp">Shop Collection</button>
          </Link>
        }
      </div>
    </div>
  );
}

export default Shopping;
