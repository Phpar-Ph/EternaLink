import axios from "axios";
import { toast } from "react-toastify";

// Make it reusable by passing needed values as arguments
export const submitMemorial = async ({
  e,
  backendUrl,
  getUserData,
  navigate,
  formData,
}) => {
  try {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    // Show loading toast
    const loadingToast = toast.loading("Creating memorial...");

    const { data } = await axios.post(
      `${backendUrl}/api/create/memorial`,
      formData
    );

    if (data.success) {
      toast.update(loadingToast, {
        render: "Memorial created successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      await getUserData();
      navigate("/homepage");
    } else {
      toast.update(loadingToast, {
        render: data.message || "Creating Memorial failed",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.error("Memorial creation error:", error);
    toast.error(error.response?.data?.message || "Failed to create memorial");
  }
};
