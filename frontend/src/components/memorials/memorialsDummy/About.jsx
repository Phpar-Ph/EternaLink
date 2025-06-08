const About = ({
  activeTab,
  isModalOpen,
  closeModal,
  memorials,
  openModal,
}) => {
  return (
    <div className="bg-soft-lavender p-6 rounded-b-xl shadow-md">
      {/* About Section */}
      {activeTab === "about" && (
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Biography */}
            <div className="bg-gentle-stone rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-playfair font-medium text-gray-800">
                  Biography
                </h2>
                {/* MODAL */}
                <div>
                  {isModalOpen && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center">
                      <div
                        className="absolute inset-0 bg-black/60 bg-opacity-50"
                        onClick={closeModal}
                      />

                      <div className="relative z-50 w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="px-6 py-4 border-b">
                          <h2 className="text-xl font-semibold">Biography</h2>
                        </div>

                        {/* Body */}
                        <div className="px-6 py-4">
                          <label
                            htmlFor="biography"
                            className="block text-sm font-medium text-gray-800"
                          >
                            Biography
                            <textarea
                              name="biography"
                              id="biography "
                              rows={8}
                              //   value={formData.biography.text}
                              //   onChange={handleChange}
                              autoComplete="off"
                              aria-label="Memory text"
                              placeholder="write a biography..."
                              className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorials-purple/80"
                            ></textarea>
                          </label>
                        </div>

                        {/* Footer / Close Button */}
                        <div className="px-6 py-4 border-t flex justify-between">
                          <button
                            // onClick={submitHandler}
                            className="px-4 py-2 bg-memorial-purple text-white rounded-lg hover:bg-memorial-purple/80 transition"
                          >
                            Add
                          </button>
                          <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-rosewood text-white rounded-lg hover:bg-rosewood/80 transition"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={openModal}
                  className="px-4 py-2 bg-memorial-purple text-white rounded-xl hover:bg-memorial-purple/90 transition-colors duration-200"
                >
                  Add biography
                </button>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                {memorials.bio || "No biography added yet."}
              </p>
            </div>

            {/* Recent Photos */}
            <div className="bg-gentle-stone rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-playfair font-medium text-gray-800">
                  Recent Photos
                </h2>
                <button className="px-4 py-2 bg-memorial-purple text-white rounded-xl hover:bg-memorial-purple/90 transition-colors duration-200">
                  Add Photos
                </button>
              </div>
              {/* Photo grid here */}
              <div className="grid grid-cols-4">
                {memorials.photos.map((photo, index) => (
                  <div key={index}>
                    <img
                      src={photo.link}
                      alt={`Memorial photo ${index + 1}`}
                      className="
                  h-40 w-40 object-contain
                  "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="col-span-1 bg-gentle-stone rounded-2xl">
            <div className=" rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-playfair font-medium text-gray-800 mb-6 text-center">
                Details
              </h2>
              <ul className="space-y-4">
                {[
                  { label: "Birth Date", value: memorials.birthDate },
                  { label: "Passed Away", value: memorials.passedDate },
                  {
                    label: "Resting Place",
                    value: memorials.location,
                  },
                ].map(({ label, value }) => (
                  <li key={label} className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-600">{label}</span>
                    <span className="text-gray-800 font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
