import NavBar from "../components/shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
