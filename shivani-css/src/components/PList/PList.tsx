import React from "react";
import PCard from "../ShopCard/ShopCard";
import product1 from "../../assets/images/product-1.jpg";
import product2 from "../../assets/images/product-2.jpg";
import product3 from "../../assets/images/product-3.jpg";
import product4 from "../../assets/images/product-4.jpg";
import product5 from "../../assets/images/product-5.jpg";
import product6 from "../../assets/images/product-6.jpg";
import product7 from "../../assets/images/product-7.jpg";
import product8 from "../../assets/images/product-8.jpg";
const PList = ({ title }: { title: String }) => {
  let shop = [{img:product1}, {img: product2}, {img:product3}, {img:product4}, {img:product5}, {img:product6}, {img:product7}, {img:product8}]
  let n = 8; 
  return (
    <div className="main">
      <div className="sideP">
        <div className="py-5">
          <div className="Tcenter">
            <h2 className="Stitle px-5 mb-4">
              <span className="px-2 position-relative bg-white">{title}</span>
            </h2>
          </div>
            <div className="PGrid">
           { shop.map((e, i) => <PCard img={e.img}/>)}
           </div>

          
        </div>
      </div>
    </div>
  );
};

export default PList;
