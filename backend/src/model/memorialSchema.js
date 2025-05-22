import mongoose from "mongoose";

// --- Memorial Schema ---
const memorialSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    datePassing: { type: Date, required: true },
    location: { type: String, required: true },
    // biography: { type: String },
    // profilePhoto: { type: String },
    // coverPhoto: { type: String },
    // photos: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // comments: [
    //   {
    //     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //     comment: { type: String },
    //     createdAt: { type: Date, default: Date.now },
    //   },
    // ],
    // reactions: [
    //   {
    //     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //     type: {
    //       type: String,
    //       enum: ["heart", "candle", "flower", "prayer"],
    //       default: "heart",
    //     },
    //     createdAt: { type: Date, default: Date.now },
    //   },
    // ],
  },
  { timestamps: true }
);

const Memorial =
  mongoose.models.Memorial || mongoose.model("Memorial", memorialSchema);

export default Memorial;
