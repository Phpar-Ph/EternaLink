import React from "react";
import MemorialProfile from "../pages/Protected/MemorialProfile";
import { Outlet } from "react-router";

const MemorialProfileLayout = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gentle-stone ">
      <MemorialProfile />
      <Outlet />
    </div>
  );
};

export default MemorialProfileLayout;
