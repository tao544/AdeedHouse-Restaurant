import React from "react";
import { Link } from "react-router-dom";
import aboutPic from "../assets/About-2.jpg";
const About = () => {
  return (
    <section id="about-us" className="container-fluid py-5 bg-gray-300">
      <div className="row align-items-center">
       

        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={aboutPic}
            alt="about ADEED-HOUSE"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-amber-900! fw-bold mb-3 text-center">
            About Adeed House
          </h4>
          <p className="text-muted">
            Adeed House Restaurant is a family-friendly spot that celebrates the
            authentic taste of Africa with a touch of continental flair. We are
            passionate about quality food, exceptional service, and creating an
            atmosphere that feels like home.
          </p>
          <p className="text-muted">
            Whether you’re stopping by for a quick lunch or planning a dinner
            date, Adeed House offers a memorable dining experience with
            delicious dishes, warm smiles, and great value.
          </p>
          <div className="text-center mt-4 ">
             <Link
            to="/about"
            className="btn btn-outline-warning  text-dark px-4 py-2 hover:bg-amber-700! text-yellow-950!"
          >
            Learn More About Us
          </Link>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
