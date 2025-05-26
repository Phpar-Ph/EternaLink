import { IoShareSocialOutline, IoCalendarOutline } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineComment } from "react-icons/ai";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { useParams } from "react-router";
import { AppContent } from "../context/AppContentProvider";
import { useContext, useEffect, useState } from "react";

function ViewMemorial() {
  const { id } = useParams(); // Get memorial ID from URL
  const { getMemorialData, memorialData } = useContext(AppContent);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const loadMemorial = async () => {
      try {
        await getMemorialData(id);
      } catch (error) {
        console.error("Failed to load memorial:", error);
      }
    };

    if (id) {
      loadMemorial();
    }
  }, [id, getMemorialData]);

  if (!memorialData) {
    return <div>Memorial not found</div>;
  }

  const datePassing = new Date(memorialData.datePassing).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const birthDate = new Date(memorialData.birthDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const lifeDates = ` ${new Date(memorialData.birthDate).getFullYear()} 
   -  ${new Date(memorialData.datePassing).getFullYear()}`;

  return (
    <div className="w-full bg-gentle-stone min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="w-full h-[40vh] relative overflow-hidden shadow-xl">
          <img
            src={memorialData.coverPhoto}
            alt={memorialData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex absolute bottom-0 items-center gap-4 p-4">
              <div>
                <img
                  src={memorialData.profilePhoto}
                  alt={memorialData.name}
                  className="h-40 w-40 rounded-full object-cover !ring-2 !ring-amber-50"
                />
              </div>
              <div className=" text-white">
                <h1 className="text-4xl font-bold mb-2">{memorialData.name}</h1>
                <p className="text-xl">{lifeDates}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Info & Action Section */}
        <div className="bg-soft-lavender">
          <div className="bg-gentle-stone ">
            <ul className="flex space-x-10 text-2xl font-lato text-gray-800 font-bold">
              <li
                className="p-4"
                onClick={() => {
                  setActiveTab("about");
                }}
              >
                About
              </li>
              <li
                className="p-4"
                onClick={() => {
                  setActiveTab("memories");
                }}
              >
                Memories
              </li>
              <li
                className="p-4"
                onClick={() => {
                  setActiveTab("gallery");
                }}
              >
                Gallery
              </li>
              <li
                className="p-4"
                onClick={() => {
                  setActiveTab("timeline");
                }}
              >
                Timeline
              </li>
              <li
                className="p-4"
                onClick={() => {
                  setActiveTab("qr code");
                }}
              >
                QR code
              </li>
            </ul>
          </div>

          {/* About Section */}
          {activeTab === "about" && (
            <div>
              <div className="flex gap-4">
                <div className=" p-4 flex-3/5 border-2">
                  <h2 className="text-2xl font-serif font-medium mb-4">
                    Biography
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {memorialData.biography}
                  </p>
                </div>
                {/* Details */}
                <div className="border-2 p-4 flex-2/5">
                  <h2 className="text-center">Details</h2>
                  <ul>
                    <li>
                      Birth Date
                      <span>{birthDate}</span>
                    </li>
                    <li>
                      Passed Away
                      <span>{datePassing}</span>
                    </li>
                    <li>
                      Resting Place
                      <span>{memorialData.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Recent Photos */}
              <div className="p-4">
                <h2 className="text-2xl">Recent Photos</h2>
                {!memorialData.photos && (
                  <div>
                    <h1>Add photos</h1>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Memories */}
          {activeTab === "memories" && (
            <div className="">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-medium">
                  Memories & Tributes
                </h2>
              </div>
              <div>
                <label
                  htmlFor="memory"
                  className="block text-sm font-medium text-gray-800"
                >
                  Share your memory
                  <textarea
                    name="memory"
                    id="memory "
                    rows={8}
                    value=""
                    onChange=""
                    autoComplete="off"
                    aria-label="Memory text"
                    placeholder="write a memory or message..."
                    className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                  ></textarea>
                </label>
                <div className="flex justify-between">
                  <button type="button">Add photo</button>
                  <button
                    type="button"
                    className="bg-memorial-purple text-white px-4 py-2 rounded hover:bg-memorial-purple-dark"
                  >
                    Share a Memory
                  </button>
                </div>
              </div>
              <div className="space-y-8">
                {memorialData.memories > 0 &&
                  memorialData.memories.map((memory) => (
                    <div key={memory.id} className="bg-gray-50 p-6 rounded-xl">
                      <p className="italic text-lg">
                        &ldquo;{memory.text}&rdquo;
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">{memory.author}</p>
                          <p className="text-sm text-gray-600">
                            {memory.relationship}
                          </p>
                        </div>
                        <p className="text-sm text-gray-600">
                          {new Date(memory.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {activeTab === "gallery" && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-medium">
                  Photo Gallery
                </h2>
                <button className="text-memorial-purple border border-memorial-purple px-4 py-2 rounded hover:bg-memorial-purple-light flex items-center">
                  <MdOutlinePhotoLibrary className="w-4 h-4 mr-2" />
                  Upload Photos
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {memorialData.photos > 0 &&
                  memorialData.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden shadow"
                    >
                      <img
                        src={photo}
                        alt={`${memorialData.name} photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
          {/* Timeline */}
          {/* QR code */}
        </div>
      </div>
    </div>
  );
}

export default ViewMemorial;
