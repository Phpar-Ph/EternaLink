import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

const BACKEND_URL = "http://localhost:5000";
const initOpts = {
  url: BACKEND_URL,
};

export const UploadButton = generateUploadButton(initOpts);
export const UploadDropzone = generateUploadDropzone(initOpts);
// eslint-disable-next-line react-refresh/only-export-components
export const { useUploadThing } = generateReactHelpers(initOpts);
