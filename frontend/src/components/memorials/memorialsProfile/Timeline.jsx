// import { Icons } from "../../data/IconsData";

const Timeline = () => {
  return (
    <div>
      {/* Events Timeline */}
      <div>
        <div className="bg-soft-lavender">
          <div className="py-4">
            <div className="flex w-full justify-between p-4">
              <h2 className="text-2xl font-playfair text-gray-800 font-semibold">
                Timeline Events
              </h2>
              <button
                type="button"
                //   onClick={addEventClick}
                className="bg-memorial-purple font-lato font-bold hover:bg-memorial-purple/80 px-4 py-2 text-lg text-amber-50 rounded-2xl"
              >
                Add Events
              </button>
            </div>

            {/* Date and events .map() */}

            {/* End .map */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

//  {formData.events.map((event) => (
//                 <div className="mb-4 rounded-md p-4 space-y-4" key={event.id}>
//                   {/* DATE AND TITLE */}
//                   <div className="flex justify-between gap-4">
//                     {/* Date */}
//                     <div className="w-full">
//                       <div className="mt-1 relative rounded-md shadow-sm">
//                         <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
//                           <Icons.MdDateRange
//                             size={18}
//                             className="text-gray-600"
//                           />
//                         </div>
//                         <label
//                           htmlFor="eventDate"
//                           className="block text-sm font-medium text-gray-800"
//                         >
//                           Date
//                           <input
//                             type="date"
//                             id="eventDate"
//                             name="eventDate"
//                             required
//                             // value={event.eventDate}
//                             // onChange={(e) =>
//                             //   updateEventHandleChange(
//                             //     event.id,
//                             //     "eventDate",
//                             //     e.target.value
//                             //   )
//                             // }
//                             className="block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
//                             autoComplete="off"
//                             aria-label="Event date"
//                           />
//                         </label>
//                       </div>
//                     </div>

//                     {/* Title */}
//                     <div className="w-full">
//                       <div className="mt-1 relative rounded-md shadow-sm">
//                         <label
//                           htmlFor="eventTitle"
//                           className="block text-sm font-medium text-gray-800"
//                         >
//                           Title
//                           <input
//                             type="text"
//                             id="eventTitle"
//                             name="eventTitle"
//                             required
//                             // value={event.eventTitle}
//                             // onChange={(e) =>
//                             //   updateEventHandleChange(
//                             //     event.id,
//                             //     "eventTitle",
//                             //     e.target.value
//                             //   )
//                             // }
//                             className="block w-full px-3 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
//                             placeholder="event title"
//                             autoComplete="off"
//                             maxLength={100}
//                             aria-label="Event title"
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <div>
//                     <label
//                       htmlFor="eventDescription"
//                       className="block text-sm font-medium text-gray-800"
//                     >
//                       Description
//                       <input
//                         name="eventDescription"
//                         id="eventDescription"
//                         type="text"
//                         // onChange={(e) =>
//                         //   updateEventHandleChange(
//                         //     event.id,
//                         //     "eventDescription",
//                         //     e.target.value
//                         //   )
//                         // }
//                         // value={event.eventDescription}
//                         required
//                         className="block w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
//                         placeholder="Brief description of the event"
//                         autoComplete="off"
//                         maxLength={500}
//                         aria-label="Event description"
//                         spellCheck="true"
//                       />
//                     </label>
//                   </div>

//                   {/* Remove button */}
//                   <div className="justify-end flex">
//                     <button
//                       className="text-3xl font-bold bg-rosewood hover:bg-rosewood/80 px-4 py-2 text-amber-50 rounded-xl"
//                       onClick={() => removeEvent(event.id)}
//                       aria-label="Remove event"
//                     >
//                       remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
