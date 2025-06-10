import { Icons } from "../../../data/IconsData";

function ButtonForm({ isLoading, label, type = "submit" }) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`w-full py-3 px-4 rounded-md text-white font-medium bg-memorial-purple hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Icons.FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5" />
          Signing in...
        </span>
      ) : (
        label
      )}
    </button>
  );
}

export default ButtonForm;
