import React from "react";

const Example = ({ MemorialExamples, memorials, navigate }) => {
  return (
    <div className="flex py-20">
      <div className="flex-1  p-4">
        <div className=" mb-10 lg:mb-0">
          <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-6">
            Beautiful, Respectful Memorials
          </h2>
          <p className="text-lg text-gray-600 font-lato  mb-6">
            Our digital memorial pages are designed with respect and dignity in
            mind. Each page serves as a lasting tribute to your loved one's life
            and legacy.
          </p>
          <ul className="space-y-4">
            {MemorialExamples.map((example, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 text-memorial-purple !drop-shadow-2xl">
                  <example.icon size={24} />
                </div>
                <p className="ml-3 text-gray-600 ">
                  <span className="font-medium font-lato text-gray-900 ">
                    {example.title}
                  </span>{" "}
                  {example.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-6  bg-soft-lavender rounded-2xl !shadow">
        <div className="text-gray-800 flex items-center mb-6 gap-4">
          <img
            src={memorials[1].profilePhoto}
            alt=""
            className="w-24 h-24 object-cover rounded-full"
          />
          <div className="font-lato">
            <p className="font-bold ">{memorials[1].name}</p>
            <p>{memorials[1].lifeDates}</p>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-gray-600 font-lato">{memorials[1].bio}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {memorials[1].photos.slice(0, 3).map((photo, index) => (
            <img
              key={index}
              src={photo.link}
              alt=""
              className="w-full h-24 object-cover rounded"
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400 font-lato ">
            {memorials[1].memories.length} memories shared
          </span>
          <button
            onClick={() => navigate(`/memorials/${memorials[1].id}`)}
            className="text-rosewood  text-sm font-medium hover:underline font-lato"
          >
            View Memorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
