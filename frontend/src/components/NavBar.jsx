import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { AppContent } from "../context/AppContentProvider";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  // const [hasProfile, setHasProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(false);
  const navigate = useNavigate();
  const { backendUrl, setIsLogin, isLogin, userData, setUserData } =
    useContext(AppContent);
  // navbar scroll event
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // Logout
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      if (data.success) {
        setIsLogin(false);
        setUserData(false);

        toast.success("Logout successful!");

        // Navigate and refresh
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // toggle
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              className="text-2xl font-playfair font-extrabold text-gray-800 hover:text-gray-600 transition-colors"
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
              {!isLogin && (
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
              )}
              {!isLogin && (
                <li>
                  <button className="transform px-4 py-2 text-white  bg-memorial-purple/90 rounded-lg font-bold hover:scale-105 hover:bg-memorial-purple transition-all">
                    <NavLink to="/register">Register</NavLink>
                  </button>
                </li>
              )}
              {isLogin && (
                <div className="group relative " ref={dropdownRef}>
                  <div
                    className=" transition-transform group-hover:scale-105"
                    onClick={toggleDropdown}
                  >
                    <img
                      src="https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
                      alt=""
                      className="rounded-full ring-1 ring-rosewood ring-opacity-5 h-12 w-12"
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute  top-14 w-fit right-0 drop-shadow-2xl p-4 rounded-2xl  bg-amber-50 text-gray-800 transition-all duration-900">
                      <ul className="space-y-2 text-gray-800">
                        <li className="font-semibold">{userData?.name}</li>
                        <li className="text-sm text-gray-500">
                          {userData?.email}
                        </li>
                        <hr className="my-2" />
                        <li className="hover:text-blue-600 cursor-pointer">
                          Dashboard
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">
                          Profile
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">
                          Settings
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">
                          Notifications
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">
                          Help & Support
                        </li>
                        <hr className="my-2" />
                        <li
                          onClick={logout}
                          className="cursor-pointer text-red-600 font-semibold hover:text-red-400"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
