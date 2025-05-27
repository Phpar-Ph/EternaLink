import { Icons } from "../../data/IconsData";
const ThirdStep = ({ formData, setFormData, handleChange }) => {
  return (
    <div>
      <div>
        {/* Biography */}
        <div>
          <label
            htmlFor="biography"
            className="block text-sm font-medium text-gray-800"
          >
            Biography
            <textarea
              name="biography"
              id="biography"
              rows={8}
              type="text"
              value={formData.biography}
              onChange={handleChange}
              placeholder="Share the story of your loved one's life..."
              autoComplete="off"
              spellCheck="true"
              aria-label="Biography text"
              maxLength={2000}
              className="block w-full p-4 max-h-100 h-40 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
            ></textarea>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Write about their life, achievements, personality, and what made
              them special.{" "}
              <span className="text-gray-400 ml-1">
                (Maximum 2000 characters)
              </span>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
