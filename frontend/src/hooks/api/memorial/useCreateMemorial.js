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
      return response.data;
  };
  return useMutation({
    mutationFn: createMemorial,
    onMutate: ()=>{
      setIsCreatingMemorial(true)
    },
    onSuccess: (data) => {
      setIsCreatingMemorial(false)
      console.log("Success creating memorial", data);
       navigate("/home");
    },
    onError: (error) => {
      console.log("Failed creating memorial", error);
    },
  });
};




