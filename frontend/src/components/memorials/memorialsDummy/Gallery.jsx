import { Icons } from "../../../data/IconsData";

const Gallery = ({ activeTab, memorial }) => {
  return (
    <div>
      {/* Gallery */}
      {activeTab === "gallery" && (
        <div className="bg-soft-lavender p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-medium">Photo Gallery</h2>
            <button className="text-memorial-purple border border-memorial-purple px-4 py-2 rounded hover:bg-memorial-purple-light flex items-center">
              <Icons.MdOutlinePhotoLibrary className="w-4 h-4 mr-2" />
              Upload Photos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {memorial.photos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.link} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
