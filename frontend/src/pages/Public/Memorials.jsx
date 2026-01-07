import { useState } from "react";
import { dummyMemorialsData } from "../../data/DummyPersonMemorialData";
import { Icons } from "../../data/IconsData";
import { useNavigate } from "react-router";
function Memorials() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gentle-stone">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Memorial Pages
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Browse through our collection of memorial pages honoring loved ones
            who have passed away.
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border border-rosewood/50 focus:outline-none focus:ring-2 focus:ring-rosewood focus:border-transparent shadow-md text-gray-700 pr-12"
            />
            <Icons.FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Memorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyMemorialsData.map((memorial, index) => (
            <div
              key={index}
              className="group bg-soft-lavender text-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={memorial.profilePhoto}
                  alt={memorial.name}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {memorial.name}
                </h3>
                {/* <p className="text-gray-600 mb-4">
                  {new Date(memorial.birthDate).getFullYear()}
                  {" - "} {new Date(memorial.datePassing).getFullYear()}
                </p> */}
                <p className="text-gray-600 mb-4">{memorial.lifeDates}</p>

                <button
                  className="w-full py-2 px-4 bg-gentle-stone text-gray-400 rounded-lg font-medium transition-all duration-300 hover:bg-memorial-purple/20 focus:ring-2 focus:ring-amber-300 focus:outline-none"
                  onClick={() => navigate(`/memorials/${memorial.id}`)}
                >
                  View Memorial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {dummyMemorialsData.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No memorials found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Memorials;
