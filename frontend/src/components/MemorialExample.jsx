import { memorials } from "../data/PersonData";
import { useNavigate } from "react-router";

const MemorialExample = () => {
  const navigate = useNavigate();
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
                src={memorials[1].profilePhoto}
                alt=""
                className="w-24 h-24 object-cover rounded-full"
              />
              <div>
                <p>{memorials[1].name}</p>
                <p>{memorials[1].lifeDates}</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-amber-100">{memorials[1].bio}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {memorials[1].photos.map((photo) => (
                <img
                  src={photo}
                  alt=""
                  className="w-full h-24 object-cover rounded"
                />
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                23 memories shared
              </span>
              <button
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
                onClick={() => navigate(`/memorials/${memorials[1].id}`)}
              >
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
