import React from "react";
import Logo from "../Logo/Logo";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="display_flex width_100">
        <div className="flex_1">
          <Logo />
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <p className="">
            <i className=""></i>123 Street, New York, USA
          </p>
          <p className="">
            <i className=""></i>info@example.com
          </p>
          <p className="">
            <i className=""></i>+012 345 67890
          </p>
        </div>
        <div className="flex_1 ml-1">
          <h5 className="font-weight--bold">Quick Links</h5>
          <div>
            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Home
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Our Shop
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Shop Detail
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Shopping Cart
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Checkout
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex_1">
          <h5 className="font-weight--bold">Quick Links</h5>
          <div>
            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Home
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Our Shop
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Shop Detail
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Shopping Cart
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Checkout
            </a>

            <a className="content-center text-black footerLink" href="#">
              <FaAngleRight />
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex_1">
          <h5 className="">Newsletter</h5>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control py-4"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group  ">
              <input
                type="email"
                className="form-control py-4"
                placeholder="Your Email"
              />
            </div>
            <div>
              <button className="btn btn-primary width_100 py-3" type="submit">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
