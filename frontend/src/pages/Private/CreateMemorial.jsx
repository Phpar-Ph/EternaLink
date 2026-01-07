import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Icons } from "../../data/IconsData";
import { useCreateMemorial } from "../../hooks/api/memorial/useCreateMemorial";
import { useStoreMemorial } from "../../store/useStoreMemorial";

// zod schema
const memorialFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  birthDate: z.string().min(1, "Birth date is required"), // can be changed to date if needed
  datePassing: z.string().min(1, "Date of passing is required"), // same here
  location: z.string().min(1, "Location is required"),
  relationship: z.string().min(1, "Relationship is required"),
  message: z.string().min(1, "Message is required"),
  profilePhoto: z.any().optional(),
  coverPhoto: z.any().optional(),
});

const CreateMemorial = () => {
  const { mutate } = useCreateMemorial();
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
  const [coverPhotoPreview, setCoverPhotoPreview] = useState(null);

  const { isCreatingMemorial } = useStoreMemorial();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: "",
      birthDate: "",
      datePassing: "",
      location: "",
      relationship: "",
      profilePhoto: "",
      coverPhoto: "",
      message: "",
    },
    resolver: zodResolver(memorialFormSchema),
  });
  const defaultImage =
    "https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg";

  const submit = (data) => {
    mutate(data);
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
            onSubmit={handleSubmit(submit)}
            className="flex justify-around gap-4 relative pb-20"
          >
            {/* Personal Information Section */}
            <div className="space-y-6  w-full">
              <h2 className="text-xl font-semibold font-playfair text-gray-800">
                Personal Information
              </h2>
              <div>
                {/* Name Field */}
                <div>
                  <div className="relative rounded-md shadow-sm ">
                    <div className="absolute bottom-0 p-3  pointer-events-none">
                      <Icons.FaRegUser size={18} className="text-gray-600" />
                    </div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Full Name
                      <input
                        name="name"
                        id="name"
                        type="text"
                        {...register("name")}
                        disabled={isCreatingMemorial}
                        required
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Full Name"
                        autoComplete="name"
                        aria-label="Full name"
                      />
                    </label>
                  </div>
                </div>
                {/* Date of Birth and Date of Passing */}
                <div className="flex justify-between pt-4">
                  <div className="flex-1 mr-1">
                    <div className=" relative rounded-md shadow-sm">
                      <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                        <Icons.MdDateRange
                          size={18}
                          className="text-gray-600"
                        />
                      </div>
                      <label
                        htmlFor="birthDate"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Date of Birth
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          required
                          disabled={isCreatingMemorial}
                          {...register("birthDate")}
                          autoComplete="bday-day"
                          aria-label="Date of birth"
                          className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex-1 ml-1">
                    <div className=" relative rounded-md shadow-sm">
                      <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                        <Icons.MdDateRange
                          size={18}
                          className="text-gray-600"
                        />
                      </div>
                      <label
                        htmlFor="datePassing"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Date of Passing
                        <input
                          type="date"
                          id="datePassing"
                          name="datePassing"
                          disabled={isCreatingMemorial}
                          required
                          {...register("datePassing")}
                          autoComplete="off"
                          aria-label="Date of passing"
                          className="block w-full pl-10 py-3 pr-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="pt-4">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                      <Icons.IoLocationOutline
                        size={18}
                        className="text-gray-600"
                      />
                    </div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Location
                      <input
                        name="location"
                        id="location"
                        type="text"
                        {...register("location")}
                        required
                        disabled={isCreatingMemorial}
                        aria-label="Location"
                        autoComplete="street-address"
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Location..."
                      />
                    </label>
                  </div>
                </div>
                {/* Relationship */}
                <div className="pt-4">
                  <div className="relative rounded-md shadow-sm">
                    <label
                      htmlFor="relationship"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Your Relationship
                      <select
                        name="relationship"
                        id="relationship"
                        type="text"
                        {...register("relationship")}
                        required
                        disabled={isCreatingMemorial}
                        aria-label="Relationship"
                        autoComplete="off"
                        className="block w-full pl-4 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Full Name"
                      >
                        <option value="">Select relationship</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="grandchild">Grandchild</option>
                        <option value="friend">Friend</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>
                </div>
                {/* Message */}
                <div className="pt-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Message
                    <textarea
                      name="message"
                      id="message"
                      {...register("message")}
                      required
                      disabled={isCreatingMemorial}
                      aria-label="Message"
                      className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>

            {/* Photos Section */}
            <div className="space-y-6 w-full ">
              <div className="h-full  flex flex-col justify-between">
                <h2 className="text-xl font-semibold font-playfair text-gray-800 text-left">
                  Memorial Photos
                </h2>
                {/* Profile Photos */}
                <div className="flex justify-center relative ">
                  <div className="absolute left-0 top-0 pt-2 pl-8">
                    <p className="text-center font-bold font-lato text-gray-600 text-lg">
                      Profile picture
                    </p>
                  </div>
                  {/* Profile Picture */}
                  <div className="flex items-center relative">
                    <div className="w-64 h-64 relative group shadow-xl rounded-full overflow-hidden border-">
                      <img
                        src={profilePhotoPreview || defaultImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <label
                        htmlFor="profilePhoto"
                        className="absolute inset-0 flex items-end justify-end cursor-pointer"
                      >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                        {/* Upload Icon */}
                        <div className="z-10 m-4 p-3 bg-memorial-purple text-amber-50 rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"></div>
                        <input
                          id="profilePhoto"
                          {...register("profilePhoto", {
                            onChange: (e) => {
                              const file = e.target.files?.[0];

                              if (file) {
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onload = () => {
                                  const base64Image = reader.result;
                                  setProfilePhotoPreview(base64Image);

                                  setValue("profilePhoto", base64Image);
                                };
                              }
                            },
                          })}
                          type="file"
                          disabled={isCreatingMemorial}
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Cover Photos */}
                <div className=" relative ">
                  <p className="text-left px-2 pl-8 font-bold font-lato text-gray-600 text-lg">
                    Cover Photo
                  </p>

                  <div className="w-full h-56 rounded-lg overflow-hidden shadow-lg relative group">
                    <img
                      src={coverPhotoPreview || defaultImage}
                      alt="Cover"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Upload input (hidden) */}
                    <label
                      htmlFor="coverPhoto"
                      className="absolute inset-0 cursor-pointer"
                      title="Change cover photo"
                    >
                      <input
                        id="coverPhoto"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        {...register("coverPhoto", {
                          onChange: (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.readAsDataURL(file);
                              reader.onload = () => {
                                const base64Image = reader.result;
                                setCoverPhotoPreview(base64Image);
                                setValue("coverPhoto", base64Image);
                              };
                            }
                          },
                        })}
                      />
                    </label>
                  </div>

                  <div>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={isCreatingMemorial}
                        className="hidden"
                        aria-label="Add cover photo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* create memorial button and loading state */}
            <div className="absolute bottom-0 right-0">
              <button
                type="submit"
                disabled={isCreatingMemorial}
                className={`bg-memorial-purple hover:bg-memorial-purple/80 px-6 py-3 rounded-xl text-amber-50 font-bold font-lato transition-colors ${
                  isCreatingMemorial ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isCreatingMemorial ? (
                  <span className="flex items-center justify-center">
                    <Icons.FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Creating Memorial...
                  </span>
                ) : (
                  <> Create Memorial</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMemorial;
