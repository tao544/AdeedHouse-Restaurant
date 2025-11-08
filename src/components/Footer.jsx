import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* QUICK LINKS */}
          <div className="col-md-4">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none d-block mb-2 hover:text-warning">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none d-block mb-2 hover:text-warning">About</Link></li>
              <li><Link to="/menu" className="text-light text-decoration-none d-block mb-2 hover:text-warning">Menu</Link></li>
              <li><Link to="/gallery" className="text-light text-decoration-none d-block mb-2 hover:text-warning">Gallery</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none d-block mb-2 hover:text-warning">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-md-4 ">
            <h5 className="text-warning mb-3">Contact Info</h5>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill text-warning me-2"></i>
              12, Obafemi Awolowo Way, Ikeja, Lagos
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              +234 816 234 7890
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              adeedhouse@gmail.com
            </p>
          </div>

          {/* OPENING HOURS */}
          <div className="col-md-4">
            <h5 className="text-warning mb-3">Opening Hours</h5>
            <p className="mb-1">Mon–Sat: 9:00 AM – 10:00 PM</p>
            <p className="mb-0">Sun: 12:00 PM – 9:00 PM</p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <hr className="border-secondary my-4" />
        <div className="text-center small">
          <p className="text-yellow-600">&copy; {new Date().getFullYear()} Adeed House Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
