import React from "react";
import v1 from "../../assets/images/vendor-1.jpg";
import v2 from "../../assets/images/vendor-2.jpg";

import v3 from "../../assets/images/vendor-3.jpg";
import v4 from "../../assets/images/vendor-4.jpg";
import v5 from "../../assets/images/vendor-5.jpg";
import v6 from "../../assets/images/vendor-6.jpg";


const Vendor = () => {
 let vendor = [{img:v1}, {img: v2}, {img:v3}, {img:v4}, {img:v5}, {img:v6}]
 
  return (
    <div className="main">
      <div className="sideP">
        <div className="vendor-grid mb-5">
         
          { vendor.map((e, i) => <div className="vendor-item border p-4">
            <img
              className="vendor-image "
              src= {e.img}
            />
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Vendor;
