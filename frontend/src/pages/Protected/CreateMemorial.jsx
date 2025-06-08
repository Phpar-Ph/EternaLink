import { useState } from "react";
import FirstStep from "../../components/CreateMemorialStep/MemorialInformation";
import { useImageUploadHandlers } from "../../hooks/ImageUploadHandler";
import SecondStep from "../../components/CreateMemorialStep/MemorialPhotos";
import { ButtonCtaPrimary } from "../../components/button/ButtonCTA";
import { useCreateMemorial } from "../../hooks/api/memorial/useCreateMemorial";
import { useCreateMemorialHookForm } from "../../hooks/form/useCreateMemorialHookForm";

const CreateMemorial = () => {
  const { mutate } = useCreateMemorial();

  const [profilePhotoReview, setProfilePhotoReview] = useState(null);
  const [coverPhotoReview, setCoverPhotoReview] = useState(null);
  const { register, handleSubmit, isLoading, setValue } =
    useCreateMemorialHookForm();

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
    setValue,
    setProfilePhotoReview,
    setCoverPhotoReview,
  });

  const handleProfileRemove = () => {
    console.log("Click");
    setProfilePhotoReview(null);
  };
  const handleCoverRemove = () => {
    console.log("Click");
    setCoverPhotoReview(null);
  };

  const onSubmit = (data) => {
    console.log("click", data);
    mutate(data);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
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
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-around gap-4 relative pb-20"
          >
            {/* Personal Information Section */}
            <div className="space-y-6  w-full">
              <h2 className="text-xl font-semibold font-playfair text-gray-800">
                Personal Information
              </h2>
              <FirstStep register={register} />
            </div>

            {/* Photos Section */}
            <div className="space-y-6 w-full ">
              <input type="text" {...register("profilePhoto")} hidden />
              <input type="text" {...register("coverPhoto")} hidden />
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
