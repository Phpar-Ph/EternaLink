import { useNavigate } from "react-router";
import { LuFlower } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { PiHandsPrayingBold } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";

function FeedMemorial({ memorials }) {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center ">
      {/* POST */}
      <div className="w-full p-4 m-4 ">
        {memorials?.data.length > 0 ? (
          memorials.data.map((memorial) => (
            <div
              key={memorial._id}
              className="w-full mb-8  rounded-2xl !inset-shadow-md  !shadow-xl "
            >
              <div className="bg-gentle-stone rounded-xl ">
                {/* Post heading */}
                <div className="p-6">
                  <div className="flex gap-4 items-center">
                    <div>
                      <img
                        src="https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
                        alt=""
                        className="rounded-full !ring-1 !ring-rosewood ring-opacity-5 h-12 w-12"
                      />
                    </div>
                    <h1 className="font-lato text-gray-800 font-bold text-lg ">
                      {memorials?.name}{" "}
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
                      className="rounded-full !ring-1 !ring-gray-100 ring-opacity-5 h-20 w-20 object-cover"
                    />

                    <div>
                      <h2
                        className="font-lato text-xl text-gray-100 font-bold hover:text-memorial-purple hover:cursor-pointer hover:underline"
                        onClick={() => {
                          navigate(`/memorial-profile/${memorial._id}`);
                        }}
                      >
                        {memorial.name}
                      </h2>
                      <p className="text-sm font-lato text-gray-50">
                        {new Date(memorial.birthDate).getFullYear()}
                        {" - "} {new Date(memorial.datePassing).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Post Description */}
                <div className="p-6">
                  <p className="text-xl font-lato text-gray-800 font-medium mb-2">
                    {memorial.message}
                  </p>
                </div>

                {/* React and Comment */}
                <div className="flex justify-between py-4 px-8 text-gray-600 text-2xl">
                  <div className="flex gap-4">
                    <FaRegHeart className="hover:text-gray-800" />
                    <LuFlower className="hover:text-gray-800" />
                    <PiHandsPrayingBold className="hover:text-gray-800" />
                  </div>
                  <div className="flex gap-4">
                    <FaRegComment className="hover:text-gray-800" />
                    <MdIosShare className="hover:text-gray-800" />
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
  );
}

export default FeedMemorial;
