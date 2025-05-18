import React from "react";

function CTA() {
  return (
    <div className="w-full bg-blue-600 ">
      <div className="max-w-7xl mx-auto px-4 py-20 ">
        <div className=" text-center text-2xl ">
          <h2>Create a Lasting Memorial Today</h2>
          <p>
            Honor your loved one with a beautiful digital memorial that
            preserves their memory for generations to come.
          </p>
          <button className="bg-fuchsia-300 p-4 text-2xl font-bold rounded-2xl m-4">
            Get Started
          </button>
          <button className="bg-fuchsia-300 p-4 text-2xl font-bold rounded-2xl m-4">
            View Example Memorial
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
