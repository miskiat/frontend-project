import React from "react";
import "./Shop.scss";

const Shop = () => {
  return (
    <div>
      <div className="shop">
        <h1>Ready-To-Wear-Collection</h1>
        <h1>Fabrics</h1>
      </div>

      <div className="displaywear">
        <div className="readytowear-img">
          <div>
            <img src="/wrap gown.jpg" />
            <p className="cloth">Wrap Gown</p>
            <p className="money">
              <p className="sign">#</p>20,000
            </p>
          </div>
          <div>
            <img src="/shirttop.jpeg" />
            <p className="cloth">Shirt Dress</p>
            <p className="money">
              <p className="sign">#</p>25,000
            </p>
          </div>
          <div>
            <img src="/halii.jpg" />
            <p className="cloth">Gathers Gown</p>
            <p className="money">
              <p className="sign">#</p>15,000
            </p>
          </div>
        </div>
        <div className="fabric-img">
          <div>
            <img src="/dupe.jpg" />
            <p className="price">
              <p className="sign">#</p>8000
            </p>
          </div>
          <div>
            <img src="/fabrii.jpg" />
            <p className="price">
              <p className="sign">#</p>8000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
