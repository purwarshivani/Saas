import React from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import product1 from "../../assets/images/product-1.jpg";

type Props = {
  img: any;
};


const PCard: React.FC<Props> = ({ img }) => {
  return (
    <div className="pCard border">
      <div className="pCard-imgCon">
        <img className="width-100 pCard-image" src={img} alt="" />
      </div>
      <div className="text-center pt-4 pb-3 border-top border-bottom-primary">
        <h6 className="pCard-name font-weight-semi-bold mb-3">
          Colorful Stylish Shirt
        </h6>
        <div className="display-flex width-100 justify-center">
          <h6 className="pCard-price font-weight-semi-bold">$123.00</h6>
          <h6 className="pCard-price pCard-price-striked ml-2 font-weight-semi-bold">
            $123.00
          </h6>
        </div>
      </div>
      <div className="display-flex justify-between pCard-footer">
        <a href="" className="btn ">
          <div className="display-flex align-center">
            <FaEye className="text-primary" />
            View Detail
          </div>
        </a>
        <a href="" className="btn ">
          <div className="display-flex align-center">
            <FaShoppingCart className="text-primary" />
            Add To Cart
          </div>
        </a>
      </div>
    </div>
  );
};

export default PCard;
