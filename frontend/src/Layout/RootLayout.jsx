import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-gentle-stone ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
