import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useLogout } from "../../hooks/useAuthHook";
import { defaultImage } from "../../constants/defaultImage";
import AppNavLink from "./AppNavLink";
import { NavLink } from "react-router";
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { mutate: logout } = useLogout();
  const { isLogin, userData, setIsLogin } = useAuthStore();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [userData]);

  // toggle
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const loggingout = () => {
    setIsOpen(false);
    setIsLogin(false);
    logout();
  };

  return (
    <nav
      className={
        navbar
          ? "w-full bg-gentle-stone  fixed top-0 z-50 !shadow"
          : "bg-gentle-stone w-full fixed top-0 z-50"
      }
    >
      <div className="flex justify-between items-center h-20 font-medium max-w-7xl mx-auto px-4 ">
        <div>
          <NavLink
            to={isLogin ? "home" : "/"}
            className="text-2xl font-playfair font-extrabold text-gray-800 hover:text-gray-600 transition-colors"
          >
            EternaLink
          </NavLink>
        </div>
        <div>
          <ul className="flex items-center gap-8 font-lato ">
            <li>
              <AppNavLink path={isLogin ? "home" : "/"} name={"Home"} />
            </li>

            <li>
              <AppNavLink
                path={"memorials"}
                name={isLogin ? "Explore" : "Memorials"}
              />
            </li>
            {isLogin && (
              <li>
                <AppNavLink path={"my-memorials"} name={"My Memorials"} />
              </li>
            )}
            {isLogin && (
              <li>
                <AppNavLink
                  path={"create-memorial"}
                  name={"Create Memorials"}
                />
              </li>
            )}
            {!isLogin && (
              <li>
                <AppNavLink path={"login"} name={"Login"} />
              </li>
            )}
            {!isLogin && (
              <li>
                <NavLink to="/register">
                  <button className="transform px-4 py-2 text-white  bg-memorial-purple/90 rounded-lg font-bold hover:scale-105 hover:bg-memorial-purple transition-all">
                    Sign up
                  </button>
                </NavLink>
              </li>
            )}
            {isLogin && (
              <div className="group relative " ref={dropdownRef}>
                <div
                  className=" transition-transform group-hover:scale-105"
                  onClick={toggleDropdown}
                >
                  <img
                    src={defaultImage}
                    alt=""
                    className="rounded-full ring-1 ring-rosewood ring-opacity-5 h-12 w-12"
                  />
                </div>
                {isOpen && (
                  <div className="absolute  top-14 w-fit right-0 drop-shadow-2xl p-4 rounded-2xl  bg-amber-50 text-gray-800 transition-all duration-900">
                    <ul className="space-y-2 text-gray-800">
                      <li className="font-semibold">{userData?.user?.name}</li>
                      <li className="text-sm text-gray-500">
                        {userData?.user?.email}
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
                        onClick={loggingout}
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
    </nav>
  );
};

export default NavBar;
