import { useState } from "react";
import { Icons } from "../../data/IconsData";
import { Link } from "react-router";

import ButtonForm from "../shared/button/ButtonForm";
function RegisterForm({ register, handleSubmit, isLoading, onSubmit }) {
  // const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <form
      className="space-y-6 mt-6"
      onSubmit={handleSubmit(onSubmit)}
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
              {...register("name")}
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
              {...register("email")}
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
              {...register("password")}
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
              {...register("confirmPassword")}
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-memorial-purple focus:border-memorial-purple/80"
            />
          </label>

          <div className="absolute bottom-0 p-3 right-0 flex items-center">
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
            <Link to="/privacy" className="text-rosewood hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <ButtonForm isLoading={isLoading} label="Create Account" type="submit" />
    </form>
  );
}

export default RegisterForm;
