import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className="footer-copy-right">
      <p>
        Copyright{" "}
        <Link to="/" className="red">
          RAJIB ENTERPRISE
        </Link>{" "}
        @
      <small>  {date}  </small>
    
        <br/> All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
