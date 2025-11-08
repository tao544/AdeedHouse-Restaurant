import react from "react";
import menu1 from "../assets/menu-jolo.jpg";
import menu2 from "../assets/iyan.jpg";
import menu3 from "../assets/spaqbolo.jpg";
import menu4 from "../assets/grilled-fish.jpg";
import menu5 from "../assets/ofada-rice.jpg";
import { Link } from "react-router-dom";

const Feature = () => {
return(
<section className="container py-5">
        <div className="text-center mb-5">
          <h4 className="fw-bold text-warning">Our Popular Dishes</h4>
          <p className="text-muted">
            Explore some of our customer favorites prepared daily by our
            experienced chefs.
          </p>
        </div>

        <div className="row g-4">
          {/* Dish 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={menu1}
                className="card-img-top"
                alt="Jollof Rice with Grilled Chicken"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Jollof Rice with Grilled Chicken</h5>
                <p className="card-text text-muted">₦2,500</p>
              </div>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={menu2}
                className="card-img-top"
                alt="Pounded Yam with Egusi Soup"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Efo Riro with Pounded Yam</h5>
                <p className="card-text text-muted">₦3,000</p>
              </div>
            </div>
          </div>

          {/* Dish 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={menu3}
                className="card-img-top"
                alt="Spaghetti Bolognese"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Spaghetti Bolognese</h5>
                <p className="card-text text-muted">₦3,500</p>
              </div>
            </div>
          </div>

          {/* Dish 4 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={menu4}
                className="card-img-top"
                alt="Grilled Fish with chips"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Grilled Fish with chips</h5>
                <p className="card-text text-muted">₦3,800</p>
              </div>
            </div>
          </div>

          {/* Dish 5 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={menu5}
                className="card-img-top"
                alt="Ofada Rice with Sauce"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Ofada Rice with Sauce</h5>
                <p className="card-text text-muted">₦2,800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 ">
          <Link to="/menu" className="btn btn-outline-warning text-dark px-4 py-2" >
            See Full Menu
          </Link>
        </div>
      </section>
);
};

export default Feature;