import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="font-bold font-lato text-4xl text-center">
          <p className="pb-8">404 | Page Not Found</p>
          <button
            className="hover:text-red-500 underline"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
