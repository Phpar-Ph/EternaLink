import Memorial from "../model/memorialSchema.js";

export const createMemorial = async (req, res) => {
  try {
    const {
      name,
      birthDate,
      relationship,
      datePassing,
      location,
      profilePhoto,
      coverPhoto,
      biography,
      eventTitle,
      eventDate,
      eventDescription,
      message,
    } = req.body;
    if (
      !name ||
      !birthDate ||
      !relationship ||
      !datePassing ||
      !location ||
      !profilePhoto ||
      !coverPhoto
    ) {
      return res.json({
        success: false,
        message: "Please fill up",
      });
    }
    const userId = req.userId;

    const newMemorial = new Memorial({
      name,
      birthDate,
      datePassing,
      relationship,
      location,
      profilePhoto,
      coverPhoto,
      message,
      biography,
      event: [eventTitle, eventDate, eventDescription],
      createdBy: userId,
    });

    const saved = await newMemorial.save();

    res.status(201).json({
      success: true,
      message: "Memorial created successfully",
      memorial: saved,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addCommentToMemorial = async (req, res) => {
  try {
    const { memorialId } = req.params;
    const { comment } = req.body;
    const userId = req.userId;

    const memorial = await Memorial.findByIdAndUpdate(
      memorialId,
      {
        $push: {
          comments: { userId, comment, createdAt: new Date() },
        },
      },
      { new: true }
    );

    if (!memorial) {
      return res
        .status(404)
        .json({ success: false, message: "Memorial not found" });
    }

    res.json({ success: true, message: "Comment added", memorial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addReactionToMemorial = async (req, res) => {
  try {
    const { memorialId } = req.params;
    const { type } = req.body;
    const userId = req.userId;

    const memorial = await Memorial.findByIdAndUpdate(
      memorialId,
      {
        $push: {
          reactions: { userId, type, createdAt: new Date() },
        },
      },
      { new: true }
    );

    if (!memorial) {
      return res
        .status(404)
        .json({ success: false, message: "Memorial not found" });
    }

    res.json({ success: true, message: "Reaction added", memorial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
