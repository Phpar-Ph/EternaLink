import React from "react";

const MemorialExample = () => {
  return (
    <div className="h-fit w-full bg-indigo-950  ">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex w-full">
          <div className="flex-1  p-4">
            <div className=" mb-10 lg:mb-0">
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Beautiful, Respectful Memorials
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our digital memorial pages are designed with respect and dignity
                in mind. Each page serves as a lasting tribute to your loved
                one's life and legacy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* <BookOpenIcon
                      size={24}
                      className="text-indigo-600 dark:text-indigo-400"
                    /> */}
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Life Stories
                    </span>{" "}
                    - Share their full life story or highlight special moments
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* <CameraIcon
                      size={24}
                      className="text-indigo-600 dark:text-indigo-400"
                    /> */}
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Photo Galleries
                    </span>{" "}
                    - Create beautiful collections of photos from throughout
                    their life
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* <ShareIcon
                      size={24}
                      className="text-indigo-600 dark:text-indigo-400"
                    /> */}
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Community Memories
                    </span>{" "}
                    - Allow friends and family to share their own memories
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="text-amber-50 flex items-center mb-6 gap-4">
              <img
                src="https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg"
                alt=""
                className="w-24 h-24 object-cover rounded-full"
              />
              <div>
                <p>Eleanor Marie Johnson</p>
                <p>1945 - 2022</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-amber-100">
                "A loving mother, grandmother, and friend to all who knew her.
                Her kindness and wisdom continue to guide us every day."
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e98f2535036667.58bc6981515a3.jpg"
                alt=""
                className="w-full h-24 object-cover rounded"
              />

              <img
                src="https://media.istockphoto.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.jpg?s=612x612&w=0&k=20&c=DB5oXy7_aasPbpr7zfpfV92ZYsPIQfFWLyweKEz_UVs="
                alt=""
                className="w-full h-24 object-cover rounded"
              />

              <img
                src="https://portfolio.newschool.edu/guptm392/files/2014/08/DSC_1004-2-1a1yqd6.jpg"
                alt=""
                className="w-full h-24 object-cover rounded"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                23 memories shared
              </span>
              <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
                View Memorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialExample;
