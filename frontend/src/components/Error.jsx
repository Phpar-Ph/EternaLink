import React from "react";
import { useNavigate, useRouteError } from "react-router";
const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="font-bold font-lato text-4xl text-center">
          <p className="pb-8">An error occurred</p>
          <p>{error.message}</p>
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

export default Error;
