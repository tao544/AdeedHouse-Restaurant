import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-light py-5 px-4 text-center rounded shadow-lg  mx-auto">
      <h3 className="text-2xl font-semibold text-slate-600! mb-3">Ready to Enjoy a Great Meal?</h3>
      <p className="text-lg mb-2">
        Visit <strong>Adeed House</strong> today or place your order online.
      </p>
      <p className="text-muted mb-1"><i className="bi bi-geo-fill text-red-800"></i> 12, Obafemi Awolowo Way, Ikeja, Lagos</p>
      <p className="text-muted mb-4"><i className="bi bi-telephone-fill text-red-800"></i> +234 816 234 7890</p>
      <div className="d-flex justify-content-center gap-3">
        <a
          href="#"
          className="btn bg-amber-700! text-white font-bold px-4 py-2 hover:bg-transparent! hover:text-black! hover:border-black!"
        >
          Order Now
        </a>
         <Link
          to="/contact"
          className="btn btn-outline-secondary font-semibold px-4 py-2"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;