import React from "react";
import { IoMdWarning } from "react-icons/io";

const UnderConstruction = () => {
  return (
    <div>
      <div>
        <div className="font-extrabold text-amber-50 text-6xl absolute  w-full h-40 bg-black/60 flex items-center justify-center z-10 mt-40">
          <h1 className="flex gap-4 items-center">
            <IoMdWarning className="text-amber-400" />
            UNDER CONSTRUCTION
            <IoMdWarning className="text-amber-400" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
