import LoginForm from "../../components/form/LoginForm";
import { useLoginForm } from "../../hooks/form/useHookForm";
import AuthExtras from "../../components/form/AuthExtras";
import { useNavigate } from "react-router";
import { useLoginUsers } from "../../hooks/api/useUserAuth";
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, isLoading } = useLoginForm();
  const { mutate } = useLoginUsers();

  const onSubmit = (data) => {
    console.log("click");
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
            <LoginForm
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              register={register}
            />
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
