import { IoShareSocialOutline, IoCalendarOutline } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineComment } from "react-icons/ai";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { memorials } from "../data/PersonData";
import { useParams } from "react-router";

function ViewMemorial() {
  //   const [activeTab, setActiveTab] = useState("about");
  const { id } = useParams();
  const memorial = memorials[id];

  return (
    <div className="w-full bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="w-full h-[40vh] relative rounded-xl overflow-hidden shadow-xl mb-8">
          <img
            src={memorial.coverPhoto}
            alt={memorial.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{memorial.name}</h1>
              <p className="text-xl">{memorial.lifeDates}</p>
            </div>
          </div>
        </div>
        {/* Info & Action Section */}
        <div className="bg-white py-12 px-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <IoCalendarOutline className="w-5 h-5 text-memorial-purple" />
                <span className="text-gray-700">{memorial.birthDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineClockCircle className="w-5 h-5 text-memorial-purple" />
                <span className="text-gray-700">{memorial.passedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineComment className="w-5 h-5 text-memorial-purple" />
                <span className="text-gray-700">
                  {memorial.memories.length} Memories
                </span>
              </div>
            </div>
            <div className="flex space-x-2 mt-6 md:mt-0">
              <button className="text-memorial-purple border border-memorial-purple px-4 py-2 rounded hover:bg-memorial-purple-light flex items-center">
                <IoShareSocialOutline className="w-4 h-4 mr-2" />
                Share
              </button>
              <button className="bg-memorial-purple text-white px-4 py-2 rounded hover:bg-memorial-purple-dark">
                Add Memory
              </button>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-serif font-medium mb-4">About</h2>
            <p className="text-lg leading-relaxed">{memorial.bio}</p>
          </div>

          {/* Gallery */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-medium">Photo Gallery</h2>
              <button className="text-memorial-purple border border-memorial-purple px-4 py-2 rounded hover:bg-memorial-purple-light flex items-center">
                <MdOutlinePhotoLibrary className="w-4 h-4 mr-2" />
                Upload Photos
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {memorial.photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden shadow"
                >
                  <img
                    src={photo}
                    alt={`${memorial.name} photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Memories */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-medium">
                Memories & Tributes
              </h2>
              <button className="bg-memorial-purple text-white px-4 py-2 rounded hover:bg-memorial-purple-dark">
                Share a Memory
              </button>
            </div>
            <div className="space-y-8">
              {memorial.memories.map((memory) => (
                <div key={memory.id} className="bg-gray-50 p-6 rounded-xl">
                  <p className="italic text-lg">&ldquo;{memory.text}&rdquo;</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{memory.author}</p>
                      <p className="text-sm text-gray-600">
                        {memory.relationship}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {new Date(memory.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMemorial;
