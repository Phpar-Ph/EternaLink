import React from "react";

const Details = ({ memorial }) => {
  const datePassing = new Date(memorial?.datePassing).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const birthDate = new Date(memorial?.birthDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="col-span-1 bg-gentle-stone rounded-2xl">
      <div className=" rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-playfair font-medium text-gray-800 mb-6 text-center">
          Details
        </h2>
        <ul className="space-y-4">
          {[
            { label: "Birth Date", value: birthDate },
            { label: "Passed Away", value: datePassing },
            {
              label: "Resting Place",
              value: memorial?.location,
            },
          ].map(({ label, value }) => (
            <li key={label} className="flex flex-col space-y-1">
              <span className="text-sm text-gray-600">{label}</span>
              <span className="text-gray-800 font-medium">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
