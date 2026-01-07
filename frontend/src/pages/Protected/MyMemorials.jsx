import React from "react";
import AppNavLink from "../../components/shared/AppNavLink";
function MyMemorials() {
  return (
    <div>
      <ul className="flex gap-10 text-2xl justify-center">
        <li>
          <AppNavLink path={"post"} name={"Post"} />
        </li>
        <li>
          <AppNavLink path={"your-memories"} name={"Memories"} />
        </li>
        <li>
          <AppNavLink path={"collection"} name={"Collection"} />
        </li>
      </ul>
    </div>
  );
}

export default MyMemorials;
