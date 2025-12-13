import React from "react";
export const ButtonCtaPrimary = ({ text, onClick }) => {
  return (
    <button
      className="  btn-CtaPrimary "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonCtaSecondary = ({ text, onClick }) => {
  return (
    <button
      className=" btn-CtaSecondary"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonProfileCta = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-memorial-purple text-white rounded-xl hover:bg-memorial-purple/90 transition-colors duration-200"
    >
      {text}
    </button>
  );
};

export const ButtonProfileClose = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 bg-rosewood text-white rounded-lg hover:bg-rosewood/80 transition"
    >
      {text}
    </button>
  );
};
