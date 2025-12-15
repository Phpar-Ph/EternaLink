import {
  ButtonProfileCta,
  ButtonProfileClose,
} from "../../shared/button/ButtonCTA";

const Biography = ({
  memorial,
  openModal,
  isModalOpen,
  closeModal,
  onSubmit,
  handleSubmit,
  register,
  isLoading,
}) => {
  return (
    <div className="bg-gentle-stone rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-playfair font-medium text-gray-800">
          Biography
        </h2>

        <ButtonProfileCta
          text={memorial?.biography?.text ? "Edit Biography" : "Add Biography"}
          action={openModal}
        />
      </div>
      {/* <p className="text-lg leading-relaxed text-gray-700">
                {memorial?.biography || "No biography added yet."}
              </p> */}

      {isModalOpen && (
        <div className="">
          <div className="" onClick={closeModal} />

          <div className="relative z-50 w-full bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}

            {/* Body */}
            <div className="px-6 py-4">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label
                  htmlFor="biography"
                  className="block text-sm font-medium text-gray-800"
                >
                  Biography
                  <textarea
                    name="biography"
                    id="biography "
                    rows={8}
                    {...register("biography")}
                    autoComplete="off"
                    disabled={isLoading}
                    aria-label="Memory text"
                    placeholder="write a biography..."
                    className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                  ></textarea>
                </label>
                {/* Footer / Close Button */}
                <div className="px-6 py-4 border-t flex justify-between">
                  <ButtonProfileCta
                    type="submit"
                    text="Submit"
                    disabled={isLoading}
                  />
                  <ButtonProfileClose
                    text="Close"
                    action={closeModal}
                    disabled={isLoading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {!isModalOpen && (
        <div className="p-4 font-lato text-gray-800">
          {memorial?.biography?.text ? (
            <p className="whitespace-pre-wrap">{memorial.biography.text}</p>
          ) : (
            <p className="text-gray-500 italic">No biography added yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Biography;
