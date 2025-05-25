import { useState, useContext } from "react";
import FirstStep from "../components/CreateMemorialStep/FirstStep";
import { submitMemorial } from "../utils/submitMemorial";
import { AppContent } from "../context/AppContentProvider";
import { useNavigate } from "react-router";
import { useImageUploadHandlers } from "../hooks/ImageUploadHandler";
import { useStepNavigation } from "../hooks/useStepNavigation";
import { stepIcons } from "../data/IconsData";
import SecondStep from "../components/CreateMemorialStep/SecondStep";
import ThirdStep from "../components/CreateMemorialStep/ThirdStep";
import { toast } from "react-toastify";
const CreateMemorial = () => {
  const navigate = useNavigate();
  const { backendUrl, getUserData } = useContext(AppContent);
  const { step, nextStep, prevStep } = useStepNavigation();
  const [profilePhotoReview, setProfilePhotoReview] = useState(null);
  const [coverPhotoReview, setCoverPhotoReview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    datePassing: "",
    location: "",
    relationship: "",
    profilePhoto: "",
    biography: "",
    coverPhoto: "",
    message: "",
    addEvent: [
      {
        eventDate: "",
        eventTitle: "",
        eventDescription: "",
        id: Date.now(),
      },
    ],
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
    if (!formData.profilePhoto || !formData.coverPhoto) {
      toast.error("Please upload both profile and cover photos");
      return;
    }

    // Validate event data
    const validEvents = formData.addEvent.filter(
      (event) => event.eventDate && event.eventTitle && event.eventDescription
    );

    if (validEvents.length === 0) {
      toast.error("Please add at least one event with all fields filled");
      return;
    }

    submitMemorial({
      e,
      backendUrl,
      getUserData,
      navigate,
      formData: {
        ...formData,
        addEvent: validEvents, // Send only valid events
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="bg-rose-beige w-full">
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
                  {index < stepIcons.icon.length - 1 && (
                    <div
                      className={`w-20 h-2 ml-1 mt-4 transition-colors duration-300 ${
                        index < step - 1 ? "bg-gray-700" : "bg-gray-400"
                      }`}
                    />
                  )}
                  <div
                    className={`absolute bottom-0 left-0 flex items-center justify-center pointer-events-none w-12 h-12 rounded-full ${
                      index < step ? "bg-gray-700 " : "bg-gray-400"
                    }`}
                  >
                    <Icon size={18} className="text-amber-50" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="  relative">
            <form onSubmit={submitHandler} className="">
              {/* Step 1 */}
              {step === 1 && (
                <FirstStep formData={formData} handleChange={handleChange} />
              )}

              {step === 2 && (
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
                />
              )}
              {/* Step 3 */}
              {step === 3 && (
                <ThirdStep
                  formData={formData}
                  setFormData={setFormData}
                  handleChange={handleChange}
                />
              )}
              {/* Form Submit button */}
              {step === 3 && (
                <div className=" absolute right-0 bottom-0 z-10">
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
