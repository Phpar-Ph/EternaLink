import {
  ButtonCtaPrimary,
  ButtonCtaSecondary,
} from "../shared/button/ButtonCTA";
import { heroImage } from "../../constants/heroImage";

const Hero = ({ onPrimaryCtaClick }) => {
  // hero image in landingpage
  const hero = heroImage;

  return (
    <div className="flex flex-row items-center gap-4 py-20">
      <div className="flex-1 text-center lg:text-left">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-playfair tracking-tight font-bold text-gray-800">
            Honor their memory.
          </h1>
          <h2 className="text-4xl font-playfair lg:text-5xl font-bold tracking-tight text-gray-800">
            Preserve their legacy.
          </h2>
          <p className="text-xl lg:text-2xl font-lato text-gray-600 max-w-2xl">
            Create beautiful digital memorials for your loved ones. Share
            memories, photos, and stories that celebrate their life.
          </p>
          <div className="flex flex-row font-lato font-bold gap-4 justify-center lg:justify-start ">
            {/* Button CTA Primary */}
            <ButtonCtaPrimary
              text={"Create a memorial"}
              onClick={onPrimaryCtaClick}
            />

            <ButtonCtaSecondary text={"Learn more"} />
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <img
          src={hero}
          alt="Memorial"
          className=" rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
