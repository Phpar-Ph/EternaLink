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
  biography,
  eventDescription,
  eventTitle,
  eventDate,
  coverPhoto,
  message,
}) => {
  try {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    // Create event array only if all event fields are present
    const event =
      eventTitle && eventDate && eventDescription
        ? [
            {
              eventTitle,
              eventDate,
              eventDescription,
            },
          ]
        : [];
    const { data } = await axios.post(`${backendUrl}/api/create/memorial`, {
      name,
      birthDate,
      datePassing,
      location,
      relationship,
      profilePhoto,
      biography,
      event,
      message,
      coverPhoto,
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
