import axios from "axios";
import { toast } from "react-toastify";

// Make it reusable by passing needed values as arguments
export const submitMemorial = async ({
  e,
  name,
  birthDate,
  datePassing,
  location,
  relationship,
  profilePhoto,
  backendUrl,
  getUserData,
  navigate,
  setProfilePhoto,
}) => {
  try {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    const { data } = await axios.post(`${backendUrl}/api/create/memorial`, {
      name,
      birthDate,
      datePassing,
      location,
      relationship,
      profilePhoto,
    });

    if (data.success) {
      toast.success("Created Memorial successfully");
      setTimeout(() => {
        getUserData();
        setProfilePhoto(false);
        navigate("/homepage");
      }, 2000);
    } else {
      toast.error("Creating Memorial failed");
    }
  } catch (error) {
    alert(error.message);
  }
};
