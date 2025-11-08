import React from "react";
import { Link } from "react-router-dom";
import Slider1 from "../assets/restSlide-1.jpg";
import Slider2 from "../assets/food-slide1.jpg";
import Slider3 from "../assets/couplesSlide-2.jpg";
import About from "../components/About";
import Feature from "../components/Feature";
import Why from "../components/Why";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";




const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="..." />
            <div className="overlay"></div>
            <div className="carousel-caption d-none  d-md-block items-center h-70 text-center justify-center">
              <h5 className="fs-1">Welcome to Adeed House Restaurant</h5>
              <p>
                Taste the best of African and Continental dishes — served fresh
                daily!
              </p>
              <div className="text-center mt-4 ">
          <Link to="/menu" className="btn btn-outline-warning text-light px-4 py-2" >
            See Full Menu
          </Link>
        </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slider2} className="d-block w-100" alt="..." />
            <div className="overlay"></div>
            <div className="carousel-caption d-none d-md-block h-70">
              <h5 className="fs-1">Delicious Meals, Warm Ambience</h5>
              <p>
                Relax and enjoy your meal in our cozy and elegant dining space.
              </p>
              <button
                type="button"
                className="btn btn-outline-light text-warning"
              >
                Book a Table
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slider3} className="d-block w-100" alt="..." />
            <div className="overlay"></div>
            <div className="carousel-caption d-none d-md-block h-70">
              <h5 className="fs-1">We Bring African Taste to Life</h5>
              <p>
                {" "}
                From Jollof Rice to Grilled Fish — every bite tells a story.
              </p>
              <button
                type="button"
                className="btn btn-outline-light text-warning"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

{/* other sections */}
        <section>
            <About />
            <Feature />
            <Why />
            <Gallery />
            <Testimonials />
            <CallToAction />
        </section>
  

     

{/* gallery section */}


{/* Testimonials section */}
<section>

</section>







    </div>
  );
};

export default Home;
