import { Icons } from "../../../data/IconsData";

function ButtonGoogle({googleBtnClick}) {
  return (
    <div>
      <button
        type="button"
        className="flex justify-center items-center py-2 px-4 rounded-md bg-white text-deep-charcoal hover:bg-gray-100 shadow-sm border border-gray-300"
        onClick={googleBtnClick}
      >
        <Icons.FaGoogle className="w-5 h-5 mr-2" /* Google Icon */ />
        Google
      </button>
    </div>
  );
}

export default ButtonGoogle;
