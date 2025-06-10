import ButtonGoogle from "../shared/button/ButtonGoogle";
import ButtonFacebook from "../shared/button/ButtonFacebook";
import { useNavigate } from "react-router";
function AuthExtras({ actionText, message, navigateTo }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-6">
        <p className="text-sm text-gray-800 text-center">
          {message}{" "}
          <span
            className=" text-rosewood hover:underline hover:cursor-pointer"
            onClick={() => navigate(navigateTo)}
          >
            {actionText}
          </span>
        </p>
      </div>
      {/* Social Logins */}
      <div className="mt-6">
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-soft-lavender px-2 text-muted-gray">
              Or continue with
            </span>
          </div>
        </div>
        <div className="flex justify-between px-8">
          {/* Google Button */}
          <ButtonGoogle />

          {/* Facebook Button */}
          <ButtonFacebook />
        </div>  
      </div>
    </div>
  );
}

export default AuthExtras;
