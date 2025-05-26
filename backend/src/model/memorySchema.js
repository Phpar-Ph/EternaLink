import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  memoriesPhoto: [
    {
      url: {
        type: String,
        required: true,
      },
      fileName: {
        type: String,
        required: true,
      },
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Memories =
  mongoose.models.Memories || mongoose.model("Memories", memorySchema);

export default Memories;
