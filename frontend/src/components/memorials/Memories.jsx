
import { useFetchUserMemorial } from "../../hooks/api/memorial/useFetchUserMemorial";

const Memories = () => {
  const { data: memorial } = useFetchUserMemorial();

  return (
    <div>
      {/* Memories */}
      <div className=" bg-soft-lavender p-4">
        <div className="flex   justify-between mb-6">
          <h2 className="text-2xl font-serif font-medium">
            Memories & Tributes
          </h2>
        </div>
        <div>
          <label
            htmlFor="memory"
            className="block text-sm font-medium text-gray-800"
          >
            Share your memory
            <textarea
              name="memory"
              id="memory "
              rows={8}
              // value=""
              // onChange={handleChange}
              autoComplete="off"
              aria-label="Memory text"
              placeholder="write a memory or message..."
              className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
            ></textarea>
          </label>
          <div className="flex justify-between">
            <button className="px-4 py-2 border-2 border-memorial-purple text-gray-800  hover:bg-memorial-purple/90 transition-colors duration-200">
              Add Photos
            </button>
            <button
              type="button"
              className="bg-memorial-purple text-white px-4 py-2 rounded hover:bg-memorial-purple-dark"
            >
              Share a Memory
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {memorial?.memories > 0 &&
            memorial?.memories.map((memory) => (
              <div key={memory.id} className="bg-gray-50 p-6 rounded-xl">
                <p className="italic text-lg">&ldquo;{memory?.text}&rdquo;</p>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{memory.user}</p>
                    <p className="text-sm text-gray-600">
                      {/* {memory.relationship} */}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {/* {new Date(memory?.date).toLocaleDateString()} */}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;
