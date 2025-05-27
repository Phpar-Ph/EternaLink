import { useState, useContext } from "react";
import FirstStep from "../components/CreateMemorialStep/MemorialInformation";
import { submitMemorial } from "../utils/submitMemorial";
import { AppContent } from "../context/AppContentProvider";
import { useNavigate } from "react-router";
import { useImageUploadHandlers } from "../hooks/ImageUploadHandler";
import SecondStep from "../components/CreateMemorialStep/MemorialPhotos";
import { toast } from "react-toastify";

//  photos: [
//     {
//       url: "",
//       id: Date.now(),
//       fileName: "",
//     },
//   ],
//   memories: [
//     {
//       id: Date.now(),
//       author: "",
//       relationship: "",
//       text: "",
//       date: "",
//       photo: [
//         {
//           url: "",
//           fileName: "",
//         },
//       ],
//     },
//   ],
//   addEvent: [
//     {
//       eventDate: "",
//       eventTitle: "",
//       eventDescription: "",
//       id: Date.now(),
//     },
//   ],

const CreateMemorial = () => {
  const navigate = useNavigate();
  const { backendUrl, getUserData } = useContext(AppContent);
  const [profilePhotoReview, setProfilePhotoReview] = useState(null);
  const [coverPhotoReview, setCoverPhotoReview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    datePassing: "",
    location: "",
    relationship: "",
    profilePhoto: "",
    coverPhoto: "",
    message: "",
  });

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
    setFormData,
    setProfilePhotoReview,
    setCoverPhotoReview,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    // Validate all required fields
    if (
      !formData.name ||
      !formData.birthDate ||
      !formData.datePassing ||
      !formData.location ||
      !formData.relationship
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    // Validate photos
    // if (!formData.profilePhoto || !formData.coverPhoto) {
    //   toast.error("Please upload both profile and cover photos");
    //   return;
    // }

    // Validate event data
    // const validEvents = formData.addEvent.filter(
    //   (event) => event.eventDate && event.eventTitle && event.eventDescription
    // );

    // if (validEvents.length === 0) {
    //   toast.error("Please add at least one event with all fields filled");
    //   return;
    // }

    submitMemorial({
      e,
      backendUrl,
      getUserData,
      navigate,
      formData,
    });
  };

  const handleProfileRemove = () => {
    console.log("Click");
    setProfilePhotoReview(null);
  };
  const handleCoverRemove = () => {
    console.log("Click");
    setCoverPhotoReview(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="bg-rose-beige w-full ">
      <div className="max-w-7xl mx-auto my-20  ">
        <div className="bg-soft-lavender rounded-2xl drop-shadow-2xl p-8 mx-auto h-fit">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-playfair text-gray-800 mb-2">
              Create a Memorial
            </h1>
            <p className="font-medium font-lato text-gray-600">
              Honor your loved one with a beautiful digital tribute
            </p>
          </div>
          <form
            onSubmit={submitHandler}
            className="flex justify-around gap-4 relative pb-20"
          >
            {/* Personal Information Section */}
            <div className="space-y-6  w-full">
              <h2 className="text-xl font-semibold font-playfair text-gray-800">
                Personal Information
              </h2>
              <FirstStep formData={formData} handleChange={handleChange} />
            </div>

            {/* Photos Section */}
            <div className="space-y-6 w-full ">
              <SecondStep
                profileInputRef={profileInputRef}
                handleProfileChange={handleProfileChange}
                isProfileUploading={isProfileUploading}
                handleProfileClick={handleProfileClick}
                coverInputRef={coverInputRef}
                handleCoverChange={handleCoverChange}
                isCoverUploading={isCoverUploading}
                handleCoverClick={handleCoverClick}
                profilePhotoReview={profilePhotoReview}
                coverPhotoReview={coverPhotoReview}
                handleProfileRemove={handleProfileRemove}
                handleCoverRemove={handleCoverRemove}
              />
            </div>

            <div className="absolute bottom-0 right-0">
              <button
                type="submit"
                className="bg-memorial-purple hover:bg-memorial-purple/80 px-6 py-3 rounded-xl text-amber-50 font-bold font-lato transition-colors"
              >
                Create Memorial
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMemorial;
