import React from "react";
import offer1 from "../../assets/images/offer-1.png";
import offer2 from "../../assets/images/offer-2.png";
const OfferProduct = () => {
  return (
    <div className="main mt-4">
      <div className="offerProduct-grid sideP ">
        <div className="offerProduct-card">
          <div className="offerProduct-card-body">
            <img
              src={offer1}
              alt=""
              className="offerProduct-card-image left bottom "
            />
            <div className="offerProduct-card-content width-100 text-right ">
              <h5 className="offerProduct-card-subtitle">20% off the all order</h5>
              <h1 className="offerProduct-card-title text-black">Spring Collection</h1>
              <a href="" className="btn btn-outline-primary p-1">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="offerProduct-card">
          <div className="offerProduct-card-body">
            <img
              src={offer2}
              alt=""
              className="offerProduct-card-image left bottom "
            />
            <div className="offerProduct-card-content width-100 text-right ">
              <h5 className="offerProduct-card-subtitle">20% off the all order</h5>
              <h1 className="offerProduct-card-title text-black">Spring Collection</h1>
              <a href="" className="btn btn-outline-primary p-1">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OfferProduct;
