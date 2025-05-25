import { Icons } from "../../data/IconsData";
function SecondStep({
  profileInputRef,
  handleProfileChange,
  isProfileUploading,
  handleProfileClick,
  coverInputRef,
  handleCoverChange,
  isCoverUploading,
  handleCoverClick,
  profilePhotoReview,
  coverPhotoReview,
}) {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="py-4">
          <p className="text-center font-bold font-playfair text-gray-800 text-2xl">
            Upload profile picture
          </p>
        </div>
        <div className="flex justify-center">
          {/* Profile Picture */}
          <div className="flex gap-4 items-center">
            {profilePhotoReview ? (
              <div className="w-60 h-60 bg-gray-600 rounded-full">
                <img
                  // src={formData.profilePhoto}
                  src={profilePhotoReview}
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
                    aria-label="Add profile picture"
                  />
                </div>

                <div className="w-60 h-60 bg-gray-600 rounded-full flex items-center justify-center relative ">
                  <Icons.FaRegUser className="absolute text-gray-500 text-8xl" />
                  {/* {isProfileUploading && (
                    <div>
                      <Icons.FaSpinner className=" animate-spin h-10 w-10 text-white" />
                    </div>
                  )} */}
                  {!isProfileUploading && (
                    <button
                      type="button"
                      onClick={handleProfileClick}
                      className="bg-gray-500 text-white px-4 py-2 rounded-full h-full w-full opacity-0 hover:opacity-70  transition-all"
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
          {coverPhotoReview ? (
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
              <img
                src={coverPhotoReview}
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
                  aria-label="Add cover photo"
                />
              </div>
              <div className="w-full h-48  bg-gray-600  flex items-center justify-center relative rounded-lg ">
                <Icons.FaRegUser className="absolute text-gray-500 text-8xl" />

                {!isCoverUploading && (
                  <button
                    type="button"
                    onClick={handleCoverClick}
                    className="bg-gray-500  transition-all text-white px-4 py-2 hover:rounded-lg  h-full w-full opacity-0 hover:opacity-70  "
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
    </div>
  );
}

export default SecondStep;
