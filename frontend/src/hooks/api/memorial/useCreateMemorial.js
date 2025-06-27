import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { API_ROUTES } from "../../../constants/apiRoutes";
import useAxiosPrivate from "../useAxiosPrivate";
import { useStoreMemorial } from "../../../store/useStoreMemorial";

export const useCreateMemorial = () => {
  const navigate = useNavigate();
  const setIsCreatingMemorial = useStoreMemorial(
    (state) => state.setIsCreatingMemorial
  );
  const axiosPrivate = useAxiosPrivate();
  const createMemorial = async (formData) => {
    setIsCreatingMemorial(true);
    try {
      const response = await axiosPrivate.post(
        API_ROUTES.MEMORIAL.CREATE,
        {
          name: formData.name,
          birthDate: formData.birthDate,
          datePassing: formData.datePassing,
          location: formData.location,
          relationship: formData.relationship,
          profilePhoto: formData.profilePhoto,
          coverPhoto: formData.coverPhoto,
          message: formData.message,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log("Error creating memorial", err);
    } finally {
      setIsCreatingMemorial(false);
    }
  };
  return useMutation({
    mutationKey: ["memorial"],
    mutationFn: createMemorial,
    onSuccess: () => {
      navigate("/home");
      console.log("success");
    },
    onError: () => {
      console.log("Failed creating memorial");
    },
  });
};




