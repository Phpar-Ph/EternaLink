import { useContext, useEffect } from "react";
import { AppContent } from "../context/AppContentProvider";
import { LuFlower } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { PiHandsPrayingBold } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";

const HomeLogin = () => {
  const { userData } = useContext(AppContent);
  useEffect(() => {}, [userData]);

  // {
  //   new Date(memorial.birthDate).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // }

  return (
    <div className="w-full bg-rose-beige">
      <div className="max-w-7xl mx-auto text-4xl py-20  ">
        <div className="flex justify-center flex-col pt-20">
          <div>
            <h1 className="text-center">Welcome {userData?.name}</h1>
          </div>
          <div className=" flex justify-center ">
            {/* POST */}
            <div className="w-full p-4 m-4 ">
              {userData?.memorialPosts?.length > 0 ? (
                userData.memorialPosts.map((memorial) => (
                  <div
                    key={memorial._id}
                    className="w-full mb-8 border-2 rounded-2xl drop-shadow-amber-950 shadow-2xl"
                  >
                    <div className="bg-gentle-stone rounded-xl ">
                      {/* Post heading */}
                      <div className="p-6">
                        <div className="flex gap-4 items-center">
                          <div>
                            <img
                              src="https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
                              alt=""
                              className="rounded-full ring-1 ring-rosewood ring-opacity-5 h-12 w-12"
                            />
                          </div>
                          <h1 className="font-lato text-gray-800 font-bold text-lg ">
                            {userData?.name}{" "}
                            <span className="text-gray-600 text-lg font-medium font-lato">
                              created a memorial for {memorial.name}
                            </span>
                          </h1>
                        </div>
                      </div>
                      {/* COver Photo */}
                      <div className="h-80 w-full  relative">
                        <img
                          src={memorial.coverPhoto}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent  " />
                        <div className="absolute bottom-0 left-0 flex p-4 gap-4 items-center">
                          <img
                            src={memorial.profilePhoto}
                            alt=""
                            className="rounded-full ring-1 ring-white ring-opacity-5 h-20 w-20 object-cover"
                          />

                          <div>
                            <h2 className="font-lato text-xl text-gray-50 font-bold">
                              {memorial.name}
                            </h2>
                            <p className="text-sm font-lato text-gray-50">
                              {new Date(memorial.birthDate).getFullYear()}
                              {" - "}{" "}
                              {new Date(memorial.datePassing).getFullYear()}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Post Description */}
                      <div className="p-6">
                        <p className="text-xl font-lato text-gray-800 font-medium mb-2">
                          Today marks one year since we lost our beloved father.
                          His wisdom, kindness, and infectious laugh continue to
                          echo in our hearts. Dad taught us the value of hard
                          work, integrity, and most importantly, how to find joy
                          in life's simple moments. We miss you every day, Dad.
                          Your legacy lives on through the countless lives you
                          touched. 🌟
                        </p>
                      </div>

                      {/* React and Comment */}
                      <div className="flex justify-between py-4 px-8 text-gray-500 text-2xl border-t border-gray-100">
                        <div className="flex gap-4">
                          <FaRegHeart className="hover:text-gray-700" />
                          <LuFlower />
                          <PiHandsPrayingBold />
                        </div>
                        <div className="flex gap-4">
                          <FaRegComment />
                          <MdIosShare />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500">
                  No memorials created yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
