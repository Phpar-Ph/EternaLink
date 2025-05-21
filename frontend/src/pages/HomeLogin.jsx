import { useContext } from "react";
import { AppContent } from "../context/AppContentProvider";

const HomeLogin = () => {
  const { userData } = useContext(AppContent);
  return (
    <div className="w-full h-screen bg-gentle-stone">
      <div className="max-w-7xl mx-auto text-4xl flex items-center justify-center bg-soft-lavender">
        <h1 className="m-20">Welcome {userData?.name}</h1>
      </div>
    </div>
  );
};

export default HomeLogin;
