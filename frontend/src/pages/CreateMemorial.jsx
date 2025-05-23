import { useState } from "react";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { submitMemorial } from "../utils/submitMemorial";
import { AppContent } from "../context/AppContentProvider";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { FaSpinner } from "react-icons/fa";
import { useImageUploadHandlers } from "../hooks/ImageUploadHandler";
import { useStepNavigation } from "../hooks/useStepNavigation";
import { stepIcons, Icons } from "../data/IconsData";

const CreateMemorial = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [datePassing, setDatePassing] = useState("");
  const [relationship, setRelationship] = useState("");
  const [location, setLocation] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(false);
  const navigate = useNavigate();
  const [coverPhoto, setCoverPhoto] = useState(false);
  const { backendUrl, getUserData } = useContext(AppContent);
  const { step, nextStep, prevStep } = useStepNavigation();

  const {
    profileInputRef,
    coverInputRef,
    handleProfileClick,
    handleCoverClick,
    handleProfileChange,
    handleCoverChange,
    isProfileUploading,
    isCoverUploading,
  } = useImageUploadHandlers({
    setProfilePhoto,
    setCoverPhoto,
  });
  const submitHandler = (e) => {
    submitMemorial({
      e,
      name,
      birthDate,
      datePassing,
      location,
      relationship,
      profilePhoto,
      backendUrl,
      getUserData,
      navigate,
      setProfilePhoto,
    });
  };

  return (
    <div className="bg-gentle-stone w-full h-screen">
      <div className="max-w-7xl mx-auto py-20 ">
        <div className="  p-8 mt-10 w-1/2 mx-auto bg-soft-lavender rounded-2xl drop-shadow-2xl">
          <div className="text-center mb-4 ">
            <h1 className="text-2xl font-bold font-playfair text-gray-800">
              Create a Memorial
            </h1>
            <p className="font-medium font-lato text-gray-600">
              Honor your loved one with a beautiful digital tribute
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
              {stepIcons.icon.map((Icon, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index < 2 ? "w-20 h-10" : "w-10 h-10"
                  }`}
                >
                  {index < 2 && (
                    <div className="bg-gray-800 w-20 h-2 ml-1 mt-4" />
                  )}
                  <div className="absolute bottom-0 left-0 flex items-center justify-center pointer-events-none w-12 h-12 rounded-full bg-gray-800">
                    <Icon size={18} className="text-amber-50" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="  relative">
            <form action="" onSubmit={submitHandler} className="">
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  {" "}
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Full Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icons.FaRegUser size={18} className="text-gray-600" />
                      </div>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Full Name"
                      />
                    </div>
                  </div>
                  {/* Date of Birth and Date of Passing */}
                  <div className="flex justify-between pt-4">
                    <div className="flex-1 mr-1">
                      <label
                        htmlFor="birthDate"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Date of Birth
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdDateRange size={18} className="text-gray-600" />
                        </div>
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          required
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ml-1">
                      <label
                        htmlFor="datePassing"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Date of Passing
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdDateRange size={18} className="text-gray-600" />
                        </div>
                        <input
                          type="date"
                          id="datePassing"
                          name="datePassing"
                          required
                          value={datePassing}
                          onChange={(e) => setDatePassing(e.target.value)}
                          className="block w-full pl-10 py-3 pr-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="pt-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Location
                    </label>

                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IoLocationOutline
                          size={18}
                          className="text-gray-600"
                        />
                      </div>
                      <input
                        name="name"
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        required
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Location..."
                      />
                    </div>
                  </div>
                  {/* Relationship */}
                  <div className="pt-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Your Relationship
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <select
                        name="name"
                        type="text"
                        onChange={(e) => setRelationship(e.target.value)}
                        value={relationship}
                        required
                        className="block w-full pl-4 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Full Name"
                      >
                        <option value="">Select relationship</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="grandchild">Grandchild</option>
                        <option value="friend">Friend</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="flex flex-col ">
                  <div className="py-4">
                    <p className="text-center font-bold font-playfair text-gray-800 text-2xl">
                      Upload profile picture
                    </p>
                  </div>
                  <div className="flex justify-center">
                    {/* Profile Picture */}
                    <div className="flex gap-4 items-center">
                      {profilePhoto ? (
                        <div className="w-60 h-60 bg-gray-600 rounded-full">
                          <img
                            src={profilePhoto}
                            alt=""
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      ) : (
                        <div>
                          <div>
                            <input
                              ref={profileInputRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleProfileChange}
                            />
                          </div>

                          <div className="w-60 h-60 bg-gray-800 rounded-full flex items-center justify-center relative ">
                            <Icons.FaRegUser className="absolute text-gray-500 text-8xl" />
                            {isProfileUploading && (
                              <div>
                                <FaSpinner className=" animate-spin h-10 w-10 text-white" />
                              </div>
                            )}
                            {!isProfileUploading && (
                              <button
                                type="button"
                                onClick={handleProfileClick}
                                className="bg-gray-400 text-white px-4 py-2 rounded-full h-full w-full opacity-0 hover:opacity-70  "
                                disabled={isProfileUploading}
                              >
                                "Click to Upload"
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Cover Photos */}
                  <div>
                    <div className="py-4">
                      <p className="text-center font-bold font-playfair text-gray-800 text-2xl">
                        Cover Photo
                      </p>
                    </div>
                    {coverPhoto ? (
                      <div className="w-full h-40">
                        <img
                          src={coverPhoto}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div>
                        <div>
                          <input
                            ref={coverInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleCoverChange}
                          />
                        </div>
                        <div className="w-full h-40  bg-gray-800  flex items-center justify-center relative">
                          <Icons.FaRegUser className="absolute text-gray-500 text-8xl" />
                          {isCoverUploading && (
                            <div>
                              <FaSpinner className=" animate-spin h-10 w-10 text-white" />
                            </div>
                          )}
                          {!isCoverUploading && (
                            <button
                              type="button"
                              onClick={handleCoverClick}
                              className="bg-gray-400 text-white px-4 py-2  h-full w-full opacity-0 hover:opacity-70  "
                              disabled={isCoverUploading}
                            >
                              "Click to Upload"
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* Step 3 */}
              {step === 3 && (
                <div>
                  {/* Biography */}
                  <div>
                    <label htmlFor="biography">Biography</label>
                    <textarea
                      name="biography"
                      id="biography"
                      rows={8}
                      value=""
                      onChange=""
                      placeholder="Share the story of your loved one's life..."
                      className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    ></textarea>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Write about their life, achievements, personality, and
                      what made them special.
                    </p>
                  </div>
                  {/* Events Timeline */}
                  <div>
                    <div className="py-4">
                      <div className=" flex w-full justify-between p-4">
                        <h2>Timeline Events</h2>
                        <h2>Add Events</h2>
                      </div>
                      <div>
                        {/* DATE AND TITLE */}
                        <div className="flex justify-between gap-4">
                          {/* Date */}
                          <div className="w-full">
                            <label
                              htmlFor="birthDate"
                              className="block text-sm font-medium text-gray-800"
                            >
                              Date
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdDateRange
                                  size={18}
                                  className="text-gray-600"
                                />
                              </div>
                              <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                required
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                              />
                            </div>
                          </div>
                          {/* Title */}
                          <div className="w-full">
                            <label
                              htmlFor="title"
                              className="block text-sm font-medium text-gray-800"
                            >
                              Title
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm ">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdDateRange
                                  size={18}
                                  className="text-gray-600"
                                />
                              </div>
                              <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Description */}
                        <div>
                          <div className="">
                            <label htmlFor="" className="">
                              Description
                            </label>
                            I. Yeah.
                            <input
                              name="name"
                              id="name"
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              required
                              className="block w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                              placeholder="Brief description of the event"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Form Submit button */}
              {step === 3 && (
                <div className=" absolute right-0 bottom-0 ">
                  <button
                    type="submit"
                    className="  bg-memorial-purple hover:bg-memorial-purple/80 px-4 py-2  rounded-2xl text-amber-50 font-bold font-lato"
                  >
                    Create Memorial
                  </button>
                </div>
              )}
            </form>
            <div className="relative  h-10 mt-6">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="absolute left-0 bg-memorial-purple hover:bg-memorial-purple/80 px-4 py-2 rounded-2xl text-amber-50 font-bold font-lato"
                >
                  Back
                </button>
              )}

              {step < 3 && (
                <button
                  onClick={nextStep}
                  className="absolute right-0 bg-memorial-purple hover:bg-memorial-purple/80 px-4 py-2 rounded-2xl text-amber-50 font-bold font-lato"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMemorial;
