import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const memorialFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  birthDate: z.string().min(1, "Birth date is required"), // can be changed to date if needed
  datePassing: z.string().min(1, "Date of passing is required"), // same here
  location: z.string().min(1, "Location is required"),
  relationship: z.string().min(1, "Relationship is required"),
  profilePhoto: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  coverPhoto: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  message: z.string().optional(),
});

export const useCreateMemorialHookForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isLoading },
  } = useForm({
    defaultValues: {
      name: "",
      birthDate: "",
      datePassing: "",
      location: "",
      relationship: "",
      profilePhoto: "",
      coverPhoto: "",
      message: "",
    },
    resolver: zodResolver(memorialFormSchema),
  });

  return {
    register,
    handleSubmit,
    isLoading,
    setValue,
  };
};
