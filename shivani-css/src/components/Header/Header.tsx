import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Header = () => {
  return (
    <header style={{display:"flex"}}>
      <div>
        <span>FAQs</span>
        <span>|</span>
        <span>Help</span>
        <span>|</span>
        <span>Support</span>
      </div>
      <div>
        <span>
          {" "}
          <FaFacebookF />
        </span>
        <span>
          {" "}
          <FaTwitter />
        </span>
        <span>
          {" "}
          <FaLinkedinIn />
        </span>
        <span>
          {" "}
          <FaInstagram />
        </span>
        <span>
          {" "}
          <FaYoutube />
        </span>
      </div>
    </header>
  );
};

export default Header;
