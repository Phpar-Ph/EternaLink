import { useFetchMemorial } from "../../hooks/api/memorial/useFetchMemorial";
import { NavLink } from "react-router";
const MemorialProfile = () => {
  const { data: memorial } = useFetchMemorial();

  return (
    <div className="w-full bg-gentle-stone ">
      <div className="max-w-7xl mx-auto   mt-20 pb-4">
        {/* Hero Section */}
        <div className="w-full h-[50vh] relative overflow-hidden  shadow-2xl">
          <img
            src={memorial?.coverPhoto}
            alt={memorial?.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="flex absolute bottom-0 items-center gap-6 p-8">
              <div className="relative">
                <img
                  src={memorial?.profilePhoto}
                  alt={memorial?.name}
                  className="h-48 w-48 rounded-full object-cover border-4 border-amber-50 shadow-xl"
                />
              </div>
              <div className=" text-white mb-4">
                <h1 className="text-5xl font-playfair font-bold mb-3">
                  {memorial?.name}
                </h1>
                <p className="text-2xl font-lato">{memorial?.lifeDates}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Info & Action Section */}
        <div className="rounded-t-xl shadow-md">
          <ul className="flex space--1  pt-2 font-lato text-gray-800 ">
            {["about", "memories", "gallery", "timeline", "qr code"].map(
              (tab) => (
                <li key={tab}>
                  <NavLink
                    to={tab}
                    className={({ isActive }) =>
                      `capitalize px-6 py-4 cursor-pointer transition-all duration-200 ${
                        isActive
                          ? "bg-soft-lavender font-bold rounded-t-xl shadow-inner"
                          : "hover:bg-gentle-stone/50 rounded-t-lg"
                      }`
                    }
                  >
                    {tab}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemorialProfile;
