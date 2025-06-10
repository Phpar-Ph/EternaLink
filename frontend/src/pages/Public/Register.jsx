import { useRegisterForm } from "../../hooks/form/useHookForm";
import RegisterForm from "../../components/form/RegisterForm";
import AuthExtras from "../../components/form/AuthExtras";
import { useNavigate } from "react-router";
import { useRegister } from "../../hooks/api/useUserAuth";
const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useRegisterForm();
  const { mutate, isLoading } = useRegister();

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
              Create your account
            </p>

            <RegisterForm
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              register={register}
            />
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
