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
      message,
    } = req.body;
    if (
      !name ||
      !birthDate ||
      !relationship ||
      !datePassing ||
      !location ||
      !profilePhoto ||
      !coverPhoto ||
      !message
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

export const getMemorialProfile = async (req, res) => {
  try {
    const { id } = req.params;

    // Then find all memorials created by this user
    // Find memorial by ID and populate necessary fields
    const memorial = await Memorial.findById(id)
      .select(
        "name birthDate datePassing location createdAt relationship profilePhoto coverPhoto biography event eventTitle eventDate eventDescription createdBy"
      )
      .populate("createdBy", "name email");

    if (!memorial) {
      return res.status(404).json({
        success: false,
        message: "Memorial not found",
      });
    }

    return res.status(200).json({
      success: true,
      memorial,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message || "Memorial not found",
    });
  }
};
