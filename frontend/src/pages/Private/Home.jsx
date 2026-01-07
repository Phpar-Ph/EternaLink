


import { useFetchPublicMemorialFeed } from "../../hooks/api/memorial/useMemorialFeed";
import FeedMemorial from "../../components/memorials/FeedMemorial";

const Home = () => {

  const isLoading = false;
  const { data: memorials } = useFetchPublicMemorialFeed();
   
  return (
    <div className="w-full bg-gentle-stone min-h-screen">
      <div className="max-w-7xl mx-auto text-4xl py-20  ">
        {isLoading && (
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold animate-pulse">
            Loading...
          </p>
        )}
        <div className="flex justify-center flex-col pt-20">
          <div>
            <h1 className="text-center text-2xl font-light">Recent memorials shared by our community. Remember and honor your loved ones together.</h1>
          </div>
          <FeedMemorial memorials={memorials} />
        </div>
      </div>
    </div>
  );
};

export default Home;
