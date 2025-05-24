import { Icons } from "../../data/IconsData";
const ThirdStep = ({ biography, setBiography, addEvent, setAddEvent }) => {
  const addEventClick = () => {
    console.log("Clicked");
    console.log(addEvent);
    setAddEvent((prev) => [
      ...prev,
      { eventDate: "", eventTitle: "", eventDescription: "", id: Date.now() },
    ]);
  };
  const removeEvent = (id) => {
    setAddEvent((prev) => prev.filter((event) => event.id !== id));
  };

  const handleChange = (id, field, value) => {
    setAddEvent((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, [field]: value } : event
      )
    );
  };

  return (
    <div>
      <div>
        {/* Biography */}
        <div>
          <label
            htmlFor="biography"
            className="block text-sm font-medium text-gray-800"
          >
            Biography
          </label>
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
              <h2 className="text-2xl font-playfair text-gray-800 font-semibold">
                Timeline Events
              </h2>
              <button
                type="button"
                onClick={addEventClick}
                className="bg-memorial-purple font-lato font-bold hover:bg-memorial-purple/80 px-4 py-2 text-lg text-amber-50 rounded-2xl"
              >
                Add Events
              </button>
            </div>
            {/* Date and events .map() */}
            {addEvent.map((event) => {
              return (
                <div
                  className="mb-4 bg-gentle-stone rounded-md  p-4  space-y-4"
                  key={event.id}
                >
                  {/* DATE AND TITLE */}
                  <div className="flex justify-between gap-4 ">
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
                          <Icons.MdDateRange
                            size={18}
                            className="text-gray-600"
                          />
                        </div>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          required
                          value={event.eventDate}
                          onChange={(e) =>
                            handleChange(event.id, "eventDate", e.target.value)
                          }
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
                        <input
                          type="text"
                          id="eventTitle"
                          name="eventTitle"
                          required
                          value={event.eventTitle}
                          onChange={(e) =>
                            handleChange(event.id, "eventTitle", e.target.value)
                          }
                          className="block w-full px-3 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                          placeholder="event title"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <div>
                    <div className="">
                      <label
                        htmlFor="eventDescription"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Description
                      </label>
                      <input
                        name="eventDescription"
                        id="eventDescription"
                        type="text"
                        onChange={(e) =>
                          handleChange(
                            event.id,
                            "eventDescription",
                            e.target.value
                          )
                        }
                        value={event.eventDescription}
                        required
                        className="block w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                        placeholder="Brief description of the event"
                      />
                    </div>
                  </div>
                  <div className="justify-end flex ">
                    <button
                      className="font-3xl font-bold bg-rosewood hover:bg-rosewood/80 px-4 py-2 text-amber-50 rounded-xl   "
                      onClick={() => removeEvent(event.id)}
                    >
                      {" "}
                      remove
                    </button>
                  </div>
                </div>
              );
            })}
            {/* temporary */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
