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
  coverPhoto,
  addEvent,
  message,
}) => {
  try {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    // Filter out empty events and format the event data
    const events = addEvent
      .filter(
        (event) => event.eventDate && event.eventTitle && event.eventDescription
      )
      .map((event) => ({
        eventDate: event.eventDate,
        eventTitle: event.eventTitle.trim(),
        eventDescription: event.eventDescription.trim(),
      }));
    console.log("events : ", events);

    const { data } = await axios.post(`${backendUrl}/api/create/memorial`, {
      name,
      birthDate,
      datePassing,
      location,
      relationship,
      profilePhoto,
      biography,
      event: events,
      message,
      coverPhoto,
    });

    if (data.success) {
      toast.success("Created Memorial successfully");
      await getUserData();

      setProfilePhoto(false);
      navigate("/homepage");
    } else {
      toast.error("Creating Memorial failed");
    }
  } catch (error) {
    alert(error.message);
  }
};
