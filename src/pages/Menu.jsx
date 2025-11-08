import React from "react";
import menuData from "../data/menuData";

// Simple object to match category keys to display titles
const categoryTitles = {
  localDishes: "Local Dishes",
  continentalDishes: "Continental Dishes",
  drinksDesserts: "Drinks & Desserts",
};

const Menu = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-warning fw-semibold">Our Menu</h2>

      {/* Looping through each category */}
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="mb-5">
          {/* Using the simple object to get the title */}
          <h3 className="text-danger mb-4 text-center">
            {categoryTitles[category]}
          </h3>

          <div className="row g-4">
            {items.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                  />
                  <div className="card-body text-center d-flex flex-column justify-content-between">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text fw-bold text-amber-950">
                      {item.price}
                    </p>
                    <button className="btn btn-outline-warning mt-2">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
