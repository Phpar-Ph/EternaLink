import FeedMemorial from "../memorials/FeedMemorial";

import { useFetchMyMemorialPost } from "../../hooks/api/fetchMyMemorial/useFetchMyMemorialPost";
import { useAuthStore } from "../../store/useAuthStore";
function Post() {
  const { userData } = useAuthStore();

  const id = userData.user.userId ;

  const { data: MyMemorialPost } = useFetchMyMemorialPost(id);
  console.log("User Data : ", userData.user.userId);
 
  return (

    <div className="w-full">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-medium">Memorials You’ve Posted</h1>
      </div>
      <FeedMemorial memorials={MyMemorialPost} />
    </div>
  );
}

export default Post;
