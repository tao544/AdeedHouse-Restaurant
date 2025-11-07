import React from "react";
import Logo from "../assets/logod 2.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-gray-800 shadow-md">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="150" alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-orange-500 font-semibold hover:text-orange-700" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-orange-400" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-orange-400" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-orange-400" href="#">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-orange-400" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-orange-400" href="#">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
