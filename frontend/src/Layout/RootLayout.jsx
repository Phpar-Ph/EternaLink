import NavBar from "../components/shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import { useAuthStore } from "../store/useAuthStore";
const RootLayout = () => {
  const isLoadingToken = useAuthStore((state) => state.isLoadingToken);
  if (isLoadingToken) return <p>Loading...</p>;
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      {isLoadingToken && <Footer />}
    </div>
  );
};

export default RootLayout;
