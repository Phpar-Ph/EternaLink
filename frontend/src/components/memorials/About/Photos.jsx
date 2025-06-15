import { ButtonProfileCta } from "../../shared/button/ButtonCTA";


const Photos = ({ memorial, openPhotosModal }) => {
  return (
    <div className="bg-gentle-stone rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-playfair font-medium text-gray-800">
          Recent Photos
        </h2>
        <ButtonProfileCta text="Add Photos" action={openPhotosModal} />
      </div>
      {/* Photo grid here */}

      <div className="grid grid-cols-4">
        {memorial?.photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.link}
              alt=""
              className="
                  h-40 w-40 object-contain
                  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
