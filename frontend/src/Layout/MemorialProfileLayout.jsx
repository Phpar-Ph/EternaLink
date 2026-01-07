import React from "react";
import PrivateMemorialProfile from "../pages/Private/PrivateMemorialProfile";
import { Outlet } from "react-router";
// const tabs = ["about", "memories", "gallery", "timeline", "qr-code"];
const MemorialProfileLayout = () => {
  return (
    <div className="min-h-screen">
      <PrivateMemorialProfile />

      <div className="max-w-7xl mx-auto mb-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MemorialProfileLayout;
