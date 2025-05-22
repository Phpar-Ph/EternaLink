import { useState } from "react";
// import { useNavigate } from "react-router";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContent } from "../context/AppContentProvider";
import { useContext } from "react";
import { useNavigate } from "react-router";
const CreateMemorial = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [datePassing, setDatePassing] = useState("");
  const [relationship, setRelationship] = useState("");
  const [location, setLocation] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { backendUrl, getUserData } = useContext(AppContent);
  const nextStep = () => {
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };
  const userSlots = {
    icon: [FaRegUser, AiOutlinePicture, TfiWrite],
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/create/memorial", {
        name,
        birthDate,
        datePassing,
        location,
      });
      if (data.success) {
        toast.success("Created Memorial successfully");
        setTimeout(() => {
          getUserData();
          navigate("/homepage");
        }, 2000);
      } else {
        toast.error("Creating Memorial failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gentle-stone w-full h-screen">
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
              {userSlots.icon.map((Icon, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index < 2 ? "w-20 h-10" : "w-10 h-10"
                  }`}
                >
                  {index < 2 && (
                    <div className="bg-gray-800 w-20 h-2 ml-1 mt-4" />
                  )}
                  <div className="absolute bottom-0 left-0 flex items-center justify-center pointer-events-none w-12 h-12 rounded-full bg-gray-800">
                    <Icon size={18} className="text-amber-50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" " onSubmit={submitHandler}>
            <form action="">
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  {" "}
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Full Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaRegUser size={18} className="text-gray-600" />
                      </div>
                      <input
                        name="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Full Name"
                      />
                    </div>
                  </div>
                  {/* Date of Birth and Date of Passing */}
                  <div className="flex justify-between pt-4">
                    <div className="flex-1 mr-1">
                      <label
                        htmlFor="birthDate"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Date of Birth
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdDateRange size={18} className="text-gray-600" />
                        </div>
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          required
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ml-1">
                      <label
                        htmlFor="birthDate"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Date of Passing
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdDateRange size={18} className="text-gray-600" />
                        </div>
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          required
                          value={datePassing}
                          onChange={(e) => setDatePassing(e.target.value)}
                          className="block w-full pl-10 py-3 pr-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="pt-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Location
                    </label>

                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IoLocationOutline
                          size={18}
                          className="text-gray-600"
                        />
                      </div>
                      <input
                        name="name"
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        required
                        className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Enter Location..."
                      />
                    </div>
                  </div>
                  {/* Relationship */}
                  <div className="pt-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Your Relationship
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <select
                        name="name"
                        type="text"
                        onChange={(e) => setRelationship(e.target.value)}
                        value={relationship}
                        required
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
                    </div>
                  </div>
                  <button className="  bg-memorial-purple hover:bg-memorial-purple/80 px-4 py-2 rounded-2xl text-amber-50 font-bold font-lato">
                    Submit
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

              <button
                onClick={nextStep}
                className="absolute right-0 bg-memorial-purple hover:bg-memorial-purple/80 px-4 py-2 rounded-2xl text-amber-50 font-bold font-lato"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMemorial;
