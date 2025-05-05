// src/components/Topbar.js
import React from "react";
import "./Topbar.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span><FaEnvelope /> dentalcare@example.com</span>
        <span><FaPhoneAlt /> +91 98765 43210</span>
        <span><FaMapMarkerAlt /> Mumbai, India</span>
      </div>
      <div className="topbar-right">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  );
}

export default Topbar;
