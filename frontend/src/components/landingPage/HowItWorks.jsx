import React from "react";

const HowItWorks = ({ howItWorks }) => {
  return (
    <div className=" py-24">
      <h2 className="text-4xl font-bold font-playfair text-center mb-16">
        How EternaLink Works
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
        {/* Step cards - repeat this structure for each step */}
        {howItWorks.map((step, index) => (
          <div
            key={index}
            className="bg-soft-lavender rounded-xl shadow-lg p-8 text-center "
          >
            <div className="flex justify-center mb-6 text-5xl text-purple-600">
              <step.icon />
            </div>
            <h3 className="text-xl font-bold font-playfair mb-4 text-gray-800">
              {step.heading}
            </h3>
            <p className="text-gray-600 font-lato">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
