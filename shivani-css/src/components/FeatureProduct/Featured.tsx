import React from "react";
import {
  FaCheck,
  FaShippingFast,
  FaExchangeAlt,
  FaPhoneVolume,
} from "react-icons/fa";

const Featured = () => {
  let data = [
   {icon: <FaCheck className="feature-card-icon" />, title : "Qulaity Product"},
   {icon: <FaShippingFast className="feature-card-icon" />, title : "Free Shipping"},
   {icon: <FaExchangeAlt className="feature-card-icon" />, title : "14-Day Return"},
   {icon: <FaPhoneVolume className="feature-card-icon" />, title : "24/7 Support"}
  ]
  
  return (
    <div className="main">
      <div className="sideP">
        <div className="feature-grid">
          {
            data.map((data, i)=>{
              return(
                <div className="feature-card border">
            <div className="feature-card-body">
              {data.icon}
              <h5 className="feature-card-title text-black">{data.title}</h5>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Featured;
