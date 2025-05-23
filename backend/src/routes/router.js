import { createUploadthing } from "uploadthing/server";

const f = createUploadthing({
  errorFormatter: (err) => {
    console.log("Error uploading file", err.message);
    console.log("  - Above error caused by:", err.cause);

    return { message: err.message };
  },
});

export const uploadRouter = {
  videoAndImage: f(
    {
      image: {
        maxFileSize: "4MB",
        maxFileCount: 4,
      },
      video: {
        maxFileSize: "16MB",
      },
      blob: { maxFileSize: "8GB", maxFileCount: 10 },
    },
    {
      awaitServerData: true,
    }
  )
    .middleware(({ files }) => {
      files;
      // ^?
      return {
        uploadedBy: "fake-user-id-213",
      };
    })

    .onUploadError(({ error, fileKey }) => {
      console.log("upload error", { message: error.message, fileKey });
      throw error;
    })
    .onUploadComplete(async ({ metadata, file }) => {
      //   try {
      //     // Create new file document in database
      //     const newFile = await File.create({
      //       file: [
      //         {
      //           fileLink: file.ufsUrl,
      //           imageKey: file.key,
      //           name: file.name,
      //           size: file.size,
      //           // uploadedBy: metadata.uploadedBy,
      //         },
      //       ],
      //     });

      //     console.log("File saved to database:", newFile);

      //     return {
      //       success: true,
      //       fileId: newFile._id,
      //       url: file.ufsUrl,
      //     };
      //   } catch (error) {
      //     console.error("Database save error:", error);
      //     throw new Error("Failed to save file to database");
      //   }
      console.log(metadata, file);
    }),
};

export default uploadRouter;
