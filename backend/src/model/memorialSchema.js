import mongoose from "mongoose";

// --- Memorial Schema ---
const memorialSchema = mongoose.Schema(
  {
    // Initial creation of memorial  Basic Information
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    datePassing: { type: Date, required: true },
    location: { type: String, required: true },
    relationship: { type: String, required: true },
    profilePhoto: { type: String },
    coverPhoto: { type: String },
    message: { type: String, required: true },
    biography: {
      text: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
    // Photos Gallery
    photos: [
      {
        url: {
          type: String,
          required: true,
        },
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    // Memories
    memories: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        text: { type: String, required: true, trim: true },
        images: [{ url: { type: String, default: "" } }],
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date },
      },
    ],
    // Timeline Events
    events: [
      {
        eventDate: {
          type: Date,
          required: true,
        },
        eventTitle: {
          type: String,
          required: true,
        },
        eventDescription: {
          type: String,
          required: true,
        },
        createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
    // Comments
    comments: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date },
      },
    ],
    // Reactions
    reactions: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        type: {
          type: String,
          enum: ["heart", "candle", "flower", "prayer"],
          default: "heart",
        },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    // Memorial Creator
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Status option 1
    isPublic: { type: Boolean, default: false },
    isPrivate: { type: Boolean, default: true },
 // status option 2 
     visibility : {
    type: String,
    enum: ["public", "private"],
    default: "private"
  },
  },
  
  
  { timestamps: true }

);

const Memorial =
  mongoose.models.Memorial || mongoose.model("Memorial", memorialSchema);

export default Memorial;
