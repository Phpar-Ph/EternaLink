import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-600 to-pink-600 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div>
            <NavLink
              to="/"
              className="text-2xl font-bold text-white hover:text-amber-50 transition-colors"
            >
              EternaLink
            </NavLink>
          </div>
          <div>
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg font-medium transition-all hover:text-amber-50 ${
                      isActive ? "text-amber-50" : "text-white"
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
                    `text-lg font-medium transition-all hover:text-amber-50 ${
                      isActive ? "text-amber-50" : "text-white"
                    }`
                  }
                >
                  Memorials
                </NavLink>
              </li>
              <li>
                <button className="px-4 py-2 text-purple-600 bg-white rounded-lg font-medium hover:bg-amber-50 transition-all">
                  Login
                </button>
              </li>
              <li>
                <button className="px-4 py-2 text-white border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-all">
                  Register
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
