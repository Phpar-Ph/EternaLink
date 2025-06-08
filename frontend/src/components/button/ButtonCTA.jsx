import React from "react";
import { useNavigate } from "react-router";
export const ButtonCtaPrimary = ({ text, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="transform hover:scale-105 transition-all bg-memorial-purple/90 text-white px-8 py-4 text-xl font-semibold rounded-xl shadow-lg hover:bg-memorial-purple "
        onClick={() => navigate(navigateTo)}
      >
        {text}
      </button>
    </div>
  );
};

export const ButtonCtaSecondary = ({ text, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="transform hover:scale-105 transition-all bg-pink-100 text-memorial-purple px-8 py-4 text-xl font-semibold rounded-xl shadow-lg hover:bg-pink-200 "
        onClick={() => navigate(navigateTo)}
      >
        {text}
      </button>
    </div>
  );
};
