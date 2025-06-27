import AuthExtras from "../../components/form/AuthExtras";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Icons } from "../../data/IconsData";
import { Link } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ButtonForm from "../../components/shared/button/ButtonForm";
import { useLogin } from "../../hooks/useAuthHook";

const formLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const { isLoggingIn } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate } = useLogin();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: zodResolver(formLoginSchema),
  });

  const onSubmit = (data) => {
    mutate(data);
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
                      disabled={isLoggingIn}
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
                      disabled={isLoggingIn}
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
                    {...register("rememberMe")}
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
              <ButtonForm
                isLoading={isLoggingIn}
                label="Sign in"
                type="submit"
              />
            </form>
            <AuthExtras
              navigate={navigate}
              actionText="Create One"
              message="Don't have account?"
              navigateTo="/register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
