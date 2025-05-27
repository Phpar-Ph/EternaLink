import { useRef } from "react";
import { useUploadThing } from "../uploadthing/Uploadthing";
import { toast } from "react-toastify";

export const useImageUploadHandlers = ({
  setFormData,
  setProfilePhotoReview,
  setCoverPhotoReview,
  setPhotosReview,
}) => {
  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const photosInputRef = useRef();
  //  PROFILE PHOTO
  const { startUpload: startProfileUpload, isUploading: isProfileUploading } =
    useUploadThing("videoAndImage", {
      onClientUploadComplete: (res) => {
        console.log("Profile upload complete:", res);
        if (res?.[0]?.ufsUrl) {
          setFormData((prev) => ({
            ...prev,
            profilePhoto: res[0].ufsUrl,
          }));
          console.log("Profile photo uploaded successfully");
        }
      },
      onUploadError: (err) => {
        console.error("Profile upload failed:", err);
        toast.error("Profile photo upload failed");
      },
    });

  // COVER PHOTO
  const { startUpload: startCoverUpload, isUploading: isCoverUploading } =
    useUploadThing("videoAndImage", {
      onClientUploadComplete: (res) => {
        console.log("Cover upload complete:", res);
        if (res?.[0]?.ufsUrl) {
          setFormData((prev) => ({
            ...prev,
            coverPhoto: res[0].ufsUrl,
          }));
          console.log("Cover photo uploaded successfully");
        }
      },
      onUploadError: (err) => {
        console.error("Cover upload failed:", err);
        toast.error("Cover photo upload failed");
      },
    });

  // PHOTOS
  const { startUpload: startPhotosUpload, isUploading: isPhotosUploading } =
    useUploadThing("videoAndImage", {
      onClientUploadComplete: (res) => {
        console.log("Cover upload complete:", res);
        if (res?.[0]?.ufsUrl) {
          setFormData((prev) => ({
            ...prev,
            photos: res[0].ufsUrl,
          }));
          console.log("Cover photo uploaded successfully");
        }
      },
      onUploadError: (err) => {
        console.error("Cover upload failed:", err);
        toast.error("Cover photo upload failed");
      },
    });

  const handlePhotosClick = () => photosInputRef.current?.click();
  const handleProfileClick = () => profileInputRef.current?.click();
  const handleCoverClick = () => coverInputRef.current?.click();

  const handleProfileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      startProfileUpload(files);
      const file = files[0];
      setProfilePhotoReview(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      startCoverUpload(files);
      const file = files[0];

      setCoverPhotoReview(URL.createObjectURL(file));
    }
  };

  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      startPhotosUpload(files);
      const file = files[0];
      setPhotosReview(URL.createObjectURL(file));
    }
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
    isPhotosUploading,
    handlePhotosChange,
    handlePhotosClick,
  };
};
