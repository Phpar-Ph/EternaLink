import Memorial from "../model/memorialSchema.js";
import cloudinary from "../config/cloudinary.js";

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
    const uploadProfilePhoto = await cloudinary.uploader.upload(profilePhoto);
    const uploadCoverPhto = await cloudinary.uploader.upload(coverPhoto);

    const newMemorial = new Memorial({
      name,
      birthDate,
      datePassing,
      relationship,
      location,
      profilePhoto: uploadProfilePhoto.secure_url,
      coverPhoto: uploadCoverPhto.secure_url,
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

export const getMemorialProfileData = async (req, res) => {
  try {
    const memorial = await Memorial.findById(req.params.id);

    if (!memorial) {
      return res.status(404).json({
        success: false,
        message: "Memorial not found",
      });
    }

    return res.json({
      success: true,
      memorial,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create biography
export const createBiography = async (req, res) => {
  const { id } = req.params;
  const { biography } = req.body;
  try {
    if (!biography) {
      return res.status(400).json({
        success: false,
        message: "Biography text is required.",
      });
    }

    const memorial = await Memorial.findByIdAndUpdate(
      id,
      {
        biography: {
          text: biography,
          createdAt: new Date(),
        },
      },
      { new: true }
    );

    if (!memorial) {
      return res.status(404).json({
        success: false,
        message: "Memorial not found",
      });
    }
    const newMemorial = new Memorial({
      biography,
    });

    return res.status(200).json({
      success: true,
      message: "Biography created successfully",
      memorial,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Edit Biography
export const updateBiography = async (req, res) => {
  const { memorialId } = req.params;
  const { text } = req.body;
  try {
    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Biography text is required.",
      });
    }

    const updatedMemorial = await Memorial.findByIdAndUpdate(
      memorialId,
      { biography: { text, createdAt: new Date() } },
      { new: true }
    );

    if (!updatedMemorial) {
      return res.status(404).json({
        success: false,
        message: "Memorial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Biography updated successfully",
      memorial: updatedMemorial,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// add Photo
export const addPhotos = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Photo URL is required.",
      });
    }

    const memorial = await Memorial.findByIdAndUpdate(
      id,
      {
        $push: {
          photos: {
            url,
            uploadedAt: new Date(),
          },
        },
      },
      { new: true }
    );

    if (!memorial) {
      return res.status(404).json({
        success: false,
        message: "Memorial not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Photo added successfully",
      memorial,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message || "Memorial not found",
    });
  }
};

export const createTimeline = async (req, res) => {
  const { memorialId } = req.params;
  const userId = req.userId;
  const { text } = req.body;
  try {
    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Biography text is required.",
      });
    }

    const memorial = await Memorial.findByIdAndUpdate(
      memorialId,
      {
        $push: {
          biography: { userId, text, createdAt: new Date() },
        },
      },
      { new: true }
    );

    if (!memorial) {
      return res.status(404).json({
        success: false,
        message: "Memorial not found",
      });
    }
    const newMemorial = new Memorial({
      biography,
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
