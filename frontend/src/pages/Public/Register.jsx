import AuthExtras from "../../components/form/AuthExtras";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
import { Icons } from "../../data/IconsData";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonForm from "../../components/shared/button/ButtonForm";
import { useSignUp } from "../../hooks/useAuthHook";

const formRegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
});

const Register = () => {
  const navigate = useNavigate();
  const { mutate: signup } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isLogin } = useAuthStore();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formRegisterSchema),
  });

  const onSubmit = (data) => {
    signup(data);
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
                      disabled={isLogin}
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
                      disabled={isLogin}
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
                      disabled={isLogin}
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
                      disabled={isLogin}
                      {...register("confirmPassword")}
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
                    disabled={isLogin}
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
              <ButtonForm
                isLoading={isLogin}
                label="Create Account"
                type="submit"
              />
            </form>
            <AuthExtras
              navigate={navigate}
              actionText="Sign In"
              message="Already have account?"
              navigateTo="/login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
