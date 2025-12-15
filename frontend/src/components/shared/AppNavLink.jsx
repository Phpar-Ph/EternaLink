import { NavLink } from "react-router";

function AppNavLink({ path, name }) {
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `text-lg font-bold transition-all hover:text-gray-600 ${
            isActive ? "text-memorial-purple" : "text-gray-800"
          }`
        }
      >
        {name}
      </NavLink>
    </div>
  );
}

export default AppNavLink;
