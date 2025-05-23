import React from "react";

function SecondStep({
  profilePhoto,
  profileInputRef,
  handleProfileChange,
  isProfileUploading,
  handleProfileClick,
  coverPhoto,
  coverInputRef,
  handleCoverChange,
  isCoverUploading,
  handleCoverClick,
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
                      <Icons.FaSpinner className=" animate-spin h-10 w-10 text-white" />
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
                    <Icons.FaSpinner className=" animate-spin h-10 w-10 text-white" />
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
    </div>
  );
}

export default SecondStep;
