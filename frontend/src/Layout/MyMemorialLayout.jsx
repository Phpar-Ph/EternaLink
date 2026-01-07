import { Outlet } from "react-router";

import MyMemorials from "../pages/Private/PrivateMemorials";
function MyMemorialLayout() {
  return (
    <div className="min-h-screen w-full py-20 mx-auto max-w-7xl">
      <MyMemorials />
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default MyMemorialLayout;
