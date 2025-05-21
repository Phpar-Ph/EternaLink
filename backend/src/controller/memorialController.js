import Memorial from "../model/memorialSchema.js";

export const createMemorial = async (req, res) => {
  try {
    const {
      name,
      birthdate,
      dateOfDeath,
      biography,
      profilePhoto,
      coverPhoto,
      photos,
    } = req.body;

    const userId = req.userId;

    const newMemorial = new Memorial({
      name,
      birthdate,
      dateOfDeath,
      biography,
      profilePhoto,
      coverPhoto,
      photos,
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

export const getUserMemorials = async (req, res) => {
  try {
    const userId = req.userId;

    const userWithPosts = await User.findById(userId).populate("posts");

    res.json({
      success: true,
      memorials: userWithPosts.posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user memorials",
      error: error.message,
    });
  }
};
