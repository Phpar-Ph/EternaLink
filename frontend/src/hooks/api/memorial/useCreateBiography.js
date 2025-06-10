import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router";
import { API_ROUTES } from "../../../constants/apiRoutes";
import useAxiosPrivate from "../useAxiosPrivate";
import { useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
export const useCreateBiography = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  //   const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const createBiography = async (data) => {
    const response = await axiosPrivate.post(
      `${API_ROUTES.MEMORIAL.DATA}/${id}/create-biography`,
      {
        biography: data.biography,
      }
    );
    return response.data;
  };

  return useMutation({
    mutationKey: ["memorial", "biography", id],
    mutationFn: createBiography,
    onSuccess: () => {
      //   navigate("/home");
      queryClient.invalidateQueries(["memorial", id]);
      console.log("success");
    },

    onError: (err) => {
      console.log("Failed creating biography", err.message);
    },
  });
};
