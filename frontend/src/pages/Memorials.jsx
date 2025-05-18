import React, { useState } from "react";
import { Person } from "../data/PersonData";
import { FaSearch } from "react-icons/fa";

function Memorials() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-6xl font-bold text-amber-950 mb-6 bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text t">
            Memorial Pages
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Browse through our collection of memorial pages honoring loved ones
            who have passed away.
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-md text-gray-700 pr-12"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Memorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Person.map((person, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={person.picture}
                  alt={person.name}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {person.name}
                </h3>
                <p className="text-gray-600 mb-4">{person.date}</p>
                <button className="w-full py-2 px-4 bg-amber-100 text-amber-900 rounded-lg font-medium transition-all duration-300 hover:bg-amber-200 focus:ring-2 focus:ring-amber-300 focus:outline-none">
                  View Memorial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {Person.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No memorials found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Memorials;
