import { useParams } from "react-router";
import { dummyMemorialsData } from "../../data/DummyPersonMemorialData";
import { useState } from "react";
import About from "../../components/memorials/memorialsDummy/About";
import Memories from "../../components/memorials/memorialsDummy/Memories";
import Gallery from "../../components/memorials/memorialsDummy/Gallery";
import Timeline from "../../components/memorials/memorialsDummy/Timeline";
import QrCode from "../../components/memorials/memorialsDummy/QrCode";

function MemorialProfile() {
  const { itemId } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const memorial = dummyMemorialsData.find(
    (item) => item.id === parseInt(itemId)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const datePassing = new Date(memorials.datePassing).toLocaleDateString(
  //   "en-US",
  //   {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   }
  // );
  // const birthDate = new Date(memorials.birthDate).toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });
  // const lifeDates = ` ${new Date(memorials.birthDate).getFullYear()}
  //  -  ${new Date(memorials.datePassing).getFullYear()}`;

  return (
    <div className="w-full bg-gentle-stone min-h-screen  ">
      <div className="max-w-7xl mx-auto px-4   py-20">
        {/* Hero Section */}
        <div className="w-full h-[50vh] relative overflow-hidden  shadow-2xl">
          <img
            src={memorial.coverPhoto}
            alt={memorial.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="flex absolute bottom-0 items-center gap-6 p-8">
              <div className="relative">
                <img
                  src={memorial.profilePhoto}
                  alt={memorial.name}
                  className="h-48 w-48 rounded-full object-cover border-4 border-amber-50 shadow-xl"
                />
              </div>
              <div className=" text-white mb-4">
                <h1 className="text-5xl font-playfair font-bold mb-3">
                  {memorial.name}
                </h1>
                <p className="text-2xl font-lato">{memorial.lifeDates}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Info & Action Section */}
        <div className=" bg-gentle-stone rounded-t-xl shadow-md">
          <ul className="flex space-x-1  pt-2 font-lato text-gray-800">
            {["about", "memories", "gallery", "timeline", "qr code"].map(
              (tab) => (
                <li
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                  capitalize px-6 py-4 cursor-pointer transition-all duration-200
                  ${
                    activeTab === tab
                      ? "bg-soft-lavender font-bold rounded-t-xl shadow-inner"
                      : "hover:bg-gentle-stone/50 rounded-t-lg"
                  }
                `}
                >
                  {tab}
                </li>
              )
            )}
          </ul>
        </div>
        <About
          activeTab={activeTab}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          memorials={memorial}
          openModal={openModal}
        />
        <Memories activeTab={activeTab} memorial={memorial} />
        <Gallery activeTab={activeTab} memorial={memorial} />
        <Timeline activeTab={activeTab} />
        <QrCode activeTab={activeTab} />
      </div>
    </div>
  );
}

export default MemorialProfile;
