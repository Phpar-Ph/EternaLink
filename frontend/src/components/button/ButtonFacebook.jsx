import React from "react";
import { Icons } from "../../data/IconsData";
function ButtonFacebook() {
  return (
    <div>
      <button
        type="button"
        className="flex justify-center items-center py-2 px-4 rounded-md bg-white text-deep-charcoal hover:bg-gray-100 shadow-sm border border-gray-300"
      >
        <Icons.FaFacebook className="w-5 h-5 mr-2" /* Facebook Icon */ />
        Facebook
      </button>
    </div>
  );
}

export default ButtonFacebook;
