import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav1">
  <Link to="/Home" className="home"><span className="DivineDizzle">DivineDizzle</span><br /> 
  </Link>
</li>
      
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">
            Login/SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;