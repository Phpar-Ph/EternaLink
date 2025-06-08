import { Icons } from "../../data/IconsData";

function ButtonGoogle() {
  return (
    <div>
      <button
        type="button"
        className="flex justify-center items-center py-2 px-4 rounded-md bg-white text-deep-charcoal hover:bg-gray-100 shadow-sm border border-gray-300"
      >
        <Icons.FaGoogle className="w-5 h-5 mr-2" /* Google Icon */ />
        Google
      </button>
    </div>
  );
}

export default ButtonGoogle;
