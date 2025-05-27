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
  handleCoverRemove,
  handleProfileRemove,
}) {
  return (
    <div className="h-full  flex flex-col justify-between">
      <h2 className="text-xl font-semibold font-playfair text-gray-800 text-left">
        Memorial Photos
      </h2>
      <div className="flex justify-center relative ">
        <div className="absolute left-0 top-0 pt-2 pl-8">
          <p className="text-center font-bold font-lato text-gray-600 text-lg">
            Profile picture
          </p>
        </div>
        {/* Profile Picture */}
        <div className="flex items-center relative">
          {profilePhotoReview ? (
            <div className="w-64 h-64  relative  ">
              <img
                src={profilePhotoReview}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
              <button
                type="button"
                onClick={handleProfileRemove}
                className=" z-10 hover:cursor-pointer bg-   absolute  top-0 right-0"
              >
                <Icons.CiCircleRemove className="text-rosewood text-4xl font-bold " />
              </button>
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

              <div className="w-64 h-64 bg-gray-600 rounded-full flex items-center justify-center relative ">
                <Icons.FaRegUser className="absolute text-gray-500 text-8xl" />
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
      <div className=" ">
        <p className="text-left px-2 pl-8 font-bold font-lato text-gray-600 text-lg">
          Cover Photo
        </p>
      </div>
      {/* Cover Photos */}
      <div className=" relative ">
        {coverPhotoReview ? (
          <div className="w-full h-56 rounded-lg overflow-hidden shadow-lg">
            <img
              src={coverPhotoReview}
              alt=""
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={handleCoverRemove}
              className=" z-10 p-2 hover:cursor-pointer bg-   absolute  top-0 right-0"
            >
              <Icons.CiCircleRemove className="text-rosewood text-4xl font-bold " />
            </button>
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
            <div className="w-full h-56  bg-gray-600  flex items-center justify-center relative rounded-lg ">
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
  );
}

export default SecondStep;
