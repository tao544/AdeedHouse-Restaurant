import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logod-2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close mobile menu when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/menu", label: "Menu" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95! text-white backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 pb-2 pt-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center pb-2 ">
            <img src={Logo} alt="Adeed House Logo" className="w-32 sm:w-36" />
          </Link>
          {/* Desktop navigation (show from md and up) */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="no-underline! text-yellow-600! hover:text-amber-700! px-3 py-2 rounded-md text-sm font-semibold! hover:scale-120 transition-transform duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="p-2 rounded-md inline-flex items-center justify-center text-white hover:bg-gray-800/60!"
            >
              {open ? (
                <i className="fa-solid fa-xmark fs-3"></i>
              ) : (
                <i className="fa-solid fa-bars fs-3"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu  */}
      <div
        className={`${
          open ? "block" : "hidden"
        } md:hidden border-t border-gray-800! bg-gray-900!`}
      >
        <div className="px-4 pt-3 pb-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block no-underline! px-3 py-2 rounded-md text-yellow-600! hover:bg-gray-800!"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
