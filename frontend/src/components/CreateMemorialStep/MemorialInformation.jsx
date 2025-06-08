import { Icons } from "../../data/IconsData";

const FirstStep = ({ register }) => {
  return (
    <div>
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
                <Icons.MdDateRange size={18} className="text-gray-600" />
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
                <Icons.MdDateRange size={18} className="text-gray-600" />
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
              <Icons.IoLocationOutline size={18} className="text-gray-600" />
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
              aria-label="Message"
              className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
