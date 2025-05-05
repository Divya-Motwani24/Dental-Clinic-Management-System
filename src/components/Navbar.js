// src/components/Navbar.js
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/dental-clinic-logo-png-17.png"; // Ensure logo.png exists in src/assets

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Dental Clinic Logo" className="logo" />
        <h1 className="brand-name">Dental<span>Care</span></h1>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/dentist">Dentists</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-right">
        <Link to="/appointment" className="appointment-btn">Book Appointment</Link>
      </div>
    </nav>
  );
}

export default Navbar;
