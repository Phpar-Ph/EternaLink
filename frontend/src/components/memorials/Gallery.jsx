import { Icons } from "../../data/IconsData";
import { useFetchMemorial } from "../../hooks/api/memorial/useFetchMemorial";
import useUploadPhotos from "../../hooks/uploadImage/useUploadPhotos";

const Gallery = () => {
  const { data: memorial } = useFetchMemorial();
  
  const { handlePhotosClick, handlePhotosChange, photosInputRef } =
    useUploadPhotos();
  return (
    <div>
      {/* Gallery */}
      <div className="bg-soft-lavender p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-medium">Photo Gallery</h2>
          <button
            onClick={handlePhotosClick}
            className="text-amber-50 px-4 py-2 rounded hover:bg-memorial-purple/80 bg-memorial-purple flex items-center"
          >
            <Icons.MdOutlinePhotoLibrary className="w-4 h-4 mr-2" />
            Upload Photos
          </button>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            ref={photosInputRef}
            onChange={handlePhotosChange}
            className="hidden"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {memorial?.photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.link} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
