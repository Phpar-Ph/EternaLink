import { IoShareSocialOutline, IoCalendarOutline } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineComment } from "react-icons/ai";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { useParams } from "react-router";
import { AppContent } from "../context/AppContentProvider";
import { useContext, useEffect, useState } from "react";
import { Icons } from "../data/IconsData";

function ViewMemorial() {
  const { id } = useParams(); // Get memorial ID from URL
  const { getMemorialData, memorialData } = useContext(AppContent);
  const [activeTab, setActiveTab] = useState("about");
  const [formData, setFormData] = useState({
    events: [
      {
        id: Date.now(),
        description: "",
        title: "",
      },
    ],
  });
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

  //  const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  const addEventClick = () =>
    setFormData((prev) => ({
      ...prev,
      events: [
        ...prev.events,
        {
          id: Date.now(),
          description: "",
          title: "",
        },
      ],
    }));

  const updateEventHandleChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.map((event) =>
        event.id === id
          ? {
              ...event,
              [field]: value,
            }
          : event
      ),
    }));
  };

  const removeEvent = (id) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.filter((e) => e.id !== id),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full bg-soft-lavender min-h-screen  ">
      <div className="max-w-7xl mx-auto px-4   py-20">
        {/* Hero Section */}
        <div className="w-full h-[50vh] relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={memorialData.coverPhoto}
            alt={memorialData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="flex absolute bottom-0 items-center gap-6 p-8">
              <div className="relative">
                <img
                  src={memorialData.profilePhoto}
                  alt={memorialData.name}
                  className="h-48 w-48 rounded-full object-cover border-4 border-amber-50 shadow-xl"
                />
              </div>
              <div className=" text-white mb-4">
                <h1 className="text-5xl font-playfair font-bold mb-3">
                  {memorialData.name}
                </h1>
                <p className="text-2xl font-lato">{lifeDates}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Info & Action Section */}
        <div className="mt-8 bg-soft-lavender rounded-t-xl shadow-md">
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
                      ? "bg-gentle-stone font-bold rounded-t-xl shadow-inner"
                      : "hover:bg-gentle-stone/50 rounded-t-lg"
                  }
                `}
                >
                  {tab}
                </li>
              )
            )}
          </ul>

          {/* About Section */}
          <div className="bg-gentle-stone p-6 rounded-b-xl shadow-md">
            {/* About Section */}
            {activeTab === "about" && (
              <div className="grid grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="col-span-2 space-y-6">
                  {/* Biography */}
                  <div className="bg-soft-lavender rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-playfair font-medium text-gray-800">
                        Biography
                      </h2>
                      <button className="px-4 py-2 bg-memorial-purple text-white rounded-xl hover:bg-memorial-purple/90 transition-colors duration-200">
                        Add biography
                      </button>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {memorialData.biography || "No biography added yet."}
                    </p>
                  </div>

                  {/* Recent Photos */}
                  <div className="bg-soft-lavender rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-playfair font-medium text-gray-800">
                        Recent Photos
                      </h2>
                      <button className="px-4 py-2 bg-memorial-purple text-white rounded-xl hover:bg-memorial-purple/90 transition-colors duration-200">
                        Add Photos
                      </button>
                    </div>
                    {/* Photo grid here */}
                  </div>
                </div>

                {/* Details Sidebar */}
                <div className="col-span-1">
                  <div className="bg-soft-lavender rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-playfair font-medium text-gray-800 mb-6 text-center">
                      Details
                    </h2>
                    <ul className="space-y-4">
                      {[
                        { label: "Birth Date", value: birthDate },
                        { label: "Passed Away", value: datePassing },
                        {
                          label: "Resting Place",
                          value: memorialData.location,
                        },
                      ].map(({ label, value }) => (
                        <li key={label} className="flex flex-col space-y-1">
                          <span className="text-sm text-gray-600">{label}</span>
                          <span className="text-gray-800 font-medium">
                            {value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {/* Memories */}
            {activeTab === "memories" && (
              <div className=" bg-soft-lavender p-4">
                <div className="flex   justify-between mb-6">
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
                      onChange={handleChange}
                      autoComplete="off"
                      aria-label="Memory text"
                      placeholder="write a memory or message..."
                      className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    ></textarea>
                  </label>
                  <div className="flex justify-between">
                    <button className="px-4 py-2 border-2 border-memorial-purple text-gray-800  hover:bg-memorial-purple/90 transition-colors duration-200">
                      Add Photos
                    </button>
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
                      <div
                        key={memory.id}
                        className="bg-gray-50 p-6 rounded-xl"
                      >
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
              <div className="bg-soft-lavender p-4">
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

            {/* Events Timeline */}
            {activeTab === "timeline" && (
              <div>
                <div className="bg-soft-lavender">
                  <div className="py-4">
                    <div className=" flex w-full justify-between p-4">
                      <h2 className="text-2xl font-playfair text-gray-800 font-semibold">
                        Timeline Events
                      </h2>
                      <button
                        type="button"
                        onClick={addEventClick}
                        className="bg-memorial-purple font-lato font-bold hover:bg-memorial-purple/80 px-4 py-2 text-lg text-amber-50 rounded-2xl"
                      >
                        Add Events
                      </button>
                    </div>
                    {/* Date and events .map() */}
                    {formData.events.map((event) => {
                      return (
                        <div
                          className="mb-4  rounded-md  p-4  space-y-4"
                          key={event.id}
                        >
                          {/* DATE AND TITLE */}
                          <div className="flex justify-between gap-4 ">
                            {/* Date */}
                            <div className="w-full">
                              <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                                  <Icons.MdDateRange
                                    size={18}
                                    className="text-gray-600"
                                  />
                                </div>
                                <label
                                  htmlFor="eventDate"
                                  className="block text-sm font-medium text-gray-800"
                                >
                                  Date
                                  <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    required
                                    value={event.eventDate}
                                    onChange={(e) =>
                                      updateEventHandleChange(
                                        event.id,
                                        "eventDate",
                                        e.target.value
                                      )
                                    }
                                    className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                                    autoComplete="off"
                                    aria-label="Event date"
                                  />
                                </label>
                              </div>
                            </div>
                            {/* Title */}
                            <div className="w-full">
                              <div className="mt-1 relative rounded-md shadow-sm ">
                                <label
                                  htmlFor="eventTitle"
                                  className="block text-sm font-medium text-gray-800"
                                >
                                  Title
                                  <input
                                    type="text"
                                    id="eventTitle"
                                    name="eventTitle"
                                    required
                                    value={event.eventTitle}
                                    onChange={(e) =>
                                      updateEventHandleChange(
                                        event.id,
                                        "eventTitle",
                                        e.target.value
                                      )
                                    }
                                    className="block w-full px-3 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                                    placeholder="event title"
                                    autoComplete="off"
                                    maxLength={100}
                                    aria-label="Event title"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Description */}
                          <div>
                            <div className="">
                              <label
                                htmlFor="eventDescription"
                                className="block text-sm font-medium text-gray-800"
                              >
                                Description
                                <input
                                  name="eventDescription"
                                  id="eventDescription"
                                  type="text"
                                  onChange={(e) =>
                                    updateEventHandleChange(
                                      event.id,
                                      "eventDescription",
                                      e.target.value
                                    )
                                  }
                                  value={event.eventDescription}
                                  required
                                  className="block w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                                  placeholder="Brief description of the event"
                                  autoComplete="off"
                                  maxLength={500}
                                  aria-label="Event description"
                                  spellCheck="true"
                                />
                              </label>
                            </div>
                          </div>
                          {/* Remove button */}
                          <div className="justify-end flex ">
                            <button
                              className="font-3xl font-bold bg-rosewood hover:bg-rosewood/80 px-4 py-2 text-amber-50 rounded-xl   "
                              onClick={() => removeEvent(event.id)}
                              aria-label="Remove event"
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {/* temporary */}
                  </div>
                </div>
              </div>
            )}

            {/* QR code */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMemorial;
