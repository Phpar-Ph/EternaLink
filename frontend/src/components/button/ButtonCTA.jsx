import React from "react";
import { useNavigate } from "react-router";
export const ButtonCtaPrimary = ({ text, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="  buttonCtaPrimary "
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
        className=" buttonCtaSecondary"
        onClick={() => navigate(navigateTo)}
      >
        {text}
      </button>
    </div>
  );
};
