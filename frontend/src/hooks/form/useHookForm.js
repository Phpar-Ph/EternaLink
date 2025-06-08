import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formLoginSchema),
  });

  return {
    register,
    handleSubmit,
    isLoading,
  };
};

const formRegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formRegisterSchema),
  });

  return {
    register,
    handleSubmit,
    isLoading,
  };
};
