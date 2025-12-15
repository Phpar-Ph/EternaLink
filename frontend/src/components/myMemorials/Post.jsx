import React from "react";
import FeedMemorial from "../memorials/FeedMemorial";
import { useFetchPublicMemorialFeed } from "../../hooks/api/memorial/useMemorialFeed";
function Post() {
  const { data: memorials } = useFetchPublicMemorialFeed();
  
  return (
    <div>
      <FeedMemorial memorials={memorials} />
    </div>
  );
}

export default Post;
