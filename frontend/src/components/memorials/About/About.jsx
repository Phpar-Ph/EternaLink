import { useState } from "react";
import { useFetchUserMemorial } from "../../../hooks/api/memorial/useFetchUserMemorial";
import {
  ButtonProfileCta,
  ButtonProfileClose,
} from "../../shared/button/ButtonCTA";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBiography } from "../../../hooks/api/memorial/useCreateBiography";
import Biography from "./Biography";
import Details from "./Details";
import Photos from "./Photos";

const formSchema = z.object({
  biography: z.string().optional(),
});

const About = () => {
  const { data: memorial, isLoading } = useFetchUserMemorial();
  const { mutate } = useCreateBiography();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      biography: memorial?.biography?.text || "",
    },
    resolver: zodResolver(formSchema),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    reset({ biography: memorial?.biography?.text || "" });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const onSubmit = (data) => {
    mutate(data);
    console.log("click", data);
    setIsModalOpen(false);
  };

  // const {handlePhotosClick} = useImageUploadHandlers()

  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);
  const openPhotosModal = () => {
    setIsPhotosModalOpen(true);
  };

  const closePhotosModal = () => setIsPhotosModalOpen(false);

  const onPhotosSubmit = (data) => {
    mutate(data);
    console.log("click", data);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-soft-lavender p-6 rounded-b-xl shadow-md">
        {/* About Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Biography */}
            <Biography
              memorial={memorial}
              openModal={openModal}
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              register={register}
              isLoading={isLoading}
            />

            {/* Recent Photos */}
            <Photos
              memorial={memorial}
              setIsPhotosModalOpen={setIsPhotosModalOpen}
              isPhotosModalOpen={isPhotosModalOpen}
              openPhotosModal={openPhotosModal}
              closePhotosModal={closePhotosModal}
              onPhotosSubmit={onPhotosSubmit}
            />
          </div>

          {/* Details Sidebar */}
          <Details memorial={memorial} />
        </div>
      </div>
    </div>
  );
};

export default About;
