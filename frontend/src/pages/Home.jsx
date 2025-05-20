import { FaCamera, FaShare, FaBookOpen } from "react-icons/fa";

import { memorials } from "../data/PersonData";
import { useNavigate } from "react-router";
import { howItWorks, featureData, MemorialExamples } from "../data/HomeData";
import UnderConstruction from "../components/UnderConstruction";
import { useContext, useEffect } from "react";
import { AppContent } from "../context/AppContentProvider";
function Home() {
  const navigate = useNavigate();
  const { getUserData, isLogin } = useContext(AppContent);
  useEffect(() => {
    isLogin && getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <UnderConstruction />
      {/* Hero Section */}
      <div className="w-full bg-rose-beige">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 py-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-playfair tracking-tight font-bold text-gray-800">
                  Honor their memory.
                </h1>
                <h2 className="text-4xl font-playfair lg:text-5xl font-bold tracking-tight text-gray-800">
                  Preserve their legacy.
                </h2>
                <p className="text-xl lg:text-2xl font-lato text-gray-500 max-w-2xl">
                  Create beautiful digital memorials for your loved ones. Share
                  memories, photos, and stories that celebrate their life.
                </p>
                <div className="flex flex-col sm:flex-row font-lato font-bold gap-4 justify-center lg:justify-start">
                  <button className="button">Create a memorial</button>
                  <button className="button2">Learn more</button>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <img
                src="https://imgs.search.brave.com/z_UyBFw9Gw_0QNsWCgdZYnD0DVrcocXmhV1ogGpPnBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/Y2VuZXJ5LWNlbWV0/ZXJ5LXNvbGRpZXJz/LXdoby1kaWVkLXNl/Y29uZC13b3JsZC13/YXItbm9ybWFuZHlf/MTgxNjI0LTcyMjIu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA"
                alt="Memorial"
                className=" rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Features Section*/}
      <div className="w-full bg-soft-lavender">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
              Features
            </h2>
            <p className="text-xl text-gray-600 font-lato">
              Everything you need to create a lasting digital memorial
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature cards here - repeat this structure for each feature */}
            {featureData.map((feature, index) => (
              <div
                className="bg-gentle-stone rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all"
                key={index}
              >
                <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
                  {feature.heading}
                </h3>
                <p className="text-gray-600 font-lato">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section*/}
      <div className="w-full bg-rose-beige">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-playfair text-center mb-16">
            How EternaLink Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step cards - repeat this structure for each step */}
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all"
              >
                <div className="flex justify-center mb-6 text-5xl text-purple-600">
                  <step.icon />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-4">
                  {step.heading}
                </h3>
                <p className="text-gray-600 font-lato">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Memorial Example Section */}
      <div className="w-full bg-soft-lavender text-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex w-full">
            <div className="flex-1  p-4">
              <div className=" mb-10 lg:mb-0">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                  Beautiful, Respectful Memorials
                </h2>
                <p className="text-lg text-gray-600 font-lato  mb-6">
                  Our digital memorial pages are designed with respect and
                  dignity in mind. Each page serves as a lasting tribute to your
                  loved one's life and legacy.
                </p>
                <ul className="space-y-4">
                  {MemorialExamples.map((example, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 text-indigo-600 dark:text-indigo-400">
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
            <div className="flex-1 p-4  bg-gentle-stone rounded-2xl">
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
                    src={photo}
                    alt=""
                    className="w-full h-24 object-cover rounded"
                  />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 font-lato ">
                  {memorials[1].memories.length} memories shared
                </span>
                <button
                  onClick={() =>
                    navigate(`/memorialsPerson/${memorials[1].id}`)
                  }
                  className="text-rosewood  text-sm font-medium hover:underline font-lato"
                >
                  View Memorial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="w-full bg-rose-beige">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center text-gray-800">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Create a Lasting Memorial Today
            </h2>
            <p className="text-xl mb-12  font-lato max-w-2xl mx-auto">
              Honor your loved one with a beautiful digital memorial that
              preserves their memory for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="button font-lato">Get Started</button>
              <button
                className="button2 font-lato"
                onClick={() => navigate("/memorials")}
              >
                View Example Memorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
