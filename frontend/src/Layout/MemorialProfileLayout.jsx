import React from "react";
import MemorialProfile from "../pages/Protected/MemorialProfile";
import { Outlet } from "react-router";

const MemorialProfileLayout = () => {
  return (
    <div className="min-h-screen">
      <MemorialProfile />
      <div className="max-w-7xl mx-auto mb-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MemorialProfileLayout;
