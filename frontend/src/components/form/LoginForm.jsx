import { useState } from "react";
import ButtonForm from "../button/ButtonForm";
import { Icons } from "../../data/IconsData";
import { Link } from "react-router";

const LoginForm = ({ register, handleSubmit, isLoading, onSubmit }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  


  return (
    <form
      className="space-y-6 mt-6"
      onSubmit={handleSubmit(onSubmit)}
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
              {...register("email")}
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
              {...register("password")}
              aria-label="Password"
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
      <ButtonForm isLoading={isLoading} label="Sign in" type="submit" />
    </form>
  );
};

export default LoginForm;
