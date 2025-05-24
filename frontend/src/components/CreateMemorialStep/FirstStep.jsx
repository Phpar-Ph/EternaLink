import { Icons } from "../../data/IconsData";

const FirstStep = ({
  setName,
  name,
  birthDate,
  setBirthDate,
  datePassing,
  setDatePassing,
  setLocation,
  location,
  setRelationship,
  relationship,
  message,
  setMessage,
}) => {
  return (
    <div>
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
              <Icons.FaRegUser size={18} className="text-gray-600" />
            </div>
            <input
              name="name"
              id="name"
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
                <Icons.MdDateRange size={18} className="text-gray-600" />
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
              htmlFor="datePassing"
              className="block text-sm font-medium text-gray-800"
            >
              Date of Passing
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icons.MdDateRange size={18} className="text-gray-600" />
              </div>
              <input
                type="date"
                id="datePassing"
                name="datePassing"
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
              <Icons.IoLocationOutline size={18} className="text-gray-600" />
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
        {/* Message */}
        <div className="pt-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
