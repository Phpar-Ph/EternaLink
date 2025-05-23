import { Icons } from "../../data/IconsData";
const ThirdStep = ({
  setEventTitle,
  eventTitle,
  eventDescription,
  setEventDescription,
  setEventDate,
  eventDate,
  biography,
  setBiography,
}) => {
  return (
    <div>
      <div>
        {/* Biography */}
        <div>
          <label htmlFor="biography">Biography</label>
          <textarea
            name="biography"
            id="biography"
            rows={8}
            type="text"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            placeholder="Share the story of your loved one's life..."
            className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
          ></textarea>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Write about their life, achievements, personality, and what made
            them special.
          </p>
        </div>
        {/* Events Timeline */}
        <div>
          <div className="py-4">
            <div className=" flex w-full justify-between p-4">
              <h2>Timeline Events</h2>
              <h2>Add Events</h2>
            </div>
            <div>
              {/* DATE AND TITLE */}
              <div className="flex justify-between gap-4">
                {/* Date */}
                <div className="w-full">
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Date
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icons.MdDateRange size={18} className="text-gray-600" />
                    </div>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    />
                  </div>
                </div>
                {/* Title */}
                <div className="w-full">
                  <label
                    htmlFor="eventTitle"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Title
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm ">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icons.MdDateRange size={18} className="text-gray-600" />
                    </div>
                    <input
                      type="text"
                      id="eventTitle"
                      name="eventTitle"
                      required
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    />
                  </div>
                </div>
              </div>
              {/* Description */}
              <div>
                <div className="">
                  <label htmlFor="eventDescription" className="">
                    Description
                  </label>
                  I. Yeah.
                  <input
                    name="eventDescription"
                    id="eventDescription"
                    type="text"
                    onChange={(e) => setEventDescription(e.target.value)}
                    value={eventDescription}
                    required
                    className="block w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    placeholder="Brief description of the event"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
