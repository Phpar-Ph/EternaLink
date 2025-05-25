import { useState, React, useContext } from "react";
import { useNavigate } from "react-router";
import { AppContent } from "../context/AppContentProvider";
import axios from "axios";
import { toast } from "react-toastify";

import { Link } from "react-router";
import { Icons } from "../data/IconsData";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { backendUrl, setIsLogin, getUserData } = useContext(AppContent);

  // Register
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (password === confirmPassword) {
        axios.defaults.withCredentials = true;
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          getUserData();
          setIsLoading(true);
          const nextLoginState = true;
          setIsLogin(nextLoginState);
          if (nextLoginState) {
            navigate("/homepage");
          } else {
            navigate("/");
          }
          toast.success("Register successfully");
        } else {
          toast.error(data.message || "an error getUserData");
        }
      } else {
        toast.error("Passwords do not match");
      }
    } catch (error) {
      toast.error(error.message || "an error getUserData");
    }
  };
  return (
    <div className="w-full h-screen bg-gentle-stone">
      <div className="max-w-7xl mx-auto px-4 py-20 h-full ">
        <div className="flex justify-center items-center  h-full">
          <div className="w-full max-w-md bg-soft-lavender p-8 rounded-xl shadow-md">
            <p className="text-2xl font-bold text-center text-gray-800">
              Create your account
            </p>
            <form
              className="space-y-6 mt-6"
              onSubmit={onSubmitHandler}
              autoComplete="on"
            >
              {/* Name Field */}
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                    <Icons.FaUser size={18} className="text-gray-600" />
                  </div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Full Name
                    <input
                      name="name"
                      id="name"
                      type="text"
                      autoComplete="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      disabled={isLoading}
                      className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                      placeholder="Enter Full Name "
                    />
                  </label>
                </div>
              </div>
              {/* Email Field */}
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute p-3 bottom-0 flex items-center pointer-events-none">
                    <Icons.MdEmail size={18} className="text-gray-600" />
                  </div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Email address
                    <input
                      name="email"
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                    <Icons.FaLock size={18} className="text-gray-600" />
                  </div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-deep-charcoal"
                  >
                    Password
                    <input
                      name="password"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      disabled={isLoading}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    />
                  </label>

                  <div className="absolute bottom-0 right-0 p-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-800 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <Icons.FaEyeSlash size={18} />
                      ) : (
                        <Icons.FaEye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {/* Confirm Password */}
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                    <Icons.FaLock size={18} className="text-gray-600" />
                  </div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-deep-charcoal"
                  >
                    Confirm Password
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      disabled={isLoading}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    />
                  </label>

                  <div className="absolute bottom-0 p-3 right-0 flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-gray-800 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <Icons.FaEyeSlash size={18} />
                      ) : (
                        <Icons.FaEye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    disabled={isLoading}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className=" text-gray-800">
                    I agree to the{" "}
                    <Link to="/terms" className="text-rosewood hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-rosewood hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-md text-white font-medium bg-memorial-purple hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Icons.FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Creating account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
            <div className="mt-6">
              <p className="text-sm text-gray-800 text-center">
                Already have an account?{" "}
                <span
                  className=" text-rosewood hover:underline hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Sign in
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
              <div className="grid grid-cols-2 gap-3">
                {/* Google Button */}
                <button
                  type="button"
                  className="flex justify-center items-center py-2 px-4 rounded-md bg-white text-deep-charcoal hover:bg-gray-100 shadow-sm border border-gray-300"
                >
                  <Icons.FaGoogle className="w-5 h-5 mr-2" /* Google Icon */ />
                  Google
                </button>

                {/* Facebook Button */}
                <button
                  type="button"
                  className="flex justify-center items-center py-2 px-4 rounded-md bg-white text-deep-charcoal hover:bg-gray-100 shadow-sm border border-gray-300"
                >
                  <Icons.FaFacebook
                    className="w-5 h-5 mr-2" /* Facebook Icon */
                  />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
