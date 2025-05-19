import React, { useState } from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav
      className={
        navbar
          ? "w-full bg-rose-beige fixed top-0 z-50 shadow"
          : "w-full bg-rose-beige fixed top-0 z-50"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-20 font-medium ">
          <div>
            <NavLink
              to="/"
              className="text-2xl font-lato-500 font-extrabold text-gray-800 hover:text-gray-600 transition-colors"
            >
              EternaLink
            </NavLink>
          </div>
          <div>
            <ul className="flex items-center gap-8 font-lato ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg font-bold transition-all hover:text-gray-600 ${
                      isActive ? "text-memorial-purple" : "text-gray-800"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/memorials"
                  className={({ isActive }) =>
                    `text-lg font-bold transition-all hover:text-gray-600 ${
                      isActive ? "text-memorial-purple" : "text-gray-800"
                    }`
                  }
                >
                  Memorials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `text-lg font-bold  hover:text-gray-600  text-gray-800 ${
                      isActive ? "text-memorial-purple" : "text-gray-800"
                    }`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <button className="transform px-4 py-2 text-white  bg-memorial-purple/90 rounded-lg font-bold hover:scale-105 hover:bg-memorial-purple transition-all">
                  <NavLink to="/register">Register</NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
