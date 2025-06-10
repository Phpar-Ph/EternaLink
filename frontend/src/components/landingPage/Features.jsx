import React from "react";

const Features = ({ featureData }) => {
  return (
    <div className=" py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-playfair text-gray-800 mb-4">
          Features
        </h2>
        <p className="text-xl text-gray-600 font-lato">
          Everything you need to create a lasting digital memorial
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 ">
        {/* Feature cards here - repeat this structure for each feature */}
        {featureData.map((feature, index) => (
          <div
            className="bg-soft-lavender !drop-shadow rounded-xl shadow-lg p-8 "
            key={index}
          >
            <h3 className="text-2xl font-bold font-playfair text-gray-800 mb-4">
              {feature.heading}
            </h3>
            <p className="text-gray-600 font-lato">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
