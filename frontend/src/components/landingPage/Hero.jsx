import {
  ButtonCtaPrimary,
  ButtonCtaSecondary,
} from "../../components/shared/button/ButtonCTA";

import { useNavigate } from "react-router";

const Hero = () => {
  const heroImage =
    "https://imgs.search.brave.com/z_UyBFw9Gw_0QNsWCgdZYnD0DVrcocXmhV1ogGpPnBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/Y2VuZXJ5LWNlbWV0/ZXJ5LXNvbGRpZXJz/LXdoby1kaWVkLXNl/Y29uZC13b3JsZC13/YXItbm9ybWFuZHlf/MTgxNjI0LTcyMjIu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA";

  const navigate = useNavigate();

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
            <ButtonCtaPrimary
              text={"Create a memorial"}
              navigateTo={"/register"}
            />
            <ButtonCtaSecondary text={"Learn more"} />
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <img
          src={heroImage}
          alt="Memorial"
          className=" rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
