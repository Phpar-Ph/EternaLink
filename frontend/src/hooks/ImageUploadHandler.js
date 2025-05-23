import { useRef } from "react";
import { useUploadThing } from "../uploadthing/Uploadthing";
import { toast } from "react-toastify";

export const useImageUploadHandlers = ({ setProfilePhoto, setCoverPhoto }) => {
  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const { startUpload: startProfileUpload, isUploading: isProfileUploading } =
    useUploadThing("videoAndImage", {
      onClientUploadComplete: (res) => {
        console.log("Profile upload complete:", res);
        if (res?.[0]?.ufsUrl) {
          setProfilePhoto(res[0].ufsUrl);
          toast.success("Profile photo uploaded successfully");
        }
      },
      onUploadError: (err) => {
        console.error("Profile upload failed:", err);
        toast.error("Profile photo upload failed");
      },
    });

  const { startUpload: startCoverUpload, isUploading: isCoverUploading } =
    useUploadThing("videoAndImage", {
      onClientUploadComplete: (res) => {
        console.log("Cover upload complete:", res);
        if (res?.[0]?.ufsUrl) {
          setCoverPhoto(res[0].ufsUrl);
          toast.success("Cover photo uploaded successfully");
        }
      },
      onUploadError: (err) => {
        console.error("Cover upload failed:", err);
        toast.error("Cover photo upload failed");
      },
    });

  const handleProfileClick = () => profileInputRef.current?.click();
  const handleCoverClick = () => coverInputRef.current?.click();

  const handleProfileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) startProfileUpload(files);
  };

  const handleCoverChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) startCoverUpload(files);
  };

  return {
    profileInputRef,
    coverInputRef,
    handleProfileClick,
    handleCoverClick,
    handleProfileChange,
    handleCoverChange,
    isProfileUploading,
    isCoverUploading,
  };
};
