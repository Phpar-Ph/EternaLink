import React, { useState, useContext } from "react";

import { Link } from "react-router";
import { useNavigate } from "react-router";
import { AppContent } from "../context/AppContentProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { Icons } from "../data/IconsData";
const Login = () => {
  1;
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const { backendUrl, setIsLogin, getUserData } = useContext(AppContent);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/login", {
        email,
        password,
        rememberMe,
      });

      if (data.success) {
        setIsLoading(true);

        getUserData();
        const nextLoginState = true;
        setIsLogin(nextLoginState);
        if (nextLoginState) {
          navigate("/homepage");
        } else {
          navigate("/");
        }
        toast.success("Login successful!");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      const message =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(message);
    }
  };

  return (
    <div className="w-full h-screen bg-gentle-stone">
      <div className="max-w-7xl mx-auto px-4 py-20 h-full ">
        <div className="flex justify-center items-center  h-full">
          <div className="w-full max-w-md bg-soft-lavender p-8 rounded-xl shadow-md">
            <p className="text-2xl font-bold text-center text-gray-800">
              Sign in to your account
            </p>
            <form
              className="space-y-6 mt-6"
              onSubmit={onSubmitHandler}
              autoComplete="on"
              noValidate
            >
              {/* Email Field */}
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute bottom-0 p-3 flex items-center pointer-events-none">
                    <Icons.FaUser size={18} className="text-gray-600" />
                  </div>
                  <label
                    htmlFor="login-email"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Email address
                    <input
                      id="login-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                      placeholder="you@example.com"
                      aria-label="Email address"
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
                    htmlFor="login-password"
                    className="block text-sm font-medium text-deep-charcoal"
                  >
                    Password
                    <input
                      id="login-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      aria-label="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
                    />
                  </label>

                  <div className="absolute bottom-0 p-3 right-0 flex items-center">
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

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="login-remember-me"
                  className="flex items-center text-sm text-gray-800"
                >
                  <input
                    id="login-remember-me"
                    type="checkbox"
                    name="remember-me"
                    className="h-4 w-4 text-royal-blue border-gray-300 rounded"
                    onChange={(e) => setRememberMe(e.target.checked)}
                    checked={rememberMe}
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-rosewood hover:underline"
                  tabIndex={0}
                >
                  Forgot password?
                </Link>
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
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
            <div className="mt-6">
              <p className="text-sm text-gray-800 text-center">
                Don't have an account?{" "}
                <span
                  className=" text-rosewood hover:underline hover:cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Create one
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

export default Login;
