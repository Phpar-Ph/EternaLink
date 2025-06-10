import React from "react";
import { useNavigate } from "react-router";
export const ButtonCtaPrimary = ({ text, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <button
      className="  buttonCtaPrimary "
      onClick={() => navigate(navigateTo)}
    >
      {text}
    </button>
  );
};

export const ButtonCtaSecondary = ({ text, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <button
      className=" buttonCtaSecondary"
      onClick={() => navigate(navigateTo)}
    >
      {text}
    </button>
  );
};

export const ButtonProfileCta = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="px-4 py-2 bg-memorial-purple text-white rounded-xl hover:bg-memorial-purple/90 transition-colors duration-200"
    >
      {text}
    </button>
  );
};

export const ButtonProfileClose = ({ text, action }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="px-4 py-2 bg-rosewood text-white rounded-lg hover:bg-rosewood/80 transition"
    >
      {text}
    </button>
  );
};
