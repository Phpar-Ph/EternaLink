import React from "react";
import { useRef } from "react";
import { useUploadThing } from "../../uploadthing/Uploadthing";
import { toast } from "react-toastify";

const useUploadPhotos = () => {
  const photosInputRef = useRef();

  const { startUpload: startPhotosUpload, isUploading: isPhotosUploading } =
    useUploadThing("videoAndImage", {
      onClientUploadComplete: (res) => {
        console.log("Cover upload complete:", res);
        if (res?.[0]?.ufsUrl) {
            
          console.log("Cover photo uploaded successfully");
        }
      },
      onUploadError: (err) => {
        console.error("Cover upload failed:", err);
        toast.error("Cover photo upload failed");
      },
    });

  const handlePhotosClick = () => photosInputRef.current?.click();

  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      startPhotosUpload(files);
      //   const file = files[0];
      //   setPhotosReview(URL.createObjectURL(file));
    }
  };

  return {
    handlePhotosChange,
    photosInputRef,
    handlePhotosClick,
    isPhotosUploading,
  };
};

export default useUploadPhotos;
