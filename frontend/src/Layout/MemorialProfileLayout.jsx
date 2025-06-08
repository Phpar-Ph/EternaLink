import React from "react";
import MemorialProfile from "../pages/Protected/MemorialProfile";
import { Outlet } from "react-router";

const MemorialProfileLayout = () => {
  return (
    <div>
      <MemorialProfile />
      <Outlet />
    </div>
  );
};

export default MemorialProfileLayout;
